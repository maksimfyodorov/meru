(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~develop-develop-module~office-services-office-services-module~reservations-reservations-modu~91cbca5f"],{

/***/ "029i":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/office-services/components/custom-output/custom-output.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOutputComponent", function() { return CustomOutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");









function CustomOutputComponent_nz_form_control_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.param.value)("placeholder", ctx_r0.param.description)("disabled", true);
} }
function CustomOutputComponent_nz_form_control_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.param.value)("placeholder", ctx_r1.param.description)("disabled", true);
} }
function CustomOutputComponent_nz_form_control_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.getFormattedDate())("placeholder", ctx_r2.param.description)("disabled", true);
} }
function CustomOutputComponent_nz_form_control_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r3.getDictionaryValue())("placeholder", ctx_r3.param.description)("disabled", true);
} }
class CustomOutputComponent {
    get type() {
        return this.param && this.param.dataType
            ? this.param.dataType.type
            : 'UNDEFINED';
    }
    getDictionaryValue() {
        const itemId = new Number(this.param.value).valueOf();
        const items = this.param && this.param.dataType && this.param.dataType.items
            ? this.param.dataType.items
            : [];
        const result = items.find((item) => item.id == itemId);
        return result ? result.description : ' ';
    }
    getFormattedDate() {
        const formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.param.value, this.dateFormat, 'ru-RU');
        return formattedDate ? formattedDate : ' ';
    }
}
CustomOutputComponent.ɵfac = function CustomOutputComponent_Factory(t) { return new (t || CustomOutputComponent)(); };
CustomOutputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomOutputComponent, selectors: [["custom-output"]], inputs: { param: "param", dateFormat: "dateFormat" }, decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["nz-input", "", 3, "value", "placeholder", "disabled"]], template: function CustomOutputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CustomOutputComponent_nz_form_control_3_Template, 2, 3, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CustomOutputComponent_nz_form_control_4_Template, 2, 3, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CustomOutputComponent_nz_form_control_5_Template, 2, 3, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CustomOutputComponent_nz_form_control_6_Template, 2, 3, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.param.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "STRING");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "INTEGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "DATETIME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "DICTIONARY");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tb3V0cHV0LmNvbXBvbmVudC5sZXNzIn0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], CustomOutputComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomOutputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'custom-output',
                templateUrl: './custom-output.component.html',
                styleUrls: ['./custom-output.component.less'],
            }]
    }], null, { sub: [], param: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dateFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "ErID":
/*!******************************************************************!*\
  !*** ./src/app/shared/office-services/order-services.service.ts ***!
  \******************************************************************/
/*! exports provided: OrderServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServicesService", function() { return OrderServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/measurements.service */ "FsS2");





class OrderServicesService {
    constructor($api, $measurements) {
        this.$api = $api;
        this.$measurements = $measurements;
    }
    getK2Scenarios() {
        return this.$api
            .getK2Scenarios()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => (response && response.success ? response.data : [])));
    }
    openK2Session(scenarioId) {
        return this.$api
            .openK2Session({ scenarioId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => (response && response.success ? response.data : [])));
    }
    putK2SessionStep(action) {
        return this.$api.putK2SessionStep({ action }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            var _a, _b;
            if (response === null || response === void 0 ? void 0 : response.success) {
                let action = ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.action) ? response.data.action
                    : response.data;
                if (action && action.isLastStep) {
                    const session = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.session;
                    let params = session
                        .map((item) => item.params)
                        .reduce((params, item) => params.concat(item));
                    action.params = params;
                }
                return action;
            }
            else {
                return undefined;
            }
        }));
    }
    commitK2Session(uuid) {
        return this.$api
            .commitK2Session({ uuid })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response));
        // .pipe(map((response) => (response ? response.success : false)));
    }
    get dateTimeFormat$() {
        return this.$measurements.getMeasurementByName$('shortDateTime');
    }
}
OrderServicesService.ɵfac = function OrderServicesService_Factory(t) { return new (t || OrderServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementsService"])); };
OrderServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderServicesService, factory: OrderServicesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsApiService"] }, { type: _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementsService"] }]; }, null); })();


/***/ }),

/***/ "KqCa":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/office-services/components/custom-input/custom-input.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CustomInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInputComponent", function() { return CustomInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");














function CustomInputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomInputComponent_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.param.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r0.param.description)("ngModel", ctx_r0.param.value);
} }
function CustomInputComponent_nz_input_number_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-input-number", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomInputComponent_nz_input_number_4_Template_nz_input_number_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.param.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r1.param.description)("ngModel", ctx_r1.param.value)("nzMin", 0)("nzStep", 1);
} }
function CustomInputComponent_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 12);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r10.id)("nzLabel", item_r10.description);
} }
function CustomInputComponent_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomInputComponent_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.param.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomInputComponent_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", ctx_r2.param.description)("ngModel", ctx_r2.param.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.items);
} }
function CustomInputComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomInputComponent_label_6_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.param.value = $event ? "true" : "false"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.param.value == "true" ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.param.description);
} }
const _c0 = function () { return { nzFormat: "HH:mm" }; };
function CustomInputComponent_nz_date_picker_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-date-picker", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomInputComponent_nz_date_picker_7_Template_nz_date_picker_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.param.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", ctx_r4.param.description)("ngModel", ctx_r4.param.value)("nzFormat", ctx_r4.dateFormat)("nzShowTime", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
class CustomInputComponent {
    constructor() {
        this.timeDefaultValue = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["setHours"])(new Date(), 0);
    }
    get type() {
        return this.param && this.param.dataType
            ? this.param.dataType.type
            : 'UNDEFINED';
    }
    get items() {
        return this.param && this.param.dataType ? this.param.dataType.items : [];
    }
}
CustomInputComponent.ɵfac = function CustomInputComponent_Factory(t) { return new (t || CustomInputComponent)(); };
CustomInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomInputComponent, selectors: [["custom-input"]], inputs: { param: "param", stepForm: "stepForm", index: "index", dateFormat: "dateFormat" }, decls: 8, vars: 8, consts: [[3, "formGroup"], ["formArrayName", "params", 3, "ngSwitch"], [3, "formGroupName"], ["class", "input-value", "nz-input", "", "formControlName", "field", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["class", "input-value", "formControlName", "field", 3, "placeholder", "ngModel", "nzMin", "nzStep", "ngModelChange", 4, "ngSwitchCase"], ["class", "input-value", "formControlName", "field", 3, "nzPlaceHolder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["class", "input-value", "formControlName", "field", "nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["class", "input-value", "formControlName", "field", 3, "nzPlaceHolder", "ngModel", "nzFormat", "nzShowTime", "ngModelChange", 4, "ngSwitchCase"], ["nz-input", "", "formControlName", "field", 1, "input-value", 3, "placeholder", "ngModel", "ngModelChange"], ["formControlName", "field", 1, "input-value", 3, "placeholder", "ngModel", "nzMin", "nzStep", "ngModelChange"], ["formControlName", "field", 1, "input-value", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["formControlName", "field", "nz-checkbox", "", 1, "input-value", 3, "ngModel", "ngModelChange"], ["formControlName", "field", 1, "input-value", 3, "nzPlaceHolder", "ngModel", "nzFormat", "nzShowTime", "ngModelChange"]], template: function CustomInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomInputComponent_input_3_Template, 1, 2, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomInputComponent_nz_input_number_4_Template, 1, 4, "nz-input-number", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomInputComponent_nz_select_5_Template, 2, 3, "nz-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomInputComponent_label_6_Template, 2, 2, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomInputComponent_nz_date_picker_7_Template, 1, 5, "nz-date-picker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.stepForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "STRING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "INTEGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "DICTIONARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "BOOLEAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "DATETIME");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__["NzInputNumberComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__["NzCheckboxComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__["NzDatePickerComponent"]], styles: [".input-value[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1pbnB1dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJjdXN0b20taW5wdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtdmFsdWV7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscriptions"])()
], CustomInputComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'custom-input',
                templateUrl: './custom-input.component.html',
                styleUrls: ['./custom-input.component.less'],
            }]
    }], null, { sub: [], param: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stepForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "WxKn":
/*!*************************************************************************!*\
  !*** ./src/app/shared/office-services/models/service-step-type.enum.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceStepType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStepType", function() { return ServiceStepType; });
var ServiceStepType;
(function (ServiceStepType) {
    ServiceStepType[ServiceStepType["INITIAL"] = 0] = "INITIAL";
    ServiceStepType[ServiceStepType["PROCESS"] = 1] = "PROCESS";
    ServiceStepType[ServiceStepType["COMPLETE"] = 2] = "COMPLETE";
})(ServiceStepType || (ServiceStepType = {}));


/***/ }),

/***/ "ZIWv":
/*!*************************************************************************!*\
  !*** ./src/app/shared/office-services/shared-office-services.module.ts ***!
  \*************************************************************************/
/*! exports provided: SharedOfficeServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedOfficeServicesModule", function() { return SharedOfficeServicesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/custom-input/custom-input.component */ "KqCa");
/* harmony import */ var _components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/custom-output/custom-output.component */ "029i");


















class SharedOfficeServicesModule {
}
SharedOfficeServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedOfficeServicesModule });
SharedOfficeServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedOfficeServicesModule_Factory(t) { return new (t || SharedOfficeServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__["NzInputNumberModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_10__["NzSpaceModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__["NzCheckboxModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedOfficeServicesModule, { declarations: [_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_15__["CustomInputComponent"], _components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_16__["CustomOutputComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__["NzInputNumberModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_10__["NzSpaceModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__["NzCheckboxModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"]], exports: [_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_15__["CustomInputComponent"], _components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_16__["CustomOutputComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedOfficeServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_15__["CustomInputComponent"], _components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_16__["CustomOutputComponent"]],
                exports: [_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_15__["CustomInputComponent"], _components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_16__["CustomOutputComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__["NzInputNumberModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
                    ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_10__["NzSpaceModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__["NzCheckboxModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~develop-develop-module~office-services-office-services-module~reservations-reservations-modu~91cbca5f.js.map