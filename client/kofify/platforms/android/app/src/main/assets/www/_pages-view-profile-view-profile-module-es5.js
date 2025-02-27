function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-view-profile-view-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/view-profile/view-profile.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/view-profile/view-profile.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesViewProfileViewProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <!-- <ion-title class=\"ion-text-center\">\n      {{'register_page_title'| translate}}\n    </ion-title> -->\n    <!-- <ion-buttons slot=\"end\">\n      <ion-icon class=\"dots\" (click)=\"userPopover($event)\" name=\"more\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <div class=\"userInfo\" *ngIf=\"user\">\n    <ion-avatar id=\"profileImage\">\n      <img \n      onError=\"this.src='../../assets/imgs/user.svg';\"       \n      [src]=\"user.profileImg\" />\n    </ion-avatar>\n    <ion-label class=\"user-name\">{{user.name}}</ion-label>\n  </div> -->\n  <ion-slides *ngIf=\"!user\" #slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-skeleton-text class=\"fake-slide\" animated></ion-skeleton-text>\n    </ion-slide>\n  </ion-slides>\n  <ion-slides *ngIf=\"user\">\n    <ion-slide *ngFor=\"let img of user.images\" class=\"user-img\">\n      <div class=\"slide-container\">\n          <img [src]=\"img\"/>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <!-- <div class=\"userInfo\" *ngIf=\"!user\">\n    <ion-avatar class=\"profileImageSkeleton\" slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n    <ion-skeleton-text class=\"user-name skeleton\" animated></ion-skeleton-text>\n  </div> -->\n  <div class=\"half-page-wrapper\">\n    <div class=\"localized-user-btn-wrp\">\n      <ion-button slot=\"start\" (click)=\"invite()\" class=\"invite-btn localized-user-btn\">\n        <ion-icon name=\"cafe\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" (click)=\"chat()\" class=\"send-btn localized-user-btn\">\n        <ion-icon name=\"chatbubbles\"></ion-icon>\n      </ion-button>\n    </div>\n    \n    <ion-label *ngIf=\"user\" class=\"user-info-text\">\n        <div class=\"user-info-text-name\">{{user?.name +  ( user?.age ? ',' : '' ) }}<p class=\"user-info-text-age\">{{user?.age}}</p></div> \n      </ion-label>\n    <ion-label *ngIf=\"distance\" class=\"user-info-text\">\n      <ion-icon name=\"pin\"></ion-icon>{{ distance }}\n    </ion-label>\n    <ion-label class=\"user-info-text\" *ngIf=\"isOnline\">\n      <ion-icon class=\"online-badge\"></ion-icon> Online\n    </ion-label>\n    <ion-label class=\"user-info-text\">\n        <p>{{user?.bio}}</p>\n    </ion-label>\n    \n  </div>\n  <!-- <span class=\"coffee-stain\" *ngIf=\"user && ( !user.images || user.images.length == 0 )\"></span> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/_pages/view-profile/view-profile.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/_pages/view-profile/view-profile.module.ts ***!
    \************************************************************/

  /*! exports provided: ViewProfilePageModule */

  /***/
  function srcApp_pagesViewProfileViewProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function () {
      return ViewProfilePageModule;
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


    var _view_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-profile.page */
    "./src/app/_pages/view-profile/view-profile.page.ts");

    var routes = [{
      path: '',
      component: _view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfileComponent"]
    }];

    var ViewProfilePageModule = function ViewProfilePageModule() {
      _classCallCheck(this, ViewProfilePageModule);
    };

    ViewProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfileComponent"]]
    })], ViewProfilePageModule);
    /***/
  },

  /***/
  "./src/app/_pages/view-profile/view-profile.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/_pages/view-profile/view-profile.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesViewProfileViewProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#profileImage {\n  width: 80px;\n  height: 80px;\n  margin: 30px auto;\n  border: 2px solid #222; }\n\nion-content {\n  --background: #fff; }\n\n.user-gallery {\n  -webkit-transition: height 2s ease-in;\n  /* Safari prior 6.1 */\n  -webkit-transition: height 2s ease-out;\n  transition: height 2s ease-out; }\n\n.user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block; }\n\n.userInfo {\n  border-bottom: 2px solid;\n  border-radius: 50%;\n  padding: 0px 30px 30px 30px;\n  background: #FDF9F1;\n  box-shadow: 0 4px 2px -2px gray;\n  -webkit-box-shadow: 0 4px 2px -2px gray;\n  -moz-box-shadow: 0 4px 2px -2px gray;\n  margin-bottom: 20px;\n  padding-bottom: 20px; }\n\n.dots {\n  float: right; }\n\n.gallery {\n  padding: 30px; }\n\n.half-page-wrapper {\n  position: relative;\n  width: 100%;\n  bottom: 0;\n  background: #fff;\n  z-index: 999999999;\n  border-top-left-radius: 3%;\n  border-top-right-radius: 3%;\n  margin-top: -15px; }\n\n.user-info-text {\n  padding-left: 15px;\n  padding-right: 15px;\n  display: block; }\n\n.user-image {\n  width: 100%;\n  border-radius: 15px;\n  height: 100%; }\n\n.image-container-wrapper {\n  height: 33vw; }\n\n.image-container {\n  border-radius: 10px;\n  border: 2px solid #222;\n  height: 100%;\n  position: relative; }\n\n.localized-user-img {\n  background: #fff;\n  border-radius: 25%;\n  border: 2px solid #222; }\n\n.profileImageSkeleton {\n  width: 80px;\n  height: 80px;\n  margin: 30px auto;\n  border: 2px solid #222; }\n\n.fake-slide {\n  height: 450px;\n  width: 100%; }\n\n.user-name.skeleton {\n  width: 53%; }\n\n.localized-user-btn-wrp {\n  position: relative;\n  text-align: center; }\n\n.image-container {\n  background-size: cover; }\n\n.localized-user-img {\n  width: 90px;\n  height: 90px;\n  background: #fff;\n  border-radius: 50%;\n  border: 2px solid #222;\n  margin: 0 auto; }\n\n.localized-user-name {\n  font-size: 15px;\n  text-align: center;\n  margin: 0 auto;\n  display: block; }\n\n.user-img {\n  height: 57vh; }\n\n.localized-user-btn {\n  padding: 15px;\n  top: 0;\n  --border-radius: 50%;\n  width: 80px;\n  height: 80px; }\n\n.localized-user-btn.send-btn {\n  left: 21%; }\n\n.localized-user-btn.invite-btn {\n  left: 5%; }\n\n.user-info-text-age {\n  font-size: 15px;\n  display: table-cell;\n  padding-left: 15px; }\n\n.user-info-text-name {\n  font-size: 30px;\n  display: table; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9zcmMvYXBwL19wYWdlcy92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUsxQjtFQUNJLGtCQUFhLEVBQUE7O0FBRWpCO0VBQ0kscUNBQXFDO0VBQUUscUJBQUE7RUFDdkMsc0NBQThCO0VBQTlCLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksYUFDSixFQUFBOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBRWY7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxhQUFhO0VBQ2IsTUFBTTtFQUNOLG9CQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFFBQVEsRUFBQTs7QUFHWjtFQUNJLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBYztFQUNkLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlSW1hZ2V7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG4udXNlci1tZXNzYWdlLWltZ3tcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnVzZXItZ2FsbGVyeXtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlLWluOyAvKiBTYWZhcmkgcHJpb3IgNi4xICovXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2Utb3V0O1xufVxuLnVzZXItbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnVzZXJJbmZve1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGREY5RjE7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZG90c3tcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uZ2FsbGVyeXtcbiAgICBwYWRkaW5nOiAzMHB4XG59XG4uaGFsZi1wYWdlLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMyU7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4udXNlci1pbmZvLXRleHR7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlci1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1hZ2UtY29udGFpbmVyLXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAzM3Z3OyAgICBcbn1cbi5pbWFnZS1jb250YWluZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG4ucHJvZmlsZUltYWdlU2tlbGV0b257XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG4uZmFrZS1zbGlkZXtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItbmFtZS5za2VsZXRvbntcbiAgICB3aWR0aDogNTMlO1xufVxuLmxvY2FsaXplZC11c2VyLWJ0bi13cnB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxvY2FsaXplZC11c2VyLWltZ3tcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5sb2NhbGl6ZWQtdXNlci1uYW1le1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlci1pbWd7XG4gICAgaGVpZ2h0OiA1N3ZoO1xufVxuXG5cbi5sb2NhbGl6ZWQtdXNlci1idG57XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0b3A6IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIFxufVxuLmxvY2FsaXplZC11c2VyLWJ0bi5zZW5kLWJ0bntcbiAgICBsZWZ0OiAyMSU7XG59XG5cbi5sb2NhbGl6ZWQtdXNlci1idG4uaW52aXRlLWJ0bntcbiAgICBsZWZ0OiA1JTtcbn1cblxuLnVzZXItaW5mby10ZXh0LWFnZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gfVxuXG4gLnVzZXItaW5mby10ZXh0LW5hbWV7XG4gICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgICBkaXNwbGF5OiB0YWJsZTtcbiB9XG4gIl19 */";
    /***/
  },

  /***/
  "./src/app/_pages/view-profile/view-profile.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_pages/view-profile/view-profile.page.ts ***!
    \**********************************************************/

  /*! exports provided: ViewProfileComponent */

  /***/
  function srcApp_pagesViewProfileViewProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function () {
      return ViewProfileComponent;
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


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/chat.service */
    "./src/app/_services/chat.service.ts");
    /* harmony import */


    var src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/coffe.service */
    "./src/app/_services/coffe.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/_services/toast.service */
    "./src/app/_services/toast.service.ts");
    /* harmony import */


    var src_app_models_chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/_models/chat */
    "./src/app/_models/chat.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/_utils/functions */
    "./src/app/_utils/functions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var INVITATION_SENT = 'invitation_sent';
    var OF_DISTANCE_KEY = "of_distance";

    var ViewProfileComponent =
    /*#__PURE__*/
    function () {
      function ViewProfileComponent(modalCtrl, chatService, coffeeService, loaderCtrl, toastService, location, userService, router, translateService, route) {
        _classCallCheck(this, ViewProfileComponent);

        this.modalCtrl = modalCtrl;
        this.chatService = chatService;
        this.coffeeService = coffeeService;
        this.loaderCtrl = loaderCtrl;
        this.toastService = toastService;
        this.location = location;
        this.userService = userService;
        this.router = router;
        this.translateService = translateService;
        this.route = route;
        this.distance = ''; // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.

        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
      }

      _createClass(ViewProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');

            _this.userService.getUserById(_this.id).subscribe(function (response) {
              _this.user = src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["UserMapper"].fromJson(response['user']);

              if (response['user']['distance']) {
                var distance = Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_12__["getFormattedDistance"])(response['user']['distance']);
                if (distance.length > 0) _this.translateService.get(OF_DISTANCE_KEY).subscribe(function (value) {
                  _this.distance = "".concat(distance, " ").concat(value);
                });
              }

              _this.isOnline = _this.user.online;
            });
          });
        }
      }, {
        key: "invite",
        value: function invite() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loaderCtrl.create();

                  case 2:
                    loader = _context.sent;
                    loader.present();
                    this.coffeeService.sendInvitation([this.id]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                      return loader.dismiss();
                    })).subscribe(function (response) {
                      _this2.toastService.toastSuccess(INVITATION_SENT);
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "chat",
        value: function chat() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loaderCtrl.create();

                  case 2:
                    loader = _context2.sent;
                    loader.present();
                    this.chatService.findOrCreate([this.id]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                      return loader.dismiss();
                    })).subscribe(function (data) {
                      var chat = src_app_models_chat__WEBPACK_IMPORTED_MODULE_9__["ChatMapper"].fromJson(data['chat']);

                      _this3.chatService.setActiveChat(chat);

                      _this3.router.navigate(['/chat', chat.id]);
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }]);

      return ViewProfileComponent;
    }();

    ViewProfileComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]
      }, {
        type: src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_7__["CoffeeService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
      }];
    };

    ViewProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/view-profile/view-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-profile.page.scss */
      "./src/app/_pages/view-profile/view-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"], src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_7__["CoffeeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])], ViewProfileComponent);
    /***/
  }
}]);
//# sourceMappingURL=_pages-view-profile-view-profile-module-es5.js.map