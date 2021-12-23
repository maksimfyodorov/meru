(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["develop-develop-module"],{

/***/ "+mAR":
/*!******************************************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-open-street-map/dev-open-street-map.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DevOpenStreetMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevOpenStreetMapComponent", function() { return DevOpenStreetMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_open_street_map_open_street_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/open-street-map/open-street-map.component */ "+2ou");



class DevOpenStreetMapComponent {
    constructor() {
        this.options = {
            x: 55.751667,
            y: 37.618778,
            zoom: 13,
        };
        this.marks = [{
                id: 1,
                x: 55.751667,
                y: 37.618778,
            }];
    }
    ngOnInit() { }
}
DevOpenStreetMapComponent.ɵfac = function DevOpenStreetMapComponent_Factory(t) { return new (t || DevOpenStreetMapComponent)(); };
DevOpenStreetMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevOpenStreetMapComponent, selectors: [["app-dev-open-street-map"]], decls: 1, vars: 2, consts: [[3, "options", "marks"]], template: function DevOpenStreetMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-open-street-map", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("marks", ctx.marks);
    } }, directives: [_base_open_street_map_open_street_map_component__WEBPACK_IMPORTED_MODULE_1__["OpenStreetMapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtb3Blbi1zdHJlZXQtbWFwLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevOpenStreetMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dev-open-street-map',
                templateUrl: './dev-open-street-map.component.html',
                styleUrls: ['./dev-open-street-map.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1VNt":
/*!********************************************************************!*\
  !*** ./src/app/composite/booking/workplace/workplace.component.ts ***!
  \********************************************************************/
/*! exports provided: WorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceComponent", function() { return WorkplaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_composite_booking_workplace_workplace_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/composite/booking/workplace/workplace.service */ "qcjb");
/* harmony import */ var _base_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/simple-filter/simple-filter.component */ "3TLQ");
/* harmony import */ var _base_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/map/map.component */ "6DYN");
/* harmony import */ var _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/booking-list/booking-list.component */ "NcEa");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");









const _c0 = function () { return ["\u041D\u0430\u0447\u0430\u043B\u043E", "\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435"]; };
function WorkplaceComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-range-picker", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShowTime", false)("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function WorkplaceComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-date-picker");
} }
class WorkplaceComponent {
    constructor($service) {
        this.$service = $service;
    }
    set items(value) {
        this._items = value;
    }
    get items() {
        return this._items || this.$service.items;
    }
}
WorkplaceComponent.ɵfac = function WorkplaceComponent_Factory(t) { return new (t || WorkplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_composite_booking_workplace_workplace_service__WEBPACK_IMPORTED_MODULE_1__["WorkplaceService"])); };
WorkplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkplaceComponent, selectors: [["app-workplace"]], inputs: { items: "items" }, decls: 10, vars: 3, consts: [[1, "workspace"], ["t1", ""], ["t2", ""], [1, "mb-24", 3, "tpl", "collapseTpl"], [1, "workspace-wrapper"], [1, "workspace__map"], ["appScroll", "", 1, "workspace__actions"], [3, "items"], [1, "mr-24", 3, "nzShowTime", "nzPlaceHolder"], ["nz-checkbox", "", 1, "mr-24"]], template: function WorkplaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkplaceComponent_ng_template_1_Template, 5, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkplaceComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-simple-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-map", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-book-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tpl", _r0)("collapseTpl", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_base_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_2__["SimpleFilterComponent"], _base_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollDirective"], _base_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_5__["BookingListComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__["NzRangePickerComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxComponent"]], styles: [".workspace-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.workspace__map[_ngcontent-%COMP%] {\n  flex-basis: calc(100% - 290px);\n}\n.workspace__actions[_ngcontent-%COMP%] {\n  flex-basis: 290px;\n  background-color: #ffffff;\n  border-left: 1px solid #f0f0f0;\n  height: 400px;\n}\n@media screen and (max-width: 1350px) {\n  .workspace-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtwbGFjZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFoQkM7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQWtCSjtBQWhCRTtFQUNFLDhCQUFBO0FBa0JKO0FBaEJFO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQWtCSjtBQWZBO0VBQ0U7SUFDRSxzQkFBQTtFQWlCRjtBQUNGIiwiZmlsZSI6IndvcmtwbGFjZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdGhlbWUvb3ZlcnJpZGUnO1xuLndvcmtzcGFjZSB7XG4gICYtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAmX19tYXAge1xuICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAtIDI5MHB4KTtcbiAgfVxuICAmX19hY3Rpb25zIHtcbiAgICBmbGV4LWJhc2lzOiAyOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGdyYXktNDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpICB7XG4gIC53b3Jrc3BhY2Utd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkplaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workplace',
                templateUrl: './workplace.component.html',
                styleUrls: ['./workplace.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_composite_booking_workplace_workplace_service__WEBPACK_IMPORTED_MODULE_1__["WorkplaceService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['items']
        }] }); })();


/***/ }),

/***/ "1kCU":
/*!********************************************************!*\
  !*** ./src/app/presentation/develop/develop.module.ts ***!
  \********************************************************/
/*! exports provided: DevelopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopModule", function() { return DevelopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _develop_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./develop-routing.module */ "xxtB");
/* harmony import */ var _components_dev_list_dev_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dev-list/dev-list.component */ "2qSp");
/* harmony import */ var _components_dev_condition_directive_dev_condition_directive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dev-condition-directive/dev-condition-directive.component */ "hUnI");
/* harmony import */ var _base_list_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/list/list.module */ "/K2S");
/* harmony import */ var _components_dev_map_dev_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dev-map/dev-map.component */ "fr/b");
/* harmony import */ var _base_map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/map/map.module */ "k+QC");
/* harmony import */ var _components_dev_reservation_view_dev_reservation_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dev-reservation-view/dev-reservation-view.component */ "RKz/");
/* harmony import */ var _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @base/reservation-view/reservation-view.module */ "J3gr");
/* harmony import */ var _components_dev_booking_workplace_dev_booking_workplace_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dev-booking-workplace/dev-booking-workplace.component */ "lc7U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_dev_open_street_map_dev_open_street_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dev-open-street-map/dev-open-street-map.component */ "+mAR");
/* harmony import */ var _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @base/open-street-map/open-street-map.module */ "NAqI");
/* harmony import */ var _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @base/simple-filter/simple-filter.module */ "6pky");
/* harmony import */ var _app_composite_booking_workplace_workplace_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/composite/booking/workplace/workplace.module */ "FvY2");
/* harmony import */ var _components_dev_loading_builds_dev_loading_builds_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dev-loading-builds/dev-loading-builds.component */ "Owjd");
/* harmony import */ var _app_composite_loading_builds_loading_builds_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/composite/loading-builds/loading-builds.module */ "zGsL");
/* harmony import */ var _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @base/filters/filters.module */ "9jWK");
/* harmony import */ var _components_dev_reservations_calendar_dev_reservations_calendar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dev-reservations-calendar/dev-reservations-calendar.component */ "u/mS");
/* harmony import */ var _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @base/calendar/calendar.module */ "AlZK");























class DevelopModule {
}
DevelopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DevelopModule });
DevelopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DevelopModule_Factory(t) { return new (t || DevelopModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _develop_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevelopRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild(),
            _base_list_list_module__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
            _base_map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"],
            _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_9__["ReservationViewModule"],
            _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_18__["FiltersModule"],
            _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_13__["OpenStreetMapModule"],
            _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_14__["SimpleFilterModule"],
            _app_composite_booking_workplace_workplace_module__WEBPACK_IMPORTED_MODULE_15__["WorkplaceModule"],
            _app_composite_loading_builds_loading_builds_module__WEBPACK_IMPORTED_MODULE_17__["LoadingBuildsModule"],
            _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DevelopModule, { declarations: [_components_dev_list_dev_list_component__WEBPACK_IMPORTED_MODULE_3__["DevListComponent"],
        _components_dev_condition_directive_dev_condition_directive_component__WEBPACK_IMPORTED_MODULE_4__["DevConditionDirectiveComponent"],
        _components_dev_map_dev_map_component__WEBPACK_IMPORTED_MODULE_6__["DevMapComponent"],
        _components_dev_reservation_view_dev_reservation_view_component__WEBPACK_IMPORTED_MODULE_8__["DevReservationViewComponent"],
        _components_dev_booking_workplace_dev_booking_workplace_component__WEBPACK_IMPORTED_MODULE_10__["DevBookingWorkplaceComponent"],
        _components_dev_open_street_map_dev_open_street_map_component__WEBPACK_IMPORTED_MODULE_12__["DevOpenStreetMapComponent"],
        _components_dev_loading_builds_dev_loading_builds_component__WEBPACK_IMPORTED_MODULE_16__["DevLoadingBuildsComponent"],
        _components_dev_reservations_calendar_dev_reservations_calendar_component__WEBPACK_IMPORTED_MODULE_19__["DevReservationsCalendarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _develop_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevelopRoutingModule"], src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _base_list_list_module__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
        _base_map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"],
        _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_9__["ReservationViewModule"],
        _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_18__["FiltersModule"],
        _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_13__["OpenStreetMapModule"],
        _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_14__["SimpleFilterModule"],
        _app_composite_booking_workplace_workplace_module__WEBPACK_IMPORTED_MODULE_15__["WorkplaceModule"],
        _app_composite_loading_builds_loading_builds_module__WEBPACK_IMPORTED_MODULE_17__["LoadingBuildsModule"],
        _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevelopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_dev_list_dev_list_component__WEBPACK_IMPORTED_MODULE_3__["DevListComponent"],
                    _components_dev_condition_directive_dev_condition_directive_component__WEBPACK_IMPORTED_MODULE_4__["DevConditionDirectiveComponent"],
                    _components_dev_map_dev_map_component__WEBPACK_IMPORTED_MODULE_6__["DevMapComponent"],
                    _components_dev_reservation_view_dev_reservation_view_component__WEBPACK_IMPORTED_MODULE_8__["DevReservationViewComponent"],
                    _components_dev_booking_workplace_dev_booking_workplace_component__WEBPACK_IMPORTED_MODULE_10__["DevBookingWorkplaceComponent"],
                    _components_dev_open_street_map_dev_open_street_map_component__WEBPACK_IMPORTED_MODULE_12__["DevOpenStreetMapComponent"],
                    _components_dev_loading_builds_dev_loading_builds_component__WEBPACK_IMPORTED_MODULE_16__["DevLoadingBuildsComponent"],
                    _components_dev_reservations_calendar_dev_reservations_calendar_component__WEBPACK_IMPORTED_MODULE_19__["DevReservationsCalendarComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _develop_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevelopRoutingModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild(),
                    _base_list_list_module__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
                    _base_map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"],
                    _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_9__["ReservationViewModule"],
                    _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_18__["FiltersModule"],
                    _base_open_street_map_open_street_map_module__WEBPACK_IMPORTED_MODULE_13__["OpenStreetMapModule"],
                    _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_14__["SimpleFilterModule"],
                    _app_composite_booking_workplace_workplace_module__WEBPACK_IMPORTED_MODULE_15__["WorkplaceModule"],
                    _app_composite_loading_builds_loading_builds_module__WEBPACK_IMPORTED_MODULE_17__["LoadingBuildsModule"],
                    _base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_20__["CalendarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "2qSp":
/*!********************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-list/dev-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: DevListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevListComponent", function() { return DevListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_develop_components_dev_list_dev_list_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @presentation/develop/components/dev-list/dev-list-utils */ "yYqb");
/* harmony import */ var _core_utils_constants_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/constants.util */ "092d");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../base/list/list.component */ "N4Bo");











function DevListComponent_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 7);
} if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", lang_r1)("nzValue", lang_r1);
} }
class DevListComponent {
    constructor($config) {
        this.$config = $config;
        this.columns = _presentation_develop_components_dev_list_dev_list_utils__WEBPACK_IMPORTED_MODULE_1__["COLUMNS"];
        this.rows = _presentation_develop_components_dev_list_dev_list_utils__WEBPACK_IMPORTED_MODULE_1__["ROWS"];
        this.sort = { sortBy: null, sortDirection: null };
        this.paging = _core_utils_constants_util__WEBPACK_IMPORTED_MODULE_2__["PAGING"];
        this.selectedRow = null;
        this.queryParams = null;
        this.lang = this.$config.get('lang');
        this.langs = this.$config.get('langs');
    }
    selectRow(selectedRow) {
        this.selectedRow = selectedRow;
    }
    changeQueryParams(queryParams) {
        this.queryParams = queryParams;
    }
}
DevListComponent.ɵfac = function DevListComponent_Factory(t) { return new (t || DevListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"])); };
DevListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevListComponent, selectors: [["app-dev-list"]], decls: 22, vars: 22, consts: [[1, "app-devlist__content"], ["nz-form", "", 3, "nzLayout"], ["nz-col", "", 3, "nzSpan"], [3, "name", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["app-list", "", 1, "app-devlist__table", 3, "columns", "rows", "lang", "sort", "paging", "sortChange", "pagingChange", "rowSelect", "queryParamsChange"], [1, "app-devlist__debug"], [3, "nzLabel", "nzValue"]], template: function DevListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u042F\u0437\u044B\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevListComponent_Template_nz_select_ngModelChange_6_listener($event) { return ctx.lang = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DevListComponent_nz_option_7_Template, 1, 2, "nz-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortChange", function DevListComponent_Template_div_sortChange_8_listener($event) { return ctx.sort = $event; })("pagingChange", function DevListComponent_Template_div_pagingChange_8_listener($event) { return ctx.paging = $event; })("rowSelect", function DevListComponent_Template_div_rowSelect_8_listener($event) { return ctx.selectRow($event); })("queryParamsChange", function DevListComponent_Template_div_queryParamsChange_8_listener($event) { return ctx.changeQueryParams($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLayout", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "lang")("ngModel", ctx.lang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns)("rows", ctx.rows)("lang", ctx.lang)("sort", ctx.sort)("paging", ctx.paging);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" SORT: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, ctx.sort), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" PAGING: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 16, ctx.paging), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" SELECTED ROW: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 18, ctx.selectedRow), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" QUERY PARAMS: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, ctx.queryParams), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _base_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  padding: 24px;\n}\n.app-devlist__content[_ngcontent-%COMP%] {\n  height: calc(100% - 256px);\n}\n.app-devlist__table[_ngcontent-%COMP%] {\n  height: calc(100% - 54px);\n}\n.app-devlist__debug[_ngcontent-%COMP%] {\n  color: #eee;\n  background-color: #222;\n  height: calc(256px);\n  margin-top: 20px;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldi1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREY7QUFNRTtFQUNFLDBCQUFBO0FBSko7QUFNRTtFQUNFLHlCQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBTEoiLCJmaWxlIjoiZGV2LWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbG9nLWhlaWdodDogMjU2cHg7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmFwcC1kZXZsaXN0IHtcblxuICAmX19jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIEBsb2ctaGVpZ2h0KTtcbiAgfVxuICAmX190YWJsZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NHB4KTtcbiAgfVxuXG4gICZfX2RlYnVnIHtcbiAgICBjb2xvcjogI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGhlaWdodDogY2FsYyhAbG9nLWhlaWdodCk7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dev-list',
                templateUrl: './dev-list.component.html',
                styleUrls: ['./dev-list.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "EZfr":
/*!****************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-map/dev-map.service.ts ***!
  \****************************************************************************/
/*! exports provided: DevMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevMapService", function() { return DevMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DevMapService {
    constructor() { }
}
DevMapService.ɵfac = function DevMapService_Factory(t) { return new (t || DevMapService)(); };
DevMapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DevMapService, factory: DevMapService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevMapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FvY2":
/*!*****************************************************************!*\
  !*** ./src/app/composite/booking/workplace/workplace.module.ts ***!
  \*****************************************************************/
/*! exports provided: WorkplaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceModule", function() { return WorkplaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _workplace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workplace.component */ "1VNt");
/* harmony import */ var _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/map/map.module */ "k+QC");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/booking-list/booking-list.module */ "xL67");
/* harmony import */ var _app_composite_booking_workplace_workplace_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/composite/booking/workplace/workplace.service */ "qcjb");
/* harmony import */ var _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/simple-filter/simple-filter.module */ "6pky");









class WorkplaceModule {
}
WorkplaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkplaceModule });
WorkplaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkplaceModule_Factory(t) { return new (t || WorkplaceModule)(); }, providers: [_app_composite_booking_workplace_workplace_service__WEBPACK_IMPORTED_MODULE_6__["WorkplaceService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_5__["BookingListModule"],
            _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_7__["SimpleFilterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkplaceModule, { declarations: [_workplace_component__WEBPACK_IMPORTED_MODULE_2__["WorkplaceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_5__["BookingListModule"],
        _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_7__["SimpleFilterModule"]], exports: [_workplace_component__WEBPACK_IMPORTED_MODULE_2__["WorkplaceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkplaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_workplace_component__WEBPACK_IMPORTED_MODULE_2__["WorkplaceComponent"]],
                providers: [_app_composite_booking_workplace_workplace_service__WEBPACK_IMPORTED_MODULE_6__["WorkplaceService"]],
                exports: [_workplace_component__WEBPACK_IMPORTED_MODULE_2__["WorkplaceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_map_map_module__WEBPACK_IMPORTED_MODULE_3__["MapModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _base_booking_list_booking_list_module__WEBPACK_IMPORTED_MODULE_5__["BookingListModule"],
                    _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_7__["SimpleFilterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "IBeW":
/*!**********************************************************************!*\
  !*** ./src/app/composite/loading-builds/loading-builds.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoadingBuildsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBuildsComponent", function() { return LoadingBuildsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _app_composite_loading_builds_loading_builds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/composite/loading-builds/loading-builds.service */ "l4Mg");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoadingBuildsComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.linkImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", "img");
} }
function LoadingBuildsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadingBuildsComponent_li_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const floor_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.fetchImg(floor_r2 == null ? null : floor_r2.mapImageUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fetch IMG data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const floor_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](floor_r2.name);
} }
class LoadingBuildsComponent {
    constructor($service, $loading, cdr) {
        this.$service = $service;
        this.$loading = $loading;
        this.cdr = cdr;
        this.build = [];
    }
    fetchBuild() {
        this.$loading.contentLoading$.next(true);
        this._subs = this.$service.getBuilding.subscribe((data) => {
            this.build = data;
            this.$loading.contentLoading$.next(false);
            this.cdr.markForCheck();
        });
    }
    fetchImg(url) {
        this.$service.getBuildingImageBlob(`/images${url}`).subscribe((data) => {
            this.linkImg = data;
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
    }
}
LoadingBuildsComponent.ɵfac = function LoadingBuildsComponent_Factory(t) { return new (t || LoadingBuildsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_composite_loading_builds_loading_builds_service__WEBPACK_IMPORTED_MODULE_3__["LoadingBuildsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_4__["GlobalLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
LoadingBuildsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingBuildsComponent, selectors: [["app-loading-builds"]], decls: 6, vars: 2, consts: [["nz-button", "", "nzType", "primary", 3, "click"], [1, "img"], [3, "src", "alt", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "src", "alt"], ["nz-button", "", "nzType", "dashed", 3, "click"]], template: function LoadingBuildsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoadingBuildsComponent_Template_button_click_0_listener() { return ctx.fetchBuild(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u044D\u0442\u0430\u0436\u0438 \u0437\u0434\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoadingBuildsComponent_img_3_Template, 1, 2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoadingBuildsComponent_li_5_Template, 5, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.linkImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.build);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 450px;\n  height: auto;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctYnVpbGRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUpBO0VBS0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJsb2FkaW5nLWJ1aWxkcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscriptions"])()
], LoadingBuildsComponent.prototype, "_subs", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingBuildsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-loading-builds',
                templateUrl: './loading-builds.component.html',
                styleUrls: ['./loading-builds.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_composite_loading_builds_loading_builds_service__WEBPACK_IMPORTED_MODULE_3__["LoadingBuildsService"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_4__["GlobalLoaderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { _subs: [] }); })();


/***/ }),

/***/ "Owjd":
/*!****************************************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-loading-builds/dev-loading-builds.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DevLoadingBuildsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevLoadingBuildsComponent", function() { return DevLoadingBuildsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _composite_loading_builds_loading_builds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../composite/loading-builds/loading-builds.component */ "IBeW");



class DevLoadingBuildsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DevLoadingBuildsComponent.ɵfac = function DevLoadingBuildsComponent_Factory(t) { return new (t || DevLoadingBuildsComponent)(); };
DevLoadingBuildsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevLoadingBuildsComponent, selectors: [["app-dev-loading-builds"]], decls: 2, vars: 0, consts: [[1, "dev-loading-builds"]], template: function DevLoadingBuildsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-builds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_composite_loading_builds_loading_builds_component__WEBPACK_IMPORTED_MODULE_1__["LoadingBuildsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtbG9hZGluZy1idWlsZHMuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevLoadingBuildsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dev-loading-builds',
                templateUrl: './dev-loading-builds.component.html',
                styleUrls: ['./dev-loading-builds.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RKz/":
/*!********************************************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-reservation-view/dev-reservation-view.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DevReservationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevReservationViewComponent", function() { return DevReservationViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/layout-shared.service */ "ndgU");
/* harmony import */ var _base_reservation_view_reservation_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base/reservation-view/reservation-view.component */ "7f2s");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");







const _c0 = ["titleExtraTpl"];
function DevReservationViewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-button-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevReservationViewComponent_ng_template_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.acceptReservation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DevReservationViewComponent {
    constructor($layout) {
        this.$layout = $layout;
    }
    ngAfterViewInit() {
        this.$layout.extra = this.titleExtraTpl;
    }
    acceptReservation() {
        console.log('accept reservation');
    }
}
DevReservationViewComponent.ɵfac = function DevReservationViewComponent_Factory(t) { return new (t || DevReservationViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_1__["LayoutSharedService"])); };
DevReservationViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevReservationViewComponent, selectors: [["app-dev-reservation-view"]], viewQuery: function DevReservationViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleExtraTpl = _t.first);
    } }, decls: 3, vars: 0, consts: [["titleExtraTpl", ""], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function DevReservationViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DevReservationViewComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-reservation-view");
    } }, directives: [_base_reservation_view_reservation_view_component__WEBPACK_IMPORTED_MODULE_2__["ReservationViewComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtcmVzZXJ2YXRpb24tdmlldy5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevReservationViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dev-reservation-view',
                templateUrl: './dev-reservation-view.component.html',
                styleUrls: ['./dev-reservation-view.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_1__["LayoutSharedService"] }]; }, { titleExtraTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['titleExtraTpl']
        }] }); })();


/***/ }),

/***/ "fr/b":
/*!******************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-map/dev-map.component.ts ***!
  \******************************************************************************/
/*! exports provided: DevMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevMapComponent", function() { return DevMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_develop_components_dev_map_dev_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @presentation/develop/components/dev-map/dev-map.service */ "EZfr");
/* harmony import */ var _base_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/map/map.component */ "6DYN");




class DevMapComponent {
    constructor() { }
    ngOnInit() { }
}
DevMapComponent.ɵfac = function DevMapComponent_Factory(t) { return new (t || DevMapComponent)(); };
DevMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevMapComponent, selectors: [["app-dev-map"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_presentation_develop_components_dev_map_dev_map_service__WEBPACK_IMPORTED_MODULE_1__["DevMapService"]])], decls: 2, vars: 1, consts: [[1, "dev-map", "p-24"], [3, "img"]], template: function DevMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", "/assets/images/booking-1.png");
    } }, directives: [_base_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtbWFwLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dev-map',
                templateUrl: './dev-map.component.html',
                styleUrls: ['./dev-map.component.less'],
                providers: [_presentation_develop_components_dev_map_dev_map_service__WEBPACK_IMPORTED_MODULE_1__["DevMapService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hUnI":
/*!**************************************************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-condition-directive/dev-condition-directive.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DevConditionDirectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevConditionDirectiveComponent", function() { return DevConditionDirectiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _core_directives_condition_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/directives/condition.directive */ "taEc");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");











function DevConditionDirectiveComponent_nz_form_item_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041E\u0431\u044A\u0435\u043A\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("disabled", result_r1 && ctx_r0.type === "disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043E\u043F\u043A\u0430! (", result_r1, ") ");
} }
class DevConditionDirectiveComponent {
    constructor() {
        this.type = 'disable';
        this.expression = 'equals(a, 1)';
        this.data = { a: 1 };
    }
    get trimmedExpression() {
        return this.expression.replace(/\r?\n|\r/g, '');
    }
    get stringedData() {
        return JSON.stringify(this.data, null, 2);
    }
    switchExpression() {
        this.expression = String(this.expression !== 'true');
    }
    changeExpression(expression) {
        this.expression = expression;
    }
    changeData(data) {
        try {
            this.data = JSON.parse(data);
        }
        catch (e) {
        }
    }
}
DevConditionDirectiveComponent.ɵfac = function DevConditionDirectiveComponent_Factory(t) { return new (t || DevConditionDirectiveComponent)(); };
DevConditionDirectiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevConditionDirectiveComponent, selectors: [["app-condition-directive"]], decls: 22, vars: 11, consts: [[1, "p-15"], ["nz-form", "", 3, "nzLayout"], ["name", "type", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"], ["nz-input", "", "name", "expression", 3, "ngModel", "ngModelChange"], ["nz-input", "", "name", "data", "rows", "8", 3, "ngModel", "ngModelChange"], [4, "appCondition", "appConditionFor", "appConditionData", "appConditionType"], ["nz-button", "", 3, "nzType", "disabled"]], template: function DevConditionDirectiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0422\u0438\u043F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevConditionDirectiveComponent_Template_nz_select_ngModelChange_6_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0412\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevConditionDirectiveComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.changeExpression($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0414\u0430\u043D\u043D\u044B\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DevConditionDirectiveComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DevConditionDirectiveComponent_nz_form_item_21_Template, 5, 3, "nz-form-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLayout", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "visible")("nzLabel", "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "disable")("nzLabel", "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expression);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stringedData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appConditionFor", ctx.expression)("appConditionData", ctx.data)("appConditionType", ctx.type);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzOptionComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _core_directives_condition_directive__WEBPACK_IMPORTED_MODULE_6__["ConditionDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtY29uZGl0aW9uLWRpcmVjdGl2ZS5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevConditionDirectiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-condition-directive',
                templateUrl: './dev-condition-directive.component.html',
                styleUrls: ['./dev-condition-directive.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l4Mg":
/*!********************************************************************!*\
  !*** ./src/app/composite/loading-builds/loading-builds.service.ts ***!
  \********************************************************************/
/*! exports provided: LoadingBuildsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBuildsService", function() { return LoadingBuildsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/images/services/image-blob.service */ "AgCt");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");




class LoadingBuildsService {
    constructor($images, $userOffices) {
        this.$images = $images;
        this.$userOffices = $userOffices;
    }
    get getBuilding() {
        return this.$userOffices.getMyOrderedFloors();
    }
    getBuildingImageBlob(url) {
        return this.$images.getImageBlob(url);
    }
}
LoadingBuildsService.ɵfac = function LoadingBuildsService_Factory(t) { return new (t || LoadingBuildsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_1__["ImageBlobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_2__["UserOfficesService"])); };
LoadingBuildsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingBuildsService, factory: LoadingBuildsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingBuildsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_1__["ImageBlobService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_2__["UserOfficesService"] }]; }, null); })();


/***/ }),

/***/ "lc7U":
/*!**********************************************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-booking-workplace/dev-booking-workplace.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DevBookingWorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevBookingWorkplaceComponent", function() { return DevBookingWorkplaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _composite_booking_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../composite/booking/workplace/workplace.component */ "1VNt");



class DevBookingWorkplaceComponent {
    constructor() { }
    ngOnInit() {
    }
}
DevBookingWorkplaceComponent.ɵfac = function DevBookingWorkplaceComponent_Factory(t) { return new (t || DevBookingWorkplaceComponent)(); };
DevBookingWorkplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevBookingWorkplaceComponent, selectors: [["app-dev-map-workspace"]], decls: 2, vars: 0, consts: [[1, "dev-map-workspace"]], template: function DevBookingWorkplaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-workplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_composite_booking_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_1__["WorkplaceComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtYm9va2luZy13b3JrcGxhY2UuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevBookingWorkplaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dev-map-workspace',
                templateUrl: './dev-booking-workplace.component.html',
                styleUrls: ['./dev-booking-workplace.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qcjb":
/*!******************************************************************!*\
  !*** ./src/app/composite/booking/workplace/workplace.service.ts ***!
  \******************************************************************/
/*! exports provided: WorkplaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceService", function() { return WorkplaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WorkplaceService {
    constructor() { }
    get tags() {
        return ['Монитор', 'Телевизор'];
    }
    get actions() {
        return [
            {
                id: '1',
                title: 'Забронировать место',
                type: 'primary',
                data: {
                    a: 1,
                    b: 2,
                }
            }
        ];
    }
    get items() {
        return [
            {
                id: 1,
                name: 'Переговорная 1',
                label: 'Этаж 10',
                tags: this.tags,
                actions: this.actions,
            },
            {
                id: 2,
                name: 'Переговорная 2',
                label: 'Этаж 12',
                tags: this.tags,
                actions: this.actions,
            },
            {
                id: 3,
                name: 'Переговорная 3',
                label: 'Этаж 13',
                tags: this.tags,
                actions: this.actions,
            },
            {
                id: 4,
                name: 'Переговорная 4',
                label: 'Этаж 9',
                tags: this.tags,
                actions: this.actions,
            }
        ];
    }
}
WorkplaceService.ɵfac = function WorkplaceService_Factory(t) { return new (t || WorkplaceService)(); };
WorkplaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkplaceService, factory: WorkplaceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkplaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "u/mS":
/*!******************************************************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-reservations-calendar/dev-reservations-calendar.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DevReservationsCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevReservationsCalendarComponent", function() { return DevReservationsCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var _base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/calendar/calendar.component */ "WtvG");





class DevReservationsCalendarComponent {
    constructor() {
        this.mode = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.modes = [angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month, angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Day, angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Week];
        this.events = [{
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subHours"])(new Date(), 1),
                end: new Date(),
                title: 'Бронь красивая переговорная',
                meta: {
                    name: 'Name 2',
                }
            }, {
                start: new Date(),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(new Date(), 1),
                title: 'Бронь красивая переговорная',
                data: {
                    anydata: 1
                },
                meta: {
                    name: 'Name 1',
                }
            }];
    }
    eventHandler(ev) {
        console.log(ev);
    }
    ngOnInit() {
    }
}
DevReservationsCalendarComponent.ɵfac = function DevReservationsCalendarComponent_Factory(t) { return new (t || DevReservationsCalendarComponent)(); };
DevReservationsCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevReservationsCalendarComponent, selectors: [["app-dev-reservations-calendar"]], decls: 1, vars: 3, consts: [[3, "modes", "mode", "events", "daySelect", "eventSelect"]], template: function DevReservationsCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("daySelect", function DevReservationsCalendarComponent_Template_app_calendar_daySelect_0_listener($event) { return ctx.eventHandler($event); })("eventSelect", function DevReservationsCalendarComponent_Template_app_calendar_eventSelect_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modes", ctx.modes)("mode", ctx.mode)("events", ctx.events);
    } }, directives: [_base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtcmVzZXJ2YXRpb25zLWNhbGVuZGFyLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevReservationsCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dev-reservations-calendar',
                templateUrl: './dev-reservations-calendar.component.html',
                styleUrls: ['./dev-reservations-calendar.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xxtB":
/*!****************************************************************!*\
  !*** ./src/app/presentation/develop/develop-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DevelopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopRoutingModule", function() { return DevelopRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_dev_list_dev_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dev-list/dev-list.component */ "2qSp");
/* harmony import */ var _components_dev_condition_directive_dev_condition_directive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dev-condition-directive/dev-condition-directive.component */ "hUnI");
/* harmony import */ var _presentation_develop_components_dev_map_dev_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/develop/components/dev-map/dev-map.component */ "fr/b");
/* harmony import */ var _presentation_develop_components_dev_reservation_view_dev_reservation_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/develop/components/dev-reservation-view/dev-reservation-view.component */ "RKz/");
/* harmony import */ var _presentation_develop_components_dev_booking_workplace_dev_booking_workplace_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @presentation/develop/components/dev-booking-workplace/dev-booking-workplace.component */ "lc7U");
/* harmony import */ var _presentation_develop_components_dev_open_street_map_dev_open_street_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @presentation/develop/components/dev-open-street-map/dev-open-street-map.component */ "+mAR");
/* harmony import */ var _presentation_develop_components_dev_loading_builds_dev_loading_builds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @presentation/develop/components/dev-loading-builds/dev-loading-builds.component */ "Owjd");
/* harmony import */ var _presentation_develop_components_dev_reservations_calendar_dev_reservations_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @presentation/develop/components/dev-reservations-calendar/dev-reservations-calendar.component */ "u/mS");












const routes = [
    {
        path: 'list',
        component: _components_dev_list_dev_list_component__WEBPACK_IMPORTED_MODULE_2__["DevListComponent"]
    },
    {
        path: 'calendar',
        component: _presentation_develop_components_dev_reservations_calendar_dev_reservations_calendar_component__WEBPACK_IMPORTED_MODULE_9__["DevReservationsCalendarComponent"]
    },
    {
        path: 'map',
        component: _presentation_develop_components_dev_map_dev_map_component__WEBPACK_IMPORTED_MODULE_4__["DevMapComponent"],
        data: {
            title: 'Карта'
        }
    },
    {
        path: 'condition-directive',
        component: _components_dev_condition_directive_dev_condition_directive_component__WEBPACK_IMPORTED_MODULE_3__["DevConditionDirectiveComponent"],
        data: {
            title: 'Условная директива'
        }
    },
    {
        path: 'reservation-view',
        component: _presentation_develop_components_dev_reservation_view_dev_reservation_view_component__WEBPACK_IMPORTED_MODULE_5__["DevReservationViewComponent"],
        data: {
            title: 'Бронирование'
        }
    },
    {
        path: 'open-street-map',
        component: _presentation_develop_components_dev_open_street_map_dev_open_street_map_component__WEBPACK_IMPORTED_MODULE_7__["DevOpenStreetMapComponent"],
        data: {
            title: 'Карта OpenStreetMap'
        }
    },
    {
        path: 'loading-builds',
        component: _presentation_develop_components_dev_loading_builds_dev_loading_builds_component__WEBPACK_IMPORTED_MODULE_8__["DevLoadingBuildsComponent"],
        data: {
            title: 'Загрузка зданий'
        }
    },
    {
        path: 'booking',
        children: [
            {
                path: 'workplace',
                component: _presentation_develop_components_dev_booking_workplace_dev_booking_workplace_component__WEBPACK_IMPORTED_MODULE_6__["DevBookingWorkplaceComponent"],
                data: {
                    title: 'Рабочее место'
                }
            }
        ],
        data: {
            title: 'Бронирование'
        }
    },
];
class DevelopRoutingModule {
}
DevelopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DevelopRoutingModule });
DevelopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DevelopRoutingModule_Factory(t) { return new (t || DevelopRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DevelopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevelopRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yYqb":
/*!****************************************************************************!*\
  !*** ./src/app/presentation/develop/components/dev-list/dev-list-utils.ts ***!
  \****************************************************************************/
/*! exports provided: COLUMNS, ROWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS", function() { return COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS", function() { return ROWS; });
const COLUMNS = [{
        id: 'id',
        title: {
            ru: 'Идентификатор',
            en: 'Identifier'
        },
        sortable: true,
        type: 'number'
    }, {
        id: 'string',
        title: {
            ru: 'Строковая',
            en: 'String'
        },
        sortable: true,
        type: 'string',
    }, {
        id: 'number',
        title: {
            ru: 'Число',
            en: 'Number col'
        },
        sortable: true,
        type: 'number',
        renderer: {
            type: 'number',
            options: {
                format: '1.1-2'
            }
        }
    }, {
        id: 'boolean',
        title: 'Логическое значение',
        sortable: true,
        type: 'boolean',
        renderer: {
            type: 'map',
            options: {
                map: {
                    'true': 'Конечно',
                    'false': 'Нет конечно'
                }
            }
        }
    }, {
        id: 'datetime',
        title: 'Дата',
        sortable: true,
        type: 'datetime',
        renderer: {
            type: 'datetime',
            options: {
                format: {
                    ru: 'dd.MM.yyyy',
                    en: 'yyyy-MM-dd'
                }
            }
        }
    }, {
        id: 'status',
        title: 'Статус',
        sortable: true,
        type: 'number',
        renderer: {
            type: 'status',
            options: {
                map: {}
            }
        }
    }, {
        id: 'actions',
        title: 'Действия',
        sortable: false,
        type: 'string',
        renderer: {
            type: 'actions',
            options: {
                actions: [{
                        label: 'Деактивировать',
                        isDanger: true,
                        buttonType: 'link',
                        params: {
                            id: 'delete',
                            'route': ''
                        },
                        condition: {
                            type: 'visible',
                            expression: 'status === 1'
                        }
                    }, {
                        label: 'Активировать',
                        params: {
                            id: 'cancel',
                            'route': ''
                        },
                        condition: {
                            type: 'visible',
                            expression: 'status === 2'
                        }
                    }, {
                        label: 'Any action',
                        buttonType: 'primary',
                        params: {
                            id: 'cancel',
                            'route': ''
                        },
                        condition: {
                            type: 'visible',
                            expression: 'status === 3'
                        }
                    }],
                direction: 'row'
            }
        }
    }];
const ROWS = [{
        id: 0,
        string: 'Какая-то строка 1',
        number: 1001,
        boolean: true,
        datetime: '2018-09-09',
        status: 1
    }, {
        id: 0,
        string: 'Какая-то строка 1',
        number: 1001,
        boolean: true,
        datetime: new Date(),
        status: 2
    }, {
        id: 0,
        string: 'Какая-то строка 1',
        number: 1001,
        boolean: true,
        status: 3
    }, {
        id: 0,
        string: 'Какая-то строка 1',
        number: 1001,
        boolean: true,
        status: 1
    }, {
        id: 0,
        string: 'Какая-то строка 1',
        number: 1001,
        boolean: true,
        status: 1
    }, {
        id: 0,
        string: 'Какая-то строка 1',
        number: 1001,
        boolean: true,
        status: 2
    }, {
        id: 0,
        string: 'Какая-то строка 1',
        number: 1001,
        boolean: true,
        status: 2
    }];


/***/ }),

/***/ "zGsL":
/*!*******************************************************************!*\
  !*** ./src/app/composite/loading-builds/loading-builds.module.ts ***!
  \*******************************************************************/
/*! exports provided: LoadingBuildsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBuildsModule", function() { return LoadingBuildsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_builds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-builds.component */ "IBeW");
/* harmony import */ var _app_composite_loading_builds_loading_builds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/composite/loading-builds/loading-builds.service */ "l4Mg");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");






class LoadingBuildsModule {
}
LoadingBuildsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadingBuildsModule });
LoadingBuildsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadingBuildsModule_Factory(t) { return new (t || LoadingBuildsModule)(); }, providers: [_app_composite_loading_builds_loading_builds_service__WEBPACK_IMPORTED_MODULE_3__["LoadingBuildsService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingBuildsModule, { declarations: [_loading_builds_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBuildsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"]], exports: [_loading_builds_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBuildsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingBuildsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loading_builds_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBuildsComponent"]],
                providers: [_app_composite_loading_builds_loading_builds_service__WEBPACK_IMPORTED_MODULE_3__["LoadingBuildsService"]],
                exports: [_loading_builds_component__WEBPACK_IMPORTED_MODULE_2__["LoadingBuildsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=develop-develop-module.js.map