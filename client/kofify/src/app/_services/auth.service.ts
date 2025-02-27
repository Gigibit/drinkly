import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { BehaviorSubject, Observable, of } from  'rxjs';
import { AUTH_SERVER } from '../config';
import { User, UserMapper } from '../_models/user';
import { map, finalize } from 'rxjs/operators';

const TOKEN_KEY = 'auth-token';

const REGISTER_URL = AUTH_SERVER + '/public/users'
const LOGIN_URL = AUTH_SERVER + '/oauth/token'
const LOGOUT_URL = AUTH_SERVER + '/users/me/logout'
const USER_INFO = AUTH_SERVER + '/users/me'

//TODO: replace localstorage with nativestorage
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authToken : string
  authenticationState = new BehaviorSubject(false);
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.authToken = localStorage.getItem(TOKEN_KEY)
  }
  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  nativeLogin(email: string, password: string) {
    return this.login(`username=${email}&password=${password}&grant_type=password`)
  }
  facebookLogin(token: string){
    return this.login(`access_token=${token}&grant_type=social&network=facebook`)
  }
  
  
  login (loginParams: any) : Observable<String>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization' : 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA=='
      })
    };
    return this.http.post<string>(LOGIN_URL, loginParams, httpOptions)
    .pipe(map(response => {
      let token = response['access_token']
      // login successful if there's a jwt token in the response
      if (token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(TOKEN_KEY, token);
        
        this.authToken = token;
      }
      return token;
    }));
  }
  refreshCredit(creditResponse){
    let admobCredit = creditResponse && creditResponse['admobCredit']
    let admobRewardAvailable = admobCredit && creditResponse['count'] < creditResponse['countMax'];
    this.currentUserValue.credits = creditResponse && creditResponse['credits']
    this.currentUserValue.rewardAvailable = admobRewardAvailable
    this.currentUserSubject.next(this.currentUserValue)
  }
  
  userInfo(): Observable<User>{
    return this.http.get<User>(USER_INFO)
    .pipe(map(response=>{
      console.log('userInfo',response)
      let user = response && 
                  response['context'] && 
                  response['context']['user'] && 
                  UserMapper.fromJson(response['context']['user'])
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }))
    
  }
  
  
  refreshCurrentUser(){
    localStorage.setItem('currentUser', JSON.stringify(this.currentUserValue));
    this.currentUserSubject.next(this.currentUserValue);
  }
  
  contextRefresh(user:User){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  
  logout() {
    console.log('logout-->')
    // remove user from local storage to log user out
    return this.http.post(LOGOUT_URL,{}).pipe(finalize(()=>{
      console.log('finalize called')
      localStorage.removeItem('currentUser');
      localStorage.removeItem(TOKEN_KEY);
      this.authToken = null;
      this.currentUserSubject.next(null);
      location.reload(true);
    }))
  }
  
  register(form){
    return this.http.post(REGISTER_URL, form)
  }
  
  
  isAuthenticated() {
    return this.authenticationState.value;
  }
}
