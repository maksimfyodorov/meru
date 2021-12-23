(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-create-team-create-module"],{

/***/ "2Y0D":
/*!**********************************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/team-filters/create-filter.utils.ts ***!
  \**********************************************************************************************/
/*! exports provided: getListFilterFieldsByType, mapCheckBoxOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFilterFieldsByType", function() { return getListFilterFieldsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCheckBoxOptions", function() { return mapCheckBoxOptions; });
const listFilterFields = {
    appointment: {
        floorMapId: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    locker: {
        floorMapId: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    parking: {
        floorMapId: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    workplace: {
        dateTimeFrom: null,
        dateTimeTo: null,
        tags: [],
        repeat: null,
        group: null,
        labels: [],
        types: ['DEFAULT', 'COMPLEMENTARY'],
        autoMode: true,
    }
};
function getListFilterFieldsByType(type) {
    return listFilterFields[type] || null;
}
function mapCheckBoxOptions(items, valueField, labelField, control) {
    return items.map((item) => {
        var _a;
        const value = item[valueField];
        const label = item[labelField];
        const checked = Boolean((_a = control.value) === null || _a === void 0 ? void 0 : _a.includes(value));
        return Object.assign(Object.assign({}, item), { label, value, checked });
    });
}


/***/ }),

/***/ "4tfZ":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/team-filters/create-filters-workplace/create-filter-workplace.service.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: CreateFilterWorkplaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterWorkplaceService", function() { return CreateFilterWorkplaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filters/filter.service */ "UCJT");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.utils */ "ZgfZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");









class CreateFilterWorkplaceService extends _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"] {
    constructor(injector, $dictionaries, $userOffices, $measurements, _user) {
        super(injector);
        this.injector = injector;
        this.$dictionaries = $dictionaries;
        this.$userOffices = $userOffices;
        this.$measurements = $measurements;
        this._user = _user;
        this.user = this._user.info;
    }
    get dateTimeFormat$() {
        return this.$measurements.getMeasurementByName$('shortDateTime');
    }
    get dateFormat$() {
        return this.$measurements.getMeasurementByName$('shortDate');
    }
    get buildings$() {
        return this.$userOffices.getMyOrderedBuildings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((buildings) => Object(_presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__["mapBuildingsOptions"])(buildings, this.getFormControlByName('buildingId'))));
    }
    get groups$() {
        return this.getDictionaryByName('labelGroups').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((groups) => groups.filter((group) => this.user.labelGroups.includes(group.id))));
    }
    get tags$() {
        return this.$dictionaries.getDictionary('tags');
    }
    getUserByGroupId(id) {
        return this.$dictionaries.getDictionary('labels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((users) => users.filter((user) => user.labelGroups.includes(id))));
    }
    getDisabledTime(start, end) {
        return () => ({
            nzDisabledHours: () => [...this._range(0, start), ...this._range(end, 24)],
            nzDisabledMinutes: (hour) => {
                if (hour === 18) {
                    return this._range(31, 60);
                }
                else {
                    return [];
                }
            },
            nzDisabledSeconds: () => []
        });
    }
    getDictionaryByName(name) {
        return this.$dictionaries.getDictionary(name);
    }
    _range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
}
CreateFilterWorkplaceService.ɵfac = function CreateFilterWorkplaceService_Factory(t) { return new (t || CreateFilterWorkplaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__["UserOfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
CreateFilterWorkplaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateFilterWorkplaceService, factory: CreateFilterWorkplaceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateFilterWorkplaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__["UserOfficesService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "FBo/":
/*!****************************************************!*\
  !*** ./src/app/shared/common/utils/filter.util.ts ***!
  \****************************************************/
/*! exports provided: mapCheckBoxOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCheckBoxOptions", function() { return mapCheckBoxOptions; });
function mapCheckBoxOptions(items, valueField, labelField, control) {
    return items.map((item) => {
        var _a, _b;
        const value = item[valueField];
        const label = item[labelField];
        const checked = Boolean((_b = (_a = control === null || control === void 0 ? void 0 : control.value) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, value));
        return Object.assign(Object.assign({}, item), { label, value, checked });
    });
}


/***/ }),

/***/ "OoJa":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/team-filters/create-filters-workplace/create-filter-workplace.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: CreateFilterWorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterWorkplaceComponent", function() { return CreateFilterWorkplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.utils */ "7RLK");
/* harmony import */ var _presentation_team_team_create_components_team_filters_create_filter_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/team/team-create/components/team-filters/create-filter.utils */ "2Y0D");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-filter-workplace.service */ "4tfZ");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/common/utils/workplace.utils */ "udpc");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @base/filters/filter-checkbox/filter-checkbox.component */ "JPRT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








// @ts-ignore



















function CreateFilterWorkplaceComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterWorkplaceComponent_nz_select_2_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const group_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", group_r11.id)("nzLabel", group_r11.name);
} }
function CreateFilterWorkplaceComponent_nz_select_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_nz_select_2_nz_option_1_Template, 1, 2, "nz-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.groupControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.labelGroups);
} }
function CreateFilterWorkplaceComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterWorkplaceComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterWorkplaceComponent_nz_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const week_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", week_r12)("nzLabel", week_r12.toString());
} }
function CreateFilterWorkplaceComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", !ctx_r5.repeat)("nzValue", day_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, day_r13.label));
} }
function CreateFilterWorkplaceComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterWorkplaceComponent_nz_form_item_33_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterWorkplaceComponent_nz_form_item_33_div_2_nz_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tag", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateFilterWorkplaceComponent_nz_form_item_33_div_2_nz_tag_1_Template_nz_tag_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const tag_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r18.updateTags(tag_r17.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r16.tagsStatus[tag_r17.name] ? "processing" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r17.name, " ");
} }
function CreateFilterWorkplaceComponent_nz_form_item_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_nz_form_item_33_div_2_nz_tag_1_Template, 2, 2, "nz-tag", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.tags);
} }
const _c0 = function () { return { $implicit: "Environment" }; };
function CreateFilterWorkplaceComponent_nz_form_item_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_nz_form_item_33_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateFilterWorkplaceComponent_nz_form_item_33_div_2_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.tags);
} }
function CreateFilterWorkplaceComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, title_r20), " ");
} }
const _c1 = function () { return { $implicit: "User group" }; };
const _c2 = function () { return { $implicit: "Users" }; };
const _c3 = function () { return []; };
const _c4 = function () { return { $implicit: "Period" }; };
const _c5 = function (a0, a1) { return [a0, a1]; };
const _c6 = function () { return { $implicit: "Type" }; };
class CreateFilterWorkplaceComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"] {
    constructor(injector, $service, $settings, _localization, _cdr) {
        super(injector);
        this.injector = injector;
        this.$service = $service;
        this.$settings = $settings;
        this._localization = _localization;
        this._cdr = _cdr;
        this.allDay = false;
        this.repeat = false;
        this.repeatData = {
            weekNum: 1,
            days: [],
            end: null
        };
        this.weekNums = [1, 2, 3, 4, 5];
        this.daysNaming = [
            { label: 'Days.1', value: 1 },
            { label: 'Days.2', value: 2 },
            { label: 'Days.3', value: 3 },
            { label: 'Days.4', value: 4 },
            { label: 'Days.5', value: 5 },
            { label: 'Days.6', value: 6 },
            { label: 'Days.0', value: 0 },
        ];
        this.workHours = [];
        this.endMaxDate = {};
        this.tagsStatus = {};
        const startHour = this.$settings.getSettingByName('workplaceReservationBeginHourDefault');
        const endHour = this.$settings.getSettingByName('workplaceReservationEndHourDefault');
        this.workHours = [startHour, endHour];
        this.minDuration = this.$settings.getSettingByName('workplaceReservationDurationMinSeconds');
    }
    ngOnInit() {
        this.$service.formGroup = this.formGroup;
        this.assignControls();
        this.getFieldOptions();
        this.getWorkplaceTypes();
        this._getExtraData();
        this._setFullDay();
        this._watchDateTimeFrom();
    }
    // tslint:disable-next-line:typedef
    ngOnDestroy() { }
    updateDateTime(dateTime) {
        this.dateTimeFromControl.setValue(dateTime[0]);
        this.dateTimeToControl.setValue(dateTime[1]);
        this.repeatDisable = !Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["isSameDay"])(dateTime[0], dateTime[1]);
    }
    updateAllDayDate(date) {
        this._setFullDay();
    }
    updateTags(name) {
        this.tagsStatus[name] = !this.tagsStatus[name];
        const tags = Object.entries(this.tagsStatus).filter(([_, status]) => status).map(([key]) => key);
        this.tagsControl.setValue(tags);
    }
    repeatCheckboxChange() {
        if (this.repeat) {
            this.repeatControl.setValue(this.repeatData);
        }
        else {
            this.repeatControl.setValue(null);
        }
    }
    chooseDays(event) {
        this.repeatData.days = event;
        this.updateRepeatDays();
    }
    updateRepeatDays() {
        const end = this.repeatData.end || '';
        if (this.repeat) {
            this.repeatControl.setValue(Object.assign(Object.assign({}, this.repeatData), { end }));
        }
        else {
            this.repeatControl.setValue(null);
        }
    }
    updateLabelControls() {
        this.labelsControl.setValue(this.users.filter(u => u.checked).map(u => u.id));
    }
    getWorkplaceTypes() {
        this.typesCheckBoxOptions = Object(_presentation_team_team_create_components_team_filters_create_filter_utils__WEBPACK_IMPORTED_MODULE_3__["mapCheckBoxOptions"])(_shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_8__["WorkplaceTypesMap"], 'value', 'name', this.typesControl);
    }
    getFieldOptions() {
        this.dateFormat = this.$service.dateFormat$;
        this.dateTimeFormat = this.$service.dateTimeFormat$;
        this.$service.tags$.subscribe((tags) => {
            this.tagsStatus = tags.reduce((acc, el) => (Object.assign(Object.assign({}, acc), { [el.name]: false })), {});
            this.tags = tags;
            this._cdr.markForCheck();
        });
    }
    _setFullDay() {
        const minDuration = this.$settings.getSettingByName('workplaceReservationDurationMinSeconds') * 1000;
        const [start, end] = Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_2__["getInitDate"])(this.workHours, minDuration);
        this.dateTimeFromControl.setValue(start);
        this.dateTimeToControl.setValue(end);
    }
    _getExtraData() {
        this.$service.groups$.subscribe((groups) => {
            this.labelGroups = groups;
            this.groupControl.setValue(groups[0].id);
            this._cdr.markForCheck();
        });
        this.groupControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((groupId) => this.$service.getUserByGroupId(groupId))).subscribe((users) => {
            this.labelsControl.setValue(users.map(u => u.id));
            this.users = Object(_presentation_team_team_create_components_team_filters_create_filter_utils__WEBPACK_IMPORTED_MODULE_3__["mapCheckBoxOptions"])(users, 'id', 'name', this.labelsControl);
            this._cdr.markForCheck();
        });
    }
    _watchDateTimeFrom() {
        this.dateTimeFromControl.valueChanges.subscribe((value) => {
            const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["addDays"])(new Date(value), this.$settings.getSettingByName('workplaceReservationDurationMaxDays'));
            this.repeatData.end = date;
            this.endMaxDate = (_date) => {
                return _date > date;
            };
        });
    }
}
CreateFilterWorkplaceComponent.ɵfac = function CreateFilterWorkplaceComponent_Factory(t) { return new (t || CreateFilterWorkplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_11__["LocalizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
CreateFilterWorkplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateFilterWorkplaceComponent, selectors: [["app-create-filters-workplace"], ["", "app-create-filters-workplace", ""]], hostVars: 2, hostBindings: function CreateFilterWorkplaceComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("app-list-filter-workplace", true);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 63, consts: [[1, "app-list-filter-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formControl", 4, "ngIf"], [3, "formControl", "options", "maxHeight", "allowSearch", "disabled", "allowEmpty", "allowSelectAll"], [1, "mt-24"], ["nz-checkbox", "", 3, "formControl"], [3, "ngModel", "layout", "format", "workHours", "minDuration", "allowAllDay", "autoUpdateDateTo", "autoUpdateDateToFullDay", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange", "nzCheckedChange"], [1, "app-list-filter-item__title", "checkbox-title"], [1, "app-list-filter-item__repeat"], [1, "week-num", "mb-25", 3, "nzAddOnBefore", "nzAddOnAfter"], [3, "nzDisabled", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "mb-15", 2, "width", "100%", 3, "nzOnChange"], ["nz-row", ""], ["class", "mb-10", "nz-col", "", "nzSpan", "6", 4, "ngFor", "ngForOf"], [3, "nzAddOnBefore"], [3, "ngModel", "nzFormat", "nzDisabled", "nzDisabledDate", "ngModelChange"], [1, "app-reservations-filter-item"], [3, "formControl", "options"], ["class", "app-list-filter-item", 4, "ngIf"], ["titleTpl", ""], [3, "formControl"], [3, "nzValue", "nzLabel"], ["nz-col", "", "nzSpan", "6", 1, "mb-10"], ["nz-checkbox", "", 3, "nzDisabled", "nzValue"], [4, "ngIf"], ["class", "tag", 3, "nzColor", "click", 4, "ngFor", "ngForOf"], [1, "tag", 3, "nzColor", "click"], [1, "app-list-filter-item__title"]], template: function CreateFilterWorkplaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateFilterWorkplaceComponent_nz_select_2_Template, 2, 2, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateFilterWorkplaceComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-filter-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CreateFilterWorkplaceComponent_ng_container_10_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-filter-date", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_app_filter_date_ngModelChange_11_listener($event) { return ctx.updateDateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_label_ngModelChange_13_listener($event) { return ctx.repeat = $event; })("nzCheckedChange", function CreateFilterWorkplaceComponent_Template_label_nzCheckedChange_13_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-input-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_select_ngModelChange_21_listener($event) { return ctx.repeatData.weekNum = $event; })("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_select_ngModelChange_21_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CreateFilterWorkplaceComponent_nz_option_22_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-checkbox-wrapper", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnChange", function CreateFilterWorkplaceComponent_Template_nz_checkbox_wrapper_nzOnChange_23_listener($event) { return ctx.chooseDays($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CreateFilterWorkplaceComponent_div_25_Template, 4, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-input-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-date-picker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_date_picker_ngModelChange_28_listener($event) { return ctx.repeatData.end = $event; })("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_date_picker_ngModelChange_28_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-form-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CreateFilterWorkplaceComponent_ng_container_30_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "app-filter-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CreateFilterWorkplaceComponent_nz_form_item_33_Template, 3, 4, "nz-form-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CreateFilterWorkplaceComponent_ng_template_34_Template, 3, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](55, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.labelGroups == null ? null : ctx.labelGroups.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](56, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.labelsControl)("options", ctx.users || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](57, _c3))("maxHeight", "320px")("allowSearch", true)("disabled", (ctx.labelsControl == null ? null : ctx.labelsControl.value) === null)("allowEmpty", false)("allowSelectAll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.autoModeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 45, "Auto choose places through one"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](58, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](59, _c5, ctx.dateTimeFromControl.value, ctx.dateTimeToControl.value))("layout", "vertical")("format", ctx.dateTimeFormat)("workHours", ctx.workHours)("minDuration", ctx.minDuration)("allowAllDay", true)("autoUpdateDateTo", true)("autoUpdateDateToFullDay", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.repeat)("nzDisabled", ctx.repeatDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 47, "Repeat"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 49, "Every"))("nzAddOnAfter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 51, "week"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", !ctx.repeat)("ngModel", ctx.repeatData.weekNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weekNums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.daysNaming);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 53, "End"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.repeatData.end)("nzFormat", ctx.dateFormat)("nzDisabled", !ctx.repeat)("nzDisabledDate", ctx.endMaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](62, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.typesControl)("options", ctx.typesCheckBoxOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tags == null ? null : ctx.tags.length);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormControlComponent"], _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["FilterCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__["NzCheckboxComponent"], _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_18__["FilterDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputGroupComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__["NzCheckboxWrapperComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__["NzDatePickerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzOptionComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__["NzTagComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslatePipe"]], styles: ["[_nghost-%COMP%]     perfect-scrollbar {\n  height: 100%;\n}\n[_nghost-%COMP%]     .ant-picker {\n  width: 100%;\n}\n.app-list-filter-status[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.allDay-picker[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.checkbox-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1maWx0ZXItd29ya3BsYWNlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWhCRDtFQUVJLFlBQUE7QUFpQko7QUFuQkE7RUFNSSxXQUFBO0FBZ0JKO0FBWEU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBYUo7QUFMQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQU9GO0FBSkE7RUFDRSxtQkFBQTtBQU1GO0FBSEE7RUFDRSxxQkFBQTtBQUtGIiwiZmlsZSI6ImNyZWF0ZS1maWx0ZXItd29ya3BsYWNlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xuXG46aG9zdCB7XG4gIDo6bmctZGVlcCBwZXJmZWN0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5hbnQtcGlja2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYXBwLWxpc3QtZmlsdGVyIHtcbiAgJi1zdGF0dXMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgJl9faW5kaWNhdG9yIHtcblxuICAgIH1cbiAgfVxufVxuXG4udGFnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWxsRGF5LXBpY2tlciB7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbi5jaGVja2JveC10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_7__["Subscribe"])()
], CreateFilterWorkplaceComponent.prototype, "dateFormat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_7__["Subscribe"])()
], CreateFilterWorkplaceComponent.prototype, "dateTimeFormat", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateFilterWorkplaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-filters-workplace, [app-create-filters-workplace]',
                templateUrl: './create-filter-workplace.component.html',
                styleUrls: ['./create-filter-workplace.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.app-list-filter-workplace]': `true`
                },
                providers: [_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"] }, { type: _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_11__["LocalizationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { dateFormat: [], dateTimeFormat: [] }); })();


/***/ }),

/***/ "P1GE":
/*!*********************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/create/create.utils.ts ***!
  \*********************************************************************************/
/*! exports provided: OSM_OPTIONS, getBookingItemAction, mapBuildingsToBookingItems, mapBusyLiveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSM_OPTIONS", function() { return OSM_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookingItemAction", function() { return getBookingItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBuildingsToBookingItems", function() { return mapBuildingsToBookingItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBusyLiveData", function() { return mapBusyLiveData; });
const OSM_OPTIONS = {
    x: 56.8587214,
    y: 35.9175965,
    zoom: 6,
};
function getBookingItemAction(id, handler) {
    return {
        id,
        title: 'SelectOffice',
        type: 'primary',
        handler
    };
}
function mapBuildingsToBookingItems(buildings, handler) {
    return buildings.map((building, index) => (Object.assign(Object.assign({}, building), { coordinates: {
            x: building.latitude,
            y: building.longitude
        }, actions: [getBookingItemAction(building.id, handler.bind(null, building.id))] })));
}
function mapBusyLiveData(buildings, floors, workplaces, busyLiveData) {
    return buildings.reduce((a, c) => {
        const floorsIds = floors.filter(f => f.buildingId === c.id).map(f => f.id);
        const buildPlaces = workplaces.filter(w => floorsIds.includes(w.floorMapId));
        const buildIds = buildPlaces.map(build => build.id);
        const busyWorkplaces = busyLiveData && busyLiveData.busyWorkplaces.map(w => w.id) || [];
        const busyNum = new Set(busyWorkplaces.filter(id => buildIds.includes(id))).size;
        return Object.assign(Object.assign({}, a), { [c.id]: {
                workplaces: {
                    free: buildPlaces.length - busyNum,
                    busy: busyNum,
                    freePercents: Math.trunc(100 * (buildPlaces.length - busyNum) / buildPlaces.length)
                }
            } });
    }, {});
}


/***/ }),

/***/ "P4Cz":
/*!***********************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/floor/floor.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FloorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorComponent", function() { return FloorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _floor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floor.service */ "azq8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @presentation/reservations/utils/reservation */ "Y+7/");
/* harmony import */ var _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/core/services/reservation-marks.service */ "+IbG");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/messages.service */ "mliB");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _base_map_map_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @base/map/map.service */ "Bnie");
/* harmony import */ var _base_booking_list_booking_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @base/booking-list/booking-list.service */ "j9/X");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _base_dropdown_select_dropdown_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../base/dropdown-select/dropdown-select.component */ "4TZ2");
/* harmony import */ var _base_map_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @base/map/map.component */ "6DYN");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @base/booking-list/booking-list.component */ "NcEa");
/* harmony import */ var _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _presentation_team_team_create_components_team_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @presentation/team/team-create/components/team-filters/create-filter.component */ "wPL6");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _composite_workplace_card_workplace_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../composite/workplace-card/workplace-card.component */ "5+Hy");




























const _c0 = ["modalTitleTpl"];
const _c1 = ["modalContentTpl"];
const _c2 = ["reservationModalTpl"];
const _c3 = ["popupTpl"];
function FloorComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0431\u0440\u043E\u043D\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FloorComponent_ng_template_20_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0414\u0430\u0442\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dates_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u0441 ", dates_r12.dateTimeFrom, " \u043F\u043E ", dates_r12.dateTimeTo, "");
} }
function FloorComponent_ng_template_20_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repeat_r13 = ctx.ngIf;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u043A\u0430\u0436\u0434. ", repeat_r13.weekNum, " \u043D\u0435\u0434. ", ctx_r9.getDays(repeat_r13.days), "");
} }
function FloorComponent_ng_template_20_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repeat_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](repeat_r14.end);
} }
function FloorComponent_ng_template_20_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", place_r15.label, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](place_r15.place);
} }
function FloorComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0417\u0434\u0430\u043D\u0438\u0435: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u042D\u0442\u0430\u0436: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FloorComponent_ng_template_20_div_10_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FloorComponent_ng_template_20_div_12_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FloorComponent_ng_template_20_div_14_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FloorComponent_ng_template_20_div_17_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0411\u0426 ", ctx_r3.currentReservation.buildName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.currentReservation.floorNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, ctx_r3.filterDates$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, ctx_r3.repeatFilter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, ctx_r3.repeatFilter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.currentReservation.places);
} }
function FloorComponent_ng_template_22_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", item_r19.label, ", ", item_r19.place, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, item_r19.dates[0], ctx_r18.shortDateTimeFormat), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, item_r19.dates[1], ctx_r18.shortDateTimeFormat), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.message);
} }
function FloorComponent_ng_template_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FloorComponent_ng_template_22_div_1_div_5_Template, 7, 11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.reservations.success);
} }
function FloorComponent_ng_template_22_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const err_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", err_r21.label, ", ", err_r21.place, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, err_r21.dates[0], ctx_r20.shortDateTimeFormat), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, err_r21.dates[1], ctx_r20.shortDateTimeFormat), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](err_r21.message);
} }
function FloorComponent_ng_template_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FloorComponent_ng_template_22_div_2_div_5_Template, 7, 11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.reservations.errors);
} }
function FloorComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FloorComponent_ng_template_22_div_1_Template, 6, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FloorComponent_ng_template_22_div_2_Template, 6, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.reservations.success.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.reservations.errors.length);
} }
function FloorComponent_ng_template_24_app_workplace_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-workplace-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reservation", function FloorComponent_ng_template_24_app_workplace_card_0_Template_app_workplace_card_reservation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.handleReservation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r23 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPermanentAssignment", true)("disabled", place_r23 == null ? null : place_r23.disabled)("workplaceId", place_r23 == null ? null : place_r23.id)("hideReserveBtn", true);
} }
function FloorComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FloorComponent_ng_template_24_app_workplace_card_0_Template, 1, 4, "app-workplace-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r7.currentWorkplace$));
} }
const HEIGHT_EXCEPT_MAP = 335;
class FloorComponent {
    constructor(_service, _cdr, _messages, _modal, _translatePipe, _measurements, _map, _bookingList) {
        this._service = _service;
        this._cdr = _cdr;
        this._messages = _messages;
        this._modal = _modal;
        this._translatePipe = _translatePipe;
        this._measurements = _measurements;
        this._map = _map;
        this._bookingList = _bookingList;
        this.areasVisible = false;
        this.activeMarkIndex = null;
        this.imageSize = { width: null, height: null };
        this.marks = [];
        this.currentReservation = {};
        this.select = { value: { label: '', value: null }, values: [] };
        this.hiddenMarksTypes = [];
        this.reservations = {
            success: [],
            errors: [],
        };
        this.shortDateTimeFormat = this._measurements.getMeasurementByName('shortDateTime');
        this.currentWorkplace$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.mapHeight = 0;
        this.resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(window, 'resize');
        this.sub = this._service.floors$.subscribe(({ currentFloor, floorsList, currentBuild }) => {
            this.floorsList = floorsList;
            this.currentFloor = currentFloor;
            this.currentBuild = currentBuild;
            this.select = {
                value: { label: currentFloor.name, value: currentFloor },
                values: this.floorsList.map((floor) => ({
                    label: floor.name,
                    value: floor,
                })),
            };
            this._bookingList.clearSelectedPlaces();
            this._cdr.markForCheck();
        });
        this.sub = this._service.floorImage$.subscribe(({ image, imageSize, areas }) => {
            this.image = image;
            this.imageSize = imageSize;
            this.areas = areas;
            this._cdr.markForCheck();
        });
        this.sub = this._service.mapMarks$.subscribe((marks) => {
            this.marks = marks.map((mark) => (Object.assign(Object.assign({}, mark), { popup: this.popupTpl, onClick: () => {
                    this.currentWorkplace$.next(mark.relativePlace);
                    this.activeMarkIndex = this.bookingItems.findIndex((i) => i.id === mark.id);
                    this._cdr.markForCheck();
                } })));
            this._cdr.markForCheck();
        });
        this.sub = this._service.labelsFilter$.subscribe((labels) => {
            this.labels = labels.reduce((acc, label) => (Object.assign(Object.assign({}, acc), { [label.id]: label })), {});
            this.bookingItems =
                (labels &&
                    labels.map((label) => ({
                        id: label.id,
                        name: label.name,
                        select: true,
                    }))) ||
                    [];
            this._cdr.markForCheck();
        });
        this.sub = this._service.notReservWorkplaces$.subscribe((places) => {
            this._bookingList.setPlaces(places);
        });
        this.sub = this._bookingList.selectedPlaces$.subscribe((selected) => {
            this.selected = selected;
        });
        this.sub = this.resize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe((_e) => {
            this.setMapHeight();
        });
        this.sub = this._service.groupDisabledPlaces$.subscribe((disabled) => {
            this._bookingList.setDisabled(disabled);
        });
        this.sub = this._service.reservations$.subscribe((reservs) => {
            this.allReservations = reservs;
        });
    }
    toggleAreasVisible() {
        this.areasVisible = !this.areasVisible;
    }
    get filterDates$() {
        return this._service.filterDates$;
    }
    get repeatFilter$() {
        return this._service.repeatFilter$;
    }
    get loading$() {
        return this._service.loading$;
    }
    get autoModeFilter$() {
        return this._service.autoModeFilter$;
    }
    ngAfterViewInit() {
        this.setMapHeight();
    }
    ngOnDestroy() { }
    setCurrentFloor(floor) {
        this._service.changeFloor(floor.id);
    }
    goBuildingSelect() {
        this._service.backToSelectBuildings();
    }
    changeFilters(filters) {
        this._service.setFilters(filters);
    }
    centerPlace(id) {
        this.centeredItemId = id;
        this.currentWorkplace$.next(this.bookingItems.find((p) => p.id === id));
    }
    reservationTeamPlaces() {
        const places = Object.entries(this.selected).reduce((acc, [key, value]) => {
            if (value) {
                acc[key] = value;
            }
            return acc;
        }, {});
        if (!Object.keys(places).length) {
            this._messages.error('Необходимо выбрать место');
            return;
        }
        if (this.currentFloor.workplaceReservationSocialDistanceCheck ===
            'CONFIRMATION') {
            const placesValues = Object.values(places);
            const distanceCheck = placesValues.some((place) => Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_7__["checkReservedNeighbors"])(place, this.allReservations));
            const placesCross = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_7__["checkNeighbors"])(placesValues);
            if (distanceCheck || placesCross) {
                this._modal.confirm(Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_7__["getDistanceCheckConfirmModal"])(() => {
                    this.reservationPlace(places);
                }));
                return;
            }
        }
        this.reservationPlace(places);
    }
    reservationPlace(places) {
        const _places = Object.entries(places)
            .filter(([labelId]) => Object.keys(this.labels).includes(labelId))
            .reduce((acc, [key, value]) => (Object.assign(Object.assign({}, acc), { [key]: value })), {});
        this.currentReservation.buildName = this.currentBuild.name;
        this.currentReservation.floorNumber = this.currentFloor.floorNumber;
        this.currentReservation.places = Object.entries(_places).map(([labelId, place]) => ({
            label: this.labels[labelId].name,
            place: place.name,
        }));
        let loading = false;
        this._modal.create({
            nzTitle: this.modalTitleTpl,
            nzContent: this.modalContentTpl,
            nzFooter: [
                {
                    label: 'Отмена',
                    onClick: () => {
                        this._modal.closeAll();
                    },
                },
                {
                    label: 'Подтверждаю',
                    type: 'primary',
                    loading,
                    onClick: () => {
                        loading = true;
                        this._service
                            .reservationPlace(_places)
                            .then(({ data, dates, filters }) => {
                            loading = false;
                            this._modal.closeAll();
                            this.reservations.success = data
                                .filter((r) => r.meta.isOk)
                                .map((r) => {
                                const [labelId, index] = r.meta.recordCode.split('-');
                                return {
                                    label: this.labels[labelId].name,
                                    place: places[labelId].name,
                                    dates: dates[index],
                                    message: r.meta.message,
                                };
                            });
                            this.reservations.errors = data
                                .filter((r) => !r.meta.isOk)
                                .map((r) => {
                                const [labelId, index] = r.meta.recordCode.split('-');
                                return {
                                    label: this.labels[labelId].name,
                                    place: places[labelId].name,
                                    dates: dates[index],
                                    message: r.meta.message,
                                };
                            });
                            this._modal.create({
                                nzTitle: 'Информация о бронирование',
                                nzContent: this.reservationModalTpl,
                                nzWidth: 1000,
                                nzFooter: [
                                    {
                                        label: 'Ок',
                                        type: 'primary',
                                        onClick: () => {
                                            this._modal.closeAll();
                                        },
                                    },
                                ],
                            });
                            this._service.reloadReservations();
                            this._bookingList.clearSelectedPlaces();
                        });
                    },
                },
            ],
        });
    }
    getAction(place) {
        return {
            id: place.id,
            title: 'Забронировать место',
            type: 'primary',
            handler: () => {
                this.reservationPlace(place);
            },
        };
    }
    getDays(days) {
        return days
            .map((day) => this._translatePipe.transform(`Days.${day}`))
            .join(', ');
    }
    handleReservation() {
        const place = this.currentWorkplace$.getValue();
        if (this.currentFloor.workplaceReservationSocialDistanceCheck ===
            'CONFIRMATION') {
            const distanceCheck = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_7__["checkReservedNeighbors"])(place, this.allReservations);
            if (distanceCheck) {
                this._modal.confirm(Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_7__["getDistanceCheckConfirmModal"])(() => {
                    this.reservationPlace(place);
                }));
                return;
            }
        }
        this.reservationPlace(place);
    }
    onAreaVisibilityChange(visible) {
        this.areasVisible = visible;
    }
    onHiddenMarksChange(hiddenMarksTypes) {
        this.hiddenMarksTypes = hiddenMarksTypes;
    }
    setMapHeight() {
        const body = document.querySelector('body').offsetHeight;
        this.mapHeight = body - HEIGHT_EXCEPT_MAP;
    }
}
FloorComponent.ɵfac = function FloorComponent_Factory(t) { return new (t || FloorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_floor_service__WEBPACK_IMPORTED_MODULE_5__["FloorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_messages_service__WEBPACK_IMPORTED_MODULE_9__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_12__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_map_map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_booking_list_booking_list_service__WEBPACK_IMPORTED_MODULE_14__["BookingListService"])); };
FloorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FloorComponent, selectors: [["app-floor"]], viewQuery: function FloorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalTitleTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalContentTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.reservationModalTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popupTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_8__["ReservationMarksService"], _floor_service__WEBPACK_IMPORTED_MODULE_5__["FloorService"]])], decls: 26, vars: 23, consts: [[1, "workspace"], [1, "workspace-wrapper"], [1, "workspace__top-controls"], ["nz-button", "", "nzType", "link", 1, "workspace__top-controls-link", 3, "click"], [1, "workspace__top-controls-dropdown-select", 3, "values", "value", "valueChange"], [1, "workspace__map", 3, "img", "marks", "size", "height", "centeredMarkId", "loading", "areas", "areasVisible", "hiddenMarksTypes", "hiddenMarksChange", "areaVisibilityChange"], [1, "workspace__actions"], [1, "workspace__button"], ["nz-button", "", "nzType", "primary", 3, "click"], ["appScroll", "", 3, "items", "activeIndex", "emptyText", "autoMode", "activeItemId"], ["app-create-filters", "", 1, "app-list__filters", "workspace__actions", "workspace__filters", 3, "type", "valuesChange"], ["modalTitleTpl", ""], ["modalContentTpl", ""], ["reservationModalTpl", ""], ["popupTpl", ""], [1, "modal-title"], ["nz-icon", "", "nzType", "check-circle"], [1, "modal-content"], [1, "modal-content__name"], ["class", "modal-content", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["appScroll", ""], ["class", "mb-25", 4, "ngIf"], [4, "ngIf"], [1, "mb-25"], ["class", "modal-content", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "close-circle", 1, "error"], [3, "showPermanentAssignment", "disabled", "workplaceId", "hideReserveBtn", "reservation", 4, "ngIf"], [3, "showPermanentAssignment", "disabled", "workplaceId", "hideReserveBtn", "reservation"]], template: function FloorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FloorComponent_Template_a_click_5_listener() { return ctx.goBuildingSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-dropdown-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function FloorComponent_Template_app_dropdown_select_valueChange_8_listener($event) { return ctx.setCurrentFloor($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-map", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hiddenMarksChange", function FloorComponent_Template_app_map_hiddenMarksChange_9_listener($event) { return ctx.onHiddenMarksChange($event); })("areaVisibilityChange", function FloorComponent_Template_app_map_areaVisibilityChange_9_listener($event) { return ctx.onAreaVisibilityChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FloorComponent_Template_button_click_13_listener() { return ctx.reservationTeamPlaces(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " '\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-book-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeItemId", function FloorComponent_Template_app_book_list_activeItemId_15_listener($event) { return ctx.centerPlace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valuesChange", function FloorComponent_Template_div_valuesChange_17_listener($event) { return ctx.changeFilters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FloorComponent_ng_template_18_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, FloorComponent_ng_template_20_Template, 18, 12, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, FloorComponent_ng_template_22_Template, 3, 4, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FloorComponent_ng_template_24_Template, 2, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 17, "Reservations.Back to building selection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.select.values)("value", ctx.select.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("img", ctx.image)("marks", ctx.marks)("size", ctx.imageSize)("height", ctx.mapHeight)("centeredMarkId", ctx.centeredItemId)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 19, ctx.loading$))("areas", ctx.areas)("areasVisible", ctx.areasVisible)("hiddenMarksTypes", ctx.hiddenMarksTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.bookingItems)("activeIndex", ctx.activeMarkIndex)("emptyText", "No available users")("autoMode", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 21, ctx.autoModeFilter$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "workplace");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], _base_dropdown_select_dropdown_select_component__WEBPACK_IMPORTED_MODULE_17__["DropdownSelectComponent"], _base_map_map_component__WEBPACK_IMPORTED_MODULE_18__["MapComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveDirective"], _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_20__["BookingListComponent"], _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollDirective"], _presentation_team_team_create_components_team_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_22__["CreateFilterComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _composite_workplace_card_workplace_card_component__WEBPACK_IMPORTED_MODULE_25__["WorkplaceCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"]], styles: [".workspace[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  height: 100%;\n}\n.workspace-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100%;\n}\n.workspace-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  max-width: calc(100% - 520px);\n  flex-basis: calc(100% - 290px);\n}\n.workspace__map[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.workspace__actions[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 100%;\n  flex-basis: 350px;\n  background-color: #ffffff;\n  border-left: 1px solid #f0f0f0;\n  padding-top: 52px;\n}\n.workspace__filters[_ngcontent-%COMP%] {\n  flex-basis: 350px;\n  padding-top: 0;\n}\n.workspace__top-controls[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px 23px 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.workspace__top-controls-item[_ngcontent-%COMP%] {\n  font-size: 21px;\n  cursor: pointer;\n  color: #bfbfbf;\n}\n.workspace__top-controls-item._active[_ngcontent-%COMP%] {\n  color: #1890ff;\n}\n.workspace__top-controls-link[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.workspace__top-controls-dropdown-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.workspace__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n@media screen and (max-width: 1350px) {\n  .workspace-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #40a9ff;\n  color: #ffffff;\n}\n.mark-popover[_ngcontent-%COMP%] {\n  width: 416px;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.mark-popover__icon[_ngcontent-%COMP%] {\n  color: #52c41a;\n  float: left;\n  margin-right: 16px;\n  font-size: 22px;\n}\n.mark-popover__title[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.4;\n}\n.mark-popover__content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin-top: 8px;\n  margin-left: 38px;\n}\n.mark-popover__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #52c41a;\n  margin-right: 10px;\n}\n.modal-title[_ngcontent-%COMP%]   i.error[_ngcontent-%COMP%] {\n  color: #f5222d;\n}\n.modal-content__name[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.modal-content[_ngcontent-%COMP%]    + .modal-content[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb29yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWpCRDtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQW1CRjtBQWxCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQW9CSjtBQW5CSTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUFxQk47QUFsQkU7RUFDRSxXQUFBO0FBb0JKO0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBb0JKO0FBbEJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBb0JKO0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBb0JKO0FBbkJJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcUJOO0FBcEJNO0VBQ0UsY0FBQTtBQXNCUjtBQWxCRTtFQUNFLFVBQUE7QUFvQko7QUFsQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFvQko7QUFsQkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQW9CSjtBQWpCQTtFQUNFO0lBQ0Usc0JBQUE7RUFtQkY7QUFDRjtBQWhCQTs7RUFFRSxPQUFBO0FBa0JGO0FBZkE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFpQkY7QUFkQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFnQkY7QUFmRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaUJKO0FBZkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaUJKO0FBZkU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpQko7QUFmRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBaUJKO0FBWkU7RUFDRSxhQUFBO0FBY0o7QUFiSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFlTjtBQWRNO0VBQ0UsY0FBQTtBQWdCUjtBQVhJO0VBQ0UsYUFBQTtBQWFOO0FBWEk7RUFDRSxnQkFBQTtBQWFOIiwiZmlsZSI6ImZsb29yLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvdGhlbWUvb3ZlcnJpZGVcIjtcbi53b3Jrc3BhY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICBoZWlnaHQ6IDEwMCU7XG4gICYtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJiA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUyMHB4KTtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAtIDI5MHB4KTtcbiAgICB9XG4gIH1cbiAgJl9fbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAmX19hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBmbGV4LWJhc2lzOiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGdyYXktNDtcbiAgICBwYWRkaW5nLXRvcDogNTJweDtcbiAgfVxuICAmX19maWx0ZXJzIHtcbiAgICBmbGV4LWJhc2lzOiAzNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAmX190b3AtY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAzMnB4IDIzcHggOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgJi1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiBAZ3JheS02O1xuICAgICAgJi5fYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IEBibHVlLTY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX3RvcC1jb250cm9scy1saW5rIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gICZfX3RvcC1jb250cm9scy1kcm9wZG93bi1zZWxlY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICAmX19idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGdyYXktNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICAud29ya3NwYWNlLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmxlZnQsXG4ucmlnaHQge1xuICBmbGV4OiAxO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJsdWUtNTtcbiAgY29sb3I6IEBncmF5LTE7XG59XG5cbi5tYXJrLXBvcG92ZXIge1xuICB3aWR0aDogNDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIwcHg7XG4gICZfX2ljb24ge1xuICAgIGNvbG9yOiAjNTJjNDFhO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgJl9fdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuICAmX19jb250ZW50IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzOHB4O1xuICB9XG4gICZfX2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59XG5cbi5tb2RhbCB7XG4gICYtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJiBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiBAZ3JlZW4tNjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICYuZXJyb3Ige1xuICAgICAgICBjb2xvcjogQHJlZC02O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLWNvbnRlbnQge1xuICAgICZfX25hbWUge1xuICAgICAgb3BhY2l0eTogMC42NTtcbiAgICB9XG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_2__["MarkForCheck"]
], FloorComponent.prototype, "mapHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], FloorComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FloorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-floor',
                templateUrl: './floor.component.html',
                styleUrls: ['./floor.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_8__["ReservationMarksService"], _floor_service__WEBPACK_IMPORTED_MODULE_5__["FloorService"]],
            }]
    }], function () { return [{ type: _floor_service__WEBPACK_IMPORTED_MODULE_5__["FloorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_9__["MessagesService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__["NzModalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_12__["MeasurementsService"] }, { type: _base_map_map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"] }, { type: _base_booking_list_booking_list_service__WEBPACK_IMPORTED_MODULE_14__["BookingListService"] }]; }, { mapHeight: [], sub: [], modalTitleTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalTitleTpl']
        }], modalContentTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalContentTpl']
        }], reservationModalTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['reservationModalTpl']
        }], popupTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['popupTpl']
        }] }); })();


/***/ }),

/***/ "UCJT":
/*!********************************************************!*\
  !*** ./src/app/base/filters/filters/filter.service.ts ***!
  \********************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FilterService {
    constructor(injector) {
        this.injector = injector;
        this._formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    set formGroup(formGroup) {
        this._formGroup = formGroup;
    }
    getFormControlByName(name) {
        return this._formGroup.controls[name];
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "W7bi":
/*!************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/team-filters/create-filter.service.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterService", function() { return CreateFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _create_filter_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-filter.utils */ "2Y0D");





class CreateFilterService {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this._formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    get formGroup() {
        return this._formGroup;
    }
    createFormGroup(type) {
        this.clearFormGroup();
        this.addFormGroupControls(type);
    }
    clear(formGroup) {
        Object.values(this.formGroup.controls).forEach((control) => {
            if (control.value instanceof Array) {
                control.setValue([]);
                return;
            }
            control.setValue(null);
        });
    }
    clearFormGroup() {
        Object.keys(this._formGroup.controls)
            .forEach(key => this._formGroup.removeControl(key));
    }
    addFormGroupControls(type) {
        if (!type) {
            this._formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
            return;
        }
        Object.entries(Object(_create_filter_utils__WEBPACK_IMPORTED_MODULE_2__["getListFilterFieldsByType"])(type))
            .forEach(([name, state]) => this._formGroup.addControl(name, this.formBuilder.control(state)));
    }
}
CreateFilterService.ɵfac = function CreateFilterService_Factory(t) { return new (t || CreateFilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateFilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateFilterService, factory: CreateFilterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateFilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZIu1":
/*!***********************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/create/create.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateService", function() { return CreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _presentation_team_team_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/team/team-create/components/create/create.utils */ "P1GE");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");
/* harmony import */ var _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/dictionaries/services/floor-maps.service */ "2Mmv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











class CreateService {
    constructor(_dicts, $reservationsApi, $userOffices, $buildings, $floorMaps, $router, $route) {
        this._dicts = _dicts;
        this.$reservationsApi = $reservationsApi;
        this.$userOffices = $userOffices;
        this.$buildings = $buildings;
        this.$floorMaps = $floorMaps;
        this.$router = $router;
        this.$route = $route;
    }
    get buildingsList$() {
        return this.buildings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((buildings) => Object(_presentation_team_team_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_3__["mapBuildingsToBookingItems"])(buildings, buildingId => this.goToCreateOnFloor(buildingId))));
    }
    get busyInfo$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.buildings$,
            this.floors$,
            this._dicts.getDictionary('workplaces'),
            this.busyLiveData$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([buildings, floors, workplaces, busyLiveData]) => Object(_presentation_team_team_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_3__["mapBusyLiveData"])(buildings, floors, workplaces, busyLiveData)));
    }
    goToCreateOnFloor(buildingId) {
        this.$floorMaps
            .getFloorMaps$('workplaces', buildingId)
            .subscribe(([{ id }]) => this.$router.navigate([/*buildingId,*/ id], { relativeTo: this.$route }));
    }
    get buildings$() {
        return this.$buildings.getBuildingsByPlaceType$('workplaces');
    }
    get floors$() {
        return this.$floorMaps.getFloorMaps$('workplaces');
    }
    get busyLiveData$() {
        return this.$reservationsApi
            .getLiveData('busyWorkplaces')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
}
CreateService.ɵfac = function CreateService_Factory(t) { return new (t || CreateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_6__["UserOfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_7__["BuildingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_8__["FloorMapsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"])); };
CreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateService, factory: CreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsApiService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_6__["UserOfficesService"] }, { type: _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_7__["BuildingsService"] }, { type: _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_8__["FloorMapsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZgfZ":
/*!*********************************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/list/list-filters/list-filter.utils.ts ***!
  \*********************************************************************************************/
/*! exports provided: TIME_PICKER_OPTIONS, getListFilterFieldsByType, mapBuildingsOptions, mapFloorMapsOptions, mapRoomsOptions, mapStatusesOptions, mapRoomGroups, mapLabelsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_PICKER_OPTIONS", function() { return TIME_PICKER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFilterFieldsByType", function() { return getListFilterFieldsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBuildingsOptions", function() { return mapBuildingsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFloorMapsOptions", function() { return mapFloorMapsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapRoomsOptions", function() { return mapRoomsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStatusesOptions", function() { return mapStatusesOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapRoomGroups", function() { return mapRoomGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapLabelsOptions", function() { return mapLabelsOptions; });
/* harmony import */ var _shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/common/utils/filter.util */ "FBo/");
/* harmony import */ var _core_utils_sort_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/sort.util */ "LYpy");


const listFilterFields = {
    appointment: {
        requestAppointmentLabelIds: [],
        requestAppointmentRoomIds: []
    },
    locker: {
        floorMapIds: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    parking: {
        floorMapIds: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    workplace: {
        floorMapIds: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    }
};
const TIME_PICKER_OPTIONS = {
    nzDefaultOpenValue: new Date(),
    nzFormat: 'HH:mm',
    nzMinuteStep: 5,
    nzOpen: true
};
function getListFilterFieldsByType(type) {
    return listFilterFields[type] || null;
}
function mapBuildingsOptions(buildings, buildingIdControl) {
    return Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(buildings, 'id', 'name', buildingIdControl);
}
function mapFloorMapsOptions(floorMaps, buildings, floorMapIdsControl) {
    floorMaps.sort(Object(_core_utils_sort_util__WEBPACK_IMPORTED_MODULE_1__["sortByFactory"])('floorNumber'));
    return buildings
        .map(({ name: label, id: value }) => {
        const options = Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(floorMaps.filter(({ buildingId }) => buildingId === value), 'id', 'name', floorMapIdsControl);
        const checked = isCheckedGroup(options);
        const indeterminate = isIndeterminateGroup(checked, options);
        return { label, value, checked, indeterminate, options };
    })
        .filter(group => !!group.options.length);
}
function mapRoomsOptions(rooms, floorMapIds, roomsIdControl) {
    if ((floorMapIds === null || floorMapIds === void 0 ? void 0 : floorMapIds.length) > 0) {
        rooms = rooms.filter(({ floorMapId }) => floorMapIds.includes(floorMapId));
    }
    return Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(rooms, 'id', 'name', roomsIdControl);
}
function mapStatusesOptions(statuses, excludeStatuses, statusesControl) {
    if (excludeStatuses.length) {
        statuses = statuses.filter(({ code }) => !excludeStatuses.includes(code));
    }
    return Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(statuses, 'code', 'name', statusesControl);
}
function mapRoomGroups(buildings, floorMaps, rooms, roomsIdControl) {
    return buildings
        .map(({ name: label, id: value }) => {
        const _floorMaps = floorMaps.filter(({ buildingId }) => buildingId === value);
        const _rooms = rooms.filter(({ floorMapId }) => _floorMaps.some(({ id }) => id === floorMapId));
        const options = Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(_rooms, 'id', 'name', roomsIdControl);
        const checked = isCheckedGroup(options);
        const indeterminate = isIndeterminateGroup(checked, options);
        return { label, value, checked, indeterminate, options };
    })
        .filter(group => !!group.options.length);
}
function mapLabelsOptions(labels, labelsIdsControl) {
    return Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(labels, 'mail', 'name', labelsIdsControl);
}
function isCheckedGroup(options) {
    return options.every(({ checked }) => checked);
}
function isIndeterminateGroup(checkedGroup, options) {
    return !checkedGroup && options.some(({ checked }) => checked);
}


/***/ }),

/***/ "ZqmD":
/*!*************************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/create/create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _create_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.service */ "ZIu1");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var _presentation_team_team_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @presentation/team/team-create/components/create/create.utils */ "P1GE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @base/booking-list/booking-list.component */ "NcEa");
/* harmony import */ var _base_open_street_map_open_street_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/open-street-map/open-street-map.component */ "+2ou");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















const _c0 = ["bookListContentTpl"];
function CreateComponent_app_open_street_map_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-open-street-map", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("markClicked", function CreateComponent_app_open_street_map_2_Template_app_open_street_map_markClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.handleMarkClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r0.mapHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", ctx_r0.mapHeight)("options", ctx_r0.osmOptions)("marks", ctx_r0.osmMarks);
} }
function CreateComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workplaces_r5 = ctx.workplaces;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "Offices.Workplaces"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](workplaces_r5.free);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](workplaces_r5.busy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" | ", workplaces_r5.freePercents, "% ");
} }
const HEIGHT_EXCEPT_MAP = 233;
class CreateComponent {
    constructor(_service, cdr) {
        this._service = _service;
        this.cdr = cdr;
        this.activeMarkIndex = null;
        this.osmOptions = _presentation_team_team_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_7__["OSM_OPTIONS"];
        this.mapHeight = 0;
        this.sub = _service.buildingsList$.subscribe((buildingsList) => {
            this.buildingList = buildingsList;
            this.osmMarks = buildingsList
                .filter((building) => building.coordinates)
                .map(({ id, coordinates: { x, y } }) => ({ id, x, y }));
            this.cdr.markForCheck();
        });
    }
    handleMarkClicked(id) {
        this.activeMarkIndex = this.buildingList.findIndex((i) => i.id === id);
    }
    ngAfterViewInit() {
        this.setMapHeight();
        this.sub = this._service.busyInfo$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log))
            .subscribe((res) => {
            this.buildingList = this.buildingList.map((build) => (Object.assign(Object.assign({}, build), { content: this.bookListContentTpl, contentContext: res[build.id] })));
            this.cdr.markForCheck();
        });
    }
    setMapHeight() {
        const body = document.querySelector('body').offsetHeight;
        this.mapHeight = body - HEIGHT_EXCEPT_MAP;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_create_service__WEBPACK_IMPORTED_MODULE_3__["CreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-team-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bookListContentTpl = _t.first);
    } }, hostBindings: function CreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function CreateComponent_resize_HostBindingHandler($event) { return ctx.setMapHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_create_service__WEBPACK_IMPORTED_MODULE_3__["CreateService"]])], decls: 7, vars: 5, consts: [[1, "workspace"], [1, "workspace-wrapper"], ["class", "workspace__map", 3, "height", "options", "marks", "markClicked", 4, "ngIf"], ["appScroll", "", 1, "workspace__actions"], [3, "items", "activeIndex"], ["bookListContentTpl", ""], [1, "workspace__map", 3, "height", "options", "marks", "markClicked"], [1, "free"], [1, "busy"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateComponent_app_open_street_map_2_Template, 1, 5, "app-open-street-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-book-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreateComponent_ng_template_5_Template, 9, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.mapHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buildingList == null ? null : ctx.buildingList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.buildingList)("activeIndex", ctx.activeMarkIndex);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollDirective"], _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_10__["BookingListComponent"], _base_open_street_map_open_street_map_component__WEBPACK_IMPORTED_MODULE_11__["OpenStreetMapComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".workspace[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.workspace-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.workspace-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  flex-basis: calc(100% - 290px);\n}\n.workspace__map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n}\n.workspace__actions[_ngcontent-%COMP%] {\n  max-height: 100%;\n  flex-basis: 290px;\n  background-color: #ffffff;\n  border-left: 1px solid #f0f0f0;\n}\n.workspace__top-controls[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px 23px 8px;\n}\n.workspace__top-controls-link[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.workspace__top-controls-dropdown-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media screen and (max-width: 1350px) {\n  .workspace-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #40a9ff;\n  color: #ffffff;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #52c41a;\n  margin-right: 10px;\n}\n.modal-content__name[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.modal-content[_ngcontent-%COMP%]    + .modal-content[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.free[_ngcontent-%COMP%] {\n  color: #52c41a;\n}\n.busy[_ngcontent-%COMP%] {\n  color: #f5222d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFqQkQ7RUFDRSx5QkFBQTtBQW1CRjtBQWxCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBb0JKO0FBbkJJO0VBQ0UsOEJBQUE7QUFxQk47QUFsQkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQW9CSjtBQWxCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBb0JKO0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQW9CSjtBQWxCRTtFQUNFLFVBQUE7QUFvQko7QUFsQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFvQko7QUFqQkE7RUFDRTtJQUNFLHNCQUFBO0VBbUJGO0FBQ0Y7QUFoQkE7O0VBQ0UsT0FBQTtBQW1CRjtBQWhCQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQWtCRjtBQWRFO0VBQ0UsYUFBQTtBQWdCSjtBQWZJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWlCTjtBQWJJO0VBQ0UsYUFBQTtBQWVOO0FBYkk7RUFDRSxnQkFBQTtBQWVOO0FBVkE7RUFDRSxjQUFBO0FBWUY7QUFWQTtFQUNFLGNBQUE7QUFZRiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3RoZW1lL292ZXJyaWRlJztcbi53b3Jrc3BhY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICAmLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJiA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSAyOTBweCk7XG4gICAgfVxuICB9XG4gICZfX21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxuICAmX19hY3Rpb25zIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtYmFzaXM6IDI5MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBAZ3JheS00O1xuICB9XG4gICZfX3RvcC1jb250cm9scyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDMycHggMjNweCA4cHg7XG4gIH1cbiAgJl9fdG9wLWNvbnRyb2xzLWxpbmsge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgJl9fdG9wLWNvbnRyb2xzLWRyb3Bkb3duLXNlbGVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpICB7XG4gIC53b3Jrc3BhY2Utd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4ubGVmdCwgLnJpZ2h0IHtcbiAgZmxleDogMTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBibHVlLTU7XG4gIGNvbG9yOiBAZ3JheS0xO1xufVxuXG4ubW9kYWwge1xuICAmLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICYgaSB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBjb2xvcjogQGdyZWVuLTY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG4gICYtY29udGVudCB7XG4gICAgJl9fbmFtZSB7XG4gICAgICBvcGFjaXR5OiAwLjY1O1xuICAgIH1cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZnJlZSB7XG4gIGNvbG9yOiBAZ3JlZW4tNjtcbn1cbi5idXN5IHtcbiAgY29sb3I6IEByZWQtNjtcbn1cbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscriptions"])()
], CreateComponent.prototype, "sub", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_4__["MarkForCheck"]
], CreateComponent.prototype, "mapHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_6__["Debounce"])(250)
], CreateComponent.prototype, "setMapHeight", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-team-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.less'],
                providers: [_create_service__WEBPACK_IMPORTED_MODULE_3__["CreateService"]]
            }]
    }], function () { return [{ type: _create_service__WEBPACK_IMPORTED_MODULE_3__["CreateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { sub: [], mapHeight: [], bookListContentTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['bookListContentTpl']
        }], setMapHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "azq8":
/*!*********************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/floor/floor.service.ts ***!
  \*********************************************************************************/
/*! exports provided: FloorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorService", function() { return FloorService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/utils/reservation */ "Y+7/");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var date_fns_nextDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/nextDay */ "K5ha");
/* harmony import */ var date_fns_nextDay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_nextDay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/images/services/image-blob.service */ "AgCt");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/dictionaries/services/floor-maps.service */ "2Mmv");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");
/* harmony import */ var _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/core/services/reservation-marks.service */ "+IbG");



// @ts-ignore

// @ts-ignore












class FloorService {
    constructor($dicts, _route, _router, _measurements, _img, _api, $floorMaps, $buildings, $reservationMarks) {
        this.$dicts = $dicts;
        this._route = _route;
        this._router = _router;
        this._measurements = _measurements;
        this._img = _img;
        this._api = _api;
        this.$floorMaps = $floorMaps;
        this.$buildings = $buildings;
        this.$reservationMarks = $reservationMarks;
        this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        this._reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this._workplaces$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])({
            places: this.$dicts.getDictionary('workplaces'),
            tags: this.$dicts.getDictionary('tags'),
            disabled: this._api.getWorkplacesDisabled$,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ places, tags, disabled }) => {
            return places.map((place) => (Object.assign(Object.assign({}, place), { tags: place.tags.map((tagId) => tags.find((t) => t.id === tagId).name), disabled: disabled.includes(place.id) })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._floors$ = this._route.params.pipe(
        // tap(() => this.changeLoader(true)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.$floorMaps.getFloorMaps$('workplaces'),
            this.$buildings.getBuildingsByPlaceType$('workplaces'),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(+(params === null || params === void 0 ? void 0 : params.floorId)),
        ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([floors, builds, floorId]) => {
            const currentFloor = floors.find((floor) => floor.id === floorId);
            const floorsList = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["filterFloors"])(floors, currentFloor.buildingId);
            const currentBuild = builds.find((build) => build.id === currentFloor.buildingId);
            return { currentFloor, floorsList, currentBuild };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
    }
    get areas$() {
        return this.currentFloor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((floor) => this.$dicts
            .getDictionary('areas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((areas) => areas.filter((a) => a.floorMapId === floor.id)))));
    }
    get floors$() {
        return this._floors$;
    }
    get currentFloor$() {
        return this._floors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ currentFloor }) => currentFloor));
    }
    get floorImage$() {
        return this._floors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(({ currentFloor }) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this._img.getImageBlob(currentFloor.mapImageUrl),
            this.areas$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([image, areas]) => ({
            image,
            imageSize: {
                width: currentFloor.mapWidth,
                height: currentFloor.mapHeight,
            },
            areas,
        })))));
    }
    get loading$() {
        return this._loading$;
    }
    get currentWorkplaces$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this._workplaces$,
            this.currentFloor$,
            this.reservations$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([workplaces, floor, reservations]) => {
            let places = workplaces.filter((place) => place.floorMapId === floor.id);
            places = places.map((place) => {
                if (floor.workplaceReservationSocialDistanceCheck === 'FORBIDDEN') {
                    return Object.assign(Object.assign({}, place), { disabled: !place.disabled
                            ? Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["checkReservedNeighbors"])(place, reservations)
                            : place.disabled });
                }
                else {
                    return place;
                }
            });
            return places;
        }));
    }
    get notReservWorkplaces$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.floorItems$,
            this.tagsFilter$,
            this.repeatRange$,
            this.typesFilter$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([{ places, reservs }, tags, repeat, types]) => {
            return this._checkFilters(places, reservs, tags, repeat, types).filter((p) => !p.disabled);
        }));
    }
    get floorItems$() {
        return this.currentWorkplaces$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((places) => this.reservations$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((reservs) => ({ places, reservs })))));
    }
    get reservations$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.currentFloor$,
            this.datesFilter$,
            this._reload$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.changeLoader(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([{ id }, { dateTimeFrom, dateTimeTo }]) => this._api.getWorkplaceReservations({
            floorMapId: id,
            dateTimeFrom: this._getApiDate(dateTimeFrom),
            dateTimeTo: this._getApiDate(dateTimeTo),
        })));
    }
    get mapMarks$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.floorItems$,
            this.tagsFilter$,
            this.repeatRange$,
            this.typesFilter$,
            this.$reservationMarks.mapMarks$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.changeLoader(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([{ places, reservs }, tags, repeat, types, reservationMarks]) => {
            places = this._checkFilters(places, reservs, tags, repeat, types);
            const images = places
                .map((place) => [place.id, this._img.getImageBlob(place.img)])
                .reduce((acc, [id, _img]) => (Object.assign(Object.assign({}, acc), { [id]: _img })), {});
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(images).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((imgs) => ({ places, images: imgs, reservationMarks })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ places, images, reservationMarks }) => {
            const localMarks = places.map((place) => {
                return {
                    id: place.id,
                    img: images[place.id],
                    disabled: place.disabled,
                    relativePlace: place,
                    tooltip: place.name,
                    coordinates: {
                        x: place.x,
                        y: place.y,
                        size: place.width,
                    },
                };
            });
            return [
                ...localMarks,
                ...reservationMarks.filter((reservationMark) => reservationMark.logicType !== 'Workplace'),
            ];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.changeLoader(false)));
    }
    get filterDates$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => this._measurements.getMeasurementByName$('shortDateTime').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((dateFormat) => ({
            dateTimeFrom: Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(filters.dateTimeFrom, dateFormat, 'ru'),
            dateTimeTo: Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(filters.dateTimeTo, dateFormat, 'ru'),
        })))));
    }
    get datesFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => p.dateTimeFrom === q.dateTimeFrom && p.dateTimeTo === q.dateTimeTo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ dateTimeFrom, dateTimeTo }) => ({ dateTimeFrom, dateTimeTo })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000));
    }
    get tagsFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => { var _a, _b; return ((_a = p.tags) === null || _a === void 0 ? void 0 : _a.length) === ((_b = q.tags) === null || _b === void 0 ? void 0 : _b.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ tags }) => tags));
    }
    get repeatFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => this._measurements.getMeasurementByName$('shortDate').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((dateFormat) => {
            if (filters.repeat) {
                return Object.assign(Object.assign({}, filters.repeat), { end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(filters.repeat.end, dateFormat, 'ru') });
            }
            else {
                return filters.repeat;
            }
        }))));
    }
    get labelsFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => { var _a, _b; return ((_a = p.labels) === null || _a === void 0 ? void 0 : _a.length) === ((_b = q.labels) === null || _b === void 0 ? void 0 : _b.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => this.$dicts
            .getDictionary('labels')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((labels) => ({ labels, labelIds: filters.labels })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ labels, labelIds }) => labels.filter(({ id }) => labelIds.includes(id))));
    }
    get groupFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => p.group === q.group), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ group }) => group));
    }
    get groupDisabledPlaces$() {
        return this.groupFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((group) => this._api.getWorkplacesDisabledExpanded({ labelGroupId: group })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('data'));
    }
    get typesFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => { var _a, _b; return ((_a = p.types) === null || _a === void 0 ? void 0 : _a.length) === ((_b = q.types) === null || _b === void 0 ? void 0 : _b.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ types }) => types));
    }
    get autoModeFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('autoMode'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((autoMode) => (autoMode ? 'throughOne' : 'oneByOne')));
    }
    get repeatRange$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => {
            var _a, _b, _c, _d, _e, _f;
            return ((_a = p.repeat) === null || _a === void 0 ? void 0 : _a.end) === ((_b = q.repeat) === null || _b === void 0 ? void 0 : _b.end) &&
                ((_c = p.repeat) === null || _c === void 0 ? void 0 : _c.days.length) === ((_d = q.repeat) === null || _d === void 0 ? void 0 : _d.days.length) &&
                ((_e = p.repeat) === null || _e === void 0 ? void 0 : _e.weekNum) === ((_f = q.repeat) === null || _f === void 0 ? void 0 : _f.weekNum);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(({ repeat, dateTimeFrom, dateTimeTo }) => {
            if (repeat) {
                return this.currentFloor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(({ id }) => {
                    return this._api
                        .getWorkplaceReservations({
                        floorMapId: id,
                        dateTimeFrom,
                        dateTimeTo: repeat.end,
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((reservations) => [
                        repeat,
                        { dateTimeFrom, dateTimeTo },
                        reservations,
                    ]));
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(repeat);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((repeat) => {
            if (repeat) {
                const [r, dates, _reservations] = repeat;
                return [
                    this._createRepeatsDates(dates, r.weekNum, r.days, r.end),
                    _reservations,
                ];
            }
            else {
                return repeat;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
    }
    changeLoader(state) {
        this._loading$.next(state);
    }
    changeFloor(id) {
        this._router.navigate(['../', id], { relativeTo: this._route });
    }
    backToSelectBuildings() {
        this._router.navigate(['../'], { relativeTo: this._route });
    }
    setFilters(filters) {
        this._filters$.next(filters);
    }
    reloadReservations() {
        this._reload$.next(null);
    }
    reservationPlace(selected) {
        return this._filters$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => this.repeatRange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((repeat) => [filters, repeat]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([filters, repeat]) => {
            const reservations = Object.entries(selected).reduce((acc, [userId, place]) => {
                const arr = [
                    this._setWorkplacesReservation(place.id, [filters.dateTimeFrom, filters.dateTimeTo], `${userId}-${0}`, userId),
                ];
                if (repeat && repeat[0] && repeat[0].length) {
                    repeat[0].forEach((_dates, index) => {
                        arr.push(this._setWorkplacesReservation(place.id, [_dates[0], _dates[1]], `${userId}-${index + 1}`, userId));
                    });
                }
                return [...acc, ...arr];
            }, []);
            return this._api
                .putWorkplaceReservations({
                reservations,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ data }) => {
                let dates = [[filters.dateTimeFrom, filters.dateTimeTo]];
                if (repeat && repeat[0]) {
                    dates = [...dates, ...repeat[0]];
                }
                return {
                    data,
                    dates,
                    filters,
                };
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .toPromise();
    }
    _getApiDate(date) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, this._measurements.getMeasurementByName('filterDate'), 'ru');
    }
    _checkFilters(places, reservations, tags, repeat, types) {
        let filteredPlaces = [...places];
        filteredPlaces = filteredPlaces.map((place) => {
            const newPlace = Object.assign({}, place);
            const reservation = reservations.find((r) => r.workplaceId === place.id);
            newPlace.img = newPlace.imageFreeUrl;
            if (newPlace.disabled) {
                newPlace.img = newPlace.imageDisabledUrl || newPlace.img;
            }
            if (reservation) {
                newPlace.disabled = true;
                newPlace.img = newPlace.imageReservedByUserUrl;
            }
            if (repeat) {
                const [repeatDates, repeatReservations] = repeat;
                const _reservations = repeatReservations.filter((r) => r.workplaceId === place.id);
                let overlap = false;
                for (const rv of _reservations) {
                    for (const _date of repeatDates) {
                        overlap = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["areIntervalsOverlapping"])({ start: _date[0], end: _date[1] }, { start: new Date(rv.dateTimeFrom), end: new Date(rv.dateTimeTo) })
                            ? rv
                            : false;
                        if (overlap)
                            break;
                    }
                    if (overlap)
                        break;
                }
                if (overlap) {
                    newPlace.disabled = true;
                    newPlace.img = newPlace.imageReservedByUserUrl;
                }
            }
            if (tags && tags.length) {
                if (!tags.every((tag) => place.tags.includes(tag))) {
                    newPlace.disabled = true;
                    newPlace.img = newPlace.imageDisabledUrl || newPlace.img;
                }
            }
            if (types && Array.isArray(types)) {
                if (!types.includes(newPlace.type)) {
                    newPlace.disabled = true;
                    newPlace.img = newPlace.imageDisabledUrl || newPlace.img;
                }
            }
            return newPlace;
        });
        return filteredPlaces;
    }
    _createRepeatsDates({ dateTimeFrom, dateTimeTo }, weekNum, days, end) {
        const result = [];
        let lastDay = dateTimeFrom;
        if (!days.length)
            return result;
        const weekDayHandler = (day) => {
            lastDay = date_fns_nextDay__WEBPACK_IMPORTED_MODULE_4___default()(lastDay, day);
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(end, lastDay) || Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(end, lastDay)) {
                result.push([
                    Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["setHours"])(lastDay, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["getHours"])(dateTimeFrom)),
                    Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["setHours"])(lastDay, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["getHours"])(dateTimeTo)),
                ]);
            }
        };
        const sameWeek = days.filter((day) => (day || 7) > Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["getDay"])(dateTimeFrom));
        sameWeek.forEach(weekDayHandler);
        while (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(end, lastDay) || Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(end, lastDay)) {
            lastDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addWeeks"])(lastDay, weekNum - 1);
            days.forEach(weekDayHandler);
        }
        return result;
    }
    _setWorkplacesReservation(id, dates, recordCode, labelId) {
        return {
            recordCode: `${recordCode}`,
            workplaceId: id,
            labelId,
            dateTimeFrom: this._getApiDate(dates[0]),
            dateTimeTo: this._getApiDate(dates[1]),
        };
    }
}
FloorService.ɵfac = function FloorService_Factory(t) { return new (t || FloorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_9__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_10__["ImageBlobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_11__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_12__["FloorMapsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_13__["BuildingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_14__["ReservationMarksService"])); };
FloorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FloorService, factory: FloorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FloorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_9__["MeasurementsService"] }, { type: _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_10__["ImageBlobService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_11__["ReservationsApiService"] }, { type: _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_12__["FloorMapsService"] }, { type: _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_13__["BuildingsService"] }, { type: _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_14__["ReservationMarksService"] }]; }, null); })();


/***/ }),

/***/ "gEbJ":
/*!*********************************************************************!*\
  !*** ./src/app/presentation/team/team-create/team-create.module.ts ***!
  \*********************************************************************/
/*! exports provided: TeamCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCreateModule", function() { return TeamCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/booking-list/booking-list.module */ "xL67");
/* harmony import */ var _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/dropdown-select/dropdown-select.module */ "K6hh");
/* harmony import */ var _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/filters/filters.module */ "9jWK");
/* harmony import */ var _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/map/map.module */ "k+QC");
/* harmony import */ var _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/open-street-map/open-street-map.module */ "NAqI");
/* harmony import */ var _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @composite/workplace-card/workplace-card.module */ "1Cno");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _presentation_team_team_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @presentation/team/team-create/components/create/create.component */ "ZqmD");
/* harmony import */ var _components_team_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/team-filters/create-filters-workplace/create-filter-workplace.component */ "OoJa");
/* harmony import */ var _presentation_team_team_create_components_floor_floor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @presentation/team/team-create/components/floor/floor.component */ "P4Cz");
/* harmony import */ var _presentation_team_team_create_components_team_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @presentation/team/team-create/components/team-filters/create-filter.component */ "wPL6");
/* harmony import */ var _presentation_team_team_create_team_create_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @presentation/team/team-create/team-create-routing.module */ "wAbu");

















class TeamCreateModule {
}
TeamCreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamCreateModule });
TeamCreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamCreateModule_Factory(t) { return new (t || TeamCreateModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__["BookingListModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__["MapModule"],
            _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__["DropdownSelectModule"],
            _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_8__["WorkplaceCardModule"],
            _presentation_team_team_create_team_create_routing_module__WEBPACK_IMPORTED_MODULE_15__["TeamCreateRoutingModule"],
            _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__["FiltersModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__["OpenStreetMapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamCreateModule, { declarations: [_presentation_team_team_create_components_floor_floor_component__WEBPACK_IMPORTED_MODULE_13__["FloorComponent"],
        _presentation_team_team_create_components_team_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_14__["CreateFilterComponent"],
        _components_team_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_12__["CreateFilterWorkplaceComponent"],
        _presentation_team_team_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__["BookingListModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
        _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__["MapModule"],
        _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__["DropdownSelectModule"],
        _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_8__["WorkplaceCardModule"],
        _presentation_team_team_create_team_create_routing_module__WEBPACK_IMPORTED_MODULE_15__["TeamCreateRoutingModule"],
        _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__["FiltersModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__["OpenStreetMapModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamCreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _presentation_team_team_create_components_floor_floor_component__WEBPACK_IMPORTED_MODULE_13__["FloorComponent"],
                    _presentation_team_team_create_components_team_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_14__["CreateFilterComponent"],
                    _components_team_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_12__["CreateFilterWorkplaceComponent"],
                    _presentation_team_team_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__["BookingListModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                    _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__["MapModule"],
                    _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__["DropdownSelectModule"],
                    _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_8__["WorkplaceCardModule"],
                    _presentation_team_team_create_team_create_routing_module__WEBPACK_IMPORTED_MODULE_15__["TeamCreateRoutingModule"],
                    _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__["FiltersModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__["OpenStreetMapModule"],
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wAbu":
/*!*****************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/team-create-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TeamCreateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCreateRoutingModule", function() { return TeamCreateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_team_team_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-create/components/create/create.component */ "ZqmD");
/* harmony import */ var _presentation_team_team_create_components_floor_floor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/team/team-create/components/floor/floor.component */ "P4Cz");






const routes = [
    {
        path: '',
        component: _presentation_team_team_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
        data: {
            title: 'Создание новой брони'
        }
    },
    {
        path: ':floorId',
        component: _presentation_team_team_create_components_floor_floor_component__WEBPACK_IMPORTED_MODULE_3__["FloorComponent"],
        data: {
            title: 'Создание новой брони'
        },
    }
];
class TeamCreateRoutingModule {
}
TeamCreateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamCreateRoutingModule });
TeamCreateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamCreateRoutingModule_Factory(t) { return new (t || TeamCreateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamCreateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamCreateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wPL6":
/*!**************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-create/components/team-filters/create-filter.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreateFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterComponent", function() { return CreateFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _create_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-filter.service */ "W7bi");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-filters-workplace/create-filter-workplace.component */ "OoJa");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function CreateFilterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
} }
const _c0 = function () { return { suppressScrollX: true }; };
class CreateFilterComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"] {
    constructor($service, injector) {
        super(injector);
        this.$service = $service;
        this.injector = injector;
        this.formGroup = this.$service.formGroup;
    }
    set inputType(type) {
        if (!type)
            return;
        this.$service.createFormGroup(type);
        this.type = type;
    }
    set inputValues(values) {
        if (!values)
            return;
        this.formGroup.patchValue(values, { emitEvent: false });
    }
    clear() {
        this.$service.clear(this.formGroup);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
CreateFilterComponent.ɵfac = function CreateFilterComponent_Factory(t) { return new (t || CreateFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_create_filter_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
CreateFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateFilterComponent, selectors: [["app-create-filters"], ["", "app-create-filters", ""]], hostAttrs: [1, "app-reservations-create-filter"], inputs: { inputType: ["type", "inputType"], inputValues: ["values", "inputValues"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_create_filter_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 23, consts: [["nz-row", "", 1, "app-list-filters__header", 3, "nzGutter"], ["nz-col", "", 1, "app-list-filters__header-action", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType"], ["nz-col", "", 1, "app-list-filters__header-title", 3, "nzXs", "nzLg"], ["nz-col", "", 1, "app-list-filters__header-action", "_right", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType", "click"], ["nz-form", "", 1, "app-list-filters__form", 3, "nzLayout", "formGroup", "ngSwitch"], [1, "app-list-filters__form-scroll", 3, "config"], ["app-create-filters-workplace", "", 3, "formGroup", 4, "ngSwitchDefault"], ["app-create-filters-workplace", "", 3, "formGroup"]], template: function CreateFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateFilterComponent_Template_button_click_9_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "perfect-scrollbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateFilterComponent_div_14_Template, 1, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 16, "Close"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, "Filters"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 20, "Clear"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.formGroup)("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_11__["CreateFilterWorkplaceComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 0 4px 0 24px;\n}\n[_nghost-%COMP%]   .app-list-filters__header[_ngcontent-%COMP%] {\n  height: 52px;\n  padding-right: 24px;\n}\n[_nghost-%COMP%]   .app-list-filters__header-action[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n}\n[_nghost-%COMP%]   .app-list-filters__header-action[_ngcontent-%COMP%]     .ant-btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n[_nghost-%COMP%]   .app-list-filters__header-action._right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .app-list-filters__form[_ngcontent-%COMP%] {\n  height: calc(100% - 52px);\n}\n[_nghost-%COMP%]   .app-list-filters__form[_ngcontent-%COMP%]   .ant-checkbox-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .app-list-filters__form-scroll[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   .app-list-filters-item__scroll[_ngcontent-%COMP%], [_nghost-%COMP%]   .app-list-filters-item__scroll[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1maWx0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBWkQ7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFjRjtBQVhJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBYU47QUFYTTtFQUNFLGlCQUFBO0FBYVI7QUFYUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWFWO0FBVlE7RUFDRSxpQkFBQTtBQVlWO0FBUEk7RUFDRSx5QkFBQTtBQVNOO0FBVkk7RUFJSSxrQkFBQTtBQVNSO0FBTk07RUFDRSxtQkFBQTtBQVFSO0FBRlE7O0VBRUUsaUJBQUE7QUFJViIsImZpbGUiOiJjcmVhdGUtZmlsdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvdGhlbWUvY29sb3JzLmxlc3NcIjtcblxuQGZvb3Rlci1oZWlnaHQ6IDY0cHg7XG5AaGVhZGVyLWhlaWdodDogNTJweDtcbkBhcHAtbGlzdC1maWx0ZXItcHJlZml4LWNsczogYXBwLWxpc3QtZmlsdGVycztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNHB4IDAgMjRweDtcblxuICAuQHthcHAtbGlzdC1maWx0ZXItcHJlZml4LWNsc30ge1xuICAgICZfX2hlYWRlciB7XG4gICAgICBoZWlnaHQ6IEBoZWFkZXItaGVpZ2h0O1xuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcblxuICAgICAgJi1hY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMDtcblxuICAgICAgICAmIDo6bmctZGVlcCAuYW50LWJ0biB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLl9yaWdodCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gQGhlYWRlci1oZWlnaHQpO1xuXG4gICAgICAuYW50LWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG5cbiAgICAgICYtc2Nyb2xsIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgJl9fc2Nyb2xsIHtcbiAgICAgICAgJixcbiAgICAgICAgJiAucHMge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-filters, [app-create-filters]',
                templateUrl: './create-filter.component.html',
                styleUrls: ['./create-filter.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'app-reservations-create-filter',
                },
                providers: [_create_filter_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterService"]]
            }]
    }], function () { return [{ type: _create_filter_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { inputType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }], inputValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['values']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=team-create-team-create-module.js.map