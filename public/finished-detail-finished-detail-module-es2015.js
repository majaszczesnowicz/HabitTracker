(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finished-detail-finished-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finished-detail/finished-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finished-detail/finished-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color={{habit.color}}>\n    <ion-title>{{habit.name}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"restore()\"><ion-icon name=\"reload-outline\" style=\"zoom:1.6\"></ion-icon></ion-button>\n      <ion-button (click)=\"del(habit.id)\"><ion-icon name=\"trash-outline\" style=\"zoom:1.6\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item class={{habit.color}} *ngIf = \"ifDesc\">opis: {{habit.description}}</ion-item>\n  <ion-item class={{habit.color}} *ngIf = \"ifGoal\">cel: {{habit.goal}}</ion-item>\n  <ion-item class={{habit.color}} *ngIf = \"ifGoal\">czas trwania: {{habit.duration}}</ion-item>\n  <ion-item class={{habit.color}} *ngIf = \"ifGoal\">ile dni udało się trzymać nawyku: {{habit.successDays}}</ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/finished-detail/finished-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/finished-detail/finished-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FinishedDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedDetailPageRoutingModule", function() { return FinishedDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _finished_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finished-detail.page */ "./src/app/finished-detail/finished-detail.page.ts");




const routes = [
    {
        path: '',
        component: _finished_detail_page__WEBPACK_IMPORTED_MODULE_3__["FinishedDetailPage"]
    }
];
let FinishedDetailPageRoutingModule = class FinishedDetailPageRoutingModule {
};
FinishedDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinishedDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/finished-detail/finished-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/finished-detail/finished-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: FinishedDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedDetailPageModule", function() { return FinishedDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _finished_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finished-detail-routing.module */ "./src/app/finished-detail/finished-detail-routing.module.ts");
/* harmony import */ var _finished_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finished-detail.page */ "./src/app/finished-detail/finished-detail.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/pl */ "./node_modules/@angular/common/locales/pl.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_8__);










Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_8___default.a);
let FinishedDetailPageModule = class FinishedDetailPageModule {
};
FinishedDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _finished_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinishedDetailPageRoutingModule"]
        ],
        declarations: [_finished_detail_page__WEBPACK_IMPORTED_MODULE_6__["FinishedDetailPage"]],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pl-PL' }
        ]
    })
], FinishedDetailPageModule);



/***/ }),

/***/ "./src/app/finished-detail/finished-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/finished-detail/finished-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 18px;\n  margin: 16px;\n}\n\ndiv {\n  margin: 16px;\n}\n\n.primary {\n  font-size: 18px;\n  margin-top: 6px;\n  margin-left: 0px;\n  padding: 0px;\n  --border-color: #CFA4BF;\n}\n\n.secondary {\n  font-size: 18px;\n  margin-top: 6px;\n  margin-left: 0px;\n  padding: 0px;\n  --border-color: #ECB2C0;\n}\n\n.tertiary {\n  font-size: 18px;\n  margin-top: 6px;\n  margin-left: 0px;\n  padding: 0px;\n  --border-color: #FBD9B6;\n}\n\n.success {\n  font-size: 18px;\n  margin-top: 6px;\n  margin-left: 0px;\n  padding: 0px;\n  --border-color: #BFE1EA;\n}\n\n.warning {\n  font-size: 18px;\n  margin-top: 6px;\n  margin-left: 0px;\n  padding: 0px;\n  --border-color: #FCF1B9;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nh4 {\n  margin: 0px;\n  padding: 0px;\n}\n\n.arrow {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluaXNoZWQtZGV0YWlsL0M6XFxVc2Vyc1xcTUtcXERlc2t0b3BcXHByb2pla3RcXEhhYml0VHJhY2tlci9zcmNcXGFwcFxcZmluaXNoZWQtZGV0YWlsXFxmaW5pc2hlZC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9maW5pc2hlZC1kZXRhaWwvZmluaXNoZWQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmlzaGVkLWRldGFpbC9maW5pc2hlZC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMTZweDtcclxufVxyXG5cclxuZGl2e1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcblxyXG4ucHJpbWFyeXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0NGQTRCRjtcclxufVxyXG5cclxuLnNlY29uZGFyeXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0VDQjJDMDtcclxufVxyXG5cclxuLnRlcnRpYXJ5e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRkJEOUI2O1xyXG59XHJcblxyXG4uc3VjY2Vzc3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0JGRTFFQTtcclxufVxyXG5cclxuLndhcm5pbmd7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNGQ0YxQjk7XHJcbn1cclxuXHJcbmlvbi1jb2x7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaDR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmFycm93e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iLCJwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDE2cHg7XG59XG5cbmRpdiB7XG4gIG1hcmdpbjogMTZweDtcbn1cblxuLnByaW1hcnkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICAtLWJvcmRlci1jb2xvcjogI0NGQTRCRjtcbn1cblxuLnNlY29uZGFyeSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRUNCMkMwO1xufVxuXG4udGVydGlhcnkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICAtLWJvcmRlci1jb2xvcjogI0ZCRDlCNjtcbn1cblxuLnN1Y2Nlc3Mge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICAtLWJvcmRlci1jb2xvcjogI0JGRTFFQTtcbn1cblxuLndhcm5pbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICAtLWJvcmRlci1jb2xvcjogI0ZDRjFCOTtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmFycm93IHtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/finished-detail/finished-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/finished-detail/finished-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: FinishedDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedDetailPage", function() { return FinishedDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let FinishedDetailPage = class FinishedDetailPage {
    constructor(navCtrl, afAuth, db, router, route, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.route = route;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.uid = {};
        this.ifDesc = true;
        this.ifGoal = false;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.uid = user.uid;
            }
        });
    }
    del(habitId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'czy na pewno chcesz usunąć ten nawyk?',
                buttons: [
                    {
                        text: 'anuluj',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'usuń',
                        handler: () => {
                            this.db.doc(`users/${this.uid}/finishedHabits/${habitId}`).delete();
                            this.router.navigateByUrl(`/finishedHabits`);
                        }
                    }
                ],
            });
            return yield alert.present();
        });
    }
    restore() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'czy chcesz przywrócić nawyk?',
                message: 'jeśli chcesz jeszcze popracować nad tym nawykiem możesz przenieść go do trwających i zacząć od nowa',
                buttons: [
                    {
                        text: 'anuluj',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'przywróć',
                        handler: () => {
                            let now = new Date();
                            let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
                            this.db.collection(`users/${this.uid}/ongoingHabits`).add({
                                name: this.habit.name,
                                description: this.habit.description,
                                created: nowUtc,
                                color: this.habit.color,
                                date: now.toISOString(),
                                duration: this.habit.duration,
                                reminder: this.habit.reminder,
                                goal: this.habit.goal,
                                successDays: 0
                            }).then(docRef => {
                                let habitDate = new Date();
                                let daysNumber = Number(this.habit.duration) + 1;
                                for (let i = 1; i < daysNumber; i++) {
                                    let date = new Date(habitDate.getFullYear(), habitDate.getMonth(), habitDate.getDate() + i).toISOString();
                                    this.db.collection(`users/${this.uid}/ongoingHabits/${docRef.id}/days`).add({
                                        date: date,
                                        ifDone: false
                                    });
                                }
                            });
                            this.router.navigateByUrl(`/`);
                        }
                    }
                ],
            });
            return yield alert.present();
        });
    }
    ngOnInit() {
        if (this.route.snapshot.data['habitData']) {
            this.habit = this.route.snapshot.data['habitData'];
        }
        if (this.habit.goal != 0 && this.habit.goal <= this.habit.duration) {
            this.ifGoal = true;
        }
        if (!this.habit.description) {
            this.ifDesc = false;
        }
    }
};
FinishedDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
FinishedDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finished-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./finished-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finished-detail/finished-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./finished-detail.page.scss */ "./src/app/finished-detail/finished-detail.page.scss")).default]
    })
], FinishedDetailPage);



/***/ })

}]);
//# sourceMappingURL=finished-detail-finished-detail-module-es2015.js.map