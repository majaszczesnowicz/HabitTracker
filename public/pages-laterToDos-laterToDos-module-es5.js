function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-laterToDos-laterToDos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laterToDos/laterToDos.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laterToDos/laterToDos.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLaterToDosLaterToDosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>na później ({{items.length}})</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"add()\"><ion-icon name=\"add\" color=\"light\" style=\"zoom:2.0\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n\r\n    <ion-spinner *ngIf = \"loading\" color=\"success\"></ion-spinner>\r\n\r\n    <ion-item-sliding *ngFor=\"let item of items, let i=index\">\r\n      <ion-item><ion-label>{{item.text}}</ion-label></ion-item>\r\n\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"secondary\" (click)=\"changePos(i, -1)\" *ngIf=\"i !== 0\">\r\n          <ion-icon name=\"chevron-up-outline\" style=\"zoom:1.5\"></ion-icon>\r\n          </ion-item-option>\r\n          <ion-item-option color=\"secondary\" (click)=\"changePos(i, 1)\" *ngIf=\"i !== items.length-1\">\r\n            <ion-icon name=\"chevron-down-outline\" style=\"zoom:1.5\"></ion-icon>\r\n            </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"success\" (click)=\"completeTask(item)\">\r\n          <ion-icon name=\"checkmark\" style=\"zoom:1.5\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"warning\" (click)=\"moveUrgent(item)\">\r\n          <ion-icon name=\"time-outline\" style=\"zoom:1.5\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"tertiary\" (click)=\"deleteTask(item)\">\r\n          <ion-icon name=\"close\" style=\"zoom:1.5\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"medium\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col style=\"text-align: left\">\r\n        <ion-button [routerLink]=\"['/urgentToDos']\" color=\"success\">\r\n            <ion-icon name=\"alert\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center\">\r\n        <ion-button [routerLink]=\"['/laterToDos']\" color=\"success\">\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: right\">\r\n        <ion-button [routerLink]=\"['/doneToDos']\" color=\"success\">\r\n          <ion-icon name=\"checkmark\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/laterToDos/laterToDos-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/laterToDos/laterToDos-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: LaterToDosPageRoutingModule */

  /***/
  function srcAppPagesLaterToDosLaterToDosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaterToDosPageRoutingModule", function () {
      return LaterToDosPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _laterToDos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./laterToDos.page */
    "./src/app/pages/laterToDos/laterToDos.page.ts");

    var routes = [{
      path: '',
      component: _laterToDos_page__WEBPACK_IMPORTED_MODULE_3__["LaterToDosPage"]
    }];

    var LaterToDosPageRoutingModule = function LaterToDosPageRoutingModule() {
      _classCallCheck(this, LaterToDosPageRoutingModule);
    };

    LaterToDosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LaterToDosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/laterToDos/laterToDos.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/laterToDos/laterToDos.module.ts ***!
    \*******************************************************/

  /*! exports provided: LaterToDosPageModule */

  /***/
  function srcAppPagesLaterToDosLaterToDosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaterToDosPageModule", function () {
      return LaterToDosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _laterToDos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./laterToDos-routing.module */
    "./src/app/pages/laterToDos/laterToDos-routing.module.ts");
    /* harmony import */


    var _laterToDos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./laterToDos.page */
    "./src/app/pages/laterToDos/laterToDos.page.ts");

    var LaterToDosPageModule = function LaterToDosPageModule() {
      _classCallCheck(this, LaterToDosPageModule);
    };

    LaterToDosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _laterToDos_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaterToDosPageRoutingModule"]],
      declarations: [_laterToDos_page__WEBPACK_IMPORTED_MODULE_6__["LaterToDosPage"]]
    })], LaterToDosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/laterToDos/laterToDos.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/laterToDos/laterToDos.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLaterToDosLaterToDosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-spinner {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF0ZXJUb0Rvcy9DOlxcVXNlcnNcXE1LXFxEZXNrdG9wXFxwcm9qZWt0XFxIYWJpdFRyYWNrZXIvc3JjXFxhcHBcXHBhZ2VzXFxsYXRlclRvRG9zXFxsYXRlclRvRG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGF0ZXJUb0Rvcy9sYXRlclRvRG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXRlclRvRG9zL2xhdGVyVG9Eb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNwaW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn0iLCJpb24tc3Bpbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/laterToDos/laterToDos.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/laterToDos/laterToDos.page.ts ***!
    \*****************************************************/

  /*! exports provided: LaterToDosPage */

  /***/
  function srcAppPagesLaterToDosLaterToDosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaterToDosPage", function () {
      return LaterToDosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);

    var LaterToDosPage = /*#__PURE__*/function () {
      function LaterToDosPage(afAuth, db, alertCtrl) {
        var _this = this;

        _classCallCheck(this, LaterToDosPage);

        this.afAuth = afAuth;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.uid = {};
        this.loading = true;
        this.afAuth.authState.subscribe(function (user) {
          if (user) _this.uid = user.uid;
        });
      }

      _createClass(LaterToDosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (!user) return;

            _this2.db.collection("users/".concat(_this2.uid, "/laterToDos"), function (ref) {
              var query = ref.orderBy('pos', 'desc');
              query = query.limit(2);
              return query;
            }).snapshotChanges().subscribe(function (colSnap) {
              _this2.items = [];
              colSnap.forEach(function (a) {
                var item = a.payload.doc.data();
                item['id'] = a.payload.doc.id;

                _this2.items.push(item);
              });
              _this2.loading = false;
            });
          });
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          if (this.items.length == 0) {
            return 1;
          } else {
            return this.items[0].pos + 1;
          }
        }
      }, {
        key: "add",
        value: function add() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'nowe zadanie',
                      buttons: [{
                        text: 'anuluj',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'dodaj',
                        handler: function handler(val) {
                          var now = new Date();
                          var nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));

                          _this3.db.collection("users/".concat(_this3.uid, "/laterToDos")).add({
                            text: val.zadanie,
                            pos: _this3.getPosition(),
                            created: nowUtc
                          });

                          if (_this3.items.length >= 100) _this3.alertCtrl.create({
                            header: 'zbyt dużo elementów na liście',
                            message: 'wyświetlane jest do 100 elementów',
                            buttons: ['ok']
                          }).then(function (warning) {
                            warning.present();
                          });
                        }
                      }],
                      inputs: [{
                        name: 'zadanie',
                        type: 'text',
                        placeholder: 'nazwa'
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(item) {
          this.db.doc("users/".concat(this.uid, "/laterToDos/").concat(item.id))["delete"]();
        }
      }, {
        key: "completeTask",
        value: function completeTask(item) {
          this.moveTask(item, 'doneToDos');
          var increment = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);
          var counterRef = this.db.collection('users').doc("".concat(this.uid)).collection('counters').doc('counter');
          this.db.collection('users').doc("".concat(this.uid)).collection('counters').doc('counter').ref.get().then(function (documentSnapshot) {
            if (!documentSnapshot.exists) {
              counterRef.set({
                taskCounter: 1,
                habitCounter: 0,
                goalCounter: 0
              });
            } else {
              counterRef.update({
                taskCounter: increment
              });
            }
          });
        }
      }, {
        key: "moveUrgent",
        value: function moveUrgent(item) {
          this.moveTask(item, 'urgentToDos');
        }
      }, {
        key: "moveTask",
        value: function moveTask(item, list) {
          var _this4 = this;

          this.db.doc("users/".concat(this.uid, "/laterToDos/").concat(item.id))["delete"]();
          var id = item.id;
          delete item.id;
          this.db.collection("users/".concat(this.uid, "/").concat(list), function (ref) {
            return ref.orderBy('pos', 'desc').limit(1);
          }).get().toPromise().then(function (qSnap) {
            item.pos = 1;
            qSnap.forEach(function (a) {
              item.pos = a.data().pos + 1;
            });

            _this4.db.doc("users/".concat(_this4.uid, "/").concat(list, "/").concat(id)).set(item);
          });
        }
      }, {
        key: "changePos",
        value: function changePos(index, offset) {
          this.db.doc("users/".concat(this.uid, "/laterToDos/").concat(this.items[index].id)).set({
            pos: this.items[index + offset].pos
          }, {
            merge: true
          });
          this.db.doc("users/".concat(this.uid, "/laterToDos/").concat(this.items[index + offset].id)).set({
            pos: this.items[index].pos
          }, {
            merge: true
          });
        }
      }]);

      return LaterToDosPage;
    }();

    LaterToDosPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    LaterToDosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-laterToDos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./laterToDos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/laterToDos/laterToDos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./laterToDos.page.scss */
      "./src/app/pages/laterToDos/laterToDos.page.scss"))["default"]]
    })], LaterToDosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-laterToDos-laterToDos-module-es5.js.map