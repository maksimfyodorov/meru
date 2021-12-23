(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~develop-develop-module~offices-map-offices-map-module~reservations-reservations-module~team-~9c949e03"],{

/***/ "6DYN":
/*!*******************************************!*\
  !*** ./src/app/base/map/map.component.ts ***!
  \*******************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_map_map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/map/map-mark/map-mark.component */ "hHWn");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _base_map_map_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/map/map.utils */ "b9GI");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var _core_utils_color_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/utils/color.utils */ "dsIO");
/* harmony import */ var _base_map_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @base/map/map.service */ "Bnie");
/* harmony import */ var _map_zoom_map_zoom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-zoom/map-zoom.component */ "KfK1");
/* harmony import */ var _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-controls/map-controls.component */ "Cfzv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
















const _c0 = ["map"];
const _c1 = ["canvas"];
const _c2 = ["rootMap"];
function MapComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function MapComponent_img_8_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.loadMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MapComponent_app_map_mark_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-map-mark", 13);
} if (rf & 2) {
    const mark_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mark", mark_r8)("factor", ctx_r3.factor)("hiddenMarksTypes", ctx_r3.hiddenMarksTypes)("isDragged", ctx_r3.isDragged);
} }
function MapComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-spin", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", "large");
} }
class MapComponent {
    constructor($service, cdr) {
        this.$service = $service;
        this.cdr = cdr;
        this.isDragged = false;
        this.areasVisible = false;
        this._areas = [];
        this._size = {
            width: 'auto',
            height: 'auto',
        };
        this.factor = { width: 1, height: 1, arx: 4 / 3, ary: 3 / 4 };
        this.zoom = null;
        this.dragClasses = ['_grab'];
        this.sliderOptions = {
            min: 0.1,
            max: 5,
            dots: false,
            vertical: true,
            step: 0.1,
            range: false,
            tipFormatter: (zoom) => Math.floor(zoom * 100) + '%',
            tooltipVisible: 'default',
        };
        this.dragPosition = { x: 0, y: 0 };
        // tslint:disable-next-line:no-output-native
        this.mark = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.areaVisibilityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hiddenMarksChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = false;
        this.hiddenControls = [];
        this.position = 'right';
        this.hiddenMarksTypes = [];
    }
    get imgWrapperStyle() {
        return {
            transform: `scale(${this.zoom})`,
        };
    }
    set areas(value) {
        if (value) {
            this._areas = value;
            this.drawAreas();
        }
    }
    get areas() {
        return this._areas;
    }
    set height(value) {
        this._height = value;
        if (this.map) {
            setTimeout(() => {
                const { width, height } = this.map.nativeElement.getBoundingClientRect();
                this._setFactor(width, height);
            }, 0);
        }
        if (this._areas) {
            this.drawAreas();
        }
    }
    get height() {
        return this._height;
    }
    set img(value) {
        this._img = value;
        this.resetDragAndDrop();
    }
    get img() {
        return this._img;
    }
    set size(value) {
        this._size = value;
        this.resetDragAndDrop();
    }
    get size() {
        var _a, _b;
        return {
            width: ((_a = this._size) === null || _a === void 0 ? void 0 : _a.width) + 'px',
            height: ((_b = this._size) === null || _b === void 0 ? void 0 : _b.height) + 'px',
        };
    }
    set centeredMarkId(value) {
        if (value) {
            this._centeredMarkId = value;
            this.centered(value);
            this.cdr.markForCheck();
        }
    }
    get centeredMarkId() {
        return this._centeredMarkId;
    }
    set marks(value) {
        this._marks = value;
        if (value) {
            setTimeout(() => this.$service.marksReady$.next(true));
        }
    }
    get marks() {
        return this._marks;
    }
    set map(value) {
        this._map = value;
        value === null || value === void 0 ? void 0 : value.nativeElement.addEventListener('load', () => {
            const { width, height } = value.nativeElement.getBoundingClientRect();
            this._setFactor(width, height);
            this.preparationCanvas();
        });
    }
    get map() {
        return this._map;
    }
    ngOnInit() {
        this._subs = this.$service.mark$.subscribe((mark) => this.mark.emit(mark));
        this._subs = this.$service.zoom$.subscribe((_zoom) => this.hideAllPopup());
        this._subs = this.$service.hidePopover$.subscribe(() => this.hideAllPopup());
    }
    hideAllPopup() {
        var _a;
        (_a = this.tooltips) === null || _a === void 0 ? void 0 : _a.forEach((mark) => mark.hidePopup());
    }
    scrollChange(event) {
        const step = this.sliderOptions.step;
        const maxZoom = this.sliderOptions.max;
        const updateZoom = event.deltaY > 0 ? this.zoom - step : this.zoom + step;
        if (updateZoom >= step && updateZoom <= maxZoom) {
            this.zoom = updateZoom;
            this.$service.zoom$.next(updateZoom);
        }
    }
    dragMousedown() {
        this.dragClasses.push('_grabbing');
    }
    dragMouseup() {
        this.dragClasses = this.dragClasses.filter((item) => item !== '_grabbing');
    }
    dragStarted() {
        this.$service.mark$.next(null);
        this.isDragged = true;
    }
    cdkDragEnded() {
        setTimeout(() => {
            this.isDragged = false;
            this.cdr.detectChanges();
        });
    }
    _setFactor(width, height) {
        this.factor = {
            width: width / Number(this._size.width) / this.zoom,
            height: height / Number(this._size.height) / this.zoom,
            arx: width / height,
            ary: height / width,
        };
        this.cdr.markForCheck();
    }
    resetDragAndDrop() {
        this.zoom = 1;
        if (this.cdkDrag) {
            this.cdkDrag.reset();
        }
    }
    centered(markId) {
        var _a, _b;
        const mark = this.marks.find((_mark) => _mark.id === markId);
        if (mark) {
            this.resetDragAndDrop();
            const halfMapWidth = ((_a = this.map) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetWidth) / 2 || 0;
            const halfMapHeight = ((_b = this.map) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetHeight) / 2 || 0;
            const halfMarkSize = mark.coordinates.size / 2 || 0;
            this.dragPosition = {
                x: halfMapWidth -
                    (mark.coordinates.x + halfMarkSize) * this.factor.width,
                y: halfMapHeight -
                    (mark.coordinates.y + halfMarkSize) * this.factor.height,
            };
            const mapMark = this.mapMarks.find((_mark) => _mark.id === markId);
            mapMark.showPopup();
        }
    }
    heightToString(add = 0) {
        return this.height ? String(this.height + add) + 'px' : 'auto';
    }
    zoomChange(value) {
        this.$service.zoom$.next(value);
    }
    loadMap() {
        this.$service.mapReady$.next(true);
    }
    preparationCanvas() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    drawPolygon(coordinates, color) {
        if (this.canvas.nativeElement.getContext && this.ctx) {
            this.ctx.fillStyle = Object(_core_utils_color_utils__WEBPACK_IMPORTED_MODULE_7__["hexToRGB"])(color, '0.4');
            this.ctx.beginPath();
            coordinates.forEach((pos, index) => {
                if (index === 0) {
                    this.ctx.moveTo(pos.x, pos.y);
                }
                this.ctx.lineTo(pos.x, pos.y);
            });
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
    drawAreas() {
        var _a;
        if (this.canvas && this.canvas.nativeElement && this._size && this.factor) {
            this.canvas.nativeElement.width = +this._size.width * this.factor.width;
            this.canvas.nativeElement.height =
                +this._size.height * this.factor.height;
            (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, Number(this._size.width), Number(this._size.height));
            this.areas.forEach((area) => {
                if (area.isVisible) {
                    this.drawPolygon(Object(_base_map_map_utils__WEBPACK_IMPORTED_MODULE_5__["polygonPointsTransform"])(area.polygonPoints, this.factor), area.color);
                }
            });
        }
    }
    ngOnDestroy() { }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_map_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_base_map_map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_2__["MapMarkComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_base_map_map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_2__["MapMarkComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cdkDrag = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rootMap = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltips = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapMarks = _t);
    } }, inputs: { areas: "areas", areasVisible: "areasVisible", height: "height", img: "img", size: "size", centeredMarkId: "centeredMarkId", marks: "marks", loading: "loading", hiddenControls: "hiddenControls", position: "position", hiddenMarksTypes: "hiddenMarksTypes" }, outputs: { mark: "mark", areaVisibilityChange: "areaVisibilityChange", hiddenMarksChange: "hiddenMarksChange" }, decls: 11, vars: 16, consts: [[1, "map", 3, "wheel"], ["rootMap", ""], [3, "value", "options", "valueChange"], [3, "hiddenControls", "hiddenMarks", "hiddenMarksChange", "areaVisibilityChange"], ["cdkDrag", "", 1, "map__img", 3, "cdkDragFreeDragPosition", "ngClass", "mousedown", "mouseup", "cdkDragStarted", "cdkDragEnded"], [1, "map__img-wrapper", 3, "ngStyle"], [1, "canvas"], ["canvas", ""], ["alt", "\u041A\u0430\u0440\u0442\u0430", 3, "src", "load", 4, "ngIf"], [3, "mark", "factor", "hiddenMarksTypes", "isDragged", 4, "ngFor", "ngForOf"], ["class", "map__spin-wrapper", 4, "ngIf"], ["alt", "\u041A\u0430\u0440\u0442\u0430", 3, "src", "load"], ["map", ""], [3, "mark", "factor", "hiddenMarksTypes", "isDragged"], [1, "map__spin-wrapper"], ["nzSimple", "", 1, "map__spin", 3, "nzSize"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("wheel", function MapComponent_Template_section_wheel_0_listener($event) { return ctx.scrollChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-map-zoom", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MapComponent_Template_app_map_zoom_valueChange_2_listener($event) { return ctx.zoom = $event; })("valueChange", function MapComponent_Template_app_map_zoom_valueChange_2_listener($event) { return ctx.zoomChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-map-controls", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hiddenMarksChange", function MapComponent_Template_app_map_controls_hiddenMarksChange_3_listener($event) { return ctx.hiddenMarksChange.emit($event); })("areaVisibilityChange", function MapComponent_Template_app_map_controls_areaVisibilityChange_3_listener($event) { return ctx.areaVisibilityChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function MapComponent_Template_div_mousedown_4_listener() { return ctx.dragMousedown(); })("mouseup", function MapComponent_Template_div_mouseup_4_listener() { return ctx.dragMouseup(); })("cdkDragStarted", function MapComponent_Template_div_cdkDragStarted_4_listener() { return ctx.dragStarted(); })("cdkDragEnded", function MapComponent_Template_div_cdkDragEnded_4_listener() { return ctx.cdkDragEnded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "canvas", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MapComponent_img_8_Template, 2, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MapComponent_app_map_mark_9_Template, 1, 4, "app-map-mark", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MapComponent_div_10_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.heightToString(30));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.zoom)("options", ctx.sliderOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hiddenControls", ctx.hiddenControls)("hiddenMarks", ctx.hiddenMarksTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition)("ngClass", ctx.dragClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.heightToString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.imgWrapperStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.areasVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.marks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_map_zoom_map_zoom_component__WEBPACK_IMPORTED_MODULE_9__["MapZoomComponent"], _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_10__["MapControlsComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _base_map_map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_2__["MapMarkComponent"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.map[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px;\n  background-color: #ffffff;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.map[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.map__spin[_ngcontent-%COMP%] {\n  z-index: 10;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.map__spin-wrapper[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(255, 255, 255, 0.75);\n}\n.map__img[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n}\n.map__img._grab[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.map__img._grabbing[_ngcontent-%COMP%] {\n  cursor: grabbing!important;\n}\n.map__img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.map__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFqQkQ7RUFDRSxjQUFBO0FBbUJGO0FBakJBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbUJGO0FBekJBO0VBUUksa0JBQUE7QUFvQko7QUFsQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQW9CSjtBQW5CSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQ0FBQTtBQXFCTjtBQWxCRTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQW9CSjtBQW5CSTtFQUNFLFlBQUE7QUFxQk47QUFuQkk7RUFDRSwwQkFBQTtBQXFCTjtBQW5CSTtFQUNFLGtCQUFBO0FBcUJOO0FBbkNFO0VBaUJJLFlBQUE7RUFDQSxjQUFBO0FBcUJOIiwiZmlsZSI6Im1hcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3RoZW1lL292ZXJyaWRlXCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1hcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGdyYXktMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5jYW52YXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAmX19zcGluIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICYtd3JhcHBlciB7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgfVxuICB9XG4gICZfX2ltZyB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgICYuX2dyYWIge1xuICAgICAgY3Vyc29yOiBncmFiO1xuICAgIH1cbiAgICAmLl9ncmFiYmluZyB7XG4gICAgICBjdXJzb3I6IGdyYWJiaW5nIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], MapComponent.prototype, "_subs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_6__["Debounce"])(100)
], MapComponent.prototype, "drawAreas", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _base_map_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { areas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], areasVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], centeredMarkId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], marks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], _subs: [], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], mark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], areaVisibilityChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], hiddenMarksChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hiddenControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hiddenMarksTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tooltips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_base_map_map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_2__["MapMarkComponent"]]
        }], cdkDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"]]
        }], rootMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['rootMap']
        }], mapMarks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_base_map_map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_2__["MapMarkComponent"]]
        }], drawAreas: [] }); })();


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

/***/ "Cfzv":
/*!*****************************************************************!*\
  !*** ./src/app/base/map/map-controls/map-controls.component.ts ***!
  \*****************************************************************/
/*! exports provided: MapControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapControlsComponent", function() { return MapControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_controls_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-controls.utils */ "TVA5");
/* harmony import */ var _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/core/services/config.service */ "jtrZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");








const _c0 = function (a0) { return { _active: a0 }; };
function MapControlsComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MapControlsComponent_i_1_Template_i_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const control_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleControl(control_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", control_r1.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, control_r1.active))("nz-tooltip", control_r1.tooltip);
} }
class MapControlsComponent {
    constructor(_cdr, $config) {
        this._cdr = _cdr;
        this.$config = $config;
        this._nornikAplana = false; // Прячем области для НН
        this._hiddenMarks = [];
        this._controls = Object(_map_controls_utils__WEBPACK_IMPORTED_MODULE_1__["getControls"])();
        this.areaVisibilityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hiddenMarksChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._nornikAplana = this.$config.get('nornikAplana') === 'true';
    }
    set hiddenMarks(value) {
        if (Array.isArray(value)) {
            this._hiddenMarks = value;
            this._controls.forEach((control) => {
                if (control.markControl) {
                    control.active = !this._hiddenMarks.includes(control.id);
                }
            });
        }
    }
    set hiddenControls(value) {
        if (this._nornikAplana) {
            this._controls = this._controls.filter((c) => c.id !== 'Areas');
        }
        this._hiddenMarks = [];
        this._controls = this._controls.filter((c) => {
            let res = !value.includes(c.id);
            if (!res) {
                if (c.id !== 'Areas') {
                    this._hiddenMarks.push(c.id);
                }
            }
            return res;
        });
        this.hiddenMarksChange.next([...this._hiddenMarks]);
    }
    get controls() {
        return this._controls;
    }
    toggleControl(control, $event) {
        $event.preventDefault();
        this.setControlActivity(control.id, !control.active);
        this._cdr.markForCheck();
    }
    setControlActivity(id, active) {
        this._controls.forEach((control) => {
            if (control.id === id) {
                control.active = active;
                if (control.id === 'Areas') {
                    this.areaVisibilityChange.next(active);
                }
                else {
                    if (control.active) {
                        this._hiddenMarks = this._hiddenMarks.filter((mark) => mark !== control.id);
                    }
                    else {
                        this._hiddenMarks.push(control.id);
                    }
                    this.hiddenMarksChange.next([...this._hiddenMarks]);
                }
            }
        });
    }
}
MapControlsComponent.ɵfac = function MapControlsComponent_Factory(t) { return new (t || MapControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
MapControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapControlsComponent, selectors: [["app-map-controls"]], inputs: { hiddenMarks: "hiddenMarks", hiddenControls: "hiddenControls" }, outputs: { areaVisibilityChange: "areaVisibilityChange", hiddenMarksChange: "hiddenMarksChange" }, decls: 2, vars: 1, consts: [[1, "map-controls"], ["nz-icon", "", "nzTheme", "outline", "nzTooltipPlacement", "right", 3, "nzType", "ngClass", "nz-tooltip", "mousedown", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzTheme", "outline", "nzTooltipPlacement", "right", 3, "nzType", "ngClass", "nz-tooltip", "mousedown"]], template: function MapControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapControlsComponent_i_1_Template, 1, 5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"]], styles: [".map-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(calc(-50% - 30px));\n  display: flex;\n  flex-direction: column;\n  z-index: 8;\n  background-color: #ffffff;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n}\n.map-controls[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #bfbfbf;\n  cursor: pointer;\n  padding: 10px;\n}\n.map-controls[_ngcontent-%COMP%]   i._active[_ngcontent-%COMP%] {\n  color: #69c0ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1jb250cm9scy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUYsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBZkQ7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFpQkY7QUExQkE7RUFZSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBaUJKO0FBZkk7RUFDRSxjQUFBO0FBaUJOIiwiZmlsZSI6Im1hcC1jb250cm9scy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+bmctem9ycm8tYW50ZC9zdHlsZS90aGVtZXNcIjtcbkBpbXBvcnQgJ35zcmMvdGhlbWUvb3ZlcnJpZGUnO1xuXG5AYm9yZGVyOiBAYm9yZGVyLXdpZHRoLWJhc2UgQGJvcmRlci1zdHlsZS1iYXNlIEBib3JkZXItY29sb3ItYmFzZTtcbi5tYXAtY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlIC0gMzBweCkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiA4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICBib3JkZXI6IEBib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiBAZ3JheS02O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgJi5fYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBAYmx1ZS00O1xuICAgIH1cblxuICAgICYgKyBpIHtcbiAgICAgIC8vIGJvcmRlci10b3A6IEBib3JkZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-controls',
                templateUrl: './map-controls.component.html',
                styleUrls: ['./map-controls.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, { hiddenMarks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hiddenControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], areaVisibilityChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hiddenMarksChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "KfK1":
/*!*********************************************************!*\
  !*** ./src/app/base/map/map-zoom/map-zoom.component.ts ***!
  \*********************************************************/
/*! exports provided: MapZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapZoomComponent", function() { return MapZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class MapZoomComponent {
    constructor() {
        this._options = {
            min: 1,
            max: 30,
            dots: false,
            vertical: true,
            step: 1,
            range: false,
            tooltipVisible: 'default',
            tipFormatter: null,
            marks: null,
        };
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.position = 'right';
    }
    set options(value) {
        this._options = Object.assign(Object.assign({}, this._options), value);
    }
    get options() {
        return this._options;
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    increment(step) {
        if (this.options.max > this.value + step) {
            this.changeValue(this.value + step);
        }
    }
    decrement(step) {
        if (this.options.min < this.value - step) {
            this.changeValue(this.value - step);
        }
    }
    changeValue(value) {
        this._value = value;
        this.valueChange.emit(value);
    }
}
MapZoomComponent.ɵfac = function MapZoomComponent_Factory(t) { return new (t || MapZoomComponent)(); };
MapZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapZoomComponent, selectors: [["app-map-zoom"]], inputs: { options: "options", value: "value", position: "position" }, outputs: { valueChange: "valueChange" }, decls: 6, vars: 11, consts: [[1, "map-zoom", 3, "ngClass"], ["nz-button", "", "nzType", "primary", "nzShape", "circle", 1, "map-zoom__btn", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "map-zoom__slider", 3, "nzMin", "nzMax", "nzDots", "nzVertical", "nzStep", "nzRange", "nzTipFormatter", "nzTooltipVisible", "nzMarks", "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"]], template: function MapZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapZoomComponent_Template_button_click_1_listener() { return ctx.increment(ctx.options.step); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapZoomComponent_Template_nz_slider_ngModelChange_3_listener($event) { return ctx.changeValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapZoomComponent_Template_button_click_4_listener() { return ctx.decrement(ctx.options.step); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "_" + ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMin", ctx.options.min)("nzMax", ctx.options.max)("nzDots", ctx.options.dots)("nzVertical", ctx.options.vertical)("nzStep", ctx.options.step)("nzRange", ctx.options.range)("nzTipFormatter", ctx.options.tipFormatter)("nzTooltipVisible", ctx.options.tooltipVisible)("nzMarks", ctx.options.marks)("ngModel", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_6__["NzSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.map-zoom[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 80%;\n  top: 50%;\n  transform: translateY(calc(-50% - 30px));\n  z-index: 8;\n}\n.map-zoom__slider[_ngcontent-%COMP%]     .ant-slider-track {\n  background-color: unset;\n}\n.map-zoom__slider[_ngcontent-%COMP%]     .ant-slider {\n  margin: 0 0 0 9px;\n}\n.map-zoom__btn[_ngcontent-%COMP%] {\n  z-index: 2;\n  margin: 0;\n  min-width: auto;\n  width: 29px;\n  height: 29px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.map-zoom__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.map-zoom._right[_ngcontent-%COMP%] {\n  right: 30px;\n}\n.map-zoom._left[_ngcontent-%COMP%] {\n  left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC16b29tLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0E7RUE0QkUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtBQTFCRjtBQUxFO0VBRUksdUJBQUE7QUFNTjtBQVJFO0VBS0ksaUJBQUE7QUFNTjtBQUhFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBYkU7RUFVSSxlQUFBO0FBTU47QUFIRTtFQUNFLFdBQUE7QUFLSjtBQUhFO0VBQ0UsVUFBQTtBQUtKIiwiZmlsZSI6Im1hcC16b29tLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYXAtem9vbSB7XG4gICZfX3NsaWRlciB7XG4gICAgOjpuZy1kZWVwIC5hbnQtc2xpZGVyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIH1cbiAgICA6Om5nLWRlZXAgLmFudC1zbGlkZXIge1xuICAgICAgbWFyZ2luOiAwIDAgMCA5cHg7XG4gICAgfVxuICB9XG4gICZfX2J0biB7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIHdpZHRoOiAyOXB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICB9XG4gICYuX3JpZ2h0IHtcbiAgICByaWdodDogMzBweDtcbiAgfVxuICAmLl9sZWZ0IHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlIC0gMzBweCkpO1xuICB6LWluZGV4OiA4O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-zoom',
                templateUrl: './map-zoom.component.html',
                styleUrls: ['./map-zoom.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['options']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "TVA5":
/*!*************************************************************!*\
  !*** ./src/app/base/map/map-controls/map-controls.utils.ts ***!
  \*************************************************************/
/*! exports provided: getControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControls", function() { return getControls; });
const getControls = () => [
    {
        id: "POI",
        icon: 'info-circle',
        tooltip: 'POI-объекты',
        active: true,
        markControl: true,
    },
    {
        id: "Users",
        icon: 'usergroup-add',
        tooltip: 'Пользователи',
        active: true,
        markControl: true,
    },
    {
        id: "Areas",
        icon: 'gateway',
        tooltip: 'Области',
        active: false,
        markControl: false,
    }
];


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

/***/ "b9GI":
/*!***************************************!*\
  !*** ./src/app/base/map/map.utils.ts ***!
  \***************************************/
/*! exports provided: coordinatesToPairValues, polygonPointsTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordinatesToPairValues", function() { return coordinatesToPairValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonPointsTransform", function() { return polygonPointsTransform; });
const coordinatesToPairValues = (coordinates) => coordinates.map((pos, index, arr) => {
    var _a;
    const next = (_a = arr[index + 1]) !== null && _a !== void 0 ? _a : arr[0];
    return [pos, next];
});
const polygonPointsTransform = (str, factor) => {
    if (typeof str !== 'string') {
        return str;
    }
    const arrNumbs = str.split(',').map((s) => Number(s));
    if (arrNumbs.length % 2 === 1) {
        arrNumbs.push(0);
    }
    const result = [];
    let pos;
    arrNumbs.forEach((num, index) => {
        if (index % 2 === 0) {
            pos = { x: num * factor.width, y: 0 };
        }
        if (index % 2 === 1) {
            pos = Object.assign(Object.assign({}, pos), { y: num * factor.height });
            result.push(pos);
        }
    });
    return result;
};


/***/ }),

/***/ "dsIO":
/*!*******************************************!*\
  !*** ./src/app/core/utils/color.utils.ts ***!
  \*******************************************/
/*! exports provided: RGBToHex, hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHex", function() { return RGBToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
const RGBToHex = (r, g, b) => {
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);
    if (red.length === 1) {
        red = '0' + red;
    }
    if (green.length === 1) {
        green = '0' + green;
    }
    if (blue.length === 1) {
        blue = '0' + blue;
    }
    return '#' + r + g + b;
};
const hexToRGB = (h, o = '1') => {
    let r = '0';
    let g = '0';
    let b = '0';
    if (h.length === 4) {
        r = '0x' + h[1] + h[1];
        g = '0x' + h[2] + h[2];
        b = '0x' + h[3] + h[3];
    }
    else if (h.length === 7) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
    }
    return `rgba(${+r}, ${+g}, ${+b}, ${o})`;
};


/***/ }),

/***/ "hHWn":
/*!*********************************************************!*\
  !*** ./src/app/base/map/map-mark/map-mark.component.ts ***!
  \*********************************************************/
/*! exports provided: MapMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarkComponent", function() { return MapMarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _base_map_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/map/map.service */ "Bnie");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");














function MapMarkComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function MapMarkComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { mark: a0 }; };
function MapMarkComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MapMarkComponent_ng_template_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.mark.popup)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r10.mark));
} }
function MapMarkComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function MapMarkComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapMarkComponent_ng_template_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MapMarkComponent_ng_template_1_ng_template_1_Template, 1, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MapMarkComponent_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("size", ctx_r2.scale(ctx_r2.mark.coordinates.size, (ctx_r2.factor.width + ctx_r2.factor.height) / 2))("top", ctx_r2.scale(ctx_r2.mark.coordinates.y, ctx_r2.factor.height))("left", ctx_r2.scale(ctx_r2.mark.coordinates.x, ctx_r2.factor.width))("width", ctx_r2.isIcon || ctx_r2.isRoom ? "auto" : ctx_r2.scale(ctx_r2.mark.coordinates.size, ctx_r2.factor.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r2.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "_" + ctx_r2.mark.type)("nz-tooltip", ctx_r2.mark.tooltip)("nzTooltipMouseEnterDelay", 0.5)("nzPopoverTrigger", "click")("nzPopoverPlacement", "top")("nzPopoverOverlayClassName", "_collapse-padding _mark-popover _" + (ctx_r2.mark == null ? null : ctx_r2.mark.logicType))("nzPopoverContent", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function MapMarkComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function MapMarkComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapMarkComponent_ng_template_3_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MapMarkComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("size", ctx_r4.scale(ctx_r4.mark.coordinates.size, (ctx_r4.factor.width + ctx_r4.factor.height) / 2))("top", ctx_r4.scale(ctx_r4.mark.coordinates.y, ctx_r4.factor.height))("left", ctx_r4.scale(ctx_r4.mark.coordinates.x, ctx_r4.factor.width))("width", ctx_r4.isIcon || ctx_r4.isRoom ? "auto" : ctx_r4.scale(ctx_r4.mark.coordinates.size, ctx_r4.factor.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r4.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "_" + ctx_r4.mark.type)("nzPopoverTrigger", "click")("nzPopoverContent", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function MapMarkComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
} }
function MapMarkComponent_ng_template_5_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r19.mark.icon);
} }
function MapMarkComponent_ng_template_5_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r20.mark.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r20.mark.id);
} }
function MapMarkComponent_ng_template_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_green", ctx_r21.mark.logicType === "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r21.mark.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r21.mark.id);
} }
function MapMarkComponent_ng_template_5_div_5_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", "scale(" + ctx_r23.factor.width + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r23.mark.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r23.mark.id);
} }
function MapMarkComponent_ng_template_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MapMarkComponent_ng_template_5_div_5_img_1_Template, 1, 4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r22.mark.size.height * ctx_r22.factor.height, "px")("width", ctx_r22.mark.size.width * ctx_r22.factor.width, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.mark.img);
} }
function MapMarkComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MapMarkComponent_ng_template_5_div_1_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MapMarkComponent_ng_template_5_i_2_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MapMarkComponent_ng_template_5_img_3_Template, 1, 2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MapMarkComponent_ng_template_5_div_4_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MapMarkComponent_ng_template_5_div_5_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.hasPermanentAssignment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.visibleImg && ctx_r6.mark.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.visibleUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isRoom);
} }
function MapMarkComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "perfect-scrollbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r8.mark.tooltip, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class MapMarkComponent {
    constructor($map) {
        this.$map = $map;
        this.markImg = _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_MAP_MARK"];
        this.mark = null;
        this.isIcon = false;
        this.visibleImg = false;
        this.visibleUser = false;
        this.isRoom = false;
        this.isDragged = false;
        this.hasPermanentAssignment = false;
        this.factor = { width: 1, height: 1, arx: 1, ary: 1 };
        this.hiddenMarksTypes = [];
        this.isDraggedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set inputMark(mark) {
        const { icon, img, logicType } = mark;
        this.mark = mark;
        this.id = mark.id;
        this.isIcon = icon && !img;
        this.visibleImg =
            logicType === 'Workplace' || logicType === 'POI' || logicType === 'ParkingLot' || !logicType;
        this.visibleUser = logicType === 'User' || logicType === 'Users';
        this.isRoom = logicType === 'Room';
        this.hasPermanentAssignment =
            mark.relativePlace && mark.relativePlace.labelIdPermanentAssignment > 0;
    }
    set inputIsDragged(isDragged) {
        var _a;
        this.isDragged = isDragged;
        (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.hide();
        this.hidePopup();
    }
    get hidden() {
        return this.hiddenMarksTypes.includes(this.mark.logicType);
    }
    scale(value, factor) {
        return value * factor + 'px';
    }
    showPopup() {
        var _a;
        (_a = this.popupover) === null || _a === void 0 ? void 0 : _a.show();
    }
    hidePopup() {
        var _a;
        (_a = this.popupover) === null || _a === void 0 ? void 0 : _a.hide();
    }
    onClick($event) {
        if (this.isDragged) {
            $event.stopImmediatePropagation();
            return;
        }
        if (this.mark.onClick) {
            this.mark.onClick(this.mark);
        }
        this.$map.mark$.next(this.mark);
    }
    ngOnDestroy() { }
}
MapMarkComponent.ɵfac = function MapMarkComponent_Factory(t) { return new (t || MapMarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_map_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"])); };
MapMarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapMarkComponent, selectors: [["app-map-mark"]], viewQuery: function MapMarkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__["NzPopoverDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popupover = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, inputs: { inputMark: ["mark", "inputMark"], factor: "factor", hiddenMarksTypes: "hiddenMarksTypes", inputIsDragged: ["isDragged", "inputIsDragged"] }, outputs: { isDraggedChange: "isDraggedChange" }, decls: 9, vars: 1, consts: [[4, "ngTemplateOutlet"], ["withPopupTpl", ""], ["withOutPopupTpl", ""], ["iconAndImgTpl", ""], ["popoverTpl", ""], ["nz-popover", "", 1, "map-mark", 3, "ngClass", "nz-tooltip", "nzTooltipMouseEnterDelay", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOverlayClassName", "nzPopoverContent", "click"], ["popoverContentTpl", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-popover", "", 1, "map-mark", 3, "ngClass", "nzPopoverTrigger", "nzPopoverContent", "click"], [1, "icon-and-img-tpl"], ["class", "map-mark__assignment", 4, "ngIf"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType", 4, "ngIf"], ["class", "map-mark__img", 3, "src", "alt", 4, "ngIf"], ["class", "map-mark__user", 3, "_green", 4, "ngIf"], ["class", "map-mark__room", 3, "height", "width", 4, "ngIf"], [1, "map-mark__assignment"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "map-mark__img", 3, "src", "alt"], [1, "map-mark__user"], ["nz-icon", "", "nzType", "icons:mark", 1, "map-mark__user-mark"], [1, "map-mark__user-avatar", 3, "src", "alt"], [1, "map-mark__room"], ["class", "map-mark__img", 3, "src", "alt", "transform", 4, "ngIf"], [1, "map-mark__popover"], [3, "innerHTML"]], template: function MapMarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MapMarkComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MapMarkComponent_ng_template_1_Template, 4, 18, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MapMarkComponent_ng_template_3_Template, 2, 14, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MapMarkComponent_ng_template_5_Template, 6, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MapMarkComponent_ng_template_7_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.mark.popup ? _r1 : _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__["NzPopoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"]], styles: [".map-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n}\n.map-mark__room[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.map-mark__room[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 64px;\n  opacity: 0.5;\n  width: 64px;\n}\n.map-mark__assignment[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5px;\n  width: 5px;\n  background-color: #ff4d4f;\n  border-radius: 50%;\n}\n.map-mark__user[_ngcontent-%COMP%] {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -100%);\n  width: 10px;\n  height: 10px;\n  display: block;\n  position: relative;\n}\n.map-mark__user._green[_ngcontent-%COMP%]   .map-mark__user-mark[_ngcontent-%COMP%] {\n  color: #73d13d;\n}\n.map-mark__user-avatar[_ngcontent-%COMP%] {\n  transform: translate(0%, -40%) scale(0.8);\n  position: absolute;\n  display: block;\n  border-radius: 50%;\n  width: 100%;\n}\n.map-mark__user-mark[_ngcontent-%COMP%] {\n  display: block;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  color: #40a9ff;\n  position: absolute;\n}\n.map-mark__popover[_ngcontent-%COMP%], .map-mark__popover[_ngcontent-%COMP%]     .ps, .map-mark__popover[_ngcontent-%COMP%]     .ps-content {\n  max-height: 33vh;\n  max-width: 33vw;\n}\n.map-mark._default[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.map-mark._success[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #52c41a;\n}\n.map-mark._info[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #40a9ff;\n}\n.map-mark._danger[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #ff4d4f;\n}\n.map-mark._warning[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #faad14;\n}\n.map-mark__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  object-fit: cover;\n}\n  ._collapse-padding .ant-popover-inner-content {\n  padding: 0;\n}\n.icon-and-img-tpl[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1tYXJrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWhCRDtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWtCRjtBQWhCRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBa0JKO0FBaEJJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBa0JOO0FBZEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWdCSjtBQWJFO0VBSUUsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBWUo7QUFyQkk7RUFDRSxjQUFBO0FBdUJOO0FBYkk7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWVOO0FBWkk7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFjTjtBQVRJOzs7RUFHRSxnQkFBQTtFQUNBLGVBQUE7QUFXTjtBQVBFO0VBQ0UsNkJBQUE7QUFTSjtBQU5FO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBUUo7QUFMRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQU9KO0FBSkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFNSjtBQUhFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBS0o7QUFGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSUo7QUFBQTtFQUNFLFVBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im1hcC1tYXJrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvdGhlbWUvb3ZlcnJpZGVcIjtcblxuLm1hcC1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcblxuICAmX19yb29tIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmID4gaW1nIHtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2Fzc2lnbm1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEByZWQtNTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAmX191c2VyIHtcbiAgICAmLl9ncmVlbiAubWFwLW1hcmtfX3VzZXItbWFyayB7XG4gICAgICBjb2xvcjogQGdyZWVuLTU7XG4gICAgfVxuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYtYXZhdGFyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNDAlKSBzY2FsZSgwLjgpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmLW1hcmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6IEBibHVlLTU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICB9XG5cbiAgJl9fcG9wb3ZlciB7XG4gICAgJixcbiAgICA6Om5nLWRlZXAgLnBzLFxuICAgIDo6bmctZGVlcCAucHMtY29udGVudCB7XG4gICAgICBtYXgtaGVpZ2h0OiAzM3ZoO1xuICAgICAgbWF4LXdpZHRoOiAzM3Z3O1xuICAgIH1cbiAgfVxuXG4gICYuX2RlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJi5fc3VjY2VzcyB7XG4gICAgY29sb3I6IEBncmF5LTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGdyZWVuLTY7XG4gIH1cblxuICAmLl9pbmZvIHtcbiAgICBjb2xvcjogQGdyYXktMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmx1ZS01O1xuICB9XG5cbiAgJi5fZGFuZ2VyIHtcbiAgICBjb2xvcjogQGdyYXktMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcmVkLTU7XG4gIH1cblxuICAmLl93YXJuaW5nIHtcbiAgICBjb2xvcjogQGdyYXktMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ29sZC02O1xuICB9XG5cbiAgJl9faW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5fY29sbGFwc2UtcGFkZGluZyAuYW50LXBvcG92ZXItaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pY29uLWFuZC1pbWctdHBsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], MapMarkComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapMarkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map-mark',
                templateUrl: './map-mark.component.html',
                styleUrls: ['./map-mark.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _base_map_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"] }]; }, { sub: [], inputMark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mark']
        }], factor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hiddenMarksTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputIsDragged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['isDragged']
        }], isDraggedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], popupover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__["NzPopoverDirective"]]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"]]
        }] }); })();


/***/ }),

/***/ "k+QC":
/*!****************************************!*\
  !*** ./src/app/base/map/map.module.ts ***!
  \****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/map/map.component */ "6DYN");
/* harmony import */ var _base_map_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/map/map.service */ "Bnie");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-mark/map-mark.component */ "hHWn");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _map_zoom_map_zoom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map-zoom/map-zoom.component */ "KfK1");
/* harmony import */ var _shared_http_http_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/http/http.module */ "zOLR");
/* harmony import */ var _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map-controls/map-controls.component */ "Cfzv");
















class MapModule {
}
MapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapModule_Factory(t) { return new (t || MapModule)(); }, providers: [_base_map_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_5__["NzSliderModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzToolTipModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__["NzPopoverModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _shared_http_http_module__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_base_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"],
        _map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_8__["MapMarkComponent"],
        _map_zoom_map_zoom_component__WEBPACK_IMPORTED_MODULE_12__["MapZoomComponent"],
        _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_14__["MapControlsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_5__["NzSliderModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzToolTipModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__["NzPopoverModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _shared_http_http_module__WEBPACK_IMPORTED_MODULE_13__["HttpModule"]], exports: [_base_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"],
        _map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_8__["MapMarkComponent"],
        _map_zoom_map_zoom_component__WEBPACK_IMPORTED_MODULE_12__["MapZoomComponent"],
        _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_14__["MapControlsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _base_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"],
                    _map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_8__["MapMarkComponent"],
                    _map_zoom_map_zoom_component__WEBPACK_IMPORTED_MODULE_12__["MapZoomComponent"],
                    _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_14__["MapControlsComponent"],
                ],
                exports: [
                    _base_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"],
                    _map_mark_map_mark_component__WEBPACK_IMPORTED_MODULE_8__["MapMarkComponent"],
                    _map_zoom_map_zoom_component__WEBPACK_IMPORTED_MODULE_12__["MapZoomComponent"],
                    _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_14__["MapControlsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_5__["NzSliderModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzToolTipModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
                    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__["NzPopoverModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _shared_http_http_module__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
                ],
                providers: [_base_map_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]],
            }]
    }], null, null); })();


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
//# sourceMappingURL=default~develop-develop-module~offices-map-offices-map-module~reservations-reservations-module~team-~9c949e03.js.map