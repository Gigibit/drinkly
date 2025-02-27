import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { AuthService } from './auth.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { AUTH_SERVER, SERVICE_SERVER } from '../config';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx'
import { Platform } from '@ionic/angular';
import { User, UserMapper, UpdatableUserInfo } from '../_models/user';
import { concatMap, concat, finalize, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { PricingPlan, PricingPlanMapper } from '../_models/pricing-plan';
const ID = "%ID%"

const CONTEXT = AUTH_SERVER + '/api/get-context'
const UPLOAD_URL = SERVICE_SERVER + "/users/me/images"
const UPDATE_PROFILE_IMG_URL = SERVICE_SERVER + "/users/me/image"
const UPDATE_INFO = SERVICE_SERVER + "/users/me"
const GET_CREDITS = SERVICE_SERVER + "/users/me/credit"
const UPDATE_USER_ADDRESS = SERVICE_SERVER + "/users/position"
const SUBSCRIBE_TO_PUSH_URL = SERVICE_SERVER + "/notifications"
const GET_USER_BY_ID = SERVICE_SERVER + `/users/${ID}`

const ADMOB_REWARD = SERVICE_SERVER + "/users/me/admob"

const LIST_PLANS = SERVICE_SERVER + "/users/me/products"

const DELETE_ACCOUNT = SERVICE_SERVER + "/users/me"

const FINALIZE_PAYMENT = SERVICE_SERVER + "/users/me/buy"

const DELETE_IMAGE = SERVICE_SERVER + `/users/me/images/${ID}`

const STORAGE_KEY = 'experience_key_img';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  contentType = 'image/png';
  fileTransfer: FileTransferObject = this.transfer.create();
  lastPlans : PricingPlan[] = []
  constructor(
    private http : HttpClient,
    private transfer: FileTransfer,
    private platform: Platform,
    private camera: Camera,
    private auth: AuthService
    ) {}
    
    getContext(){
      return this.http.get( CONTEXT )
    }
    
    getUserById(id: string){
      return this.http.get( GET_USER_BY_ID.replace(ID, id))
    }
    
    updateInfo(info:UpdatableUserInfo){
      return this.http.post(UPDATE_INFO, {
        bio: info.bio,
        gender: info.gender,
        imageIds: info.imageIds
      }).pipe(concatMap( response => {
        let user = response && 
        response['context'] && 
        response['context']['user'] && 
        UserMapper.fromJson(response['context']['user'])
        if(user)
        this.auth.contextRefresh(user)
        return of(response)
      }))
    }
    
    deleteImage(imageId:string){
      return this.http.request('DELETE', DELETE_IMAGE.replace(ID, imageId), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }).pipe(concatMap( response => {
        let user = response && 
        response['context'] && 
        response['context']['user'] && 
        UserMapper.fromJson(response['context']['user'])
        if(user)
          this.auth.contextRefresh(user)
        return of(response)
      })).toPromise()
    }
    
    
    uploadImage(index: number, sourceType: PictureSourceType) : Promise<User> {
      return new Promise<User>((resolve, reject)=>{
        if(index > 3) return;
        var options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          allowEdit: true,
          targetWidth: 1080,
          targetHeight: 1226,
          correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
          if (this.platform.is('mobileweb') || this.platform.is('desktop'))
          {
            imageData = "data:image/jpeg;base64," + imageData;
            const formData = new FormData();
            const imgBlob = this.dataURItoBlob(imageData);
            formData.append('image', imgBlob, this.createFileName());
            this.uploadImageData(UPLOAD_URL + `/${index}`, formData, (user, response)=>{
              if(!user.images){
                user.images = new Array(3)
              }
              user.images[index - 1 ] = response['url']
              user.imageIds[index - 1 ] = response['id']
              return user;
            })
            .then((user)=>resolve(user))
            .catch((err)=>reject(err));
          }
          else{
            this.uploadUri(UPLOAD_URL + `/${index}`, imageData, (user, response)=>{
              if(!user.images){
                user.images = new Array(3)
              }
              user.images[index - 1 ] = response['url']
              user.imageIds[index - 1 ] = response['id']
              return user;
            })           
            .then((user)=>resolve(user))
            .catch((err)=>reject(err));
          }
          
        }, err=>{
          reject(err)
        });
      })
      
    }
    
    getCredits(){
      return this.http.get(GET_CREDITS).pipe(concatMap(response =>{
        let credits = response['credit'] && response['credit']['credits']
        return of(credits)
      }))
    }
    
    udateProfileImg(sourceType: PictureSourceType, onUri: (string)=>void = null, onError: (error)=>void = null):Promise<User> {
      return new Promise((resolve, reject)=>{
        var options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          targetWidth: 400,
          targetHeight: 400,
          correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
          if (this.platform.is('mobileweb') || this.platform.is('desktop'))
          {
            imageData = "data:image/jpeg;base64," + imageData;
            const formData = new FormData();
            const imgBlob = this.dataURItoBlob(imageData);
            formData.append('image', imgBlob, this.createFileName());
            this.uploadImageData(UPDATE_PROFILE_IMG_URL, formData, (user,response)=>{
              console.log('image successful updated -->' + response['url'] )
              user.profileImg = response['url']
              return user
            }) .then((user)=>resolve(user))
            .catch((err)=>reject(err));
          }
          else{
            this.uploadUri(UPDATE_PROFILE_IMG_URL, imageData, (user,response)=>{
              console.log('image successful updated -->' + response['url'] )
              user.profileImg = response['url']
              return user
            }).then((user)=>resolve(user))
            .catch((err)=>reject(err));;
          }
          
        }, err=>{
          reject(err)
        });
      })
      
    }
    
    
    //todo: check request whether is an profile or  generic image
    uploadUri(upload_url, uri, getUpdatedUser:(user:User,response: any)=>User): Promise<User>{
      return new Promise((resolve, reject)=>{
        let options: FileUploadOptions = {
          fileKey: 'image',
          chunkedMode: false,
          mimeType: "image/jpeg",
          headers: {
            'Authorization' : 'Bearer ' + this.auth.authToken
          },
          fileName :  this.createFileName()
        }
        this.fileTransfer.upload(encodeURI(uri), upload_url, options)
        .then(data=>{
          console.log(data)
          console.log('image successful updated -->', JSON.parse(data.response) )
          let user = getUpdatedUser(this.auth.currentUserValue, JSON.parse(data.response))
          console.log('user in upload image data-->', user)
          this.auth.contextRefresh(user)
          resolve(user)
        })
        .catch( (err) => reject(err));
      })
      
    }
    uploadImageData(upload_url, formData: FormData, getUpdatedUser:(user:User,response: any)=>User) : Promise<User> {
      return new Promise<User>((resolve, reject)=>{
        this.http.post(upload_url, formData ).subscribe(__response => {
          let user = getUpdatedUser(this.auth.currentUserValue, __response)
          console.log('user in upload image data-->', user)
          this.auth.contextRefresh(user)
          resolve(user)
        }, throwable=> reject(throwable));
      })
    }
    
    subscribeToPushNotifications(id:string, pushToken: string){
      return this.http.post(SUBSCRIBE_TO_PUSH_URL, {
        id: id,
        pushToken: pushToken
      })
    }
    
    
    dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
      else
      byteString = unescape(dataURI.split(',')[1]);
      
      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      
      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      
      return new Blob([ia], {type:mimeString});
    }
    createFileName() {
      var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
      return newFileName;
    }
    
    
    updateAddress(address : string, latitude: number, longitude: number){
      return this.http.post(UPDATE_USER_ADDRESS, { address : address, latitude: latitude, longitude: longitude })
    }
    
    notifyVideoReward(){
      return this.http.post(ADMOB_REWARD, {})
    }
    setPlans( plans: PricingPlan[]){
      this.lastPlans = plans
    }
    listPlans(): Observable<PricingPlan[]>{
      return this.http.get(LIST_PLANS).pipe(concatMap(response=> {
        if( response && response['products']){
          this.lastPlans = PricingPlanMapper.fromJsonArray(response['products'])
          return of(this.lastPlans)
        }
        else return null;
      }))
    }
    
    finalizePayment(data){
      return this.http.post(FINALIZE_PAYMENT, data)
    }
    
    deleteAccount(reason: String){
      return this.http.request('DELETE', DELETE_ACCOUNT, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: { reason: reason }
      }).pipe(finalize(()=>this.auth.logout().subscribe()));
    }
  }
  
  