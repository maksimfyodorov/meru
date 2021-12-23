(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~offices-map-offices-map-module~reservation-create-reservation-cre~c1eb1ab2"],{

/***/ "1Cno":
/*!*******************************************************************!*\
  !*** ./src/app/composite/workplace-card/workplace-card.module.ts ***!
  \*******************************************************************/
/*! exports provided: WorkplaceCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceCardModule", function() { return WorkplaceCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _workplace_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workplace-card.component */ "5+Hy");
/* harmony import */ var _base_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/card/card.module */ "lW34");







class WorkplaceCardModule {
}
WorkplaceCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkplaceCardModule });
WorkplaceCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkplaceCardModule_Factory(t) { return new (t || WorkplaceCardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkplaceCardModule, { declarations: [_workplace_card_component__WEBPACK_IMPORTED_MODULE_4__["WorkplaceCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"]], exports: [_workplace_card_component__WEBPACK_IMPORTED_MODULE_4__["WorkplaceCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkplaceCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_workplace_card_component__WEBPACK_IMPORTED_MODULE_4__["WorkplaceCardComponent"]],
                exports: [_workplace_card_component__WEBPACK_IMPORTED_MODULE_4__["WorkplaceCardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5+Hy":
/*!**********************************************************************!*\
  !*** ./src/app/composite/workplace-card/workplace-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: WorkplaceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceCardComponent", function() { return WorkplaceCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _composite_workplace_card_workplace_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @composite/workplace-card/workplace-card.service */ "HaU+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/messages.service */ "mliB");
/* harmony import */ var _base_map_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/map/map.service */ "Bnie");
/* harmony import */ var _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/core/services/config.service */ "jtrZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _base_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../base/card/card.component */ "iYEa");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");

















function WorkplaceCardComponent_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card", 5);
} if (rf & 2) {
    const card_r4 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", card_r4.title)("image", card_r4.image)("width", card_r4.width)("descriptionList", card_r4.descriptionList)("tags", card_r4.tags)("calendarLink", ctx_r0.type === "appointment" ? ctx_r0.calendarLink : null);
} }
function WorkplaceCardComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.aplanaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function WorkplaceCardComponent_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-width", "135px")("height", "1px");
} }
function WorkplaceCardComponent_ng_template_4_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkplaceCardComponent_ng_template_4_ng_template_1_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.reservationPlace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.disabled);
} }
function WorkplaceCardComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkplaceCardComponent_ng_template_4_ng_template_1_div_0_Template, 3, 1, "div", 9);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.hideReserveBtn);
} }
function WorkplaceCardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkplaceCardComponent_ng_template_4_ng_container_0_Template, 2, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkplaceCardComponent_ng_template_4_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.hideReserveBtn)("ngIfElse", _r6);
} }
class WorkplaceCardComponent {
    constructor($service, $messages, $map, $config) {
        this.$service = $service;
        this.$messages = $messages;
        this.$map = $map;
        this.$config = $config;
        this._workplaceId$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.nornikAplana = false;
        this.readOnly = false;
        this.disabled = false;
        this.type = 'workplace';
        this.hideReserveBtn = false;
        this.showPermanentAssignment = false;
        this.reservation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.card$ = $service.default;
        this._watchPlaceId();
    }
    set workplace(value) {
        this._workplace = value;
    }
    get workplace() {
        return this._workplace;
    }
    set workplaceId(value) {
        this._workplaceId$.next(value);
    }
    get workplaceId() {
        return this._workplaceId$.getValue();
    }
    reservationPlace() {
        this.reservation.emit(this.workplaceId);
    }
    close() {
        this.$map.hidePopover$.next();
    }
    _watchPlaceId() {
        this.nornikAplana = this.$config.get('nornikAplana') === 'true';
        this.aplanaUrl = this.$config.get('aplanaUrl');
        this.subs = this._workplaceId$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((id) => Boolean(id)))
            .subscribe((id) => {
            switch (this.type) {
                case 'appointment':
                    this.card$ = this.$service.getRoomCard$(id);
                    break;
                case 'parking':
                    this.card$ = this.$service.getParkingLotCard$(id, this.showPermanentAssignment);
                    break;
                case 'workplace':
                default:
                    this.card$ = this.$service.getWorkplaceCard$(id, this.showPermanentAssignment);
            }
        });
    }
}
WorkplaceCardComponent.ɵfac = function WorkplaceCardComponent_Factory(t) { return new (t || WorkplaceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_composite_workplace_card_workplace_card_service__WEBPACK_IMPORTED_MODULE_2__["WorkplaceCardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_map_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"])); };
WorkplaceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkplaceCardComponent, selectors: [["app-workplace-card"]], inputs: { readOnly: "readOnly", disabled: "disabled", workplace: "workplace", type: "type", workplaceId: "workplaceId", hideReserveBtn: "hideReserveBtn", calendarLink: "calendarLink", showPermanentAssignment: "showPermanentAssignment" }, outputs: { reservation: "reservation" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_composite_workplace_card_workplace_card_service__WEBPACK_IMPORTED_MODULE_2__["WorkplaceCardService"]])], decls: 7, vars: 5, consts: [[1, "workspace-card"], [3, "title", "image", "width", "descriptionList", "tags", "calendarLink", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notAplanaReadOnly", ""], ["nz-icon", "", "nzType", "close", 1, "close-icon", 3, "click"], [3, "title", "image", "width", "descriptionList", "tags", "calendarLink"], [1, "buttons"], ["nz-button", "", "nzType", "primary", "target", "_blank", 3, "href"], ["withBtn", ""], ["class", "buttons", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function WorkplaceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkplaceCardComponent_app_card_1_Template, 1, 6, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WorkplaceCardComponent_ng_container_3_Template, 4, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WorkplaceCardComponent_ng_template_4_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkplaceCardComponent_Template_i_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx.card$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nornikAplana && ctx.readOnly)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], _base_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__["NzWaveDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n  cursor: pointer;\n  font-size: 20px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.workspace-card[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtwbGFjZS1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWhCRDtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFrQkY7QUFmQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFpQkY7QUFkQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQWdCRiIsImZpbGUiOiJ3b3JrcGxhY2UtY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJvdmVycmlkZVwiO1xuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiBAZ3JheS0xO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ud29ya3NwYWNlLWNhcmR7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscriptions"])()
], WorkplaceCardComponent.prototype, "subs", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorkplaceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-workplace-card',
                templateUrl: './workplace-card.component.html',
                styleUrls: ['./workplace-card.component.less'],
                providers: [_composite_workplace_card_workplace_card_service__WEBPACK_IMPORTED_MODULE_2__["WorkplaceCardService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _composite_workplace_card_workplace_card_service__WEBPACK_IMPORTED_MODULE_2__["WorkplaceCardService"] }, { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }, { type: _base_map_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"] }, { type: _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }]; }, { subs: [], readOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], workplace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], workplaceId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideReserveBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], calendarLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showPermanentAssignment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reservation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "6h1W":
/*!******************************************************************!*\
  !*** ./src/app/composite/workplace-card/workplace-card.utils.ts ***!
  \******************************************************************/
/*! exports provided: getWorkplaceDescriptionList, getParkDescriptionList, getRoomsDescriptionList, getTags, getWorkplaceGroupsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkplaceDescriptionList", function() { return getWorkplaceDescriptionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParkDescriptionList", function() { return getParkDescriptionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoomsDescriptionList", function() { return getRoomsDescriptionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkplaceGroupsNames", function() { return getWorkplaceGroupsNames; });
/* harmony import */ var _shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/common/utils/workplace.utils */ "udpc");

const getWorkplaceDescriptionList = (place, floor, workplaceGroupsNames, reservationData, labelIdPermanentAssignment) => {
    let result = [
        {
            name: 'Тип',
            value: Object(_shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_0__["getTypeName"])(place.type),
        },
        {
            name: 'Номер',
            value: place.uniqueCode,
        },
        {
            name: 'Помещение',
            value: floor.name,
        },
    ];
    if (reservationData && reservationData.label) {
        result.push({
            name: 'Забронировал',
            value: reservationData.label.name,
            link: `team/profiles/${reservationData.label.id}`,
        }, {
            name: 'Время',
            value: `${new Date(reservationData.dateTimeFrom).toLocaleString()} — ${new Date(reservationData.dateTimeTo).toLocaleString()}`,
        });
    }
    if (labelIdPermanentAssignment) {
        result.push({
            name: 'Закреплено',
            value: labelIdPermanentAssignment.name,
            link: `team/profiles/${labelIdPermanentAssignment.id}`,
        });
    }
    if (workplaceGroupsNames && workplaceGroupsNames.length > 0) {
        result.push({
            name: 'Группа РМ',
            value: workplaceGroupsNames.join(', '),
        });
    }
    return result;
};
const getParkDescriptionList = (place, floor, labelIdPermanentAssignment) => {
    let result = [
        {
            name: 'Тип',
            value: Object(_shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_0__["getTypeName"])(place.type),
        },
        {
            name: 'Номер',
            value: place.uniqueCode,
        },
        {
            name: 'Помещение',
            value: floor.name,
        },
    ];
    if (labelIdPermanentAssignment) {
        result.push({
            name: 'Закреплено',
            value: labelIdPermanentAssignment.name,
            link: `team/profiles/${labelIdPermanentAssignment.id}`,
        });
    }
    return result;
};
const getRoomsDescriptionList = (place, floor) => {
    return [
        {
            name: 'Количество мест',
            value: `${place.seatCount}`,
        },
        {
            name: 'Помещение',
            value: floor.name,
        },
    ];
};
const getTags = (ids, tags) => {
    return tags.filter((t) => ids.includes(t.id)).map((tag) => tag.name);
};
const getWorkplaceGroupsNames = (ids, workplaceGroups) => {
    return workplaceGroups
        .filter((wG) => ids.includes(wG.id))
        .map((wG) => wG.name);
};


/***/ }),

/***/ "HaU+":
/*!********************************************************************!*\
  !*** ./src/app/composite/workplace-card/workplace-card.service.ts ***!
  \********************************************************************/
/*! exports provided: WorkplaceCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceCardService", function() { return WorkplaceCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var _workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workplace-card.utils */ "6h1W");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/measurements.service */ "FsS2");










class WorkplaceCardService {
    constructor($dictionary, $reservationsApi, datePipe, $measurements) {
        this.$dictionary = $dictionary;
        this.$reservationsApi = $reservationsApi;
        this.datePipe = datePipe;
        this.$measurements = $measurements;
    }
    getWorkplaceCard$(id, showPermanentAssignment) {
        return this.$dictionary
            .getDictionaryItemByKey('workplaces', id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((w) => {
            const now = new Date();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                workplace: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(w),
                floor: this.$dictionary.getDictionaryItemByKey('floorMaps', w.floorMapId),
                labelIdPermanentAssignment: w.labelIdPermanentAssignment > 0 && showPermanentAssignment
                    ? this.$dictionary.getDictionaryItemByKey('labels', w.labelIdPermanentAssignment)
                    : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
                tags: this.$dictionary.getDictionary('tags'),
                workplaceGroups: this.$dictionary.getDictionary('workplaceGroups'),
                reservationData: this.$reservationsApi
                    .getWorkplaceReservations({
                    workplaceId: w.id,
                    dateTimeFrom: this._getApiDate(now),
                    dateTimeTo: this._getApiDate(now),
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((r) => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                        dateTimeFrom: r && r[0] ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(r[0].dateTimeFrom) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
                        dateTimeTo: r && r[0] ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(r[0].dateTimeTo) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
                        label: r && r[0]
                            ? this.$dictionary.getDictionaryItemByKey('labels', r[0].labelId)
                            : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
                    });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ workplace, floor, tags, workplaceGroups, reservationData, labelIdPermanentAssignment, }) => {
            return {
                title: workplace.name,
                width: '280px',
                image: _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WORKPLACE_CARD"],
                descriptionList: Object(_workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__["getWorkplaceDescriptionList"])(workplace, floor, Object(_workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__["getWorkplaceGroupsNames"])(workplace.workplaceGroups, workplaceGroups), reservationData, labelIdPermanentAssignment),
                tags: Object(_workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__["getTags"])(workplace.tags, tags),
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getParkingLotCard$(id, showPermanentAssignment) {
        return this.$dictionary
            .getDictionaryItemByKey('parkingLots', id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((w) => {
            w.type = 'PARKING_LOT';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                workplace: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(w),
                floor: this.$dictionary.getDictionaryItemByKey('floorMaps', w.floorMapId),
                tags: this.$dictionary.getDictionary('tags'),
                labelIdPermanentAssignment: w.labelIdPermanentAssignment > 0 && showPermanentAssignment
                    ? this.$dictionary.getDictionaryItemByKey('labels', w.labelIdPermanentAssignment)
                    : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ workplace, floor, tags, labelIdPermanentAssignment }) => {
            return {
                title: workplace.name,
                width: '280px',
                image: _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WORKPLACE_CARD"],
                descriptionList: Object(_workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__["getParkDescriptionList"])(workplace, floor, labelIdPermanentAssignment),
                tags: Object(_workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__["getTags"])(workplace.tags, tags),
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        // @Kholodov Проверить для парковки
    }
    getRoomCard$(id) {
        return this.$dictionary.getDictionaryItemByKey('rooms', id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((r) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                room: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(r),
                floor: this.$dictionary.getDictionaryItemByKey('floorMaps', r.floorMapId),
                tags: this.$dictionary.getDictionary('tags'),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ room, floor, tags }) => {
            return {
                title: room.name,
                width: '280px',
                image: _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WORKPLACE_CARD"],
                descriptionList: Object(_workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__["getRoomsDescriptionList"])(room, floor),
                tags: Object(_workplace_card_utils__WEBPACK_IMPORTED_MODULE_4__["getTags"])(room.tags, tags),
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    get default() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            title: 'Example',
            width: '280px',
            descriptionList: [],
            tags: [],
            image: _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WORKPLACE_CARD"],
        });
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
}
WorkplaceCardService.ɵfac = function WorkplaceCardService_Factory(t) { return new (t || WorkplaceCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"])); };
WorkplaceCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkplaceCardService, factory: WorkplaceCardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkplaceCardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }, { type: _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~offices-map-offices-map-module~reservation-create-reservation-cre~c1eb1ab2.js.map