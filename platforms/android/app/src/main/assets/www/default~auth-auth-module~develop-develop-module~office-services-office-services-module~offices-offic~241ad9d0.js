(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0"],{

/***/ "4xsP":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-space.js ***!
  \*********************************************************************************/
/*! exports provided: NzSpaceComponent, NzSpaceItemDirective, NzSpaceItemLegacyComponent, NzSpaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpaceComponent", function() { return NzSpaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpaceItemDirective", function() { return NzSpaceItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpaceItemLegacyComponent", function() { return NzSpaceItemLegacyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSpaceModule", function() { return NzSpaceModule; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "79xS");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @deprecated NzSpaceItemLegacyComponent will be removed on 12.0.0.
 * @breaking-change 12.0.0
 */




const _c0 = ["*"];
function NzSpaceComponent_ng_template_1_span_2_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzSpaceComponent_ng_template_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, NzSpaceComponent_ng_template_1_span_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    const last_r2 = ctx_r6.last;
    const index_r3 = ctx_r6.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("margin-bottom", ctx_r4.nzDirection === "vertical" ? last_r2 ? null : ctx_r4.spaceSize : null, "px")("margin-right", ctx_r4.nzDirection === "horizontal" ? last_r2 ? null : ctx_r4.spaceSize : null, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngTemplateOutlet", ctx_r4.nzSplit)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](6, _c1, index_r3));
} }
function NzSpaceComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainer"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, NzSpaceComponent_ng_template_1_span_2_Template, 2, 8, "span", 3);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("margin-bottom", ctx_r0.nzDirection === "vertical" ? last_r2 ? null : ctx_r0.spaceSize : null, "px")("margin-right", ctx_r0.nzDirection === "horizontal" ? last_r2 ? null : ctx_r0.spaceSize : null, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngTemplateOutlet", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.nzSplit && !last_r2);
} }
class NzSpaceItemLegacyComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    setDirectionAndSize(direction, size) {
        if (direction === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-bottom');
            this.renderer.setStyle(this.elementRef.nativeElement, 'margin-right', `${size}px`);
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-right');
            this.renderer.setStyle(this.elementRef.nativeElement, 'margin-bottom', `${size}px`);
        }
    }
    ngOnInit() { }
}
NzSpaceItemLegacyComponent.??fac = function NzSpaceItemLegacyComponent_Factory(t) { return new (t || NzSpaceItemLegacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NzSpaceItemLegacyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: NzSpaceItemLegacyComponent, selectors: [["nz-space-item"], ["", "nz-space-item", ""]], hostAttrs: [1, "ant-space-item"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzSpaceItemLegacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzSpaceItemLegacyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSpaceItemDirective {
    constructor() { }
}
NzSpaceItemDirective.??fac = function NzSpaceItemDirective_Factory(t) { return new (t || NzSpaceItemDirective)(); };
NzSpaceItemDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({ type: NzSpaceItemDirective, selectors: [["", "nzSpaceItem", ""]] });
NzSpaceItemDirective.ctorParameters = () => [];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'space';
const SPACE_SIZE = {
    small: 8,
    middle: 16,
    large: 24
};
class NzSpaceComponent {
    constructor(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzDirection = 'horizontal';
        this.nzSplit = null;
        this.nzWrap = false;
        this.nzSize = 'small';
        this.spaceSize = SPACE_SIZE.small;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    updateSpaceItems() {
        var _a;
        const numberSize = typeof this.nzSize === 'string' ? SPACE_SIZE[this.nzSize] : this.nzSize;
        this.spaceSize = numberSize / (!!this.nzSplit ? 2 : 1);
        if ((_a = this.nzSpaceItemComponents) === null || _a === void 0 ? void 0 : _a.length) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_5__["warnDeprecation"])('`nz-space-item` in `nz-space` will be removed in 12.0.0, please use `*nzSpaceItem` instead.');
            this.nzSpaceItemComponents.forEach(item => {
                item.setDirectionAndSize(this.nzDirection, this.spaceSize);
            });
        }
        this.cdr.markForCheck();
    }
    ngOnChanges() {
        this.updateSpaceItems();
        this.mergedAlign = this.nzAlign === undefined && this.nzDirection === 'horizontal' ? 'center' : this.nzAlign;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterContentInit() {
        this.updateSpaceItems();
        this.nzSpaceItemComponents.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.updateSpaceItems();
        });
    }
}
NzSpaceComponent.??fac = function NzSpaceComponent_Factory(t) { return new (t || NzSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
NzSpaceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: NzSpaceComponent, selectors: [["nz-space"], ["", "nz-space", ""]], contentQueries: function NzSpaceComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????contentQuery"](dirIndex, NzSpaceItemLegacyComponent, false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????contentQuery"](dirIndex, NzSpaceItemDirective, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.nzSpaceItemComponents = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.items = _t);
    } }, hostAttrs: [1, "ant-space"], hostVars: 14, hostBindings: function NzSpaceComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("flex-wrap", ctx.nzWrap ? "wrap" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ant-space-horizontal", ctx.nzDirection === "horizontal")("ant-space-vertical", ctx.nzDirection === "vertical")("ant-space-align-start", ctx.mergedAlign === "start")("ant-space-align-end", ctx.mergedAlign === "end")("ant-space-align-center", ctx.mergedAlign === "center")("ant-space-align-baseline", ctx.mergedAlign === "baseline");
    } }, inputs: { nzDirection: "nzDirection", nzSplit: "nzSplit", nzWrap: "nzWrap", nzSize: "nzSize", nzAlign: "nzAlign" }, exportAs: ["NzSpace"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????NgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], [1, "ant-space-item"], [3, "ngTemplateOutlet"], ["class", "ant-space-split", 3, "margin-bottom", "margin-right", 4, "ngIf"], [1, "ant-space-split"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzSpaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, NzSpaceComponent_ng_template_1_Template, 3, 6, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2, changeDetection: 0 });
NzSpaceComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
NzSpaceComponent.propDecorators = {
    nzDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSplit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSpaceItemComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [NzSpaceItemLegacyComponent,] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [NzSpaceItemDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], NzSpaceComponent.prototype, "nzWrap", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSpaceComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](NzSpaceItemLegacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-space-item, [nz-space-item]',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    class: 'ant-space-item'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](NzSpaceItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzSpaceItem]'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](NzSpaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-space, [nz-space]',
                exportAs: 'NzSpace',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-content></ng-content>
    <ng-template ngFor let-item let-last="last" let-index="index" [ngForOf]="items">
      <div
        class="ant-space-item"
        [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-container [ngTemplateOutlet]="item"></ng-container>
      </div>
      <span
        *ngIf="nzSplit && !last"
        class="ant-space-split"
        [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-template [ngTemplateOutlet]="nzSplit" [ngTemplateOutletContext]="{ $implicit: index }"></ng-template>
      </span>
    </ng-template>
  `,
                host: {
                    class: 'ant-space',
                    '[class.ant-space-horizontal]': 'nzDirection === "horizontal"',
                    '[class.ant-space-vertical]': 'nzDirection === "vertical"',
                    '[class.ant-space-align-start]': 'mergedAlign === "start"',
                    '[class.ant-space-align-end]': 'mergedAlign === "end"',
                    '[class.ant-space-align-center]': 'mergedAlign === "center"',
                    '[class.ant-space-align-baseline]': 'mergedAlign === "baseline"',
                    '[style.flex-wrap]': 'nzWrap ? "wrap" : null'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { nzDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSplit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSpaceItemComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [NzSpaceItemLegacyComponent]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [NzSpaceItemDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSpaceModule {
}
NzSpaceModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: NzSpaceModule });
NzSpaceModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function NzSpaceModule_Factory(t) { return new (t || NzSpaceModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](NzSpaceModule, { declarations: function () { return [NzSpaceComponent, NzSpaceItemLegacyComponent, NzSpaceItemDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NzSpaceComponent, NzSpaceItemLegacyComponent, NzSpaceItemDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](NzSpaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [NzSpaceComponent, NzSpaceItemLegacyComponent, NzSpaceItemDirective],
                exports: [NzSpaceComponent, NzSpaceItemLegacyComponent, NzSpaceItemDirective],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-space.js.map

/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0.js.map