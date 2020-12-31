(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doneToDos-doneToDos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doneToDos/doneToDos.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doneToDos/doneToDos.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>wykonane ({{items.length}})</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n\r\n    <ion-spinner *ngIf = \"loading\" color=\"success\"></ion-spinner>\r\n\r\n    <ion-item-sliding *ngFor=\"let item of items\">\r\n      <ion-item><ion-label>{{item.text}}</ion-label></ion-item>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"tertiary\" (click)=\"deleteTask(item)\">\r\n          <ion-icon name=\"close\" style=\"zoom:1.5\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"medium\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col style=\"text-align: left\">\r\n        <ion-button [routerLink]=\"['/urgentToDos']\" color=\"success\">\r\n            <ion-icon name=\"alert\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center\">\r\n        <ion-button [routerLink]=\"['/laterToDos']\" color=\"success\">\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: right\">\r\n        <ion-button [routerLink]=\"['/doneToDos']\" color=\"success\">\r\n          <ion-icon name=\"checkmark\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/doneToDos/doneToDos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/doneToDos/doneToDos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DoneToDosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneToDosPageRoutingModule", function() { return DoneToDosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doneToDos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doneToDos.page */ "./src/app/pages/doneToDos/doneToDos.page.ts");




const routes = [
    {
        path: '',
        component: _doneToDos_page__WEBPACK_IMPORTED_MODULE_3__["DoneToDosPage"]
    }
];
let DoneToDosPageRoutingModule = class DoneToDosPageRoutingModule {
};
DoneToDosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoneToDosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/doneToDos/doneToDos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/doneToDos/doneToDos.module.ts ***!
  \*****************************************************/
/*! exports provided: DoneToDosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneToDosPageModule", function() { return DoneToDosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _doneToDos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doneToDos-routing.module */ "./src/app/pages/doneToDos/doneToDos-routing.module.ts");
/* harmony import */ var _doneToDos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doneToDos.page */ "./src/app/pages/doneToDos/doneToDos.page.ts");







let DoneToDosPageModule = class DoneToDosPageModule {
};
DoneToDosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doneToDos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoneToDosPageRoutingModule"]
        ],
        declarations: [_doneToDos_page__WEBPACK_IMPORTED_MODULE_6__["DoneToDosPage"]]
    })
], DoneToDosPageModule);



/***/ }),

/***/ "./src/app/pages/doneToDos/doneToDos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/doneToDos/doneToDos.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-spinner {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9uZVRvRG9zL0M6XFxVc2Vyc1xcTUtcXERlc2t0b3BcXHByb2pla3RcXEhhYml0VHJhY2tlci9zcmNcXGFwcFxccGFnZXNcXGRvbmVUb0Rvc1xcZG9uZVRvRG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9uZVRvRG9zL2RvbmVUb0Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9uZVRvRG9zL2RvbmVUb0Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc3Bpbm5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufSIsImlvbi1zcGlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/doneToDos/doneToDos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/doneToDos/doneToDos.page.ts ***!
  \***************************************************/
/*! exports provided: DoneToDosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneToDosPage", function() { return DoneToDosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let DoneToDosPage = class DoneToDosPage {
    constructor(afAuth, db, alertCtrl) {
        this.afAuth = afAuth;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.uid = {};
        this.loading = true;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.uid = user.uid;
            }
        });
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (!user) {
                return;
            }
            this.db.collection(`users/${this.uid}/doneToDos`, ref => {
                let query = ref.orderBy('pos', 'desc');
                query = query.limit(200);
                return query;
            }).snapshotChanges().subscribe(colSnap => {
                this.items = [];
                colSnap.forEach(a => {
                    let item = a.payload.doc.data();
                    item['id'] = a.payload.doc.id;
                    this.items.push(item);
                });
                this.loading = false;
            });
        });
    }
    deleteTask(item) {
        this.db.doc(`users/${this.uid}/doneToDos/${item.id}`).delete();
    }
};
DoneToDosPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
DoneToDosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doneToDos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doneToDos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doneToDos/doneToDos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doneToDos.page.scss */ "./src/app/pages/doneToDos/doneToDos.page.scss")).default]
    })
], DoneToDosPage);



/***/ })

}]);
//# sourceMappingURL=pages-doneToDos-doneToDos-module-es2015.js.map