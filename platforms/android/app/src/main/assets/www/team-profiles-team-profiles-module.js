(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-profiles-team-profiles-module"],{

/***/ "36Cf":
/*!************************************************************************!*\
  !*** ./src/app/presentation/team/team-profiles/team-profiles.utils.ts ***!
  \************************************************************************/
/*! exports provided: findsTeammate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findsTeammate", function() { return findsTeammate; });
const findsTeammate = (users, groups) => {
    return users.filter((user) => {
        let isTeammate = false;
        for (const teamId of user.labelGroups) {
            if (groups.includes(teamId)) {
                isTeammate = true;
                break;
            }
        }
        return isTeammate || user.category === 3;
    });
};


/***/ }),

/***/ "7tlw":
/*!**************************************************************************!*\
  !*** ./src/app/presentation/team/team-profiles/team-profiles.service.ts ***!
  \**************************************************************************/
/*! exports provided: TeamProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfilesService", function() { return TeamProfilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _presentation_team_team_profiles_team_profiles_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/team/team-profiles/team-profiles.utils */ "36Cf");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");











class TeamProfilesService {
    constructor($user, $dictionaries, $api, $measurements, _datePipe, $loader) {
        this.$user = $user;
        this.$dictionaries = $dictionaries;
        this.$api = $api;
        this.$measurements = $measurements;
        this._datePipe = _datePipe;
        this.$loader = $loader;
        this._statusOptions = {
            map: {
                office: {
                    color: 'success',
                    value: 'В офисе',
                },
                home: {
                    color: 'danger',
                    value: 'Дома',
                },
            },
        };
        this.$loader.contentLoading$.next(true);
    }
    _getApiDate(date) {
        return this._datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
    _combiningData() {
        return this._users.map((user) => {
            const reservation = this._reservations.find((_r) => _r.labelId === user.id);
            const workplace = this._workplaces.find((_w) => _w.id === (reservation === null || reservation === void 0 ? void 0 : reservation.workplaceId));
            return {
                user,
                reservation,
                workplace,
            };
        });
    }
    get dateFormat$() {
        return this.$measurements.getMeasurementByName$('shortDate');
    }
    get team$() {
        const groups = this.$user.info.labelGroups;
        return this.$dictionaries.getDictionary('labels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((users) => {
            return Object(_presentation_team_team_profiles_team_profiles_utils__WEBPACK_IMPORTED_MODULE_3__["findsTeammate"])(users, groups);
        }));
    }
    get tableMeta$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.team$, this.$api.getLiveData('activeLabels')]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([team, lifeData]) => {
            var _b;
            this._activeLabelsIds =
                ((_b = lifeData.data) === null || _b === void 0 ? void 0 : _b.activeLabels.map((_a) => _a.id)) || [];
            this._users = team;
            return team.map((user) => user.id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((userIds) => this.$api
            .getWorkplaceReservations({
            labelIds: userIds,
            dateTimeFrom: this._getApiDate(new Date()),
            dateTimeTo: this._getApiDate(new Date()),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((reservations) => {
            this._reservations = reservations;
            return reservations.map((res) => res.workplaceId);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((workplaceIds) => this.$dictionaries
            .getDictionary('workplaces')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((workplaces) => workplaces.filter((w) => workplaceIds.includes(w.id))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((workplaces) => {
            this._workplaces = workplaces;
            return this._combiningData();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data.map(({ user, workplace, reservation }) => ({
                userId: user.id,
                name: user.name,
                date: reservation === null || reservation === void 0 ? void 0 : reservation.dateTimeCreated,
                workplace: workplace === null || workplace === void 0 ? void 0 : workplace.name,
                status: {
                    value: this._activeLabelsIds.includes(user.id) ? 'office' : 'home',
                    options: this._statusOptions,
                },
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.$loader.contentLoading$.next(false)));
    }
    get dateFormat() {
        return this.$measurements.getMeasurementByName('date');
    }
}
TeamProfilesService.ɵfac = function TeamProfilesService_Factory(t) { return new (t || TeamProfilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_9__["GlobalLoaderService"])); };
TeamProfilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamProfilesService, factory: TeamProfilesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamProfilesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_9__["GlobalLoaderService"] }]; }, null); })();


/***/ }),

/***/ "EVHn":
/*!****************************************************************************!*\
  !*** ./src/app/presentation/team/team-profiles/team-profiles.component.ts ***!
  \****************************************************************************/
/*! exports provided: TeamProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfilesComponent", function() { return TeamProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_team_team_profiles_team_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-profiles/team-profiles.service */ "7tlw");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/core/services/user.service */ "f4AX");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _base_renderer_renderer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../base/renderer/renderer.component */ "akfq");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


























const _c0 = ["modalFooterTpl"];
const _c1 = ["modalContentTpl"];
const _c2 = ["filesInput"];
function TeamProfilesComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSortFn", col_r7.sortFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r7.title, " ");
} }
const _c3 = function (a0) { return { route: a0 }; };
function TeamProfilesComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamProfilesComponent_tr_13_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const row_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onClick(row_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-renderer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-renderer", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "link")("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c3, ctx_r2.generateLink(row_r8.userId)))("value", row_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 8, row_r8.date, ctx_r2.dataFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r8.workplace);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "status")("value", row_r8.status.value)("options", row_r8.status.options);
} }
function TeamProfilesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamProfilesComponent_ng_template_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.cancelAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamProfilesComponent_ng_template_14_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onAddGuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.loading)("disabled", ctx_r4.guestForm.invalid);
} }
function TeamProfilesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tabset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TeamProfilesComponent_ng_template_16_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TeamProfilesComponent_ng_template_16_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TeamProfilesComponent_ng_template_16_Template_textarea_input_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TeamProfilesComponent_ng_template_16_Template_input_input_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TeamProfilesComponent_ng_template_16_Template_input_input_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TeamProfilesComponent_ng_template_16_Template_input_input_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.onInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-date-picker", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TeamProfilesComponent_ng_template_16_Template_nz_date_picker_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.dateTimeLifetimeTo = $event; })("ngModelChange", function TeamProfilesComponent_ng_template_16_Template_nz_date_picker_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSetDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamProfilesComponent_ng_template_16_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onOpenFilesInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " \u0424\u043E\u0442\u043E \u0433\u043E\u0441\u0442\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 30\u043A\u0431");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TeamProfilesComponent_ng_template_16_Template_input_change_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.handleUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 20, "Guest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r6.guestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 22, "\u0424\u0418\u041E"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 24, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 26, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "45%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 28, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "45%")("margin-left", "10%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 30, "E-mail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 32, "\u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u0430"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D \u0434\u043E")("ngModel", ctx_r6.dateTimeLifetimeTo)("nzFormat", ctx_r6.dateFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", ctx_r6.photoFilename, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "none");
} }
class TeamProfilesComponent {
    constructor($service, $dictionariesService, cdr, $router, _modal, fb, datePipe, $measurements, $user) {
        this.$service = $service;
        this.$dictionariesService = $dictionariesService;
        this.cdr = cdr;
        this.$router = $router;
        this._modal = _modal;
        this.fb = fb;
        this.datePipe = datePipe;
        this.$measurements = $measurements;
        this.$user = $user;
        this.photoFilename = '';
        this.dataFormat = this.$service.dateFormat;
        this.table = {
            data: [],
            pageSize: 10,
            columns: [
                {
                    title: 'ФИО',
                    sortFn: (a, b) => {
                        if (a.name < b.name)
                            return -1;
                        if (a.name > b.name)
                            return 1;
                        if (a.name === b.name)
                            return 0;
                    },
                },
                {
                    title: 'Дата',
                    sortFn: (a, b) => {
                        if (a.date < b.date)
                            return -1;
                        if (a.date > b.date)
                            return 1;
                        if (a.date === b.date)
                            return 0;
                    },
                },
                {
                    title: 'Рабочее место',
                    sortFn: (a, b) => {
                        if (a.workplace < b.workplace)
                            return -1;
                        if (a.workplace > b.workplace)
                            return 1;
                        if (a.workplace === b.workplace)
                            return 0;
                    },
                },
                {
                    title: 'Статус',
                    sortFn: (a, b) => {
                        if (a.status.value < b.status.value)
                            return -1;
                        if (a.status.value > b.status.value)
                            return 1;
                        if (a.status.value === b.status.value)
                            return 0;
                    },
                },
            ],
        };
        this.dateTimeLifetimeTo = null;
        this.loading = false;
        this.photoFilename = '';
        this.guestForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            phones: [null, []],
            category: [null, []],
            post: [null, []],
            description: [null, []],
            cardNumber: [null, []],
            inviterId: [null, []],
            avatarImageBytes: [null, []],
            dateTimeLifetimeTo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            uid: ['', []],
        });
        this.dateFormat = this.$service.dateFormat$;
        this.sub = $service.tableMeta$.subscribe((tableMeta) => {
            this.table.data = tableMeta;
            this.cdr.markForCheck();
        });
    }
    onClick(row) {
        this.$router.navigateByUrl(this.generateLink(row.userId));
    }
    generateLink(id) {
        return `/team/profiles/${id}`;
    }
    ngOnDestroy() { }
    onAddProfile() {
        // this.dateTimeLifetimeTo = new Date();
        this.dateTimeLifetimeTo = null;
        // this.dateTimeLifetimeTo.setMonth(this.dateTimeLifetimeTo.getMonth() + 1);
        this.guestForm.reset();
        this.guestForm.patchValue({
            inviterId: this.$user.info.id,
            category: 3,
        });
        this._modal.create({
            nzContent: this.modalContentTpl,
            nzFooter: this.modalFooterTpl,
        });
    }
    onAddGuest() {
        this.loading = true;
        this.$dictionariesService
            .putDictionaries('labels', this.guestForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe((res) => {
            if (res.success) {
                this.$dictionariesService
                    .updateDictionaryItem('labels', res.data)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(() => {
                    this.sub = this.$service.tableMeta$.subscribe((tableMeta) => {
                        this.table.data = tableMeta;
                        this.cdr.markForCheck();
                        this.loading = false;
                        this._modal.closeAll();
                    });
                });
            }
            else {
                this._modal.closeAll();
                this._modal.error({
                    nzTitle: 'Ошибка при добавлении гостя',
                });
                this.loading = false;
            }
        });
    }
    cancelAdd() {
        this._modal.closeAll();
    }
    onInput() {
        this.guestForm.patchValue({
            uid: 'label_user_' + this.transliterate(this.guestForm.value.name),
        });
        this.cdr.detectChanges();
    }
    handleUpload(event) {
        const file = event.target.files[0];
        if (file.size > 40000) {
            this._modal.error({
                nzTitle: 'Размер файла должен быть не более 30кб',
            });
        }
        else {
            this.photoFilename = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.guestForm.patchValue({
                    avatarImageBytes: reader.result
                        .toString()
                        .replace(/^data:image\/[a-z]+;base64,/, ''),
                });
                this.cdr.detectChanges();
            };
        }
    }
    onOpenFilesInput() {
        this.filesInput.nativeElement.value = '';
        this.filesInput.nativeElement.click();
    }
    transliterate(word) {
        let answer = '', a = {};
        a['Ё'] = 'YO';
        a['Й'] = 'I';
        a['Ц'] = 'TS';
        a['У'] = 'U';
        a['К'] = 'K';
        a['Е'] = 'E';
        a['Н'] = 'N';
        a['Г'] = 'G';
        a['Ш'] = 'SH';
        a['Щ'] = 'SCH';
        a['З'] = 'Z';
        a['Х'] = 'H';
        a['Ъ'] = "'";
        a['ё'] = 'yo';
        a['й'] = 'i';
        a['ц'] = 'ts';
        a['у'] = 'u';
        a['к'] = 'k';
        a['е'] = 'e';
        a['н'] = 'n';
        a['г'] = 'g';
        a['ш'] = 'sh';
        a['щ'] = 'sch';
        a['з'] = 'z';
        a['х'] = 'h';
        a['ъ'] = "'";
        a['Ф'] = 'F';
        a['Ы'] = 'I';
        a['В'] = 'V';
        a['А'] = 'a';
        a['П'] = 'P';
        a['Р'] = 'R';
        a['О'] = 'O';
        a['Л'] = 'L';
        a['Д'] = 'D';
        a['Ж'] = 'ZH';
        a['Э'] = 'E';
        a['ф'] = 'f';
        a['ы'] = 'i';
        a['в'] = 'v';
        a['а'] = 'a';
        a['п'] = 'p';
        a['р'] = 'r';
        a['о'] = 'o';
        a['л'] = 'l';
        a['д'] = 'd';
        a['ж'] = 'zh';
        a['э'] = 'e';
        a['Я'] = 'Ya';
        a['Ч'] = 'CH';
        a['С'] = 'S';
        a['М'] = 'M';
        a['И'] = 'I';
        a['Т'] = 'T';
        a['Ь'] = "'";
        a['Б'] = 'B';
        a['Ю'] = 'YU';
        a['я'] = 'ya';
        a['ч'] = 'ch';
        a['с'] = 's';
        a['м'] = 'm';
        a['и'] = 'i';
        a['т'] = 't';
        a['ь'] = "'";
        a['б'] = 'b';
        a['ю'] = 'yu';
        for (let i in word) {
            if (word.hasOwnProperty(i)) {
                if (a[word[i]] === undefined) {
                    answer += word[i];
                }
                else {
                    answer += a[word[i]];
                }
            }
        }
        return answer;
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
    onSetDate(ev) {
        this.guestForm.patchValue({
            dateTimeLifetimeTo: this._getApiDate(new Date(ev)),
        });
    }
}
TeamProfilesComponent.ɵfac = function TeamProfilesComponent_Factory(t) { return new (t || TeamProfilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_team_team_profiles_team_profiles_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfilesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"])); };
TeamProfilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamProfilesComponent, selectors: [["app-team-profiles"]], viewQuery: function TeamProfilesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalFooterTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalContentTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filesInput = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_team_team_profiles_team_profiles_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfilesService"]])], decls: 18, vars: 7, consts: [[1, "light-fon"], [1, "team-profiles__actions"], [1, "team-profiles__action", 3, "click"], ["nz-button", "", "nzType", "primary"], ["nz-icon", "", "nzType", "plus"], [3, "nzData", "nzPageSize"], ["tableRef", ""], [3, "nzSortFn", 4, "ngFor", "ngForOf"], ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["modalFooterTpl", ""], ["modalContentTpl", ""], [3, "nzSortFn"], [1, "cursor-pointer", 3, "click"], [3, "type", "options", "value"], [3, "type", "value", "options"], [1, "modal-footer"], ["nz-button", "", 1, "ant-btn", 3, "click"], ["nz-button", "", 1, "ant-btn", "ant-btn-primary", 3, "nzLoading", "disabled", "click"], [3, "nzTitle"], [3, "formGroup"], [1, "modal-content"], ["formControlName", "name", "nz-input", "", 1, "input", "ant-input", 3, "placeholder", "input"], ["formControlName", "post", "nz-input", "", 1, "input", "ant-input", 3, "placeholder", "input"], ["formControlName", "description", "nz-input", "", 1, "input", "ant-input", 3, "placeholder", "input"], ["formControlName", "phones", "mask", "+0 (000) 000-00-00", "nz-input", "", 1, "input", "ant-input", 3, "placeholder", "input"], ["formControlName", "mail", "nz-input", "", 1, "input", "ant-input", 3, "placeholder", "input"], ["formControlName", "cardNumber", "nz-input", "", 1, "input", "ant-input", 3, "placeholder", "input"], [1, "input", 3, "nzPlaceHolder", "ngModel", "nzFormat", "ngModelChange"], ["nz-button", "", 1, "ant-btn", "ant-btn-primary", 3, "click"], ["type", "file", "accept", ".jpg, .png, .gif, .bmp', .jpeg, .JPG, .PNG, .GIF, .BMP, .JPEG", "placeholder", "", 1, "form-control", 3, "change"], ["filesInput", ""]], template: function TeamProfilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamProfilesComponent_Template_a_click_2_listener() { return ctx.onAddProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TeamProfilesComponent_th_11_Template, 2, 2, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TeamProfilesComponent_tr_13_Template, 10, 13, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TeamProfilesComponent_ng_template_14_Template, 8, 5, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TeamProfilesComponent_ng_template_16_Template, 35, 34, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "Create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.table.data)("nzPageSize", ctx.table.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.table.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzThAddOnComponent"], _base_renderer_renderer_component__WEBPACK_IMPORTED_MODULE_18__["RendererComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__["NzTabComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_mask__WEBPACK_IMPORTED_MODULE_20__["MaskDirective"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".team-profiles__actions[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: flex;\n}\n.team-profiles__action[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 5px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tcHJvZmlsZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBR0E7RUFDRSxXQUFBO0FBREY7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFERiIsImZpbGUiOiJ0ZWFtLXByb2ZpbGVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tcHJvZmlsZXMge1xuICAmX19hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgJl9fYWN0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuLmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubW9kYWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], TeamProfilesComponent.prototype, "sub", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamProfilesComponent.prototype, "dateFormat", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamProfilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-team-profiles',
                templateUrl: './team-profiles.component.html',
                styleUrls: ['./team-profiles.component.less'],
                providers: [_presentation_team_team_profiles_team_profiles_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfilesService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _presentation_team_team_profiles_team_profiles_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfilesService"] }, { type: _src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }, { type: _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__["MeasurementsService"] }, { type: _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] }]; }, { modalFooterTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalFooterTpl']
        }], modalContentTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalContentTpl']
        }], filesInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['filesInput']
        }], sub: [], dateFormat: [] }); })();


/***/ }),

/***/ "or6R":
/*!*********************************************************************************!*\
  !*** ./src/app/presentation/team/team-profiles/team-profiles-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TeamProfilesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfilesRoutingModule", function() { return TeamProfilesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _team_profiles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-profiles.component */ "EVHn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _team_profiles_component__WEBPACK_IMPORTED_MODULE_1__["TeamProfilesComponent"],
        data: {
            title: 'Профили'
        }
    },
];
class TeamProfilesRoutingModule {
}
TeamProfilesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamProfilesRoutingModule });
TeamProfilesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamProfilesRoutingModule_Factory(t) { return new (t || TeamProfilesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamProfilesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamProfilesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ }),

/***/ "xA7G":
/*!*************************************************************************!*\
  !*** ./src/app/presentation/team/team-profiles/team-profiles.module.ts ***!
  \*************************************************************************/
/*! exports provided: TeamProfilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfilesModule", function() { return TeamProfilesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _team_profiles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-profiles.component */ "EVHn");
/* harmony import */ var _presentation_team_team_profiles_team_profiles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/team/team-profiles/team-profiles-routing.module */ "or6R");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @base/renderer/renderer.module */ "R3cO");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
















class TeamProfilesModule {
}
TeamProfilesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamProfilesModule });
TeamProfilesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamProfilesModule_Factory(t) { return new (t || TeamProfilesModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _presentation_team_team_profiles_team_profiles_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamProfilesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__["RendererModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamProfilesModule, { declarations: [_team_profiles_component__WEBPACK_IMPORTED_MODULE_2__["TeamProfilesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _presentation_team_team_profiles_team_profiles_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamProfilesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__["RendererModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamProfilesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_profiles_component__WEBPACK_IMPORTED_MODULE_2__["TeamProfilesComponent"]],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _presentation_team_team_profiles_team_profiles_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamProfilesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__["RendererModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-profiles-team-profiles-module.js.map