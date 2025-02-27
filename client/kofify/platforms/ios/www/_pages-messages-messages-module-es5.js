function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-messages-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf=\"chats && chats.length == 0\">\n        <ion-label padding>{{'no_messages' | translate }}</ion-label>\n    </div>\n    <ion-list *ngIf=\"!chats\">\n        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    <ion-list *ngIf=\"chats && chats.length > 0\">\n        <ion-item *ngFor=\"let chat of chats\" (click)=\"goToChat(chat, $event)\">\n          <ion-avatar id=\"chat-img-{{chat.id}}\" class=\"user-message-img user-message-img-show\" slot=\"start\">\n            <img \n            class=\"user-img\"\n            (load)=\"loadImg($event)\" \n            onError=\"this.src='../../assets/imgs/user.svg';\"             \n            src=\"{{chat.img}}\" />\n          </ion-avatar>\n          <ion-label class=\"chat-name\">\n            <h3>{{chat.name}}</h3>\n            <p *ngIf=\"chat.lastMessage\" [class.notReadMessage]=\"chat.lastMessage.readBy.indexOf(user?.id) == -1\">{{chat.lastMessage.content}}</p>\n          </ion-label>\n          <div class=\"not-read-checker\" *ngIf=\"chat.lastMessage.readBy.indexOf(user?.id) == -1\">&bull;</div>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/_pages/messages/messages.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/_pages/messages/messages.module.ts ***!
    \****************************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcApp_pagesMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
      return MessagesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/_pages/messages/messages.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }];

    var MessagesPageModule = function MessagesPageModule() {
      _classCallCheck(this, MessagesPageModule);
    };

    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })], MessagesPageModule);
    /***/
  },

  /***/
  "./src/app/_pages/messages/messages.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/_pages/messages/messages.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notReadMessage {\n  font-weight: bold;\n  color: #999; }\n\n.user-message-img {\n  background: #fff;\n  display: block;\n  -webkit-transition: all linear 0.3s;\n  transition: all linear 0.3s;\n  height: 45px;\n  width: 45px; }\n\n.not-read-checker {\n  color: #888;\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 21px;\n  margin-right: 17px; }\n\n.chat-name > h3 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n  overflow: hidden; }\n\n.user-message-img-hide {\n  opacity: 0; }\n\n.user-message-img-show {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9rb2ZpZnkvc3JjL2FwcC9fcGFnZXMvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFJZjtFQUVJLGdCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9fcGFnZXMvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdFJlYWRNZXNzYWdle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG5cbi51c2VyLW1lc3NhZ2UtaW1ne1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG4gICAgYmFja2dyb3VuZDogI2ZmZiA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjNzO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbn1cbi5ub3QtcmVhZC1jaGVja2Vye1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTdweDtcbn1cbi5jaGF0LW5hbWU+aDN7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4udXNlci1tZXNzYWdlLWltZy1oaWRle1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi51c2VyLW1lc3NhZ2UtaW1nLXNob3cge1xuICAgIG9wYWNpdHk6IDE7XG5cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/_pages/messages/messages.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/_pages/messages/messages.page.ts ***!
    \**************************************************/

  /*! exports provided: MessagesPage */

  /***/
  function srcApp_pagesMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
      return MessagesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/chat */
    "./src/app/_models/chat.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/chat.service */
    "./src/app/_services/chat.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MessagesPage =
    /*#__PURE__*/
    function () {
      function MessagesPage(router, authService, loadCtrl, chatService, zone) {
        var _this = this;

        _classCallCheck(this, MessagesPage);

        this.router = router;
        this.authService = authService;
        this.loadCtrl = loadCtrl;
        this.chatService = chatService;
        this.zone = zone;
        this.chatService.notificationCount.next(0);
        this.authService.currentUser.subscribe(function (user) {
          _this.user = user;
        });
      }

      _createClass(MessagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // let imgs = document.getElementsByClassName('user-img')
          // for(var index = 0; index < imgs.length; index++) {
          //   const element = imgs[index];
          //   element.classList.remove('imgLoaded')
          //   element.classList.add('imgInLoading')
          // }
          this.getChats();
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"];
          })).subscribe(function (route) {
            return _this2.getChats();
          });
          this.chatService.updateChatSubject.subscribe(function (e) {
            return _this2.getChats();
          });
        }
      }, {
        key: "getChats",
        value: function getChats() {
          var _this3 = this;

          if (this.chatSubscription != null) this.chatSubscription.unsubscribe();
          this.chatSubscription = this.chatService.getChats().subscribe(function (response) {
            _this3.zone.run(function () {
              return _this3.chats = src_app_models_chat__WEBPACK_IMPORTED_MODULE_2__["ChatMapper"].fromJsonArray(response['chats']);
            });
          });
        }
      }, {
        key: "goToChat",
        value: function goToChat(chat) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var image, loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!chat.enabled) {
                      _context.next = 5;
                      break;
                    }

                    this.chatService.setActiveChat(chat);
                    this.router.navigate(['/chat', chat.id]);
                    _context.next = 11;
                    break;

                  case 5:
                    image = document.getElementById('chat-img-' + chat.id);
                    _context.next = 8;
                    return this.loadCtrl.create();

                  case 8:
                    loader = _context.sent;
                    loader.present();
                    this.chatService.unlock(chat).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                      return loader.dismiss();
                    })).subscribe(function (_chat) {
                      image.classList.remove('user-message-img-show');
                      image.classList.add('user-message-img-hide');
                      chat.img = _chat.img;
                      chat.enabled = _chat.enabled;
                      setTimeout(function () {
                        image.classList.add('user-message-img-show');
                        image.classList.remove('user-message-img-hide');

                        _this4.chatService.setActiveChat(chat);

                        _this4.router.navigate(['/chat', chat.id]);
                      }, 1000);
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadImg",
        value: function loadImg($event) {// this.zone.run(()=>{
          //   $event.target.classList.remove('imgInLoading')
          //   $event.target.classList.add('imgLoaded')
          // })
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // always unsubscribe your subscriptions to prevent leaks
          this.chatSubscription.unsubscribe();
        }
      }]);

      return MessagesPage;
    }();

    MessagesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.page.scss */
      "./src/app/_pages/messages/messages.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], MessagesPage);
    /***/
  }
}]);
//# sourceMappingURL=_pages-messages-messages-module-es5.js.map