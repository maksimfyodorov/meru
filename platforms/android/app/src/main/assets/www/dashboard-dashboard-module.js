(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "/X1i":
/*!**********************************************!*\
  !*** ./src/app/base/widget/widget.module.ts ***!
  \**********************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget.component */ "oheD");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/antd/antd.module */ "E+H7");








class WidgetModule {
}
WidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetModule });
WidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetModule_Factory(t) { return new (t || WidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
            _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__["AntdModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetModule, { declarations: [_widget_component__WEBPACK_IMPORTED_MODULE_2__["WidgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__["AntdModule"]], exports: [_widget_component__WEBPACK_IMPORTED_MODULE_2__["WidgetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_widget_component__WEBPACK_IMPORTED_MODULE_2__["WidgetComponent"]],
                exports: [
                    _widget_component__WEBPACK_IMPORTED_MODULE_2__["WidgetComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                    _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_6__["AntdModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "0yhw":
/*!*************************************************************!*\
  !*** ./src/app/composite/widget/calendar/calendar.utils.ts ***!
  \*************************************************************/
/*! exports provided: isReservationsInDate, reservationsInDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservationsInDate", function() { return isReservationsInDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservationsInDate", function() { return reservationsInDate; });
const isReservationsInDate = (date, reservations) => {
    return reservationsInDate(date, reservations).length > 0;
};
const reservationsInDate = (date, items, key = null) => {
    return items.filter((item) => {
        const fromDate = key ? new Date(item[key].dateTimeFrom) : new Date(item.dateTimeFrom);
        const toDate = key ? new Date(item[key].dateTimeTo) : new Date(item.dateTimeTo);
        fromDate.setHours(0, 0, 0, 0);
        toDate.setHours(0, 0, 0, 0);
        return fromDate.getTime() <= date.getTime() && toDate.getTime() >= date.getTime();
    });
};


/***/ }),

/***/ "73HC":
/*!*************************************************************************!*\
  !*** ./src/app/composite/widget/reservations/reservations.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function() { return ReservationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _composite_widget_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @composite/widget/reservations/reservations.service */ "7s6O");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../base/renderer/components/status/status.component */ "5YXH");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
















function ReservationsComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReservationsComponent_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.chooseActive(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReservationsComponent_li_2_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.openReservation(item_r2.reservation.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSelected", i_r3 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.workplace.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 4, item_r2.reservation.dateTimeFrom, ctx_r0.dateFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, item_r2.reservation.dateTimeFrom, ctx_r0.timeFormat));
} }
function ReservationsComponent_div_3_nz_tag_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tag", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r8);
} }
function ReservationsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-descriptions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-descriptions-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-status-renderer", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-descriptions-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-descriptions-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ReservationsComponent_div_3_nz_tag_11_Template, 2, 1, "nz-tag", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", "\u0421\u0442\u0430\u0442\u0443\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.statuses)("value", ctx_r1.current.reservation.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", "\u041D\u0430\u0447\u0430\u043B\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 9, ctx_r1.current.reservation.dateTimeFrom, ctx_r1.dateTimeFormat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", "\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 12, ctx_r1.current.reservation.dateTimeTo, ctx_r1.dateTimeFormat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 15, ctx_r1.tags));
} }
class ReservationsComponent {
    constructor(_service, _cdr, _measurementsService, _dictService, _router) {
        this._service = _service;
        this._cdr = _cdr;
        this._measurementsService = _measurementsService;
        this._dictService = _dictService;
        this._router = _router;
        this.reservations = [];
        this.sub = _service
            .getWorkplaceReservations()
            .subscribe(({ reservations, statuses }) => {
            this.reservations = reservations.splice(0, 5);
            this.chooseActive(0);
            this.statuses = { map: statuses };
            this._cdr.markForCheck();
        });
        this.dateFormat = this._measurementsService.getMeasurementByName('date');
        this.timeFormat =
            this._measurementsService.getMeasurementByName('shortTime');
        this.dateTimeFormat =
            this._measurementsService.getMeasurementByName('dateTime');
    }
    chooseActive(index) {
        var _a, _b;
        this.current = this.reservations[index];
        this.setTags(((_b = (_a = this.current) === null || _a === void 0 ? void 0 : _a.workplace) === null || _b === void 0 ? void 0 : _b.tags) || []);
    }
    setTags(tags) {
        if (tags === null || tags === void 0 ? void 0 : tags.length) {
            this.tags = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
                ...tags.map((tagId) => this._dictService.getDictionaryItemByKey('tags', tagId, '')),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_tags) => _tags.map((tag) => tag.name)));
        }
        else {
            this.tags = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }
    }
    openReservation(id) {
        this._router.navigate(['/', 'reservations', 'workplace', 'view', id]);
    }
}
ReservationsComponent.ɵfac = function ReservationsComponent_Factory(t) { return new (t || ReservationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_composite_widget_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ReservationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReservationsComponent, selectors: [["app-widget-reservations"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_composite_widget_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"]])], decls: 4, vars: 2, consts: [[1, "wrapper"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", "class", "item", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"], ["class", "wrapper__info", 4, "ngIf"], ["nz-menu-item", "", 1, "item", 3, "nzSelected", "click"], [3, "click"], [1, "wrapper__info"], [3, "nzColumn"], [3, "nzTitle"], ["type", "status", 3, "options", "value"], ["class", "mb-10", 4, "ngFor", "ngForOf"], [1, "mb-10"]], template: function ReservationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReservationsComponent_li_2_Template, 11, 10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReservationsComponent_div_3_Template, 13, 17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reservations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current);
    } }, directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__["NzMenuItemDirective"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_11__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_11__["NzDescriptionsItemComponent"], _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_12__["StatusRendererComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__["NzTagComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper__info[_ngcontent-%COMP%] {\n  border-left: 1px solid #d9d9d9;\n  flex-basis: 400px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9ucy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFoQkQ7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFrQkY7QUFoQkE7RUFDRSxhQUFBO0FBa0JGO0FBakJFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFtQkoiLCJmaWxlIjoicmVzZXJ2YXRpb25zLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy90aGVtZS9vdmVycmlkZSc7XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAmX19pbmZvIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIEBncmF5LTU7XG4gICAgZmxleC1iYXNpczogNDAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], ReservationsComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReservationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-widget-reservations',
                templateUrl: './reservations.component.html',
                styleUrls: ['./reservations.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_composite_widget_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"]],
            }]
    }], function () { return [{ type: _composite_widget_reservations_reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { sub: [] }); })();


/***/ }),

/***/ "7s6O":
/*!***********************************************************************!*\
  !*** ./src/app/composite/widget/reservations/reservations.service.ts ***!
  \***********************************************************************/
/*! exports provided: ReservationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsService", function() { return ReservationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");







class ReservationsService {
    constructor($reservationsApi, $user, $dictionaries) {
        this.$reservationsApi = $reservationsApi;
        this.$user = $user;
        this.$dictionaries = $dictionaries;
    }
    getWorkplaceReservations() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            reservations: this.$reservationsApi.getWorkplaceReservations({
                labelId: this.$user.info.id,
            }),
            workplaces: this.$dictionaries.getDictionary('workplaces'),
            statuses: this.$dictionaries.getDictionary('statuses'),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ reservations, workplaces, statuses }) => {
            return {
                reservations: reservations
                    ? reservations.map((_r) => ({
                        reservation: _r,
                        workplace: workplaces.find((_w) => _w.id === _r.workplaceId),
                    }))
                    : [],
                statuses: statuses[0].statuses.reduce((acc, status) => {
                    acc[status.code] = {
                        value: status.name,
                        color: status.color,
                    };
                    return acc;
                }, {}),
            };
        }));
    }
}
ReservationsService.ɵfac = function ReservationsService_Factory(t) { return new (t || ReservationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"])); };
ReservationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservationsService, factory: ReservationsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }]; }, null); })();


/***/ }),

/***/ "8Q0z":
/*!*********************************************************************!*\
  !*** ./src/app/composite/widget/calendarnew/calendarnew.service.ts ***!
  \*********************************************************************/
/*! exports provided: CalendarnewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarnewService", function() { return CalendarnewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/measurements.service */ "FsS2");









class CalendarnewService {
    constructor($reservationsApi, $user, $dictionaries, datePipe, $measurements) {
        this.$reservationsApi = $reservationsApi;
        this.$user = $user;
        this.$dictionaries = $dictionaries;
        this.datePipe = datePipe;
        this.$measurements = $measurements;
    }
    getReservations$(dateFrom, dateTo) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            reservations: this.$reservationsApi.getWorkplaceReservations({
                labelId: this.$user.info.id,
                statuses: ['CLOSED', 'NEW', 'CONFIRMED', 'CLOSED', 'APPROVED'],
                dateTimeFrom: this._getApiDate(dateFrom),
                dateTimeTo: this._getApiDate(dateTo),
            }),
            workplaces: this.$dictionaries.getDictionary('workplaces'),
            appointments: this.$reservationsApi.getUserAppointments({
                requestAppointmentUserId: this.$user.info.id,
                requestAppointmentDateFrom: this._getApiDate(dateFrom),
                requestAppointmentDateTo: this._getApiDate(dateTo),
            }),
            rooms: this.$dictionaries.getDictionary('rooms'),
            parkinglotsReservations: this.$reservationsApi.getParkingLotsReservations({
                requestAppointmentUserId: this.$user.info.id,
                dateTimeFrom: this._getApiDate(dateFrom),
                dateTimeTo: this._getApiDate(dateTo),
            }),
            parkingLots: this.$dictionaries.getDictionary('parkingLots'),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ reservations, workplaces, appointments, rooms, parkinglotsReservations, parkingLots, }) => {
            return {
                workplacereservetions: reservations
                    .map((_r) => ({
                    reservation: _r,
                    workplace: workplaces.find((_w) => _w.id === _r.workplaceId),
                })),
                roomAppointments: appointments
                // .filter(
                //   (appointment) =>
                //     appointment.appointmentAttendeeStatus === 'NEW' ||
                //     appointment.appointmentAttendeeStatus === 'CONFIRMED'
                // )
                ,
                parkinglots: parkinglotsReservations
                    .filter((parkinglotsReservation) => parkinglotsReservation.status === 'NEW' ||
                    parkinglotsReservation.status === 'CONFIRMED' ||
                    parkinglotsReservation.status === 'CLOSED' ||
                    parkinglotsReservation.status === 'APPROVED')
                    .map((parkinglotsReservation) => ({
                    parkinglotsReservation,
                    parkingLot: parkingLots.find((_w) => _w.id === parkinglotsReservation.parkingLotId),
                })),
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
}
CalendarnewService.ɵfac = function CalendarnewService_Factory(t) { return new (t || CalendarnewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"])); };
CalendarnewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarnewService, factory: CalendarnewService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarnewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }, { type: _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"] }]; }, null); })();


/***/ }),

/***/ "Bnie":
/*!*****************************************!*\
  !*** ./src/app/base/map/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



const CLICK = (mark) => console.log(mark);
class MapService {
    constructor() {
        this._zoom = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this._mark = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._marksReady = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._mapReady = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.hidePopover$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get zoom$() {
        return this._zoom;
    }
    get marks() {
        return [
            {
                id: 1,
                type: 'info',
                tooltip: 'Mark 1',
                icon: 'question-circle',
                coordinates: {
                    x: 45,
                    y: 45,
                    size: 12,
                },
                onClick: CLICK
            },
            {
                id: 2,
                type: 'info',
                tooltip: 'Mark 2',
                icon: 'exclamation-circle',
                coordinates: {
                    x: 145,
                    y: 145,
                    size: 21,
                },
                onClick: CLICK
            },
            {
                id: 3,
                type: 'warning',
                icon: 'warning',
                tooltip: 'Mark 3',
                coordinates: {
                    x: 245,
                    y: 245,
                    size: 21,
                },
                onClick: CLICK
            },
            {
                id: 4,
                type: 'danger',
                icon: 'info',
                tooltip: 'Mark 5',
                coordinates: {
                    x: 1800,
                    y: 2900,
                    size: 31,
                },
                onClick: CLICK
            }
        ];
    }
    get mark$() {
        return this._mark;
    }
    get marksReady$() {
        return this._marksReady;
    }
    get mapReady$() {
        return this._mapReady;
    }
    get img() {
        return {
            alt: 'map',
            src: '/assets/images/booking-1.png',
        };
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "F48Z":
/*!***********************************************************************!*\
  !*** ./src/app/composite/widget/calendarnew/calendarnew.component.ts ***!
  \***********************************************************************/
/*! exports provided: CalendarnewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarnewComponent", function() { return CalendarnewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _calendarnew_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendarnew.service */ "8Q0z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/calendar/calendar.component */ "WtvG");









const _c0 = function () { return ["month", "week", "day"]; };
class CalendarnewComponent {
    constructor($calendarService, cdr, router, _datePipe, _translatePipe) {
        this.$calendarService = $calendarService;
        this.cdr = cdr;
        this.router = router;
        this._datePipe = _datePipe;
        this._translatePipe = _translatePipe;
        this.data = [];
        this.minDate = new Date();
        this.isLoading = true;
    }
    ngOnInit() {
        this.minDate.setDate(this.minDate.getDate() - 1);
        let dateFrom = new Date();
        dateFrom.setDate(0);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        let dateTo = new Date(dateFrom);
        dateTo.setMonth(dateTo.getMonth() + 1);
        this.updateDate(dateFrom, dateTo);
    }
    updateDate(dateFrom, dateTo) {
        // if (dateFrom < new Date()) {
        //   dateFrom = new Date();
        // }
        this.isLoading = true;
        dateFrom.setMonth(dateFrom.getMonth() - 1);
        this.$calendarService
            .getReservations$(dateFrom, dateTo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe((result) => {
            this.data = [];
            const now = new Date();
            if (Array.isArray(result.roomAppointments)) {
                this.data.push(...result.roomAppointments.map((roomAppointment) => {
                    return {
                        title: `${this._translatePipe.transform(`Meeting room reservation`)}: ${roomAppointment.appointmentLocationString}`,
                        start: new Date(roomAppointment.appointmentDateFrom),
                        end: new Date(roomAppointment.appointmentDateTo),
                        cssClass: 'calendar-busy-area-room',
                        meta: {
                            incrementsBadgeTotal: false,
                        },
                        link: roomAppointment.appointmentId
                            ? '/reservations/appointment/view/' +
                                encodeURIComponent(roomAppointment.appointmentId)
                            : null,
                    };
                }));
            }
            if (Array.isArray(result.parkinglots)) {
                this.data.push(...result.parkinglots
                    .filter((parkinglot) => new Date(parkinglot.parkinglotsReservation.dateTimeTo) >
                    now || parkinglot.parkinglotsReservation.status === 'CLOSED')
                    .map((parkinglot) => {
                    return {
                        title: `${this._translatePipe.transform(`Parking space reservation`)}: ${parkinglot.parkingLot.name}`,
                        start: new Date(parkinglot.parkinglotsReservation.dateTimeFrom),
                        end: new Date(parkinglot.parkinglotsReservation.dateTimeTo),
                        cssClass: 'calendar-busy-area-parking',
                        meta: {
                            incrementsBadgeTotal: false,
                        },
                        link: '/reservations/parking/view/' +
                            encodeURIComponent(parkinglot.parkinglotsReservation.id),
                    };
                }));
            }
            if (Array.isArray(result.workplacereservetions)) {
                this.data.push(...result.workplacereservetions
                    .filter((workplacereservetion) => new Date(workplacereservetion.reservation.dateTimeTo) > now ||
                    workplacereservetion.reservation.status === 'CLOSED')
                    .map((workplacereservetion) => {
                    return {
                        title: `${this._translatePipe.transform(`Work space reservation`)}: ${workplacereservetion.workplace
                            ? workplacereservetion.workplace.name
                            : ''}`,
                        start: new Date(workplacereservetion.reservation.dateTimeFrom),
                        end: new Date(workplacereservetion.reservation.dateTimeTo),
                        cssClass: 'calendar-busy-area-workplace',
                        meta: {
                            incrementsBadgeTotal: false,
                        },
                        link: '/reservations/workplace/view/' +
                            encodeURIComponent(workplacereservetion.reservation.id),
                    };
                }));
            }
            this.isLoading = false;
            this.cdr.detectChanges();
        });
    }
    eventHandler(ev) {
        if (ev.link) {
            this.router.navigate([ev.link]);
        }
    }
    monthSelectHandler(ev) {
        this.updateDate(new Date(ev[0]), new Date(ev[1]));
    }
}
CalendarnewComponent.ɵfac = function CalendarnewComponent_Factory(t) { return new (t || CalendarnewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendarnew_service__WEBPACK_IMPORTED_MODULE_2__["CalendarnewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"])); };
CalendarnewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarnewComponent, selectors: [["app-widget-calendarnew"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_calendarnew_service__WEBPACK_IMPORTED_MODULE_2__["CalendarnewService"]])], decls: 1, vars: 10, consts: [[3, "modes", "mode", "events", "loading", "allowSelectEmptyDay", "allowSelectDayEvent", "allowSelectMonthEvent", "hourSegmentHeight", "minDate", "periodChange", "eventSelect"]], template: function CalendarnewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("periodChange", function CalendarnewComponent_Template_app_calendar_periodChange_0_listener($event) { return ctx.monthSelectHandler($event); })("eventSelect", function CalendarnewComponent_Template_app_calendar_eventSelect_0_listener($event) { return ctx.eventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("mode", "month")("events", ctx.data)("loading", ctx.isLoading)("allowSelectEmptyDay", true)("allowSelectDayEvent", true)("allowSelectMonthEvent", true)("hourSegmentHeight", 50)("minDate", ctx.minDate);
    } }, directives: [_base_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhcm5ldy5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarnewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-calendarnew',
                templateUrl: './calendarnew.component.html',
                styleUrls: ['./calendarnew.component.less'],
                providers: [_calendarnew_service__WEBPACK_IMPORTED_MODULE_2__["CalendarnewService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _calendarnew_service__WEBPACK_IMPORTED_MODULE_2__["CalendarnewService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"] }]; }, null); })();


/***/ }),

/***/ "HzgF":
/*!********************************************************************!*\
  !*** ./src/app/composite/widget/calendarnew/calendarnew.module.ts ***!
  \********************************************************************/
/*! exports provided: CalendarnewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarnewModule", function() { return CalendarnewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calendarnew_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendarnew.component */ "F48Z");
/* harmony import */ var _src_app_base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/base/calendar/calendar.module */ "AlZK");
/* harmony import */ var _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/shared/images/images.module */ "/tb3");






class CalendarnewModule {
}
CalendarnewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarnewModule });
CalendarnewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarnewModule_Factory(t) { return new (t || CalendarnewModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"], _src_app_base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarnewModule, { declarations: [_calendarnew_component__WEBPACK_IMPORTED_MODULE_2__["CalendarnewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"], _src_app_base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]], exports: [_calendarnew_component__WEBPACK_IMPORTED_MODULE_2__["CalendarnewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarnewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_calendarnew_component__WEBPACK_IMPORTED_MODULE_2__["CalendarnewComponent"]],
                exports: [_calendarnew_component__WEBPACK_IMPORTED_MODULE_2__["CalendarnewComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _src_app_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"], _src_app_base_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "NJAa":
/*!**********************************************************************!*\
  !*** ./src/app/composite/widget/reservations/reservations.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReservationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsModule", function() { return ReservationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/card/card.module */ "lW34");
/* harmony import */ var _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/renderer/renderer.module */ "R3cO");
/* harmony import */ var _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @composite/workplace-card/workplace-card.module */ "1Cno");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _reservations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reservations.component */ "73HC");











class ReservationsModule {
}
ReservationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationsModule });
ReservationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationsModule_Factory(t) { return new (t || ReservationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_5__["WorkplaceCardModule"],
            _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuModule"],
            ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsModule"],
            _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_4__["RendererModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__["NzTagModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationsModule, { declarations: [_reservations_component__WEBPACK_IMPORTED_MODULE_9__["ReservationsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_5__["WorkplaceCardModule"],
        _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsModule"],
        _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_4__["RendererModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__["NzTagModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_reservations_component__WEBPACK_IMPORTED_MODULE_9__["ReservationsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_reservations_component__WEBPACK_IMPORTED_MODULE_9__["ReservationsComponent"]],
                exports: [
                    _reservations_component__WEBPACK_IMPORTED_MODULE_9__["ReservationsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _composite_workplace_card_workplace_card_module__WEBPACK_IMPORTED_MODULE_5__["WorkplaceCardModule"],
                    _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuModule"],
                    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__["NzDescriptionsModule"],
                    _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_4__["RendererModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__["NzTagModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "O2TL":
/*!**************************************************************************************!*\
  !*** ./src/app/presentation/dashboard/components/dashboards/dashboards.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DashboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsComponent", function() { return DashboardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboards.service */ "lN4Y");
/* harmony import */ var _widgets_list_widgets_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets-list/widgets-list.component */ "dgjV");




class DashboardsComponent {
}
DashboardsComponent.ɵfac = function DashboardsComponent_Factory(t) { return new (t || DashboardsComponent)(); };
DashboardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardsComponent, selectors: [["app-dashboards"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_dashboards_service__WEBPACK_IMPORTED_MODULE_1__["DashboardsService"]])], decls: 1, vars: 0, template: function DashboardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widgets-list");
    } }, directives: [_widgets_list_widgets_list_component__WEBPACK_IMPORTED_MODULE_2__["WidgetsListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmRzLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboards',
                templateUrl: './dashboards.component.html',
                styleUrls: ['./dashboards.component.less'],
                providers: [_dashboards_service__WEBPACK_IMPORTED_MODULE_1__["DashboardsService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "Py9c":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-calendar.js ***!
  \************************************************************************************/
/*! exports provided: NzCalendarComponent, NzCalendarHeaderComponent, NzCalendarModule, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCalendarComponent", function() { return NzCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCalendarHeaderComponent", function() { return NzCalendarHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCalendarModule", function() { return NzCalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDateCellDirective", function() { return NzDateCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDateFullCellDirective", function() { return NzDateFullCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMonthCellDirective", function() { return NzMonthCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMonthFullCellDirective", function() { return NzMonthFullCellDirective; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/time */ "n7bz");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");














/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */









function NzCalendarHeaderComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 7);
} if (rf & 2) {
    const year_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", year_r2.label)("nzValue", year_r2.value);
} }
function NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 7);
} if (rf & 2) {
    const month_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", month_r4.label)("nzValue", month_r4.value);
} }
function NzCalendarHeaderComponent_nz_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzCalendarHeaderComponent_nz_select_3_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.monthChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template, 1, 2, "nz-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSize", ctx_r1.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1.activeMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.months);
} }
function NzCalendarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function NzCalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "date-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function NzCalendarComponent_ng_template_5_Template_date_table_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onDateSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("prefixCls", ctx_r2.prefixCls)("value", ctx_r2.activeDate)("activeDate", ctx_r2.activeDate)("cellRender", ctx_r2.dateCell)("fullCellRender", ctx_r2.dateFullCell)("disabledDate", ctx_r2.nzDisabledDate);
} }
function NzCalendarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "month-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function NzCalendarComponent_ng_template_7_Template_month_table_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onDateSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("prefixCls", ctx_r4.prefixCls)("value", ctx_r4.activeDate)("activeDate", ctx_r4.activeDate)("cellRender", ctx_r4.monthCell)("fullCellRender", ctx_r4.monthFullCell);
} }
class NzDateCellDirective {
}
NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
NzDateCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
class NzMonthCellDirective {
}
NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
NzMonthCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
class NzDateFullCellDirective {
}
NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
NzDateFullCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
class NzMonthFullCellDirective {
}
NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
NzMonthFullCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCalendarHeaderComponent {
    constructor(i18n, dateHelper, elementRef) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
        this.mode = 'month';
        this.fullscreen = true;
        this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_8__["CandyDate"]();
        this.modeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.yearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.monthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.years = [];
        this.months = [];
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-fullcalendar-header');
    }
    get activeYear() {
        return this.activeDate.getYear();
    }
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.lang.year;
    }
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.lang.month;
    }
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    setUpYears(year) {
        const start = (year || this.activeYear) - this.yearOffset;
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            const dateInMonth = this.activeDate.setMonth(i);
            const monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["DateHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NzCalendarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostVars: 2, hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", "block");
    } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 9, vars: 9, consts: [[1, "ant-picker-calendar-header"], [1, "ant-picker-calendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [1, "ant-picker-calendar-mode-switch", 3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.updateYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzCalendarHeaderComponent_nz_option_2_Template, 1, 2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzCalendarHeaderComponent_nz_select_3_Template, 2, 4, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.modeChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mode === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mode)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.monthTypeText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.yearTypeText);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioButtonDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzOptionComponent"]], encapsulation: 2, changeDetection: 0 });
NzCalendarHeaderComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["DateHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
NzCalendarHeaderComponent.propDecorators = {
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    modeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    yearChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    monthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCalendarComponent {
    constructor(cdr, elementRef, directionality) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_8__["CandyDate"]();
        this.prefixCls = 'ant-picker-calendar';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dir = 'ltr';
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
        this.nzMode = 'month';
        this.nzModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzPanelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzFullscreen = true;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker-calendar');
    }
    get dateCell() {
        return (this.nzDateCell || this.nzDateCellChild);
    }
    get dateFullCell() {
        return (this.nzDateFullCell || this.nzDateFullCellChild);
    }
    get monthCell() {
        return (this.nzMonthCell || this.nzMonthCellChild);
    }
    get monthFullCell() {
        return (this.nzMonthFullCell || this.nzMonthFullCellChild);
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.dir = this.directionality.value;
        });
    }
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    onYearSelect(year) {
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    onMonthSelect(month) {
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    writeValue(value) {
        this.updateDate(new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_8__["CandyDate"](value), false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.updateDate(new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_8__["CandyDate"](this.nzValue), false);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
NzCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzDateCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzDateFullCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzMonthCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzMonthFullCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzDateCellChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzDateFullCellChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzMonthCellChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzMonthFullCellChild = _t.first);
    } }, hostVars: 6, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen)("ant-picker-calendar-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzFullscreen: "nzFullscreen", nzValue: "nzValue", nzDisabledDate: "nzDisabledDate", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => NzCalendarComponent), multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 9, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate", "valueChange"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-calendar-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzCalendarComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzCalendarComponent_ng_template_5_Template, 1, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzCalendarComponent_ng_template_7_Template, 1, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzMode === "month")("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [NzCalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__["ɵDateTableComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__["ɵMonthTableComponent"]], encapsulation: 2, changeDetection: 0 });
NzCalendarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzModeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzPanelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzSelectChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzDateCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDateCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzDateCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },] }],
    nzDateFullCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDateFullCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzDateFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },] }],
    nzMonthCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMonthCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzMonthCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },] }],
    nzMonthFullCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMonthFullCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzMonthFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },] }],
    nzFullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzDateCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzDateCell]',
                exportAs: 'nzDateCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMonthCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzMonthCell]',
                exportAs: 'nzMonthCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzDateFullCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzDateFullCell]',
                exportAs: 'nzDateFullCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMonthFullCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzMonthFullCell]',
                exportAs: 'nzMonthFullCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCalendarHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                template: `
    <div class="ant-picker-calendar-header">
      <nz-select
        class="ant-picker-calendar-year-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeYear"
        (ngModelChange)="updateYear($event)"
      >
        <nz-option *ngFor="let year of years" [nzLabel]="year.label" [nzValue]="year.value"></nz-option>
      </nz-select>

      <nz-select
        *ngIf="mode === 'month'"
        class="ant-picker-calendar-month-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeMonth"
        (ngModelChange)="monthChange.emit($event)"
      >
        <nz-option *ngFor="let month of months" [nzLabel]="month.label" [nzValue]="month.value"></nz-option>
      </nz-select>

      <nz-radio-group class="ant-picker-calendar-mode-switch" [(ngModel)]="mode" (ngModelChange)="modeChange.emit($event)" [nzSize]="size">
        <label nz-radio-button nzValue="month">{{ monthTypeText }}</label>
        <label nz-radio-button nzValue="year">{{ yearTypeText }}</label>
      </nz-radio-group>
    </div>
  `,
                host: {
                    '[style.display]': `'block'`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["DateHelperService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], modeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], yearChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], monthChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    ></nz-calendar-header>

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          <ng-container *ngIf="nzMode === 'month'; then monthModeTable; else yearModeTable"></ng-container>
        </div>
      </div>
    </div>
    <ng-template #monthModeTable>
      <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
      <date-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(dateCell)"
        [fullCellRender]="$any(dateFullCell)"
        [disabledDate]="nzDisabledDate"
        (valueChange)="onDateSelect($event)"
      ></date-table>
    </ng-template>

    <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
    <ng-template #yearModeTable>
      <month-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(monthCell)"
        [fullCellRender]="$any(monthFullCell)"
        (valueChange)="onDateSelect($event)"
      ></month-table>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker-calendar-full]': 'nzFullscreen',
                    '[class.ant-picker-calendar-mini]': '!nzFullscreen',
                    '[class.ant-picker-calendar-rtl]': `dir === 'rtl'`
                },
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => NzCalendarComponent), multi: true }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzPanelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzSelectChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDateCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDateCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzDateCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]
        }], nzDateFullCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDateFullCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzDateFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]
        }], nzMonthCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMonthCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzMonthCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]
        }], nzMonthFullCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMonthFullCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzMonthFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCalendarModule {
}
NzCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzCalendarModule });
NzCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzSelectModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__["LibPackerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCalendarModule, { declarations: function () { return [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzSelectModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__["LibPackerModule"]]; }, exports: function () { return [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    NzCalendarHeaderComponent,
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective
                ],
                exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzSelectModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__["LibPackerModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-calendar.js.map

/***/ }),

/***/ "UH2r":
/*!****************************************************************************************!*\
  !*** ./src/app/presentation/dashboard/components/widgets-list/widgets-list.service.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetsListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsListService", function() { return WidgetsListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WidgetsListService {
    constructor() {
        this._widgets = [
            {
                id: 0,
                title: 'Мои брони рабочих мест',
                type: 'reservations',
            },
            {
                id: 1,
                title: 'Мой календарь',
                type: 'workplace-calendar',
            },
        ];
    }
    get widgets() {
        return this._widgets;
    }
    removeWidget(id) {
        this._widgets = this._widgets.filter((w) => w.id !== id);
        return this._widgets;
    }
}
WidgetsListService.ɵfac = function WidgetsListService_Factory(t) { return new (t || WidgetsListService)(); };
WidgetsListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetsListService, factory: WidgetsListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "UshW":
/*!************************************************************!*\
  !*** ./src/app/presentation/dashboard/dashboard.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _composite_widget_reservations_reservations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @composite/widget/reservations/reservations.module */ "NJAa");
/* harmony import */ var _components_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboards/dashboards.component */ "O2TL");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "ZobZ");
/* harmony import */ var _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/breadcrumb/breadcrumb.module */ "Vhn4");
/* harmony import */ var _components_widgets_list_widgets_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/widgets-list/widgets-list.component */ "dgjV");
/* harmony import */ var _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/widget/widget.module */ "/X1i");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _composite_widget_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @composite/widget/calendar/calendar.module */ "yViK");
/* harmony import */ var _src_app_composite_widget_calendarnew_calendarnew_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/composite/widget/calendarnew/calendarnew.module */ "HzgF");














class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
            _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
            _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_7__["WidgetModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"].forChild(),
            _composite_widget_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
            _composite_widget_reservations_reservations_module__WEBPACK_IMPORTED_MODULE_2__["ReservationsModule"],
            _src_app_composite_widget_calendarnew_calendarnew_module__WEBPACK_IMPORTED_MODULE_11__["CalendarnewModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_components_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__["DashboardsComponent"], _components_widgets_list_widgets_list_component__WEBPACK_IMPORTED_MODULE_6__["WidgetsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
        _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
        _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_7__["WidgetModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _composite_widget_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
        _composite_widget_reservations_reservations_module__WEBPACK_IMPORTED_MODULE_2__["ReservationsModule"],
        _src_app_composite_widget_calendarnew_calendarnew_module__WEBPACK_IMPORTED_MODULE_11__["CalendarnewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__["DashboardsComponent"], _components_widgets_list_widgets_list_component__WEBPACK_IMPORTED_MODULE_6__["WidgetsListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                    _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
                    _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_7__["WidgetModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"].forChild(),
                    _composite_widget_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                    _composite_widget_reservations_reservations_module__WEBPACK_IMPORTED_MODULE_2__["ReservationsModule"],
                    _src_app_composite_widget_calendarnew_calendarnew_module__WEBPACK_IMPORTED_MODULE_11__["CalendarnewModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZobZ":
/*!********************************************************************!*\
  !*** ./src/app/presentation/dashboard/dashboard-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboards/dashboards.component */ "O2TL");





const routes = [
    {
        path: '',
        component: _components_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_2__["DashboardsComponent"],
        data: {
            title: 'Главная',
            hideInBreadcrumbs: true,
            hideBreadcrumbs: false,
            hideTitle: false,
        }
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dgjV":
/*!******************************************************************************************!*\
  !*** ./src/app/presentation/dashboard/components/widgets-list/widgets-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsListComponent", function() { return WidgetsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _widgets_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets-list.service */ "UH2r");
/* harmony import */ var _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_widget_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base/widget/widget.component */ "oheD");
/* harmony import */ var _composite_widget_calendarnew_calendarnew_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../composite/widget/calendarnew/calendarnew.component */ "F48Z");
/* harmony import */ var _composite_widget_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../composite/widget/reservations/reservations.component */ "73HC");










function WidgetsListComponent_app_widget_1_app_widget_calendarnew_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widget-calendarnew");
} }
function WidgetsListComponent_app_widget_1_app_widget_reservations_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widget-reservations");
} }
function WidgetsListComponent_app_widget_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-widget", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function WidgetsListComponent_app_widget_1_Template_app_widget_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleWidgetActions($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WidgetsListComponent_app_widget_1_app_widget_calendarnew_1_Template, 1, 0, "app-widget-calendarnew", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetsListComponent_app_widget_1_app_widget_reservations_2_Template, 1, 0, "app-widget-reservations", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", widget_r1.id)("title", widget_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r1.type === "workplace-calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r1.type === "reservations");
} }
class WidgetsListComponent {
    constructor($service) {
        this.$service = $service;
        this.widgets = [];
        this.widgets = $service.widgets;
    }
    handleListChange(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.widgets, event.previousIndex, event.currentIndex);
    }
    handleWidgetActions({ id, type }) {
        switch (type) {
            case 'remove':
                this.widgets = this.$service.removeWidget(id);
                break;
        }
    }
}
WidgetsListComponent.ɵfac = function WidgetsListComponent_Factory(t) { return new (t || WidgetsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_widgets_list_service__WEBPACK_IMPORTED_MODULE_2__["WidgetsListService"])); };
WidgetsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetsListComponent, selectors: [["app-widgets-list"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "appScroll", "", 1, "widgets", 3, "cdkDropListDropped"], ["class", "widget", 3, "id", "title", "action", 4, "ngFor", "ngForOf"], [1, "widget", 3, "id", "title", "action"], [4, "ngIf"]], template: function WidgetsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function WidgetsListComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.handleListChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WidgetsListComponent_app_widget_1_Template, 3, 4, "app-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.widgets);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _base_widget_widget_component__WEBPACK_IMPORTED_MODULE_5__["WidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _composite_widget_calendarnew_calendarnew_component__WEBPACK_IMPORTED_MODULE_6__["CalendarnewComponent"], _composite_widget_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_7__["ReservationsComponent"]], styles: [".widgets[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 24px;\n}\n.widget[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldHMtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6IndpZGdldHMtbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1nYXA6IDI0cHg7XG59XG4ud2lkZ2V0IHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widgets-list',
                templateUrl: './widgets-list.component.html',
                styleUrls: ['./widgets-list.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _widgets_list_service__WEBPACK_IMPORTED_MODULE_2__["WidgetsListService"] }]; }, null); })();


/***/ }),

/***/ "gAEn":
/*!***************************************************************!*\
  !*** ./src/app/composite/widget/calendar/calendar.service.ts ***!
  \***************************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");







class CalendarService {
    constructor($reservationsApi, $user, $dictionaries) {
        this.$reservationsApi = $reservationsApi;
        this.$user = $user;
        this.$dictionaries = $dictionaries;
    }
    get workplaceReservations$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            reservations: this.$reservationsApi.getWorkplaceReservations({ labelId: this.$user.info.id }),
            workplaces: this.$dictionaries.getDictionary('workplaces'),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ reservations, workplaces }) => {
            return reservations.map((_r) => ({
                reservation: _r,
                workplace: workplaces.find((_w) => _w.id === _r.workplaceId)
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"])); };
CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }]; }, null); })();


/***/ }),

/***/ "j51P":
/*!*****************************************************************!*\
  !*** ./src/app/composite/widget/calendar/calendar.component.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _composite_widget_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @composite/widget/calendar/calendar.service */ "gAEn");
/* harmony import */ var _composite_widget_calendar_calendar_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @composite/widget/calendar/calendar.utils */ "0yhw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/calendar */ "Py9c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function (a4) { return ["/", "reservations", "workplace", "view", a4]; };
function CalendarComponent_ng_container_1_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, cell_r4.reservationId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r4.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r4.text, "");
} }
function CalendarComponent_ng_container_1_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_container_1_ul_1_li_1_Template, 6, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cellDate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cellItems(cellDate_r1));
} }
function CalendarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_container_1_ul_1_Template, 2, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cellDate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isCell(cellDate_r1) && ctx_r0.complexData.length > 0);
} }
class CalendarComponent {
    constructor($service, cdr, _datePipe) {
        this.$service = $service;
        this.cdr = cdr;
        this._datePipe = _datePipe;
        this.date = new Date();
        this.complexData = [];
        this.reservations = [];
        this.$service.workplaceReservations$.subscribe((res) => {
            this.complexData = res;
            this.reservations = res.map(({ reservation }) => reservation);
            this.cdr.markForCheck();
        });
    }
    isCell(date) {
        return Object(_composite_widget_calendar_calendar_utils__WEBPACK_IMPORTED_MODULE_2__["isReservationsInDate"])(date, this.reservations);
    }
    cellItems(date) {
        return Object(_composite_widget_calendar_calendar_utils__WEBPACK_IMPORTED_MODULE_2__["reservationsInDate"])(date, this.complexData, 'reservation').map(({ reservation, workplace }) => {
            return {
                time: `${this._datePipe.transform(reservation.dateTimeFrom, 'HH:mm')} - ${this._datePipe.transform(reservation.dateTimeTo, 'HH:mm')}`,
                text: workplace.name,
                workplaceId: workplace.id,
                floorId: workplace.floorMapId,
                reservationId: reservation.id
            };
        });
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_composite_widget_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-widget-calendar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_composite_widget_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]])], decls: 2, vars: 1, consts: [[3, "nzMode"], [4, "nzDateCell"], ["class", "cell-list", 4, "ngIf"], [1, "cell-list"], ["class", "cell-item", 4, "ngFor", "ngForOf"], [1, "cell-item"], [1, "link-reset", 3, "routerLink"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "month");
    } }, directives: [ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_4__["NzCalendarComponent"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_4__["NzDateCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     .ant-select {\n  width: auto;\n}\n.cell-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.cell-item[_ngcontent-%COMP%] {\n  background-color: #bae7ff;\n  border-radius: 4px;\n  padding: 3px 7px;\n  margin-bottom: 8px;\n}\n.cell-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.cell-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #595959;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWpCRDtFQUNFLGNBQUE7QUFtQkY7QUFwQkE7RUFJTSxXQUFBO0FBbUJOO0FBZkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBaUJGO0FBZkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWlCRjtBQXJCQTtFQU1JLFNBQUE7QUFrQko7QUF4QkE7RUFTSSxjQUFBO0VBQ0EsU0FBQTtBQWtCSiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvdGhlbWUvb3ZlcnJpZGUnO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgOjpuZy1kZWVwIHtcbiAgICAuYW50LXNlbGVjdCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cbn1cbi5jZWxsLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY2VsbC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJsdWUtMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBzcGFuIHtcbiAgICBjb2xvcjogQGdyYXktODtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.less'],
                providers: [_composite_widget_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _composite_widget_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "lN4Y":
/*!************************************************************************************!*\
  !*** ./src/app/presentation/dashboard/components/dashboards/dashboards.service.ts ***!
  \************************************************************************************/
/*! exports provided: DashboardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsService", function() { return DashboardsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardsService {
}
DashboardsService.ɵfac = function DashboardsService_Factory(t) { return new (t || DashboardsService)(); };
DashboardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardsService, factory: DashboardsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "oheD":
/*!*************************************************!*\
  !*** ./src/app/base/widget/widget.component.ts ***!
  \*************************************************/
/*! exports provided: WidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetComponent", function() { return WidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");










function WidgetComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WidgetComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WidgetComponent_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function WidgetComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-dropdown-menu", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetComponent_ng_template_4_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleRemoveClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r5);
} }
const _c0 = ["*"];
class WidgetComponent {
    constructor() {
        this.title = '';
        this.id = 0;
        this.draggable = true;
        this.bordered = false;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleRemoveClick() {
        this.action.emit({ id: this.id, type: 'remove' });
    }
}
WidgetComponent.ɵfac = function WidgetComponent_Factory(t) { return new (t || WidgetComponent)(); };
WidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetComponent, selectors: [["app-widget"]], inputs: { title: "title", id: "id", draggable: "draggable", bordered: "bordered" }, outputs: { action: "action" }, ngContentSelectors: _c0, decls: 6, vars: 3, consts: [["cdkDrag", "", "cdkDragLockAxis", "y", 1, "widget", 3, "nzBordered", "nzTitle", "nzExtra"], ["extraTpl", ""], ["menuTpl", ""], [4, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "icons:drag-indicator", "cdkDragHandle", "", 1, "drag-indicator"], ["nz-button", "", "nz-dropdown", "", "nzType", "text", "nzTrigger", "click", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "setting"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"]], template: function WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetComponent_ng_template_4_Template, 7, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", ctx.bordered)("nzTitle", ctx.title)("nzExtra", _r0);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragHandle"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuItemDirective"]], styles: [".widget[_ngcontent-%COMP%] {\n  min-height: 277px;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.drag-indicator[_ngcontent-%COMP%] {\n  cursor: ns-resize;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7QUFDQTtFQUNFLGNBQUE7QUFDRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6IndpZGdldC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQge1xuICBtaW4taGVpZ2h0OiAyNzdweDtcbn1cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZHJhZy1pbmRpY2F0b3Ige1xuICBjdXJzb3I6IG5zLXJlc2l6ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget',
                templateUrl: './widget.component.html',
                styleUrls: ['./widget.component.less']
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "udpc":
/*!********************************************************!*\
  !*** ./src/app/shared/common/utils/workplace.utils.ts ***!
  \********************************************************/
/*! exports provided: WorkplaceTypes, getTypeName, WorkplaceTypesMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceTypes", function() { return WorkplaceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeName", function() { return getTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceTypesMap", function() { return WorkplaceTypesMap; });
var WorkplaceTypes;
(function (WorkplaceTypes) {
    WorkplaceTypes["DEFAULT"] = "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E";
    WorkplaceTypes["COMPLEMENTARY"] = "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E";
    WorkplaceTypes["PARKING_LOT"] = "\u041F\u0430\u0440\u043A\u043E\u0432\u043E\u0447\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E";
})(WorkplaceTypes || (WorkplaceTypes = {}));
const getTypeName = (type) => WorkplaceTypes[type] || WorkplaceTypes.DEFAULT;
const WorkplaceTypesMap = [
    {
        value: 'DEFAULT',
        name: WorkplaceTypes.DEFAULT
    },
    {
        value: 'COMPLEMENTARY',
        name: WorkplaceTypes.COMPLEMENTARY
    },
    {
        value: 'PARKING_LOT',
        name: WorkplaceTypes.PARKING_LOT
    }
];


/***/ }),

/***/ "yViK":
/*!**************************************************************!*\
  !*** ./src/app/composite/widget/calendar/calendar.module.ts ***!
  \**************************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "j51P");
/* harmony import */ var _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/widget/widget.module */ "/X1i");
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/calendar */ "Py9c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class CalendarModule {
}
CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__["WidgetModule"],
            ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_4__["NzCalendarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__["WidgetModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_4__["NzCalendarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
                exports: [
                    _calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__["WidgetModule"],
                    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_4__["NzCalendarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map