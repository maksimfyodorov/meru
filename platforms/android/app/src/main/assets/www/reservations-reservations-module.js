(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservations-reservations-module"],{

/***/ "+Fe1":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/list/list-filters/list-filter-common/list-filter-common.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ListFilterCommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterCommonComponent", function() { return ListFilterCommonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.utils */ "ZgfZ");
/* harmony import */ var _list_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-filter.service */ "CRFw");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @base/filters/filter-checkbox-group/filter-checkbox-group.component */ "FHVQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/filters/filter-checkbox/filter-checkbox.component */ "JPRT");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");
/* harmony import */ var _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../base/renderer/components/status/status.component */ "5YXH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../core/pipes/dictionary.pipe */ "Dz+d");

















function ListFilterCommonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function ListFilterCommonComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function ListFilterCommonComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function ListFilterCommonComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, title_r7)), " ");
} }
function ListFilterCommonComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-status-renderer", 8);
} if (rf & 2) {
    const color_r8 = ctx.color;
    const label_r9 = ctx.label;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", color_r8)("value", label_r9)("needConvert", false);
} }
const _c0 = function () { return { $implicit: "Buildings/Floors" }; };
const _c1 = function () { return { $implicit: "Statuses" }; };
const _c2 = function () { return { $implicit: "Period" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class ListFilterCommonComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"] {
    constructor(injector, $listFilter) {
        super(injector);
        this.injector = injector;
        this.$listFilter = $listFilter;
        this.timePickerOptions = _presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_4__["TIME_PICKER_OPTIONS"];
        this.filterFloorsBy = null;
    }
    updateDateTime(dateTime) {
        this.dateTimeFromControl.setValue(dateTime[0]);
        this.dateTimeToControl.setValue(dateTime[1]);
    }
    ngOnInit() {
        this.assignControls();
        this.getFieldOptions();
    }
    ngOnDestroy() { }
    getFieldOptions() {
        this.statuses = this.$listFilter.getStatuses$('statuses');
        this.dateFormat = this.$listFilter.dateFormat$;
        this.floorMapsGroups = this.$listFilter.getFloorMapsGroups$('floorMapIds', this.filterFloorsBy);
    }
}
ListFilterCommonComponent.ɵfac = function ListFilterCommonComponent_Factory(t) { return new (t || ListFilterCommonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_list_filter_service__WEBPACK_IMPORTED_MODULE_5__["ListFilterService"])); };
ListFilterCommonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListFilterCommonComponent, selectors: [["app-list-filter-common"], ["", "app-list-filter-common", ""]], hostVars: 2, hostBindings: function ListFilterCommonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("app-reservations-filter-common", true);
    } }, inputs: { filterFloorsBy: "filterFloorsBy" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 21, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formControl", "groups", "maxHeight"], [1, "app-reservations-filter-item"], [3, "formControl", "options", "label"], [3, "ngModel", "layout", "format", "ngModelChange"], ["titleTpl", ""], ["filterStatusTpl", ""], [1, "app-reservations-filter-item__title"], [3, "color", "value", "needConvert"]], template: function ListFilterCommonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListFilterCommonComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-filter-checkbox-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListFilterCommonComponent_ng_container_5_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-filter-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ListFilterCommonComponent_ng_container_9_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-filter-date", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ListFilterCommonComponent_Template_app_filter_date_ngModelChange_10_listener($event) { return ctx.updateDateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListFilterCommonComponent_ng_template_11_Template, 4, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListFilterCommonComponent_ng_template_13_Template, 1, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.floorMapIdsControl)("groups", ctx.floorMapsGroups)("maxHeight", "320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.statusesControl)("options", ctx.statuses)("label", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c3, ctx.dateTimeFromControl.value, ctx.dateTimeToControl.value))("layout", "vertical")("format", ctx.dateFormat);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_9__["FilterCheckboxGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["FilterCheckboxComponent"], _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_12__["FilterDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_13__["StatusRendererComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_15__["DictionaryPipe"]], styles: ["[_nghost-%COMP%]     perfect-scrollbar {\n  height: 100%;\n}\n[_nghost-%COMP%]     .ant-picker {\n  width: 100%;\n}\n.app-reservations-filter-status[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZmlsdGVyLWNvbW1vbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUFBSjtBQUZBO0VBTUksV0FBQTtBQURKO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSkoiLCJmaWxlIjoibGlzdC1maWx0ZXItY29tbW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICA6Om5nLWRlZXAgcGVyZmVjdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIDo6bmctZGVlcCAuYW50LXBpY2tlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmFwcC1yZXNlcnZhdGlvbnMtZmlsdGVyIHtcbiAgJi1zdGF0dXMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgJl9faW5kaWNhdG9yIHtcblxuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
], ListFilterCommonComponent.prototype, "statuses", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
], ListFilterCommonComponent.prototype, "floorMapsGroups", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
], ListFilterCommonComponent.prototype, "dateFormat", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListFilterCommonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list-filter-common, [app-list-filter-common]',
                templateUrl: './list-filter-common.component.html',
                styleUrls: ['./list-filter-common.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.app-reservations-filter-common]': `true`,
                },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _list_filter_service__WEBPACK_IMPORTED_MODULE_5__["ListFilterService"] }]; }, { statuses: [], floorMapsGroups: [], dateFormat: [], filterFloorsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "0wZr":
/*!**********************************************************************!*\
  !*** ./src/app/presentation/reservations/reservations.dictionary.ts ***!
  \**********************************************************************/
/*! exports provided: ReservationsDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsDictionary", function() { return ReservationsDictionary; });
var ReservationsDictionary;
(function (ReservationsDictionary) {
    ReservationsDictionary["AllBuildings"] = "All buildings";
    ReservationsDictionary["AllFloors"] = "All floors";
    ReservationsDictionary["AllStatuses"] = "All statuses";
    ReservationsDictionary["BookWorkPlace"] = "Book workplace";
    ReservationsDictionary["ErrorLoadingReservationsList"] = "Error loading reservations list";
    ReservationsDictionary["ErrorLoadingReservationsListData"] = "Error loading reservations list data";
    ReservationsDictionary["ErrorLoadingReservationsListMeta"] = "Error loading reservations list metadata";
    ReservationsDictionary["LoadReservationsListFailed"] = "Load reservations list failed";
    ReservationsDictionary["MyWorkplaceReservations"] = "My workplace reservations";
    ReservationsDictionary["ReloadReservations"] = "Reload reservations";
})(ReservationsDictionary || (ReservationsDictionary = {}));


/***/ }),

/***/ "1PZD":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/list/list-filters/list-filter-appointment/list-filter-appointment.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ListFilterAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterAppointmentComponent", function() { return ListFilterAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.service */ "CRFw");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @base/filters/filter-checkbox-group/filter-checkbox-group.component */ "FHVQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @base/filters/filter-checkbox/filter-checkbox.component */ "JPRT");
/* harmony import */ var _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../base/renderer/components/status/status.component */ "5YXH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../core/pipes/dictionary.pipe */ "Dz+d");















function ListFilterAppointmentComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function ListFilterAppointmentComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function ListFilterAppointmentComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, title_r6)), " ");
} }
function ListFilterAppointmentComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-status-renderer", 6);
} if (rf & 2) {
    const color_r7 = ctx.color;
    const label_r8 = ctx.label;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", color_r7)("value", label_r8)("needConvert", false);
} }
const _c0 = function () { return { $implicit: "Buildings/Rooms" }; };
const _c1 = function () { return { $implicit: "Members" }; };
const _c2 = function () { return []; };
class ListFilterAppointmentComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"] {
    constructor(injector, $listFilter) {
        super(injector);
        this.injector = injector;
        this.$listFilter = $listFilter;
    }
    ngOnInit() {
        this.assignControls();
        this.getFieldOptions();
    }
    getFieldOptions() {
        this.labels = this.$listFilter.getLabels$('requestAppointmentLabelIds');
        this.roomsGroups = this.$listFilter.getRoomsGroups$('requestAppointmentRoomIds');
    }
}
ListFilterAppointmentComponent.ɵfac = function ListFilterAppointmentComponent_Factory(t) { return new (t || ListFilterAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_4__["ListFilterService"])); };
ListFilterAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListFilterAppointmentComponent, selectors: [["app-list-filter-appointment"], ["", "app-list-filter-appointment", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 15, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formControl", "groups", "maxHeight"], [3, "formControl", "options", "allowSearch", "maxHeight", "placeholder"], ["titleTpl", ""], ["filterStatusTpl", ""], [1, "app-reservations-filter-item__title"], [3, "color", "value", "needConvert"]], template: function ListFilterAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListFilterAppointmentComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-filter-checkbox-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListFilterAppointmentComponent_ng_container_5_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-filter-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListFilterAppointmentComponent_ng_template_8_Template, 4, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ListFilterAppointmentComponent_ng_template_10_Template, 1, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.requestAppointmentRoomIdsControl)("groups", ctx.roomsGroups)("maxHeight", "320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.requestAppointmentLabelIdsControl)("options", ctx.labels || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c2))("allowSearch", true)("maxHeight", "240px")("placeholder", "EnterYourName");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormControlComponent"], _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_8__["FilterCheckboxGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"], _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_10__["FilterCheckboxComponent"], _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_11__["StatusRendererComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_13__["DictionaryPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWZpbHRlci1hcHBvaW50bWVudC5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
], ListFilterAppointmentComponent.prototype, "roomsGroups", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
], ListFilterAppointmentComponent.prototype, "labels", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListFilterAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list-filter-appointment, [app-list-filter-appointment]',
                templateUrl: './list-filter-appointment.component.html',
                styleUrls: ['./list-filter-appointment.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_4__["ListFilterService"] }]; }, { roomsGroups: [], labels: [] }); })();


/***/ }),

/***/ "Bov3":
/*!***********************************************************************!*\
  !*** ./src/app/presentation/reservations/resolvers/title.resolver.ts ***!
  \***********************************************************************/
/*! exports provided: TitleResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleResolver", function() { return TitleResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TitleResolver {
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    resolve(route, state) {
        const { type } = route.params;
        return this._translateService.get(type);
    }
}
TitleResolver.ɵfac = function TitleResolver_Factory(t) { return new (t || TitleResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TitleResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TitleResolver, factory: TitleResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "CRFw":
/*!***********************************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/list/list-filters/list-filter.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: ListFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterService", function() { return ListFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.utils */ "ZgfZ");
/* harmony import */ var _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/filters/filters/filter.service */ "UCJT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");












class ListFilterService extends _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] {
    constructor(injector, formBuilder, $dictionaries, $statuses, $measurements, $buildings) {
        super(injector);
        this.injector = injector;
        this.formBuilder = formBuilder;
        this.$dictionaries = $dictionaries;
        this.$statuses = $statuses;
        this.$measurements = $measurements;
        this.$buildings = $buildings;
        this._formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    get formGroup() {
        return this._formGroup;
    }
    get dateFormat$() {
        return this.$measurements.getMeasurementByName$('shortDateTime');
    }
    getStatuses$(statusesControlName, excludeStatuses = []) {
        return this.$statuses.statuses$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((statuses) => Object(_presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__["mapStatusesOptions"])(statuses, excludeStatuses, this.getFormControlByName(statusesControlName))));
    }
    getLabels$(labelIdsControlName) {
        return this.getDictionaryByName('labels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((labels) => Object(_presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__["mapLabelsOptions"])(labels, this.getFormControlByName(labelIdsControlName))));
    }
    getFloorMapsGroups$(floorMapsIdsControlName, filterBy = null) {
        let buildingWithFloorMaps$ = this.$buildings.allBuildingsWithFloorMaps$;
        switch (filterBy) {
            case 'parkingLots':
                buildingWithFloorMaps$ = this.$buildings.parkingLotsBuildingsWithFloorMaps$;
                break;
            case 'workplaces':
                buildingWithFloorMaps$ = this.$buildings.workplacesBuildingsWithFloorMaps$;
                break;
            case 'rooms':
                buildingWithFloorMaps$ = this.$buildings.roomsBuildingsWithFloorMaps$;
                break;
        }
        return buildingWithFloorMaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([buildings, floorMaps]) => Object(_presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__["mapFloorMapsOptions"])(floorMaps, buildings, this.getFormControlByName(floorMapsIdsControlName))));
    }
    getRoomsGroups$(roomsIdsControlName) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.$buildings.roomsBuildingsWithFloorMaps$,
            this.getDictionaryByName('rooms'),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([[buildings, floorMaps], rooms]) => Object(_presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__["mapRoomGroups"])(buildings, floorMaps, rooms, this.getFormControlByName(roomsIdsControlName))));
    }
    getRooms$(roomsIdsControlName, roomIdsControlName) {
        return this
            .getFormControlByName(roomsIdsControlName)
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((floorMapIds) => this.getDictionaryByName('rooms').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(rooms => Object(_presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__["mapRoomsOptions"])(rooms, floorMapIds, this.getFormControlByName(roomIdsControlName))))));
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
    getDictionaryByName(name) {
        return this.$dictionaries.getDictionary(name);
    }
    clearFormGroup() {
        Object
            .keys(this._formGroup.controls)
            .forEach(key => this._formGroup.removeControl(key));
    }
    addFormGroupControls(type) {
        if (!type) {
            this._formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
            return;
        }
        Object
            .entries(Object(_presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_2__["getListFilterFieldsByType"])(type))
            .forEach(([name, state]) => this._formGroup.addControl(name, this.formBuilder.control(state)));
    }
}
ListFilterService.ɵfac = function ListFilterService_Factory(t) { return new (t || ListFilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_6__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_7__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_9__["BuildingsService"])); };
ListFilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListFilterService, factory: ListFilterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_6__["DictionariesService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_7__["StatusesService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"] }, { type: _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_9__["BuildingsService"] }]; }, null); })();


/***/ }),

/***/ "GBFE":
/*!***************************************************************************!*\
  !*** ./src/app/presentation/reservations/resolvers/view.page.resolver.ts ***!
  \***************************************************************************/
/*! exports provided: ViewPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageResolver", function() { return ViewPageResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ViewPageResolver {
    resolve(route, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(`Моя бронь #${route.params.id}`);
    }
}
ViewPageResolver.ɵfac = function ViewPageResolver_Factory(t) { return new (t || ViewPageResolver)(); };
ViewPageResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewPageResolver, factory: ViewPageResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPageResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "I04s":
/*!**************************************************!*\
  !*** ./src/app/base/skeleton/skeleton.module.ts ***!
  \**************************************************/
/*! exports provided: SkeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonModule", function() { return SkeletonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _base_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/skeleton/skeleton.component */ "hZiJ");





class SkeletonModule {
}
SkeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SkeletonModule });
SkeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SkeletonModule_Factory(t) { return new (t || SkeletonModule)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkeletonModule, { declarations: [_base_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]], exports: [_base_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _base_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"]
                ],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild()
                ],
                exports: [
                    _base_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ea6Q":
/*!******************************************************************!*\
  !*** ./src/app/presentation/reservations/reservations.module.ts ***!
  \******************************************************************/
/*! exports provided: ReservationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsModule", function() { return ReservationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/booking-list/booking-list.module */ "xL67");
/* harmony import */ var _base_map_map_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/map/map.module */ "k+QC");
/* harmony import */ var _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/open-street-map/open-street-map.module */ "NAqI");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list/list.component */ "t3o8");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view/view.component */ "i7xM");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _presentation_reservations_reservations_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @presentation/reservations/reservations-routing.module */ "wuvQ");
/* harmony import */ var _base_list_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @base/list/list.module */ "/K2S");
/* harmony import */ var _base_result_result_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @base/result/result.module */ "CrH8");
/* harmony import */ var _core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/dictionary.service */ "8OyG");
/* harmony import */ var _presentation_reservations_reservations_dictionary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/reservations/reservations.dictionary */ "0wZr");
/* harmony import */ var _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @base/reservation-view/reservation-view.module */ "J3gr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @base/filters/filters.module */ "9jWK");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.component */ "oQeQ");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_common_list_filter_common_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter-common/list-filter-common.component */ "+Fe1");
/* harmony import */ var _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @base/renderer/renderer.module */ "R3cO");
/* harmony import */ var _base_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @base/skeleton/skeleton.module */ "I04s");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @base/dropdown-select/dropdown-select.module */ "K6hh");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/layout/extra-title-tpl/extra-title-tpl.module */ "qzeD");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_appointment_list_filter_appointment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter-appointment/list-filter-appointment.component */ "1PZD");
/* harmony import */ var _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @base/calendar/calendar.module */ "AlZK");
/* harmony import */ var _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @base/toolbar/toolbar.module */ "TC/b");




























class ReservationsModule {
    constructor() {
        _core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_11__["DictionaryService"].set(_presentation_reservations_reservations_dictionary__WEBPACK_IMPORTED_MODULE_12__["ReservationsDictionary"]);
    }
}
ReservationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationsModule });
ReservationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationsModule_Factory(t) { return new (t || ReservationsModule)(); }, providers: [
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]
    ], imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"].forChild(),
            _presentation_reservations_reservations_routing_module__WEBPACK_IMPORTED_MODULE_8__["ReservationsRoutingModule"],
            _base_list_list_module__WEBPACK_IMPORTED_MODULE_9__["ListModule"],
            _base_result_result_module__WEBPACK_IMPORTED_MODULE_10__["ResultModule"],
            _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_13__["ReservationViewModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_3__["OpenStreetMapModule"],
            _base_map_map_module__WEBPACK_IMPORTED_MODULE_2__["MapModule"],
            _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_1__["BookingListModule"],
            _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_15__["FiltersModule"],
            _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_18__["RendererModule"],
            _base_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_19__["SkeletonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"],
            _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_21__["DropdownSelectModule"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageModule"],
            _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_22__["ExtraTitleTplModule"],
            _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"],
            _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_25__["ToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationsModule, { declarations: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
        _components_view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"],
        _presentation_reservations_components_list_list_filters_list_filter_component__WEBPACK_IMPORTED_MODULE_16__["ListFilterComponent"],
        _presentation_reservations_components_list_list_filters_list_filter_common_list_filter_common_component__WEBPACK_IMPORTED_MODULE_17__["ListFilterCommonComponent"],
        _presentation_reservations_components_list_list_filters_list_filter_appointment_list_filter_appointment_component__WEBPACK_IMPORTED_MODULE_23__["ListFilterAppointmentComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _presentation_reservations_reservations_routing_module__WEBPACK_IMPORTED_MODULE_8__["ReservationsRoutingModule"],
        _base_list_list_module__WEBPACK_IMPORTED_MODULE_9__["ListModule"],
        _base_result_result_module__WEBPACK_IMPORTED_MODULE_10__["ResultModule"],
        _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_13__["ReservationViewModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_3__["OpenStreetMapModule"],
        _base_map_map_module__WEBPACK_IMPORTED_MODULE_2__["MapModule"],
        _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_1__["BookingListModule"],
        _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_15__["FiltersModule"],
        _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_18__["RendererModule"],
        _base_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_19__["SkeletonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"],
        _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_21__["DropdownSelectModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageModule"],
        _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_22__["ExtraTitleTplModule"],
        _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"],
        _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_25__["ToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                    _components_view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"],
                    _presentation_reservations_components_list_list_filters_list_filter_component__WEBPACK_IMPORTED_MODULE_16__["ListFilterComponent"],
                    _presentation_reservations_components_list_list_filters_list_filter_common_list_filter_common_component__WEBPACK_IMPORTED_MODULE_17__["ListFilterCommonComponent"],
                    _presentation_reservations_components_list_list_filters_list_filter_appointment_list_filter_appointment_component__WEBPACK_IMPORTED_MODULE_23__["ListFilterAppointmentComponent"]
                ],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"].forChild(),
                    _presentation_reservations_reservations_routing_module__WEBPACK_IMPORTED_MODULE_8__["ReservationsRoutingModule"],
                    _base_list_list_module__WEBPACK_IMPORTED_MODULE_9__["ListModule"],
                    _base_result_result_module__WEBPACK_IMPORTED_MODULE_10__["ResultModule"],
                    _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_13__["ReservationViewModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_3__["OpenStreetMapModule"],
                    _base_map_map_module__WEBPACK_IMPORTED_MODULE_2__["MapModule"],
                    _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_1__["BookingListModule"],
                    _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_15__["FiltersModule"],
                    _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_18__["RendererModule"],
                    _base_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_19__["SkeletonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"],
                    _base_dropdown_select_dropdown_select_module__WEBPACK_IMPORTED_MODULE_21__["DropdownSelectModule"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageModule"],
                    _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_22__["ExtraTitleTplModule"],
                    _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"],
                    _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_25__["ToolbarModule"]
                ],
                providers: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hZiJ":
/*!*****************************************************!*\
  !*** ./src/app/base/skeleton/skeleton.component.ts ***!
  \*****************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");




function SkeletonComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("skeleton-table__mask _row _row-", i_r5, "");
} }
function SkeletonComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("skeleton-table__mask _col _col-", i_r6, "");
} }
const _c0 = function () { return [1, 2, 3, 4, 5]; };
function SkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkeletonComponent_ng_container_1_div_3_Template, 1, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkeletonComponent_ng_container_1_div_4_Template, 1, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function SkeletonComponent_ng_container_2_nz_skeleton_element_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton-element", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", true)("nzSize", "large");
} }
function SkeletonComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-skeleton", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-skeleton-element", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", true)("nzParagraph", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", true);
} }
const _c1 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; };
function SkeletonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkeletonComponent_ng_container_2_nz_skeleton_element_2_Template, 1, 2, "nz-skeleton-element", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkeletonComponent_ng_container_2_div_3_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
function SkeletonComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
class SkeletonComponent {
    constructor() {
        this.type = 'form';
        this.showHeader = false;
        this.type = null;
    }
    ngOnInit() {
        this.rows = (new Array(24)).fill(null).map((_, index) => index + 1);
    }
}
SkeletonComponent.ɵfac = function SkeletonComponent_Factory(t) { return new (t || SkeletonComponent)(); };
SkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkeletonComponent, selectors: [["app-skeleton"]], inputs: { type: "type", showHeader: "showHeader" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "skeleton", "skeleton-table"], [1, "skeleton__background"], [3, "class", 4, "ngFor", "ngForOf"], [1, "skeleton", "skeleton-form"], ["nzType", "input", "class", "skeleton-form__header", 3, "nzActive", "nzSize", 4, "ngIf"], ["class", "skeleton-form__item", 4, "ngFor", "ngForOf"], ["nzType", "input", 1, "skeleton-form__header", 3, "nzActive", "nzSize"], [1, "skeleton-form__item"], [3, "nzActive", "nzParagraph"], ["nzType", "input", 3, "nzActive"]], template: function SkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkeletonComponent_ng_container_1_Template, 5, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkeletonComponent_ng_container_2_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkeletonComponent_div_3_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "form");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__["NzSkeletonElementDirective"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__["NzSkeletonElementInputComponent"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__["NzSkeletonComponent"]], styles: [".skeleton[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n  margin: 0 auto;\n  padding: 16px;\n  width: 100%;\n}\n.skeleton__background[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\n  background-size: 400% 100%;\n  animation: 1.4s infinite ant-skeleton-loading;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.skeleton-table__mask._row._row-1[_ngcontent-%COMP%] {\n  top: 48px;\n}\n.skeleton-table__mask._row._row-2[_ngcontent-%COMP%] {\n  top: 96px;\n}\n.skeleton-table__mask._row._row-3[_ngcontent-%COMP%] {\n  top: 144px;\n}\n.skeleton-table__mask._row._row-4[_ngcontent-%COMP%] {\n  top: 192px;\n}\n.skeleton-table__mask._row._row-5[_ngcontent-%COMP%] {\n  top: 240px;\n}\n.skeleton-table__mask._row._row-6[_ngcontent-%COMP%] {\n  top: 288px;\n}\n.skeleton-table__mask._row._row-7[_ngcontent-%COMP%] {\n  top: 336px;\n}\n.skeleton-table__mask._row._row-8[_ngcontent-%COMP%] {\n  top: 384px;\n}\n.skeleton-table__mask._row._row-9[_ngcontent-%COMP%] {\n  top: 432px;\n}\n.skeleton-table__mask._row._row-10[_ngcontent-%COMP%] {\n  top: 480px;\n}\n.skeleton-table__mask._row._row-11[_ngcontent-%COMP%] {\n  top: 528px;\n}\n.skeleton-table__mask._row._row-12[_ngcontent-%COMP%] {\n  top: 576px;\n}\n.skeleton-table__mask._row._row-13[_ngcontent-%COMP%] {\n  top: 624px;\n}\n.skeleton-table__mask._row._row-14[_ngcontent-%COMP%] {\n  top: 672px;\n}\n.skeleton-table__mask._row._row-15[_ngcontent-%COMP%] {\n  top: 720px;\n}\n.skeleton-table__mask._row._row-16[_ngcontent-%COMP%] {\n  top: 768px;\n}\n.skeleton-table__mask._row._row-17[_ngcontent-%COMP%] {\n  top: 816px;\n}\n.skeleton-table__mask._row._row-18[_ngcontent-%COMP%] {\n  top: 864px;\n}\n.skeleton-table__mask._row._row-19[_ngcontent-%COMP%] {\n  top: 912px;\n}\n.skeleton-table__mask._row._row-20[_ngcontent-%COMP%] {\n  top: 960px;\n}\n.skeleton-table__mask._row._row-21[_ngcontent-%COMP%] {\n  top: 1008px;\n}\n.skeleton-table__mask._row._row-22[_ngcontent-%COMP%] {\n  top: 1056px;\n}\n.skeleton-table__mask._row._row-23[_ngcontent-%COMP%] {\n  top: 1104px;\n}\n.skeleton-table__mask._row._row-24[_ngcontent-%COMP%] {\n  top: 1152px;\n}\n.skeleton-table__mask[_ngcontent-%COMP%] {\n  background: #fff;\n  position: absolute;\n}\n.skeleton-table__mask._row[_ngcontent-%COMP%] {\n  height: 5px;\n  width: 100%;\n}\n.skeleton-table__mask._row-1[_ngcontent-%COMP%] {\n  top: 43px;\n  height: 10px;\n}\n.skeleton-table__mask._col[_ngcontent-%COMP%] {\n  height: calc(100% - 0px);\n  margin-left: -2.5px;\n  top: 0;\n  width: 5px;\n}\n.skeleton-table__mask._col-1[_ngcontent-%COMP%] {\n  left: 10%;\n}\n.skeleton-table__mask._col-2[_ngcontent-%COMP%] {\n  left: 30%;\n}\n.skeleton-table__mask._col-3[_ngcontent-%COMP%] {\n  left: 50%;\n}\n.skeleton-table__mask._col-4[_ngcontent-%COMP%] {\n  left: 70%;\n}\n.skeleton-table__mask._col-5[_ngcontent-%COMP%] {\n  left: 90%;\n}\n.skeleton-form__header[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  width: 100%;\n}\n.skeleton-form__item[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.skeleton-form__item[_ngcontent-%COMP%]     nz-skeleton-element {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrZWxldG9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLHlFQUFBO0VBQ0EsMEJBQUE7RUFFQSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFmQztFQWlGRyxTQUFBO0FBL0RKO0FBbEJDO0VBaUZHLFNBQUE7QUE1REo7QUFyQkM7RUFpRkcsVUFBQTtBQXpESjtBQXhCQztFQWlGRyxVQUFBO0FBdERKO0FBM0JDO0VBaUZHLFVBQUE7QUFuREo7QUE5QkM7RUFpRkcsVUFBQTtBQWhESjtBQWpDQztFQWlGRyxVQUFBO0FBN0NKO0FBcENDO0VBaUZHLFVBQUE7QUExQ0o7QUF2Q0M7RUFpRkcsVUFBQTtBQXZDSjtBQTFDQztFQWlGRyxVQUFBO0FBcENKO0FBN0NDO0VBaUZHLFVBQUE7QUFqQ0o7QUFoREM7RUFpRkcsVUFBQTtBQTlCSjtBQW5EQztFQWlGRyxVQUFBO0FBM0JKO0FBdERDO0VBaUZHLFVBQUE7QUF4Qko7QUF6REM7RUFpRkcsVUFBQTtBQXJCSjtBQTVEQztFQWlGRyxVQUFBO0FBbEJKO0FBL0RDO0VBaUZHLFVBQUE7QUFmSjtBQWxFQztFQWlGRyxVQUFBO0FBWko7QUFyRUM7RUFpRkcsVUFBQTtBQVRKO0FBeEVDO0VBaUZHLFVBQUE7QUFOSjtBQTNFQztFQWlGRyxXQUFBO0FBSEo7QUE5RUM7RUFpRkcsV0FBQTtBQUFKO0FBakZDO0VBaUZHLFdBQUE7QUFHSjtBQXBGQztFQWlGRyxXQUFBO0FBTUo7QUFsRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBb0VKO0FBbEVJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFvRU47QUFqRUk7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQW1FTjtBQWhFSTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQWtFTjtBQS9ESTtFQUNFLFNBQUE7QUFpRU47QUE5REk7RUFDRSxTQUFBO0FBZ0VOO0FBN0RJO0VBQ0UsU0FBQTtBQStETjtBQTVESTtFQUNFLFNBQUE7QUE4RE47QUEzREk7RUFDRSxTQUFBO0FBNkROO0FBdkRFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBeURKO0FBdERFO0VBQ0UsbUJBQUE7QUF3REo7QUF6REU7RUFJSSxXQUFBO0FBd0ROIiwiZmlsZSI6InNrZWxldG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrZWxldG9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJl9fYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjJmMmYyIDI1JSwgI2U2ZTZlNiAzNyUsICNmMmYyZjIgNjMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMTAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMS40cyBpbmZpbml0ZSBhbnQtc2tlbGV0b24tbG9hZGluZztcbiAgICBhbmltYXRpb246IDEuNHMgaW5maW5pdGUgYW50LXNrZWxldG9uLWxvYWRpbmc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5nZW5lcmF0ZS1yb3dzKDI0KTtcblxuLnNrZWxldG9uLXRhYmxlIHtcbiAgJl9fbWFzayB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmLl9yb3cge1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmLl9yb3ctMSB7XG4gICAgICB0b3A6IDQzcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJi5fY29sIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMHB4KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMi41cHg7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogNXB4O1xuICAgIH1cblxuICAgICYuX2NvbC0xIHtcbiAgICAgIGxlZnQ6IDEwJTtcbiAgICB9XG5cbiAgICAmLl9jb2wtMiB7XG4gICAgICBsZWZ0OiAzMCU7XG4gICAgfVxuXG4gICAgJi5fY29sLTMge1xuICAgICAgbGVmdDogNTAlO1xuICAgIH1cblxuICAgICYuX2NvbC00IHtcbiAgICAgIGxlZnQ6IDcwJTtcbiAgICB9XG5cbiAgICAmLl9jb2wtNSB7XG4gICAgICBsZWZ0OiA5MCU7XG4gICAgfVxuICB9XG59XG5cbi5za2VsZXRvbi1mb3JtIHtcbiAgJl9faGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgIDo6bmctZGVlcCBuei1za2VsZXRvbi1lbGVtZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4uZ2VuZXJhdGUtcm93cyhAbiwgQGk6IDEpIHdoZW4gKEBpID08IEBuKSB7XG4gIC5za2VsZXRvbi10YWJsZV9fbWFzay5fcm93Ll9yb3ctQHtpfSB7XG4gICAgdG9wOiAoQGkgKiA0OHB4KTtcbiAgfVxuICAuZ2VuZXJhdGUtcm93cyhAbiwgKEBpICsgMSkpO1xufVxuXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skeleton',
                templateUrl: './skeleton.component.html',
                styleUrls: ['./skeleton.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "i7xM":
/*!*****************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/view/view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_reservations_components_view_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/components/view/view.service */ "lO0l");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var _base_add_members_add_members_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @base/add-members/add-members.service */ "5l53");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/layout/extra-title-tpl/extra-title-tpl.component */ "VdFp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_reservation_view_reservation_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../base/reservation-view/reservation-view.component */ "7f2s");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");


















function ViewComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Approve"), " ");
} }
function ViewComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Complete"), " ");
} }
function ViewComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Delete"), " ");
} }
function ViewComponent_ng_container_5_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_ng_container_5_ng_container_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.deleteAppointment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Delete"), " ");
} }
function ViewComponent_ng_container_5_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_ng_container_5_ng_container_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.closeAppointment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Close"), " ");
} }
function ViewComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewComponent_ng_container_5_ng_container_1_button_1_Template, 3, 3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewComponent_ng_container_5_ng_container_1_button_2_Template, 3, 3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.appointmentAttendeeStatus !== "DECLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.appointmentAttendeeStatus === "DECLINE");
} }
function ViewComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_ng_container_5_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.confirmAppointment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_ng_container_5_ng_container_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.closeAppointment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r11.appointmentStatus !== "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "Confirm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r11.appointmentStatus === "CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "Close"), " ");
} }
function ViewComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewComponent_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewComponent_ng_container_5_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isAppointmentOrganizer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.isAppointmentOrganizer);
} }
const _c0 = function () { return ["APPROVED"]; };
const _c1 = function () { return ["CONFIRMED"]; };
const _c2 = function () { return ["NEW", "APPROVED"]; };
class ViewComponent {
    constructor(_service, _router, cdr, _api, _modal, _translate, _loader, _addMembers) {
        this._service = _service;
        this._router = _router;
        this.cdr = cdr;
        this._api = _api;
        this._modal = _modal;
        this._translate = _translate;
        this._loader = _loader;
        this._addMembers = _addMembers;
        this.sub = this._service.placeType$.subscribe((type) => (this.placeType = type));
        this.sub = this._service.fetchingData$.subscribe((data) => {
            if (this.placeType === 'appointment') {
                this.appointment = data[0];
                this.rooms = data[1];
                this.cdr.markForCheck();
            }
            if (this.placeType === 'workplace') {
                this.reservation = data[0];
                this.workplace = data[1];
                this.cdr.markForCheck();
            }
            if (this.placeType === 'parking') {
                this.reservation = data[0];
                this.workplace = data[1];
                this.workplace.type = 'PARKING_LOT';
                this.cdr.markForCheck();
            }
            if (data[0] && data[1]) {
                this._loader.contentLoading$.next(false);
            }
        });
    }
    ngOnInit() { }
    checkReservationStatus(statuses) {
        return this.reservation && statuses.includes(this.reservation.status);
    }
    clickAction(question, action) {
        this._modal.confirm({
            nzTitle: this._translate.transform(question),
            nzOnOk: () => {
                action();
            },
        });
    }
    approve() {
        this.clickAction('Do you want to approve reservation?', () => {
            this._loader.contentLoading$.next(true);
            this._api
                .confirmReservation(this.placeType, this.reservation.id)
                .subscribe(() => {
                this._service.reload();
                this._loader.contentLoading$.next(false);
            });
        });
    }
    complete() {
        this.clickAction('Do you want to complete reservation?', () => {
            this._loader.contentLoading$.next(true);
            this._api
                .cancelReservation(this.placeType, this.reservation.id)
                .subscribe(() => {
                this._service.reload();
                this._loader.contentLoading$.next(false);
            });
        });
    }
    get isAppointmentOrganizer() {
        var _a;
        return (_a = this.appointment) === null || _a === void 0 ? void 0 : _a.isAppointmentOrganizer;
    }
    get appointmentAttendeeStatus() {
        var _a;
        return (_a = this.appointment) === null || _a === void 0 ? void 0 : _a.appointmentAttendeeStatus;
    }
    get appointmentStatus() {
        var _a;
        return (_a = this.appointment) === null || _a === void 0 ? void 0 : _a.appointmentStatus;
    }
    saveEmailsAppointment() {
        this.sub = this._api
            .saveAppointmentEmails(this.appointment.appointmentParentId, this._addMembers.emails)
            .subscribe(console.debug);
    }
    closeAppointment() {
        this.sub = this._api
            .closeAppointment(this.appointment.appointmentId)
            .subscribe(() => this._router
            .navigate(['/', 'reservations', 'appointment'])
            .catch(console.debug));
    }
    deleteAppointment() {
        this.clickAction('Do you want to delete reservation?', () => {
            this.sub = this._api
                .deleteAppointment(this.appointment.appointmentId)
                .subscribe(() => this._router
                .navigate(['/', 'reservations', 'appointment'])
                .catch(console.debug));
        });
        // this._modal.confirm({
        //   nzTitle: 'Вы хотите удалить бронирование?',
        //   nzOnOk: () => {
        //     this.sub = this._api
        //       .deleteAppointment(this.appointment.appointmentId)
        //       .subscribe(() =>
        //         this._router
        //           .navigate(['/', 'reservations', 'appointment'])
        //           .catch(console.debug)
        //       );
        //   },
        // });
    }
    confirmAppointment() {
        this.sub = this._api
            .confirmAppointment(this.appointment.appointmentId)
            .subscribe();
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_reservations_components_view_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_8__["GlobalLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_add_members_add_members_service__WEBPACK_IMPORTED_MODULE_9__["AddMembersService"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-reservations-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_reservations_components_view_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"]])], decls: 7, vars: 12, consts: [[1, "left"], ["nz-button", "", "nzType", "primary", "class", "btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "reservation", "workplace", "appointment", "rooms", "placeType"], ["nz-button", "", "nzType", "primary", 1, "btn", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "btn", 3, "disabled", "click"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-extra-title-tpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewComponent_button_2_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewComponent_button_3_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ViewComponent_button_4_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ViewComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-reservation-view", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkReservationStatus(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkReservationStatus(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkReservationStatus(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.placeType === "appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("reservation", ctx.reservation)("workplace", ctx.workplace)("appointment", ctx.appointment)("rooms", ctx.rooms)("placeType", ctx.placeType);
    } }, directives: [_shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_10__["ExtraTitleTplComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _base_reservation_view_reservation_view_component__WEBPACK_IMPORTED_MODULE_12__["ReservationViewComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], ViewComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reservations-view',
                templateUrl: './view.component.html',
                styleUrls: ['./view.component.less'],
                providers: [_presentation_reservations_components_view_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"]],
            }]
    }], function () { return [{ type: _presentation_reservations_components_view_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsApiService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_8__["GlobalLoaderService"] }, { type: _base_add_members_add_members_service__WEBPACK_IMPORTED_MODULE_9__["AddMembersService"] }]; }, { sub: [] }); })();


/***/ }),

/***/ "lO0l":
/*!***************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/view/view.service.ts ***!
  \***************************************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");









class ViewService {
    constructor(_api, $route, _dictionaries, $statuses, _loader) {
        this._api = _api;
        this.$route = $route;
        this._dictionaries = _dictionaries;
        this.$statuses = $statuses;
        this._loader = _loader;
        this._reload = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    get reservation$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this._routeId$, this._reload]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([{ id }, _r]) => this._reservationReq$(+id, _r)));
    }
    appointmentAndRooms$(id) {
        return this._api.getAppointmentById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((app) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(app ? app : null),
            app ? this.getRoomsByIds$(app.appointmentLocationIds) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)
        ])));
    }
    get placeType$() {
        return this._routeId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('type'));
    }
    reload() {
        this._reload.next(null);
    }
    get _routeId$() {
        return this.$route.params;
    }
    _reservationReq$(id, type) {
        return this._api.getReservationsByType(type, {
            id,
            statuses: this.$statuses.allStatusesCodes
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('0'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(reservation => {
            if (reservation) {
                switch (type) {
                    case 'parking':
                        return this._parkingReq$(reservation.parkingLotId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((parkingLot) => [reservation, parkingLot]));
                    default:
                        return this._workplaceReq$(reservation.workplaceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((workplace) => [reservation, workplace]));
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([null, null]);
            }
        }));
    }
    _workplaceReq$(id) {
        return this._dictionaries.getDictionaryItemByKey('workplaces', id);
    }
    _parkingReq$(id) {
        return this._dictionaries.getDictionaryItemByKey('parkingLots', id);
    }
    getRoomsByIds$(ids) {
        return this._dictionaries.getDictionary('rooms').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((rooms) => rooms.filter((r) => ids.includes(r.id))));
    }
    get fetchingData$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.$route.params,
            this._reload
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this._loader.contentLoading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([{ id, type }, _r]) => {
            switch (type) {
                case 'appointment':
                    return this.appointmentAndRooms$(decodeURIComponent(id));
                case 'parking':
                    return this._reservationReq$(Number(id), 'parking');
                case 'workplace':
                    return this._reservationReq$(Number(id), 'workplace');
                default:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
        }));
    }
}
ViewService.ɵfac = function ViewService_Factory(t) { return new (t || ViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_7__["GlobalLoaderService"])); };
ViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewService, factory: ViewService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_7__["GlobalLoaderService"] }]; }, null); })();


/***/ }),

/***/ "oQeQ":
/*!*************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/list/list-filters/list-filter.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterComponent", function() { return ListFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.service */ "CRFw");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_appointment_list_filter_appointment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter-appointment/list-filter-appointment.component */ "1PZD");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_common_list_filter_common_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter-common/list-filter-common.component */ "+Fe1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/pipes/dictionary.pipe */ "Dz+d");


















function ListFilterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
} }
function ListFilterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroup)("filterFloorsBy", "parkingLots");
} }
function ListFilterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formGroup)("filterFloorsBy", "workplaces");
} }
const _c0 = function () { return { suppressScrollX: true }; };
class ListFilterComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"] {
    constructor($service, injector) {
        super(injector);
        this.$service = $service;
        this.injector = injector;
        this.formGroup = this.$service.formGroup;
        this.loading = false;
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
ListFilterComponent.ɵfac = function ListFilterComponent_Factory(t) { return new (t || ListFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_2__["ListFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ListFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListFilterComponent, selectors: [["app-reservations-filters"], ["", "app-reservations-filters", ""]], hostVars: 2, hostBindings: function ListFilterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-reservations-filter", true);
    } }, inputs: { loading: "loading", inputType: ["type", "inputType"], inputValues: ["values", "inputValues"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_2__["ListFilterService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 32, consts: [["nz-row", "", 1, "app-reservations-filters__header", 3, "nzGutter"], ["nz-col", "", 1, "app-reservations-filters__header-action", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType"], ["nz-col", "", 1, "app-reservations-filters__header-title", 3, "nzXs", "nzLg"], ["nz-col", "", 1, "app-reservations-filters__header-action", "_right", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType", "click"], [1, "app-reservations-filters__form-wrapper", 3, "nzSpinning"], ["nz-form", "", 1, "app-reservations-filters__form", 3, "nzLayout", "formGroup", "ngSwitch"], [1, "app-reservations-filters__form-scroll", 3, "config"], ["app-list-filter-appointment", "", 3, "formGroup", 4, "ngSwitchCase"], ["app-list-filter-common", "", 3, "formGroup", "filterFloorsBy", 4, "ngSwitchCase"], ["app-list-filter-common", "", 3, "formGroup", "filterFloorsBy", 4, "ngSwitchDefault"], ["app-list-filter-appointment", "", 3, "formGroup"], ["app-list-filter-common", "", 3, "formGroup", "filterFloorsBy"]], template: function ListFilterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFilterComponent_Template_button_click_11_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-spin", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "perfect-scrollbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListFilterComponent_div_18_Template, 1, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListFilterComponent_div_19_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListFilterComponent_div_20_Template, 1, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 21, "Close")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 25, "Filters")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 29, "Clear")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.formGroup)("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "parking");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"], _presentation_reservations_components_list_list_filters_list_filter_appointment_list_filter_appointment_component__WEBPACK_IMPORTED_MODULE_12__["ListFilterAppointmentComponent"], _presentation_reservations_components_list_list_filters_list_filter_common_list_filter_common_component__WEBPACK_IMPORTED_MODULE_13__["ListFilterCommonComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_15__["DictionaryPipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 0 4px 0 24px;\n}\n[_nghost-%COMP%]   .app-reservations-filters__header[_ngcontent-%COMP%] {\n  height: 52px;\n  padding-right: 24px;\n}\n[_nghost-%COMP%]   .app-reservations-filters__header-action[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n}\n[_nghost-%COMP%]   .app-reservations-filters__header-action[_ngcontent-%COMP%]     .ant-btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n[_nghost-%COMP%]   .app-reservations-filters__header-action._right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .app-reservations-filters__form[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .app-reservations-filters__form[_ngcontent-%COMP%]   .ant-checkbox-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .app-reservations-filters__form-scroll[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   .app-reservations-filters__form-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 52px);\n}\n[_nghost-%COMP%]   .app-reservations-filters__form-wrapper[_ngcontent-%COMP%]     .ant-spin-container {\n  height: 100%;\n}\n[_nghost-%COMP%]   .app-reservations-filters-item__scroll[_ngcontent-%COMP%], [_nghost-%COMP%]   .app-reservations-filters-item__scroll[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZmlsdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQVpEO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBY0Y7QUFYSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWFOO0FBWE07RUFDRSxpQkFBQTtBQWFSO0FBWFE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFhVjtBQVZRO0VBQ0UsaUJBQUE7QUFZVjtBQVBJO0VBQ0UsWUFBQTtBQVNOO0FBVkk7RUFJSSxrQkFBQTtBQVNSO0FBTk07RUFDRSxtQkFBQTtBQVFSO0FBTE07RUFDRSx5QkFBQTtBQU9SO0FBUk07RUFJSSxZQUFBO0FBT1Y7QUFBUTs7RUFFRSxpQkFBQTtBQUVWIiwiZmlsZSI6Imxpc3QtZmlsdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5cbkBmb290ZXItaGVpZ2h0OiA2NHB4O1xuQGhlYWRlci1oZWlnaHQ6IDUycHg7XG5AYXBwLXJlc2VydmF0aW9ucy1maWx0ZXItcHJlZml4LWNsczogYXBwLXJlc2VydmF0aW9ucy1maWx0ZXJzO1xuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCA0cHggMCAyNHB4O1xuXG4gIC5Ae2FwcC1yZXNlcnZhdGlvbnMtZmlsdGVyLXByZWZpeC1jbHN9IHtcbiAgICAmX19oZWFkZXIge1xuICAgICAgaGVpZ2h0OiBAaGVhZGVyLWhlaWdodDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG5cbiAgICAgICYtYWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDA7XG5cbiAgICAgICAgJiA6Om5nLWRlZXAgLmFudC1idG4ge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5fcmlnaHQge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5hbnQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cblxuICAgICAgJi1zY3JvbGwge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAmLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIEBoZWFkZXItaGVpZ2h0KTtcblxuICAgICAgICA6Om5nLWRlZXAgLmFudC1zcGluLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pdGVtIHtcbiAgICAgICZfX3Njcm9sbCB7XG4gICAgICAgICYsXG4gICAgICAgICYgLnBzIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reservations-filters, [app-reservations-filters]',
                templateUrl: './list-filter.component.html',
                styleUrls: ['./list-filter.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.app-reservations-filter]': `true`
                },
                providers: [_presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_2__["ListFilterService"]]
            }]
    }], function () { return [{ type: _presentation_reservations_components_list_list_filters_list_filter_service__WEBPACK_IMPORTED_MODULE_2__["ListFilterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }], inputValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['values']
        }] }); })();


/***/ }),

/***/ "t3o8":
/*!*****************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/list/list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_reservations_components_list_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/components/list/list.service */ "zXUi");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _core_decorators_throttle_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/throttle.decorator */ "SrZ1");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/utils/animations.util */ "meMk");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var _presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @presentation/reservations/components/list/list.utils */ "emXd");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/layout/extra-title-tpl/extra-title-tpl.component */ "VdFp");
/* harmony import */ var _base_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../base/toolbar/toolbar.component */ "pLYm");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _base_result_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../base/result/result.component */ "0tdr");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.component */ "oQeQ");
/* harmony import */ var _base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @base/calendar/calendar.component */ "WtvG");
/* harmony import */ var _base_list_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../base/list/list.component */ "N4Bo");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../core/pipes/dictionary.pipe */ "Dz+d");
































function ListComponent_app_result_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-result", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_app_result_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined)("status", "error")("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 9, error_r7 == null ? null : error_r7.title))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 11, error_r7 == null ? null : error_r7.subtitle))("message", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 13, error_r7 == null ? null : error_r7.message));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGhost", true)("nzType", "primary")("nzSize", "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 17, "ReloadReservations")), " ");
} }
const _c0 = function () { return ["month", "day", "week"]; };
function ListComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("periodChange", function ListComponent_ng_template_2_div_1_Template_div_periodChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.changePeriod($event); })("eventSelect", function ListComponent_ng_template_2_div_1_Template_div_eventSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.selectRow($event.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx_r10.loading)("events", ctx_r10.data)("modes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0))("mode", "month")("allowSelectDayEvent", true);
} }
function ListComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowSelect", function ListComponent_ng_template_2_div_2_Template_div_rowSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.selectRow($event); })("rowsSelect", function ListComponent_ng_template_2_div_2_Template_div_rowsSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.selectRows($event); })("pagingChange", function ListComponent_ng_template_2_div_2_Template_div_pagingChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.changePaging($event); })("sortChange", function ListComponent_ng_template_2_div_2_Template_div_sortChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.changeSort($event); })("actionCall", function ListComponent_ng_template_2_div_2_Template_div_actionCall_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.callAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r11.meta == null ? null : ctx_r11.meta.columns)("paging", ctx_r11.queryParams == null ? null : ctx_r11.queryParams.paging)("sort", ctx_r11.queryParams == null ? null : ctx_r11.queryParams.sort)("rows", ctx_r11.data)("total", ctx_r11.data == null ? null : ctx_r11.data.length)("loading", ctx_r11.loading)("multiSelectRows", true);
} }
const _c1 = function (a0, a1) { return { _expanded: a0, _ready: a1 }; };
const _c2 = function (a0, a1) { return { _collapsed: a0, _ready: a1 }; };
function ListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_ng_template_2_div_1_Template, 1, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_ng_template_2_div_2_Template, 1, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valuesChange", function ListComponent_ng_template_2_Template_div_valuesChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.changeFilters($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r2.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, !ctx_r2.filtersVisible, ctx_r2.ready));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c2, !ctx_r2.filtersVisible, ctx_r2.ready));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", !ctx_r2.ready)("type", ctx_r2.type)("values", ctx_r2.queryParams == null ? null : ctx_r2.queryParams.filters);
} }
function ListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-dropdown-menu", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_button_7_Template_li_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.exportxls(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "XLS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r23)("nzType", "primary")("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, "Export")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "download");
} }
function ListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.toggleFiltersVisible(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r5.filtersVisible ? "eye-invisible" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "Filters")), " ");
} }
function ListComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_success", result_r28.isOk)("_fail", !result_r28.isOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", result_r28.isOk ? "check-circle" : "close-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", result_r28.message, " ");
} }
const _c3 = function () { return []; };
const _c4 = function (a0) { return { items: a0 }; };
const _c5 = function () { return { suppressScrollX: true }; };
class ListComponent {
    constructor($service, _cdr, _modal) {
        this.$service = $service;
        this._cdr = _cdr;
        this._modal = _modal;
        this.showFiltersVisibleButton = false;
        this.meta = null;
        this.data = [];
        this.selectedRows = [];
        this.massActionResults = [];
        this.filtersVisible = true;
        this.error = this.$service.error$;
        this.loading = this.$service.loading$;
        this.type = this.$service.type$;
    }
    get hasExport() {
        return this.type !== 'appointment';
    }
    windowResize(_$event) {
        this.showFiltersVisibleButton = this.$service.showFiltersVisibleButton;
    }
    set list({ meta, data }) {
        if (this.meta !== meta) {
            if (Array.isArray(meta.actions)) {
                meta.actions = meta.actions.filter((m) => m.id !== 'repeat');
            }
            this.meta = meta;
        }
        switch (this.type) {
            case 'appointment':
                this.data = Object(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_9__["createCalendarEvents"])(data, this.$service.statusesMap);
                break;
            case 'parking':
                if (Array.isArray(data)) {
                    data.forEach((d) => (d.place = d.parkingLot));
                }
                this.data = data;
                break;
            default:
                this.data = data;
        }
        this._cdr.detectChanges();
    }
    reset() {
        this.$service.reset();
    }
    callAction(actionParams) {
        this.$service.callAction(actionParams);
    }
    callMassAction(actionParams) {
        if (actionParams.url && actionParams.url.includes('cancel')) {
            this._modal.confirm({
                nzTitle: 'Вы уверены, что хотите удалить отмеченные позиции?',
                nzOnOk: () => {
                    this.onCallMassAction(actionParams);
                },
            });
        }
        else {
            this.onCallMassAction(actionParams);
        }
    }
    onCallMassAction(actionParams) {
        this.$service
            .callMassAction(actionParams, this.selectedRows)
            .subscribe((results) => {
            this.massActionResults = results;
            this._cdr.markForCheck();
        });
    }
    selectRow(row) {
        this.$service.selectRow(row, this.type);
    }
    selectRows(rows) {
        this.selectedRows = [...rows];
    }
    createReservation() {
        this.$service.createReservation();
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
    changePeriod(period) {
        this.$service.changeFilters({
            requestAppointmentDateFrom: period[0],
            requestAppointmentDateTo: period[1],
        });
    }
    toggleFiltersVisible() {
        this.filtersVisible = !this.filtersVisible;
        this.dispatchWindowResize();
    }
    ngOnInit() {
        this.queryParams = this.$service.queryParams$;
        this.list = this.$service.list$;
        this.ready = this.$service.ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((ready) => {
            if (!ready) {
                this.data = [];
                this.meta = null;
            }
        }));
        this.windowResize();
    }
    ngOnDestroy() {
        this.$service.destroy();
    }
    dispatchWindowResize() {
        window.dispatchEvent(new Event('resize'));
    }
    exportxls() {
        const fileName = 'ExcelSheet.xlsx';
        const element = document.getElementById('reservationList');
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](wb, fileName);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_reservations_components_list_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-reservations"]], hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ListComponent_resize_HostBindingHandler($event) { return ctx.windowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_reservations_components_list_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"]])], decls: 16, vars: 27, consts: [[1, "reservations"], ["class", "reservations__error", 3, "status", "title", "subtitle", "message", 4, "ngIf", "ngIfElse"], ["reservationsListTpl", ""], [3, "actions", "data", "skeletonButtonsCount", "actionCall"], ["contentTpl", ""], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu", "nzType", "nz-tooltip", 4, "ngIf"], ["nz-button", "", 3, "nzType", "click", 4, "ngIf"], [3, "nzVisible", "nzTitle", "nzOkText", "nzCancelText", "nzMaskClosable", "nzClassName", "nzOnCancel"], [1, "mass-action-results__list", 3, "config"], ["nz-typography", "", "class", "mass-action-results__item", 4, "ngFor", "ngForOf"], [1, "reservations__error", 3, "status", "title", "subtitle", "message"], ["nz-button", "", 3, "nzGhost", "nzType", "nzSize", "click"], [1, "reservations__body", 3, "ngSwitch", "ngClass"], ["app-calendar", "", 3, "loading", "events", "modes", "mode", "allowSelectDayEvent", "periodChange", "eventSelect", 4, "ngSwitchCase"], ["app-list", "", "class", "reservations__list", 3, "columns", "paging", "sort", "rows", "total", "loading", "multiSelectRows", "rowSelect", "rowsSelect", "pagingChange", "sortChange", "actionCall", 4, "ngSwitchDefault"], [1, "reservations__left", 3, "ngClass"], ["app-reservations-filters", "", 1, "reservations__filters", 3, "loading", "type", "values", "valuesChange"], ["app-calendar", "", 3, "loading", "events", "modes", "mode", "allowSelectDayEvent", "periodChange", "eventSelect"], ["app-list", "", 1, "reservations__list", 3, "columns", "paging", "sort", "rows", "total", "loading", "multiSelectRows", "rowSelect", "rowsSelect", "pagingChange", "sortChange", "actionCall"], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu", "nzType", "nz-tooltip"], ["nz-icon", "", 3, "nzType"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "file-excel", "nzTheme", "outline"], ["nz-button", "", 3, "nzType", "click"], ["nz-typography", "", 1, "mass-action-results__item"], ["nz-icon", "", 1, "mass-action-results__icon", 3, "nzType"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_app_result_1_Template, 8, 19, "app-result", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_ng_template_2_Template, 5, 13, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-extra-title-tpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-toolbar", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionCall", function ListComponent_Template_app_toolbar_actionCall_5_listener($event) { return ctx.callMassAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListComponent_button_7_Template, 10, 8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListComponent_button_8_Template, 5, 7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnCancel", function ListComponent_Template_nz_modal_nzOnCancel_9_listener() { return ctx.massActionResults = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "perfect-scrollbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListComponent_p_15_Template, 3, 6, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", (ctx.meta == null ? null : ctx.meta.actions) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c3))("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c4, ctx.selectedRows))("skeletonButtonsCount", ctx.type === "appointment" ? 1 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasExport);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFiltersVisibleButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", !!ctx.massActionResults.length)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 17, "ResultOfAction")))("nzOkText", null)("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 21, "Close")))("nzMaskClosable", true)("nzClassName", "mass-action-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.massActionResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_13__["ExtraTitleTplComponent"], _base_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["ToolbarComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _base_result_result_component__WEBPACK_IMPORTED_MODULE_16__["ResultComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchDefault"], _presentation_reservations_components_list_list_filters_list_filter_component__WEBPACK_IMPORTED_MODULE_20__["ListFilterComponent"], _base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_21__["CalendarComponent"], _base_list_list_component__WEBPACK_IMPORTED_MODULE_22__["ListComponent"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_26__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_26__["NzMenuItemDirective"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_27__["NzTypographyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_29__["DictionaryPipe"]], styles: ["[_nghost-%COMP%] {\n  background-color: #fff;\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]     nz-spin {\n  width: 100%;\n}\n[_nghost-%COMP%]   .reservations[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: row;\n  justify-content: stretch;\n  width: 100%;\n}\n[_nghost-%COMP%]   .reservations__body[_ngcontent-%COMP%] {\n  width: calc(100% - 280px);\n}\n[_nghost-%COMP%]   .reservations__body._expanded[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .reservations__body._ready[_ngcontent-%COMP%] {\n  transition: flex 0.5s, width 0.5s;\n}\n[_nghost-%COMP%]   .reservations__toolbar[_ngcontent-%COMP%] {\n  height: 56px;\n  padding: 12px 16px;\n}\n[_nghost-%COMP%]   .reservations__list[_ngcontent-%COMP%] {\n  height: calc(100% - 56px);\n}\n[_nghost-%COMP%]   .reservations__list[_ngcontent-%COMP%]:first-child {\n  height: 100%;\n}\n[_nghost-%COMP%]   .reservations__left[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-left: 1px solid #eee;\n  height: 100%;\n  flex: 0 0 280px;\n  overflow: hidden;\n  padding-bottom: 52px;\n}\n[_nghost-%COMP%]   .reservations__left._collapsed[_ngcontent-%COMP%] {\n  flex: 0 0 0;\n}\n[_nghost-%COMP%]   .reservations__left._ready[_ngcontent-%COMP%] {\n  transition: flex 0.5s;\n}\n[_nghost-%COMP%]   .reservations__filters[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 280px;\n}\n[_nghost-%COMP%]   .reservations__error[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n}\n@media screen and (min-width: 1600px) {\n  [_nghost-%COMP%]   .reservations__filters[_ngcontent-%COMP%] {\n    width: 280px !important;\n  }\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .reservations__filters[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  [_nghost-%COMP%]   .reservations__filters-wrapper[_ngcontent-%COMP%] {\n    flex: 0 0 360px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBWkQ7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBY0Y7QUFqQkE7RUFNSSxXQUFBO0FBY0o7QUFwQkE7RUFVSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBYUo7QUFYSTtFQUNFLHlCQUFBO0FBYU47QUFYTTtFQUNFLFdBQUE7QUFhUjtBQVZNO0VBQ0UsaUNBQUE7QUFZUjtBQVJJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBVU47QUFQSTtFQUNFLHlCQUFBO0FBU047QUFQTTtFQUNFLFlBQUE7QUFTUjtBQUxJO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU9OO0FBTE07RUFDRSxXQUFBO0FBT1I7QUFKTTtFQUNFLHFCQUFBO0FBTVI7QUFGSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSU47QUFESTtFQUNFLGNBQUE7QUFHTjtBQUFJO0VBQ0U7SUFDRSx1QkFBQTtFQUVOO0FBQ0Y7QUFDSTtFQUNFO0lBQ0UsWUFBQTtFQUNOO0VBQ007SUFDRSxlQUFBO0VBQ1I7QUFDRiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5cbkBmaWx0ZXJzLXdpZHRoOiAyODBweDtcbkBmaWx0ZXJzLXdpdGgtbW9iaWxlOiAzNjBweDtcbkBhcHAtcmVzZXJ2YXRpb25zLXByZWZpeC1jbHM6IHJlc2VydmF0aW9ucztcblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIDo6bmctZGVlcCBuei1zcGluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5Ae2FwcC1yZXNlcnZhdGlvbnMtcHJlZml4LWNsc30ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fYm9keSB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gQGZpbHRlcnMtd2lkdGgpO1xuXG4gICAgICAmLl9leHBhbmRlZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAmLl9yZWFkeSB7XG4gICAgICAgIHRyYW5zaXRpb246IGZsZXggLjVzLCB3aWR0aCAuNXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fdG9vbGJhciB7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU2cHgpO1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGVmdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZmxleDogMCAwIEBmaWx0ZXJzLXdpZHRoO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MnB4O1xuXG4gICAgICAmLl9jb2xsYXBzZWQge1xuICAgICAgICBmbGV4OiAwIDAgMDtcbiAgICAgIH1cblxuICAgICAgJi5fcmVhZHkge1xuICAgICAgICB0cmFuc2l0aW9uOiBmbGV4IC41cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19maWx0ZXJzIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiBAZmlsdGVycy13aWR0aDtcbiAgICB9XG5cbiAgICAmX19lcnJvciB7XG4gICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICAgICZfX2ZpbHRlcnMge1xuICAgICAgICB3aWR0aDogQGZpbHRlcnMtd2lkdGggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgJl9fZmlsdGVycyB7XG4gICAgICAgIHdpZHRoOiBAZmlsdGVycy13aXRoLW1vYmlsZTtcblxuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgIGZsZXg6IDAgMCBAZmlsdGVycy13aXRoLW1vYmlsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_7__["fadeInOutAnimation"] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_3__["MarkForCheck"]
], ListComponent.prototype, "massActionResults", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_3__["MarkForCheck"]
], ListComponent.prototype, "filtersVisible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["Subscribe"])()
], ListComponent.prototype, "queryParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["Subscribe"])()
], ListComponent.prototype, "error", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["Subscribe"])()
], ListComponent.prototype, "ready", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["Subscribe"])()
], ListComponent.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["Subscribe"])()
], ListComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_throttle_decorator__WEBPACK_IMPORTED_MODULE_4__["Throttle"])(250)
], ListComponent.prototype, "windowResize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["Subscribe"])()
], ListComponent.prototype, "list", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_8__["Debounce"])(500)
], ListComponent.prototype, "dispatchWindowResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reservations',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_presentation_reservations_components_list_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"]],
                animations: _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_7__["fadeInOutAnimation"],
            }]
    }], function () { return [{ type: _presentation_reservations_components_list_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalService"] }]; }, { massActionResults: [], filtersVisible: [], queryParams: [], error: [], ready: [], loading: [], type: [], windowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }], list: [], dispatchWindowResize: [] }); })();


/***/ }),

/***/ "wuvQ":
/*!**************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservations-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ReservationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsRoutingModule", function() { return ReservationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_reservations_resolvers_view_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/resolvers/view.page.resolver */ "GBFE");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "t3o8");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view/view.component */ "i7xM");
/* harmony import */ var _presentation_reservations_resolvers_title_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/reservations/resolvers/title.resolver */ "Bov3");








const routes = [
    {
        path: ':type',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
                data: {
                    title: 'Рабочее место',
                    componentName: 'ReservationsListComponent',
                },
                resolve: {
                    title: _presentation_reservations_resolvers_title_resolver__WEBPACK_IMPORTED_MODULE_5__["TitleResolver"],
                },
            },
            {
                path: 'create',
                loadChildren: () => Promise.all(/*! import() | reservation-create-reservation-create-module */[__webpack_require__.e("default~dashboard-dashboard-module~offices-map-offices-map-module~reservation-create-reservation-cre~c1eb1ab2"), __webpack_require__.e("default~offices-map-offices-map-module~reservation-create-reservation-create-module~team-create-team~5c833816"), __webpack_require__.e("common"), __webpack_require__.e("reservation-create-reservation-create-module")]).then(__webpack_require__.bind(null, /*! ./reservation-create/reservation-create.module */ "EFnW")).then(({ ReservationCreateModule }) => ReservationCreateModule),
            },
            {
                path: 'workplace',
                loadChildren: () => __webpack_require__.e(/*! import() | reservation-workplace-create-reservation-workplace-create-module */ "reservation-workplace-create-reservation-workplace-create-module").then(__webpack_require__.bind(null, /*! ./reservation-workplace-create/reservation-workplace-create.module */ "CPMP")).then(({ ReservationWorkplaceCreateModule }) => ReservationWorkplaceCreateModule),
            },
            {
                path: 'view/:id',
                component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
                data: {
                    showBackBtn: true,
                },
                resolve: {
                    title: _presentation_reservations_resolvers_view_page_resolver__WEBPACK_IMPORTED_MODULE_2__["ViewPageResolver"],
                },
            },
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/reservations/workplace',
    },
    {
        path: '**',
        redirectTo: '/reservations/workplace',
    },
];
class ReservationsRoutingModule {
}
ReservationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationsRoutingModule });
ReservationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationsRoutingModule_Factory(t) { return new (t || ReservationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zXUi":
/*!***************************************************************************!*\
  !*** ./src/app/presentation/reservations/components/list/list.service.ts ***!
  \***************************************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/complete.decorator */ "ALpe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/common/utils/reservations.util */ "xK1C");
/* harmony import */ var _shared_common_base_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/common/base/base.service */ "fGTt");
/* harmony import */ var _shared_common_utils_query_params_builder_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/common/utils/query-params-builder.util */ "0NPV");
/* harmony import */ var _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/models/app-errorl.model */ "zewn");
/* harmony import */ var _presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @presentation/reservations/components/list/list.utils */ "emXd");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _base_action_action_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @base/action/action.utils */ "rkgY");
/* harmony import */ var _shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/messages/services/reservations-messages.service */ "xNMc");
/* harmony import */ var _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/http/services/meta-api.service */ "s4sJ");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/services/message.service */ "acRR");





















class ListService extends _shared_common_base_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] {
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
        this._htmlElement = document.documentElement;
        this._queryParamsBuilder = _shared_common_utils_query_params_builder_util__WEBPACK_IMPORTED_MODULE_8__["QueryParamsBuilder"].default();
        this._previousType = null;
        this._queryParamsBuilder.currentLang = this.$localization.currentLang;
        this._queryParamsBuilder.dateFormat = this.filterDateFormat;
    }
    get statusesMap() {
        return this.$statuses.statusesMap;
    }
    get clientWidth() {
        return this._htmlElement.clientWidth;
    }
    get showFiltersVisibleButton() {
        return this.clientWidth < _shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["maxFilterButtonVisibleWindowWidth"];
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
        return this.routeParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('type'));
    }
    get list$() {
        return this.reservationsMeta$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((metaRes) => this.reservations$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(dataRes => [metaRes, dataRes]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([meta, data]) => ({ meta, data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ meta, data }) => Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["mapDictionaryValues"])(this.$dictionaries, meta, data)), this.loadingOperator(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
    isFilterVisible(filterVisible) {
        return this.clientWidth < _shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["maxFilterHideWindowWith"] ? false : filterVisible;
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
        if (params === null || params === void 0 ? void 0 : params.route) {
            this.callNavigationAction(params, data);
        }
        if (params === null || params === void 0 ? void 0 : params.url) {
            this.callActionRequest(params, data);
        }
    }
    callMassAction(actionParams, rows) {
        if (actionParams === null || actionParams === void 0 ? void 0 : actionParams.route) {
            this.callNavigationAction(actionParams, rows[0] || {});
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        if (actionParams === null || actionParams === void 0 ? void 0 : actionParams.url) {
            return this.callMassActionRequest(actionParams, rows);
        }
    }
    selectRow(row, type) {
        let id;
        switch (type) {
            case 'appointment':
                id = row.appointmentId;
                break;
            default:
                id = row.id;
        }
        id = encodeURIComponent(id);
        this._selectedRow = row;
        this.$nav.go(`view/${id}`, this.$route);
    }
    createReservation() {
        this.$nav.go('create', this.$route);
    }
    destroy() {
        this._queryParamsBuilder.destroy();
    }
    get filterDateFormat() {
        return this.$measurements.getMeasurementByName('filterDate');
    }
    get reservationsMeta$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.type$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_10__["getMetaNameByReservationType"])),
            this.reset$,
        ]).pipe(this.readyOperator(), this.resetErrorOperator(), this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([type]) => this.$metaApi.getMeta(type, this.$messages.loadingMetaErrorNotification)), this.readyOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((meta) => this.processMeta(meta)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.updateQueryParams({}, false)));
    }
    get reservations$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.type$,
            this.routeQueryParams$,
            this.reload$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(([, { updateData },]) => updateData === 'true'), this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([type]) => this.$reservationsApi.getReservationsByType(type, this.bodyQueryParams)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this._queryParamsBuilder.setProperty('updateData', null)));
    }
    updateQueryParams(params, update = true) {
        if (update) {
            this._queryParamsBuilder.updateQueryParams(params);
        }
        this.$nav.go([], { queryParams: this.urlQueryParams });
    }
    callNavigationAction({ relativeRoute, route }, data) {
        this.$nav.goToUrl(this.$url.createUrl(route, data), {
            relativeTo: relativeRoute ? this.$route : null,
            queryParams: {},
        });
    }
    callActionRequest(actionRequestParams, data) {
        this
            .actionRequest(actionRequestParams, data)
            .subscribe((result) => this.finishCallAction(result));
    }
    callMassActionRequest({ url, method, body }, reservations) {
        const requestData = Object(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_10__["prepareMassActionRequest"])(reservations, body);
        this.loading = true;
        return this.$reservationsApi
            .callReservationAction(url, method, requestData, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(({ success }) => this.finishCallAction(success)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => Object(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_10__["mapMassActionRequest"])(response, reservations, this.$message)));
    }
    finishCallAction(result) {
        result ? this.reload() : this.loading = false;
    }
    actionRequest({ url, method, messages, body }, data) {
        const requestData = Object(_base_action_action_utils__WEBPACK_IMPORTED_MODULE_12__["mapRequestBody"])(data, body);
        url = this.$url.createUrl(url, data);
        messages = this.$messages.getActionNotificationsMessages(messages);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(url).pipe(this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((_url) => this.$reservationsApi.callReservationAction(_url, method, requestData, messages)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('success'));
    }
    processMeta(meta) {
        const type = this.routeParams.type;
        const filters = {};
        const routeQueryParams = this._previousType && this._previousType !== type
            ? {}
            : this.routeQueryParams;
        if (meta instanceof _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_9__["AppError"]) {
            this.error = this.$messages.getLoadingMetaError(meta);
            this.loading = false;
            return false;
        }
        switch (this.$route.snapshot.params.type) {
            case 'workplace':
                filters.labelId = this.$user.info.id;
                break;
            case 'parking':
                filters.labelIds = [this.$user.info.id];
                break;
            case 'appointment':
                filters.requestAppointmentDateFrom = Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["startOfMonth"])(new Date());
                filters.requestAppointmentDateTo = Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["endOfMonth"])(new Date());
                break;
        }
        Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["initQueryParams"])(this._queryParamsBuilder, meta, routeQueryParams, filters);
        Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["mapStatusDictionary"])(meta.columns, this.$statuses.statuses);
        this._previousType = this.routeParams.type;
        return true;
    }
}
ListService.ɵfac = function ListService_Factory(t) { return new (t || ListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__["MetaApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"])); };
ListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ListService, factory: ListService.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_5__["Subscriptions"])('destroy')
], ListService.prototype, "_subscriptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_2__["Complete"]
], ListService.prototype, "destroy", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsMessagesService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__["StatusesService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__["MeasurementsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] }, { type: _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__["MetaApiService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__["ReservationsApiService"] }, { type: _core_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"] }]; }, { _subscriptions: [], destroy: [] }); })();


/***/ })

}]);
//# sourceMappingURL=reservations-reservations-module.js.map