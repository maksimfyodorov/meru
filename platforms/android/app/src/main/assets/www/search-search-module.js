(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "0WtB":
/*!*****************************************************!*\
  !*** ./src/app/presentation/search/search.utils.ts ***!
  \*****************************************************/
/*! exports provided: SEARCH_TYPES, TABS_TITLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_TYPES", function() { return SEARCH_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_TITLES", function() { return TABS_TITLES; });
const SEARCH_TYPES = ['all', 'user', 'workplace', 'room', 'parkingLot', 'customObject'];
const TABS_TITLES = {
    all: 'All',
    customObject: 'Custom objects',
    room: 'Rooms',
    user: 'Users',
    workplace: 'Workplaces',
    parkingLot: 'ParkingLots'
};


/***/ }),

/***/ "9jSM":
/*!**************************************************************!*\
  !*** ./src/app/presentation/search/search-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @presentation/search/search.component */ "hlP/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _presentation_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]
    },
    {
        path: ':type',
        component: _presentation_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]
    }, {
        path: '**',
        redirectTo: '/search'
    }
];
class SearchRoutingModule {
}
SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SearchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Wb5g":
/*!*******************************************************!*\
  !*** ./src/app/presentation/search/search.service.ts ***!
  \*******************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _presentation_search_search_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/search/search.utils */ "0WtB");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/navigation.service */ "CWrn");
/* harmony import */ var _shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/global-search/global-search.service */ "AdiC");









class SearchService {
    constructor($activatedRoute, $navigation, $globalSearch) {
        this.$activatedRoute = $activatedRoute;
        this.$navigation = $navigation;
        this.$globalSearch = $globalSearch;
    }
    /**
     * @returns {Observable<string>} - запроса
     */
    get query$() {
        return this.$activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('query'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(query => typeof query === 'string' ? query.trim().toLocaleLowerCase() : ''));
    }
    /**
     * @returns {Observable<SearchType>} - тип поиска
     */
    get type$() {
        return this.$activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('type'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((type) => _presentation_search_search_utils__WEBPACK_IMPORTED_MODULE_3__["SEARCH_TYPES"].includes(type) ? type : 'all'));
    }
    /**
     * @returns {Observable<number>} - начальный индекс вкладки
     */
    get initialTabIndex$() {
        return this.type$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((type) => _presentation_search_search_utils__WEBPACK_IMPORTED_MODULE_3__["SEARCH_TYPES"].indexOf(type)));
    }
    /**
     * @returns {Observable<string>} - начальное значение запроса
     */
    get initialQuery$() {
        return this.query$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    /**
     * @returns {Observable<IResult>} - врезультат поиска
     */
    get result$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.type$, this.query$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([type, query]) => this.switchQueryToResult(type, query)));
    }
    search(query) {
        this.$navigation.changeQueryParams({ query }).then();
    }
    changeType(index) {
        const extras = {
            queryParams: this.$activatedRoute.snapshot.queryParams
        };
        this.$navigation.go(['search', _presentation_search_search_utils__WEBPACK_IMPORTED_MODULE_3__["SEARCH_TYPES"][index]], extras);
    }
    openItem(type, data) {
        this.$globalSearch.openItem(type, data);
    }
    switchQueryToResult(type, query) {
        let result$;
        if (Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(query)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        switch (type) {
            case 'customObject':
                result$ = this.$globalSearch.searchCustomObjects(query);
                break;
            case 'room':
                result$ = this.$globalSearch.searchRooms(query);
                break;
            case 'user':
                result$ = this.$globalSearch.searchUsers(query);
                break;
            case 'workplace':
                result$ = this.$globalSearch.searchWorkplaces(query);
                break;
            case 'parkingLot':
                result$ = this.$globalSearch.searchParkingLots(query);
                break;
            default:
                return this.$globalSearch.search(query);
        }
        return result$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => [].concat(result)));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_7__["GlobalSearchService"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }, { type: _shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_7__["GlobalSearchService"] }]; }, null); })();


/***/ }),

/***/ "hlP/":
/*!*********************************************************!*\
  !*** ./src/app/presentation/search/search.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/search/search.service */ "Wb5g");
/* harmony import */ var _presentation_search_search_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/search/search.utils */ "0WtB");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "3/1E");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");
/* harmony import */ var _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/pipes/highlight.pipe */ "em9I");
























function SearchComponent_nz_tab_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const SearchType_r16 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r0.tabsTitles[SearchType_r16]));
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r22.data));
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r22.data));
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r22.data));
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_11_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r22.data));
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r22.data));
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_Template_nz_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const item_r22 = ctx.$implicit; const resultGroup_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r38.openItem(resultGroup_r18.type, item_r22.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-item-meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-list-item-meta-avatar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "imageBlob");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-list-item-meta-description", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_8_Template, 2, 4, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_9_Template, 2, 4, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_10_Template, 2, 4, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_11_Template, 2, 4, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_ng_container_12_Template, 2, 4, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const resultGroup_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSrc", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, item_r22.img)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r22.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", resultGroup_r18.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "customObject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "workplace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "parkingLot");
} }
function SearchComponent_ng_container_11_nz_list_1_nz_list_empty_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-list-empty", 32);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNoResult", _r6);
} }
const _c1 = function (a0) { return { display: a0 }; };
function SearchComponent_ng_container_11_nz_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nz-pagination", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchComponent_ng_container_11_nz_list_1_nz_list_item_11_Template, 13, 13, "nz-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SearchComponent_ng_container_11_nz_list_1_nz_list_empty_13_Template, 1, 1, "nz-list-empty", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resultGroup_r18 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, resultGroup_r18.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTotal", resultGroup_r18.items.length)("nzPageSize", ctx_r17.resultGroupPageSize)("nzSize", "small")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, resultGroup_r18.items.length < ctx_r17.resultGroupPageSize ? "none" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 12, resultGroup_r18.items, (_r19.nzPageIndex - 1) * _r19.nzPageSize, _r19.nzPageIndex * _r19.nzPageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !resultGroup_r18.items.length);
} }
function SearchComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_container_11_nz_list_1_Template, 14, 18, "nz-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.result);
} }
function SearchComponent_ng_template_12_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Post"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, data_r42.post, ctx_r43.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function SearchComponent_ng_template_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchComponent_ng_template_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Phones"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, data_r42.phones, ctx_r45.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function SearchComponent_ng_template_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchComponent_ng_template_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Email"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, data_r42.mail, ctx_r47.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function SearchComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchComponent_ng_template_12_span_0_Template, 5, 7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_template_12_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchComponent_ng_template_12_span_2_Template, 5, 7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchComponent_ng_template_12_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchComponent_ng_template_12_span_4_Template, 5, 7, "span", 33);
} if (rf & 2) {
    const data_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r42.post);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r42.post && (data_r42.phones || data_r42.mail));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r42.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r42.phones && data_r42.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r42.mail);
} }
function SearchComponent_ng_template_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "highlight");
} if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 1, data_r51.description, ctx_r52.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function SearchComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchComponent_ng_template_14_div_3_Template, 2, 4, "div", 34);
} if (rf & 2) {
    const data_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, "Building"), ": ", data_r51.building, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, "Floor"), ": ", data_r51.floor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r51.description);
} }
function SearchComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "EmptySearchResults"));
} }
function SearchComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 35);
} }
function SearchComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", _r12)("nzNotFoundImage", _r14);
} }
function SearchComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "PleaseEnterQueryForSearch"));
} }
function SearchComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 37);
} }
const _c2 = function () { return { suppressScrollX: true }; };
class SearchComponent {
    constructor($cdr, $service) {
        this.$cdr = $cdr;
        this.$service = $service;
        this.searchTypes = _presentation_search_search_utils__WEBPACK_IMPORTED_MODULE_3__["SEARCH_TYPES"];
        this.tabsTitles = _presentation_search_search_utils__WEBPACK_IMPORTED_MODULE_3__["TABS_TITLES"];
        this.type = 'all';
        this.query = this.$service.query$;
        this.initialQuery = this.$service.initialQuery$;
        this.initialTabIndex = this.$service.initialTabIndex$;
        this.result = this.$service.result$;
        this.resultGroupPageSize = this.$service.type$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(type => this.type = type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(type => type === 'all' ? 6 : 12));
    }
    search(query) {
        this.$service.search(query);
    }
    changeType(index) {
        this.$service.changeType(index);
    }
    openItem(type, data) {
        this.$service.openItem(type, data);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _presentation_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        ])], decls: 26, vars: 17, consts: [[1, "search"], ["nz-typography", ""], [3, "nzSelectedIndex", "nzSize", "nzSelectedIndexChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzSuffixIcon", "nzSize"], ["nz-input", "", 3, "placeholder", "name", "ngModel", "ngModelChange"], [1, "search__scroll", 3, "config"], [4, "ngIf", "ngIfElse"], ["searchResultItemDescriptionUserTpl", ""], ["searchResultItemReserveItemTpl", ""], ["emptySearchResultTpl", ""], ["emptyResultsIconTpl", ""], ["noSearchQueryResultsTpl", ""], ["noSearchQueryResultsContentTpl", ""], ["noSearchQueryResultsIconTpl", ""], [3, "nzTitle"], ["nzGrid", "", 4, "ngFor", "ngForOf"], ["nzGrid", ""], [1, "align-items-center"], [3, "nzSpan"], [1, "text-right", 3, "nzSpan"], [3, "nzTotal", "nzPageSize", "nzSize", "ngStyle"], ["paging", "nzPagination"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "click", 4, "ngFor", "ngForOf"], [3, "nzNoResult", 4, "ngIf"], ["nz-col", "", 3, "nzSpan", "click"], [3, "nzSrc"], [3, "innerHTML"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoResult"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["nz-icon", "", "nzType", "frown", "nzTheme", "outline"], [3, "nzNotFoundContent", "nzNotFoundImage"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-tabset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzSelectedIndexChange", function SearchComponent_Template_nz_tabset_nzSelectedIndexChange_5_listener($event) { return ctx.changeType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchComponent_nz_tab_6_Template, 2, 3, "nz-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_8_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "perfect-scrollbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchComponent_ng_container_11_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchComponent_ng_template_12_Template, 5, 5, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SearchComponent_ng_template_14_Template, 4, 9, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SearchComponent_ng_template_16_Template, 4, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SearchComponent_ng_template_18_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SearchComponent_ng_template_20_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SearchComponent_ng_template_22_Template, 4, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SearchComponent_ng_template_24_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 12, "HowCanWeHelpYou"), "? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSelectedIndex", ctx.initialTabIndex)("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSuffixIcon", "search")("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 14, "StartWritingWhatYouWantFind"))("name", "query")("ngModel", ctx.initialQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result)("ngIfElse", _r10);
    } }, directives: [ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__["NzTypographyComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListGridDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListHeaderComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__["NzPaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListItemComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListItemMetaComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListItemMetaAvatarComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListItemMetaTitleComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListItemMetaDescriptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListEmptyComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconDirective"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_20__["ImageBlobPipe"], _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_21__["HighlightPipe"]], styles: [".search[_ngcontent-%COMP%] {\n  background: #ffffff;\n  height: 100%;\n  padding: 24px;\n}\n.search__scroll[_ngcontent-%COMP%] {\n  height: calc(100% - 210px);\n  max-width: calc(100% + 16px);\n  padding-right: 16px;\n  position: relative;\n  width: calc(100% + 16px);\n}\n.search__scroll[_ngcontent-%COMP%]     .ps-content {\n  height: 100%;\n}\n.search[_ngcontent-%COMP%]     .ant-list-split .ant-list-item {\n  border-bottom: none;\n}\n.search[_ngcontent-%COMP%]     .ant-list-item {\n  cursor: pointer;\n}\n.search[_ngcontent-%COMP%]     .ant-list-header {\n  padding: 0;\n}\n.search[_ngcontent-%COMP%]     .ant-tabs-nav {\n  margin: 0;\n  padding: 0 4px;\n}\n.search[_ngcontent-%COMP%]     .ant-tabs-nav::before {\n  display: none;\n}\n.search[_ngcontent-%COMP%]     .ant-empty-image {\n  align-items: center;\n  color: #aaaaaa;\n  display: flex;\n  font-size: 48px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFoQkQ7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBa0JGO0FBaEJFO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQWtCSjtBQWhCSTtFQUNFLFlBQUE7QUFrQk47QUFkRTtFQUNFLG1CQUFBO0FBZ0JKO0FBYkU7RUFDRSxlQUFBO0FBZUo7QUFaRTtFQUNFLFVBQUE7QUFjSjtBQVhFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFhSjtBQVhJO0VBQ0UsYUFBQTtBQWFOO0FBL0NBO0VBdUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFXSiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XG5cbi5zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiBAZ3JheS0xO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDI0cHg7XG5cbiAgJl9fc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIxMHB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSArIDE2cHgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxNnB4KTtcblxuICAgICYgOjpuZy1kZWVwIC5wcy1jb250ZW50IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmIDo6bmctZGVlcCAuYW50LWxpc3Qtc3BsaXQgLmFudC1saXN0LWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICAmIDo6bmctZGVlcCAuYW50LWxpc3QtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJiA6Om5nLWRlZXAgLmFudC1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICYgOjpuZy1kZWVwIC5hbnQtdGFicy1uYXYge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDRweDtcblxuICAgICY6OmJlZm9yZXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5hbnQtZW1wdHktaW1hZ2Uge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICNhYWFhYWE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], SearchComponent.prototype, "query", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], SearchComponent.prototype, "initialQuery", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], SearchComponent.prototype, "initialTabIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], SearchComponent.prototype, "result", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], SearchComponent.prototype, "resultGroupPageSize", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    _presentation_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _presentation_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }]; }, { query: [], initialQuery: [], initialTabIndex: [], result: [], resultGroupPageSize: [] }); })();


/***/ }),

/***/ "xDGX":
/*!******************************************************!*\
  !*** ./src/app/presentation/search/search.module.ts ***!
  \******************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "hlP/");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _presentation_search_search_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/search/search-routing.module */ "9jSM");
/* harmony import */ var _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/global-search/global-search.module */ "E6dn");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "3/1E");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");











class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _presentation_search_search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchRoutingModule"],
            _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_5__["GlobalSearchModule"],
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListModule"],
            ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_7__["NzPaginationModule"],
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_8__["ImagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _presentation_search_search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchRoutingModule"],
        _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_5__["GlobalSearchModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_7__["NzPaginationModule"],
        _shared_images_images_module__WEBPACK_IMPORTED_MODULE_8__["ImagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
                    _presentation_search_search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchRoutingModule"],
                    _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_5__["GlobalSearchModule"],
                    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListModule"],
                    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_7__["NzPaginationModule"],
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_8__["ImagesModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map