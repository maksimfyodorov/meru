(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offices-map-offices-map-module"],{

/***/ "0rSx":
/*!***************************************************************************!*\
  !*** ./src/app/presentation/offices/offices-map/offices-map.component.ts ***!
  \***************************************************************************/
/*! exports provided: OfficesMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesMapComponent", function() { return OfficesMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_offices_offices_map_offices_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.service */ "W+g7");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.utils */ "7RLK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/core/services/reservation-marks.service */ "+IbG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/notifications.service */ "/VmJ");
/* harmony import */ var _base_map_map_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @base/map/map.service */ "Bnie");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _base_dropdown_select_dropdown_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../base/dropdown-select/dropdown-select.component */ "4TZ2");
/* harmony import */ var _base_multi_switcher_multi_switcher_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../base/multi-switcher/multi-switcher.component */ "YEDM");
/* harmony import */ var _base_map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @base/map/map.component */ "6DYN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _composite_workplace_card_workplace_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../composite/workplace-card/workplace-card.component */ "5+Hy");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");

































const _c0 = ["popup"];
function OfficesMapComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function OfficesMapComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-workplace-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reservation", function OfficesMapComponent_ng_template_14_Template_app_workplace_card_reservation_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.handleReservation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r2.type)("readOnly", ctx_r2.isEwsReadOnly)("showPermanentAssignment", true)("workplaceId", ctx_r2.workplaceId)("disabled", ctx_r2.isReservation)("calendarLink", "reservations/appointment/workplace/" + ctx_r2.workplaceId);
} }
function OfficesMapComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-filter-date", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfficesMapComponent_ng_template_16_Template_app_filter_date_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.filter.date.value = $event; })("ngModelChange", function OfficesMapComponent_ng_template_16_Template_app_filter_date_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.filterValueChange("date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-slider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfficesMapComponent_ng_template_16_Template_nz_slider_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.filter.slider.value = $event; })("ngModelChange", function OfficesMapComponent_ng_template_16_Template_nz_slider_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.filterValueChange("time"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.filter.date.value)("format", ctx_r4.filter.date.format)("layout", "horizontal")("workHours", ctx_r4.filter.date.workHours)("autoUpdateDateTo", true)("autoUpdateDateToFullDay", true)("minDuration", ctx_r4.filter.slider.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.filter.slider.value)("nzMin", ctx_r4.filter.slider.min)("nzMax", ctx_r4.filter.slider.max)("nzStep", ctx_r4.filter.slider.step)("nzTipFormatter", ctx_r4.filter.slider.tipFormatter)("nzDisabled", ctx_r4.filter.slider.disabled)("nzTooltipVisible", ctx_r4.filter.slider.tooltipVisible)("nzMarks", ctx_r4.filter.slider.marks);
} }
function OfficesMapComponent_ng_template_18_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 25);
} if (rf & 2) {
    const user_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", user_r23.name)("nzValue", user_r23);
} }
function OfficesMapComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-input-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfficesMapComponent_ng_template_18_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.search.value = $event; })("ngModelChange", function OfficesMapComponent_ng_template_18_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.onSelectSearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OfficesMapComponent_ng_template_18_nz_option_2_Template, 1, 2, "nz-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", ctx_r6.search.placeHolder)("ngModel", ctx_r6.search.value)("nzShowArrow", ctx_r6.search.showArrow)("nzFilterOption", ctx_r6.search.filterOption)("nzCustomTemplate", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, ctx_r6.users$));
} }
function OfficesMapComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OfficesMapComponent_ng_template_22_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function OfficesMapComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function OfficesMapComponent_ng_template_22_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.onLoadSearchAvatar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "imageBlob");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OfficesMapComponent_ng_template_22_ng_container_6_Template, 1, 0, "ng-container", 8);
} if (rf & 2) {
    const option_r27 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r10.search.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", option_r27.nzValue.avatarImageUrl ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, option_r27.nzValue.avatarImageUrl)) : ctx_r10.defaultAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", option_r27.nzLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r27.nzLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.search.loading ? _r11 : null);
} }
function OfficesMapComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-spin", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzIndicator", _r13);
} }
function OfficesMapComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 31);
} }
const _c1 = function (a0, a1) { return { width: a0, height: a1 }; };
const HEIGHT_EXCEPT_MAP = 405;
class OfficesMapComponent {
    constructor($service, cdr, $router, $notifications, $map, _modal, _translatePipe) {
        this.$service = $service;
        this.cdr = cdr;
        this.$router = $router;
        this.$notifications = $notifications;
        this.$map = $map;
        this._modal = _modal;
        this._translatePipe = _translatePipe;
        this.type = 'workplace';
        this.visibleWorkplaceId = null;
        this.hiddenMarksTypes = [];
        this.search = {
            value: null,
            placeHolder: 'Введите ФИО чтобы найти место пользователя',
            showArrow: false,
            filterOption: (input, option) => String(option.nzLabel).trim().toLowerCase().includes(input.toLowerCase()),
            loading: false,
            beforeImg: null,
        };
        this.mode = this.$service.switcher;
        this.mapHeight = 0;
        this.resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize');
        this._filter = $service.filter;
        this._dropdownSelect = $service.dropdownSelect;
        this.image$ = $service.mapImageUrl$;
        this.loading$ = $service.loading$;
        this.marks$ = $service.mapMarksWithPopup$;
        this.selectedWorkplace$ = $service.selectedWorkplace$;
        this.users$ = $service.users$;
        this.defaultAvatar = _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_USER_AVATAR"];
        this.sub = $service.areas$.subscribe((areas) => {
            this.areas = areas;
        });
    }
    get modeLabel() {
        return this.mode.items[this.mode.value].tooltip;
    }
    get currentFloorMap() {
        return this._currentFloorMap;
    }
    set currentFloorMap(value) {
        this._currentFloorMap = value;
        if (value) {
            this.dropdownSelect = this.$service.dropdownSelect({
                label: value.name,
                value: value.id,
            });
        }
        else {
            this.sub = this.$service.floors$.subscribe((floors) => {
                this._dropdownSelect.values = floors.map((_f) => ({
                    label: _f.name,
                    value: _f.id,
                }));
                this.cdr.markForCheck();
            });
            this.$notifications.error(this._translatePipe.transform('OfficesMap.Error'), this._translatePipe.transform('OfficesMap.Floor not found'));
        }
    }
    set filter(value) {
        this._filter = value;
    }
    get filter() {
        return this._filter;
    }
    set dropdownSelect(value) {
        this._dropdownSelect = value;
    }
    get dropdownSelect() {
        return this._dropdownSelect;
    }
    set popup(value) {
        this._popup = value;
        this.$service.popup$.next(value);
    }
    get isReservation() {
        return this.mode.value === 1 || this.workplaceDisabled;
    }
    setMapHeight() {
        const body = document.querySelector('body').offsetHeight;
        this.mapHeight = body - HEIGHT_EXCEPT_MAP;
    }
    ngOnInit() {
        this.sub = this.resize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500)).subscribe((_e) => {
            this.setMapHeight();
        });
        this.sub = this.$service.currentFloor$.subscribe((data) => {
            this.currentFloorMap = data;
        });
        this.sub = this.$service.allFloorsInBuilding$.subscribe((values) => {
            this.dropdownSelect = Object.assign(Object.assign({}, this.dropdownSelect), { values });
        });
        this.sub = this.$service.selectedWorkplace$.subscribe((place) => {
            if (place) {
                this.workplaceId = place.id;
                this.isEwsReadOnly = place.isEwsReadOnly;
                const logicType = place.logicType;
                switch (logicType) {
                    case 'Workplace':
                        this.type = 'workplace';
                        break;
                    case 'ParkingLot':
                        this.type = 'parking';
                        break;
                    default:
                        this.type = 'appointment';
                        break;
                }
                this.workplaceDisabled = place.disabled;
                this.cdr.markForCheck();
            }
        });
        this.sub = this.$service.currentPlaceId$.subscribe(([place, marksR, mapR]) => {
            if (place && marksR && mapR) {
                this.visibleWorkplaceId = place.id;
                this.workplaceId = place.id;
                this.workplaceDisabled = true;
                this.cdr.markForCheck();
            }
        });
        this.sub = this.$service.userComplexData$.subscribe((data) => {
            if (data.floor) {
                this.$router.navigate(['/office', data.floor.id]).catch(console.error);
            }
        });
    }
    ngAfterViewInit() {
        this.setMapHeight();
    }
    ngOnDestroy() { }
    onHiddenMarksChange(hiddenMarksTypes) {
        if (this.mode.value === 1 && !hiddenMarksTypes.includes('Users')) {
            this.hideMark('Users');
            return;
        }
        this.hiddenMarksTypes = hiddenMarksTypes;
    }
    onAreaVisibilityChange(visible) {
        this.areasVisible = visible;
    }
    hideMark(markType) {
        if (!this.hiddenMarksTypes.includes(markType)) {
            this.hiddenMarksTypes = [...this.hiddenMarksTypes, markType];
        }
        else {
            this.hiddenMarksTypes = [...this.hiddenMarksTypes];
        }
    }
    filterValueChange(flag) {
        if (flag === 'time') {
            const updateDate = Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_5__["findDateRange"])(this.filter.date.value, this.filter.slider.value);
            this.filter.date.value = updateDate;
            this.$service.setDateFilterValue(updateDate);
        }
        if (flag === 'date') {
            if (this.filter.date.value.length === 2) {
                this.filter.slider.value = Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_5__["findSliderRange"])(this.filter.date.value);
                this.$service.setDateFilterValue(this.filter.date.value);
            }
        }
        this.cdr.markForCheck();
    }
    onSelectSearch(value) {
        if (value.avatarImageUrl !== this.search.beforeImg) {
            this.search.loading = true;
        }
        this.search.beforeImg = value.avatarImageUrl;
        this.$service.userSelected$.next(value);
        // this.$service.userWorkplace$.pipe(first()).subscribe((res) => {
        //   console.log(res);
        //   this.visibleWorkplaceId = res.id;
        //   this.cdr.markForCheck();
        // });
    }
    onLoadSearchAvatar() {
        this.search.loading = false;
    }
    changeMode(value) {
        if (value === 1) {
            this.$service.setDateFilterValue(Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_5__["nowRang"])());
            this.hideMark('Users');
        }
        if (value === 0) {
            this.$service.setDateFilterValue(this.filter.date.value);
            this.search.value = null;
            this.$service.userSelected$.next(null);
        }
    }
    reservationPlace(id) {
        if (this.type === 'workplace') {
            if (this.$service.isConfirmation(id)) {
                this.$service.confirmationModal(id);
            }
            else {
                this.$service.reservationWorkplace(id).then((res) => {
                    if (res.success) {
                        this.$notifications.success('Успешно', res.data.RESULT_SUCCESS);
                        this.$service.reload();
                    }
                    else {
                        this.$notifications.error('Ошибка', res.error.message);
                    }
                });
            }
        }
        else if (this.type === 'parking') {
            if (this.$service.isConfirmation(id)) {
                this.$service.confirmationModal(id);
            }
            else {
                this.$service.reservationParkingLot(id).then((res) => {
                    if (res.success) {
                        this.$notifications.success('Успешно', res.data.RESULT_SUCCESS);
                        this.$service.reload();
                    }
                    else {
                        this.$notifications.error('Ошибка', res.error.message);
                    }
                });
            }
        }
        else if (this.type === 'appointment') {
            this.$router.navigate(['reservations/appointment/workplace', id], {
                queryParams: { mode: 'day' },
            });
            // if (this.$service.isConfirmation(id)) {
            //   this.$service.confirmationModal(id);
            // } else {
            //   this.$service.reservationRoom(id).then((res) => {
            //     if (res.success) {
            //       res.data[0].RESULT_SUCCESS = `Переговорная комната успешно забронирована`;
            //       this.$notifications.success('Успешно', res.data[0].RESULT_SUCCESS);
            //       this.$service.reload();
            //     } else {
            //       this.$notifications.error('Ошибка', res.error.message);
            //     }
            //   });
            // }
        }
    }
    handleReservation(id) {
        if ((this.type === 'workplace' &&
            this.$service.currentWorkplace(id).labelIdPermanentAssignment > 0) ||
            (this.type === 'parking' &&
                this.$service.currentParkingLot(id).labelIdPermanentAssignment > 0)) {
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
                            this.reservationPlace(id);
                            this._modal.closeAll();
                        },
                    },
                ],
            });
        }
        else {
            this.reservationPlace(id);
        }
    }
    changeDropdownSelect(value) {
        this.$router.navigate(['/office', value.value]).catch(console.error);
        this.mode.value = 0;
    }
}
OfficesMapComponent.ɵfac = function OfficesMapComponent_Factory(t) { return new (t || OfficesMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_offices_offices_map_offices_map_service__WEBPACK_IMPORTED_MODULE_2__["OfficesMapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_map_map_service__WEBPACK_IMPORTED_MODULE_12__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"])); };
OfficesMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OfficesMapComponent, selectors: [["app-offices-map"]], viewQuery: function OfficesMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popup = _t.first);
    } }, inputs: { filter: "filter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_9__["ReservationMarksService"], _presentation_offices_offices_map_offices_map_service__WEBPACK_IMPORTED_MODULE_2__["OfficesMapService"]])], decls: 28, vars: 24, consts: [[1, "offices-map"], [1, "offices-map__top-controls", "user-select-none"], [1, "offices-map__dropdown-select", 3, "values", "value", "valueChange"], [1, "offices-map__mode"], [1, "offices-map__mode-label"], [3, "items", "value", "valueChange"], [1, "offices-map__map", 3, "img", "size", "loading", "marks", "centeredMarkId", "height", "hiddenMarksTypes", "areas", "areasVisible", "hiddenMarksChange", "areaVisibilityChange"], [1, "offices-map__bottom-controls", "light-fon"], [4, "ngTemplateOutlet"], ["popup", ""], ["filterTpl", ""], ["searchTpl", ""], ["suffixIconButtonTpl", ""], ["searchResultTemplateTpl", ""], ["searchResultTemplateLoadingTpl", ""], ["loadingIndicatorTpl", ""], [3, "type", "readOnly", "showPermanentAssignment", "workplaceId", "disabled", "calendarLink", "reservation"], [1, "offices-map__filter"], [1, "offices-map__filter-date"], [3, "ngModel", "format", "layout", "workHours", "autoUpdateDateTo", "autoUpdateDateToFullDay", "minDuration", "ngModelChange"], [1, "offices-map__filter-time"], ["nzRange", "", 1, "tooltip-blue", 3, "ngModel", "nzMin", "nzMax", "nzStep", "nzTipFormatter", "nzDisabled", "nzTooltipVisible", "nzMarks", "ngModelChange"], ["nzSearch", "", 3, "nzAddOnAfter"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "nzShowArrow", "nzFilterOption", "nzCustomTemplate", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "primary", "nzSearch", ""], ["nz-icon", "", "nzType", "search"], [1, "d-flex", "align-items-center"], [1, "offices-map__search-img", 3, "src", "alt", "load"], ["nzSimple", "", 1, "mr-10", 3, "nzIndicator"], ["nz-icon", "", "nzType", "loading"]], template: function OfficesMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function OfficesMapComponent_Template_app_dropdown_select_valueChange_2_listener($event) { return ctx.dropdownSelect.value = $event; })("valueChange", function OfficesMapComponent_Template_app_dropdown_select_valueChange_2_listener($event) { return ctx.changeDropdownSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-multi-switcher", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function OfficesMapComponent_Template_app_multi_switcher_valueChange_7_listener($event) { return ctx.mode.value = $event; })("valueChange", function OfficesMapComponent_Template_app_multi_switcher_valueChange_7_listener($event) { return ctx.changeMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hiddenMarksChange", function OfficesMapComponent_Template_app_map_hiddenMarksChange_8_listener($event) { return ctx.onHiddenMarksChange($event); })("areaVisibilityChange", function OfficesMapComponent_Template_app_map_areaVisibilityChange_8_listener($event) { return ctx.onAreaVisibilityChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OfficesMapComponent_ng_container_13_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, OfficesMapComponent_ng_template_14_Template, 1, 6, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OfficesMapComponent_ng_template_16_Template, 5, 15, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OfficesMapComponent_ng_template_18_Template, 4, 9, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OfficesMapComponent_ng_template_20_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OfficesMapComponent_ng_template_22_Template, 7, 10, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OfficesMapComponent_ng_template_24_Template, 4, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, OfficesMapComponent_ng_template_26_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.dropdownSelect.values)("value", ctx.dropdownSelect.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modeLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.mode.items)("value", ctx.mode.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("img", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 15, ctx.image$))("size", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](21, _c1, ctx.currentFloorMap == null ? null : ctx.currentFloorMap.mapWidth, ctx.currentFloorMap == null ? null : ctx.currentFloorMap.mapHeight))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 17, ctx.loading$))("marks", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 19, ctx.marks$))("centeredMarkId", ctx.visibleWorkplaceId)("height", ctx.mapHeight)("hiddenMarksTypes", ctx.hiddenMarksTypes)("areas", ctx.areas)("areasVisible", ctx.areasVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.mode.value ? _r5 : _r3);
    } }, directives: [_base_dropdown_select_dropdown_select_component__WEBPACK_IMPORTED_MODULE_15__["DropdownSelectComponent"], _base_multi_switcher_multi_switcher_component__WEBPACK_IMPORTED_MODULE_16__["MultiSwitcherComponent"], _base_map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _composite_workplace_card_workplace_card_component__WEBPACK_IMPORTED_MODULE_19__["WorkplaceCardComponent"], _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_20__["FilterDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgModel"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_22__["NzSliderComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__["NzInputGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__["NzOptionComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_29__["NzSpinComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_30__["ImageBlobPipe"]], styles: [".offices-map__filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.offices-map__filter-date[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  max-width: 400px;\n}\n.offices-map__filter-time[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  flex: 1 1 auto;\n}\n.offices-map__bottom-controls[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.offices-map__bottom-controls[_ngcontent-%COMP%]     .ant-slider.ant-slider-with-marks {\n  margin-bottom: 8px;\n}\n.offices-map__mode[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.offices-map__mode-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  padding-right: 15px;\n}\n.offices-map__search-img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  object-fit: cover;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.offices-map__dropdown-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 27px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.offices-map__top-controls[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 24px 32px;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZXMtbWFwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWhCQztFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWtCSjtBQWpCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQW1CTjtBQWpCSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQW1CTjtBQWRFO0VBQ0Usa0JBQUE7QUFnQko7QUFqQkU7RUFJTSxrQkFBQTtBQWdCUjtBQVZFO0VBQ0UsaUJBQUE7QUFZSjtBQVhJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFhTjtBQVZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFZSjtBQVZFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBWUo7QUFWRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVlKIiwiZmlsZSI6Im9mZmljZXMtbWFwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvdGhlbWUvb3ZlcnJpZGVcIjtcbi5vZmZpY2VzLW1hcCB7XG4gICZfX2ZpbHRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgJi1kYXRlIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB9XG4gICAgJi10aW1lIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgfVxuICAmX19tYXAge1xuICB9XG4gICZfX2JvdHRvbS1jb250cm9scyB7XG4gICAgcGFkZGluZzogMThweCAyMHB4O1xuICAgIDo6bmctZGVlcCB7XG4gICAgICAuYW50LXNsaWRlci5hbnQtc2xpZGVyLXdpdGgtbWFya3Mge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2ljb25zIHtcbiAgfVxuICAmX19tb2RlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAmLWxhYmVsIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgfVxuICB9XG4gICZfX3NlYXJjaC1pbWcge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbiAgJl9fZHJvcGRvd24tc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyN3B4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbiAgJl9fdG9wLWNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_7__["MarkForCheck"]
], OfficesMapComponent.prototype, "_dropdownSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscriptions"])()
], OfficesMapComponent.prototype, "sub", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_7__["MarkForCheck"]
], OfficesMapComponent.prototype, "mapHeight", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfficesMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-offices-map',
                templateUrl: './offices-map.component.html',
                styleUrls: ['./offices-map.component.less'],
                providers: [_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_9__["ReservationMarksService"], _presentation_offices_offices_map_offices_map_service__WEBPACK_IMPORTED_MODULE_2__["OfficesMapService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _presentation_offices_offices_map_offices_map_service__WEBPACK_IMPORTED_MODULE_2__["OfficesMapService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _core_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"] }, { type: _base_map_map_service__WEBPACK_IMPORTED_MODULE_12__["MapService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__["NzModalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"] }]; }, { filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], popup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['popup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], _dropdownSelect: [], sub: [], mapHeight: [] }); })();


/***/ }),

/***/ "CMcv":
/*!**************************************************************!*\
  !*** ./src/app/base/multi-switcher/multi-switcher.module.ts ***!
  \**************************************************************/
/*! exports provided: MultiSwitcherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSwitcherModule", function() { return MultiSwitcherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _multi_switcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-switcher.component */ "YEDM");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");








class MultiSwitcherModule {
}
MultiSwitcherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiSwitcherModule });
MultiSwitcherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiSwitcherModule_Factory(t) { return new (t || MultiSwitcherModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiSwitcherModule, { declarations: [_multi_switcher_component__WEBPACK_IMPORTED_MODULE_2__["MultiSwitcherComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"]], exports: [_multi_switcher_component__WEBPACK_IMPORTED_MODULE_2__["MultiSwitcherComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSwitcherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_multi_switcher_component__WEBPACK_IMPORTED_MODULE_2__["MultiSwitcherComponent"]],
                exports: [
                    _multi_switcher_component__WEBPACK_IMPORTED_MODULE_2__["MultiSwitcherComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "W+g7":
/*!*************************************************************************!*\
  !*** ./src/app/presentation/offices/offices-map/offices-map.service.ts ***!
  \*************************************************************************/
/*! exports provided: OfficesMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesMapService", function() { return OfficesMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.utils */ "7RLK");
/* harmony import */ var _presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/utils/reservation */ "Y+7/");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_app_core_services_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/core/services/reservation-marks.utils */ "d0mQ");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");
/* harmony import */ var _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/images/services/image-blob.service */ "AgCt");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/core/services/reservation-marks.service */ "+IbG");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _base_map_map_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @base/map/map.service */ "Bnie");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _core_services_notifications_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/services/notifications.service */ "/VmJ");





















class OfficesMapService {
    constructor($measurements, $date, $dictionary, $userOffices, $route, $settings, $images, $api, $reservationMarks, $user, datePipe, $map, $modal, $notifications) {
        this.$measurements = $measurements;
        this.$date = $date;
        this.$dictionary = $dictionary;
        this.$userOffices = $userOffices;
        this.$route = $route;
        this.$settings = $settings;
        this.$images = $images;
        this.$api = $api;
        this.$reservationMarks = $reservationMarks;
        this.$user = $user;
        this.datePipe = datePipe;
        this.$map = $map;
        this.$modal = $modal;
        this.$notifications = $notifications;
        this._floorWorkplaceReservationSocialDistanceCheck = null;
        this._workplaceReservations = null;
        this._workplaces = null;
        this._parkingLots = null;
        this._rooms = null;
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this._popup = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._reload = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this._userSelected = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.reload();
    }
    reload() {
        this.$reservationMarks.reload();
    }
    get filter() {
        const minReservationDuration = this.$settings.getSettingByName('workplaceReservationDurationMinSeconds') * 1000;
        const workHours = [
            this.$settings.getSettingByName('workplaceReservationBeginHourDefault'),
            this.$settings.getSettingByName('workplaceReservationEndHourDefault'),
        ];
        const [sliderMin, sliderMax] = Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__["getSliderLimitValue"])(workHours);
        const dates = Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__["getInitDate"])(workHours, minReservationDuration);
        const marks = Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__["breakdownDate"])(Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__["workDateRange"])(workHours), minReservationDuration).reduce((acc, val) => {
            acc[val] = '';
            return acc;
        }, {});
        return {
            date: {
                value: dates,
                format: this.$measurements.getMeasurementByName('dateTime'),
                workHours,
            },
            slider: {
                value: Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__["findSliderRange"])(dates),
                step: minReservationDuration,
                min: sliderMin,
                max: sliderMax,
                tipFormatter: (value) => this.$date.transform(new Date(value), 'HH:mm'),
                disabled: false,
                tooltipVisible: 'default',
                marks,
            },
        };
    }
    get switcher() {
        return {
            value: 0,
            items: [
                {
                    icon: 'history',
                    tooltip: 'Бронирование мест',
                },
                {
                    icon: 'user',
                    tooltip: 'Поиск пользователя',
                },
            ],
        };
    }
    get currentFloor$() {
        return this.$route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            const id = Number(params.get('floorId'));
            return this.$dictionary
                .getDictionaryItemByKey('floorMaps', id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((floor) => (this._floorWorkplaceReservationSocialDistanceCheck = floor === null || floor === void 0 ? void 0 : floor.workplaceReservationSocialDistanceCheck)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.$map.marksReady$.next(false)));
        }));
    }
    get currentPlaceId$() {
        return this.$route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            const id = Number(params.get('placeId'));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                this.$dictionary.getDictionaryItemByKey('workplaces', id),
                this.$map.marksReady$,
                this.$map.mapReady$,
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500));
        }));
    }
    get allFloorsInBuilding$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.currentFloor$, this.floors$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([currentFloorMap, floorMaps]) => {
            const buildingId = currentFloorMap === null || currentFloorMap === void 0 ? void 0 : currentFloorMap.buildingId;
            return floorMaps
                .filter((floor) => floor.buildingId === buildingId)
                .map((floor) => {
                return {
                    label: floor.name,
                    value: floor.id,
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
    }
    get mapImageUrl$() {
        return this.currentFloor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this._loading.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((floorMap) => {
            return floorMap
                ? this.$images.getImageBlob(floorMap.mapImageUrl)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    get loading$() {
        return this._loading.asObservable();
    }
    getFilterValue() {
        return this.$reservationMarks.getFilterValue();
    }
    setDateFilterValue(range) {
        this.$reservationMarks.setDateFilterValue(range);
    }
    get filterValueOptimize$() {
        return this._filter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500));
    }
    get parkingLots$() {
        return this.$dictionary
            .getDictionary('parkingLots')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((parkingLots) => (this._parkingLots = parkingLots)));
    }
    get workplaces$() {
        return this.$dictionary
            .getDictionary('workplaces')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((workplaces) => (this._workplaces = workplaces)));
    }
    get rooms$() {
        return this.$dictionary
            .getDictionary('rooms')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((rooms) => (this._rooms = rooms)));
    }
    get floors$() {
        return this.$userOffices.getMyOrderedFloors();
    }
    get mapMarks$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.$reservationMarks.mapMarks$,
            this.userComplexData$,
            this.workplaces$,
            this.rooms$,
            this.parkingLots$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([marks, { user, workplace }]) => {
            const userImage = {
                [(workplace === null || workplace === void 0 ? void 0 : workplace.id) || 0]: this.$images.getImageBlob((user === null || user === void 0 ? void 0 : user.avatarImageUrl) || _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_USER_AVATAR"]),
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object(_src_app_core_services_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_6__["forkJoinObjectEmpty"])(userImage)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((userImage) => {
                if (user && workplace) {
                    marks.push(Object(_src_app_core_services_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_6__["generateUserMark"])(workplace, user, userImage[workplace.id]));
                }
                return marks;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this._loading.next(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
    }
    get popup$() {
        return this._popup;
    }
    get mapMarksWithPopup$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.popup$, this.mapMarks$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([templateRef, marks]) => {
            return marks.map((_m) => {
                if (_m.logicType === 'Workplace' || _m.logicType === 'Room' || _m.logicType === 'ParkingLot') {
                    _m.popup = templateRef;
                }
                return _m;
            });
        }));
    }
    get selectedWorkplace$() {
        return this.$map.mark$;
    }
    // TODO shareReplay не помогает и запрос летит 6 раз (withLatestFrom)
    get userReservation$() {
        return this.userSelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => {
            if (user) {
                return this.$api
                    .getWorkplaceReservations({
                    labelId: user.id,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => ((data === null || data === void 0 ? void 0 : data.length) > 0 ? data[0] : null)));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
    }
    get userWorkplace$() {
        return this.userReservation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((reservation) => {
            if (reservation) {
                return this.workplaces$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((workplaces) => workplaces.find((w) => reservation.workplaceId === w.id)));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
    }
    get userFloor$() {
        return this.userWorkplace$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((workplace) => {
            if (workplace) {
                return this.floors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((floors) => floors.find((f) => f.id === workplace.floorMapId)));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    get userSelected$() {
        return this._userSelected;
    }
    get userComplexData$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.userSelected$, this.userReservation$, this.userWorkplace$, this.userFloor$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([user, reservation, workplace, floor]) => ({
            user,
            reservation,
            workplace,
            floor,
        })));
    }
    get users$() {
        return this.$dictionary.getDictionary('labels');
    }
    get currentCustomObject$() {
        return this.currentFloor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((floor) => {
            if (!floor) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
            return this.$dictionary
                .getDictionary('customObjects')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((objs) => objs.filter((obj) => obj.floorMapId === (floor === null || floor === void 0 ? void 0 : floor.id))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((data) => Boolean(data)));
    }
    get currentUsersWithWorkplace$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.currentFloor$, this.filterValueOptimize$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([floor, dates]) => {
            if (floor && dates) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
                    this.$dictionary.getDictionary('labels'),
                    this.$api.getWorkplaceReservations({
                        floorMapId: floor.id,
                        dateTimeFrom: this._getApiDate(dates[0]),
                        dateTimeTo: this._getApiDate(dates[1]),
                    }),
                    this.$dictionary.getDictionary('workplaces'),
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([users, reservations, workplaces]) => {
                    return reservations.map((r) => ({
                        user: users.find((u) => u.id === r.labelId),
                        workplace: workplaces.find((w) => w.id === r.workplaceId),
                    }));
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
        }));
    }
    get areas$() {
        return this.currentFloor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((floor) => this.$dictionary
            .getDictionary('areas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((areas) => areas.filter((a) => a.floorMapId === floor.id)))));
    }
    currentRoom(id) {
        return this._rooms.find((w) => w.id === id);
    }
    currentWorkplace(id) {
        return this._workplaces.find((w) => w.id === id);
    }
    currentParkingLot(id) {
        return this._parkingLots.find((p) => p.id === id);
    }
    isConfirmation(workplaceId) {
        if (this._floorWorkplaceReservationSocialDistanceCheck === 'CONFIRMATION') {
            const currentWorkplace = this._workplaces.find((w) => w.id === workplaceId);
            return Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["checkReservedNeighbors"])(currentWorkplace, this._workplaceReservations);
        }
        else {
            return false;
        }
    }
    confirmationModal(id) {
        const nzOnOk = () => {
            this.reservationWorkplace(id).then((res) => {
                if (res.success) {
                    this.$notifications.success('Успешно', res.data.RESULT_SUCCESS);
                    this.reload();
                }
                else {
                    this.$notifications.error('Ошибка', res.error.message);
                }
            });
        };
        this.$modal.confirm(Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["getDistanceCheckConfirmModal"])(nzOnOk));
    }
    _markDistributionImage(reservation, workplace) {
        let img = workplace.imageFreeUrl;
        if (workplace.disabled) {
            img = workplace.imageDisabledUrl;
        }
        if (reservation) {
            if (reservation.labelId === this.$user.info.id) {
                img =
                    reservation.status === 'CONFIRMED'
                        ? workplace.imageReservedByMeUrl
                        : workplace.imageReservedByMeNotConfirmedUrl;
            }
            else {
                img = workplace.imageReservedByUserUrl;
            }
        }
        return img || _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MAP_POINT"];
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
    dropdownSelect(value = { label: 0, value: 0 }) {
        return {
            values: [],
            value,
        };
    }
    getImageBlob(url) {
        return this.$images.getImageBlob(url);
    }
    reservationParkingLot(id) {
        const [startDate, endDate] = this.getFilterValue();
        const params = {
            parkingLotId: id,
            labelId: this.$user.info.id,
            dateTimeFrom: this._getApiDate(startDate),
            dateTimeTo: this._getApiDate(endDate),
            tokenUUID: this.$user.info.tokenUUID,
        };
        return this.$api.putParkingLotReservation(params).toPromise();
    }
    reservationWorkplace(id) {
        const [startDate, endDate] = this.getFilterValue();
        const params = {
            workplaceId: id,
            labelId: this.$user.info.id,
            dateTimeFrom: this._getApiDate(startDate),
            dateTimeTo: this._getApiDate(endDate),
            tokenUUID: this.$user.info.tokenUUID,
        };
        return this.$api.putWorkplaceReservation(params).toPromise();
    }
    reservationRoom(id) {
        const [startDate, endDate] = this.getFilterValue();
        const reservations = [
            {
                appointmentRoomsList: [id],
                appointmentDateFrom: this._getApiDate(startDate),
                appointmentDateTo: this._getApiDate(endDate),
                recordCode: 'main',
                labelId: this.$user.info.id,
            },
        ];
        let params = { appointments: reservations };
        return this.$api.putReservationsByType('appointment', params).toPromise();
    }
}
OfficesMapService.ɵfac = function OfficesMapService_Factory(t) { return new (t || OfficesMapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_10__["UserOfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_12__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_13__["ImageBlobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_14__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_15__["ReservationMarksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_map_map_service__WEBPACK_IMPORTED_MODULE_17__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_notifications_service__WEBPACK_IMPORTED_MODULE_19__["NotificationsService"])); };
OfficesMapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OfficesMapService, factory: OfficesMapService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficesMapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_9__["DictionariesService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_10__["UserOfficesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }, { type: _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_12__["SettingsService"] }, { type: _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_13__["ImageBlobService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_14__["ReservationsApiService"] }, { type: _src_app_core_services_reservation_marks_service__WEBPACK_IMPORTED_MODULE_15__["ReservationMarksService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }, { type: _base_map_map_service__WEBPACK_IMPORTED_MODULE_17__["MapService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalService"] }, { type: _core_services_notifications_service__WEBPACK_IMPORTED_MODULE_19__["NotificationsService"] }]; }, null); })();


/***/ }),

/***/ "YEDM":
/*!*****************************************************************!*\
  !*** ./src/app/base/multi-switcher/multi-switcher.component.ts ***!
  \*****************************************************************/
/*! exports provided: MultiSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSwitcherComponent", function() { return MultiSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







function MultiSwitcherComponent_label_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon);
} }
const _c0 = function (a0) { return { "margin-right": a0 }; };
function MultiSwitcherComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSwitcherComponent_label_1_i_2_Template, 1, 1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const last_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](last_r3 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.gutter + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r1.value || i_r2)("nz-tooltip", item_r1.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon);
} }
class MultiSwitcherComponent {
    constructor() {
        this.gutter = 0;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    change(value) {
        this.valueChange.emit(value);
    }
}
MultiSwitcherComponent.ɵfac = function MultiSwitcherComponent_Factory(t) { return new (t || MultiSwitcherComponent)(); };
MultiSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiSwitcherComponent, selectors: [["app-multi-switcher"]], inputs: { gutter: "gutter", items: "items", value: "value" }, outputs: { valueChange: "valueChange" }, decls: 2, vars: 2, consts: [["nzButtonStyle", "solid", 1, "app-multi-switcher", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", 3, "nzValue", "style", "nz-tooltip", 4, "ngFor", "ngForOf"], ["nz-radio-button", "", 3, "nzValue", "nz-tooltip"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function MultiSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiSwitcherComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSwitcherComponent_label_1_Template, 3, 8, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioButtonDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aS1zd2l0Y2hlci5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSwitcherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-switcher',
                templateUrl: './multi-switcher.component.html',
                styleUrls: ['./multi-switcher.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { gutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "l/C8":
/*!************************************************************************!*\
  !*** ./src/app/presentation/offices/offices-map/offices-map.module.ts ***!
  \************************************************************************/
/*! exports provided: OfficesMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesMapModule", function() { return OfficesMapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _offices_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offices-map.component */ "0rSx");
/* harmony import */ var _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/map/map.module */ "k+QC");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @base/dropdown-select/dropdown-select.module */ "K6hh");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @composite/workplace-card/workplace-card.module */ "1Cno");
/* harmony import */ var _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @base/filters/filters.module */ "9jWK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _base_multi_switcher_multi_switcher_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @base/multi-switcher/multi-switcher.module */ "CMcv");
/* harmony import */ var _presentation_offices_offices_map_offices_map_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map-routing.module */ "wjHV");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");























class OfficesMapModule {
}
OfficesMapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OfficesMapModule });
OfficesMapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OfficesMapModule_Factory(t) { return new (t || OfficesMapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
            _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_8__["DropdownSelectModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__["NzSliderModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__["NzToolTipModule"],
            _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_13__["WorkplaceCardModule"],
            _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_14__["FiltersModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzSelectModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_18__["NzSpinModule"],
            _base_multi_switcher_multi_switcher_module__WEBPACK_IMPORTED_MODULE_19__["MultiSwitcherModule"],
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_21__["ImagesModule"],
            _presentation_offices_offices_map_offices_map_routing_module__WEBPACK_IMPORTED_MODULE_20__["OfficesMapRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficesMapModule, { declarations: [_offices_map_component__WEBPACK_IMPORTED_MODULE_2__["OfficesMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
        _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_8__["DropdownSelectModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__["NzSliderModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__["NzToolTipModule"],
        _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_13__["WorkplaceCardModule"],
        _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_14__["FiltersModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzSelectModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_18__["NzSpinModule"],
        _base_multi_switcher_multi_switcher_module__WEBPACK_IMPORTED_MODULE_19__["MultiSwitcherModule"],
        _shared_images_images_module__WEBPACK_IMPORTED_MODULE_21__["ImagesModule"],
        _presentation_offices_offices_map_offices_map_routing_module__WEBPACK_IMPORTED_MODULE_20__["OfficesMapRoutingModule"]], exports: [_offices_map_component__WEBPACK_IMPORTED_MODULE_2__["OfficesMapComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficesMapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_offices_map_component__WEBPACK_IMPORTED_MODULE_2__["OfficesMapComponent"]],
                exports: [_offices_map_component__WEBPACK_IMPORTED_MODULE_2__["OfficesMapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
                    _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_8__["DropdownSelectModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__["NzSliderModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__["NzToolTipModule"],
                    _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_13__["WorkplaceCardModule"],
                    _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_14__["FiltersModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__["NzSelectModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_18__["NzSpinModule"],
                    _base_multi_switcher_multi_switcher_module__WEBPACK_IMPORTED_MODULE_19__["MultiSwitcherModule"],
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_21__["ImagesModule"],
                    _presentation_offices_offices_map_offices_map_routing_module__WEBPACK_IMPORTED_MODULE_20__["OfficesMapRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "wjHV":
/*!********************************************************************************!*\
  !*** ./src/app/presentation/offices/offices-map/offices-map-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: OfficesMapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesMapRoutingModule", function() { return OfficesMapRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_offices_offices_map_offices_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.component */ "0rSx");





const routes = [
    {
        path: '',
        component: _presentation_offices_offices_map_offices_map_component__WEBPACK_IMPORTED_MODULE_2__["OfficesMapComponent"],
        data: {
            title: 'Карта этажа офиса'
        }
    },
    {
        path: ':placeId',
        component: _presentation_offices_offices_map_offices_map_component__WEBPACK_IMPORTED_MODULE_2__["OfficesMapComponent"],
        data: {
            title: 'Карта этажа офиса, место'
        }
    }
];
class OfficesMapRoutingModule {
}
OfficesMapRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OfficesMapRoutingModule });
OfficesMapRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OfficesMapRoutingModule_Factory(t) { return new (t || OfficesMapRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficesMapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficesMapRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=offices-map-offices-map-module.js.map