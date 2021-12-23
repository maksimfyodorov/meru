(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservation-workplace-create-reservation-workplace-create-module"],{

/***/ "+1EI":
/*!*******************************************************************************!*\
  !*** ./src/app/base/reservation-workplace/reservation-workplace.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReservationWorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationWorkplaceComponent", function() { return ReservationWorkplaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/shared/http/utils/images.const */ "xN5w");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/calendar/calendar.component */ "WtvG");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "iYEa");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");








function ReservationWorkplaceComponent_app_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "imageBlob");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.workplace.name)("image", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.imageUrl)))("descriptionList", ctx_r0.descriptionList)("tags", ctx_r0.tags);
} }
const _c0 = function () { return ["month", "day"]; };
class ReservationWorkplaceComponent {
    constructor(router) {
        this.router = router;
        this.events = [];
        this.descriptionList = [];
        this.workplace = null;
        this.tags = [];
        this.isLoading = false;
        this.mode = 'month';
        this.reservation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.monthSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageUrl = _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_WORKPLACE_CARD"];
    }
    ngOnInit() { }
    monthSelectHandler(ev) {
        this.monthSelect.emit(ev);
    }
    eventHandler(ev) {
        if (ev.id === undefined) {
            this.reservation.emit({
                start: ev.start,
                end: ev.end,
                id: this.workplace.id,
            });
        }
        else if (ev.appointmentId) {
            this.router.navigate([
                '/reservations/appointment/view/' +
                    encodeURIComponent(ev.appointmentId),
            ]);
        }
    }
}
ReservationWorkplaceComponent.ɵfac = function ReservationWorkplaceComponent_Factory(t) { return new (t || ReservationWorkplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ReservationWorkplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReservationWorkplaceComponent, selectors: [["app-reservation-workplace"]], inputs: { events: "events", descriptionList: "descriptionList", workplace: "workplace", tags: "tags", isLoading: "isLoading", mode: "mode" }, outputs: { reservation: "reservation", monthSelect: "monthSelect" }, decls: 6, vars: 10, consts: [[1, "reservation"], [1, "reservation__card"], [3, "title", "image", "descriptionList", "tags", 4, "ngIf"], [1, "reservation__main"], [1, "reservation__block", "_calendar"], [3, "modes", "mode", "loading", "events", "disablePast", "allowSelectEmptyDay", "allowSelectDayEvent", "allowSelectMonthEvent", "eventSelect", "periodChange"], [3, "title", "image", "descriptionList", "tags"]], template: function ReservationWorkplaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReservationWorkplaceComponent_app_card_2_Template, 3, 8, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-calendar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventSelect", function ReservationWorkplaceComponent_Template_app_calendar_eventSelect_5_listener($event) { return ctx.eventHandler($event); })("periodChange", function ReservationWorkplaceComponent_Template_app_calendar_periodChange_5_listener($event) { return ctx.monthSelectHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.workplace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("mode", ctx.mode)("loading", ctx.isLoading)("events", ctx.events)("disablePast", true)("allowSelectEmptyDay", true)("allowSelectDayEvent", true)("allowSelectMonthEvent", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_6__["ImageBlobPipe"]], styles: [".reservation[_ngcontent-%COMP%] {\n  display: flex;\n}\n.reservation__card[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n.reservation__main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.reservation__block[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.reservation__block[_ngcontent-%COMP%]    + .reservation__block[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.reservation__block._calendar[_ngcontent-%COMP%] {\n  padding: 10px 0 30px 0;\n}\n.reservation__divider[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.reservation__divider[_ngcontent-%COMP%]     .ant-divider {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLXdvcmtwbGFjZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQUU7RUFDRSxzQkFBQTtBQUVKO0FBREk7RUFDRSxnQkFBQTtBQUdOO0FBREk7RUFDRSxzQkFBQTtBQUdOO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFIRTtFQUdJLGFBQUE7QUFHTiIsImZpbGUiOiJyZXNlcnZhdGlvbi13b3JrcGxhY2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXJ2YXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAmX19jYXJkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIH1cbiAgJl9fbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgJl9fYmxvY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgJiArIC5yZXNlcnZhdGlvbl9fYmxvY2sge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG4gICAgJi5fY2FsZW5kYXIge1xuICAgICAgcGFkZGluZzogMTBweCAwIDMwcHggMDtcbiAgICB9XG4gIH1cbiAgJl9fZGl2aWRlciB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIDo6bmctZGVlcCAuYW50LWRpdmlkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationWorkplaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reservation-workplace',
                templateUrl: './reservation-workplace.component.html',
                styleUrls: ['./reservation-workplace.component.less'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descriptionList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], workplace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reservation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], monthSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "CPMP":
/*!***************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-workplace-create/reservation-workplace-create.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ReservationWorkplaceCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationWorkplaceCreateModule", function() { return ReservationWorkplaceCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/filters/filters.module */ "9jWK");
/* harmony import */ var _reservation_workplace_create_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-workplace-create-routing.module */ "dKpu");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create/create.component */ "kPEA");
/* harmony import */ var _src_app_base_reservation_workplace_reservation_workplace_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/base/reservation-workplace/reservation-workplace.module */ "xxg6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










class ReservationWorkplaceCreateModule {
}
ReservationWorkplaceCreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationWorkplaceCreateModule });
ReservationWorkplaceCreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationWorkplaceCreateModule_Factory(t) { return new (t || ReservationWorkplaceCreateModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _reservation_workplace_create_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReservationWorkplaceCreateRoutingModule"],
            _src_app_base_reservation_workplace_reservation_workplace_module__WEBPACK_IMPORTED_MODULE_5__["ReservationWorkplaceModule"],
            _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_2__["FiltersModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationWorkplaceCreateModule, { declarations: [_components_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _reservation_workplace_create_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReservationWorkplaceCreateRoutingModule"],
        _src_app_base_reservation_workplace_reservation_workplace_module__WEBPACK_IMPORTED_MODULE_5__["ReservationWorkplaceModule"],
        _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_2__["FiltersModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationWorkplaceCreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _reservation_workplace_create_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReservationWorkplaceCreateRoutingModule"],
                    _src_app_base_reservation_workplace_reservation_workplace_module__WEBPACK_IMPORTED_MODULE_5__["ReservationWorkplaceModule"],
                    _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_2__["FiltersModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dKpu":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-workplace-create/reservation-workplace-create-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ReservationWorkplaceCreateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationWorkplaceCreateRoutingModule", function() { return ReservationWorkplaceCreateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/create.component */ "kPEA");





const routes = [
    {
        path: ':workplaceId',
        pathMatch: 'full',
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
        data: {
            title: 'Переговорная комната',
        },
    },
];
class ReservationWorkplaceCreateRoutingModule {
}
ReservationWorkplaceCreateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationWorkplaceCreateRoutingModule });
ReservationWorkplaceCreateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationWorkplaceCreateRoutingModule_Factory(t) { return new (t || ReservationWorkplaceCreateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationWorkplaceCreateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationWorkplaceCreateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kPEA":
/*!**************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-workplace-create/components/create/create.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_app_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _create_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create.service */ "kWn/");
/* harmony import */ var _src_app_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/core/services/global-loader.service */ "e5AP");
/* harmony import */ var _src_app_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _base_reservation_workplace_reservation_workplace_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../base/reservation-workplace/reservation-workplace.component */ "+1EI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");

















const _c0 = ["modalTitleTpl"];
const _c1 = ["modalContentTpl"];
const _c2 = ["modalFooterTpl"];
const _c3 = ["reservationModalTpl"];
function CreateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "Approve reservation"), " ");
} }
function CreateComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "Minimum booking period 15 minutes"));
} }
function CreateComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateComponent_ng_template_3_div_1_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateComponent_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.cancelReservation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateComponent_ng_template_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.approveReservation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.wrongRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.wrongRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Approve"), " ");
} }
const _c4 = function (a0, a1) { return [a0, a1]; };
function CreateComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-filter-date", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateComponent_ng_template_5_Template_app_filter_date_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.updateDateTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 12, "Place"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.workplace == null ? null : ctx_r5.workplace.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c4, ctx_r5.dateTimeFromControl.value, ctx_r5.dateTimeToControl.value))("layout", "horizontal")("format", ctx_r5.dateTimeFormat)("workHours", ctx_r5.workHours)("minDuration", ctx_r5.minDuration)("allowAllDay", false)("autoUpdateDateTo", false)("minDateTime", ctx_r5.dateTimeFrom)("maxDateTime", ctx_r5.dateTimeTo)("staticDisabled", true);
} }
// @Kholodov отрефакторить для разных типов
class CreateComponent {
    constructor(_service, _cdr, _loader, _statuses, _modal, _translate, route) {
        this._service = _service;
        this._cdr = _cdr;
        this._loader = _loader;
        this._statuses = _statuses;
        this._modal = _modal;
        this._translate = _translate;
        this.route = route;
        this.reservationAllowedFrom = [6, 0];
        this.reservationAllowedTo = [23, 0];
        this.dataBusy = [];
        this.data = [];
        this.reservations = {};
        this.workHours = [];
        this.wrongRange = false;
        this.now = new Date();
        this.mode = 'month';
        this.isLoading = false;
    }
    ngOnDestroy() { }
    ngOnInit() {
        this.mode = this.route.snapshot.queryParams.mode || 'month';
        this.dateTimeFromControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.dateTimeToControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.dateTimeFormat = this._service.dateTimeFormat$;
        this.workHours = [0, 24];
        this.minDuration = 1000 * 60 * 15;
        this.reservations = {
            success: [],
            errors: [],
        };
        let dateFrom = new Date();
        dateFrom.setDate(0);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        let dateTo = new Date(dateFrom);
        dateTo.setMonth(dateTo.getMonth() + 1);
        this.updateDate(dateFrom, dateTo);
    }
    monthSelectHandler(ev) {
        this.updateDate(new Date(ev[0]), new Date(ev[1]));
    }
    updateDate(dateFrom, dateTo) {
        // this._service.workplace$
        this.isLoading = true;
        this._service
            .getWorkplace$(dateFrom > this.now ? dateFrom : this.now, dateTo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(({ workplace, tags, floor, appointments, building }) => {
            this.isLoading = false;
            this.workplace = workplace;
            if (this.workplace.reservationAllowedFrom) {
                this.reservationAllowedFrom = this.workplace.reservationAllowedFrom
                    .split(':')
                    .map((val) => +val);
            }
            else if (building && building.workDayBeginHour) {
                this.reservationAllowedFrom = [building.workDayBeginHour, 0];
            }
            if (this.workplace.reservationAllowedTo) {
                this.reservationAllowedTo = this.workplace.reservationAllowedTo
                    .split(':')
                    .map((val) => +val);
            }
            else if (building && building.workDayEndHour) {
                this.reservationAllowedTo = [building.workDayEndHour, 0];
            }
            this.tags = tags;
            this.descriptionList = [
                {
                    name: this._translate.transform('Description'),
                    value: workplace.description,
                },
                {
                    name: this._translate.transform('Place count'),
                    value: String(workplace.seatCount),
                },
                {
                    name: this._translate.transform('Building'),
                    value: floor.name,
                },
            ];
            this.dataBusy = [];
            if (Array.isArray(appointments)) {
                appointments = appointments.filter((a) => {
                    let aStart = new Date(a.appointmentDateFrom);
                    let aEnd = new Date(a.appointmentDateTo);
                    if (aStart.getHours() >= this.reservationAllowedFrom[0]) {
                        if (aEnd.getHours() <= this.reservationAllowedTo[0]) {
                            return true;
                        }
                    }
                    return false;
                });
                this.dataBusy = appointments.map((item, index) => ({
                    id: index + 1,
                    appointmentId: item.appointmentId,
                    start: new Date(item.appointmentDateFrom),
                    end: new Date(item.appointmentDateTo),
                    title: `${this._translate.transform('Busy')} ${new Date(item.appointmentDateFrom).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    })} - ${new Date(item.appointmentDateTo).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}`,
                    data: item,
                    cssClass: 'calendar-busy-area-room',
                }));
            }
            this.addEmptyZones();
        });
    }
    addEmptyZones() {
        this.dataBusy.sort((a, b) => +a.start - +b.start);
        this.data = [...this.dataBusy];
        let now = new Date();
        let year = new Date();
        year.setFullYear(year.getFullYear() + 1);
        year.setHours(this.reservationAllowedTo[0]);
        year.setMinutes(this.reservationAllowedTo[1]);
        year.setSeconds(0);
        while (year > now) {
            if (now.getHours() < this.reservationAllowedFrom[0]) {
                now.setHours(this.reservationAllowedFrom[0]);
                now.setMinutes(this.reservationAllowedFrom[1]);
            }
            let _start = new Date(now);
            let _end = new Date(now);
            _end.setHours(this.reservationAllowedTo[0]);
            _end.setMinutes(this.reservationAllowedTo[1]);
            _end.setSeconds(0);
            let partsDay = this.dataBusy.filter((d) => {
                let __start = new Date(_start);
                __start.setHours(0);
                __start.setMinutes(0);
                __start.setSeconds(0);
                let __end = new Date(_end);
                __end.setHours(23);
                __end.setMinutes(59);
                __end.setSeconds(0);
                return +d.start + 1000 * 60 >= +__start && +d.end - 1000 * 60 < +__end;
            });
            let fullDay = partsDay.find((d) => d.start.getHours() <= this.reservationAllowedFrom[0] &&
                d.end.getHours() >= this.reservationAllowedTo[0]);
            if (fullDay) {
                now.setDate(now.getDate() + 1);
                now.setHours(this.reservationAllowedFrom[0]);
                now.setMinutes(this.reservationAllowedFrom[1]);
                now.setSeconds(0);
                continue;
            }
            if (partsDay.length === 0) {
                this.addFreeZone(_start, _end);
            }
            else if (partsDay.length === 1) {
                _end = new Date(partsDay[0].start);
                this.addFreeZone(_start, _end);
                _start = new Date(partsDay[0].end);
                _end = new Date(now);
                _end.setHours(this.reservationAllowedTo[0]);
                _end.setMinutes(this.reservationAllowedTo[1]);
                _end.setSeconds(0);
                this.addFreeZone(_start, _end);
            }
            else {
                for (let i = 0; i < partsDay.length; i++) {
                    if (i === 0) {
                        if (_start < new Date(partsDay[i].start)) {
                            _end = new Date(partsDay[i].start);
                            this.addFreeZone(_start, _end);
                        }
                    }
                    else if (i === partsDay.length - 1) {
                        if (i > 0) {
                            _start = new Date(partsDay[i - 1].end);
                            _end = new Date(partsDay[i].start);
                            this.addFreeZone(_start, _end);
                        }
                        _start = new Date(partsDay[i].end);
                        _end = new Date(now);
                        _end.setHours(this.reservationAllowedTo[0]);
                        _end.setMinutes(this.reservationAllowedTo[1]);
                        _end.setSeconds(0);
                        if (_end > new Date(partsDay[i].end)) {
                            this.addFreeZone(_start, _end);
                        }
                    }
                    else {
                        _start = new Date(partsDay[i - 1].end);
                        _end = new Date(partsDay[i].start);
                        this.addFreeZone(_start, _end);
                    }
                }
            }
            if (this.reservationAllowedFrom[0] > 6) {
                let __start = new Date(_start);
                __start.setHours(6);
                __start.setMinutes(0);
                __start.setSeconds(0);
                let __end = new Date(_start);
                __end.setHours(this.reservationAllowedFrom[0]);
                __end.setMinutes(this.reservationAllowedFrom[1]);
                __end.setSeconds(0);
                this.data.push({
                    id: null,
                    start: new Date(__start),
                    end: new Date(__end),
                    cssClass: 'calendar-disabled-area',
                    meta: {
                        incrementsBadgeTotal: false,
                        showOnMonthView: false,
                    },
                });
            }
            if (this.reservationAllowedTo[0] < 23) {
                let __end = new Date(_end);
                __end.setHours(23);
                __end.setMinutes(0);
                __end.setSeconds(0);
                this.data.push({
                    id: null,
                    start: new Date(_end),
                    end: new Date(__end),
                    cssClass: 'calendar-disabled-area',
                    meta: {
                        incrementsBadgeTotal: false,
                        showOnMonthView: false,
                    },
                });
            }
            now.setDate(now.getDate() + 1);
            now.setHours(this.reservationAllowedFrom[0]);
            now.setMinutes(this.reservationAllowedFrom[1]);
            now.setSeconds(0);
        }
        this.data.sort((a, b) => +a.start - +b.start);
        this._cdr.markForCheck();
        this._loader.contentLoading$.next(false);
        this._cdr.detectChanges();
    }
    addFreeZone(start, end) {
        if (+start < +end - this.minDuration) {
            this.data.push({
                // title: `${this._translate.transform('Free')} ${new Date(
                //   start
                // ).toLocaleTimeString([], {
                //   hour: '2-digit',
                //   minute: '2-digit',
                // })} - ${new Date(end).toLocaleTimeString([], {
                //   hour: '2-digit',
                //   minute: '2-digit',
                // })}`,
                start,
                end,
                cssClass: 'calendar-free-area',
                meta: {
                    incrementsBadgeTotal: false,
                    showOnMonthView: false,
                },
            });
        }
    }
    reservationPlace() {
        this._modal.create({
            nzTitle: this.modalTitleTpl,
            nzContent: this.modalContentTpl,
            nzFooter: this.modalFooterTpl,
        });
    }
    approveReservation() {
        this._service
            .reservationPlace(this.workplace.id, [
            this.dateTimeFromControl.value,
            this.dateTimeToControl.value,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(({ data }) => {
            this._modal.closeAll();
            if (data && data.length === 1) {
                const main = data[0];
                if (main.meta.isOk) {
                    this._modal
                        .success({
                        nzTitle: 'Успешно забронировано',
                        nzContent: main.meta.message,
                    })
                        .afterClose.subscribe(() => {
                        this.dataBusy.push({
                            id: this.dataBusy.length,
                            start: new Date(this.dateTimeFromControl.value),
                            end: new Date(this.dateTimeToControl.value),
                            title: `${this._translate.transform('Busy')} ${new Date(this.dateTimeFromControl.value).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })} - ${new Date(this.dateTimeToControl.value).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}`,
                            data: main,
                            color: {
                                primary: '#188fff',
                            },
                            cssClass: 'calendar-busy-area-room',
                        });
                        this.addEmptyZones();
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
                this._modal.error({
                    nzTitle: 'Не удалось забронировать',
                });
            }
        });
    }
    cancelReservation() {
        this._modal.closeAll();
    }
    handleReservation(ev) {
        this.dateTimeFrom = ev.start;
        this.dateTimeTo = ev.end;
        this.dateTimeFromControl.setValue(new Date(this.dateTimeFrom));
        this.dateTimeToControl.setValue(new Date(this.dateTimeTo));
        this._cdr.detectChanges();
        this.reservationPlace();
    }
    updateDateTime(dateTime) {
        this.dateTimeFromControl.setValue(dateTime[0]);
        this.dateTimeToControl.setValue(dateTime[1]);
        this.wrongRange = +dateTime[0] + this.minDuration > +dateTime[1];
        this._cdr.detectChanges();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_create_service__WEBPACK_IMPORTED_MODULE_5__["CreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_6__["GlobalLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_7__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalTitleTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalContentTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalFooterTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.reservationModalTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_create_service__WEBPACK_IMPORTED_MODULE_5__["CreateService"]])], decls: 7, vars: 6, consts: [[3, "mode", "isLoading", "workplace", "tags", "events", "descriptionList", "reservation", "monthSelect"], ["modalTitleTpl", ""], ["modalFooterTpl", ""], ["modalContentTpl", ""], [1, "modal-title"], ["nz-icon", "", "nzType", "check-circle"], [1, "modal-footer"], ["class", "error", 4, "ngIf"], ["nz-button", "", 1, "ant-btn", 3, "click"], ["nz-button", "", 1, "ant-btn", "ant-btn-primary", 3, "disabled", "click"], [1, "error"], [1, "modal-content", "info"], [1, "modal-content__name"], [1, "modal-content"], [3, "ngModel", "layout", "format", "workHours", "minDuration", "allowAllDay", "autoUpdateDateTo", "minDateTime", "maxDateTime", "staticDisabled", "ngModelChange"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reservation-workplace", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reservation", function CreateComponent_Template_app_reservation_workplace_reservation_0_listener($event) { return ctx.handleReservation($event); })("monthSelect", function CreateComponent_Template_app_reservation_workplace_monthSelect_0_listener($event) { return ctx.monthSelectHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateComponent_ng_template_3_Template, 10, 8, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreateComponent_ng_template_5_Template, 8, 17, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.mode)("isLoading", ctx.isLoading)("workplace", ctx.workplace)("tags", ctx.tags)("events", ctx.data)("descriptionList", ctx.descriptionList);
    } }, directives: [_base_reservation_workplace_reservation_workplace_component__WEBPACK_IMPORTED_MODULE_11__["ReservationWorkplaceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_13__["FilterDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".info[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.error[_ngcontent-%COMP%] {\n  color: #f5222d;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFoQkQ7RUFDRSxtQkFBQTtBQWtCRjtBQWhCQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQWtCRiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy90aGVtZS9vdmVycmlkZVwiO1xuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG4uZXJyb3Ige1xuICBjb2xvcjogQHJlZC02O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_src_app_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])()
], CreateComponent.prototype, "dateTimeFormat", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_create_service__WEBPACK_IMPORTED_MODULE_5__["CreateService"]],
            }]
    }], function () { return [{ type: _create_service__WEBPACK_IMPORTED_MODULE_5__["CreateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _src_app_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_6__["GlobalLoaderService"] }, { type: _src_app_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_7__["StatusesService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }]; }, { dateTimeFormat: [], modalTitleTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalTitleTpl']
        }], modalContentTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalContentTpl']
        }], modalFooterTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalFooterTpl']
        }], reservationModalTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['reservationModalTpl']
        }] }); })();


/***/ }),

/***/ "kWn/":
/*!************************************************************************************************************!*\
  !*** ./src/app/presentation/reservations/reservation-workplace-create/components/create/create.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: CreateService, getTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateService", function() { return CreateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/measurements.service */ "FsS2");











class CreateService {
    constructor($dictionariesService, $reservationsApiService, $statusesService, route, datePipe, $measurements) {
        this.$dictionariesService = $dictionariesService;
        this.$reservationsApiService = $reservationsApiService;
        this.$statusesService = $statusesService;
        this.route = route;
        this.datePipe = datePipe;
        this.$measurements = $measurements;
        this.workplaceId = +this.route.snapshot.params.workplaceId;
        this._workplace$ = this.$dictionariesService
            .getDictionaryItemByKey('rooms', this.workplaceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((p) => {
            let now = new Date();
            let year = new Date();
            year.setFullYear(year.getFullYear() + 1);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                workplace: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(p),
                floor: this.$dictionariesService.getDictionaryItemByKey('floorMaps', p.floorMapId),
                tags: this.$dictionariesService.getDictionary('tags'),
                buildings: this.$dictionariesService.getDictionary('buildings'),
                appointments: this.$reservationsApiService.getRoomAppointments({
                    requestAppointmentRoomId: this.workplaceId,
                    requestAppointmentDateFrom: this._getApiDate(now),
                    requestAppointmentDateTo: this._getApiDate(year),
                }),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ workplace, tags, floor, appointments, buildings }) => {
            let appointmentsByRoomList = [];
            if (appointments && appointments.appointmentsByRoomList) {
                appointmentsByRoomList = appointmentsByRoomList;
            }
            else if (Array.isArray(appointments)) {
                appointmentsByRoomList = appointments;
            }
            return {
                workplace,
                tags: getTags(workplace.tags, tags),
                floor,
                appointments: appointmentsByRoomList,
                building: buildings.find((b) => b.id === floor.buildingId),
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    get workplace$() {
        return this._workplace$;
    }
    getWorkplace$(dateFrom, dateTo) {
        return this.$dictionariesService
            .getDictionaryItemByKey('rooms', this.workplaceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((p) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                workplace: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(p),
                floor: this.$dictionariesService.getDictionaryItemByKey('floorMaps', p.floorMapId),
                tags: this.$dictionariesService.getDictionary('tags'),
                buildings: this.$dictionariesService.getDictionary('buildings'),
                appointments: this.$reservationsApiService.getRoomAppointments({
                    requestAppointmentRoomId: this.workplaceId,
                    requestAppointmentDateFrom: this._getApiDate(dateFrom),
                    requestAppointmentDateTo: this._getApiDate(dateTo),
                }),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ workplace, tags, floor, appointments, buildings }) => {
            let appointmentsByRoomList = [];
            if (appointments && Array.isArray(appointments.appointmentsByRoomList)) {
                appointmentsByRoomList = appointments.appointmentsByRoomList;
            }
            else if (Array.isArray(appointments)) {
                appointmentsByRoomList = appointments;
            }
            return {
                workplace,
                tags: getTags(workplace.tags, tags),
                floor,
                appointments: appointmentsByRoomList,
                building: buildings.find((b) => b.id === floor.buildingId),
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
    get dateTimeFormat$() {
        return this.$measurements.getMeasurementByName$('shortDateTime');
    }
    reservationPlace(id, dates) {
        const reservations = [
            {
                appointmentRoomsList: [id],
                appointmentDateFrom: this._getApiDate(dates[0]),
                appointmentDateTo: this._getApiDate(dates[1]),
            },
        ];
        let params = { appointments: reservations };
        return this.$reservationsApiService.putReservationsByType('appointment', params);
    }
}
CreateService.ɵfac = function CreateService_Factory(t) { return new (t || CreateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_5__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"])); };
CreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateService, factory: CreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__["DictionariesService"] }, { type: _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__["ReservationsApiService"] }, { type: _src_app_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_5__["StatusesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }, { type: _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"] }]; }, null); })();
const getTags = (ids, tags) => {
    return tags.filter((t) => ids.includes(t.id)).map((tag) => tag.name);
};


/***/ }),

/***/ "xxg6":
/*!****************************************************************************!*\
  !*** ./src/app/base/reservation-workplace/reservation-workplace.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReservationWorkplaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationWorkplaceModule", function() { return ReservationWorkplaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reservation_workplace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-workplace.component */ "+1EI");
/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.module */ "lW34");
/* harmony import */ var _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/shared/images/images.module */ "/tb3");
/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar/calendar.module */ "AlZK");







class ReservationWorkplaceModule {
}
ReservationWorkplaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationWorkplaceModule });
ReservationWorkplaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationWorkplaceModule_Factory(t) { return new (t || ReservationWorkplaceModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"], _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationWorkplaceModule, { declarations: [_reservation_workplace_component__WEBPACK_IMPORTED_MODULE_2__["ReservationWorkplaceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"], _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"]], exports: [_reservation_workplace_component__WEBPACK_IMPORTED_MODULE_2__["ReservationWorkplaceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationWorkplaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_reservation_workplace_component__WEBPACK_IMPORTED_MODULE_2__["ReservationWorkplaceComponent"]],
                exports: [_reservation_workplace_component__WEBPACK_IMPORTED_MODULE_2__["ReservationWorkplaceComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"], _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=reservation-workplace-create-reservation-workplace-create-module.js.map