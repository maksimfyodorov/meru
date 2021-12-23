(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-requests-team-requests-module"],{

/***/ "GLD3":
/*!***************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-requests/components/team-requests/team-requests.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: TeamRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestsService", function() { return TeamRequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/base/base.service */ "fGTt");
/* harmony import */ var _shared_common_utils_query_params_builder_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/utils/query-params-builder.util */ "0NPV");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/common/utils/reservations.util */ "xK1C");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations.utils */ "pxHj");
/* harmony import */ var _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/decorators/complete.decorator */ "ALpe");
/* harmony import */ var _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/models/app-errorl.model */ "zewn");
/* harmony import */ var _base_action_action_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/action/action.utils */ "rkgY");
/* harmony import */ var _presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/reservations/components/list/list.utils */ "emXd");
/* harmony import */ var _shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/messages/services/reservations-messages.service */ "xNMc");
/* harmony import */ var _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/http/services/meta-api.service */ "s4sJ");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/services/message.service */ "acRR");





















class TeamRequestsService extends _shared_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(injector, $messages, $statuses, $measurements, $user, $metaApi, $reservationsApi, $message) {
        super(injector);
        this.injector = injector;
        this.$messages = $messages;
        this.$statuses = $statuses;
        this.$measurements = $measurements;
        this.$user = $user;
        this.$metaApi = $metaApi;
        this.$reservationsApi = $reservationsApi;
        this.$message = $message;
        this._queryParamsBuilder = _shared_common_utils_query_params_builder_util__WEBPACK_IMPORTED_MODULE_3__["QueryParamsBuilder"].default();
        this._queryParamsBuilder.currentLang = this.$localization.currentLang;
        this._queryParamsBuilder.dateFormat = this.filterDateFormat;
    }
    get user() {
        return this.$user.info;
    }
    get queryParams$() {
        return this._queryParamsBuilder.paramsChange;
    }
    get queryParams() {
        return this._queryParamsBuilder.params;
    }
    get urlQueryParams() {
        return Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["prepareUrlQueryParams"])(this._queryParamsBuilder.urlQueryParams, this.filterDateFormat, this.$localization.currentLang);
    }
    get bodyQueryParams() {
        return this._queryParamsBuilder.bodyQueryParams;
    }
    get type$() {
        return this.routeParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('type'));
    }
    get metaName$() {
        return this.type$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_presentation_team_team_reservations_team_reservations_utils__WEBPACK_IMPORTED_MODULE_8__["getRequestsMetaNameByType"]));
    }
    get requestsList$() {
        return this.requestsMeta$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((metaRes) => this.requestsData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(dataRes => [metaRes, dataRes]))), this.loadingOperator(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([meta, data]) => ({ meta, data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(({ meta, data }) => Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["mapDictionaryValues"])(this.$dictionaries, meta, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(({ meta, data }) => Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["mapActions"])(this.$dictionaries, meta, data, this.user)), this.loadingOperator(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    }
    changePaging(paging) {
        this.updateQueryParams(paging);
    }
    changeSort(sort) {
        this.updateQueryParams(sort);
    }
    changeFilters(filters) {
        this._queryParamsBuilder.set({ updateData: true });
        this.updateQueryParams(filters);
    }
    callAction({ params, data }) {
        if (params === null || params === void 0 ? void 0 : params.url) {
            this.callActionRequest(params, data);
        }
    }
    callMassAction(actionParams, rows) {
        if (actionParams === null || actionParams === void 0 ? void 0 : actionParams.route) {
            this.callNavigationAction(actionParams, rows[0] || {});
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        }
        if (actionParams === null || actionParams === void 0 ? void 0 : actionParams.url) {
            return this.callMassActionRequest(actionParams, rows);
        }
    }
    destroy() {
        this._queryParamsBuilder.destroy();
    }
    get filterDateFormat() {
        return this.$measurements.getMeasurementByName('filterDate');
    }
    get requestsMeta$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.metaName$,
            this.reset$,
        ]).pipe(this.readyOperator(), this.resetErrorOperator(), this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(([name]) => this.$metaApi.getMeta(name, this.$messages.loadingMetaErrorNotification)), this.readyOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((meta) => this.processMeta(meta)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((meta) => this.initQueryParams(meta)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.updateQueryParams({}, false)));
    }
    get requestsData$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.type$,
            this.routeQueryParams$,
            this.reload$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(([, { updateData },]) => updateData === 'true'), this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(([type]) => this.$reservationsApi.getReservationsByType(type, this.bodyQueryParams)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this._queryParamsBuilder.setProperty('updateData', null)));
    }
    callNavigationAction({ relativeRoute, route }, data) {
        this.$nav.goToUrl(this.$url.createUrl(route, data), {
            relativeTo: relativeRoute ? this.$route : null,
            queryParams: {},
        });
    }
    callMassActionRequest({ url, method, body }, reservations) {
        const requestData = Object(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_12__["prepareMassActionRequest"])(reservations, body);
        this.loading = true;
        return this.$reservationsApi
            .callReservationAction(url, method, requestData, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(({ success }) => this.finishCallAction(success)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => Object(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_12__["mapMassActionRequest"])(response, reservations, this.$message)));
    }
    finishCallAction(result) {
        result ? this.reload() : this.loading = false;
    }
    updateQueryParams(params, update = true) {
        if (update) {
            this._queryParamsBuilder.updateQueryParams(params);
        }
        this.$nav.go([], { queryParams: this.urlQueryParams });
    }
    callActionRequest({ url, method, messages, body }, data) {
        const requestData = Object(_base_action_action_utils__WEBPACK_IMPORTED_MODULE_11__["mapRequestBody"])(data, body);
        url = this.$url.createUrl(url, data);
        messages = this.$messages.getActionNotificationsMessages(messages);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(url).pipe(this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((url) => this.$reservationsApi.callReservationAction(url, method, requestData, messages)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(({ success }) => {
            success
                ? this.reload()
                : this.loading = false;
        });
    }
    processMeta(meta) {
        if (meta instanceof _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_10__["AppError"]) {
            this.error = this.$messages.getLoadingMetaError(meta);
            this.loading = false;
            return false;
        }
        Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["filterActionsColumn"])(meta, this.user);
        return true;
    }
    initQueryParams(meta) {
        const labelGroupsManager = this.user.labelGroupsManager;
        return this.$dictionaries.getDictionary('labels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(labels => labels
            .filter(({ labelGroups }) => labelGroups.some(({ id }) => labelGroupsManager.includes(id)))
            .map(({ id }) => id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((labelIds) => Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["initQueryParams"])(this._queryParamsBuilder, meta, this.routeQueryParams, { labelIds, statuses: ['NEW'] })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(() => meta));
    }
}
TeamRequestsService.ɵfac = function TeamRequestsService_Factory(t) { return new (t || TeamRequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__["MetaApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"])); };
TeamRequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeamRequestsService, factory: TeamRequestsService.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscriptions"])('destroy')
], TeamRequestsService.prototype, "_subscriptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_9__["Complete"]
], TeamRequestsService.prototype, "destroy", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamRequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsMessagesService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__["StatusesService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__["MeasurementsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] }, { type: _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__["MetaApiService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__["ReservationsApiService"] }, { type: _core_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"] }]; }, { _subscriptions: [], destroy: [] }); })();


/***/ }),

/***/ "KRLG":
/*!*****************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-requests/components/team-requests/team-requests.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TeamRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestsComponent", function() { return TeamRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/animations.util */ "meMk");
/* harmony import */ var _presentation_team_team_requests_components_team_requests_team_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/team/team-requests/components/team-requests/team-requests.service */ "GLD3");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations.constants */ "yLmg");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/layout/extra-title-tpl/extra-title-tpl.component */ "VdFp");
/* harmony import */ var _base_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../base/toolbar/toolbar.component */ "pLYm");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _base_result_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../base/result/result.component */ "0tdr");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _base_list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../base/list/list.component */ "N4Bo");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/pipes/dictionary.pipe */ "Dz+d");

























function TeamRequestsComponent_app_result_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-result", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamRequestsComponent_app_result_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined)("status", "error")("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 9, error_r5 == null ? null : error_r5.title))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 11, error_r5 == null ? null : error_r5.subtitle))("message", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 13, error_r5 == null ? null : error_r5.message));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGhost", true)("nzType", "primary")("nzSize", "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 17, "ReloadReservations")), " ");
} }
const _c0 = function (a0, a1) { return { "_expanded": a0, _ready: a1 }; };
function TeamRequestsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowsSelect", function TeamRequestsComponent_ng_template_2_Template_div_rowsSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.selectRows($event); })("pagingChange", function TeamRequestsComponent_ng_template_2_Template_div_pagingChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.changePaging($event); })("sortChange", function TeamRequestsComponent_ng_template_2_Template_div_sortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.changeSort($event); })("actionCall", function TeamRequestsComponent_ng_template_2_Template_div_actionCall_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.callAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, !ctx_r2.filtersVisible, ctx_r2.ready));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r2.meta == null ? null : ctx_r2.meta.columns)("paging", ctx_r2.queryParams == null ? null : ctx_r2.queryParams.paging)("sort", ctx_r2.queryParams == null ? null : ctx_r2.queryParams.sort)("rows", ctx_r2.data)("total", ctx_r2.data == null ? null : ctx_r2.data.length)("loading", ctx_r2.loading)("multiSelectRows", true);
} }
function TeamRequestsComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_success", result_r13.isOk)("_fail", !result_r13.isOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", result_r13.isOk ? "check-circle" : "close-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", result_r13.message, " ");
} }
const _c1 = function () { return []; };
const _c2 = function (a0) { return { items: a0 }; };
const _c3 = function () { return { suppressScrollX: true }; };
class TeamRequestsComponent {
    constructor($service, _cdr) {
        this.$service = $service;
        this._cdr = _cdr;
        this.menu = _presentation_team_team_reservations_team_reservations_constants__WEBPACK_IMPORTED_MODULE_4__["TEAM_RESERVATIONS_MENU"];
        this.type$ = this.$service.type$;
        this.user = this.$service.user;
        this.selectedRows = [];
        this.massActionResults = [];
        this.filtersVisible = true;
        this.meta = null;
        this.data = [];
        this.error = this.$service.error$;
        this.loading = this.$service.loading$;
    }
    set requestsList({ meta, data }) {
        this.data = data;
        if (this.meta !== meta) {
            this.meta = meta;
        }
    }
    reset() {
        this.$service.reset();
    }
    selectRows(rows) {
        this.selectedRows = [...rows];
    }
    callAction(action) {
        this.$service.callAction(action);
    }
    callMassAction(actionParams) {
        this.$service
            .callMassAction(actionParams, this.selectedRows)
            .subscribe(results => {
            this.massActionResults = results;
            this._cdr.markForCheck();
        });
    }
    changePaging(paging) {
        this.$service.changePaging(paging);
    }
    changeSort(sort) {
        this.$service.changeSort(sort);
    }
    changeFilters(filters) {
        this.$service.changeFilters(filters);
    }
    toggleFiltersVisible() {
        this.filtersVisible = !this.filtersVisible;
        this.dispatchWindowResize();
    }
    ngOnInit() {
        this.queryParams = this.$service.queryParams$;
        this.requestsList = this.$service.requestsList$;
        this.ready = this.$service.ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((ready) => {
            if (!ready) {
                this.data = [];
                this.meta = null;
            }
        }));
    }
    ngOnDestroy() {
        this.$service.destroy();
    }
    dispatchWindowResize() {
        window.dispatchEvent(new Event('resize'));
    }
}
TeamRequestsComponent.ɵfac = function TeamRequestsComponent_Factory(t) { return new (t || TeamRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_team_team_requests_components_team_requests_team_requests_service__WEBPACK_IMPORTED_MODULE_3__["TeamRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TeamRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamRequestsComponent, selectors: [["app-team-requests"]], hostVars: 2, hostBindings: function TeamRequestsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("team-requests", true);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_team_team_requests_components_team_requests_team_requests_service__WEBPACK_IMPORTED_MODULE_3__["TeamRequestsService"]])], decls: 14, vars: 25, consts: [[1, "team-requests"], ["class", "team-requests__error", 3, "status", "title", "subtitle", "message", 4, "ngIf", "ngIfElse"], ["reservationsListTpl", ""], [3, "actions", "data", "skeletonButtonsCount", "actionCall"], ["contentTpl", ""], [3, "nzVisible", "nzTitle", "nzOkText", "nzCancelText", "nzMaskClosable", "nzClassName", "nzOnCancel"], [1, "mass-action-results__list", 3, "config"], ["nz-typography", "", "class", "mass-action-results__item", 4, "ngFor", "ngForOf"], [1, "team-requests__error", 3, "status", "title", "subtitle", "message"], ["nz-button", "", 3, "nzGhost", "nzType", "nzSize", "click"], [1, "team-requests__workspace", 3, "ngClass"], ["app-list", "", 3, "columns", "paging", "sort", "rows", "total", "loading", "multiSelectRows", "rowsSelect", "pagingChange", "sortChange", "actionCall"], ["nz-typography", "", 1, "mass-action-results__item"], ["nz-icon", "", 1, "mass-action-results__icon", 3, "nzType"]], template: function TeamRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TeamRequestsComponent_app_result_1_Template, 8, 19, "app-result", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TeamRequestsComponent_ng_template_2_Template, 2, 11, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-extra-title-tpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-toolbar", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionCall", function TeamRequestsComponent_Template_app_toolbar_actionCall_5_listener($event) { return ctx.callMassAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnCancel", function TeamRequestsComponent_Template_nz_modal_nzOnCancel_7_listener() { return ctx.massActionResults = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "perfect-scrollbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TeamRequestsComponent_p_13_Template, 3, 6, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", (ctx.meta == null ? null : ctx.meta.actions) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1))("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c2, ctx.selectedRows))("skeletonButtonsCount", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", !!ctx.massActionResults.length)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 15, "ResultOfAction")))("nzOkText", null)("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 19, "Close")))("nzMaskClosable", true)("nzClassName", "mass-action-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.massActionResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_10__["ExtraTitleTplComponent"], _base_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__["NzModalComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _base_result_result_component__WEBPACK_IMPORTED_MODULE_14__["ResultComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _base_list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_19__["NzTypographyComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_22__["DictionaryPipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%] {\n  background-color: #fff;\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]     nz-spin {\n  width: 100%;\n}\n[_nghost-%COMP%]   .team-requests[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: row;\n  justify-content: stretch;\n  width: 100%;\n}\n[_nghost-%COMP%]   .team-requests__workspace[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .team-requests__workspace._expanded[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .team-requests__workspace._ready[_ngcontent-%COMP%] {\n  transition: flex 0.5s, width 0.5s;\n}\n[_nghost-%COMP%]   .team-requests__error[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tcmVxdWVzdHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBZEQ7RUFDRSxZQUFBO0FBZ0JGO0FBYkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBZUY7QUFsQkE7RUFNSSxXQUFBO0FBZUo7QUFyQkE7RUFVSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBY0o7QUFaSTtFQUNFLFdBQUE7QUFjTjtBQVpNO0VBQ0UsV0FBQTtBQWNSO0FBWE07RUFDRSxpQ0FBQTtBQWFSO0FBVEk7RUFDRSxjQUFBO0FBV04iLCJmaWxlIjoidGVhbS1yZXF1ZXN0cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnMubGVzc1wiO1xuXG5AdGVhbS1yZXNlcnZhdGlvbnMtcHJlZml4LWNsczogdGVhbS1yZXF1ZXN0cztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcblxuICA6Om5nLWRlZXAgbnotc3BpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuQHt0ZWFtLXJlc2VydmF0aW9ucy1wcmVmaXgtY2xzfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmX193b3Jrc3BhY2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYuX2V4cGFuZGVkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICYuX3JlYWR5IHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmxleCAuNXMsIHdpZHRoIC41cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19lcnJvciB7XG4gICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_2__["fadeInOutAnimation"] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamRequestsComponent.prototype, "massActionResults", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamRequestsComponent.prototype, "filtersVisible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamRequestsComponent.prototype, "meta", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamRequestsComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamRequestsComponent.prototype, "queryParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamRequestsComponent.prototype, "error", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamRequestsComponent.prototype, "ready", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamRequestsComponent.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamRequestsComponent.prototype, "requestsList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_8__["Debounce"])(500)
], TeamRequestsComponent.prototype, "dispatchWindowResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamRequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-team-requests',
                templateUrl: './team-requests.component.html',
                styleUrls: ['./team-requests.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.team-requests]': `true`
                },
                animations: _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_2__["fadeInOutAnimation"],
                providers: [_presentation_team_team_requests_components_team_requests_team_requests_service__WEBPACK_IMPORTED_MODULE_3__["TeamRequestsService"]]
            }]
    }], function () { return [{ type: _presentation_team_team_requests_components_team_requests_team_requests_service__WEBPACK_IMPORTED_MODULE_3__["TeamRequestsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { massActionResults: [], filtersVisible: [], meta: [], data: [], queryParams: [], error: [], ready: [], loading: [], requestsList: [], dispatchWindowResize: [] }); })();


/***/ }),

/***/ "lNTx":
/*!*********************************************************************************!*\
  !*** ./src/app/presentation/team/team-requests/team-requests-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TeamRequestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestsRoutingModule", function() { return TeamRequestsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_team_team_requests_components_team_requests_team_requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-requests/components/team-requests/team-requests.component */ "KRLG");





const routes = [
    {
        path: ':type',
        component: _presentation_team_team_requests_components_team_requests_team_requests_component__WEBPACK_IMPORTED_MODULE_2__["TeamRequestsComponent"],
        data: {
            title: 'Запросы на подтверждение'
        },
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'workplace'
    }
];
class TeamRequestsRoutingModule {
}
TeamRequestsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TeamRequestsRoutingModule });
TeamRequestsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TeamRequestsRoutingModule_Factory(t) { return new (t || TeamRequestsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TeamRequestsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamRequestsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "q7To":
/*!*************************************************************************!*\
  !*** ./src/app/presentation/team/team-requests/team-requests.module.ts ***!
  \*************************************************************************/
/*! exports provided: TeamRequestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestsModule", function() { return TeamRequestsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_team_requests_team_requests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/team-requests/team-requests.component */ "KRLG");
/* harmony import */ var _base_result_result_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/result/result.module */ "CrH8");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _base_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/list/list.module */ "/K2S");
/* harmony import */ var _presentation_team_team_requests_team_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/team/team-requests/team-requests-routing.module */ "lNTx");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/layout/extra-title-tpl/extra-title-tpl.module */ "qzeD");
/* harmony import */ var _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/toolbar/toolbar.module */ "TC/b");










class TeamRequestsModule {
}
TeamRequestsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamRequestsModule });
TeamRequestsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamRequestsModule_Factory(t) { return new (t || TeamRequestsModule)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _base_result_result_module__WEBPACK_IMPORTED_MODULE_2__["ResultModule"],
            _presentation_team_team_requests_team_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamRequestsRoutingModule"],
            _base_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
            _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_6__["ExtraTitleTplModule"],
            _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamRequestsModule, { declarations: [_components_team_requests_team_requests_component__WEBPACK_IMPORTED_MODULE_1__["TeamRequestsComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _base_result_result_module__WEBPACK_IMPORTED_MODULE_2__["ResultModule"],
        _presentation_team_team_requests_team_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamRequestsRoutingModule"],
        _base_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
        _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_6__["ExtraTitleTplModule"],
        _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamRequestsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_team_requests_team_requests_component__WEBPACK_IMPORTED_MODULE_1__["TeamRequestsComponent"]],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
                    _base_result_result_module__WEBPACK_IMPORTED_MODULE_2__["ResultModule"],
                    _presentation_team_team_requests_team_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamRequestsRoutingModule"],
                    _base_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                    _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_6__["ExtraTitleTplModule"],
                    _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-requests-team-requests-module.js.map