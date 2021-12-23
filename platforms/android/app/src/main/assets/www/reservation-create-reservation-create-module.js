(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservation-create-reservation-create-module"],{

/***/ "/q0U":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.service.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: CreateFilterWorkplaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterWorkplaceService", function() { return CreateFilterWorkplaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filters/filter.service */ "UCJT");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");





class CreateFilterWorkplaceService extends _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"] {
    constructor(injector, $dictionaries, $measurements) {
        super(injector);
        this.injector = injector;
        this.$dictionaries = $dictionaries;
        this.$measurements = $measurements;
    }
    get dateTimeFormat$() {
        return this.$measurements.getMeasurementByName$('shortDateTime');
    }
    get dateFormat$() {
        return this.$measurements.getMeasurementByName$('shortDate');
    }
    get tags$() {
        return this.$dictionaries.getDictionary('tags');
    }
}
CreateFilterWorkplaceService.ɵfac = function CreateFilterWorkplaceService_Factory(t) { return new (t || CreateFilterWorkplaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_2__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementsService"])); };
CreateFilterWorkplaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateFilterWorkplaceService, factory: CreateFilterWorkplaceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateFilterWorkplaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_2__["DictionariesService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementsService"] }]; }, null); })();


/***/ }),

/***/ "7XxE":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: CreateFilterWorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterWorkplaceComponent", function() { return CreateFilterWorkplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.utils */ "7RLK");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.service */ "/q0U");
/* harmony import */ var _shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/common/utils/filter.util */ "FBo/");
/* harmony import */ var _shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/common/utils/workplace.utils */ "udpc");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @base/filters/filter-checkbox/filter-checkbox.component */ "JPRT");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../../core/pipes/dictionary.pipe */ "Dz+d");


























function CreateFilterWorkplaceComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterWorkplaceComponent_nz_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 17);
} if (rf & 2) {
    const week_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", week_r7)("nzLabel", week_r7.toString());
} }
function CreateFilterWorkplaceComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", !ctx_r2.repeat)("nzValue", day_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, day_r8.label)));
} }
function CreateFilterWorkplaceComponent_nz_form_item_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function () { return { $implicit: "Type" }; };
function CreateFilterWorkplaceComponent_nz_form_item_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_nz_form_item_24_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-filter-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r3.typesControl)("options", ctx_r3.typesCheckBoxOptions);
} }
function CreateFilterWorkplaceComponent_nz_form_item_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterWorkplaceComponent_nz_form_item_25_div_2_nz_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tag", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateFilterWorkplaceComponent_nz_form_item_25_div_2_nz_tag_1_Template_nz_tag_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const tag_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.updateTags(tag_r13.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r12.tagsStatus[tag_r13.name] ? "processing" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r13.name, " ");
} }
function CreateFilterWorkplaceComponent_nz_form_item_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_nz_form_item_25_div_2_nz_tag_1_Template, 2, 2, "nz-tag", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.tags);
} }
const _c1 = function () { return { $implicit: "Environment" }; };
function CreateFilterWorkplaceComponent_nz_form_item_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_nz_form_item_25_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateFilterWorkplaceComponent_nz_form_item_25_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.tags);
} }
function CreateFilterWorkplaceComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, title_r16)), " ");
} }
const _c2 = function () { return { $implicit: "Period" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class CreateFilterWorkplaceComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"] {
    constructor(injector, $service, $settings, _cdr) {
        super(injector);
        this.injector = injector;
        this.$service = $service;
        this.$settings = $settings;
        this._cdr = _cdr;
        this.tagObjectType = null;
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
        this.tagsStatus = {};
        this.endMaxDate = () => true;
        const startHour = this.$settings.getSettingByName('workplaceReservationBeginHourDefault');
        const endHour = this.$settings.getSettingByName('workplaceReservationEndHourDefault');
        this.workHours = [startHour, endHour];
        this.minDuration = this.$settings.getSettingByName('workplaceReservationDurationMinSeconds') * 1000;
    }
    ngOnInit() {
        this.$service.formGroup = this.formGroup;
        this.assignControls();
        this.getFieldOptions();
        this.getWorkplaceTypes();
        this._setFullDay();
        this._watchDateTimeFrom();
    }
    ngOnDestroy() {
    }
    updateDateTime(dateTime) {
        this.dateTimeFromControl.setValue(dateTime[0]);
        this.dateTimeToControl.setValue(dateTime[1]);
        this.repeatDisable = !Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(dateTime[0], dateTime[1]);
    }
    updateTags(name) {
        this.tagsStatus[name] = !this.tagsStatus[name];
        const tags = Object.entries(this.tagsStatus).filter(([_, status]) => status).map(([key]) => key);
        this.tagsControl.setValue(tags);
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
    getWorkplaceTypes() {
        this.typesCheckBoxOptions = Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_6__["mapCheckBoxOptions"])(_shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_7__["WorkplaceTypesMap"], 'value', 'name', this.typesControl);
    }
    getFieldOptions() {
        this.dateFormat = this.$service.dateFormat$;
        this.dateTimeFormat = this.$service.dateTimeFormat$;
        this.$service.tags$.subscribe((tags) => {
            tags = this.tagObjectType ? tags.filter(tag => tag.objectType === this.tagObjectType) : tags;
            this.tagsStatus = tags.reduce((acc, el) => (Object.assign(Object.assign({}, acc), { [el.name]: false })), {});
            this.tags = tags;
            this._cdr.markForCheck();
        });
    }
    _setFullDay() {
        const [start, end] = Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_4__["getInitDate"])(this.workHours, this.minDuration);
        this.dateTimeFromControl.setValue(start);
        this.dateTimeToControl.setValue(end);
    }
    _watchDateTimeFrom() {
        this._subscriptions = this.dateTimeFromControl.valueChanges.subscribe((value) => {
            const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["addDays"])(new Date(value), this.$settings.getSettingByName('workplaceReservationDurationMaxDays'));
            this.repeatData.end = date;
            this.endMaxDate = (_date) => {
                return _date > date;
            };
        });
    }
}
CreateFilterWorkplaceComponent.ɵfac = function CreateFilterWorkplaceComponent_Factory(t) { return new (t || CreateFilterWorkplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
CreateFilterWorkplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateFilterWorkplaceComponent, selectors: [["app-create-filters-workplace"], ["", "app-create-filters-workplace", ""]], hostVars: 2, hostBindings: function CreateFilterWorkplaceComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("app-list-filter-workplace", true);
    } }, inputs: { tagObjectType: "tagObjectType" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 48, consts: [[1, "app-list-filter-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngModel", "layout", "format", "workHours", "minDuration", "allowAllDay", "autoUpdateDateTo", "autoUpdateDateToFullDay", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange", "nzCheckedChange"], [1, "app-list-filter-item__title", "checkbox-title"], [1, "app-list-filter-item__repeat"], [1, "week-num", "mb-25", 3, "nzAddOnBefore", "nzAddOnAfter"], [3, "nzDisabled", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "mb-15", 2, "width", "100%", 3, "nzOnChange"], ["nz-row", ""], ["class", "mb-10", "nz-col", "", "nzSpan", "6", 4, "ngFor", "ngForOf"], [3, "nzAddOnBefore"], [3, "ngModel", "nzFormat", "nzDisabled", "nzDisabledDate", "ngModelChange"], ["class", "app-reservations-filter-item", 4, "ngIf"], ["class", "app-list-filter-item", 4, "ngIf"], ["titleTpl", ""], [3, "nzValue", "nzLabel"], ["nz-col", "", "nzSpan", "6", 1, "mb-10"], ["nz-checkbox", "", 3, "nzDisabled", "nzValue"], [1, "app-reservations-filter-item"], [3, "formControl", "options"], [4, "ngIf"], ["class", "tag", 3, "nzColor", "click", 4, "ngFor", "ngForOf"], [1, "tag", 3, "nzColor", "click"], [1, "app-list-filter-item__title"]], template: function CreateFilterWorkplaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterWorkplaceComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-filter-date", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_app_filter_date_ngModelChange_2_listener($event) { return ctx.updateDateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_label_ngModelChange_4_listener($event) { return ctx.repeat = $event; })("nzCheckedChange", function CreateFilterWorkplaceComponent_Template_label_nzCheckedChange_4_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.repeatData.weekNum = $event; })("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_select_ngModelChange_15_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CreateFilterWorkplaceComponent_nz_option_16_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-checkbox-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnChange", function CreateFilterWorkplaceComponent_Template_nz_checkbox_wrapper_nzOnChange_17_listener($event) { return ctx.chooseDays($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CreateFilterWorkplaceComponent_div_19_Template, 5, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-input-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-date-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_date_picker_ngModelChange_23_listener($event) { return ctx.repeatData.end = $event; })("ngModelChange", function CreateFilterWorkplaceComponent_Template_nz_date_picker_ngModelChange_23_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CreateFilterWorkplaceComponent_nz_form_item_24_Template, 4, 5, "nz-form-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CreateFilterWorkplaceComponent_nz_form_item_25_Template, 3, 4, "nz-form-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CreateFilterWorkplaceComponent_ng_template_26_Template, 4, 5, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](45, _c3, ctx.dateTimeFromControl.value, ctx.dateTimeToControl.value))("layout", "vertical")("format", ctx.dateTimeFormat)("workHours", ctx.workHours)("minDuration", ctx.minDuration)("allowAllDay", true)("autoUpdateDateTo", true)("autoUpdateDateToFullDay", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.repeat)("nzDisabled", ctx.repeatDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 30, "Repeat")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 34, "Every")))("nzAddOnAfter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 38, "week")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", !ctx.repeat)("ngModel", ctx.repeatData.weekNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weekNums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.daysNaming);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 40, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 42, "End")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.repeatData.end)("nzFormat", ctx.dateFormat)("nzDisabled", !ctx.repeat)("nzDisabledDate", ctx.endMaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.typesControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tags == null ? null : ctx.tags.length);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_13__["FilterDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzInputGroupComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxWrapperComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__["NzDatePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__["NzOptionComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormControlComponent"], _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_20__["FilterCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlDirective"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__["NzTagComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_23__["DictionaryPipe"]], styles: ["[_nghost-%COMP%]     perfect-scrollbar {\n  height: 100%;\n}\n[_nghost-%COMP%]     .ant-picker {\n  width: 100%;\n}\n.app-list-filter-status[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.allDay-picker[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.checkbox-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1maWx0ZXItd29ya3BsYWNlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWhCRDtFQUVJLFlBQUE7QUFpQko7QUFuQkE7RUFNSSxXQUFBO0FBZ0JKO0FBWEU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBYUo7QUFMQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQU9GO0FBSkE7RUFDRSxtQkFBQTtBQU1GO0FBSEE7RUFDRSxxQkFBQTtBQUtGIiwiZmlsZSI6ImNyZWF0ZS1maWx0ZXItd29ya3BsYWNlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xuXG46aG9zdCB7XG4gIDo6bmctZGVlcCBwZXJmZWN0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5hbnQtcGlja2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYXBwLWxpc3QtZmlsdGVyIHtcbiAgJi1zdGF0dXMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgJl9faW5kaWNhdG9yIHtcblxuICAgIH1cbiAgfVxufVxuXG4udGFnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWxsRGF5LXBpY2tlciB7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbi5jaGVja2JveC10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
], CreateFilterWorkplaceComponent.prototype, "dateFormat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
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
                providers: [_presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_5__["CreateFilterWorkplaceService"] }, { type: _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { tagObjectType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFormat: [], dateTimeFormat: [] }); })();


/***/ }),

/***/ "90Xu":
/*!***********************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/utils/common.util.ts ***!
  \***********************************************************************************/
/*! exports provided: getPlaceTypeByReserveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceTypeByReserveType", function() { return getPlaceTypeByReserveType; });
function getPlaceTypeByReserveType(type) {
    switch (type) {
        case 'appointment':
            return 'rooms';
        case 'parking':
            return 'parkingLots';
        case 'workplace':
            return 'workplaces';
        default:
            return type;
    }
}


/***/ }),

/***/ "EFnW":
/*!*******************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/reservation-create.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ReservationCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationCreateModule", function() { return ReservationCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/booking-list/booking-list.module */ "xL67");
/* harmony import */ var _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/dropdown-select/dropdown-select.module */ "K6hh");
/* harmony import */ var _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/filters/filters.module */ "9jWK");
/* harmony import */ var _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/map/map.module */ "k+QC");
/* harmony import */ var _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/open-street-map/open-street-map.module */ "NAqI");
/* harmony import */ var _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @base/renderer/renderer.module */ "R3cO");
/* harmony import */ var _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @composite/workplace-card/workplace-card.module */ "1Cno");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filter.component */ "mycf");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.component */ "7XxE");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create.component */ "huRZ");
/* harmony import */ var _presentation_reservations_reservation_create_reservation_create_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @presentation/reservations/reservation-create/reservation-create-routing.module */ "XShr");
/* harmony import */ var _components_floor_floor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/floor/floor.component */ "dVa7");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filters_appointment_create_filter_appointment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filters-appointment/create-filter-appointment.component */ "cuiY");



















class ReservationCreateModule {
}
ReservationCreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationCreateModule });
ReservationCreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationCreateModule_Factory(t) { return new (t || ReservationCreateModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _presentation_reservations_reservation_create_reservation_create_routing_module__WEBPACK_IMPORTED_MODULE_15__["ReservationCreateRoutingModule"],
            _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__["OpenStreetMapModule"],
            _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__["DropdownSelectModule"],
            _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__["BookingListModule"],
            _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__["MapModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__["FiltersModule"],
            _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__["RendererModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_9__["WorkplaceCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationCreateModule, { declarations: [_presentation_reservations_reservation_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"],
        _presentation_reservations_reservation_create_components_create_create_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_12__["CreateFilterComponent"],
        _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_13__["CreateFilterWorkplaceComponent"],
        _presentation_reservations_reservation_create_components_create_create_filters_create_filters_appointment_create_filter_appointment_component__WEBPACK_IMPORTED_MODULE_17__["CreateFilterAppointmentComponent"],
        _components_floor_floor_component__WEBPACK_IMPORTED_MODULE_16__["FloorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _presentation_reservations_reservation_create_reservation_create_routing_module__WEBPACK_IMPORTED_MODULE_15__["ReservationCreateRoutingModule"],
        _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__["OpenStreetMapModule"],
        _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__["DropdownSelectModule"],
        _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__["BookingListModule"],
        _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__["MapModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__["FiltersModule"],
        _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__["RendererModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_9__["WorkplaceCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationCreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _presentation_reservations_reservation_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"],
                    _presentation_reservations_reservation_create_components_create_create_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_12__["CreateFilterComponent"],
                    _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_13__["CreateFilterWorkplaceComponent"],
                    _presentation_reservations_reservation_create_components_create_create_filters_create_filters_appointment_create_filter_appointment_component__WEBPACK_IMPORTED_MODULE_17__["CreateFilterAppointmentComponent"],
                    _components_floor_floor_component__WEBPACK_IMPORTED_MODULE_16__["FloorComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _presentation_reservations_reservation_create_reservation_create_routing_module__WEBPACK_IMPORTED_MODULE_15__["ReservationCreateRoutingModule"],
                    _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_7__["OpenStreetMapModule"],
                    _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_4__["DropdownSelectModule"],
                    _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_3__["BookingListModule"],
                    _base_map_map_module__WEBPACK_IMPORTED_MODULE_6__["MapModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_5__["FiltersModule"],
                    _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_8__["RendererModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_9__["WorkplaceCardModule"],
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "FTlv":
/*!************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/floor/floor.service.ts ***!
  \************************************************************************************************/
/*! exports provided: FloorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorService", function() { return FloorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @presentation/reservations/utils/reservation */ "Y+7/");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var date_fns_nextDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/nextDay */ "K5ha");
/* harmony import */ var date_fns_nextDay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_nextDay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _presentation_reservations_reservation_create_components_floor_floors_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/floor/floors.utils */ "eBOS");
/* harmony import */ var _presentation_reservations_reservation_create_utils_common_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @presentation/reservations/reservation-create/utils/common.util */ "90Xu");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/images/services/image-blob.service */ "AgCt");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/dictionaries/services/floor-maps.service */ "2Mmv");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");
/* harmony import */ var _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @src/app/core/services/reservation-marks.service */ "+IbG");



// @ts-ignore

// @ts-ignore
















class FloorService {
    constructor($dicts, _route, _router, _measurements, _img, _api, _user, datePipe, $floorMaps, $buildings, $reservationMarks) {
        this.$dicts = $dicts;
        this._route = _route;
        this._router = _router;
        this._measurements = _measurements;
        this._img = _img;
        this._api = _api;
        this._user = _user;
        this.datePipe = datePipe;
        this.$floorMaps = $floorMaps;
        this.$buildings = $buildings;
        this.$reservationMarks = $reservationMarks;
        this._filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        this._reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this._type = 'workplace';
        this._type = this._route.snapshot.params.type;
        this._floorId = this._route.snapshot.params.floorId;
        this._workplaces$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])({
            places: this.$dicts.getDictionary('workplaces'),
            tags: this.$dicts.getDictionary('tags'),
            disabled: this._api.getWorkplacesDisabled$,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ places, tags, disabled }) => {
            return places.map((place) => (Object.assign(Object.assign({}, place), { tags: place.tags.map((tagId) => tags.find((t) => t.id === tagId).name), disabled: disabled.includes(place.id) })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._rooms$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])({
            rooms: this.$dicts.getDictionary('rooms'),
            tags: this.$dicts.getDictionary('tags'),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ rooms, tags }) => rooms.map((room) => {
            var _a;
            return (Object.assign(Object.assign({}, room), { disabled: !Boolean(((_a = room.isBookingAllowed) !== null && _a !== void 0 ? _a : true) && room.ewsMail), tags: room.tags.map((tagId) => tags.find((t) => t.id === tagId).name) }));
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._parkings$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])({
            places: this.$dicts.getDictionary('parkingLots'),
            tags: this.$dicts.getDictionary('tags'),
            disabled: this._api.getReservationsByType('parking', {
                isFirstPerson: true,
            }),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ places, tags, disabled }) => {
            return places.map((place) => (Object.assign(Object.assign({}, place), { tags: place.tags.map((tagId) => tags.find((t) => t.id === tagId).name), disabled: disabled.includes(place.id) })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._floors$ = this._route.params.pipe(
        // tap(() => this.changeLoader(true)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => {
            const itemType = Object(_presentation_reservations_reservation_create_utils_common_util__WEBPACK_IMPORTED_MODULE_8__["getPlaceTypeByReserveType"])(params.type);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
                this.$floorMaps.getFloorMaps$(itemType),
                this.$buildings.getBuildingsByPlaceType$(itemType),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(+(params === null || params === void 0 ? void 0 : params.floorId)),
            ]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([floors, builds, floorId]) => {
            const currentFloor = floors.find((floor) => floor.id === floorId);
            const floorsList = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_1__["filterFloors"])(floors, currentFloor.buildingId);
            const currentBuild = builds.find((build) => build.id === currentFloor.buildingId);
            return { currentFloor, floorsList, currentBuild };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this.reservations$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.currentFloor$,
            this.datesFilter$,
            this.currentItems$,
            this._reload$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.changeLoader(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([{ id }, { dateTimeFrom, dateTimeTo }, items]) => {
            let params;
            switch (this._type) {
                case 'appointment':
                    params = {
                        requestAppointmentRoomIds: items
                            .filter((i) => !i.disabled)
                            .map((i) => i.id),
                        requestAppointmentDateFrom: this._getApiDate(dateTimeFrom),
                        requestAppointmentDateTo: this._getApiDate(dateTimeTo),
                    };
                    break;
                case 'workplace':
                default:
                    params = {
                        floorMapId: id,
                        dateTimeFrom: this._getApiDate(dateTimeFrom),
                        dateTimeTo: this._getApiDate(dateTimeTo),
                    };
            }
            return this._api.getMapReservationsByType(this._type, params);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
    }
    get floors$() {
        return this._floors$;
    }
    get areas$() {
        return this.currentFloor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((floor) => this.$dicts
            .getDictionary('areas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((areas) => areas.filter((a) => a.floorMapId === floor.id)))));
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
    get currentItems$() {
        let source;
        switch (this._type) {
            case 'appointment':
                source = this._rooms$;
                break;
            case 'parking':
                source = this._parkings$;
                break;
            case 'workplace':
            default:
                source = this._workplaces$;
        }
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((places) => this.currentFloor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((floor) => places.filter((place) => place.floorMapId === floor.id)))));
    }
    get itemsWithFilters$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.currentItems$,
            this.reservations$,
            this.tagsFilter$,
            this.repeatRange$,
            this.typesFilter$,
            this.seatCountFilter$,
            this.currentFloor$,
            this.$reservationMarks.mapMarks$,
        ]);
    }
    get notReservWorkplaces$() {
        return this.itemsWithFilters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([places, reservs, tags, repeat, types, seatCount]) => {
            return this._checkFilters(places, reservs, tags, repeat, types, seatCount).filter((p) => !p.disabled);
        }));
    }
    get mapMarks$() {
        return this.itemsWithFilters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.changeLoader(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([places, reservs, tags, repeat, types, seatCount, floor, reservationMarks,]) => {
            let images;
            if (floor.workplaceReservationSocialDistanceCheck === 'FORBIDDEN') {
                places = places.map((place) => (Object.assign(Object.assign({}, place), { disabled: !place.disabled
                        ? Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_1__["checkReservedNeighbors"])(place, reservs)
                        : place.disabled })));
            }
            places = this._checkFilters(places, reservs, tags, repeat, types, seatCount);
            images = places
                .map((place) => [place.id, this._img.getImageBlob(place.img)])
                .reduce((acc, [id, _img]) => (Object.assign(Object.assign({}, acc), { [id]: _img })), {});
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(images).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((imgs) => ({ places, images: imgs, reservationMarks })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ places, images, reservationMarks }) => [
            ...Object(_presentation_reservations_reservation_create_components_floor_floors_utils__WEBPACK_IMPORTED_MODULE_7__["mapPlacesToMArks"])(places, images, this._type),
            ...reservationMarks.filter((reservationMark) => reservationMark.logicType !== 'Workplace' &&
                reservationMark.logicType !== 'Room'),
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.changeLoader(false)));
    }
    get filterDates$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => this._measurements.getMeasurementByName$('shortDateTime').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((dateFormat) => ({
            dateTimeFrom: this.datePipe.transform(filters.dateTimeFrom, dateFormat),
            dateTimeTo: this.datePipe.transform(filters.dateTimeTo, dateFormat),
        })))));
    }
    get datesFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => p.dateTimeFrom === q.dateTimeFrom && p.dateTimeTo === q.dateTimeTo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ dateTimeFrom, dateTimeTo }) => ({ dateTimeFrom, dateTimeTo })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000));
    }
    get tagsFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => { var _a, _b; return ((_a = p.tags) === null || _a === void 0 ? void 0 : _a.length) === ((_b = q.tags) === null || _b === void 0 ? void 0 : _b.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ tags }) => tags));
    }
    get typesFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((p, q) => { var _a, _b; return ((_a = p.types) === null || _a === void 0 ? void 0 : _a.length) === ((_b = q.types) === null || _b === void 0 ? void 0 : _b.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ types }) => types));
    }
    get repeatFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => this._measurements.getMeasurementByName$('shortDate').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((dateFormat) => {
            if (filters.repeat) {
                return Object.assign(Object.assign({}, filters.repeat), { end: this.datePipe.transform(filters.repeat.end, dateFormat) });
            }
            else {
                return filters.repeat;
            }
        }))));
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
                        .getReservationsByType(this._type, {
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
    get seatCountFilter$() {
        return this._filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ seatCount }) => seatCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(400));
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
    reservationPlace(id) {
        return this._filters$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((filters) => this.repeatRange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((repeat) => [filters, repeat]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([filters, repeat]) => {
            const reservations = [
                this._setReservationByType(this._type, 'main', {
                    id,
                    dates: [filters.dateTimeFrom, filters.dateTimeTo],
                }),
            ];
            if (repeat && repeat[0] && repeat[0].length) {
                repeat[0].forEach((_dates, index) => {
                    reservations.push(this._setReservationByType(this._type, index, {
                        id,
                        dates: [_dates[0], _dates[1]],
                    }));
                });
            }
            let params;
            switch (this._type) {
                case 'appointment':
                    params = { appointments: reservations };
                    break;
                case 'parking':
                    params = { reservations };
                    break;
                default:
                    params = { reservations };
                    break;
            }
            return this._api.putReservationsByType(this._type, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(({ data, error }) => {
                return {
                    data,
                    dates: repeat && repeat[0],
                    filters,
                    error,
                };
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .toPromise();
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this._measurements.getMeasurementByName('filterDate'));
    }
    _checkFilters(places, reservations, tags, repeat, types, seatCount) {
        let filteredPlaces = [...places];
        filteredPlaces = filteredPlaces.map((place) => {
            let newPlace = Object.assign({}, place);
            newPlace.img = newPlace.imageFreeUrl || _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_2__["MAP_POINT_SVG"];
            if (newPlace.disabled) {
                newPlace.img = newPlace.imageDisabledUrl || _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_2__["MAP_POINT_DISABLED_SVG"];
            }
            if ((reservations === null || reservations === void 0 ? void 0 : reservations.length) &&
                (this._type === 'workplace' || this._type === 'parking')) {
                const reservation = this._type === 'parking'
                    ? reservations === null || reservations === void 0 ? void 0 : reservations.find((r) => r.parkingLotId === place.id) : reservations === null || reservations === void 0 ? void 0 : reservations.find((r) => r.workplaceId === place.id);
                if (reservation) {
                    newPlace.disabled = true;
                    if (reservation.labelId === this._user.info.id) {
                        newPlace.img =
                            reservation.status === 'CONFIRMED'
                                ? newPlace.imageReservedByMeUrl
                                : newPlace.imageReservedByMeNotConfirmedUrl;
                    }
                    else {
                        newPlace.img = newPlace.imageReservedByUserUrl;
                    }
                }
            }
            if (this._type === 'appointment') {
                const isBusy = reservations === null || reservations === void 0 ? void 0 : reservations.some((r) => r.roomId === place.id);
                newPlace.disabled = newPlace.disabled || isBusy;
                if (newPlace.disabled && !isBusy) {
                    newPlace.color = _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_2__["ROOM_DISABLED_COLOR"];
                }
                else if (isBusy) {
                    newPlace.color = newPlace.roomTabletColorBusyUI;
                }
                else {
                    newPlace.color = newPlace.roomTabletColorFreeUI;
                }
            }
            if ((reservations === null || reservations === void 0 ? void 0 : reservations.length) && this._type === 'appointment') {
                const reservation = reservations === null || reservations === void 0 ? void 0 : reservations.find((r) => r.roomId === place.id);
                if (reservation) {
                    newPlace.disabled = true;
                    newPlace.img = _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_2__["MAP_POINT_BUSY_SVG"];
                }
            }
            if (repeat) {
                const [repeatDates, repeatReservations] = repeat;
                const _reservations = this._type === 'parking'
                    ? repeatReservations.filter((r) => r.parkingLotId === place.id)
                    : repeatReservations.filter((r) => r.workplaceId === place.id);
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
                    newPlace.img =
                        overlap.labelId === this._user.info.id
                            ? newPlace.imageReservedByMeUrl
                            : newPlace.imageReservedByUserUrl;
                }
            }
            if (tags && tags.length) {
                if (!tags.every((tag) => place.tags.includes(tag))) {
                    newPlace = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_1__["disablePlace"])(newPlace);
                }
            }
            if (types && Array.isArray(types)) {
                if (!types.includes(newPlace.type)) {
                    newPlace = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_1__["disablePlace"])(newPlace);
                }
            }
            if (seatCount && Number.isInteger(seatCount)) {
                if (newPlace.seatCount < seatCount) {
                    newPlace = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_1__["disablePlace"])(newPlace);
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
    _setReservationByType(type, recordCode, data) {
        return Object.assign(Object.assign(Object.assign({ recordCode: `${recordCode}` }, ((type === 'workplace' && {
            workplaceId: data.id,
            labelId: this._user.info.id,
            dateTimeFrom: this._getApiDate(data.dates[0]),
            dateTimeTo: this._getApiDate(data.dates[1]),
        }) ||
            {})), ((type === 'parking' && {
            parkingLotId: data.id,
            labelId: this._user.info.id,
            dateTimeFrom: this._getApiDate(data.dates[0]),
            dateTimeTo: this._getApiDate(data.dates[1]),
        }) ||
            {})), ((type === 'appointment' && {
            appointmentRoomsList: [data.id],
            appointmentDateFrom: this._getApiDate(data.dates[0]),
            appointmentDateTo: this._getApiDate(data.dates[1]),
        }) ||
            {}));
    }
    get type() {
        return this._type;
    }
}
FloorService.ɵfac = function FloorService_Factory(t) { return new (t || FloorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_12__["ImageBlobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_16__["FloorMapsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_17__["BuildingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_18__["ReservationMarksService"])); };
FloorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FloorService, factory: FloorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__["DictionariesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__["MeasurementsService"] }, { type: _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_12__["ImageBlobService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsApiService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"] }, { type: _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_16__["FloorMapsService"] }, { type: _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_17__["BuildingsService"] }, { type: _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_18__["ReservationMarksService"] }]; }, null); })();


/***/ }),

/***/ "J6yh":
/*!**************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateService", function() { return CreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create.utils */ "wZw6");
/* harmony import */ var _presentation_reservations_reservation_create_utils_common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/reservations/reservation-create/utils/common.util */ "90Xu");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");
/* harmony import */ var _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/dictionaries/services/floor-maps.service */ "2Mmv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_http_services_live_data_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/http/services/live-data-api.service */ "+J7z");













class CreateService {
    constructor(_dicts, $reservationsApi, $userOffices, $buildings, $floorMaps, $router, $route, $liveDataApi) {
        this._dicts = _dicts;
        this.$reservationsApi = $reservationsApi;
        this.$userOffices = $userOffices;
        this.$buildings = $buildings;
        this.$floorMaps = $floorMaps;
        this.$router = $router;
        this.$route = $route;
        this.$liveDataApi = $liveDataApi;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get placeType$() {
        return this.$route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('type'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_presentation_reservations_reservation_create_utils_common_util__WEBPACK_IMPORTED_MODULE_4__["getPlaceTypeByReserveType"]));
    }
    goToCreateOnFloor(buildingId) {
        this.$floorMaps
            .getFloorMaps$(this.placeType, buildingId)
            .subscribe(([{ id }]) => this.$router.navigate([/*buildingId,*/ id], { relativeTo: this.$route }));
    }
    get type() {
        return this.$route.snapshot.params.type;
    }
    get placeType() {
        return Object(_presentation_reservations_reservation_create_utils_common_util__WEBPACK_IMPORTED_MODULE_4__["getPlaceTypeByReserveType"])(this.type);
    }
    getBuildingsList1$(contentTpl) {
        return this.placeType$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this._loading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((placeType) => this.getBuildingListData$(placeType)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => Object(_presentation_reservations_reservation_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_3__["mapBuildingListData"])(data, contentTpl, buildingId => this.goToCreateOnFloor(buildingId))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this._loading$.next(false)));
    }
    getBuildingListData$(placeType) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.getBuildings$(placeType),
            this.getFloorMaps$(placeType),
            this.getPlaces$(placeType),
            this.getBusyLiveData$(placeType)
        ]);
    }
    getBuildings$(placeType) {
        return this.$buildings.getBuildingsByPlaceType$(placeType);
    }
    getFloorMaps$(placeType) {
        return this.$floorMaps.getFloorMaps$(placeType);
    }
    getBusyLiveData$(placeType) {
        const busyType = Object(_presentation_reservations_reservation_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_3__["getBusyType"])(placeType);
        if (!busyType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.$liveDataApi
            .get(busyType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])));
    }
    getPlaces$(placeType) {
        return this._dicts.getDictionary(placeType);
    }
}
CreateService.ɵfac = function CreateService_Factory(t) { return new (t || CreateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_7__["UserOfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_8__["BuildingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_9__["FloorMapsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_live_data_api_service__WEBPACK_IMPORTED_MODULE_11__["LiveDataApiService"])); };
CreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateService, factory: CreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_7__["UserOfficesService"] }, { type: _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_8__["BuildingsService"] }, { type: _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_9__["FloorMapsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _shared_http_services_live_data_api_service__WEBPACK_IMPORTED_MODULE_11__["LiveDataApiService"] }]; }, null); })();


/***/ }),

/***/ "XShr":
/*!***************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/reservation-create-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ReservationCreateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationCreateRoutingModule", function() { return ReservationCreateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create.component */ "huRZ");
/* harmony import */ var _presentation_reservations_reservation_create_components_floor_floor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/floor/floor.component */ "dVa7");
/* harmony import */ var _presentation_reservations_resolvers_title_create_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/reservations/resolvers/title-create.resolver */ "iA6y");







const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _presentation_reservations_reservation_create_components_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
        data: {
            title: 'Забронировать место',
        },
        resolve: {
            title: _presentation_reservations_resolvers_title_create_resolver__WEBPACK_IMPORTED_MODULE_4__["TitleCreateResolver"]
        }
    },
    {
        path: ':floorId',
        component: _presentation_reservations_reservation_create_components_floor_floor_component__WEBPACK_IMPORTED_MODULE_3__["FloorComponent"],
        data: {
            title: 'Забронировать место',
        },
        resolve: {
            title: _presentation_reservations_resolvers_title_create_resolver__WEBPACK_IMPORTED_MODULE_4__["TitleCreateResolver"]
        }
    }
];
class ReservationCreateRoutingModule {
}
ReservationCreateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationCreateRoutingModule });
ReservationCreateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationCreateRoutingModule_Factory(t) { return new (t || ReservationCreateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationCreateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationCreateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "YrRt":
/*!************************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create-filters/create-filter.service.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CreateFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterService", function() { return CreateFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filter_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filter.utils */ "y+In");





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
        Object.entries(Object(_presentation_reservations_reservation_create_components_create_create_filters_create_filter_utils__WEBPACK_IMPORTED_MODULE_2__["getListFilterFieldsByType"])(type))
            .forEach(([name, state]) => this._formGroup.addControl(name, this.formBuilder.control(state)));
    }
}
CreateFilterService.ɵfac = function CreateFilterService_Factory(t) { return new (t || CreateFilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateFilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateFilterService, factory: CreateFilterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateFilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "cuiY":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create-filters/create-filters-appointment/create-filter-appointment.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: CreateFilterAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterAppointmentComponent", function() { return CreateFilterAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.service */ "/q0U");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../core/pipes/dictionary.pipe */ "Dz+d");
























function CreateFilterAppointmentComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterAppointmentComponent_nz_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 16);
} if (rf & 2) {
    const week_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", week_r7)("nzLabel", week_r7.toString());
} }
function CreateFilterAppointmentComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", !ctx_r2.repeat)("nzValue", day_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, day_r8.label)));
} }
function CreateFilterAppointmentComponent_nz_form_item_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function () { return { $implicit: "Seats count" }; };
function CreateFilterAppointmentComponent_nz_form_item_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterAppointmentComponent_nz_form_item_24_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-input-number", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r3.seatCountControl)("nzMin", 1);
} }
function CreateFilterAppointmentComponent_nz_form_item_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CreateFilterAppointmentComponent_nz_form_item_25_div_2_nz_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tag", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateFilterAppointmentComponent_nz_form_item_25_div_2_nz_tag_1_Template_nz_tag_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const tag_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.updateTags(tag_r13.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r12.tagsStatus[tag_r13.name] ? "processing" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r13.name, " ");
} }
function CreateFilterAppointmentComponent_nz_form_item_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterAppointmentComponent_nz_form_item_25_div_2_nz_tag_1_Template, 2, 2, "nz-tag", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.tags);
} }
const _c1 = function () { return { $implicit: "Environment" }; };
function CreateFilterAppointmentComponent_nz_form_item_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterAppointmentComponent_nz_form_item_25_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateFilterAppointmentComponent_nz_form_item_25_div_2_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.tags);
} }
function CreateFilterAppointmentComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, title_r16)), " ");
} }
const _c2 = function () { return { $implicit: "Period" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
const MIN_DURATION_IN_HOUR = 1;
class CreateFilterAppointmentComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_3__["FilterComponent"] {
    constructor(injector, $service, $settings, _localization, _cdr) {
        super(injector);
        this.injector = injector;
        this.$service = $service;
        this.$settings = $settings;
        this._localization = _localization;
        this._cdr = _cdr;
        this.tagObjectType = null;
        this.allDay = false;
        this.repeat = false;
        this.repeatData = {
            weekNum: 1,
            days: [],
            end: null,
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
        this.tagsStatus = {};
        this.endMaxDate = () => true;
        this.workHours = [0, 24];
        this.minDuration = 900000;
    }
    ngOnInit() {
        this.$service.formGroup = this.formGroup;
        this.assignControls();
        this.getFieldOptions();
        this._setFullDay();
        this._watchDateTimeFrom();
    }
    ngOnDestroy() { }
    updateDateTime(dateTime) {
        this.dateTimeFromControl.setValue(dateTime[0]);
        this.dateTimeToControl.setValue(dateTime[1]);
        this.repeatDisable = !Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameDay"])(dateTime[0], dateTime[1]);
    }
    updateTags(name) {
        this.tagsStatus[name] = !this.tagsStatus[name];
        const tags = Object.entries(this.tagsStatus)
            .filter(([_, status]) => status)
            .map(([key]) => key);
        this.tagsControl.setValue(tags);
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
    getFieldOptions() {
        this.dateFormat = this.$service.dateFormat$;
        this.dateTimeFormat = this.$service.dateTimeFormat$;
        this.$service.tags$.subscribe((tags) => {
            tags = this.tagObjectType
                ? tags.filter((tag) => tag.objectType === this.tagObjectType)
                : tags;
            this.tagsStatus = tags.reduce((acc, el) => (Object.assign(Object.assign({}, acc), { [el.name]: false })), {});
            this.tags = tags;
            this._cdr.markForCheck();
        });
    }
    _setFullDay() {
        const start = new Date();
        const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["addHours"])(start, MIN_DURATION_IN_HOUR);
        this.dateTimeFromControl.setValue(start);
        this.dateTimeToControl.setValue(end);
    }
    _watchDateTimeFrom() {
        this.dateTimeFromControl.valueChanges.subscribe((value) => {
            const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["addDays"])(new Date(value), this.$settings.getSettingByName('workplaceReservationDurationMaxDays'));
            this.repeatData.end = date;
            this.endMaxDate = (_date) => {
                return _date > date;
            };
        });
    }
}
CreateFilterAppointmentComponent.ɵfac = function CreateFilterAppointmentComponent_Factory(t) { return new (t || CreateFilterAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterWorkplaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_7__["LocalizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
CreateFilterAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateFilterAppointmentComponent, selectors: [["app-create-filters-appointment"], ["", "app-create-filters-appointment", ""]], hostVars: 2, hostBindings: function CreateFilterAppointmentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("app-list-filter-workplace", true);
    } }, inputs: { tagObjectType: "tagObjectType" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterWorkplaceService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 47, consts: [[1, "app-list-filter-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngModel", "layout", "format", "workHours", "minDuration", "allowAllDay", "autoUpdateDateTo", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange", "nzCheckedChange"], [1, "app-list-filter-item__title", "checkbox-title"], [1, "app-list-filter-item__repeat"], [1, "week-num", "mb-25", 3, "nzAddOnBefore", "nzAddOnAfter"], [3, "nzDisabled", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "mb-15", 2, "width", "100%", 3, "nzOnChange"], ["nz-row", ""], ["class", "mb-10", "nz-col", "", "nzSpan", "6", 4, "ngFor", "ngForOf"], [3, "nzAddOnBefore"], [3, "ngModel", "nzFormat", "nzDisabled", "nzDisabledDate", "ngModelChange"], ["class", "app-list-filter-item", 4, "ngIf"], ["titleTpl", ""], [3, "nzValue", "nzLabel"], ["nz-col", "", "nzSpan", "6", 1, "mb-10"], ["nz-checkbox", "", 3, "nzDisabled", "nzValue"], [3, "formControl", "nzMin"], [4, "ngIf"], ["class", "tag", 3, "nzColor", "click", 4, "ngFor", "ngForOf"], [1, "tag", 3, "nzColor", "click"], [1, "app-list-filter-item__title"]], template: function CreateFilterAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateFilterAppointmentComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-filter-date", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterAppointmentComponent_Template_app_filter_date_ngModelChange_2_listener($event) { return ctx.updateDateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterAppointmentComponent_Template_label_ngModelChange_4_listener($event) { return ctx.repeat = $event; })("nzCheckedChange", function CreateFilterAppointmentComponent_Template_label_nzCheckedChange_4_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterAppointmentComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.repeatData.weekNum = $event; })("ngModelChange", function CreateFilterAppointmentComponent_Template_nz_select_ngModelChange_15_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CreateFilterAppointmentComponent_nz_option_16_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-checkbox-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnChange", function CreateFilterAppointmentComponent_Template_nz_checkbox_wrapper_nzOnChange_17_listener($event) { return ctx.chooseDays($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CreateFilterAppointmentComponent_div_19_Template, 5, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-input-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-date-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateFilterAppointmentComponent_Template_nz_date_picker_ngModelChange_23_listener($event) { return ctx.repeatData.end = $event; })("ngModelChange", function CreateFilterAppointmentComponent_Template_nz_date_picker_ngModelChange_23_listener() { return ctx.updateRepeatDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CreateFilterAppointmentComponent_nz_form_item_24_Template, 3, 5, "nz-form-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CreateFilterAppointmentComponent_nz_form_item_25_Template, 3, 4, "nz-form-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CreateFilterAppointmentComponent_ng_template_26_Template, 4, 5, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](44, _c3, ctx.dateTimeFromControl.value, ctx.dateTimeToControl.value))("layout", "vertical")("format", ctx.dateTimeFormat)("workHours", ctx.workHours)("minDuration", ctx.minDuration)("allowAllDay", true)("autoUpdateDateTo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.repeat)("nzDisabled", ctx.repeatDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 29, "Repeat")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 33, "Every")))("nzAddOnAfter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 37, "week")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", !ctx.repeat)("ngModel", ctx.repeatData.weekNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weekNums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.daysNaming);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 41, "End")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.repeatData.end)("nzFormat", ctx.dateFormat)("nzDisabled", !ctx.repeat)("nzDisabledDate", ctx.endMaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tags == null ? null : ctx.tags.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tags == null ? null : ctx.tags.length);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_11__["FilterDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__["NzInputGroupComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxWrapperComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__["NzDatePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzOptionComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__["NzTagComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_21__["DictionaryPipe"]], styles: ["[_nghost-%COMP%]     perfect-scrollbar {\n  height: 100%;\n}\n[_nghost-%COMP%]     .ant-picker {\n  width: 100%;\n}\n.app-list-filter-status[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.allDay-picker[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.checkbox-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1maWx0ZXItYXBwb2ludG1lbnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBaEJEO0VBRUksWUFBQTtBQWlCSjtBQW5CQTtFQU1JLFdBQUE7QUFnQko7QUFYRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFhSjtBQUxBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBT0Y7QUFKQTtFQUNFLG1CQUFBO0FBTUY7QUFIQTtFQUNFLHFCQUFBO0FBS0YiLCJmaWxlIjoiY3JlYXRlLWZpbHRlci1hcHBvaW50bWVudC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgcGVyZmVjdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIDo6bmctZGVlcCAuYW50LXBpY2tlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmFwcC1saXN0LWZpbHRlciB7XG4gICYtc3RhdHVzIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcblxuICAgICZfX2luZGljYXRvciB7XG5cbiAgICB9XG4gIH1cbn1cblxuLnRhZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFsbERheS1waWNrZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4uY2hlY2tib3gtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], CreateFilterAppointmentComponent.prototype, "dateFormat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], CreateFilterAppointmentComponent.prototype, "dateTimeFormat", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateFilterAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-filters-appointment, [app-create-filters-appointment]',
                templateUrl: './create-filter-appointment.component.html',
                styleUrls: ['./create-filter-appointment.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.app-list-filter-workplace]': `true`,
                },
                providers: [_presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterWorkplaceService"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterWorkplaceService"] }, { type: _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_7__["LocalizationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { tagObjectType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFormat: [], dateTimeFormat: [] }); })();


/***/ }),

/***/ "dVa7":
/*!**************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/floor/floor.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FloorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorComponent", function() { return FloorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _presentation_reservations_reservation_create_components_floor_floor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/floor/floor.service */ "FTlv");
/* harmony import */ var _presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/reservations/utils/reservation */ "Y+7/");
/* harmony import */ var _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/core/services/reservation-marks.service */ "+IbG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/core/services/config.service */ "jtrZ");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _base_dropdown_select_dropdown_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../base/dropdown-select/dropdown-select.component */ "4TZ2");
/* harmony import */ var _base_map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @base/map/map.component */ "6DYN");
/* harmony import */ var _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @base/booking-list/booking-list.component */ "NcEa");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filter.component */ "mycf");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _composite_workplace_card_workplace_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../composite/workplace-card/workplace-card.component */ "5+Hy");


























const _c0 = ["modalTitleTpl"];
const _c1 = ["modalContentTpl"];
const _c2 = ["reservationModalTpl"];
const _c3 = ["popupTpl"];
function FloorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0431\u0440\u043E\u043D\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FloorComponent_ng_template_16_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0414\u0430\u0442\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dates_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u0441 ", dates_r11.dateTimeFrom, " \u043F\u043E ", dates_r11.dateTimeTo, "");
} }
function FloorComponent_ng_template_16_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repeat_r12 = ctx.ngIf;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u043A\u0430\u0436\u0434. ", repeat_r12.weekNum, " \u043D\u0435\u0434. ", ctx_r9.getDays(repeat_r12.days), "");
} }
function FloorComponent_ng_template_16_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repeat_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](repeat_r13.end);
} }
function FloorComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0417\u0434\u0430\u043D\u0438\u0435: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u041C\u0435\u0441\u0442\u043E: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u042D\u0442\u0430\u0436: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FloorComponent_ng_template_16_div_15_Template, 5, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FloorComponent_ng_template_16_div_17_Template, 5, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FloorComponent_ng_template_16_div_19_Template, 5, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0411\u0426 ", ctx_r3.currentReservation.buildName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.currentReservation.placeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.currentReservation.floorNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 6, ctx_r3.filterDates$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 8, ctx_r3.repeatFilter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, ctx_r3.repeatFilter$));
} }
function FloorComponent_ng_template_18_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repeat_r18 = ctx.ngIf;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u043A\u0430\u0436\u0434. ", repeat_r18.weekNum, " \u043D\u0435\u0434. ", ctx_r16.getDays(repeat_r18.days), "");
} }
function FloorComponent_ng_template_18_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repeat_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](repeat_r19.end);
} }
function FloorComponent_ng_template_18_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0411\u0440\u043E\u043D\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FloorComponent_ng_template_18_div_0_div_10_Template, 5, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FloorComponent_ng_template_18_div_0_div_12_Template, 5, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.reservations.success[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, ctx_r14.repeatFilter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, ctx_r14.repeatFilter$));
} }
function FloorComponent_ng_template_18_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, err_r21.dates[0], ctx_r20.shortDateTimeFormat), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, err_r21.dates[1], ctx_r20.shortDateTimeFormat), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](err_r21.message);
} }
function FloorComponent_ng_template_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FloorComponent_ng_template_18_div_1_div_5_Template, 7, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.reservations.errors);
} }
function FloorComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FloorComponent_ng_template_18_div_0_Template, 14, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FloorComponent_ng_template_18_div_1_Template, 6, 1, "div", 19);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.reservations.success.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.reservations.errors.length);
} }
function FloorComponent_ng_template_20_app_workplace_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-workplace-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reservation", function FloorComponent_ng_template_20_app_workplace_card_0_Template_app_workplace_card_reservation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.handleReservation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r23 = ctx.ngIf;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", place_r23 == null ? null : place_r23.disabled)("readOnly", place_r23 == null ? null : place_r23.isEwsReadOnly)("calendarLink", "reservations/appointment/workplace/" + (place_r23 == null ? null : place_r23.id))("showPermanentAssignment", true)("type", ctx_r22.type)("workplaceId", place_r23 == null ? null : place_r23.id);
} }
function FloorComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FloorComponent_ng_template_20_app_workplace_card_0_Template, 1, 6, "app-workplace-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r7.currentWorkplace$));
} }
const HEIGHT_EXCEPT_MAP = 335;
class FloorComponent {
    constructor(_service, _cdr, _modal, _translatePipe, _measurements, _route, _config) {
        this._service = _service;
        this._cdr = _cdr;
        this._modal = _modal;
        this._translatePipe = _translatePipe;
        this._measurements = _measurements;
        this._route = _route;
        this._config = _config;
        this.areasVisible = false;
        this.activeMarkIndex = null;
        this.marks = [];
        this.currentReservation = {};
        this.select = { value: { label: '', value: null }, values: [] };
        this.hiddenMarksTypes = [];
        this.reservations = {
            success: [],
            errors: [],
        };
        this.shortDateTimeFormat = this._measurements.getMeasurementByName('shortDateTime');
        this.currentWorkplace$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.mapHeight = 0;
        this.resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(window, 'resize');
        this.nornikAplana = false;
        this.hiddenControls = [];
        this.nornikAplana = this._config.get('nornikAplana') === 'true';
        if (this._route.snapshot.params.type === 'appointment') {
            this.hiddenControls.push('Users');
        }
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
            this._cdr.markForCheck();
        });
        this.sub = this._service.floorImage$.subscribe(({ image, imageSize, areas }) => {
            this.imageSize = imageSize;
            this.areas = areas;
            this.image = image;
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
        this.sub = this._service.notReservWorkplaces$.subscribe((places) => {
            this.bookingItems = places
                .filter((place) => (this.nornikAplana && !place.isEwsReadOnly) || !this.nornikAplana)
                .map((place) => ({
                id: place.id,
                name: place.name,
                tags: place.tags,
                label: `Этаж ${this.currentFloor.floorNumber}`,
                actions: [this.getAction(place)],
            }));
        });
        this.sub = this.resize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500)).subscribe((_e) => {
            this.setMapHeight();
        });
        this.sub = this._service.reservations$.subscribe((reservs) => {
            this.allReservations = reservs;
        });
    }
    toggleAreasVisible() {
        this.areasVisible = !this.areasVisible;
    }
    ngAfterViewInit() {
        this.setMapHeight();
        const workplaceId = this._route.snapshot.queryParams.workplaceId;
        if (workplaceId) {
            this.centerPlace(workplaceId);
        }
    }
    ngOnDestroy() { }
    get filterDates$() {
        return this._service.filterDates$;
    }
    get repeatFilter$() {
        return this._service.repeatFilter$;
    }
    get loading$() {
        return this._service.loading$;
    }
    get type() {
        return this._route.snapshot.params.type || 'workplace';
    }
    get emptyText() {
        switch (this.type) {
            case 'parking':
                return 'No match parkings';
            case 'appointment':
                return 'No match appointments';
            default:
                return 'No match workplaces';
        }
    }
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
    get height() {
        return this.mapHeight + 'px';
    }
    reservationPlace(place) {
        this.currentReservation.buildName = this.currentBuild.name;
        this.currentReservation.placeName = place.name;
        this.currentReservation.floorNumber = this.currentFloor.floorNumber;
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
                            .reservationPlace(place.id)
                            .then(({ data, dates, filters, error }) => {
                            loading = false;
                            this._modal.closeAll();
                            if (!data) {
                                this._modal.error({
                                    nzTitle: 'Не удалось забронировать',
                                    nzContent: 'Проверьте дату и время начала периода',
                                });
                                return;
                            }
                            const main = data.find((r) => r.meta.recordCode === 'main');
                            if (data.length === 1) {
                                if (main.meta.isOk) {
                                    this._modal.success({
                                        nzTitle: 'Успешно забронировано',
                                        nzContent: main.meta.message,
                                    });
                                }
                                else {
                                    this._modal.error({
                                        nzTitle: 'Не удалось забронировать',
                                        nzContent: main.meta.message,
                                    });
                                }
                            }
                            else {
                                this.reservations.errors = [];
                                if (main.meta.isOk) {
                                    this.reservations.success = [
                                        main.meta.message || place.name,
                                    ];
                                }
                                else {
                                    const successReservation = data.find((r) => r.meta.isOk);
                                    if (successReservation) {
                                        this.reservations.success = [
                                            successReservation.meta.message || place.name,
                                        ];
                                    }
                                    this.reservations.errors = [
                                        {
                                            dates: [filters.dateTimeFrom, filters.dateTimeTo],
                                            message: main.meta.message || 'Не удалось забронировать',
                                        },
                                    ];
                                }
                                this.reservations.errors = [
                                    ...this.reservations.errors,
                                    ...data
                                        .filter((r) => !r.meta.isOk && r.meta.recordCode !== 'main')
                                        .map((r) => ({
                                        dates: dates[r.meta.recordCode],
                                        message: r.meta.message || 'Не удалось забронировать',
                                    })),
                                ];
                                this._modal.create({
                                    nzTitle: 'Информация о бронирование',
                                    nzContent: this.reservationModalTpl,
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
                            }
                            this._service.reloadReservations();
                        });
                    },
                },
            ],
        });
    }
    getAction(place) {
        return {
            id: place.id,
            title: this._translatePipe.transform(`${this._route.snapshot.params.type}-reservation`) || 'Забронировать место',
            type: 'primary',
            handler: () => {
                this.handleReservation(place);
            },
        };
    }
    setMapHeight() {
        const body = document.querySelector('body').offsetHeight;
        this.mapHeight = body - HEIGHT_EXCEPT_MAP;
    }
    getDays(days) {
        return days
            .map((day) => this._translatePipe.transform(`Days.${day}`))
            .join(', ');
    }
    handleReservation(_place = null) {
        const place = _place ? _place : this.currentWorkplace$.getValue();
        if (place.labelIdPermanentAssignment > 0) {
            this._modal.create({
                nzTitle: 'Информация о бронирование',
                nzContent: 'Это место закреплено за другим пользователем, Вы уверены, что хотите его забронировать?',
                nzFooter: [
                    {
                        label: 'Отмена',
                        onClick: () => {
                            this._modal.closeAll();
                        },
                    },
                    {
                        label: 'Ок',
                        type: 'primary',
                        onClick: () => {
                            this._modal.closeAll();
                            this.onReservation(place);
                        },
                    },
                ],
            });
        }
        else {
            this.onReservation(place);
        }
    }
    onReservation(place) {
        if (this.currentFloor.workplaceReservationSocialDistanceCheck ===
            'CONFIRMATION') {
            const distanceCheck = Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_5__["checkReservedNeighbors"])(place, this.allReservations);
            if (distanceCheck) {
                this._modal.confirm(Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_5__["getDistanceCheckConfirmModal"])(() => {
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
}
FloorComponent.ɵfac = function FloorComponent_Factory(t) { return new (t || FloorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_reservations_reservation_create_components_floor_floor_service__WEBPACK_IMPORTED_MODULE_4__["FloorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"])); };
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
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_6__["ReservationMarksService"], _presentation_reservations_reservation_create_components_floor_floor_service__WEBPACK_IMPORTED_MODULE_4__["FloorService"]])], decls: 22, vars: 21, consts: [[1, "workspace"], [1, "workspace-wrapper"], [1, "workspace__top-controls"], ["nz-button", "", "nzType", "link", 1, "workspace__top-controls-link", 3, "click"], [1, "workspace__top-controls-dropdown-select", 3, "values", "value", "valueChange"], [1, "workspace__map", 3, "img", "marks", "size", "height", "hiddenMarksTypes", "hiddenControls", "centeredMarkId", "loading", "areas", "areasVisible", "hiddenMarksChange", "areaVisibilityChange"], ["appScroll", "", 1, "workspace__actions"], [3, "emptyText", "items", "activeIndex", "activeItemId"], ["app-create-filters", "", 1, "app-list__filters", "workspace__actions", "workspace__filters", 3, "type", "valuesChange"], ["modalTitleTpl", ""], ["modalContentTpl", ""], ["reservationModalTpl", ""], ["popupTpl", ""], [1, "modal-title"], ["nz-icon", "", "nzType", "check-circle"], [1, "modal-content"], [1, "modal-content__name"], ["class", "modal-content", 4, "ngIf"], ["class", "mb-25", 4, "ngIf"], [4, "ngIf"], [1, "mb-25"], ["nz-icon", "", "nzType", "close-circle", 1, "error"], ["class", "modal-content", 4, "ngFor", "ngForOf"], [3, "disabled", "readOnly", "calendarLink", "showPermanentAssignment", "type", "workplaceId", "reservation", 4, "ngIf"], [3, "disabled", "readOnly", "calendarLink", "showPermanentAssignment", "type", "workplaceId", "reservation"]], template: function FloorComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-book-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeItemId", function FloorComponent_Template_app_book_list_activeItemId_12_listener($event) { return ctx.centerPlace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valuesChange", function FloorComponent_Template_div_valuesChange_13_listener($event) { return ctx.changeFilters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FloorComponent_ng_template_14_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FloorComponent_ng_template_16_Template, 21, 12, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FloorComponent_ng_template_18_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, FloorComponent_ng_template_20_Template, 2, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 17, "Reservations.Back to building selection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.select.values)("value", ctx.select.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("img", ctx.image)("marks", ctx.marks)("size", ctx.imageSize)("height", ctx.mapHeight)("hiddenMarksTypes", ctx.hiddenMarksTypes)("hiddenControls", ctx.hiddenControls)("centeredMarkId", ctx.centeredItemId)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 19, ctx.loading$))("areas", ctx.areas)("areasVisible", ctx.areasVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("emptyText", ctx.emptyText)("items", ctx.bookingItems)("activeIndex", ctx.activeMarkIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.type);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], _base_dropdown_select_dropdown_select_component__WEBPACK_IMPORTED_MODULE_16__["DropdownSelectComponent"], _base_map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"], _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollDirective"], _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_19__["BookingListComponent"], _presentation_reservations_reservation_create_components_create_create_filters_create_filter_component__WEBPACK_IMPORTED_MODULE_20__["CreateFilterComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _composite_workplace_card_workplace_card_component__WEBPACK_IMPORTED_MODULE_23__["WorkplaceCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]], styles: [".workspace[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  height: 100%;\n}\n.workspace-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.workspace-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  max-width: calc(100% - 520px);\n  flex-basis: calc(100% - 290px);\n}\n.workspace__map[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.workspace__actions[_ngcontent-%COMP%] {\n  max-height: 100%;\n  flex-basis: 290px;\n  background-color: #ffffff;\n  border-left: 1px solid #f0f0f0;\n}\n.workspace__filters[_ngcontent-%COMP%] {\n  flex-basis: 350px;\n}\n.workspace__top-controls[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px 23px 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.workspace__top-controls-item[_ngcontent-%COMP%] {\n  font-size: 21px;\n  cursor: pointer;\n  color: #bfbfbf;\n}\n.workspace__top-controls-item._active[_ngcontent-%COMP%] {\n  color: #1890ff;\n}\n.workspace__top-controls-link[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.workspace__top-controls-dropdown-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media screen and (max-width: 1350px) {\n  .workspace-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #40a9ff;\n  color: #ffffff;\n}\n.mark-popover[_ngcontent-%COMP%] {\n  width: 416px;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.mark-popover__icon[_ngcontent-%COMP%] {\n  color: #52c41a;\n  float: left;\n  margin-right: 16px;\n  font-size: 22px;\n}\n.mark-popover__title[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.4;\n}\n.mark-popover__content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin-top: 8px;\n  margin-left: 38px;\n}\n.mark-popover__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #52c41a;\n  margin-right: 10px;\n}\n.modal-title[_ngcontent-%COMP%]   i.error[_ngcontent-%COMP%] {\n  color: #f5222d;\n}\n.modal-content__name[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.modal-content[_ngcontent-%COMP%]    + .modal-content[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb29yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWpCRDtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQW1CRjtBQWxCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQW9CSjtBQW5CSTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUFxQk47QUFsQkU7RUFDRSxXQUFBO0FBb0JKO0FBbEJFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFvQko7QUFsQkU7RUFDRSxpQkFBQTtBQW9CSjtBQWxCRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQW9CSjtBQW5CSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXFCTjtBQXBCTTtFQUNFLGNBQUE7QUFzQlI7QUFsQkU7RUFDRSxVQUFBO0FBb0JKO0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBb0JKO0FBakJBO0VBQ0U7SUFDRSxzQkFBQTtFQW1CRjtBQUNGO0FBaEJBOztFQUVFLE9BQUE7QUFrQkY7QUFmQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQWlCRjtBQWRBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQWdCRjtBQWZFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFpQko7QUFmRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFpQko7QUFmRTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWlCSjtBQWZFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFpQko7QUFaRTtFQUNFLGFBQUE7QUFjSjtBQWJJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWVOO0FBZE07RUFDRSxjQUFBO0FBZ0JSO0FBWEk7RUFDRSxhQUFBO0FBYU47QUFYSTtFQUNFLGdCQUFBO0FBYU4iLCJmaWxlIjoiZmxvb3IuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy90aGVtZS9vdmVycmlkZVwiO1xuLndvcmtzcGFjZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gIGhlaWdodDogMTAwJTtcbiAgJi13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNTIwcHgpO1xuICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gMjkwcHgpO1xuICAgIH1cbiAgfVxuICAmX19tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICZfX2FjdGlvbnMge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1iYXNpczogMjkwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGdyYXktMTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIEBncmF5LTQ7XG4gIH1cbiAgJl9fZmlsdGVycyB7XG4gICAgZmxleC1iYXNpczogMzUwcHg7XG4gIH1cbiAgJl9fdG9wLWNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMzJweCAyM3B4IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICYtaXRlbSB7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogQGdyYXktNjtcbiAgICAgICYuX2FjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiBAYmx1ZS02O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX190b3AtY29udHJvbHMtbGluayB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAmX190b3AtY29udHJvbHMtZHJvcGRvd24tc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICAud29ya3NwYWNlLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmxlZnQsXG4ucmlnaHQge1xuICBmbGV4OiAxO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJsdWUtNTtcbiAgY29sb3I6IEBncmF5LTE7XG59XG5cbi5tYXJrLXBvcG92ZXIge1xuICB3aWR0aDogNDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIwcHg7XG4gICZfX2ljb24ge1xuICAgIGNvbG9yOiAjNTJjNDFhO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgJl9fdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuICAmX19jb250ZW50IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzOHB4O1xuICB9XG4gICZfX2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59XG5cbi5tb2RhbCB7XG4gICYtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJiBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiBAZ3JlZW4tNjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICYuZXJyb3Ige1xuICAgICAgICBjb2xvcjogQHJlZC02O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLWNvbnRlbnQge1xuICAgICZfX25hbWUge1xuICAgICAgb3BhY2l0eTogMC42NTtcbiAgICB9XG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
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
                providers: [_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_6__["ReservationMarksService"], _presentation_reservations_reservation_create_components_floor_floor_service__WEBPACK_IMPORTED_MODULE_4__["FloorService"]],
            }]
    }], function () { return [{ type: _presentation_reservations_reservation_create_components_floor_floor_service__WEBPACK_IMPORTED_MODULE_4__["FloorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_11__["MeasurementsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }, { type: _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"] }]; }, { mapHeight: [], sub: [], modalTitleTpl: [{
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

/***/ "eBOS":
/*!***********************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/floor/floors.utils.ts ***!
  \***********************************************************************************************/
/*! exports provided: mapPlacesToMArks, mapPlaceToMark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPlacesToMArks", function() { return mapPlacesToMArks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPlaceToMark", function() { return mapPlaceToMark; });
function mapPlacesToMArks(places, images, type) {
    return places.map(place => mapPlaceToMark(place, images, type));
}
function mapPlaceToMark(place, images, type) {
    const { id, disabled, name, x, y, width, height } = place;
    const mark = {
        id,
        disabled,
        img: images[place.id],
        relativePlace: place,
        tooltip: name,
        coordinates: { x, y, size: place.width },
        size: { height, width }
    };
    if (type === 'appointment') {
        mark.logicType = 'Room';
        mark.coordinates.size = 120;
    }
    return mark;
}


/***/ }),

/***/ "huRZ":
/*!****************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create.service */ "J6yh");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create.utils */ "wZw6");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/booking-list/booking-list.component */ "NcEa");
/* harmony import */ var _base_open_street_map_open_street_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @base/open-street-map/open-street-map.component */ "+2ou");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/pipes/dictionary.pipe */ "Dz+d");

















const _c0 = ["bookListContentTpl"];
function CreateComponent_app_open_street_map_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-open-street-map", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("markClicked", function CreateComponent_app_open_street_map_3_Template_app_open_street_map_markClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.handleMarkClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r0.mapHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", ctx_r0.mapHeight)("options", ctx_r0.osmOptions)("marks", ctx_r0.osmMarks);
} }
function CreateComponent_ng_template_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "Rooms")), " ");
} }
function CreateComponent_ng_template_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "Parkings")), " ");
} }
function CreateComponent_ng_template_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "Offices.Workplaces")), " ");
} }
function CreateComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateComponent_ng_template_7_ng_container_2_Template, 4, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateComponent_ng_template_7_ng_container_3_Template, 4, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CreateComponent_ng_template_7_ng_container_4_Template, 4, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const places_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r2.placeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "parkingLots");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](places_r5.free);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](places_r5.busy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" | ", places_r5.freePercents, "% ");
} }
const HEIGHT_EXCEPT_MAP = 184;
class CreateComponent {
    constructor(_service, cdr) {
        this._service = _service;
        this.cdr = cdr;
        this.activeMarkIndex = null;
        this.osmOptions = _presentation_reservations_reservation_create_components_create_create_utils__WEBPACK_IMPORTED_MODULE_5__["OSM_OPTIONS"];
        this.osmMarks = [];
        this.loading = this._service.loading$;
        this.placeType = this._service.placeType$;
        this.mapHeight = 0;
    }
    handleMarkClicked(id) {
        this.activeMarkIndex = this.buildingList.findIndex((i) => i.id === id);
    }
    ngAfterViewInit() {
        this.setMapHeight();
        this.sub = this._service
            .getBuildingsList1$(this.bookListContentTpl)
            .subscribe(buildingsList => {
            this.buildingList = buildingsList;
            this.osmMarks = buildingsList
                .filter((building) => building.coordinates)
                .map(({ id, coordinates: { x, y } }) => ({ id, x, y }));
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
    }
    setMapHeight() {
        const body = document.querySelector('body').offsetHeight;
        this.mapHeight = body - HEIGHT_EXCEPT_MAP;
        this.cdr.detectChanges();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_reservations_reservation_create_components_create_create_service__WEBPACK_IMPORTED_MODULE_4__["CreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-reservations-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bookListContentTpl = _t.first);
    } }, hostBindings: function CreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function CreateComponent_resize_HostBindingHandler($event) { return ctx.setMapHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_reservations_reservation_create_components_create_create_service__WEBPACK_IMPORTED_MODULE_4__["CreateService"]])], decls: 9, vars: 6, consts: [[1, "workspace"], [1, "workspace-wrapper"], [1, "workspace__center"], ["class", "workspace__map", 3, "height", "options", "marks", "markClicked", 4, "ngIf"], ["appScroll", "", 1, "workspace__actions"], [3, "nzSpinning"], [3, "items", "activeIndex"], ["bookListContentTpl", ""], [1, "workspace__map", 3, "height", "options", "marks", "markClicked"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "free"], [1, "busy"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateComponent_app_open_street_map_3_Template, 1, 5, "app-open-street-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-spin", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-book-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CreateComponent_ng_template_7_Template, 12, 6, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.mapHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buildingList == null ? null : ctx.buildingList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpinning", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.buildingList)("activeIndex", ctx.activeMarkIndex);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinComponent"], _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_11__["BookingListComponent"], _base_open_street_map_open_street_map_component__WEBPACK_IMPORTED_MODULE_12__["OpenStreetMapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_14__["DictionaryPipe"]], styles: [".workspace[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.workspace-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.workspace-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  flex-basis: calc(100% - 290px);\n}\n.workspace__center[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.workspace__map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n}\n.workspace__actions[_ngcontent-%COMP%] {\n  max-height: 100%;\n  flex-basis: 340px;\n  background-color: #ffffff;\n  border-left: 1px solid #f0f0f0;\n}\n.workspace__actions[_ngcontent-%COMP%]     nz-spin {\n  height: 100%;\n}\n.workspace__top-controls[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px 23px 8px;\n}\n.workspace__top-controls-link[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.workspace__top-controls-dropdown-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media screen and (max-width: 1350px) {\n  .workspace-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #40a9ff;\n  color: #ffffff;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n}\n.modal-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #52c41a;\n  margin-right: 10px;\n}\n.modal-content__name[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.modal-content[_ngcontent-%COMP%]    + .modal-content[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.free[_ngcontent-%COMP%] {\n  color: #52c41a;\n}\n.busy[_ngcontent-%COMP%] {\n  color: #f5222d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFqQkQ7RUFDRSx5QkFBQTtBQW1CRjtBQWxCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBb0JKO0FBbkJJO0VBQ0UsOEJBQUE7QUFxQk47QUFsQkU7RUFDRSxXQUFBO0FBb0JKO0FBbEJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFvQko7QUFsQkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQW9CSjtBQXhCRTtFQU9JLFlBQUE7QUFvQk47QUFqQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBbUJKO0FBakJFO0VBQ0UsVUFBQTtBQW1CSjtBQWpCRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQW1CSjtBQWhCQTtFQUNFO0lBQ0Usc0JBQUE7RUFrQkY7QUFDRjtBQWZBOztFQUNFLE9BQUE7QUFrQkY7QUFmQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQWlCRjtBQWJFO0VBQ0UsYUFBQTtBQWVKO0FBZEk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZ0JOO0FBWkk7RUFDRSxhQUFBO0FBY047QUFaSTtFQUNFLGdCQUFBO0FBY047QUFUQTtFQUNFLGNBQUE7QUFXRjtBQVRBO0VBQ0UsY0FBQTtBQVdGIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdGhlbWUvb3ZlcnJpZGUnO1xuLndvcmtzcGFjZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gICYtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAtIDI5MHB4KTtcbiAgICB9XG4gIH1cbiAgJl9fY2VudGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAmX19tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbiAgJl9fYWN0aW9ucyB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBmbGV4LWJhc2lzOiAzNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGdyYXktNDtcblxuICAgIDo6bmctZGVlcCBuei1zcGluIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgJl9fdG9wLWNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMzJweCAyM3B4IDhweDtcbiAgfVxuICAmX190b3AtY29udHJvbHMtbGluayB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAmX190b3AtY29udHJvbHMtZHJvcGRvd24tc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkgIHtcbiAgLndvcmtzcGFjZS13cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5sZWZ0LCAucmlnaHQge1xuICBmbGV4OiAxO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJsdWUtNTtcbiAgY29sb3I6IEBncmF5LTE7XG59XG5cbi5tb2RhbCB7XG4gICYtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJiBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiBAZ3JlZW4tNjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbiAgJi1jb250ZW50IHtcbiAgICAmX19uYW1lIHtcbiAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgfVxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mcmVlIHtcbiAgY29sb3I6IEBncmVlbi02O1xufVxuLmJ1c3kge1xuICBjb2xvcjogQHJlZC02O1xufVxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_7__["Subscribe"])()
], CreateComponent.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_7__["Subscribe"])()
], CreateComponent.prototype, "placeType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], CreateComponent.prototype, "sub", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_2__["MarkForCheck"]
], CreateComponent.prototype, "mapHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_6__["Debounce"])(250)
], CreateComponent.prototype, "setMapHeight", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reservations-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.less'],
                providers: [_presentation_reservations_reservation_create_components_create_create_service__WEBPACK_IMPORTED_MODULE_4__["CreateService"]],
            }]
    }], function () { return [{ type: _presentation_reservations_reservation_create_components_create_create_service__WEBPACK_IMPORTED_MODULE_4__["CreateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { loading: [], placeType: [], sub: [], mapHeight: [], bookListContentTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['bookListContentTpl']
        }], setMapHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "iA6y":
/*!******************************************************************************!*\
  !*** ./src/app/presentation/reservations/resolvers/title-create.resolver.ts ***!
  \******************************************************************************/
/*! exports provided: TitleCreateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCreateResolver", function() { return TitleCreateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TitleCreateResolver {
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    resolve(route) {
        const { type } = route.params;
        return this._translateService.get(type + '-reservation');
    }
}
TitleCreateResolver.ɵfac = function TitleCreateResolver_Factory(t) { return new (t || TitleCreateResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TitleCreateResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TitleCreateResolver, factory: TitleCreateResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCreateResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "mycf":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create-filters/create-filter.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CreateFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilterComponent", function() { return CreateFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _create_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-filter.service */ "YrRt");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filters_appointment_create_filter_appointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filters-appointment/create-filter-appointment.component */ "cuiY");
/* harmony import */ var _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.component */ "7XxE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../core/pipes/dictionary.pipe */ "Dz+d");

















function CreateFilterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tagObjectType", "ROOM")("formGroup", ctx_r0.formGroup);
} }
function CreateFilterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tagObjectType", "PARKING_LOT")("formGroup", ctx_r1.formGroup);
} }
function CreateFilterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tagObjectType", "WORKPLACE")("formGroup", ctx_r2.formGroup);
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
CreateFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateFilterComponent, selectors: [["app-create-filters"], ["", "app-create-filters", ""]], hostAttrs: [1, "app-reservations-create-filter"], inputs: { inputType: ["type", "inputType"], inputValues: ["values", "inputValues"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_create_filter_service__WEBPACK_IMPORTED_MODULE_2__["CreateFilterService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 31, consts: [["nz-row", "", 1, "app-list-filters__header", 3, "nzGutter"], ["nz-col", "", 1, "app-list-filters__header-action", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType"], ["nz-col", "", 1, "app-list-filters__header-title", 3, "nzXs", "nzLg"], ["nz-col", "", 1, "app-list-filters__header-action", "_right", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType", "click"], ["nz-form", "", 1, "app-list-filters__form", 3, "nzLayout", "formGroup", "ngSwitch"], [1, "app-list-filters__form-scroll", 3, "config"], ["app-create-filters-appointment", "", 3, "tagObjectType", "formGroup", 4, "ngSwitchCase"], ["app-create-filters-workplace", "", 3, "tagObjectType", "formGroup", 4, "ngSwitchCase"], ["app-create-filters-workplace", "", 3, "tagObjectType", "formGroup", 4, "ngSwitchDefault"], ["app-create-filters-appointment", "", 3, "tagObjectType", "formGroup"], ["app-create-filters-workplace", "", 3, "tagObjectType", "formGroup"]], template: function CreateFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateFilterComponent_Template_button_click_11_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "perfect-scrollbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateFilterComponent_div_17_Template, 1, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateFilterComponent_div_18_Template, 1, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateFilterComponent_div_19_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 20, "Close")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 24, "Filters")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 28, "Clear")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.formGroup)("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "parking");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _presentation_reservations_reservation_create_components_create_create_filters_create_filters_appointment_create_filter_appointment_component__WEBPACK_IMPORTED_MODULE_11__["CreateFilterAppointmentComponent"], _presentation_reservations_reservation_create_components_create_create_filters_create_filters_workplace_create_filter_workplace_component__WEBPACK_IMPORTED_MODULE_12__["CreateFilterWorkplaceComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_14__["DictionaryPipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 0 4px 0 24px;\n}\n[_nghost-%COMP%]   .app-list-filters__header[_ngcontent-%COMP%] {\n  height: 52px;\n  padding-right: 24px;\n}\n[_nghost-%COMP%]   .app-list-filters__header-action[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n}\n[_nghost-%COMP%]   .app-list-filters__header-action[_ngcontent-%COMP%]     .ant-btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n[_nghost-%COMP%]   .app-list-filters__header-action._right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .app-list-filters__form[_ngcontent-%COMP%] {\n  height: calc(100% - 52px);\n}\n[_nghost-%COMP%]   .app-list-filters__form[_ngcontent-%COMP%]   .ant-checkbox-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .app-list-filters__form-scroll[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   .app-list-filters-item__scroll[_ngcontent-%COMP%], [_nghost-%COMP%]   .app-list-filters-item__scroll[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1maWx0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBWkQ7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFjRjtBQVhJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBYU47QUFYTTtFQUNFLGlCQUFBO0FBYVI7QUFYUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWFWO0FBVlE7RUFDRSxpQkFBQTtBQVlWO0FBUEk7RUFDRSx5QkFBQTtBQVNOO0FBVkk7RUFJSSxrQkFBQTtBQVNSO0FBTk07RUFDRSxtQkFBQTtBQVFSO0FBRlE7O0VBRUUsaUJBQUE7QUFJViIsImZpbGUiOiJjcmVhdGUtZmlsdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvdGhlbWUvY29sb3JzLmxlc3NcIjtcblxuQGZvb3Rlci1oZWlnaHQ6IDY0cHg7XG5AaGVhZGVyLWhlaWdodDogNTJweDtcbkBhcHAtbGlzdC1maWx0ZXItcHJlZml4LWNsczogYXBwLWxpc3QtZmlsdGVycztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNHB4IDAgMjRweDtcblxuICAuQHthcHAtbGlzdC1maWx0ZXItcHJlZml4LWNsc30ge1xuICAgICZfX2hlYWRlciB7XG4gICAgICBoZWlnaHQ6IEBoZWFkZXItaGVpZ2h0O1xuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcblxuICAgICAgJi1hY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMDtcblxuICAgICAgICAmIDo6bmctZGVlcCAuYW50LWJ0biB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLl9yaWdodCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gQGhlYWRlci1oZWlnaHQpO1xuXG4gICAgICAuYW50LWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG5cbiAgICAgICYtc2Nyb2xsIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgJl9fc2Nyb2xsIHtcbiAgICAgICAgJixcbiAgICAgICAgJiAucHMge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
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


/***/ }),

/***/ "wZw6":
/*!************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create.utils.ts ***!
  \************************************************************************************************/
/*! exports provided: OSM_OPTIONS, getBusyType, mapBuildingListData, getBookingItemAction, mapBuildingsToBookingItems, mapBusyLiveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSM_OPTIONS", function() { return OSM_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBusyType", function() { return getBusyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBuildingListData", function() { return mapBuildingListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookingItemAction", function() { return getBookingItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBuildingsToBookingItems", function() { return mapBuildingsToBookingItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBusyLiveData", function() { return mapBusyLiveData; });
const OSM_OPTIONS = {
    x: 56.8587214,
    y: 35.9175965,
    zoom: 6,
};
function getBusyType(placeType) {
    switch (placeType) {
        case 'rooms':
            return 'busyRooms';
        case 'workplaces':
            return 'busyWorkplaces';
    }
    return null;
}
function mapBuildingListData(data, content, handler) {
    const buildings = data[0];
    return buildings.map((building, index) => (Object.assign(Object.assign({}, building), { content, coordinates: {
            x: building.latitude,
            y: building.longitude
        }, actions: [getBookingItemAction(building.id, handler.bind(null, building.id))], contentContext: mapBusyLiveData(building, data[1], data[2], data[3]) })));
}
function getBookingItemAction(id, handler) {
    return {
        id,
        title: 'SelectOffice',
        type: 'primary',
        handler
    };
}
function mapBuildingsToBookingItems(buildings, content, handler) {
    return buildings.map((building, index) => (Object.assign(Object.assign({}, building), { content, coordinates: {
            x: building.latitude,
            y: building.longitude
        }, actions: [getBookingItemAction(building.id, handler.bind(null, building.id))] })));
}
function mapBusyLiveData(building, floors, places, busyData) {
    const floorsIds = floors.filter(f => f.buildingId === building.id).map(f => f.id);
    const buildPlaces = places.filter(w => floorsIds.includes(w.floorMapId));
    const buildIds = buildPlaces.map(build => build.id);
    const busyWorkplaces = busyData.map(w => w.id) || [];
    const busyNum = new Set(busyWorkplaces.filter(id => buildIds.includes(id))).size;
    return {
        $implicit: {
            free: buildPlaces.length - busyNum,
            busy: busyNum,
            freePercents: Math.trunc(100 * (buildPlaces.length - busyNum) / buildPlaces.length)
        }
    };
}


/***/ }),

/***/ "y+In":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-create/components/create/create-filters/create-filter.utils.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: getListFilterFieldsByType, mapCheckBoxOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFilterFieldsByType", function() { return getListFilterFieldsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCheckBoxOptions", function() { return mapCheckBoxOptions; });
const listFilterFields = {
    appointment: {
        dateTimeFrom: null,
        dateTimeTo: null,
        tags: [],
        repeat: null,
        seatCount: 1,
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
        tags: [],
        repeat: null,
        dateTimeFrom: null,
        dateTimeTo: null
    },
    workplace: {
        dateTimeFrom: null,
        dateTimeTo: null,
        tags: [],
        repeat: null,
        types: ['DEFAULT', 'COMPLEMENTARY'],
    }
};
function getListFilterFieldsByType(type) {
    return listFilterFields[type] || null;
}
function mapCheckBoxOptions(items, valueField, labelField, control) {
    return items.map((item) => {
        var _a, _b;
        const value = item[valueField];
        const label = item[labelField];
        const checked = Boolean((_b = (_a = control === null || control === void 0 ? void 0 : control.value) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, value));
        return Object.assign(Object.assign({}, item), { label, value, checked });
    });
}


/***/ })

}]);
//# sourceMappingURL=reservation-create-reservation-create-module.js.map