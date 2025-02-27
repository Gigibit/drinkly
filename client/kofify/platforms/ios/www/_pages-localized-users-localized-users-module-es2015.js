(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-localized-users-localized-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/localized-users/localized-users.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/localized-users/localized-users.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"filter()\">\n      <ion-icon name=\"ios-options\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  (click)=\"location.back()\">\n      <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"none-found-lbl\" *ngIf=\"!localizedUsers || localizedUsers.length <= 0\">\n    {{ 'no_localized_users_were_found' | translate }}\n  </div>\n  \n  <ion-grid *ngIf=\"localizedUsers && localizedUsers.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button fill=\"clear\" [class.compose]=\"compose\" class=\"compose-btn\" (click)=\"compose = !compose\">\n          <ion-label>{{ 'coffee_group' | translate }}</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-grid>\n        <ion-row>\n          <ion-col [class.compose]=\"compose\" class=\"localized-user-col\" size=\"6\" *ngFor=\"let localizedUser of localizedUsers\">\n            <ion-card style=\"--background: black\" class=\"white localized-user-card\" (click)=\"onLocalizedUserTap($event, localizedUser)\">\n              <span *ngIf=\"isOnline(localizedUser)\" class=\"online-badge\"></span>\n              <img \n              (load)=\"loadImg($event)\" \n              src=\"{{localizedUser.user.profileImg}}\" />\n              <div class=\"localized-user-img-shadow-layer\"></div>\n              <div class=\"card-title localized-user-info localized-user-name\">\n                <p class=\"name-lbl\">{{localizedUser.user.name}}, {{localizedUser.user.age}}</p>\n                <p class=\"distance-lbl\">{{distanceFromUser(localizedUser)}}</p>\n              </div>\n              \n              <!-- <div class=\"card-subtitle localized-user-info localized-user-age\"></div> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-button [class.compose]=\"compose\" class=\"multiple-invitation-btn\" (click)=\"invite()\">\n    <ion-icon name=\"cafe\"></ion-icon>\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/_pages/localized-users/localized-users.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/_pages/localized-users/localized-users.module.ts ***!
  \******************************************************************/
/*! exports provided: LocalizedUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedUsersPageModule", function() { return LocalizedUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_pages_localized_users_localized_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_pages/localized-users/localized-users.page */ "./src/app/_pages/localized-users/localized-users.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: src_app_pages_localized_users_localized_users_page__WEBPACK_IMPORTED_MODULE_6__["LocalizedUsersComponent"]
    }
];
let LocalizedUsersPageModule = class LocalizedUsersPageModule {
};
LocalizedUsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [src_app_pages_localized_users_localized_users_page__WEBPACK_IMPORTED_MODULE_6__["LocalizedUsersComponent"]]
    })
], LocalizedUsersPageModule);



/***/ }),

/***/ "./src/app/_pages/localized-users/localized-users.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/_pages/localized-users/localized-users.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".localized-user-img {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  margin: 0 auto;\n  z-index: 7; }\n\n.localized-user-card {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: auto; }\n\n.localized-user-img-shadow-layer {\n  width: 100%;\n  height: 30%;\n  z-index: 8;\n  position: absolute;\n  bottom: 0;\n  opacity: 0.8;\n  background: -webkit-gradient(linear, left bottom, left top, from(#020202), to(transparent));\n  background: linear-gradient(to top, #020202, transparent);\n  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.8);\n  -webkit-transition: height 0.5s ease-in-out;\n  transition: height 0.5s ease-in-out; }\n\n.localized-user-info {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  position: absolute;\n  text-shadow: 0px 5px 10px #000;\n  bottom: 0;\n  padding: 15px;\n  text-align: center;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  color: #fff; }\n\n.none-found-lbl {\n  text-align: center; }\n\n.localized-user-name {\n  font-size: 15px; }\n\n.online-badge {\n  position: absolute;\n  top: 5%;\n  right: 5%; }\n\nion-content {\n  margin-bottom: 30px; }\n\n.multiple-invitation-btn {\n  z-index: 99999999;\n  --border-radius: 50%;\n  position: fixed;\n  bottom: 25px;\n  width: 0px;\n  height: 0px;\n  left: 0;\n  right: 0;\n  font-size: 0px;\n  margin: 0 auto;\n  -webkit-transition: height 0.3s ease-in-out, width 0.3s ease-in-out, font-size 0.3s ease-in-out;\n  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, font-size 0.3s ease-in-out; }\n\n.compose-btn {\n  --background: transparent;\n  --color: #222;\n  margin: 0 auto;\n  border: 1px solid;\n  display: block; }\n\n.name-lbl {\n  margin: 0;\n  font-size: 3vw;\n  font-weight: bold; }\n\n.distance-lbl {\n  margin: 0;\n  font-size: 3vw; }\n\n.compose.compose-btn {\n  font-weight: bold;\n  --background: #956f5a;\n  --color: #fff; }\n\n.compose .card-selected .localized-user-img-shadow-layer {\n  background: -webkit-gradient(linear, left bottom, left top, from(#f5ece1), to(transparent));\n  background: linear-gradient(to top, #f5ece1, transparent);\n  height: 100%;\n  opacity: 1; }\n\n.compose.multiple-invitation-btn {\n  width: 100px;\n  height: 100px;\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9rb2ZpZnkvc3JjL2FwcC9fcGFnZXMvbG9jYWxpemVkLXVzZXJzL2xvY2FsaXplZC11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUVkO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUloQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsWUFBWTtFQUNaLDJGQUF5RDtFQUF6RCx5REFBeUQ7RUFDekQsaURBQTZDO0VBQzdDLDJDQUFtQztFQUFuQyxtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVMsRUFBQTs7QUFFYjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsY0FBYztFQUVkLGNBQWM7RUFDZCwrRkFBK0Y7RUFHL0YsdUZBQXVGLEVBQUE7O0FBRTNGO0VBQ0kseUJBQWE7RUFDYixhQUFRO0VBQ1IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksU0FBUztFQUNULGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxTQUFTO0VBQ1QsY0FBYyxFQUFBOztBQUVsQjtFQUVRLGlCQUFpQjtFQUNqQixxQkFBYTtFQUNiLGFBQVEsRUFBQTs7QUFKaEI7RUFXWSwyRkFBeUQ7RUFBekQseURBQXlEO0VBQ3pELFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBYnRCO0VBaUJRLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX3BhZ2VzL2xvY2FsaXplZC11c2Vycy9sb2NhbGl6ZWQtdXNlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2FsaXplZC11c2VyLWltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiA3O1xufVxuLmxvY2FsaXplZC11c2VyLWNhcmR7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIFxufVxuXG4ubG9jYWxpemVkLXVzZXItaW1nLXNoYWRvdy1sYXllcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB6LWluZGV4OiA4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAyMDIwMiwgdHJhbnNwYXJlbnQpOyBcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IC01cHggcmdiYSgwLDAsMCwuOCk7IFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9jYWxpemVkLXVzZXItaW5mb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtc2hhZG93OiAwcHggNXB4IDEwcHggIzAwMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLm5vbmUtZm91bmQtbGJse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhbGl6ZWQtdXNlci1uYW1le1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm9ubGluZS1iYWRnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICByaWdodDogNSU7XG59XG5pb24tY29udGVudHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm11bHRpcGxlLWludml0YXRpb24tYnRue1xuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDI1cHg7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIFxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dCwgZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uY29tcG9zZS1idG57XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMjIyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hbWUtbGJse1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXN0YW5jZS1sYmx7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xufVxuLmNvbXBvc2Uge1xuICAgICYuY29tcG9zZS1idG57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5NTZmNWE7XG4gICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5jYXJkLXNlbGVjdGVkeyBcbiAgICAgICAgLy8gLmxvY2FsaXplZC11c2VyLW5hbWV7XG4gICAgICAgIC8vICAgICBmb250LXNpemU6IDI0cHg7ICAgICAgICAgICAgXG4gICAgICAgIC8vIH1cbiAgICAgICAgLmxvY2FsaXplZC11c2VyLWltZy1zaGFkb3ctbGF5ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjVlY2UxLCB0cmFuc3BhcmVudCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgICYubXVsdGlwbGUtaW52aXRhdGlvbi1idG57XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbn1cblxuLy8gLmltZ0xvYWRlZCB7XG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuLy8gICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIEZpcmVmb3ggPCAxNiAqL1xuLy8gICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXG4vLyAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAxczsgLyogT3BlcmEgPCAxMi4xICovXG4vLyAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiAxcztcbi8vIH1cblxuXG4vLyAuaW1nSW5Mb2FkaW5ne1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/_pages/localized-users/localized-users.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/_pages/localized-users/localized-users.page.ts ***!
  \****************************************************************/
/*! exports provided: LocalizedUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedUsersComponent", function() { return LocalizedUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/coffe.service */ "./src/app/_services/coffe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_utils/functions */ "./src/app/_utils/functions.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/toast.service */ "./src/app/_services/toast.service.ts");
/* harmony import */ var src_app_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_components/filter/filter.component */ "./src/app/_components/filter/filter.component.ts");










// import { FilterComponent } from 'src/app/_components/filter/filter.component';
let LocalizedUsersComponent = class LocalizedUsersComponent {
    constructor(location, coffeeService, modalCtrl, toastService, router, modalController, zone) {
        this.location = location;
        this.coffeeService = coffeeService;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.router = router;
        this.modalController = modalController;
        this.zone = zone;
        this.invitationIds = [];
        this.compose = false;
    }
    ngOnInit() {
        this.localizedUsers = this.coffeeService.localizedUsers;
    }
    loadImg($event) {
        console.log($event);
        // this.zone.run(()=>{
        //   $event.target.classList.remove('imgInLoading')
        //   $event.target.classList.add('imgLoaded')
        // })
    }
    loadData(infiniteScroll) {
        setTimeout(() => {
            this.coffeeService.moreUsersOnLastUsers().subscribe();
            infiniteScroll.target.complete();
        }, 1000);
    }
    filter() {
        this.modalCtrl.create({
            component: src_app_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"]
        }).then(modal => {
            modal.present();
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    isOnline(localizedUser) {
        return localizedUser.user.online;
    }
    onLocalizedUserTap($event, localizedUser) {
        if (this.compose) {
            this.add($event, localizedUser);
        }
        else {
            this.viewProfile(localizedUser);
        }
    }
    viewProfile(localizedUser) {
        this.router.navigate(['view-profile', localizedUser.user.id]);
    }
    invite() {
        this.coffeeService.sendInvitation(this.invitationIds).subscribe(response => {
            this.toastService.alert('invitation_sent');
            var lights = document.getElementsByClassName("card-selected");
            while (lights.length)
                lights[0].classList.remove("card-selected");
            this.compose = false;
        });
    }
    distanceFromUser(localizedUser) {
        return Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__["getFormattedDistance"])(localizedUser.distance);
    }
    add($event, localizedUser) {
        $event.preventDefault();
        const element = $event.target.querySelector('ion-card');
        if (element.classList.contains('localized-user-card')) {
            if (element.classList.contains('card-selected')) {
                element.classList.remove('card-selected');
                this.invitationIds = Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__["removeObjectFromArray"])(this.invitationIds, localizedUser.user.id);
            }
            else {
                element.classList.add('card-selected');
                this.invitationIds.push(localizedUser.user.id);
            }
        }
    }
};
LocalizedUsersComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
LocalizedUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-localized-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./localized-users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/localized-users/localized-users.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadein', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('900ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slidelefttitle', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(150%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('900ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./localized-users.page.scss */ "./src/app/_pages/localized-users/localized-users.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], LocalizedUsersComponent);



/***/ })

}]);
//# sourceMappingURL=_pages-localized-users-localized-users-module-es2015.js.map