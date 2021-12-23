(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-services-office-services-module"],{

/***/ "P4ut":
/*!********************************************************************************************************!*\
  !*** ./src/app/presentation/office-services/components/action-step-card/action-step-card.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ActionStepCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStepCardComponent", function() { return ActionStepCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _shared_office_services_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/office-services/components/custom-input/custom-input.component */ "KqCa");
/* harmony import */ var _shared_office_services_components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/office-services/components/custom-output/custom-output.component */ "029i");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");













function ActionStepCardComponent_form_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "custom-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepForm", ctx_r5.stepForm)("param", param_r6)("index", i_r7)("dateFormat", ctx_r5.dateTimeFormat);
} }
const _c0 = function () { return [16, 24]; };
function ActionStepCardComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActionStepCardComponent_form_1_div_2_Template, 2, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLayout", "inline")("formGroup", ctx_r0.stepForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentStepParams);
} }
function ActionStepCardComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "custom-output", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("param", param_r9)("dateFormat", ctx_r8.dateTimeFormat);
} }
function ActionStepCardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActionStepCardComponent_ng_template_2_div_2_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.displayedStepParams);
} }
function ActionStepCardComponent_ng_template_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionStepCardComponent_ng_template_4_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.actionNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u043B\u0435\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.stepForm.invalid)("nzLoading", ctx_r11.isLoading);
} }
function ActionStepCardComponent_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionStepCardComponent_ng_template_4_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.actionCommit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r12.isLoading);
} }
function ActionStepCardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionStepCardComponent_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.actionCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0442\u043C\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActionStepCardComponent_ng_template_4_button_3_Template, 2, 2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActionStepCardComponent_ng_template_4_button_4_Template, 2, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLastStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLastStep);
} }
const _c1 = function (a0) { return [a0]; };
const _c2 = function () { return []; };
class ActionStepCardComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.title = '';
        this.nextAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commitSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes && changes.action && changes.action.currentValue) {
            this.createForm();
        }
    }
    getTitle() {
        return this.isLastStep
            ? this.title + ', проверка введенных данных'
            : this.title + ', шаг ' + this.stepNumber;
    }
    get currentStepParams() {
        return this.action ? this.action.params : [];
    }
    get isLastStep() {
        return this.action ? this.action.isLastStep : false;
    }
    get stepNumber() {
        return this.action ? this.action.step : 1;
    }
    get displayedStepParams() {
        return this.currentStepParams.filter((stepParam) => stepParam.dataType.type === 'STRING' ||
            stepParam.dataType.type === 'INTEGER' ||
            stepParam.dataType.type === 'DICTIONARY' ||
            stepParam.dataType.type === 'DATETIME');
    }
    createForm() {
        this.stepForm = this.formBuilder.group({
            params: this.formBuilder.array(this.createParams(this.currentStepParams)),
        });
    }
    createParams(params) {
        return params
            ? params.map((param) => {
                let validator = [];
                if (param.isOptional == false) {
                    validator.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                }
                return this.formBuilder.group({
                    field: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, validator),
                });
            })
            : [];
    }
    actionNext() {
        this.nextAction.emit();
    }
    actionCommit() {
        this.commitSession.emit();
    }
    actionCancel() {
        this.cancelSession.emit();
    }
}
ActionStepCardComponent.ɵfac = function ActionStepCardComponent_Factory(t) { return new (t || ActionStepCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ActionStepCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionStepCardComponent, selectors: [["action-step-card"]], inputs: { action: "action", title: "title", dateTimeFormat: "dateTimeFormat", isLoading: "isLoading", showActionTmpl: "showActionTmpl" }, outputs: { nextAction: "nextAction", commitSession: "commitSession", cancelSession: "cancelSession" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 7, consts: [[1, "scenarios-card", 3, "nzTitle", "nzActions"], ["nz-form", "", 3, "nzLayout", "formGroup", 4, "ngIf", "ngIfElse"], ["lastStepForm", ""], ["actionTmpl", ""], ["nz-form", "", 3, "nzLayout", "formGroup"], ["nz-row", "", 1, "grid-form-items", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan"], [3, "stepForm", "param", "index", "dateFormat"], ["nz-form", "", "nzLayout", "vertical"], [3, "param", "dateFormat"], [1, "action-tmpl"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function ActionStepCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActionStepCardComponent_form_1_Template, 3, 5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActionStepCardComponent_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActionStepCardComponent_ng_template_4_Template, 5, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx.getTitle())("nzActions", ctx.showActionTmpl ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _r3) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLastStep)("ngIfElse", _r1);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_2__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], _shared_office_services_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_6__["CustomInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _shared_office_services_components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_7__["CustomOutputComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"]], styles: [".scenarios-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.grid-form-items[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.action-tmpl[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 10px;\n  margin: 0 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1zdGVwLWNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJhY3Rpb24tc3RlcC1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjZW5hcmlvcy1jYXJke1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZ3JpZC1mb3JtLWl0ZW1ze1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGlvbi10bXBsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDAgMjRweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionStepCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'action-step-card',
                templateUrl: './action-step-card.component.html',
                styleUrls: ['./action-step-card.component.less'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateTimeFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showActionTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], commitSession: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancelSession: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "UubB":
/*!********************************************************************************!*\
  !*** ./src/app/presentation/office-services/office-services-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: OfficeServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeServicesRoutingModule", function() { return OfficeServicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_office_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/office-services.component */ "YVgz");





const routes = [
    {
        path: '',
        component: _page_office_services_component__WEBPACK_IMPORTED_MODULE_2__["OfficeServicesomponent"],
        data: {
            title: 'Услуги в офисе'
        }
    },
];
class OfficeServicesRoutingModule {
}
OfficeServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OfficeServicesRoutingModule });
OfficeServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OfficeServicesRoutingModule_Factory(t) { return new (t || OfficeServicesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficeServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficeServicesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "VdFp":
/*!****************************************************************************!*\
  !*** ./src/app/shared/layout/extra-title-tpl/extra-title-tpl.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExtraTitleTplComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraTitleTplComponent", function() { return ExtraTitleTplComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/layout-shared.service */ "ndgU");



const _c0 = ["contentTpl"];
function ExtraTitleTplComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c1 = ["*"];
class ExtraTitleTplComponent {
    constructor(_layoutService) {
        this._layoutService = _layoutService;
        this.static = false;
    }
    set content(value) {
        this._layoutService.extra = value;
    }
}
ExtraTitleTplComponent.ɵfac = function ExtraTitleTplComponent_Factory(t) { return new (t || ExtraTitleTplComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_1__["LayoutSharedService"])); };
ExtraTitleTplComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtraTitleTplComponent, selectors: [["app-extra-title-tpl"]], viewQuery: function ExtraTitleTplComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { static: "static" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["contentTpl", ""]], template: function ExtraTitleTplComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExtraTitleTplComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtraTitleTplComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-extra-title-tpl',
                template: `<ng-template #contentTpl><ng-content></ng-content></ng-template>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_1__["LayoutSharedService"] }]; }, { static: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentTpl']
        }] }); })();


/***/ }),

/***/ "YVgz":
/*!********************************************************************************!*\
  !*** ./src/app/presentation/office-services/page/office-services.component.ts ***!
  \********************************************************************************/
/*! exports provided: OfficeServicesomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeServicesomponent", function() { return OfficeServicesomponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _src_app_core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _src_app_shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/shared/office-services/models/service-step-type.enum */ "WxKn");
/* harmony import */ var _src_app_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/shared/office-services/order-services.service */ "ErID");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _src_app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/layout/layout-shared.service */ "ndgU");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _components_action_step_card_action_step_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/action-step-card/action-step-card.component */ "P4ut");


















const _c0 = ["successUrlTpl"];
function OfficeServicesomponent_nz_card_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficeServicesomponent_nz_card_0_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const scenario_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.selectScenario(scenario_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scenario_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r6.getScenarioButtonType(scenario_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", scenario_r7.description, " ");
} }
const _c1 = function (a0) { return [a0]; };
const _c2 = function () { return [16, 24]; };
function OfficeServicesomponent_nz_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OfficeServicesomponent_nz_card_0_div_2_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", "\u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043B\u0443\u0433 | \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439")("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, (ctx_r0.actions == null ? null : ctx_r0.actions.length) > 0 ? undefined : _r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.scenarios);
} }
function OfficeServicesomponent_action_step_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "action-step-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nextAction", function OfficeServicesomponent_action_step_card_1_Template_action_step_card_nextAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.nextAction(); })("commitSession", function OfficeServicesomponent_action_step_card_1_Template_action_step_card_commitSession_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.commitSession(); })("cancelSession", function OfficeServicesomponent_action_step_card_1_Template_action_step_card_cancelSession_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.resetSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r1.selectedScenario == null ? null : ctx_r1.selectedScenario.description)("action", action_r10)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, ctx_r1.loading))("dateTimeFormat", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, ctx_r1.dateTimeFormat))("showActionTmpl", (ctx_r1.actions == null ? null : ctx_r1.actions.length) - 1 === i_r11);
} }
function OfficeServicesomponent_ng_template_2_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u041A2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function OfficeServicesomponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u041A2.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OfficeServicesomponent_ng_template_2_a_4_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.url);
} }
function OfficeServicesomponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficeServicesomponent_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.nextAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0414\u0430\u043B\u0435\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r5.selectedScenario)("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r5.loading));
} }
class OfficeServicesomponent {
    constructor(cdr, orderService, layoutService, modalService) {
        this.cdr = cdr;
        this.orderService = orderService;
        this.layoutService = layoutService;
        this.modalService = modalService;
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.stepType = _src_app_shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_4__["ServiceStepType"].INITIAL;
        this.ServiceStepType = _src_app_shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_4__["ServiceStepType"];
        this.actions = [];
    }
    ngOnInit() {
        this.loading.next(true);
        this.sub = this.orderService.getK2Scenarios().subscribe((scenarios) => {
            this.scenarios = scenarios;
            this.loading.next(false);
            this.cdr.detectChanges();
        });
        this.dateTimeFormat = this.orderService.dateTimeFormat$;
    }
    get currentStepAction() {
        return this.actions ? this.actions.slice().pop() : undefined;
    }
    get uuid() {
        return this.currentStepAction ? this.currentStepAction.uuid : undefined;
    }
    getScenarioButtonType(scenario) {
        var _a;
        return ((_a = this.selectedScenario) === null || _a === void 0 ? void 0 : _a.id) === (scenario === null || scenario === void 0 ? void 0 : scenario.id) ? 'primary' : 'default';
    }
    nextAction() {
        if (this.actions && this.actions.length > 0) {
            this.getNextStep();
        }
        else {
            this.startScenario();
        }
    }
    getNextStep() {
        this.loading.next(true);
        this.sub = this.orderService
            .putK2SessionStep(this.currentStepAction)
            .subscribe((action) => {
            this.addNewStepAction(action);
        });
    }
    startScenario() {
        var _a;
        this.loading.next(true);
        this.sub = this.orderService
            .openK2Session((_a = this.selectedScenario) === null || _a === void 0 ? void 0 : _a.id)
            .subscribe((action) => {
            this.addNewStepAction(action);
        });
    }
    selectScenario(scenario) {
        var _a;
        if (((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return;
        }
        this.selectedScenario = scenario;
    }
    addNewStepAction(newAction) {
        if (newAction) {
            this.actions.push(newAction);
        }
        this.loading.next(false);
        this.cdr.detectChanges();
    }
    commitSession() {
        this.loading.next(true);
        this.sub = this.orderService
            .commitK2Session(this.uuid)
            .subscribe((resultStatus) => {
            this.url = resultStatus.data.k2RequestUrl;
            this.showNotification(resultStatus.success);
            this.loading.next(false);
            this.resetSession();
        });
    }
    resetSession() {
        this.selectedScenario = undefined;
        this.actions = [];
        this.layoutService.toScrollTop$();
    }
    showNotification(success) {
        if (success) {
            this.modalService.success({
                nzTitle: 'Услуга заказана успешно',
                nzContent: this.successUrlTpl,
            });
        }
        else if (success === false) {
            this.modalService.error({
                nzTitle: 'Не удалось заказать услугу',
                nzContent: '',
            });
        }
    }
}
OfficeServicesomponent.ɵfac = function OfficeServicesomponent_Factory(t) { return new (t || OfficeServicesomponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_5__["OrderServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_7__["LayoutSharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"])); };
OfficeServicesomponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OfficeServicesomponent, selectors: [["app-office-services"]], viewQuery: function OfficeServicesomponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_src_app_core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroll = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.successUrlTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_src_app_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_5__["OrderServicesService"]])], decls: 6, vars: 2, consts: [["class", "scenarios-card", 3, "nzTitle", "nzActions", 4, "ngIf"], [3, "title", "action", "isLoading", "dateTimeFormat", "showActionTmpl", "nextAction", "commitSession", "cancelSession", 4, "ngFor", "ngForOf"], ["successUrlTpl", ""], ["actionTmpl", ""], [1, "scenarios-card", 3, "nzTitle", "nzActions"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan"], ["nz-button", "", 1, "scenario-button", 3, "nzType", "click"], [3, "title", "action", "isLoading", "dateTimeFormat", "showActionTmpl", "nextAction", "commitSession", "cancelSession"], [1, "url-link"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "action-tmpl"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click"]], template: function OfficeServicesomponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OfficeServicesomponent_nz_card_0_Template, 3, 7, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfficeServicesomponent_action_step_card_1_Template, 3, 9, "action-step-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OfficeServicesomponent_ng_template_2_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OfficeServicesomponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scenarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.actions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], _components_action_step_card_action_step_card_component__WEBPACK_IMPORTED_MODULE_15__["ActionStepCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".extra-title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.scenarios-card[_ngcontent-%COMP%]   .scenario-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.action-tmpl[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 10px;\n  margin: 0 24px;\n}\n.url-link[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZS1zZXJ2aWNlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUVBO0VBRUksV0FBQTtBQURKO0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBSEY7QUFLQTtFQUNFLGdCQUFBO0FBSEYiLCJmaWxlIjoib2ZmaWNlLXNlcnZpY2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zY2VuYXJpb3MtY2FyZCB7XG4gIC5zY2VuYXJpby1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5hY3Rpb24tdG1wbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAwIDI0cHg7XG59XG4udXJsLWxpbmsge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscriptions"])()
], OfficeServicesomponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfficeServicesomponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-office-services',
                templateUrl: './office-services.component.html',
                styleUrls: ['./office-services.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_src_app_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_5__["OrderServicesService"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _src_app_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_5__["OrderServicesService"] }, { type: _src_app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_7__["LayoutSharedService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"] }]; }, { sub: [], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_src_app_core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollDirective"]]
        }], successUrlTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['successUrlTpl']
        }] }); })();


/***/ }),

/***/ "kMfV":
/*!************************************************************************!*\
  !*** ./src/app/presentation/office-services/office-services.module.ts ***!
  \************************************************************************/
/*! exports provided: OfficeServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeServicesModule", function() { return OfficeServicesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_app_shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/shared/layout/extra-title-tpl/extra-title-tpl.module */ "qzeD");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _office_services_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./office-services-routing.module */ "UubB");
/* harmony import */ var _page_office_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/office-services.component */ "YVgz");
/* harmony import */ var _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/shared/office-services/shared-office-services.module */ "ZIWv");
/* harmony import */ var _components_action_step_card_action_step_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/action-step-card/action-step-card.component */ "P4ut");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














class OfficeServicesModule {
}
OfficeServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OfficeServicesModule });
OfficeServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OfficeServicesModule_Factory(t) { return new (t || OfficeServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _office_services_routing_module__WEBPACK_IMPORTED_MODULE_8__["OfficeServicesRoutingModule"],
            _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_10__["SharedOfficeServicesModule"],
            _src_app_shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_2__["ExtraTitleTplModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_6__["NzProgressModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OfficeServicesModule, { declarations: [_page_office_services_component__WEBPACK_IMPORTED_MODULE_9__["OfficeServicesomponent"], _components_action_step_card_action_step_card_component__WEBPACK_IMPORTED_MODULE_11__["ActionStepCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _office_services_routing_module__WEBPACK_IMPORTED_MODULE_8__["OfficeServicesRoutingModule"],
        _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_10__["SharedOfficeServicesModule"],
        _src_app_shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_2__["ExtraTitleTplModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_6__["NzProgressModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfficeServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_page_office_services_component__WEBPACK_IMPORTED_MODULE_9__["OfficeServicesomponent"], _components_action_step_card_action_step_card_component__WEBPACK_IMPORTED_MODULE_11__["ActionStepCardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _office_services_routing_module__WEBPACK_IMPORTED_MODULE_8__["OfficeServicesRoutingModule"],
                    _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_10__["SharedOfficeServicesModule"],
                    _src_app_shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_2__["ExtraTitleTplModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
                    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_6__["NzProgressModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzGridModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "qzeD":
/*!*************************************************************************!*\
  !*** ./src/app/shared/layout/extra-title-tpl/extra-title-tpl.module.ts ***!
  \*************************************************************************/
/*! exports provided: ExtraTitleTplModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraTitleTplModule", function() { return ExtraTitleTplModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extra-title-tpl.component */ "VdFp");



class ExtraTitleTplModule {
}
ExtraTitleTplModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExtraTitleTplModule });
ExtraTitleTplModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExtraTitleTplModule_Factory(t) { return new (t || ExtraTitleTplModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExtraTitleTplModule, { declarations: [_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_1__["ExtraTitleTplComponent"]], exports: [_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_1__["ExtraTitleTplComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtraTitleTplModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_1__["ExtraTitleTplComponent"]],
                exports: [
                    _extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_1__["ExtraTitleTplComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=office-services-office-services-module.js.map