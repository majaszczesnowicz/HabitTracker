function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-finishedHabits-finishedHabits-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finishedHabits/finishedHabits.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finishedHabits/finishedHabits.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFinishedHabitsFinishedHabitsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>zakończone ({{items.length}})</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-spinner *ngIf = \"loading\" color=\"success\"></ion-spinner>\r\n  \r\n  <ion-card *ngFor=\"let item of items\" color={{item.color}}>\r\n    <ion-item (click)=\"onSelect(item.id, item)\" detail=\"true\" lines=\"none\">\r\n      <ion-label>{{item.name}}</ion-label>   \r\n    </ion-item>\r\n  \r\n    <ion-card-content>\r\n      <p class=\"desc\">{{item.description}}</p>\r\n      <p>nawyk trwający {{item.duration}} dni</p>\r\n      <p>{{item.message}}</p>\r\n    </ion-card-content>\r\n\r\n        <ion-icon class=\"progress-icon\" src={{iconSrc}}></ion-icon>\r\n\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/finishedHabits/finishedHabits-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/finishedHabits/finishedHabits-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: FinishedHabitsPageRoutingModule */

  /***/
  function srcAppPagesFinishedHabitsFinishedHabitsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishedHabitsPageRoutingModule", function () {
      return FinishedHabitsPageRoutingModule;
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


    var _finishedHabits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finishedHabits.page */
    "./src/app/pages/finishedHabits/finishedHabits.page.ts");

    var routes = [{
      path: '',
      component: _finishedHabits_page__WEBPACK_IMPORTED_MODULE_3__["FinishedHabitsPage"]
    }];

    var FinishedHabitsPageRoutingModule = function FinishedHabitsPageRoutingModule() {
      _classCallCheck(this, FinishedHabitsPageRoutingModule);
    };

    FinishedHabitsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FinishedHabitsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/finishedHabits/finishedHabits.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/finishedHabits/finishedHabits.module.ts ***!
    \***************************************************************/

  /*! exports provided: FinishedHabitsPageModule */

  /***/
  function srcAppPagesFinishedHabitsFinishedHabitsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishedHabitsPageModule", function () {
      return FinishedHabitsPageModule;
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


    var _finishedHabits_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./finishedHabits-routing.module */
    "./src/app/pages/finishedHabits/finishedHabits-routing.module.ts");
    /* harmony import */


    var _finishedHabits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./finishedHabits.page */
    "./src/app/pages/finishedHabits/finishedHabits.page.ts");

    var FinishedHabitsPageModule = function FinishedHabitsPageModule() {
      _classCallCheck(this, FinishedHabitsPageModule);
    };

    FinishedHabitsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _finishedHabits_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinishedHabitsPageRoutingModule"]],
      declarations: [_finishedHabits_page__WEBPACK_IMPORTED_MODULE_6__["FinishedHabitsPage"]]
    })], FinishedHabitsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/finishedHabits/finishedHabits.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/finishedHabits/finishedHabits.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFinishedHabitsFinishedHabitsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-spinner {\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\nion-card {\n  padding: 16px;\n  border-radius: 15px 15px 15px 15px;\n}\n\nion-item {\n  border-radius: 15px 15px 15px 15px;\n  opacity: 0.85;\n  font-size: 18px;\n}\n\np {\n  font-size: 15px;\n}\n\n.desc {\n  font-size: 18px;\n  color: #696969;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmluaXNoZWRIYWJpdHMvQzpcXFVzZXJzXFxNS1xcRGVza3RvcFxccHJvamVrdFxcSGFiaXRUcmFja2VyL3NyY1xcYXBwXFxwYWdlc1xcZmluaXNoZWRIYWJpdHNcXGZpbmlzaGVkSGFiaXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmluaXNoZWRIYWJpdHMvZmluaXNoZWRIYWJpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUU7RUFDRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmluaXNoZWRIYWJpdHMvZmluaXNoZWRIYWJpdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNwaW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmRlc2N7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzY5Njk2OTtcclxuICB9IiwiaW9uLXNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmRlc2Mge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjk2OTY5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/finishedHabits/finishedHabits.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/finishedHabits/finishedHabits.page.ts ***!
    \*************************************************************/

  /*! exports provided: FinishedHabitsPage */

  /***/
  function srcAppPagesFinishedHabitsFinishedHabitsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishedHabitsPage", function () {
      return FinishedHabitsPage;
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


    var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    var FinishedHabitsPage = /*#__PURE__*/function () {
      function FinishedHabitsPage(afAuth, db, navCtrl, router, alertCtrl, dataService) {
        var _this = this;

        _classCallCheck(this, FinishedHabitsPage);

        this.afAuth = afAuth;
        this.db = db;
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.items = [];
        this.uid = {};
        this.loading = true;
        this.iconSrc = "/assets/custom-ion-icons/progress0.svg";
        this.afAuth.authState.subscribe(function (user) {
          if (user) _this.uid = user.uid;
        });
        this.afAuth.authState.subscribe(function (user) {
          if (!user) return;

          _this.db.collection("users/".concat(_this.uid, "/finishedHabits"), function (ref) {
            var query = ref.orderBy('created');
            return query;
          }).snapshotChanges().subscribe(function (colSnap) {
            _this.items = [];
            colSnap.forEach(function (a) {
              var item = a.payload.doc.data();
              item['id'] = a.payload.doc.id;

              _this.items.push(item);
            });
            _this.loading = false;

            var _iterator = _createForOfIteratorHelper(_this.items),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.endDate = _this.countEndDate(item.date, item.duration);
                item.message = "nawyk zako\u0144czy\u0142 si\u0119 ".concat(item.endDate);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        });
      }

      _createClass(FinishedHabitsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "countEndDate",
        value: function countEndDate(date, days) {
          var startDate = new Date(date);
          var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["addDays"])(startDate, days - 1);
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["format"])(endDate, 'dd/MM/yyyy');
        }
      }, {
        key: "onSelect",
        value: function onSelect(id, item) {
          this.dataService.setData(id, item);
          this.router.navigateByUrl("/finished-detail/".concat(id));
        }
      }]);

      return FinishedHabitsPage;
    }();

    FinishedHabitsPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }];
    };

    FinishedHabitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-finishedHabits',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./finishedHabits.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finishedHabits/finishedHabits.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./finishedHabits.page.scss */
      "./src/app/pages/finishedHabits/finishedHabits.page.scss"))["default"]]
    })], FinishedHabitsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-finishedHabits-finishedHabits-module-es5.js.map