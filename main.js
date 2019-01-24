(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'enroco';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: "AIzaSyBjxEnyMvLJjQu-SPSrmtdPjORVtTLLYG0",
    authDomain: "enroco-b1291.firebaseapp.com",
    databaseURL: "https://enroco-b1291.firebaseio.com",
    projectId: "enroco-b1291",
    storageBucket: "enroco-b1291.appspot.com",
    messagingSenderId: "622719314266"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({ preventDuplicates: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_15__["UserModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__["DashboardModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    { path: "login", component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: "full" },
                    { path: "", component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: "full" },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem("updateInfo"));
        }; // end getUserInfoFromLocalstorage
    }
    AppService.prototype.getCountryList = function () {
        return this.http.get("../assets/json/countryList.json");
    }; //end getCountryList
    AppService.prototype.getCountryCodes = function () {
        return this.http.get("../assets/json/countryCodes.json");
    }; //end getCountryCodes
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.loginWithGoogle = function () {
            return new Promise(function (resolve, reject) {
                var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
                provider.addScope('profile');
                provider.addScope('email');
                _this.afAuth.auth
                    .signInWithPopup(provider)
                    .then(function (res) {
                    resolve(res);
                });
            });
        };
        this.loginWithFacebook = function () {
            return new Promise(function (resolve, reject) {
                var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
                _this.afAuth.auth
                    .signInWithPopup(provider)
                    .then(function (res) {
                    resolve(res);
                }, function (err) {
                    console.log(err);
                    reject(err);
                });
            });
        };
        this.isLoggedIn = function () {
            if (localStorage.getItem("userInfo") === "null") {
                return false;
            }
            else {
                return true;
            }
        };
        /* Saving user data as an object in localstorage if logged out than set to null */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user; // Setting up user data in userData var
                localStorage.setItem('userInfo', JSON.stringify(_this.user));
            }
            else {
                _this.user = null;
                localStorage.setItem('userInfo', null);
            }
        });
    }
    AuthService.prototype.registerUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
                .then(function (userData) {
                localStorage.setItem('displayName', data.displayName);
                var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                _this.displayName = localStorage.getItem("displayName");
                if (_this.displayName !== null) {
                    user.updateProfile({
                        displayName: _this.displayName,
                        photoURL: null
                    }).then(function () {
                        localStorage.removeItem('displayName');
                        localStorage.removeItem('userInfo');
                        localStorage.setItem('userInfo', JSON.stringify(user));
                    }).then(function () {
                        var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                        user.sendEmailVerification().then(function () {
                            resolve();
                        });
                    }).catch(function (err) {
                        // An error happened.
                        reject(err);
                    });
                }
                resolve(userData);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.forgotPassword = function (passwordResetEmail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
                .then(function () {
                return resolve();
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginEmail = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (user) {
                var userData = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                if (userData !== null) {
                    if (userData.emailVerified) {
                        resolve(user);
                    }
                    else {
                        reject("Please Verifiy your Email");
                    }
                }
                else {
                    reject("some error,reload your page");
                }
            }, function (err) { return reject(err); });
        });
    };
    /* SetUserData(user,data) {
       const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.user.uid}`);
       const userData: UserData= {
         uid: user.user.uid,
         email: user.user.email,
         displayName: data.displayName,
         phoneNumber: data.phoneNumber
       }
       return userRef.set(userData, {
         merge: true
       })
     }*/
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('userInfo');
            _this.router.navigate(['/']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.toastr.error('some error occured,Please Login again');
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/dashboard/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] }
                ])
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown .dropdown-menu {\n    transition: all 0.3s;\n    max-height: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 0;\n}\n\n.dropdown:hover .dropdown-menu {\n    max-height: 200px;\n    opacity: 1;\n    transition: all 1s;\n}\n\n.dropdown-menu > a:hover {\n    background-color: #17a2b8;\n}\n\n#tile {\n    width: 100%;\n    height: 100vh;\n  }\n\n#imageMap {\n    width: 100%;\n    height: 100vh;\n  }\n\n.sidenav {\n    max-height: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 99;\n    top: 55px;\n    left: 0;\n    overflow-x: hidden;\n    transition: 0.5s;\n    cursor: none;\n    z-index: 10;\n  }\n\n.sidebar-content{\n    height: 50px;\n    font-size: 2rem;\n    font-weight: bold;\n    font-stretch:ultra-expanded;\n    border-bottom-style: solid;\n    border-bottom-color: #17a2b8;\n}\n\n.switch {\n    position: relative;\n    float:right;\n    width: 47px;\n    height: 24px;\n  }\n\n.switch input { \n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n  }\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 16px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n  }\n\ninput:checked + .slider {\n    background-color: #ffc107;\n  }\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #ffc107;\n  }\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n/* Rounded sliders */\n\n.slider.round {\n    border-radius: 24px;\n  }\n\n.slider.round:before {\n    border-radius: 50%;\n  }"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand text-white\">OpenLayers</a>\n  <form class=\"form-inline\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-outline-info text-white dropdown-toggle\" type=\"button\" id=\"dropdownMenu\" data-toggle=\"dropdown\"\n        aria-haspopup=\"true\" aria-expanded=\"false\">\n        Welcome {{userName}}\n      </button>\n      <div class=\"dropdown-menu bg-dark\" aria-labelledby=\"dropdownMenu\">\n        <a class=\"btn dropdown-item text-white\" (click)=\"logout()\"><i class=\"fa fa-sign-out mx-2\"></i>Logout</a>\n      </div>\n    </div>\n  </form>\n</nav>\n\n<div id=\"mySidenav\" class=\"sidenav bg-dark border\" *ngIf=\"showSidebar\" [ngStyle]=\"{ 'width' : (showSidebar==false) ? '0px': '260px'  }\">\n  <nav id=\"sidebar\" class=\"sidebar \">\n    <div class=\"sidebar-content text-white text-center\">\n      LAYERS\n    </div>\n    <div class=\"jumbotron jumbotron-fluid mt-1\">\n      <button type=\"button\" class=\"btn btn-info btn-lg btn-block text-left\">Tile Layer<label class=\"switch mt-1\">\n            <input type=\"checkbox\" id=\"t\" value=\"tile\" [(ngModel)]=\"tile\" (click)=\"checkbox($event)\">\n            <span class=\"slider round\"></span>\n          </label></button>\n      <button type=\"button\" class=\"btn btn-info btn-lg btn-block text-left\">Raster Layer<label class=\"switch mt-1\">\n            <input type=\"checkbox\" id=\"r\" value=\"raster\" [(ngModel)]=\"raster\" (click)=\"checkbox($event)\">\n            <span class=\"slider round\"></span>\n          </label></button>\n    </div>\n  </nav>\n  <div (click)=\"hideSidebarScreen()\" style=\"float: left; top: 35vh; left:260px; background-color:rgb(105,145,184); width:40;height:60; padding:6px; position: fixed;cursor:pointer;\">\n    <span><i class=\"fa fa-2x text-white fa-arrow-circle-left\"></i></span>\n  </div>\n</div>\n<div [ngStyle]=\"{ 'display' : (msg==='tile') ? 'block' : 'none'}\">\n    <div id=\"tile\" class=\"map\"></div>\n    </div>\n    \n    <div>\n        <ngx-spinner\n        bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#0de353\" type = \"square-jelly-box\"\n        ></ngx-spinner> \n    <div id=\"imageMap\" class=\"map\"></div>\n    </div>\n<!--   \n<app-map [events]=\"eventsSubject.asObservable()\"></app-map>--> \n<div (click)=\"showSidebarScreen()\" style=\"float: left; top: 35vh; left:0; background-color:rgb(105,145,184); width:40;height:60; padding:6px; position: fixed;cursor:pointer;\">\n  <span><i class=\"fa fa-2x text-white fa-arrow-circle-right\"></i></span>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_source_BingMaps_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/BingMaps.js */ "./node_modules/ol/source/BingMaps.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/control.js */ "./node_modules/ol/control.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService, authService, ballLoader) {
        var _this = this;
        this.titleService = titleService;
        this.authService = authService;
        this.ballLoader = ballLoader;
        this.showSidebar = false;
        this.tile = true;
        this.msg = "tile";
        this.initilizeMap = function () {
            if (_this.msg === "tile") {
                _this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_9__["defaults"])().extend([
                        new ol_control_js__WEBPACK_IMPORTED_MODULE_9__["FullScreen"]()
                    ]),
                    target: 'tile',
                    loadTilesWhileInteracting: true,
                    layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
                            preload: Infinity,
                            source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"]()
                        })],
                    view: new ol_View__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        center: Object(ol_proj_js__WEBPACK_IMPORTED_MODULE_8__["fromLonLat"])([75, 17]),
                        zoom: 5
                    })
                });
            }
            else {
                _this.map1 = new ol_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_9__["defaults"])().extend([
                        new ol_control_js__WEBPACK_IMPORTED_MODULE_9__["FullScreen"]()
                    ]),
                    target: 'imageMap',
                    loadTilesWhileInteracting: true,
                    layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
                            preload: Infinity,
                            source: new ol_source_BingMaps_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
                                key: 'AomTKgWxCOKmJEcKKGOIxh36MTV7pG6TqzEyFZnjiVW73hq-_D8xriFM9ooP18DN',
                                imagerySet: 'AerialWithLabels'
                            })
                        })],
                    view: new ol_View__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        center: Object(ol_proj_js__WEBPACK_IMPORTED_MODULE_8__["fromLonLat"])([75, 17]),
                        zoom: 5
                    })
                });
            }
        };
        this.showSidebarScreen = function () {
            _this.showSidebar = true;
        };
        this.hideSidebarScreen = function () {
            _this.showSidebar = false;
        };
        this.checkbox = function ($event) {
            _this.ballLoader.show();
            setTimeout(function () { _this.ballLoader.hide(); }, 1000);
            if ($event.target.defaultValue === "tile") {
                if (_this.tile) {
                    _this.raster = true;
                    _this.msg = "raster";
                }
                else {
                    _this.raster = false;
                    _this.msg = "tile";
                }
            }
            else {
                if (_this.raster) {
                    _this.tile = true;
                    _this.msg = "tile";
                }
                else {
                    _this.tile = false;
                    _this.msg = "raster";
                }
            }
            _this.initilizeMap();
        };
        this.logout = function () {
            _this.authService.logout();
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Home");
        var all = JSON.parse(localStorage.getItem("userInfo"));
        this.userName = all.displayName !== null ? all.displayName : "Guest";
        this.initilizeMap();
    };
    //Map control buttons
    HomeComponent.prototype.handleKeyboardEvent = function (event) {
        if (this.msg === "tile") {
            if (event.shiftKey && event.key == '+') {
                var view = this.map.getView();
                var zoom = view.getZoom();
                view.setZoom(zoom + 1);
            }
            if (event.shiftKey && event.key == '_') {
                var view = this.map.getView();
                var zoom = view.getZoom();
                view.setZoom(zoom - 1);
            }
        }
        else {
            if (event.shiftKey && event.key == '+') {
                var view = this.map1.getView();
                var zoom = view.getZoom();
                view.setZoom(zoom + 1);
            }
            if (event.shiftKey && event.key == '_') {
                var view = this.map1.getView();
                var zoom = view.getZoom();
                view.setZoom(zoom - 1);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "handleKeyboardEvent", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center text-white\" style=\"word-wrap: break-word;min-height: 620px;\">\n  <div class=\"row  justify-content-center mt-5\">\n    <div class=\"col-12 text-center\">\n<div style=\"font-size: 9rem;\" >404</div>\n<div>THIS PAGE WAS NOT FOUND</div>\n<a class='btn btn-info m-3' href='#'><i class=\"fa fa-home\"></i>  BACK TO HOUSE</a>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/country-code/country-code.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/country-code/country-code.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/country-code/country-code.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/country-code/country-code.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select name=\"countryName\" [value]=\"countryName\" [(ngModel)]=\"countryName\" class=\"form-control\" id=\"country\" (change)=\"onChangeCountry($event.target.value)\" required>\n  <option disabled>select any one country</option>\n  <option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name\n    | uppercase}}</option>\n</select>\n"

/***/ }),

/***/ "./src/app/shared/country-code/country-code.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/country-code/country-code.component.ts ***!
  \***************************************************************/
/*! exports provided: CountryCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCodeComponent", function() { return CountryCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryCodeComponent = /** @class */ (function () {
    function CountryCodeComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.countryCodeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countryNameEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countries = [];
        this.getCode = function () {
            if (_this.country_Name) {
                _this.appService.getCountryList()
                    .subscribe(function (data) {
                    for (var key in data) {
                        if (data[key] === _this.country_Name) {
                            _this.countryName = key;
                            break;
                        }
                    }
                });
            }
        };
        this.showDropdown = function () {
            _this.appService.getCountryList()
                .subscribe(function (data) {
                _this.allcountries = data;
                for (var i in data) {
                    var oneCountry = {
                        name: data[i],
                        code: i
                    };
                    _this.countries.push(oneCountry);
                }
                // set for dropdown in sort order
                _this.countries.sort(function (a, b) { return a.name.localeCompare(b.name); });
                //end sort
            });
        };
        this.getCountryCodes = function () {
            _this.appService.getCountryCodes()
                .subscribe(function (data) {
                _this.countryCodes = data;
            }); //end subscribe
        }; //end getCountries
        this.onChangeCountry = function (code) {
            _this.countryCodeEvent.emit(_this.countryCodes[code]);
            _this.countryNameEvent.emit(_this.allcountries[code]);
        }; //end onChangeCountry
    }
    CountryCodeComponent.prototype.ngOnInit = function () {
        this.showDropdown();
        this.getCountryCodes();
        this.getCode();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CountryCodeComponent.prototype, "country_Name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CountryCodeComponent.prototype, "countryCodeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CountryCodeComponent.prototype, "countryNameEvent", void 0);
    CountryCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-code',
            template: __webpack_require__(/*! ./country-code.component.html */ "./src/app/shared/country-code/country-code.component.html"),
            styles: [__webpack_require__(/*! ./country-code.component.css */ "./src/app/shared/country-code/country-code.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], CountryCodeComponent);
    return CountryCodeComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _country_code_country_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-code/country-code.component */ "./src/app/shared/country-code/country-code.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_country_code_country_code_component__WEBPACK_IMPORTED_MODULE_3__["CountryCodeComponent"]],
            exports: [_country_code_country_code_component__WEBPACK_IMPORTED_MODULE_3__["CountryCodeComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/user/app-password.directive.ts":
/*!************************************************!*\
  !*** ./src/app/user/app-password.directive.ts ***!
  \************************************************/
/*! exports provided: AppPasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPasswordDirective", function() { return AppPasswordDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppPasswordDirective = /** @class */ (function () {
    function AppPasswordDirective(el) {
        this.el = el;
        this._shown = false;
        this.setup();
    }
    AppPasswordDirective.prototype.toggle = function (span) {
        this._shown = !this._shown;
        if (this._shown) {
            this.el.nativeElement.setAttribute('type', 'text');
            span.innerHTML = "<button class='fa fa-3x btn text-white bg-success'>&#xf070;</button>";
        }
        else {
            this.el.nativeElement.setAttribute('type', 'password');
            span.innerHTML = "<button class='fa fa-3x btn text-white bg-success'>&#xf06e;</button>";
        }
    };
    AppPasswordDirective.prototype.setup = function () {
        var _this = this;
        var parent = this.el.nativeElement.parentNode;
        var span = document.createElement('span');
        span.innerHTML = "<button class='fa fa-3x btn text-white bg-success'>&#xf06e;</button>";
        span.addEventListener('click', function (event) {
            _this.toggle(span);
        });
        parent.appendChild(span);
    };
    AppPasswordDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appPassword]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppPasswordDirective);
    return AppPasswordDirective;
}());



/***/ }),

/***/ "./src/app/user/forget-password/forget-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forget-password/forget-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .top{\n    margin-top: 25vh;\n    }"

/***/ }),

/***/ "./src/app/user/forget-password/forget-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forget-password/forget-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#0de353\" type = \"square-jelly-box\"\n></ngx-spinner> \n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col d-flex align-items-center justify-content-center top\">\n      <!-- form card login -->\n      <div class=\"card card-block p-3\" style=\"background-image: url(https://s3.ap-south-1.amazonaws.com/portfolio-cloud/assets/images/bg_1.png);\">\n          <h2 class=\"text-center text-white\"><i class=\"fa fa-lock mx-1\"></i>Forgot Password?</h2>\n            <p class=\"small text-mute text-white\">If you've forgotten your password, we'll send you an email to reset your password.</p>\n            <form #forgetForm=\"ngForm\" novalidate>\n            <div class=\"form-group px-3\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                      <i class=\"fa fa-user\"></i>\n                  </div>\n                </div>\n                <input name=\"email\" aria-label=\"email address\" class=\"form-control input-lg requiredField\" [(ngModel)]=\"email\" placeholder=\"Email address\"\n                  required autofocus #mail=\"ngModel\">\n              </div>\n            </div>\n\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"mail.invalid && (mail.dirty || mail.touched)\">\n            <li><span *ngIf=\"mail.errors.required\">Email address is required.</span></li>\n          </div>\n            <div class=\"form-group px-3\">\n              <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!forgetForm.form.valid\" (click)=\"sendResetLink()\">Reset Password</button>\n            </div>\n            <div class=\"text-center text-white mt-3 p-3\">Do you remember ur password? <a style=\"text-decoration: underline;color:#5cb85c;cursor: pointer;\"\n                (click)=\"goToSignIn()\">Sign In</a></div>\n                </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/user/forget-password/forget-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forget-password/forget-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(authService, router, toastr, titleService, ballLoader) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.titleService = titleService;
        this.ballLoader = ballLoader;
        this.sendResetLink = function () {
            _this.ballLoader.show();
            setTimeout(function () { _this.ballLoader.hide(); }, 2000);
            var data = {
                email: _this.email
            };
            _this.authService.forgotPassword(data.email)
                .then(function () {
                _this.toastr.success("Password reset email sent, check your inbox.");
                _this.goToSignIn();
            }, function (err) {
                _this.toastr.error(err.message);
                console.log(err);
            }); // end condition
        };
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Forget Password");
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/user/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/user/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".or-seperator {\n    border-top: 1px solid #e0e0e0;\n  }\n\n  .or-seperator b {\n    width: 40px;\n    height: 40px;\n    font-size: 18px;\n    line-height: 40px;\n    background: #fff;\n    display: inline-block;\n    border: 1px solid #e0e0e0;\n    border-radius: 50%;\n    position: relative;\n    top: -22px;\n    z-index: 1;\n  }\n\n  .or-seperator b:hover {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n    transition: 2s;\n  }\n\n  /* social */\n\n  .social-btn .btn {\n    color: #fff;\n    margin: 10px 0 0 30px;\n    font-size: 15px;\n    width: 50px;\n    height: 50px;\n    line-height: 38px;\n    border-radius: 50%;\n    font-weight: normal;\n    text-align: center;\n    border: none;\n    transition: all 0.4s;\n  }\n\n  .social-btn .btn:first-child {\n    margin-left: 0;\n  }\n\n  .social-btn .btn:hover {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    transition: 2s;\n  }\n\n  .social-btn .btn i {\n    font-size: 3.5vh;\n  }"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor = \"rgba(51, 51, 51, 0.8)\" size = \"medium\" color = \"#0de353\" type = \"square-jelly-box\"\n></ngx-spinner> \n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col d-flex align-items-center my-5 justify-content-center\">\n      <!-- form card login -->\n      <div class=\"card card-block p-3\" style=\"background-image: url(https://s3.ap-south-1.amazonaws.com/portfolio-cloud/assets/images/bg_1.png);\">\n        <h2 class=\"text-white text-center font-weight-bold my-3\">OpenLayers 3 - Maps</h2>\n        <form #loginForm=\"ngForm\" novalidate>\n        <div class=\"form-group px-3\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                <i class=\"fa fa-user\"></i>\n              </div>\n            </div>\n            <input type=\"email\" id=\"email\" name=\"email\" aria-label=\"email address\" class=\"form-control input-lg email requiredField\" [(ngModel)]=\"email\" placeholder=\"Email address\" #mail=\"ngModel\"\n              required>\n          </div>\n        </div>\n        <div class=\"alert alert-danger mx-2\" *ngIf=\"mail.invalid && (mail.dirty || mail.touched)\">\n            <li><span class=\"text-danger\" *ngIf=\"mail.errors.required\">Email address is required.</span></li>\n          </div>\n        <div class=\"form-group  px-3\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                  <i class=\"fa fa-key\"></i>\n                </div>\n              </div>\n              <input type=\"password\" id=\"password\" aria-label=\"password\" appPassword class=\"form-control input-lg password\" name=\"password\" (keydown)=\"sendUsingKeypress($event)\"\n                [(ngModel)]=\"password\" placeholder=\"Password\" required #x=\"ngModel\" >\n            </div>\n          </div>\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"x.invalid && (x.dirty || x.touched)\">\n              <li><span class=\"text-danger\" *ngIf=\"x.errors.required\">Password is required.</span></li>\n          </div>\n          <div class=\"text-right small mr-3 mb-1\"><a style=\"text-decoration: underline;color:#5cb85c;cursor: pointer;\"\n            (click)=\"goToForgetPassword()\">Forgot Your password?</a></div>\n        <div class=\"form-group px-3\">\n          <button type=\"submit\" class=\"btn btn-success btn-block signup-btn\" (click)=\"signinFunction()\" [disabled]=\"!loginForm.form.valid\">Login</button>\n        </div>\n        </form>\n        <div class=\"mt-3 mx-3 or-seperator text-center\"><b>or</b></div>\n        <p class=\"hint-text text-center text-white\">Sign in with your social media account</p>\n        <div class=\"social-btn text-center\">\n          <button (click)=\"loginWithGoogle()\" class=\"btn btn-danger btn-lg\" title=\"Google\"><i class=\"fa fa-google\"></i></button>\n          <button (click)=\"loginWithFacebook()\" class=\"btn btn-primary btn-lg\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></button>\n        </div>\n        <div class=\"text-center text-white small mt-3 p-3\">Don't have an account? <a style=\"text-decoration: underline;color:#5cb85c;cursor: pointer;\"\n            (click)=\"goToSignUp()\">Sign up</a></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, authService, router, toastr, ballLoader, titleService) {
        var _this = this;
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.ballLoader = ballLoader;
        this.titleService = titleService;
        this.password = "";
        this.goToSignUp = function () {
            _this.router.navigate(["/sign-up"]);
        }; // end goToSignUp
        this.goToForgetPassword = function () {
            _this.router.navigate(["/forget-password"]);
        }; // end goToSignUp
        this.sendUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                // 13 is keycode of enter.
                _this.signinFunction();
            }
        }; // end sendMessageUsingKeypress
        this.signinFunction = function () {
            _this.ballLoader.show();
            setTimeout(function () { _this.ballLoader.hide(); }, 2000);
            _this.authService.loginEmail(_this.email, _this.password).then(function () {
                _this.toastr.success('Successfully Login');
                _this.router.navigate(["/home"]);
            }, function (err) {
                if (err.message !== undefined) {
                    _this.toastr.error(err.message);
                }
                else {
                    _this.toastr.error(err);
                }
            });
        }; // end signinFunction
        this.loginWithGoogle = function () {
            _this.authService.loginWithGoogle().then(function () {
                _this.toastr.success('Successfully Login');
                _this.ballLoader.show();
                setTimeout(function () { _this.router.navigate(["/home"]); _this.ballLoader.hide(); }, 2000);
            }, function (err) {
                _this.toastr.error(err.message);
                console.log(err);
            });
        };
        this.loginWithFacebook = function () {
            _this.authService.loginWithFacebook().then(function () {
                _this.toastr.success('Successfully Login');
                _this.ballLoader.show();
                setTimeout(function () { _this.router.navigate(["/home"]); _this.ballLoader.hide(); }, 2000);
            }, function (err) {
                _this.toastr.error(err.message);
                console.log(err);
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Login");
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#0de353\" type=\"square-jelly-box\"></ngx-spinner>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col d-flex  align-items-center my-5 justify-content-center\">\n      <!-- form card registion -->\n      <div class=\"card card-block p-3\" style=\"background-image: url(https://s3.ap-south-1.amazonaws.com/portfolio-cloud/assets/images/bg_1.png);\">\n        <h2 class=\"text-white text-center mb-1\">Sign Up</h2>\n        <form #signupForm=\"ngForm\" novalidate>\n          <div class=\"form-group px-3\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                  <i class=\"fa fa-user\"></i>\n                </div>\n              </div>\n              <input type=\"text\" id=\"userName\" name=\"userName\" class=\"form-control\" [pattern]=\"userPattern\" [(ngModel)]=\"userName\"\n                #name=\"ngModel\" placeholder=\"User Name\" required minlength=\"4\">\n            </div>\n          </div>\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n            <li><span class=\"text-danger\" *ngIf=\"name.errors.required\">User Name is required.</span></li>\n            <li><span class=\"text-danger\" *ngIf=\"name.errors.minlength\">User Name must be atleast 4 characters long.</span></li>\n            <li> <span class=\"text-danger\" *ngIf=\"name.errors.pattern\">User Name should start with atleast 4 characters</span></li>\n          </div>\n          <div class=\"form-group px-3\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                  <i class=\"fa fa-globe\"></i>\n                </div>\n                <app-country-code (countryCodeEvent)=\"receiverCode($event)\" (countryNameEvent)=\"receiverName($event)\"></app-country-code>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group px-3 mt-2\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                  <i class=\"fa fa-phone\"></i>\n                </div>\n                <button type=\"button\" id=\"code\" class=\"btn btn-sm\" style=\"background-color:#fff; color:black;\" *ngIf=\"countryCode\">+{{countryCode}}</button>\n              </div>\n              <input id=\"inputMobile\" class=\"form-control\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\" #mobile=\"ngModel\"\n                placeholder=\"Mobile number\" required pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\">\n            </div>\n          </div>\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"mobile.invalid && (mobile.dirty ||mobile.touched)\">\n            <li> <span class=\"text-danger\" *ngIf=\"mobile.errors.required\">Mobile number is required.</span></li>\n            <li> <span class=\"text-danger\" *ngIf=\"!mobile.errors.minlength && mobile.hasError('pattern')\">Mobile number\n                is not validate.</span></li>\n            <li> <span class=\"text-danger\" *ngIf=\"mobile.errors.minlength\">Mobile number must be 10 digit.</span></li>\n          </div>\n          <div class=\"form-group px-3  mt-2\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                  <i class=\"fa fa-envelope\"></i>\n                </div>\n              </div>\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" #mail=\"ngModel\"\n                placeholder=\"Email address\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n            </div>\n          </div>\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"mail.invalid && (mail.dirty || mail.touched)\">\n            <li><span class=\"text-danger\" *ngIf=\"mail.errors.required\">Email address is required.</span></li>\n            <li><span class=\"text-danger\" *ngIf=\"mail.errors.pattern\">Enter the valid Email address</span></li>\n          </div>\n          <div class=\"form-group px-3  mt-2\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                  <i class=\"fa fa-key\"></i>\n                </div>\n              </div>\n              <input required type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"passWord\"\n                placeholder=\"Password\" appPassword [pattern]=\"passwordPattern\" minlength=\"8\" maxlength=\"30\" #x=\"ngModel\">\n            </div>\n          </div>\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"x.invalid && (x.dirty || x.touched)\">\n            <li><span class=\"text-danger\" *ngIf=\"x.errors.required\">Password is required.</span></li>\n            <li><span class=\"text-danger\" *ngIf=\"x.errors.minlength\">Password must be 8 characters long, we need\n                another\n                {{x.errors.minlength.requiredLength - x.errors.minlength.actualLength}} characters </span></li>\n            <li><span class=\"text-danger\" *ngIf=\"x.errors.maxlength\">Password must be less than 30 characters long.</span></li>\n            <li><span class=\"text-danger\" *ngIf=\"!x.errors.minlength && x.errors.pattern\">First character must be a\n                letter.</span></li>\n          </div>\n          <div class=\"form-group px-3  mt-2\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\" style=\"background-color:#5cb85c; color:#fff;\">\n                  <i class=\"fa fa-key\"></i>\n                </div>\n              </div>\n              <input name=\"confirmPassword\" required type=\"password\" id=\"confirmpassword\" class=\"form-control\"\n                placeholder=\"Confirm Password\" appPassword [(ngModel)]=\"confirmPassword\" #y=\"ngModel\">\n\n            </div>\n          </div>\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"y.invalid && (y.dirty || y.touched)\">\n            <li><span class=\"text-danger\" *ngIf=\"y.errors.required\">Confirm Password is required.</span></li>\n          </div>\n          <div class=\"alert alert-danger mx-2\" *ngIf=\"(x.dirty && y.dirty)\" [hidden]=\"(y.value===x.value)\">\n            <li> <span class=\"text-danger\">Pasword and Confirm Password is not matched</span></li>\n          </div>\n          <div class=\"form-group px-3  mt-2\">\n            <button class=\"btn btn-lg btn-success btn-block signup-btn\" type=\"button\" [disabled]=\"!signupForm.form.valid\"\n              (click)=\"signupFunction()\">Sign\n              Up</button>\n          </div>\n          <div class=\"text-center text-white small p-1\">Do you already have an account? <a style=\"text-decoration: underline;color:#5cb85c;cursor: pointer;\"\n              (click)=\"goToSignIn()\">Sign in</a></div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, toastr, titleService, ballLoader) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.titleService = titleService;
        this.ballLoader = ballLoader;
        this.userPattern = "^[a-zA-Z]{4,}[a-zA-Z0-9\s@#_-\w]*$";
        this.emailPattern = "^/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
        this.passwordPattern = "^[A-Za-z_]{1,}.{7,30}$";
        this.user = null;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            _this.ballLoader.show();
            setTimeout(function () { _this.ballLoader.hide(); }, 2000);
            if (_this.countryCode) {
                var data = {
                    displayName: _this.userName,
                    phoneNumber: _this.countryCode + _this.mobileNumber,
                    email: _this.email,
                    password: _this.passWord
                };
                _this.authService.registerUser(data)
                    .then(function () {
                    _this.toastr.success('You have been successfully registered!,Verify You');
                    _this.goToSignIn();
                }, function (err) {
                    _this.toastr.error(err.message);
                    console.log(err);
                }); // end condition
            }
            else {
                _this.toastr.warning("Select the Countries");
            }
        }; // end signupFunction
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("SignUp");
    };
    SignupComponent.prototype.receiverCode = function ($event) {
        this.countryCode = $event;
    };
    SignupComponent.prototype.receiverName = function ($event) {
        this.countryName = $event;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_password_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-password.directive */ "./src/app/user/app-password.directive.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/user/forget-password/forget-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
                    { path: 'forget-password', component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPasswordComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPasswordComponent"], _app_password_directive__WEBPACK_IMPORTED_MODULE_8__["AppPasswordDirective"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sathyanarayanan/mean/enroco/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map