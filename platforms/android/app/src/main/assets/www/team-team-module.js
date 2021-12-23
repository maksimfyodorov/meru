(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"],{

/***/ "Uyvp":
/*!********************************************!*\
  !*** ./src/app/presentation/team.guard.ts ***!
  \********************************************/
/*! exports provided: TeamGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamGuard", function() { return TeamGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "hsFk");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/user.service */ "f4AX");
/* harmony import */ var _shared_http_services_log_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/http/services/log-api.service */ "Rs3s");







class TeamGuard {
    constructor($router, $auth, _user, $logApi) {
        this.$router = $router;
        this.$auth = $auth;
        this._user = _user;
        this.$logApi = $logApi;
    }
    canActivate(route, state) {
        if (this._user.label.labelGroups.length) {
            return true;
        }
        else {
            if (Array.isArray(route.url) && route.url.length > 0) {
                this.$logApi
                    .putLogData({
                    loggerName: 'customSecurity',
                    message: `Attempt to open forbidden component - ${route.url[0].path}`,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                    .subscribe((res) => { });
            }
            return false;
        }
    }
}
TeamGuard.ɵfac = function TeamGuard_Factory(t) { return new (t || TeamGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_log_api_service__WEBPACK_IMPORTED_MODULE_5__["LogApiService"])); };
TeamGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamGuard, factory: TeamGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _shared_http_services_log_api_service__WEBPACK_IMPORTED_MODULE_5__["LogApiService"] }]; }, null); })();


/***/ }),

/***/ "fl93":
/*!**************************************************!*\
  !*** ./src/app/presentation/team/team.module.ts ***!
  \**************************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _presentation_team_team_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-routing.module */ "yjzO");





class TeamModule {
}
TeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamModule });
TeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamModule_Factory(t) { return new (t || TeamModule)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild(),
            _presentation_team_team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamModule, { imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _presentation_team_team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild(),
                    _presentation_team_team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "yjzO":
/*!**********************************************************!*\
  !*** ./src/app/presentation/team/team-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TeamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRoutingModule", function() { return TeamRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _team_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../team.guard */ "Uyvp");





const routes = [
    {
        path: 'profiles',
        children: [
            {
                path: ':userId',
                loadChildren: () => Promise.all(/*! import() | team-profile-team-profile-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module~team-prof~02a0fcc2"), __webpack_require__.e("team-profile-team-profile-module")]).then(__webpack_require__.bind(null, /*! ./team-profile/team-profile.module */ "MX7l")).then(({ TeamProfileModule }) => TeamProfileModule),
            },
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => Promise.all(/*! import() | team-profiles-team-profiles-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module~team-prof~02a0fcc2"), __webpack_require__.e("team-profiles-team-profiles-module")]).then(__webpack_require__.bind(null, /*! ./team-profiles/team-profiles.module */ "xA7G")).then(({ TeamProfilesModule }) => TeamProfilesModule),
            },
        ],
    },
    {
        path: 'requests',
        loadChildren: () => Promise.all(/*! import() | team-requests-team-requests-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module~team-prof~02a0fcc2"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-requests-team-requests-module~t~91afb84d"), __webpack_require__.e("default~reservations-reservations-module~team-requests-team-requests-module~team-reservations-team-r~d46fbeaa"), __webpack_require__.e("common"), __webpack_require__.e("team-requests-team-requests-module")]).then(__webpack_require__.bind(null, /*! ./team-requests/team-requests.module */ "q7To")).then(({ TeamRequestsModule }) => TeamRequestsModule),
        canActivate: [_team_guard__WEBPACK_IMPORTED_MODULE_2__["TeamGuard"]],
    },
    {
        path: 'reservations',
        children: [
            {
                path: 'create',
                loadChildren: () => Promise.all(/*! import() | team-create-team-create-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~offices-offices-module~reservations-reserv~185ffae0"), __webpack_require__.e("default~develop-develop-module~offices-map-offices-map-module~reservations-reservations-module~team-~9c949e03"), __webpack_require__.e("default~dashboard-dashboard-module~offices-map-offices-map-module~reservation-create-reservation-cre~c1eb1ab2"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-create-team-create-module"), __webpack_require__.e("default~offices-map-offices-map-module~reservation-create-reservation-create-module~team-create-team~5c833816"), __webpack_require__.e("common"), __webpack_require__.e("team-create-team-create-module")]).then(__webpack_require__.bind(null, /*! ./team-create/team-create.module */ "gEbJ")).then(({ TeamCreateModule }) => TeamCreateModule),
                data: {
                    title: 'Бронирование',
                },
            },
            {
                path: ':type',
                loadChildren: () => Promise.all(/*! import() | team-reservations-team-reservations-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module~team-prof~02a0fcc2"), __webpack_require__.e("default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-requests-team-requests-module~t~91afb84d"), __webpack_require__.e("default~develop-develop-module~office-services-office-services-module~reservations-reservations-modu~91cbca5f"), __webpack_require__.e("default~reservations-reservations-module~team-requests-team-requests-module~team-reservations-team-r~d46fbeaa"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-reservations-team-reservations-module"), __webpack_require__.e("default~reservations-reservations-module~team-reservations-team-reservations-module"), __webpack_require__.e("common"), __webpack_require__.e("team-reservations-team-reservations-module")]).then(__webpack_require__.bind(null, /*! ./team-reservations/team-reservations.module */ "Ou3z")).then(({ TeamReservationsModule }) => TeamReservationsModule),
                data: {},
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'workplace',
            },
        ],
        canActivate: [_team_guard__WEBPACK_IMPORTED_MODULE_2__["TeamGuard"]],
    },
];
class TeamRoutingModule {
}
TeamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamRoutingModule });
TeamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamRoutingModule_Factory(t) { return new (t || TeamRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-team-module.js.map