(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~develop-develop-module~offices-offices-module"],{

/***/ "3TLQ":
/*!***************************************************************!*\
  !*** ./src/app/base/simple-filter/simple-filter.component.ts ***!
  \***************************************************************/
/*! exports provided: SimpleFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFilterComponent", function() { return SimpleFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







function SimpleFilterComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SimpleFilterComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleFilterComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.isCollapsible ? _r2 : _r6);
} }
function SimpleFilterComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SimpleFilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleFilterComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function SimpleFilterComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SimpleFilterComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-collapse-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzActiveChange", function SimpleFilterComponent_ng_template_3_Template_nz_collapse_panel_nzActiveChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.active = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleFilterComponent_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false)("nzGhost", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", _r4)("nzShowArrow", false)("nzActive", ctx_r3.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.collapseTpl);
} }
function SimpleFilterComponent_ng_template_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SimpleFilterComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleFilterComponent_ng_template_5_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleFilterComponent_ng_template_5_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleFilterComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.toggleActive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.tpl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.collapseBtn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r5.collapseIcon);
} }
function SimpleFilterComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SimpleFilterComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimpleFilterComponent_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 6);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.tpl);
} }
function SimpleFilterComponent_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SimpleFilterComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleFilterComponent_ng_template_9_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.tpl);
} }
class SimpleFilterComponent {
    constructor() {
        this.active = false;
        this.collapseBtn = 'Расширенный фильтр';
        this.isCollapsible = true;
    }
    toggleActive() {
        this.active = !this.active;
    }
    get collapseIcon() {
        return this.active ? 'up' : 'down';
    }
}
SimpleFilterComponent.ɵfac = function SimpleFilterComponent_Factory(t) { return new (t || SimpleFilterComponent)(); };
SimpleFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleFilterComponent, selectors: [["app-simple-filter"]], inputs: { collapseBtn: "collapseBtn", tpl: "tpl", collapseTpl: "collapseTpl", isCollapsible: "isCollapsible" }, decls: 11, vars: 2, consts: [[1, "filter"], [4, "ngIf"], ["colTpl", ""], ["colHeaderTpl", ""], ["rowTpl", ""], ["notCollapseTpl", ""], [4, "ngTemplateOutlet"], [1, "filter__collapse", 3, "nzBordered", "nzGhost"], [3, "nzHeader", "nzShowArrow", "nzActive", "nzActiveChange"], [1, "pt-15"], [1, "filter__collapse-header", 3, "click"], [1, "filter__collapse-header-tpl"], ["nz-button", "", "nzType", "link", 1, "filter__collapse-header-btn", 3, "click"], ["nz-icon", "", 3, "nzType"], [1, "filter__no-collapse"]], template: function SimpleFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleFilterComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleFilterComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleFilterComponent_ng_template_3_Template, 4, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimpleFilterComponent_ng_template_5_Template, 6, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimpleFilterComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SimpleFilterComponent_ng_template_9_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tpl && ctx.collapseTpl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tpl && !ctx.collapseTpl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__["NzCollapsePanelComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.filter[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.filter__collapse-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.filter__collapse-header-tpl[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.filter__collapse-header-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: 0 0 auto;\n}\n.filter__collapse-header-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.filter__collapse[_ngcontent-%COMP%] {\n  border: none;\n  padding: 24px;\n  background-color: transparent;\n}\n.filter__collapse[_ngcontent-%COMP%]     .ant-collapse-header, .filter__collapse[_ngcontent-%COMP%]     .ant-collapse-content, .filter__collapse[_ngcontent-%COMP%]     .ant-collapse-content-box {\n  padding: 0!important;\n}\n.filter__no-collapse[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1maWx0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBakJEO0VBQ0UsY0FBQTtBQW1CRjtBQWpCQTtFQUNFLHlCQUFBO0FBbUJGO0FBbEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFvQko7QUFuQkk7RUFDRSxjQUFBO0FBcUJOO0FBbkJJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBcUJOO0FBdkJJO0VBSUksZUFBQTtBQXNCUjtBQWxCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFvQko7QUF2QkU7OztFQU1NLG9CQUFBO0FBc0JSO0FBbEJFO0VBQ0UsYUFBQTtBQW9CSiIsImZpbGUiOiJzaW1wbGUtZmlsdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy90aGVtZS9vdmVycmlkZSc7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZpbHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gICZfX2NvbGxhcHNlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAmLXRwbCB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gICAgJi1idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2NvbGxhcHNlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgLmFudC1jb2xsYXBzZS1oZWFkZXIsIC5hbnQtY29sbGFwc2UtY29udGVudCwgLmFudC1jb2xsYXBzZS1jb250ZW50LWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX19uby1jb2xsYXBzZSB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-filter',
                templateUrl: './simple-filter.component.html',
                styleUrls: ['./simple-filter.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { collapseBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapseTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCollapsible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6pky":
/*!************************************************************!*\
  !*** ./src/app/base/simple-filter/simple-filter.module.ts ***!
  \************************************************************/
/*! exports provided: SimpleFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFilterModule", function() { return SimpleFilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _simple_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-filter.component */ "3TLQ");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");







class SimpleFilterModule {
}
SimpleFilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimpleFilterModule });
SimpleFilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimpleFilterModule_Factory(t) { return new (t || SimpleFilterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_3__["NzCollapseModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimpleFilterModule, { declarations: [_simple_filter_component__WEBPACK_IMPORTED_MODULE_2__["SimpleFilterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_3__["NzCollapseModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"]], exports: [_simple_filter_component__WEBPACK_IMPORTED_MODULE_2__["SimpleFilterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleFilterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_simple_filter_component__WEBPACK_IMPORTED_MODULE_2__["SimpleFilterComponent"]],
                exports: [_simple_filter_component__WEBPACK_IMPORTED_MODULE_2__["SimpleFilterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_3__["NzCollapseModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~develop-develop-module~offices-offices-module.js.map