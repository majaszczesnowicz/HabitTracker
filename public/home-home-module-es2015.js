(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-modal/create-modal.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-modal/create-modal.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>utwórz nowy nawyk</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"dismissModal()\"><ion-icon name=\"arrow-back-outline\" style=\"zoom:1.5\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item>\r\n    <ion-label position=\"floating\">nazwa</ion-label>\r\n    <ion-input [formControl]=\"nameInput\" type=\"text\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">opis</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"nad czym będziesz pracować?\" [(ngModel)]=\"description\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>data rozpoczęcia</ion-label>\r\n    <ion-datetime [formControl]=\"dateInput\" displayFormat=\"DD/MM/YYYY\" min={{minDate}} max={{maxDate}} [(ngModel)]=\"habitDate\"\r\n    cancelText=\"anuluj\" doneText=\"zapisz\"></ion-datetime>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>czas trwania</ion-label>\r\n    <ion-select [formControl]=\"durationInput\" placeholder=\"wybierz\" okText=\"zapisz\" cancelText=\"anuluj\">\r\n      <ion-select-option value=\"7\">7 dni</ion-select-option>\r\n      <ion-select-option value=\"14\">14 dni</ion-select-option>\r\n      <ion-select-option value=\"21\">21 dni</ion-select-option>\r\n      <ion-select-option value=\"28\">28 dni</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>przypomnienie</ion-label>\r\n    <ion-datetime displayFormat=\"H:mm\" [(ngModel)]=\"habitTime\" placeholder=\"godzina powiadomienia\" cancelText=\"anuluj\" doneText=\"zapisz\" (ionCancel)=\"clear()\"></ion-datetime>\r\n  </ion-item>\r\n  <ion-button [disabled]=\"nameInput.invalid || dateInput.invalid || durationInput.invalid\" expand=\"block\" (click)=\"save()\" class=\"ion-margin-top\">zapisz</ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>trwające nawyki ({{items.length}})</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openModal()\"><ion-icon name=\"add\" style=\"zoom:2.0\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-spinner *ngIf = \"loading\" color=\"success\"></ion-spinner>\r\n  \r\n  <ion-card *ngFor=\"let item of items\" color={{item.color}}>\r\n    <ion-item (click)=\"onSelect(item.id, item)\" detail=\"true\" lines=\"none\">\r\n      <ion-label>{{item.name}}</ion-label>   \r\n    </ion-item>\r\n  \r\n    <ion-card-content>\r\n        <p class=\"desc\">{{item.description}}</p>\r\n        <p>nawyk trwający {{item.duration}} dni</p>\r\n        <p>{{item.message}}</p>\r\n    </ion-card-content>\r\n\r\n        <ion-icon class=\"progress-icon\" src={{item.icon}}></ion-icon>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/create-modal/create-modal.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/create-modal/create-modal.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1tb2RhbC9jcmVhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/create-modal/create-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-modal/create-modal.component.ts ***!
  \********************************************************/
/*! exports provided: CreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModalComponent", function() { return CreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");






let CreateModalComponent = class CreateModalComponent {
    constructor(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.nameInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.dateInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.durationInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.habitDate = new Date().toISOString();
        this.habitTime = new Date().toISOString();
        this.habit = {};
    }
    ngOnInit() {
        this.habitTime = null;
        this.description = '';
        let today = new Date();
        this.minDate = this.setHour(today);
        this.maxDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate());
        this.maxDate = new Date(this.maxDate).toISOString();
    }
    clear() {
        this.habitTime = null;
    }
    dismissModal() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'czy chcesz wyznaczyć sobie cel do osiągnięcia?',
                message: `wybierz liczbę dni z ${this.durationInput.value}, w których będziesz trzymać się swojego postanowienia`,
                buttons: [
                    {
                        text: 'nie wyznaczam celu',
                        role: 'cancel',
                        handler: () => {
                            this.habit.name = this.nameInput.value;
                            this.habit.description = this.description;
                            this.habit.date = this.habitDate;
                            this.habit.duration = this.durationInput.value;
                            this.habit.reminder = this.habitTime;
                            this.habit.goal = 0;
                            this.modalCtrl.dismiss(this.habit);
                        }
                    },
                    {
                        text: 'zapisz cel',
                        handler: (val) => {
                            this.habit.name = this.nameInput.value;
                            this.habit.description = this.description;
                            this.habit.date = this.habitDate;
                            this.habit.duration = this.durationInput.value;
                            this.habit.reminder = this.habitTime;
                            this.habit.goal = val.goal;
                            this.modalCtrl.dismiss(this.habit);
                        }
                    }
                ],
                inputs: [
                    {
                        name: 'goal',
                        type: 'number',
                        placeholder: 'liczba dni'
                    }
                ]
            });
            return yield alert.present();
        });
    }
    setHour(date) {
        let toDate = new Date(date);
        let newDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["setHours"])(toDate, 0);
        newDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["setMinutes"])(newDate, 0);
        newDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["setSeconds"])(newDate, 0);
        return newDate.toISOString();
    }
};
CreateModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
];
CreateModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-create-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-modal/create-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-modal.component.scss */ "./src/app/create-modal/create-modal.component.scss")).default]
    })
], CreateModalComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../create-modal/create-modal.component */ "./src/app/create-modal/create-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_1__["CreateModalComponent"]],
        entryComponents: [_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_1__["CreateModalComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-spinner {\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\nion-card {\n  padding: 16px;\n  border-radius: 15px 15px 15px 15px;\n}\n\nion-item {\n  border-radius: 15px 15px 15px 15px;\n  opacity: 0.85;\n  font-size: 18px;\n}\n\np {\n  font-size: 15px;\n}\n\n.desc {\n  font-size: 18px;\n  color: #696969;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE1LXFxEZXNrdG9wXFxwcm9qZWt0XFxIYWJpdFRyYWNrZXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FDRkY7O0FES0E7RUFDRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1zcGlubmVyIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcbiAgb3BhY2l0eTogMC44NTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZGVzY3tcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM2OTY5Njk7XHJcbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmRlc2Mge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjk2OTY5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../create-modal/create-modal.component */ "./src/app/create-modal/create-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);











let HomePage = class HomePage {
    constructor(afAuth, db, navCtrl, router, alertCtrl, dataService, modalCtrl) {
        this.afAuth = afAuth;
        this.db = db;
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.items = [];
        this.successDays = [];
        this.uid = {};
        this.loading = true;
        this.started = false;
        this.habit = {};
        this.afAuth.authState.subscribe(user => {
            if (user)
                this.uid = user.uid;
        });
        this.afAuth.authState.subscribe(user => {
            if (!user)
                return;
            this.db.collection(`users/${this.uid}/ongoingHabits`, ref => {
                let query = ref.orderBy('created');
                query = query.limit(20);
                return query;
            }).snapshotChanges().subscribe(colSnap => {
                this.items = [];
                colSnap.forEach(a => {
                    let item = a.payload.doc.data();
                    item['id'] = a.payload.doc.id;
                    this.items.push(item);
                });
                this.loading = false;
                for (let item of this.items) {
                    this.started = false;
                    item.message = "";
                    item.icon = "/assets/custom-ion-icons/progress7.svg";
                    item.daysLeft = this.countDays(item.date, item.duration, item);
                    if (this.started) {
                        if (item.daysLeft == 0) {
                            item.message = "nawyk kończy się dziś!";
                        }
                        if (item.daysLeft == 1) {
                            item.message = `${item.daysLeft} dzień do końca`;
                        }
                        if (item.daysLeft > 1) {
                            item.message = `${item.daysLeft} dni do końca`;
                        }
                        item.icon = this.chooseIcon(item.daysLeft, item.duration);
                    }
                    else {
                        if (item.daysLeft == 1) {
                            item.message = `${item.daysLeft} dzień do rozpoczęcia`;
                        }
                        else {
                            item.message = `${item.daysLeft} dni do rozpoczęcia`;
                        }
                    }
                }
            });
        });
    }
    ngOnInit() {
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_1__["CreateModalComponent"]
            });
            const alert = yield this.alertCtrl.create({
                header: 'super!',
                message: 'nowy nawyk został utworzony',
                buttons: ['zamknij']
            });
            yield modal.present();
            yield modal.onWillDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res.data != null) {
                    this.habit = res.data;
                    let now = new Date();
                    let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
                    this.randomColor = this.randomNumber();
                    this.db.collection(`users/${this.uid}/ongoingHabits`).add({
                        name: this.habit.name,
                        description: this.habit.description,
                        created: nowUtc,
                        color: this.randomColor,
                        date: this.habit.date,
                        duration: Number(this.habit.duration),
                        reminder: this.habit.reminder,
                        goal: Number(this.habit.goal),
                        successDays: 0
                    }).then(docRef => {
                        let habitDate = new Date(this.habit.date);
                        let daysNumber = Number(this.habit.duration) + 1;
                        for (let i = 1; i < daysNumber; i++) {
                            let date = new Date(habitDate.getFullYear(), habitDate.getMonth(), habitDate.getDate() + i).toISOString();
                            this.db.collection(`users/${this.uid}/ongoingHabits/${docRef.id}/days`).add({
                                date: date,
                                ifDone: false
                            });
                        }
                    });
                    if (this.items.length >= 20) {
                        this.alertCtrl.create({
                            header: 'to zbyt dużo nawyków na raz!',
                            message: 'wyświetlane jest do 20 elementów',
                            buttons: ['ok'],
                        }).then(warning => {
                            warning.present();
                        });
                    }
                    if (this.items.length < 20) {
                        yield alert.present();
                    }
                }
            }));
        });
    }
    randomNumber() {
        const min = Math.ceil(1);
        const max = Math.floor(5);
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        switch (number) {
            case 1:
                return "primary";
            case 2:
                return "secondary";
            case 3:
                return "tertiary";
            case 4:
                return "success";
            case 5:
                return "warning";
        }
    }
    countDays(date, days, item) {
        let today = new Date();
        today = new Date(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["getYear"])(today), today.getMonth(), today.getDate());
        date = new Date(date);
        let startDate = new Date(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["getYear"])(date), date.getMonth(), date.getDate());
        let endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["addDays"])(startDate, (days - 1));
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(startDate, today)) {
            this.started = true;
            return (days - 1);
        }
        if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["compareAsc"])(today, startDate) == 1 && (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["compareAsc"])(today, endDate) !== 1)) || (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(endDate, today))) {
            this.started = true;
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["differenceInDays"])(endDate, today);
        }
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["compareAsc"])(startDate, today) == 1) {
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["differenceInDays"])(startDate, today);
        }
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["compareAsc"])(today, endDate) == 1) {
            this.completeHabit(item);
        }
    }
    chooseIcon(daysLeft, duration) {
        if (duration == 7) {
            const r = daysLeft % 7;
            return `/assets/custom-ion-icons/progress${r}.svg`;
        }
        if (duration == 14) {
            if (daysLeft == 13 || daysLeft == 12) {
                return "/assets/custom-ion-icons/progress6.svg";
            }
            if (daysLeft == 11 || daysLeft == 10) {
                return "/assets/custom-ion-icons/progress5.svg";
            }
            if (daysLeft == 9 || daysLeft == 8) {
                return "/assets/custom-ion-icons/progress4.svg";
            }
            if (daysLeft == 7 || daysLeft == 6) {
                return "/assets/custom-ion-icons/progress3.svg";
            }
            if (daysLeft == 5 || daysLeft == 4) {
                return "/assets/custom-ion-icons/progress2.svg";
            }
            if (daysLeft == 3 || daysLeft == 2) {
                return "/assets/custom-ion-icons/progress1.svg";
            }
            if (daysLeft == 1 || daysLeft == 0) {
                return "/assets/custom-ion-icons/progress0.svg";
            }
        }
        if (duration == 21) {
            if (daysLeft == 20 || daysLeft == 19 || daysLeft == 18) {
                return "/assets/custom-ion-icons/progress6.svg";
            }
            if (daysLeft == 17 || daysLeft == 16 || daysLeft == 15) {
                return "/assets/custom-ion-icons/progress5.svg";
            }
            if (daysLeft == 14 || daysLeft == 13 || daysLeft == 12) {
                return "/assets/custom-ion-icons/progress4.svg";
            }
            if (daysLeft == 11 || daysLeft == 10 || daysLeft == 9) {
                return "/assets/custom-ion-icons/progress3.svg";
            }
            if (daysLeft == 8 || daysLeft == 7 || daysLeft == 6) {
                return "/assets/custom-ion-icons/progress2.svg";
            }
            if (daysLeft == 5 || daysLeft == 4 || daysLeft == 3) {
                return "/assets/custom-ion-icons/progress1.svg";
            }
            if (daysLeft == 2 || daysLeft == 1 || daysLeft == 0) {
                return "/assets/custom-ion-icons/progress0.svg";
            }
        }
        if (duration == 28) {
            if (daysLeft == 27 || daysLeft == 26 || daysLeft == 25 || daysLeft == 24) {
                return "/assets/custom-ion-icons/progress6.svg";
            }
            if (daysLeft == 23 || daysLeft == 22 || daysLeft == 21 || daysLeft == 20) {
                return "/assets/custom-ion-icons/progress5.svg";
            }
            if (daysLeft == 19 || daysLeft == 18 || daysLeft == 17 || daysLeft == 16) {
                return "/assets/custom-ion-icons/progress4.svg";
            }
            if (daysLeft == 15 || daysLeft == 14 || daysLeft == 13 || daysLeft == 12) {
                return "/assets/custom-ion-icons/progress3.svg";
            }
            if (daysLeft == 11 || daysLeft == 10 || daysLeft == 9 || daysLeft == 8) {
                return "/assets/custom-ion-icons/progress2.svg";
            }
            if (daysLeft == 7 || daysLeft == 6 || daysLeft == 5 || daysLeft == 4) {
                return "/assets/custom-ion-icons/progress1.svg";
            }
            if (daysLeft == 3 || daysLeft == 2 || daysLeft == 1 || daysLeft == 0) {
                return "/assets/custom-ion-icons/progress0.svg";
            }
        }
    }
    completeHabit(item) {
        let goalAchieved = false;
        this.db.doc(`users/${this.uid}/ongoingHabits/${item.id}`).delete();
        let id = item.id;
        this.db.doc(`users/${this.uid}/finishedHabits/${id}`).set(item);
        if (item.successDays >= item.goal) {
            goalAchieved = true;
        }
        let goalCounter;
        if (goalAchieved) {
            goalCounter = 1;
        }
        else {
            goalCounter = 0;
        }
        const increment = firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.increment(1);
        const counterRef = this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter');
        this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter').ref.get().then((documentSnapshot) => {
            if (!documentSnapshot.exists) {
                counterRef.set({ taskCounter: 0,
                    habitCounter: 1,
                    goalCounter: goalCounter
                });
            }
            else {
                if (goalAchieved) {
                    counterRef.update({ habitCounter: increment,
                        goalCounter: increment
                    });
                }
                else {
                    counterRef.update({ habitCounter: increment });
                }
            }
        });
        delete item.id;
    }
    onSelect(id, item) {
        this.dataService.setData(id, item);
        this.router.navigateByUrl(`/detail/${id}`);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map