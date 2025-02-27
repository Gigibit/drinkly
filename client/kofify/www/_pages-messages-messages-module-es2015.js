(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf=\"chats && chats.length == 0\">\n        <ion-label padding>{{'no_messages' | translate }}</ion-label>\n    </div>\n    <ion-list *ngIf=\"!chats\">\n        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n        <ion-item *ngFor=\"let chat of chats\" (click)=\"goToChat(chat, $event)\">\n            <img \n            class=\"user-img\"\n            (load)=\"loadImg($event)\"\n            (click)=\"$event.stopPropagation(); viewProfile(chat.users[0].user.id)\"\n            onError=\"this.src='../../assets/imgs/user.svg';\"             \n            src=\"{{chat.img}}\" />\n          <ion-label class=\"chat-name\">\n            <h3>{{chat.name}}</h3>\n            <p *ngIf=\"chat.lastMessage\" [class.notReadMessage]=\"chat.lastMessage.readBy.indexOf(user?.id) == -1\">{{chat.lastMessage.content}}</p>\n          </ion-label>\n          <div class=\"not-read-checker\" *ngIf=\"chat.lastMessage.readBy.indexOf(user?.id) == -1\"></div>\n        </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/_pages/messages/messages.module.ts":
/*!****************************************************!*\
  !*** ./src/app/_pages/messages/messages.module.ts ***!
  \****************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/_pages/messages/messages.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }
];
let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "./src/app/_pages/messages/messages.page.scss":
/*!****************************************************!*\
  !*** ./src/app/_pages/messages/messages.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notReadMessage {\n  font-weight: bold;\n  color: #999; }\n\n.user-message-img {\n  background: #fff;\n  display: block;\n  -webkit-transition: opacity linear 0.3s;\n  transition: opacity linear 0.3s;\n  height: 45px;\n  width: 45px;\n  border-radius: 100%;\n  background-size: 100%; }\n\n.not-read-checker {\n  background: red;\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  width: 5px;\n  height: 5px;\n  border-radius: 100%;\n  padding: 0; }\n\n.chat-name > h3 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n  overflow: hidden; }\n\n.user-img {\n  width: 40px;\n  height: 40px;\n  margin-right: 8px;\n  border-radius: 100%; }\n\n.user-message-img-hide {\n  opacity: 0.3; }\n\n.user-message-img-show {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9zcmMvYXBwL19wYWdlcy9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUlmO0VBQ0ksZ0JBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX3BhZ2VzL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RSZWFkTWVzc2FnZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuXG4udXNlci1tZXNzYWdlLWltZ3tcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGxpbmVhciAwLjNzO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi5ub3QtcmVhZC1jaGVja2Vye1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmNoYXQtbmFtZT5oM3tcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXItaW1ne1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4udXNlci1tZXNzYWdlLWltZy1oaWRle1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuLnVzZXItbWVzc2FnZS1pbWctc2hvdyB7XG4gICAgb3BhY2l0eTogMTtcblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/_pages/messages/messages.page.ts":
/*!**************************************************!*\
  !*** ./src/app/_pages/messages/messages.page.ts ***!
  \**************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/chat */ "./src/app/_models/chat.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/chat.service */ "./src/app/_services/chat.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let MessagesPage = class MessagesPage {
    constructor(router, authService, loadCtrl, chatService, zone) {
        this.router = router;
        this.authService = authService;
        this.loadCtrl = loadCtrl;
        this.chatService = chatService;
        this.zone = zone;
        this.chatService.notificationCount.next(0);
        this.authService.currentUser.subscribe(user => {
            this.user = user;
        });
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"] && event.url === '/tabs/messages')).subscribe((route) => this.getChats());
        this.chatService.updateChatSubject.subscribe((e) => this.getChats());
    }
    ionViewWillLeave() {
    }
    getChats() {
        this.chats = null;
        if (this.chatSubscription != null)
            this.chatSubscription.unsubscribe();
        this.chatSubscription = this.chatService.getChats().subscribe(response => {
            this.zone.run(() => this.chats = src_app_models_chat__WEBPACK_IMPORTED_MODULE_2__["ChatMapper"].fromJsonArray(response['chats']));
        });
    }
    goToChat(chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (chat.enabled) {
                this.chatService.setActiveChat(chat);
                this.router.navigate(['/chat', chat.id]);
            }
            else {
                let image = document.getElementById('chat-img-' + chat.id);
                let loader = yield this.loadCtrl.create();
                loader.present();
                this.chatService.unlock(chat)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loader.dismiss()))
                    .subscribe(_chat => {
                    if (image != null) {
                        image.classList.remove('user-message-img-show');
                        image.classList.add('user-message-img-hide');
                    }
                    chat.img = _chat.img;
                    chat.enabled = _chat.enabled;
                    setTimeout(() => {
                        if (image != null) {
                            image.classList.add('user-message-img-show');
                            image.classList.remove('user-message-img-hide');
                        }
                        this.chatService.setActiveChat(chat);
                        this.router.navigate(['/chat', chat.id]);
                    }, 1000);
                });
            }
        });
    }
    viewProfile(id) {
        this.router.navigate(['view-profile', id]);
    }
    loadImg($event) {
        this.zone.run(() => {
        });
    }
    ngOnDestroy() {
        // always unsubscribe your subscriptions to prevent leaks
        this.chatSubscription.unsubscribe();
    }
};
MessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.page.scss */ "./src/app/_pages/messages/messages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], MessagesPage);



/***/ })

}]);
//# sourceMappingURL=_pages-messages-messages-module-es2015.js.map