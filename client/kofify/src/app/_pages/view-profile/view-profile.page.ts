import { Component, OnInit } from '@angular/core';
import { User, UserMapper, LocalizedUser } from 'src/app/_models/user';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/_services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/_services/chat.service';
import { CoffeeService } from 'src/app/_services/coffe.service';
import { ToastService } from 'src/app/_services/toast.service';
import { ChatMapper } from 'src/app/_models/chat';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { timeSince, isOnline, getFormattedDistance } from 'src/app/_utils/functions';
import { finalize } from 'rxjs/operators';

const INVITATION_SENT = 'invitation_sent'
const OF_DISTANCE_KEY = "of_distance"

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfileComponent implements OnInit {
  user: User
  isOnline: boolean
  id: string
  distance = ''
   // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
   slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    private modalCtrl:ModalController,
    private chatService: ChatService,
    private coffeeService: CoffeeService,
    private loaderCtrl: LoadingController,
    private toastService: ToastService,
    private location: Location,
    private userService: UserService,
    private router: Router,
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
      this.userService.getUserById(this.id).subscribe(response=>{
        this.user = UserMapper.fromJson(response['user'])
        if(response['user']['distance']){
          const distance = getFormattedDistance(response['user']['distance'])
          if(distance.length > 0)
            this.translateService.get(OF_DISTANCE_KEY).subscribe(value=>{
              this.distance =  `${distance} ${value}`
            })
        }
        this.isOnline = this.user.online
      })
    })
  }
  



  async invite(){
    let loader = await this.loaderCtrl.create()
    loader.present()
    this.coffeeService
        .sendInvitation([this.id])
        .pipe(finalize(()=>loader.dismiss()))
        .subscribe(response=>{
          this.toastService.toastSuccess( INVITATION_SENT )
        })
  }

  async chat(){
    let loader = await this.loaderCtrl.create()
    loader.present()
    this.chatService
    .findOrCreate([this.id])
    .pipe(finalize(()=>loader.dismiss()))
    .subscribe(data=>{
      let chat = ChatMapper.fromJson(data['chat'])
      this.chatService.setActiveChat(chat)
      this.router.navigate(['/chat', chat.id])
    })
  }


  dismiss(){
    this.modalCtrl.dismiss()
  }

}
