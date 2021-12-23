(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-reservations-team-reservations-module"],{

/***/ "AQxr":
/*!***************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/view.page.resolver.ts ***!
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(`Бронь #${route.params.id}`);
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

/***/ "BKNL":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: TeamReservationsFilterWorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsFilterWorkplaceComponent", function() { return TeamReservationsFilterWorkplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.service */ "RwOz");
/* harmony import */ var _presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/reservations/components/list/list-filters/list-filter.utils */ "ZgfZ");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/filters/filter-checkbox/filter-checkbox.component */ "JPRT");
/* harmony import */ var _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @base/filters/filter-checkbox-group/filter-checkbox-group.component */ "FHVQ");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");
/* harmony import */ var _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../base/renderer/components/status/status.component */ "5YXH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/pipes/dictionary.pipe */ "Dz+d");



















function TeamReservationsFilterWorkplaceComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function TeamReservationsFilterWorkplaceComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 10);
} if (rf & 2) {
    const labelGroup_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", labelGroup_r10.name)("nzValue", labelGroup_r10.id);
} }
function TeamReservationsFilterWorkplaceComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function TeamReservationsFilterWorkplaceComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function TeamReservationsFilterWorkplaceComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function TeamReservationsFilterWorkplaceComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function TeamReservationsFilterWorkplaceComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, title_r11)), " ");
} }
function TeamReservationsFilterWorkplaceComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-status-renderer", 12);
} if (rf & 2) {
    const color_r12 = ctx.color;
    const label_r13 = ctx.label;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", color_r12)("value", label_r13)("needConvert", false);
} }
const _c0 = function () { return { $implicit: "UserGroup" }; };
const _c1 = function () { return { $implicit: "Users" }; };
const _c2 = function () { return []; };
const _c3 = function () { return { $implicit: "Buildings/Floors" }; };
const _c4 = function () { return { $implicit: "Statuses" }; };
const _c5 = function () { return { $implicit: "Period" }; };
const _c6 = function (a0, a1) { return [a0, a1]; };
class TeamReservationsFilterWorkplaceComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_3__["FilterComponent"] {
    constructor(injector, $service) {
        super(injector);
        this.injector = injector;
        this.$service = $service;
        this.timePickerOptions = _presentation_reservations_components_list_list_filters_list_filter_utils__WEBPACK_IMPORTED_MODULE_5__["TIME_PICKER_OPTIONS"];
        this.dateFormat = this.$service.dateFormat$;
    }
    updateDateTime(dateTime) {
        this.dateTimeFromControl.setValue(dateTime[0]);
        this.dateTimeToControl.setValue(dateTime[1]);
    }
    ngOnInit() {
        this.$service.formGroup = this.formGroup;
        this.$service.init();
        this.assignControls();
        this.statuses = this.$service.statuses$;
        this.usersOptions = this.$service.usersOptions$;
        this.labelGroups = this.$service.labelGroups$;
        this.floorMapsGroups = this.$service.floorMapsGroups$;
    }
    ngOnDestroy() {
    }
}
TeamReservationsFilterWorkplaceComponent.ɵfac = function TeamReservationsFilterWorkplaceComponent_Factory(t) { return new (t || TeamReservationsFilterWorkplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsFilterWorkplaceService"])); };
TeamReservationsFilterWorkplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamReservationsFilterWorkplaceComponent, selectors: [["app-team-reservations-filter-workplace"], ["", "app-team-reservations-filters-workplace", ""]], hostVars: 2, hostBindings: function TeamReservationsFilterWorkplaceComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("team-reservations-filter-workplace", true);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsFilterWorkplaceService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 37, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formControl"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "formControl", "options", "maxHeight", "allowSearch", "disabled", "allowEmpty", "allowSelectAll"], [3, "formControl", "groups", "maxHeight"], [1, "app-reservations-filter-item"], [3, "formControl", "options", "label"], [3, "ngModel", "layout", "format", "ngModelChange"], ["titleTpl", ""], ["filterStatusTpl", ""], [3, "nzLabel", "nzValue"], [1, "app-reservations-filter-item__title"], [3, "color", "value", "needConvert"]], template: function TeamReservationsFilterWorkplaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TeamReservationsFilterWorkplaceComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TeamReservationsFilterWorkplaceComponent_nz_option_4_Template, 1, 2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TeamReservationsFilterWorkplaceComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-filter-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TeamReservationsFilterWorkplaceComponent_ng_container_10_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-filter-checkbox-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TeamReservationsFilterWorkplaceComponent_ng_container_14_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-filter-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TeamReservationsFilterWorkplaceComponent_ng_container_18_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-filter-date", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TeamReservationsFilterWorkplaceComponent_Template_app_filter_date_ngModelChange_19_listener($event) { return ctx.updateDateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TeamReservationsFilterWorkplaceComponent_ng_template_20_Template, 4, 5, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TeamReservationsFilterWorkplaceComponent_ng_template_22_Template, 1, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.labelGroupIdControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.labelGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.labelIdsControl)("options", ctx.usersOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c2))("maxHeight", "320px")("allowSearch", true)("disabled", (ctx.labelGroupIdControl == null ? null : ctx.labelGroupIdControl.value) === null)("allowEmpty", false)("allowSelectAll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.floorMapIdsControl)("groups", ctx.floorMapsGroups)("maxHeight", "320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.statusesControl)("options", ctx.statuses)("label", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](34, _c6, ctx.dateTimeFromControl.value, ctx.dateTimeToControl.value))("layout", "vertical")("format", ctx.dateFormat);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["FilterCheckboxComponent"], _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_12__["FilterCheckboxGroupComponent"], _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_13__["FilterDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzOptionComponent"], _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_14__["StatusRendererComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_16__["DictionaryPipe"]], styles: ["[_nghost-%COMP%]     perfect-scrollbar {\n  height: 100%;\n}\n[_nghost-%COMP%]     .ant-picker {\n  width: 100%;\n}\n.team-reservations-filter-workplace-status[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tcmVzZXJ2YXRpb25zLWZpbHRlci13b3JrcGxhY2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxZQUFBO0FBRko7QUFBQTtFQU1JLFdBQUE7QUFISjtBQVFFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU5KIiwiZmlsZSI6InRlYW0tcmVzZXJ2YXRpb25zLWZpbHRlci13b3JrcGxhY2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdGVhbS1yZXNlcnZhdGlvbnMtZmlsdGVyLXdvcmtwbGFjZS1wcmVmaXgtY2xzOiB0ZWFtLXJlc2VydmF0aW9ucy1maWx0ZXItd29ya3BsYWNlO1xuXG46aG9zdCB7XG4gIDo6bmctZGVlcCBwZXJmZWN0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5hbnQtcGlja2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uQHt0ZWFtLXJlc2VydmF0aW9ucy1maWx0ZXItd29ya3BsYWNlLXByZWZpeC1jbHN9IHtcbiAgJi1zdGF0dXMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgJl9faW5kaWNhdG9yIHtcblxuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscribe"])()
], TeamReservationsFilterWorkplaceComponent.prototype, "statuses", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscribe"])()
], TeamReservationsFilterWorkplaceComponent.prototype, "floorMapsGroups", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscribe"])()
], TeamReservationsFilterWorkplaceComponent.prototype, "labelGroups", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscribe"])()
], TeamReservationsFilterWorkplaceComponent.prototype, "dateFormat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscribe"])()
], TeamReservationsFilterWorkplaceComponent.prototype, "usersOptions", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamReservationsFilterWorkplaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-team-reservations-filter-workplace, [app-team-reservations-filters-workplace]',
                templateUrl: './team-reservations-filter-workplace.component.html',
                styleUrls: ['./team-reservations-filter-workplace.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.team-reservations-filter-workplace]': `true`
                },
                providers: [_presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsFilterWorkplaceService"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsFilterWorkplaceService"] }]; }, { statuses: [], floorMapsGroups: [], labelGroups: [], dateFormat: [], usersOptions: [] }); })();


/***/ }),

/***/ "FLn2":
/*!***************************************************************************!*\
  !*** ./src/app/presentation/reservations/enums/reservationStatus.enum.ts ***!
  \***************************************************************************/
/*! exports provided: reservationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservationStatus", function() { return reservationStatus; });
var reservationStatus;
(function (reservationStatus) {
    reservationStatus["new"] = "\u0421\u043E\u0437\u0434\u0430\u043D\u0430";
    reservationStatus["approved"] = "\u041E\u0434\u043E\u0431\u0440\u0435\u043D\u0430";
    reservationStatus["confirmed"] = "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430";
    reservationStatus["closed"] = "\u0417\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u0430";
    reservationStatus["canceled"] = "\u041E\u0442\u043C\u0435\u043D\u0435\u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C";
    reservationStatus["denied"] = "\u041E\u0442\u043A\u0430\u0437\u0430\u043D\u043E \u0432 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u0438";
    reservationStatus["refused"] = "\u041D\u0435 \u0431\u044B\u043B\u0430 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0430 \u0438\u043B\u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430";
    reservationStatus["undefined"] = "\u041D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u043D\u043E"; // если значение не определено
})(reservationStatus || (reservationStatus = {}));


/***/ }),

/***/ "H3yW":
/*!************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations.component.ts ***!
  \************************************************************************************/
/*! exports provided: TeamReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsComponent", function() { return TeamReservationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations.constants */ "yLmg");
/* harmony import */ var _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/animations.util */ "meMk");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations.service */ "S86g");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _core_decorators_throttle_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/decorators/throttle.decorator */ "SrZ1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/layout/extra-title-tpl/extra-title-tpl.component */ "VdFp");
/* harmony import */ var _base_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../base/toolbar/toolbar.component */ "pLYm");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _base_result_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../base/result/result.component */ "0tdr");
/* harmony import */ var _base_list_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../base/list/list.component */ "N4Bo");
/* harmony import */ var _team_reservations_filters_team_reservations_filters_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./team-reservations-filters/team-reservations-filters.component */ "myrF");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../core/pipes/dictionary.pipe */ "Dz+d");































function TeamReservationsComponent_app_result_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-result", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamReservationsComponent_app_result_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.reset(); });
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
const _c0 = function (a0, a1) { return { _expanded: a0, _ready: a1 }; };
const _c1 = function (a0, a1) { return { _collapsed: a0, _ready: a1 }; };
function TeamReservationsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowSelect", function TeamReservationsComponent_ng_template_2_Template_div_rowSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.selectRow($event); })("rowsSelect", function TeamReservationsComponent_ng_template_2_Template_div_rowsSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.selectRows($event); })("pagingChange", function TeamReservationsComponent_ng_template_2_Template_div_pagingChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.changePaging($event); })("sortChange", function TeamReservationsComponent_ng_template_2_Template_div_sortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.changeSort($event); })("actionCall", function TeamReservationsComponent_ng_template_2_Template_div_actionCall_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.callAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valuesChange", function TeamReservationsComponent_ng_template_2_Template_div_valuesChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.changeFilters($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c0, !ctx_r2.filtersVisible, ctx_r2.ready));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r2.meta == null ? null : ctx_r2.meta.columns)("paging", ctx_r2.queryParams == null ? null : ctx_r2.queryParams.paging)("sort", ctx_r2.queryParams == null ? null : ctx_r2.queryParams.sort)("rows", ctx_r2.data)("total", ctx_r2.data == null ? null : ctx_r2.data.length)("loading", ctx_r2.loading)("multiSelectRows", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c1, !ctx_r2.filtersVisible, ctx_r2.ready));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", !ctx_r2.ready)("type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 12, ctx_r2.type$))("values", ctx_r2.queryParams == null ? null : ctx_r2.queryParams.filters);
} }
function TeamReservationsComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamReservationsComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.toggleFiltersVisible(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
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
function TeamReservationsComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_success", result_r19.isOk)("_fail", !result_r19.isOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", result_r19.isOk ? "check-circle" : "close-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", result_r19.message, " ");
} }
const _c2 = function () { return []; };
const _c3 = function (a0) { return { items: a0 }; };
const _c4 = function () { return { suppressScrollX: true }; };
class TeamReservationsComponent {
    constructor($service, _cdr, _modal) {
        this.$service = $service;
        this._cdr = _cdr;
        this._modal = _modal;
        this.menu = _presentation_team_team_reservations_team_reservations_constants__WEBPACK_IMPORTED_MODULE_2__["TEAM_RESERVATIONS_MENU"];
        this.type$ = this.$service.type$;
        this.showFiltersVisibleButton = false;
        this.user = this.$service.user;
        this.selectedRows = [];
        this.massActionResults = [];
        this.filtersVisible = true;
        this.meta = null;
        this.data = [];
        this.error = this.$service.error$;
        this.loading = this.$service.loading$;
    }
    windowResize(_$event) {
        this.showFiltersVisibleButton = this.$service.showFiltersVisibleButton;
    }
    set list({ meta, data }) {
        this.data = data;
        if (this.meta !== meta) {
            this.meta = meta;
        }
    }
    reset() {
        this.$service.reset();
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
    callAction(action) {
        this.$service.callAction(action);
    }
    selectRow(row) {
        this.$service.selectRow(row);
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
    toggleFiltersVisible() {
        this.filtersVisible = !this.filtersVisible;
        this.dispatchWindowResize();
    }
    ngOnInit() {
        this.queryParams = this.$service.queryParams$;
        this.list = this.$service.list$;
        this.ready = this.$service.ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((ready) => {
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
TeamReservationsComponent.ɵfac = function TeamReservationsComponent_Factory(t) { return new (t || TeamReservationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_team_team_reservations_team_reservations_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalService"])); };
TeamReservationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamReservationsComponent, selectors: [["app-team-reservations"]], hostVars: 2, hostBindings: function TeamReservationsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function TeamReservationsComponent_resize_HostBindingHandler($event) { return ctx.windowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("team-reservations", true);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_team_team_reservations_team_reservations_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsService"]])], decls: 25, vars: 34, consts: [[1, "team-reservations"], ["class", "team-reservations__error", 3, "status", "title", "subtitle", "message", 4, "ngIf", "ngIfElse"], ["reservationsListTpl", ""], [3, "actions", "data", "skeletonButtonsCount", "actionCall"], ["contentTpl", ""], ["nz-button", "", "nz-dropdown", "", 3, "nzDropdownMenu", "nzType", "nz-tooltip"], ["nz-icon", "", 3, "nzType"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "file-excel", "nzTheme", "outline"], ["nz-button", "", 3, "nzType", "click", 4, "ngIf"], [3, "nzVisible", "nzTitle", "nzOkText", "nzCancelText", "nzMaskClosable", "nzClassName", "nzOnCancel"], [1, "mass-action-results__list", 3, "config"], ["nz-typography", "", "class", "mass-action-results__item", 4, "ngFor", "ngForOf"], [1, "team-reservations__error", 3, "status", "title", "subtitle", "message"], ["nz-button", "", 3, "nzGhost", "nzType", "nzSize", "click"], [1, "team-reservations__workspace", 3, "ngClass"], ["app-list", "", 3, "columns", "paging", "sort", "rows", "total", "loading", "multiSelectRows", "rowSelect", "rowsSelect", "pagingChange", "sortChange", "actionCall"], [1, "team-reservations__filters-wrapper", 3, "ngClass"], ["app-team-reservations-filters", "", 1, "team-reservations__filters", 3, "loading", "type", "values", "valuesChange"], ["nz-button", "", 3, "nzType", "click"], ["nz-typography", "", 1, "mass-action-results__item"], ["nz-icon", "", 1, "mass-action-results__icon", 3, "nzType"]], template: function TeamReservationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TeamReservationsComponent_app_result_1_Template, 8, 19, "app-result", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TeamReservationsComponent_ng_template_2_Template, 5, 20, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-extra-title-tpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-toolbar", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("actionCall", function TeamReservationsComponent_Template_app_toolbar_actionCall_5_listener($event) { return ctx.callMassAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-dropdown-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamReservationsComponent_Template_li_click_14_listener() { return ctx.exportxls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "XLS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TeamReservationsComponent_button_17_Template, 5, 7, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-modal", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnCancel", function TeamReservationsComponent_Template_nz_modal_nzOnCancel_18_listener() { return ctx.massActionResults = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "perfect-scrollbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TeamReservationsComponent_p_24_Template, 3, 6, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", (ctx.meta == null ? null : ctx.meta.actions) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c2))("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c3, ctx.selectedRows))("skeletonButtonsCount", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r4)("nzType", "primary")("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 20, "Export")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFiltersVisibleButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", !!ctx.massActionResults.length)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 24, "ResultOfAction")))("nzOkText", null)("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 28, "Close")))("nzMaskClosable", true)("nzClassName", "mass-action-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.massActionResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_13__["ExtraTitleTplComponent"], _base_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["ToolbarComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__["NzMenuItemDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _base_result_result_component__WEBPACK_IMPORTED_MODULE_23__["ResultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _base_list_list_component__WEBPACK_IMPORTED_MODULE_24__["ListComponent"], _team_reservations_filters_team_reservations_filters_component__WEBPACK_IMPORTED_MODULE_25__["TeamReservationsFiltersComponent"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_26__["NzTypographyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_28__["DictionaryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%] {\n  background-color: #fff;\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]     nz-spin {\n  width: 100%;\n}\n[_nghost-%COMP%]   .team-reservations[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: row;\n  justify-content: stretch;\n  width: 100%;\n}\n[_nghost-%COMP%]   .team-reservations__workspace[_ngcontent-%COMP%] {\n  width: calc(100% - 280px);\n}\n[_nghost-%COMP%]   .team-reservations__workspace._expanded[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .team-reservations__workspace._ready[_ngcontent-%COMP%] {\n  transition: flex 0.5s, width 0.5s;\n}\n[_nghost-%COMP%]   .team-reservations__filters[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 280px;\n}\n[_nghost-%COMP%]   .team-reservations__filters-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-left: 1px solid #eee;\n  height: 100%;\n  flex: 0 0 280px;\n  overflow: hidden;\n  padding-bottom: 52px;\n}\n[_nghost-%COMP%]   .team-reservations__filters-wrapper._collapsed[_ngcontent-%COMP%] {\n  flex: 0 0 0;\n}\n[_nghost-%COMP%]   .team-reservations__filters-wrapper._ready[_ngcontent-%COMP%] {\n  transition: flex 0.5s;\n}\n[_nghost-%COMP%]   .team-reservations__error[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n}\n@media screen and (min-width: 1600px) {\n  [_nghost-%COMP%]   .team-reservations__filters[_ngcontent-%COMP%] {\n    width: 280px !important;\n  }\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]   .team-reservations__filters[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  [_nghost-%COMP%]   .team-reservations__filters-wrapper[_ngcontent-%COMP%] {\n    flex: 0 0 360px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQVpEO0VBQ0UsWUFBQTtBQWNGO0FBWEE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBYUY7QUFoQkE7RUFNSSxXQUFBO0FBYUo7QUFuQkE7RUFVSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBWUo7QUFWSTtFQUNFLHlCQUFBO0FBWU47QUFWTTtFQUNFLFdBQUE7QUFZUjtBQVRNO0VBQ0UsaUNBQUE7QUFXUjtBQVBJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFTTjtBQVBNO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVNSO0FBUFE7RUFDRSxXQUFBO0FBU1Y7QUFOUTtFQUNFLHFCQUFBO0FBUVY7QUFISTtFQUNFLGNBQUE7QUFLTjtBQUZJO0VBQ0U7SUFDRSx1QkFBQTtFQUlOO0FBQ0Y7QUFESTtFQUNFO0lBQ0UsWUFBQTtFQUdOO0VBRE07SUFDRSxlQUFBO0VBR1I7QUFDRiIsImZpbGUiOiJ0ZWFtLXJlc2VydmF0aW9ucy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnMubGVzc1wiO1xuXG5AZmlsdGVycy13aWR0aDogMjgwcHg7XG5AZmlsdGVycy13aXRoLW1vYmlsZTogMzYwcHg7XG5AdGVhbS1yZXNlcnZhdGlvbnMtcHJlZml4LWNsczogdGVhbS1yZXNlcnZhdGlvbnM7XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgOjpuZy1kZWVwIG56LXNwaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLkB7dGVhbS1yZXNlcnZhdGlvbnMtcHJlZml4LWNsc30ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fd29ya3NwYWNlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSBAZmlsdGVycy13aWR0aCk7XG5cbiAgICAgICYuX2V4cGFuZGVkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICYuX3JlYWR5IHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmxleCAuNXMsIHdpZHRoIC41cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19maWx0ZXJzIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiBAZmlsdGVycy13aWR0aDtcblxuICAgICAgJi13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsZXg6IDAgMCBAZmlsdGVycy13aWR0aDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUycHg7XG5cbiAgICAgICAgJi5fY29sbGFwc2VkIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuX3JlYWR5IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmbGV4IC41cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2Vycm9yIHtcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgICAgJl9fZmlsdGVycyB7XG4gICAgICAgIHdpZHRoOiBAZmlsdGVycy13aWR0aCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICZfX2ZpbHRlcnMge1xuICAgICAgICB3aWR0aDogQGZpbHRlcnMtd2l0aC1tb2JpbGU7XG5cbiAgICAgICAgJi13cmFwcGVyIHtcbiAgICAgICAgICBmbGV4OiAwIDAgQGZpbHRlcnMtd2l0aC1tb2JpbGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_3__["fadeInOutAnimation"] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamReservationsComponent.prototype, "massActionResults", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamReservationsComponent.prototype, "filtersVisible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamReservationsComponent.prototype, "meta", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_5__["MarkForCheck"]
], TeamReservationsComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamReservationsComponent.prototype, "queryParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamReservationsComponent.prototype, "error", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamReservationsComponent.prototype, "ready", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamReservationsComponent.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_throttle_decorator__WEBPACK_IMPORTED_MODULE_7__["Throttle"])(250)
], TeamReservationsComponent.prototype, "windowResize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_6__["Subscribe"])()
], TeamReservationsComponent.prototype, "list", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_9__["Debounce"])(500)
], TeamReservationsComponent.prototype, "dispatchWindowResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamReservationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-team-reservations',
                templateUrl: './team-reservations.component.html',
                styleUrls: ['./team-reservations.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.team-reservations]': `true`,
                },
                animations: _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_3__["fadeInOutAnimation"],
                providers: [_presentation_team_team_reservations_team_reservations_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsService"]],
            }]
    }], function () { return [{ type: _presentation_team_team_reservations_team_reservations_service__WEBPACK_IMPORTED_MODULE_4__["TeamReservationsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalService"] }]; }, { massActionResults: [], filtersVisible: [], meta: [], data: [], queryParams: [], error: [], ready: [], loading: [], windowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }], list: [], dispatchWindowResize: [] }); })();


/***/ }),

/***/ "Hj3a":
/*!****************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/view/view.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.service */ "UIsf");
/* harmony import */ var _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout-shared.service */ "ndgU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/layout/extra-title-tpl/extra-title-tpl.component */ "VdFp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_reservation_view_reservation_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../base/reservation-view/reservation-view.component */ "7f2s");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
















function ViewComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Approve by manager"), " ");
} }
function ViewComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Approve"), " ");
} }
function ViewComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Complete"), " ");
} }
function ViewComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Deny"), " ");
} }
function ViewComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Delete"), " ");
} }
const _c0 = function () { return ["NEW"]; };
const _c1 = function () { return ["APPROVED"]; };
const _c2 = function () { return ["CONFIRMED"]; };
class ViewComponent {
    constructor(_service, _layout, _router, cdr, _api, _modal, _translate, _loader) {
        this._service = _service;
        this._layout = _layout;
        this._router = _router;
        this.cdr = cdr;
        this._api = _api;
        this._modal = _modal;
        this._translate = _translate;
        this._loader = _loader;
    }
    ngOnInit() {
        this._loader.contentLoading$.next(true);
        this._service.reservation$.subscribe(([reservation, workplace]) => {
            if (reservation) {
                this.reservation = reservation;
                this.workplace = workplace;
                this.cdr.markForCheck();
            }
            else {
                this._router.navigate(['reservations', 'workplace']);
            }
            this._loader.contentLoading$.next(false);
        });
    }
    checkStatus(statuses) {
        return this.reservation && statuses.includes(this.reservation.status);
    }
    clickAction(question, action) {
        this._modal.confirm({
            nzTitle: this._translate.transform(question),
            nzOnOk: () => {
                action();
            }
        });
    }
    approve() {
        this.clickAction('Do you want to approve reservation?', () => {
            this._loader.contentLoading$.next(true);
            this._api.approveWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
                this._service.reload();
                this._loader.contentLoading$.next(false);
            });
        });
    }
    confirm() {
        this.clickAction('Do you want to approve reservation?', () => {
            this._loader.contentLoading$.next(true);
            this._api.confirmWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
                this._service.reload();
                this._loader.contentLoading$.next(false);
            });
        });
    }
    complete() {
        this.clickAction('Do you want to complete reservation?', () => {
            this._loader.contentLoading$.next(true);
            this._api.cancelWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
                this._service.reload();
                this._loader.contentLoading$.next(false);
            });
        });
    }
    delete() {
        this.clickAction('Do you want to delete reservation?', () => {
            this._loader.contentLoading$.next(true);
            this._api.denyWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
                this._service.reload();
                this._loader.contentLoading$.next(false);
            });
        });
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_view_service__WEBPACK_IMPORTED_MODULE_1__["ViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_2__["LayoutSharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_7__["GlobalLoaderService"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-reservations-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_view_service__WEBPACK_IMPORTED_MODULE_1__["ViewService"]])], decls: 8, vars: 14, consts: [[1, "left"], ["nz-button", "", "nzType", "primary", "class", "btn", 3, "click", 4, "ngIf"], [3, "reservation", "showLabelName", "workplace", "placeType"], ["nz-button", "", "nzType", "primary", 1, "btn", 3, "click"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-extra-title-tpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewComponent_button_2_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewComponent_button_3_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewComponent_button_4_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewComponent_button_5_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewComponent_button_6_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-reservation-view", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkStatus(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkStatus(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkStatus(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkStatus(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkStatus(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reservation", ctx.reservation)("showLabelName", true)("workplace", ctx.workplace)("placeType", "workplace");
    } }, directives: [_shared_layout_extra_title_tpl_extra_title_tpl_component__WEBPACK_IMPORTED_MODULE_8__["ExtraTitleTplComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _base_reservation_view_reservation_view_component__WEBPACK_IMPORTED_MODULE_10__["ReservationViewComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reservations-view',
                templateUrl: './view.component.html',
                styleUrls: ['./view.component.less'],
                providers: [_view_service__WEBPACK_IMPORTED_MODULE_1__["ViewService"]]
            }]
    }], function () { return [{ type: _view_service__WEBPACK_IMPORTED_MODULE_1__["ViewService"] }, { type: _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_2__["LayoutSharedService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__["ReservationsApiService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_7__["GlobalLoaderService"] }]; }, null); })();


/***/ }),

/***/ "JEtd":
/*!*****************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeamReservationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsRoutingModule", function() { return TeamReservationsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations.component */ "H3yW");
/* harmony import */ var _presentation_team_team_reservations_view_page_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/team/team-reservations/view.page.resolver */ "AQxr");
/* harmony import */ var _presentation_team_team_reservations_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/team/team-reservations/view/view.component */ "Hj3a");







const routes = [
    {
        path: 'view/:id',
        component: _presentation_team_team_reservations_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
        data: {
            showBackBtn: true,
        },
        resolve: {
            title: _presentation_team_team_reservations_view_page_resolver__WEBPACK_IMPORTED_MODULE_3__["ViewPageResolver"]
        }
    },
    {
        path: '',
        pathMatch: 'full',
        component: _presentation_team_team_reservations_team_reservations_component__WEBPACK_IMPORTED_MODULE_2__["TeamReservationsComponent"],
        data: {
            title: 'Бронирования рабочих мест сотрудников'
        },
    }
];
class TeamReservationsRoutingModule {
}
TeamReservationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TeamReservationsRoutingModule });
TeamReservationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TeamReservationsRoutingModule_Factory(t) { return new (t || TeamReservationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TeamReservationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamReservationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KuhW":
/*!******************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations-filters/team-reservations-filters.utils.ts ***!
  \******************************************************************************************************************/
/*! exports provided: getTeamReservationsFilterFieldsByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamReservationsFilterFieldsByType", function() { return getTeamReservationsFilterFieldsByType; });
const teamReservationsFilterFields = {
    appointment: {
        floorMapIds: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    locker: {
        floorMapIds: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    parking: {
        floorMapIds: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    },
    workplace: {
        labelGroupId: null,
        labelIds: [],
        floorMapIds: [],
        statuses: [],
        dateTimeFrom: null,
        dateTimeTo: null
    }
};
function getTeamReservationsFilterFieldsByType(type) {
    return teamReservationsFilterFields[type] || null;
}


/***/ }),

/***/ "Ou3z":
/*!*********************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TeamReservationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsModule", function() { return TeamReservationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/reservation-view/reservation-view.module */ "J3gr");
/* harmony import */ var _presentation_team_team_reservations_view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-reservations/view/view.component */ "Hj3a");
/* harmony import */ var _team_reservations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-reservations.component */ "H3yW");
/* harmony import */ var _base_result_result_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/result/result.module */ "CrH8");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _base_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/list/list.module */ "/K2S");
/* harmony import */ var _team_reservations_filters_team_reservations_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team-reservations-filters/team-reservations-filters.component */ "myrF");
/* harmony import */ var _team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.component */ "BKNL");
/* harmony import */ var _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @base/filters/filters.module */ "9jWK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/renderer/renderer.module */ "R3cO");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations-routing.module */ "JEtd");
/* harmony import */ var _core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/dictionary.service */ "8OyG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_dictionary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations.dictionary */ "Zhos");
/* harmony import */ var _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/layout/extra-title-tpl/extra-title-tpl.module */ "qzeD");
/* harmony import */ var _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @base/toolbar/toolbar.module */ "TC/b");




















class TeamReservationsModule {
    constructor() {
        _core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_13__["DictionaryService"].set(_presentation_team_team_reservations_team_reservations_dictionary__WEBPACK_IMPORTED_MODULE_15__["TeamReservationsDictionary"]);
    }
}
TeamReservationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamReservationsModule });
TeamReservationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamReservationsModule_Factory(t) { return new (t || TeamReservationsModule)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forChild(),
            _base_result_result_module__WEBPACK_IMPORTED_MODULE_4__["ResultModule"],
            _base_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
            _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_9__["FiltersModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_11__["RendererModule"],
            _presentation_team_team_reservations_team_reservations_routing_module__WEBPACK_IMPORTED_MODULE_12__["TeamReservationsRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
            _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_1__["ReservationViewModule"],
            _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_16__["ExtraTitleTplModule"],
            _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_17__["ToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamReservationsModule, { declarations: [_team_reservations_component__WEBPACK_IMPORTED_MODULE_3__["TeamReservationsComponent"],
        _team_reservations_filters_team_reservations_filters_component__WEBPACK_IMPORTED_MODULE_7__["TeamReservationsFiltersComponent"],
        _team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_component__WEBPACK_IMPORTED_MODULE_8__["TeamReservationsFilterWorkplaceComponent"],
        _presentation_team_team_reservations_view_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _base_result_result_module__WEBPACK_IMPORTED_MODULE_4__["ResultModule"],
        _base_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
        _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_9__["FiltersModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_11__["RendererModule"],
        _presentation_team_team_reservations_team_reservations_routing_module__WEBPACK_IMPORTED_MODULE_12__["TeamReservationsRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
        _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_1__["ReservationViewModule"],
        _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_16__["ExtraTitleTplModule"],
        _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_17__["ToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamReservationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _team_reservations_component__WEBPACK_IMPORTED_MODULE_3__["TeamReservationsComponent"],
                    _team_reservations_filters_team_reservations_filters_component__WEBPACK_IMPORTED_MODULE_7__["TeamReservationsFiltersComponent"],
                    _team_reservations_filters_team_reservations_filters_workplace_team_reservations_filter_workplace_component__WEBPACK_IMPORTED_MODULE_8__["TeamReservationsFilterWorkplaceComponent"],
                    _presentation_team_team_reservations_view_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]
                ],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forChild(),
                    _base_result_result_module__WEBPACK_IMPORTED_MODULE_4__["ResultModule"],
                    _base_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
                    _base_filters_filters_module__WEBPACK_IMPORTED_MODULE_9__["FiltersModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _base_renderer_renderer_module__WEBPACK_IMPORTED_MODULE_11__["RendererModule"],
                    _presentation_team_team_reservations_team_reservations_routing_module__WEBPACK_IMPORTED_MODULE_12__["TeamReservationsRoutingModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                    _base_reservation_view_reservation_view_module__WEBPACK_IMPORTED_MODULE_1__["ReservationViewModule"],
                    _shared_layout_extra_title_tpl_extra_title_tpl_module__WEBPACK_IMPORTED_MODULE_16__["ExtraTitleTplModule"],
                    _base_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_17__["ToolbarModule"]
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RwOz":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.service.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: TeamReservationsFilterWorkplaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsFilterWorkplaceService", function() { return TeamReservationsFilterWorkplaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filters/filter.service */ "UCJT");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _team_reservations_filter_workplace_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-reservations-filter-workplace.utils */ "odLJ");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");
/* harmony import */ var _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");










class TeamReservationsFilterWorkplaceService extends _base_filters_filters_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"] {
    constructor(injector, $dictionaries, $userOffices, $statuses, $measurements, $user) {
        super(injector);
        this.injector = injector;
        this.$dictionaries = $dictionaries;
        this.$userOffices = $userOffices;
        this.$statuses = $statuses;
        this.$measurements = $measurements;
        this.$user = $user;
    }
    get usersOptions$() {
        return this._usersOptions$;
    }
    get dateFormat$() {
        return this.$measurements.getMeasurementByName$('shortDateTime');
    }
    get statuses$() {
        return this.$statuses.statuses$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((statuses) => Object(_team_reservations_filter_workplace_utils__WEBPACK_IMPORTED_MODULE_3__["mapStatusesOptions"])(statuses, this.getFormControlByName('statuses'))));
    }
    get floorMapsGroups$() {
        return this.buildings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(buildings => this.$userOffices.getMyOrderedFloors().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((floorMaps) => Object(_team_reservations_filter_workplace_utils__WEBPACK_IMPORTED_MODULE_3__["mapFloorMapsOptions"])(floorMaps, buildings, this.getFormControlByName('floorMapIds'))))));
    }
    get labelGroups$() {
        const user = this.$user.info;
        const labelGroupIdControl = this.getFormControlByName('labelGroupId');
        return this.$dictionaries.getDictionary('labelGroups').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(labelGroups => labelGroups.filter(({ id }) => user.labelGroups.includes(id))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((labelGroups) => {
            var _a;
            if (labelGroupIdControl.value === null) {
                labelGroupIdControl.setValue((_a = labelGroups[0]) === null || _a === void 0 ? void 0 : _a.id);
            }
        }));
    }
    get buildings$() {
        return this.$userOffices.getMyOrderedBuildings();
    }
    init() {
        const labelIdsControl = this.getFormControlByName('labelIds');
        this._usersOptions$ = this._formGroup.get('labelGroupId').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((labelGroupId) => this.$dictionaries.getDictionary('labels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(labels => labels.filter(user => user.labelGroups.includes(labelGroupId))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(labels => Object(_team_reservations_filter_workplace_utils__WEBPACK_IMPORTED_MODULE_3__["mapUserOptions"])(labels, this._formGroup.get('labelIds'))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((labels) => {
            if (labelIdsControl.value.length)
                return;
            labelIdsControl.setValue(labels.map(({ id }) => id));
        }))));
    }
}
TeamReservationsFilterWorkplaceService.ɵfac = function TeamReservationsFilterWorkplaceService_Factory(t) { return new (t || TeamReservationsFilterWorkplaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__["UserOfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
TeamReservationsFilterWorkplaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamReservationsFilterWorkplaceService, factory: TeamReservationsFilterWorkplaceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamReservationsFilterWorkplaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__["UserOfficesService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }]; }, null); })();


/***/ }),

/***/ "S86g":
/*!**********************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations.service.ts ***!
  \**********************************************************************************/
/*! exports provided: TeamReservationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsService", function() { return TeamReservationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/base/base.service */ "fGTt");
/* harmony import */ var _shared_common_utils_query_params_builder_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/utils/query-params-builder.util */ "0NPV");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/common/utils/reservations.util */ "xK1C");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/decorators/complete.decorator */ "ALpe");
/* harmony import */ var _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/models/app-errorl.model */ "zewn");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations.utils */ "pxHj");
/* harmony import */ var _base_action_action_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/action/action.utils */ "rkgY");
/* harmony import */ var _presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/reservations/components/list/list.utils */ "emXd");
/* harmony import */ var _shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/messages/services/reservations-messages.service */ "xNMc");
/* harmony import */ var _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/http/services/meta-api.service */ "s4sJ");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/services/message.service */ "acRR");





















class TeamReservationsService extends _shared_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
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
        this._queryParamsBuilder = _shared_common_utils_query_params_builder_util__WEBPACK_IMPORTED_MODULE_3__["QueryParamsBuilder"].default();
        this._queryParamsBuilder.currentLang = this.$localization.currentLang;
        this._queryParamsBuilder.dateFormat = this.filterDateFormat;
    }
    get user() {
        return this.$user.info;
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
        return this.routeParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('type'));
    }
    get metaName$() {
        return this.type$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_presentation_team_team_reservations_team_reservations_utils__WEBPACK_IMPORTED_MODULE_10__["getReservationsMetaNameByType"]));
    }
    get list$() {
        return this.reservationsMeta$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((metaRes) => this.reservations$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(dataRes => [metaRes, dataRes]))), this.loadingOperator(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([meta, data]) => ({ meta, data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(({ meta, data }) => Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["mapDictionaryValues"])(this.$dictionaries, meta, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(({ meta, data }) => Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["mapActions"])(this.$dictionaries, meta, data, this.user)), this.loadingOperator(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((e) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        }
        if (actionParams === null || actionParams === void 0 ? void 0 : actionParams.url) {
            return this.callMassActionRequest(actionParams, rows);
        }
    }
    selectRow(row) {
        this._selectedRow = row;
        this.$nav.go(`view/${row.id}`, this.$route);
    }
    createReservation() {
        this.$nav.go('../create', this.$route);
    }
    destroy() {
        this._queryParamsBuilder.destroy();
    }
    get filterDateFormat() {
        return this.$measurements.getMeasurementByName('filterDate');
    }
    get reservationsMeta$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.metaName$,
            this.reset$,
        ]).pipe(this.readyOperator(), this.resetErrorOperator(), this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(([name]) => this.$metaApi.getMeta(name, this.$messages.loadingMetaErrorNotification)), this.readyOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((meta) => this.processMeta(meta)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.updateQueryParams({}, false)));
    }
    get reservations$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.type$,
            this.routeQueryParams$,
            this.reload$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(([, { updateData },]) => updateData === 'true'), this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(([type]) => this.$reservationsApi.getReservationsByType(type, this.bodyQueryParams)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this._queryParamsBuilder.setProperty('updateData', null)));
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
    callActionRequest({ url, method, messages, body }, data) {
        const requestData = Object(_base_action_action_utils__WEBPACK_IMPORTED_MODULE_11__["mapRequestBody"])(data, body);
        url = this.$url.createUrl(url, data);
        messages = this.$messages.getActionNotificationsMessages(messages);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(url).pipe(this.loadingOperator(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((url) => this.$reservationsApi.callReservationAction(url, method, requestData, messages)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(({ success }) => success
            ? this.reload()
            : this.loading = false);
    }
    callMassActionRequest({ url, method, body }, reservations) {
        const requestData = Object(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_12__["prepareMassActionRequest"])(reservations, body);
        this.loading = true;
        return this.$reservationsApi
            .callReservationAction(url, method, requestData, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(({ success }) => this.finishCallAction(success)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => Object(_presentation_reservations_components_list_list_utils__WEBPACK_IMPORTED_MODULE_12__["mapMassActionRequest"])(response, reservations, this.$message)));
    }
    finishCallAction(result) {
        result ? this.reload() : this.loading = false;
    }
    processMeta(meta) {
        if (meta instanceof _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_9__["AppError"]) {
            this.error = this.$messages.getLoadingMetaError(meta);
            this.loading = false;
            return false;
        }
        Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["initQueryParams"])(this._queryParamsBuilder, meta, this.routeQueryParams);
        Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["mapStatusDictionary"])(meta.columns, this.$statuses.statuses);
        Object(_shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_6__["filterActionsColumn"])(meta, this.user);
        return true;
    }
}
TeamReservationsService.ɵfac = function TeamReservationsService_Factory(t) { return new (t || TeamReservationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__["MetaApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"])); };
TeamReservationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeamReservationsService, factory: TeamReservationsService.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscriptions"])('destroy')
], TeamReservationsService.prototype, "_subscriptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_8__["Complete"]
], TeamReservationsService.prototype, "destroy", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamReservationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _shared_messages_services_reservations_messages_service__WEBPACK_IMPORTED_MODULE_13__["ReservationsMessagesService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_14__["StatusesService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_15__["MeasurementsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] }, { type: _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_17__["MetaApiService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_18__["ReservationsApiService"] }, { type: _core_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"] }]; }, { _subscriptions: [], destroy: [] }); })();


/***/ }),

/***/ "UIsf":
/*!**************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/view/view.service.ts ***!
  \**************************************************************************/
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








class ViewService {
    constructor(_api, $route, _dictionaries, $statuses) {
        this._api = _api;
        this.$route = $route;
        this._dictionaries = _dictionaries;
        this.$statuses = $statuses;
        this._reload = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    get reservation$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this._routeId$, this._reload])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([id]) => this._reservationReq$(+id)));
    }
    reload() {
        this._reload.next(null);
    }
    get _routeId$() {
        return this.$route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('id'));
    }
    _reservationReq$(id) {
        return this._api.getWorkplaceReservations({
            id,
            statuses: this.$statuses.allStatusesCodes
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('0'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(reservation => {
            if (reservation) {
                return this._workplaceReq$(reservation.workplaceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((workplace) => [reservation, workplace]));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([null, null]);
            }
        }));
    }
    _workplaceReq$(id) {
        return this._dictionaries.getDictionaryItemByKey('workplaces', id);
    }
}
ViewService.ɵfac = function ViewService_Factory(t) { return new (t || ViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"])); };
ViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewService, factory: ViewService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_6__["StatusesService"] }]; }, null); })();


/***/ }),

/***/ "Y+7/":
/*!****************************************************************!*\
  !*** ./src/app/presentation/reservations/utils/reservation.ts ***!
  \****************************************************************/
/*! exports provided: getStatus, sortFloors, filterFloors, checkReservedNeighbors, checkNeighbors, getDistanceCheckConfirmModal, disablePlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortFloors", function() { return sortFloors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFloors", function() { return filterFloors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkReservedNeighbors", function() { return checkReservedNeighbors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNeighbors", function() { return checkNeighbors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceCheckConfirmModal", function() { return getDistanceCheckConfirmModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disablePlace", function() { return disablePlace; });
/* harmony import */ var _presentation_reservations_enums_reservationStatus_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @presentation/reservations/enums/reservationStatus.enum */ "FLn2");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");


const getStatus = (status) => {
    return _presentation_reservations_enums_reservationStatus_enum__WEBPACK_IMPORTED_MODULE_0__["reservationStatus"][status.toLowerCase()];
};
const sortFloors = (floors, buildingId) => {
    return floors.filter((floor) => floor.buildingId === buildingId).sort((a, b) => a.floorNumber - b.floorNumber);
};
const filterFloors = (floors, buildingId) => {
    return floors.filter((floor) => floor.buildingId === buildingId);
};
const checkReservedNeighbors = (place, reservations) => {
    const ids = reservations.map(r => r.workplaceId);
    return place.neighborsIds.some(id => ids.includes(id));
};
const checkNeighbors = (places) => {
    const neighborsSet = new Set(...[places.reduce((acc, curr) => [...acc, ...curr.neighborsIds], [])]);
    return places.some(place => neighborsSet.has(place.id));
};
const getDistanceCheckConfirmModal = (nzOnOk) => ({
    nzTitle: 'Нарушение социальной дистанции',
    nzContent: 'Согласны ли вы нарушить социальную дистанцию?',
    nzOkText: 'Да',
    nzCancelText: 'Нет',
    nzOnOk
});
const disablePlace = (place) => {
    return Object.assign(Object.assign({}, place), { disabled: true, img: place.imageDisabledUrl || _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_1__["MAP_POINT_DISABLED_SVG"] });
};


/***/ }),

/***/ "Zhos":
/*!*************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations.dictionary.ts ***!
  \*************************************************************************************/
/*! exports provided: TeamReservationsDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsDictionary", function() { return TeamReservationsDictionary; });
var TeamReservationsDictionary;
(function (TeamReservationsDictionary) {
    TeamReservationsDictionary["AllBuildings"] = "All buildings";
    TeamReservationsDictionary["AllFloors"] = "All floors";
    TeamReservationsDictionary["AllStatuses"] = "All statuses";
    TeamReservationsDictionary["BookWorkPlace"] = "Book workplace";
    TeamReservationsDictionary["ErrorLoadingReservationsList"] = "Error loading reservations list";
    TeamReservationsDictionary["ErrorLoadingReservationsListData"] = "Error loading reservations list data";
    TeamReservationsDictionary["ErrorLoadingReservationsListMeta"] = "Error loading reservations list metadata";
    TeamReservationsDictionary["EnterUsername"] = "Enter username";
    TeamReservationsDictionary["LoadReservationsListFailed"] = "Load reservations list failed";
    TeamReservationsDictionary["MyWorkplaceReservations"] = "My workplace reservations";
    TeamReservationsDictionary["PleaseSelectUserGroup"] = "Please select user group";
    TeamReservationsDictionary["ReloadReservations"] = "Reload reservations";
    TeamReservationsDictionary["UserGroup"] = "User group";
})(TeamReservationsDictionary || (TeamReservationsDictionary = {}));


/***/ }),

/***/ "kxzH":
/*!********************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations-filters/team-reservations-filters.service.ts ***!
  \********************************************************************************************************************/
/*! exports provided: TeamReservationsFiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsFiltersService", function() { return TeamReservationsFiltersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations-filters/team-reservations-filters.utils */ "KuhW");





class TeamReservationsFiltersService {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this._formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    get formGroup() {
        return this._formGroup;
    }
    createFormGroup(type) {
        this.clearFormGroup();
        this.addFormGroupControls(type);
    }
    clear(formGroup = this.formGroup) {
        Object
            .entries(formGroup.controls)
            .filter(this.clearControlValue);
    }
    clearFormGroup() {
        Object.keys(this._formGroup.controls)
            .forEach(key => this._formGroup.removeControl(key));
    }
    addFormGroupControls(type) {
        if (!type) {
            this._formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
            return;
        }
        Object
            .entries(Object(_presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_utils__WEBPACK_IMPORTED_MODULE_2__["getTeamReservationsFilterFieldsByType"])(type))
            .forEach(([name, state]) => this._formGroup.addControl(name, this.formBuilder.control(state)));
    }
    clearControlValue([name, control]) {
        switch (name) {
            case 'labelGroupId':
                return;
            case 'labelIds':
                control.setValue('*');
                return;
            default:
                control.setValue(control.value instanceof Array ? [] : null);
        }
    }
}
TeamReservationsFiltersService.ɵfac = function TeamReservationsFiltersService_Factory(t) { return new (t || TeamReservationsFiltersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
TeamReservationsFiltersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamReservationsFiltersService, factory: TeamReservationsFiltersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamReservationsFiltersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "myrF":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations-filters/team-reservations-filters.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TeamReservationsFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamReservationsFiltersComponent", function() { return TeamReservationsFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-reservations/team-reservations-filters/team-reservations-filters.service */ "kxzH");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _team_reservations_filters_workplace_team_reservations_filter_workplace_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team-reservations-filters-workplace/team-reservations-filter-workplace.component */ "BKNL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/pipes/dictionary.pipe */ "Dz+d");

















function TeamReservationsFiltersComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
} }
const _c0 = function () { return { suppressScrollX: true }; };
class TeamReservationsFiltersComponent extends _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"] {
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
        const emitEvent = !!Object.keys(values).length;
        this.formGroup.patchValue(values, { emitEvent });
    }
    clear() {
        this.$service.clear(this.formGroup);
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
TeamReservationsFiltersComponent.ɵfac = function TeamReservationsFiltersComponent_Factory(t) { return new (t || TeamReservationsFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_service__WEBPACK_IMPORTED_MODULE_2__["TeamReservationsFiltersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TeamReservationsFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamReservationsFiltersComponent, selectors: [["app-team-reservations-filters"], ["", "app-team-reservations-filters", ""]], hostVars: 2, hostBindings: function TeamReservationsFiltersComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("team-reservations-filters", true);
    } }, inputs: { loading: "loading", inputType: ["type", "inputType"], inputValues: ["values", "inputValues"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_service__WEBPACK_IMPORTED_MODULE_2__["TeamReservationsFiltersService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 30, consts: [["nz-row", "", 1, "team-reservations-filters__header", 3, "nzGutter"], ["nz-col", "", 1, "team-reservations-filters__header-action", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType"], ["nz-col", "", 1, "team-reservations-filters__header-title", 3, "nzXs", "nzLg"], ["nz-col", "", 1, "team-reservations-filters__header-action", "_right", 3, "nzXs", "nzLg"], ["nz-button", "", 3, "nzType", "click"], [1, "team-reservations-filters__form-wrapper", 3, "nzSpinning"], ["nz-form", "", 1, "team-reservations-filters__form", 3, "nzLayout", "formGroup", "ngSwitch"], [1, "team-reservations-filters__form-scroll", 3, "config"], ["app-team-reservations-filters-workplace", "", 3, "formGroup", 4, "ngSwitchDefault"], ["app-team-reservations-filters-workplace", "", 3, "formGroup"]], template: function TeamReservationsFiltersComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamReservationsFiltersComponent_Template_button_click_11_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-spin", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "perfect-scrollbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TeamReservationsFiltersComponent_div_18_Template, 1, 1, "div", 9);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 19, "Close")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 23, "Filters")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 8)("nzLg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 27, "Clear")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.formGroup)("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"], _team_reservations_filters_workplace_team_reservations_filter_workplace_component__WEBPACK_IMPORTED_MODULE_12__["TeamReservationsFilterWorkplaceComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_14__["DictionaryPipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  padding: 0 4px 0 24px;\n}\n[_nghost-%COMP%]   .team-reservations-filters__header[_ngcontent-%COMP%] {\n  height: 52px;\n  padding-right: 24px;\n}\n[_nghost-%COMP%]   .team-reservations-filters__header-action[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n}\n[_nghost-%COMP%]   .team-reservations-filters__header-action[_ngcontent-%COMP%]     .ant-btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n[_nghost-%COMP%]   .team-reservations-filters__header-action._right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .team-reservations-filters__form[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .team-reservations-filters__form[_ngcontent-%COMP%]   .ant-checkbox-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .team-reservations-filters__form-scroll[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   .team-reservations-filters__form-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 52px);\n}\n[_nghost-%COMP%]   .team-reservations-filters__form-wrapper[_ngcontent-%COMP%]     .ant-spin-container {\n  height: 100%;\n}\n[_nghost-%COMP%]   .team-reservations-filters-item__scroll[_ngcontent-%COMP%], [_nghost-%COMP%]   .team-reservations-filters-item__scroll[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tcmVzZXJ2YXRpb25zLWZpbHRlcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBWkQ7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFjRjtBQVhJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBYU47QUFYTTtFQUNFLGlCQUFBO0FBYVI7QUFYUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWFWO0FBVlE7RUFDRSxpQkFBQTtBQVlWO0FBUEk7RUFDRSxZQUFBO0FBU047QUFWSTtFQUlJLGtCQUFBO0FBU1I7QUFOTTtFQUNFLG1CQUFBO0FBUVI7QUFMTTtFQUNFLHlCQUFBO0FBT1I7QUFSTTtFQUlJLFlBQUE7QUFPVjtBQUFROztFQUVFLGlCQUFBO0FBRVYiLCJmaWxlIjoidGVhbS1yZXNlcnZhdGlvbnMtZmlsdGVycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnMubGVzc1wiO1xuXG5AZm9vdGVyLWhlaWdodDogNjRweDtcbkBoZWFkZXItaGVpZ2h0OiA1MnB4O1xuQHRlYW0tcmVzZXJ2YXRpb25zLWZpbHRlcnMtcHJlZml4LWNsczogdGVhbS1yZXNlcnZhdGlvbnMtZmlsdGVycztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNHB4IDAgMjRweDtcblxuICAmIC5Ae3RlYW0tcmVzZXJ2YXRpb25zLWZpbHRlcnMtcHJlZml4LWNsc30ge1xuICAgICZfX2hlYWRlciB7XG4gICAgICBoZWlnaHQ6IEBoZWFkZXItaGVpZ2h0O1xuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcblxuICAgICAgJi1hY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMDtcblxuICAgICAgICAmIDo6bmctZGVlcCAuYW50LWJ0biB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLl9yaWdodCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgLmFudC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuXG4gICAgICAmLXNjcm9sbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgICYtd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gQGhlYWRlci1oZWlnaHQpO1xuXG4gICAgICAgIDo6bmctZGVlcCAuYW50LXNwaW4tY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgJl9fc2Nyb2xsIHtcbiAgICAgICAgJixcbiAgICAgICAgJiAucHMge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamReservationsFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-reservations-filters, [app-team-reservations-filters]',
                templateUrl: './team-reservations-filters.component.html',
                styleUrls: ['./team-reservations-filters.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.team-reservations-filters]': `true`
                },
                providers: [_presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_service__WEBPACK_IMPORTED_MODULE_2__["TeamReservationsFiltersService"]]
            }]
    }], function () { return [{ type: _presentation_team_team_reservations_team_reservations_filters_team_reservations_filters_service__WEBPACK_IMPORTED_MODULE_2__["TeamReservationsFiltersService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }], inputValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['values']
        }] }); })();


/***/ }),

/***/ "odLJ":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/presentation/team/team-reservations/team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.utils.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: mapBuildingsOptions, mapFloorMapsOptions, mapUserOptions, mapStatusesOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBuildingsOptions", function() { return mapBuildingsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFloorMapsOptions", function() { return mapFloorMapsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapUserOptions", function() { return mapUserOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStatusesOptions", function() { return mapStatusesOptions; });
/* harmony import */ var _shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/common/utils/filter.util */ "FBo/");

function mapBuildingsOptions(buildings, buildingIdControl) {
    return Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(buildings, 'id', 'name', buildingIdControl);
}
function mapFloorMapsOptions(floorMaps, buildings, floorMapIdsControl) {
    return buildings.map(({ name: label, id }) => {
        const floorMapOptions = Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(floorMaps.filter(({ buildingId }) => buildingId === id), 'id', 'name', floorMapIdsControl);
        const checked = floorMapOptions.every(({ checked }) => checked);
        return {
            label,
            value: id,
            checked,
            indeterminate: !checked && floorMapOptions.some(({ checked }) => checked),
            options: floorMapOptions
        };
    }).filter(group => !!group.options.length);
}
function mapUserOptions(labels, labelIdsControl) {
    return Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(labels, 'id', 'name', labelIdsControl).map((userOption) => (Object.assign(Object.assign({}, userOption), { checked: true })));
}
function mapStatusesOptions(statuses, statusesControl) {
    return Object(_shared_common_utils_filter_util__WEBPACK_IMPORTED_MODULE_0__["mapCheckBoxOptions"])(statuses, 'code', 'name', statusesControl);
}


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


/***/ })

}]);
//# sourceMappingURL=team-reservations-team-reservations-module.js.map