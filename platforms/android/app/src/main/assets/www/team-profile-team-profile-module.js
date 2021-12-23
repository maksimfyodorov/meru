(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-profile-team-profile-module"],{

/***/ "MX7l":
/*!***********************************************************************!*\
  !*** ./src/app/presentation/team/team-profile/team-profile.module.ts ***!
  \***********************************************************************/
/*! exports provided: TeamProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfileModule", function() { return TeamProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _team_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-profile.component */ "6A2W");
/* harmony import */ var _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @composite/user-card/user-card.module */ "W6Nk");
/* harmony import */ var _presentation_team_team_profile_team_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/team/team-profile/team-profile-routing.module */ "nx3Y");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @base/renderer/renderer.module */ "R3cO");











class TeamProfileModule {
}
TeamProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamProfileModule });
TeamProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamProfileModule_Factory(t) { return new (t || TeamProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_3__["UserCardModule"],
            _presentation_team_team_profile_team_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["TeamProfileRoutingModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__["NzTabsModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_9__["RendererModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamProfileModule, { declarations: [_team_profile_component__WEBPACK_IMPORTED_MODULE_2__["TeamProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_3__["UserCardModule"],
        _presentation_team_team_profile_team_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["TeamProfileRoutingModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__["NzTabsModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_9__["RendererModule"]], exports: [_team_profile_component__WEBPACK_IMPORTED_MODULE_2__["TeamProfileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_profile_component__WEBPACK_IMPORTED_MODULE_2__["TeamProfileComponent"]],
                exports: [_team_profile_component__WEBPACK_IMPORTED_MODULE_2__["TeamProfileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_3__["UserCardModule"],
                    _presentation_team_team_profile_team_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["TeamProfileRoutingModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__["NzTabsModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                    _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_9__["RendererModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nx3Y":
/*!*******************************************************************************!*\
  !*** ./src/app/presentation/team/team-profile/team-profile-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TeamProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfileRoutingModule", function() { return TeamProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_team_team_profile_team_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-profile/team-profile.component */ "6A2W");





const routes = [
    {
        path: '',
        component: _presentation_team_team_profile_team_profile_component__WEBPACK_IMPORTED_MODULE_2__["TeamProfileComponent"],
        data: {
            title: 'Просмотр профиля'
        }
    }
];
class TeamProfileRoutingModule {
}
TeamProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamProfileRoutingModule });
TeamProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamProfileRoutingModule_Factory(t) { return new (t || TeamProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-profile-team-profile-module.js.map