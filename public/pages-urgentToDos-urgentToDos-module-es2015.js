(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-urgentToDos-urgentToDos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/urgentToDos/urgentToDos.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/urgentToDos/urgentToDos.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>pilne ({{items.length}})</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"add()\"><ion-icon name=\"add\" color=\"light\" style=\"zoom:2.0\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n\r\n    <ion-spinner *ngIf = \"loading\" color=\"success\"></ion-spinner>\r\n\r\n    <ion-item-sliding *ngFor=\"let item of items, let i=index\">\r\n      <ion-item><ion-label>{{item.text}}</ion-label></ion-item>\r\n\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"secondary\" (click)=\"changePos(i, -1)\" *ngIf=\"i !== 0\">\r\n          <ion-icon name=\"chevron-up-outline\" style=\"zoom:1.5\"></ion-icon>\r\n          </ion-item-option>\r\n          <ion-item-option color=\"secondary\" (click)=\"changePos(i, 1)\" *ngIf=\"i !== items.length-1\">\r\n            <ion-icon name=\"chevron-down-outline\" style=\"zoom:1.5\"></ion-icon>\r\n            </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"success\" (click)=\"completeTask(item)\">\r\n          <ion-icon name=\"checkmark\" style=\"zoom:1.5\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"warning\" (click)=\"moveLater(item)\">\r\n          <ion-icon name=\"time-outline\" style=\"zoom:1.5\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"tertiary\" (click)=\"deleteTask(item)\">\r\n          <ion-icon name=\"close\" style=\"zoom:1.5\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"medium\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col style=\"text-align: left\">\r\n        <ion-button padding=\"left\" [routerLink]=\"['/urgentToDos']\" color=\"success\">\r\n            <ion-icon name=\"alert\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center\">\r\n        <ion-button [routerLink]=\"['/laterToDos']\" color=\"success\">\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: right\">\r\n        <ion-button [routerLink]=\"['/doneToDos']\" color=\"success\">\r\n          <ion-icon name=\"checkmark\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/urgentToDos/urgentToDos-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/urgentToDos/urgentToDos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UrgentToDosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentToDosPageRoutingModule", function() { return UrgentToDosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _urgentToDos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urgentToDos.page */ "./src/app/pages/urgentToDos/urgentToDos.page.ts");




const routes = [
    {
        path: '',
        component: _urgentToDos_page__WEBPACK_IMPORTED_MODULE_3__["UrgentToDosPage"]
    }
];
let UrgentToDosPageRoutingModule = class UrgentToDosPageRoutingModule {
};
UrgentToDosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UrgentToDosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/urgentToDos/urgentToDos.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/urgentToDos/urgentToDos.module.ts ***!
  \*********************************************************/
/*! exports provided: UrgentToDosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentToDosPageModule", function() { return UrgentToDosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _urgentToDos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urgentToDos-routing.module */ "./src/app/pages/urgentToDos/urgentToDos-routing.module.ts");
/* harmony import */ var _urgentToDos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urgentToDos.page */ "./src/app/pages/urgentToDos/urgentToDos.page.ts");







let UrgentToDosPageModule = class UrgentToDosPageModule {
};
UrgentToDosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _urgentToDos_routing_module__WEBPACK_IMPORTED_MODULE_5__["UrgentToDosPageRoutingModule"]
        ],
        declarations: [_urgentToDos_page__WEBPACK_IMPORTED_MODULE_6__["UrgentToDosPage"]]
    })
], UrgentToDosPageModule);



/***/ }),

/***/ "./src/app/pages/urgentToDos/urgentToDos.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/urgentToDos/urgentToDos.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-spinner {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXJnZW50VG9Eb3MvQzpcXFVzZXJzXFxNS1xcRGVza3RvcFxccHJvamVrdFxcSGFiaXRUcmFja2VyL3NyY1xcYXBwXFxwYWdlc1xcdXJnZW50VG9Eb3NcXHVyZ2VudFRvRG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXJnZW50VG9Eb3MvdXJnZW50VG9Eb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VyZ2VudFRvRG9zL3VyZ2VudFRvRG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59IiwiaW9uLXNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/urgentToDos/urgentToDos.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/urgentToDos/urgentToDos.page.ts ***!
  \*******************************************************/
/*! exports provided: UrgentToDosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentToDosPage", function() { return UrgentToDosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let UrgentToDosPage = class UrgentToDosPage {
    constructor(afAuth, db, alertCtrl) {
        this.afAuth = afAuth;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.uid = {};
        this.loading = true;
        this.afAuth.authState.subscribe(user => {
            if (user)
                this.uid = user.uid;
        });
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (!user)
                return;
            this.db.collection(`users/${this.uid}/urgentToDos`, ref => {
                let query = ref.orderBy('pos', 'desc');
                query = query.limit(100);
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
    getPosition() {
        if (this.items.length == 0) {
            return 1;
        }
        else {
            return this.items[0].pos + 1;
        }
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'nowe zadanie',
                buttons: [
                    {
                        text: 'anuluj',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'dodaj',
                        handler: (val) => {
                            let now = new Date();
                            let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
                            this.db.collection(`users/${this.uid}/urgentToDos`).add({
                                text: val.zadanie,
                                pos: this.getPosition(),
                                created: nowUtc
                            });
                            if (this.items.length >= 100)
                                this.alertCtrl.create({
                                    header: 'zbyt dużo elementów na liście',
                                    message: 'wyświetlane jest do 100 elementów',
                                    buttons: ['ok'],
                                }).then(warning => {
                                    warning.present();
                                });
                        }
                    }
                ],
                inputs: [
                    {
                        name: 'zadanie',
                        type: 'text',
                        placeholder: 'nazwa'
                    }
                ]
            });
            return yield alert.present();
        });
    }
    deleteTask(item) {
        this.db.doc(`users/${this.uid}/urgentToDos/${item.id}`).delete();
    }
    completeTask(item) {
        this.moveTask(item, 'doneToDos');
        const increment = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);
        const counterRef = this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter');
        this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter').ref.get().then((documentSnapshot) => {
            if (!documentSnapshot.exists) {
                counterRef.set({ taskCounter: 1,
                    habitCounter: 0,
                    goalCounter: 0
                });
            }
            else {
                counterRef.update({ taskCounter: increment });
            }
        });
    }
    moveLater(item) {
        this.moveTask(item, 'laterToDos');
    }
    moveTask(item, list) {
        this.db.doc(`users/${this.uid}/urgentToDos/${item.id}`).delete();
        let id = item.id;
        delete item.id;
        this.db.collection(`users/${this.uid}/${list}`, ref => {
            return ref.orderBy('pos', 'desc').limit(1);
        }).get().toPromise().then(qSnap => {
            item.pos = 1;
            qSnap.forEach(a => {
                item.pos = a.data().pos + 1;
            });
            this.db.doc(`users/${this.uid}/${list}/${id}`).set(item);
        });
    }
    changePos(index, offset) {
        this.db.doc(`users/${this.uid}/urgentToDos/${this.items[index].id}`).set({
            pos: this.items[index + offset].pos
        }, { merge: true });
        this.db.doc(`users/${this.uid}/urgentToDos/${this.items[index + offset].id}`).set({
            pos: this.items[index].pos
        }, { merge: true });
    }
};
UrgentToDosPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
UrgentToDosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-urgentToDos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./urgentToDos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/urgentToDos/urgentToDos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./urgentToDos.page.scss */ "./src/app/pages/urgentToDos/urgentToDos.page.scss")).default]
    })
], UrgentToDosPage);



/***/ })

}]);
//# sourceMappingURL=pages-urgentToDos-urgentToDos-module-es2015.js.map