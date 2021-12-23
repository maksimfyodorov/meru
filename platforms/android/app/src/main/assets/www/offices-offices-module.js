(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offices-offices-module"],{

/***/ "0dH1":
/*!***********************************************************************!*\
  !*** ./node_modules/ng-sortgrid/__ivy_ngcc__/fesm2015/ng-sortgrid.js ***!
  \***********************************************************************/
/*! exports provided: NgsgItemDirective, NgsgModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgItemDirective", function() { return NgsgItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsgModule", function() { return NgsgModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgsgSortService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgsgClassService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgsgStoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgsgSelectionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgsgReflectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgsgEventsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ScrollHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/element/ngsg-elements.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NgsgElementsHelper {
    /**
     * @param {?} element
     * @return {?}
     */
    static findIndex(element) {
        /** @type {?} */
        const allElements = element.parentNode.children;
        return Array.prototype.indexOf.call(allElements, element);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/scroll/scroll-helper.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ScrollPoints() { }
if (false) {}
class ScrollHelperService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.DEFAULT_SCROLLSPEED = 50;
        this.SCROLL_BUFFER = 50;
        this.window = document.defaultView;
    }
    /**
     * @param {?} event
     * @param {?=} scrollPoints
     * @param {?=} scrollSpeed
     * @return {?}
     */
    scrollIfNecessary(event, scrollPoints = {}, scrollSpeed) {
        /** @type {?} */
        const currentPosition = event.pageY - this.window.scrollY;
        if (this.isTopScrollNeeded(currentPosition, scrollPoints.top)) {
            this.window.scrollBy({ top: -scrollSpeed || -this.DEFAULT_SCROLLSPEED, behavior: 'smooth' });
            return;
        }
        if (this.isBottomScrollNeeded(currentPosition, scrollPoints.bottom)) {
            this.window.scrollBy({ top: scrollSpeed || this.DEFAULT_SCROLLSPEED, behavior: 'smooth' });
        }
    }
    /**
     * @private
     * @param {?} currentPosition
     * @param {?} scrollPointTop
     * @return {?}
     */
    isTopScrollNeeded(currentPosition, scrollPointTop) {
        return scrollPointTop ? currentPosition < scrollPointTop :
            currentPosition < this.SCROLL_BUFFER;
    }
    /**
     * @private
     * @param {?} currentPosition
     * @param {?} scrollPointBottom
     * @return {?}
     */
    isBottomScrollNeeded(currentPosition, scrollPointBottom) {
        return scrollPointBottom ? currentPosition > scrollPointBottom :
            currentPosition > this.window.innerHeight - this.SCROLL_BUFFER;
    }
}
ScrollHelperService.ɵfac = function ScrollHelperService_Factory(t) { return new (t || ScrollHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
/** @nocollapse */
ScrollHelperService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
/** @nocollapse */ ScrollHelperService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollHelperService_Factory() { return new ScrollHelperService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: ScrollHelperService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/class/ngsg-class.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsgClassService {
    constructor() {
        this.SELECTED_DEFAULT_CLASS = 'ng-sg-selected';
        this.PLACEHOLDER_DEFAULT_CLASS = 'ng-sg-placeholder';
        this.DROPPED_DEFAULT_CLASS = 'ng-sg-dropped';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    addPlaceHolderClass(element) {
        element.classList.add(this.PLACEHOLDER_DEFAULT_CLASS);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removePlaceHolderClass(element) {
        element.classList.remove(this.PLACEHOLDER_DEFAULT_CLASS);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    addDroppedClass(element) {
        element.classList.add(this.DROPPED_DEFAULT_CLASS);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeDroppedClass(element) {
        element.classList.remove(this.DROPPED_DEFAULT_CLASS);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    addSelectedClass(element) {
        element.classList.add(this.SELECTED_DEFAULT_CLASS);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeSelectedClass(element) {
        element.classList.remove(this.SELECTED_DEFAULT_CLASS);
    }
}
NgsgClassService.ɵfac = function NgsgClassService_Factory(t) { return new (t || NgsgClassService)(); };
/** @nocollapse */ NgsgClassService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgsgClassService_Factory() { return new NgsgClassService(); }, token: NgsgClassService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgClassService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store/ngsg-store.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgsgState() { }
if (false) {}
class NgsgStoreService {
    constructor() {
        this.state = new Map();
    }
    /**
     * @param {?} group
     * @param {?=} items
     * @param {?=} classes
     * @return {?}
     */
    initState(group, items = [], classes = {}) {
        this.state.set(group, { items: [...items], classes, selectedItems: [] });
    }
    /**
     * @param {?} group
     * @param {?} dragElement
     * @return {?}
     */
    addSelectedItem(group, dragElement) {
        this.state.get(group).selectedItems.push(dragElement);
    }
    /**
     * @param {?} group
     * @param {?} item
     * @return {?}
     */
    removeSelectedItem(group, item) {
        /** @type {?} */
        const updatedItems = this.state.get(group).selectedItems
            .filter((/**
         * @param {?} dragElement
         * @return {?}
         */
        (dragElement) => dragElement.node !== item));
        this.setSelectedItems(group, updatedItems);
    }
    /**
     * @param {?} group
     * @param {?} items
     * @return {?}
     */
    setItems(group, items) {
        this.state.get(group).items = [...items];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    getItems(group) {
        return this.state.get(group).items;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    hasItems(group) {
        return this.getItems(group).length > 0;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    hasGroup(group) {
        return this.state.has(group);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    getSelectedItems(group) {
        return this.state.get(group).selectedItems;
    }
    /**
     * @param {?} group
     * @param {?} selectedItems
     * @return {?}
     */
    setSelectedItems(group, selectedItems) {
        this.state.get(group).selectedItems = [...selectedItems];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    getFirstSelectItem(group) {
        return this.state.get(group).selectedItems[0];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    hasSelectedItems(group) {
        return this.getSelectedItems(group).length > 0;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    resetSelectedItems(group) {
        this.setSelectedItems(group, []);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    getClasses(group) {
        return this.state.get(group).classes;
    }
}
NgsgStoreService.ɵfac = function NgsgStoreService_Factory(t) { return new (t || NgsgStoreService)(); };
/** @nocollapse */ NgsgStoreService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgsgStoreService_Factory() { return new NgsgStoreService(); }, token: NgsgStoreService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/mutliselect/ngsg-selection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ChangeAction = {
    ADD: 0,
    REMOVE: 1,
};
ChangeAction[ChangeAction.ADD] = 'ADD';
ChangeAction[ChangeAction.REMOVE] = 'REMOVE';
/**
 * @record
 */
function SelectionChange() { }
if (false) {}
class NgsgSelectionService {
    /**
     * @param {?} classService
     * @param {?} ngsgStore
     */
    constructor(classService, ngsgStore) {
        this.classService = classService;
        this.ngsgStore = ngsgStore;
        this.COMMAND_KEY = 'Meta';
        this.CONTROL_KEY = 'Control';
        this.selectionChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** @type {?} */
        const selectionKeyPressed$ = this.selectionKeyPressed();
        this.selectionChange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(selectionKeyPressed$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([selectionChange, selectionKeyPressed]) => {
            selectionKeyPressed
                ? this.handleSelectionChange(selectionChange)
                : this.resetSelectedItems(selectionChange.key);
        }));
    }
    /**
     * @private
     * @param {?} group
     * @return {?}
     */
    resetSelectedItems(group) {
        this.ngsgStore.getSelectedItems(group).forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => this.classService.removeSelectedClass(item.node)));
        this.ngsgStore.resetSelectedItems(group);
    }
    /**
     * @private
     * @param {?} selectionChange
     * @return {?}
     */
    handleSelectionChange(selectionChange) {
        if (selectionChange.action === ChangeAction.ADD) {
            this.classService.addSelectedClass(selectionChange.item);
            this.ngsgStore.addSelectedItem(selectionChange.key, {
                node: selectionChange.item,
                originalIndex: NgsgElementsHelper.findIndex(selectionChange.item)
            });
        }
        if (selectionChange.action === ChangeAction.REMOVE) {
            this.classService.removeSelectedClass(selectionChange.item);
            this.ngsgStore.removeSelectedItem(selectionChange.key, selectionChange.item);
        }
    }
    /**
     * @private
     * @return {?}
     */
    selectionKeyPressed() {
        /** @type {?} */
        const selectionKeyPressed = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} keyboardEvent
         * @return {?}
         */
        (keyboardEvent) => keyboardEvent.key === this.COMMAND_KEY || keyboardEvent.key === this.CONTROL_KEY)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(true));
        /** @type {?} */
        const keyup = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(false));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(selectionKeyPressed, keyup);
    }
    /**
     * @param {?} group
     * @param {?} dragedElement
     * @return {?}
     */
    selectElementIfNoSelection(group, dragedElement) {
        if (this.ngsgStore.hasSelectedItems(group)) {
            return;
        }
        this.ngsgStore.addSelectedItem(group, {
            node: dragedElement,
            originalIndex: NgsgElementsHelper.findIndex(dragedElement)
        });
    }
    /**
     * @param {?} key
     * @param {?} item
     * @param {?} selected
     * @return {?}
     */
    updateSelectedDragItem(key, item, selected) {
        this.selectionChange$.next({
            key,
            item,
            action: selected ? ChangeAction.ADD : ChangeAction.REMOVE
        });
    }
}
NgsgSelectionService.ɵfac = function NgsgSelectionService_Factory(t) { return new (t || NgsgSelectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgsgClassService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgsgStoreService)); };
/** @nocollapse */
NgsgSelectionService.ctorParameters = () => [
    { type: NgsgClassService },
    { type: NgsgStoreService }
];
/** @nocollapse */ NgsgSelectionService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgsgSelectionService_Factory() { return new NgsgSelectionService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgsgClassService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgsgStoreService)); }, token: NgsgSelectionService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgSelectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NgsgClassService }, { type: NgsgStoreService }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/ngsg-events.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsgEventsService {
    constructor() {
        this.dropped$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
NgsgEventsService.ɵfac = function NgsgEventsService_Factory(t) { return new (t || NgsgEventsService)(); };
/** @nocollapse */ NgsgEventsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgsgEventsService_Factory() { return new NgsgEventsService(); }, token: NgsgEventsService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgEventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sort/reflection/ngsg-reflect.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsgReflectService {
    /**
     * @param {?} ngsgStore
     */
    constructor(ngsgStore) {
        this.ngsgStore = ngsgStore;
    }
    /**
     * @param {?} key
     * @param {?} element
     * @return {?}
     */
    reflectChanges(key, element) {
        /** @type {?} */
        const items = this.ngsgStore.getItems(key);
        /** @type {?} */
        const selectedElements = this.ngsgStore.getSelectedItems(key);
        /** @type {?} */
        const selectedElementIndices = this.getSelectedElementsIndices(selectedElements);
        /** @type {?} */
        const selectedItems = this.getSelectedItems(items, selectedElementIndices);
        /** @type {?} */
        const sortedIndices = selectedElementIndices.sort();
        /** @type {?} */
        const dropIndex = this.findDropIndex(selectedElements, element);
        while (sortedIndices.length > 0) {
            items.splice(sortedIndices.pop(), 1);
        }
        /** @type {?} */
        const result = this.getReflectedItems(items, selectedItems, dropIndex);
        this.ngsgStore.setItems(key, result);
        return result;
    }
    /**
     * @private
     * @param {?} items
     * @param {?} selectedItems
     * @param {?} dropIndex
     * @return {?}
     */
    getReflectedItems(items, selectedItems, dropIndex) {
        /** @type {?} */
        const beforeSelection = items.slice(0, dropIndex);
        /** @type {?} */
        const afterSelection = items.slice(dropIndex, items.length);
        return [...beforeSelection, ...selectedItems, ...afterSelection];
    }
    /**
     * @private
     * @param {?} items
     * @param {?} selectedElementIndexes
     * @return {?}
     */
    getSelectedItems(items, selectedElementIndexes) {
        /** @type {?} */
        const selectedItems = [];
        selectedElementIndexes.forEach((/**
         * @param {?} index
         * @return {?}
         */
        index => {
            selectedItems.push(items[index]);
        }));
        return selectedItems;
    }
    /**
     * @private
     * @param {?} selectedElements
     * @return {?}
     */
    getSelectedElementsIndices(selectedElements) {
        return selectedElements.map((/**
         * @param {?} selectedElement
         * @return {?}
         */
        (selectedElement) => selectedElement.originalIndex));
    }
    /**
     * @private
     * @param {?} selectedElements
     * @param {?} element
     * @return {?}
     */
    findDropIndex(selectedElements, element) {
        if (this.isDropInSelection(selectedElements, element)) {
            return NgsgElementsHelper.findIndex(selectedElements[0].node);
        }
        return NgsgElementsHelper.findIndex(element);
    }
    /**
     * @private
     * @param {?} collection
     * @param {?} dropElement
     * @return {?}
     */
    isDropInSelection(collection, dropElement) {
        return !!collection.find((/**
         * @param {?} dragElment
         * @return {?}
         */
        (dragElment) => dragElment.node === dropElement));
    }
}
NgsgReflectService.ɵfac = function NgsgReflectService_Factory(t) { return new (t || NgsgReflectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgsgStoreService)); };
/** @nocollapse */
NgsgReflectService.ctorParameters = () => [
    { type: NgsgStoreService }
];
/** @nocollapse */ NgsgReflectService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgsgReflectService_Factory() { return new NgsgReflectService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgsgStoreService)); }, token: NgsgReflectService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgReflectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NgsgStoreService }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sort/sort/ngsg-sort.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsgSortService {
    /**
     * @param {?} classService
     * @param {?} ngsgStore
     */
    constructor(classService, ngsgStore) {
        this.classService = classService;
        this.ngsgStore = ngsgStore;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    initSort(group) {
        this.dragIndex = this.ngsgStore.getFirstSelectItem(group).originalIndex;
        this.dragElements = this.ngsgStore.getSelectedItems(group);
    }
    /**
     * @param {?} dropElement
     * @return {?}
     */
    sort(dropElement) {
        /** @type {?} */
        const hoverIndex = NgsgElementsHelper.findIndex(dropElement);
        /** @type {?} */
        const el = this.getSibling(dropElement, this.dragIndex, hoverIndex);
        if (this.isDropInSelection(el)) {
            return;
        }
        this.dragElements.forEach((/**
         * @param {?} dragElement
         * @return {?}
         */
        (dragElement) => {
            /** @type {?} */
            const insertedNode = dropElement.parentNode.insertBefore(dragElement.node, el.node);
            this.classService.addPlaceHolderClass((/** @type {?} */ (insertedNode)));
        }));
        this.dragIndex = NgsgElementsHelper.findIndex(this.dragElements[0].node);
    }
    /**
     * @return {?}
     */
    endSort() {
        this.dragElements.forEach((/**
         * @param {?} dragElement
         * @return {?}
         */
        (dragElement) => {
            this.updateDropedItem(dragElement.node);
        }));
    }
    /**
     * @private
     * @param {?} dropElement
     * @param {?} dragIndex
     * @param {?} hoverIndex
     * @return {?}
     */
    getSibling(dropElement, dragIndex, hoverIndex) {
        if (dragIndex < hoverIndex) {
            return { node: dropElement.nextSibling, originalIndex: hoverIndex + 1 };
        }
        return { node: dropElement, originalIndex: hoverIndex };
    }
    /**
     * @private
     * @param {?} dropElement
     * @return {?}
     */
    isDropInSelection(dropElement) {
        return !!this.dragElements.find((/**
         * @param {?} dragElment
         * @return {?}
         */
        (dragElment) => dragElment.node === dropElement.node));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    updateDropedItem(item) {
        this.classService.removePlaceHolderClass(item);
        this.classService.addDroppedClass(item);
        this.classService.removeSelectedClass(item);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(500).subscribe((/**
         * @return {?}
         */
        () => this.classService.removeDroppedClass(item)));
    }
}
NgsgSortService.ɵfac = function NgsgSortService_Factory(t) { return new (t || NgsgSortService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgsgClassService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgsgStoreService)); };
/** @nocollapse */
NgsgSortService.ctorParameters = () => [
    { type: NgsgClassService },
    { type: NgsgStoreService }
];
/** @nocollapse */ NgsgSortService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgsgSortService_Factory() { return new NgsgSortService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgsgClassService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgsgStoreService)); }, token: NgsgSortService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgSortService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NgsgClassService }, { type: NgsgStoreService }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngsg-item.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const selector = '[ngSortgridItem]';
class NgsgItemDirective {
    /**
     * @param {?} el
     * @param {?} sortService
     * @param {?} selectionService
     * @param {?} reflectService
     * @param {?} ngsgStore
     * @param {?} ngsgEventService
     * @param {?} scrollHelperService
     */
    constructor(el, sortService, selectionService, reflectService, ngsgStore, ngsgEventService, scrollHelperService) {
        this.el = el;
        this.sortService = sortService;
        this.selectionService = selectionService;
        this.reflectService = reflectService;
        this.ngsgStore = ngsgStore;
        this.ngsgEventService = ngsgEventService;
        this.scrollHelperService = scrollHelperService;
        this.ngSortGridGroup = 'defaultGroup';
        this.autoScroll = false;
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngsgEventService.dropped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.selected = false));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.el.nativeElement, 'drag').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])((/**
         * @return {?}
         */
        () => this.autoScroll))).subscribe((/**
         * @return {?}
         */
        () => {
            this.scrollHelperService.scrollIfNecessary(event, {
                top: this.scrollPointTop,
                bottom: this.scrollPointBottom
            }, this.scrollSpeed);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const sortGridItemChanges = changes.ngSortGridItems;
        /** @type {?} */
        const sortGridItems = sortGridItemChanges.currentValue ? sortGridItemChanges.currentValue : [];
        if (!this.ngsgStore.hasGroup(this.ngSortGridGroup)) {
            this.ngsgStore.initState(this.ngSortGridGroup, sortGridItems);
            return;
        }
        this.ngsgStore.setItems(this.ngSortGridGroup, sortGridItems);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.el.nativeElement.draggable = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart(event) {
        if (!this.occuredOnHost(event)) {
            return;
        }
        this.selectionService.selectElementIfNoSelection(this.ngSortGridGroup, event.target);
        this.sortService.initSort(this.ngSortGridGroup);
    }
    /**
     * @return {?}
     */
    dragEnter() {
        if (!this.ngsgStore.hasSelectedItems(this.ngSortGridGroup)) {
            return;
        }
        this.sortService.sort(this.el.nativeElement);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragOver(event) {
        if (event.preventDefault) {
            // Necessary. Allows us to drop.
            event.preventDefault();
        }
        return false;
    }
    /**
     * @return {?}
     */
    drop() {
        if (!this.ngsgStore.hasSelectedItems(this.ngSortGridGroup)) {
            return;
        }
        if (!this.ngsgStore.hasItems(this.ngSortGridGroup)) {
            console.warn(`Ng-sortgrid: No items provided - please use [sortGridItems] to pass in an array of items -
      otherwhise the ordered items can not be emitted in the (sorted) event`);
            return;
        }
        /** @type {?} */
        const previousOrder = [...this.ngsgStore.getItems(this.ngSortGridGroup)];
        this.sortService.endSort();
        /** @type {?} */
        const currentOrder = this.reflectService.reflectChanges(this.ngSortGridGroup, this.el.nativeElement);
        this.sorted.next({ previousOrder, currentOrder });
        this.ngsgStore.resetSelectedItems(this.ngSortGridGroup);
        this.ngsgEventService.dropped$.next();
    }
    /**
     * @return {?}
     */
    clicked() {
        this.selected = !this.isItemCurrentlySelected();
        this.selectionService.updateSelectedDragItem(this.ngSortGridGroup, this.el.nativeElement, this.selected);
    }
    /**
     * @private
     * @return {?}
     */
    isItemCurrentlySelected() {
        /** @type {?} */
        const index = NgsgElementsHelper.findIndex(this.el.nativeElement);
        return !!this.ngsgStore.getSelectedItems(this.ngSortGridGroup)
            .find((/**
         * @param {?} element
         * @return {?}
         */
        element => element.originalIndex === index));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    occuredOnHost(event) {
        return event.target.matches(selector);
    }
}
NgsgItemDirective.ɵfac = function NgsgItemDirective_Factory(t) { return new (t || NgsgItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgsgSortService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgsgSelectionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgsgReflectService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgsgStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgsgEventsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollHelperService)); };
NgsgItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgsgItemDirective, selectors: [["", "ngSortgridItem", ""]], hostBindings: function NgsgItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function NgsgItemDirective_dragstart_HostBindingHandler($event) { return ctx.dragStart($event); })("dragenter", function NgsgItemDirective_dragenter_HostBindingHandler() { return ctx.dragEnter(); })("dragover", function NgsgItemDirective_dragover_HostBindingHandler($event) { return ctx.dragOver($event); })("dragend", function NgsgItemDirective_dragend_HostBindingHandler() { return ctx.drop(); })("click", function NgsgItemDirective_click_HostBindingHandler() { return ctx.clicked(); });
    } }, inputs: { ngSortGridGroup: "ngSortGridGroup", autoScroll: "autoScroll", ngSortGridItems: "ngSortGridItems", scrollPointTop: "scrollPointTop", scrollPointBottom: "scrollPointBottom", scrollSpeed: "scrollSpeed" }, outputs: { sorted: "sorted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NgsgItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: NgsgSortService },
    { type: NgsgSelectionService },
    { type: NgsgReflectService },
    { type: NgsgStoreService },
    { type: NgsgEventsService },
    { type: ScrollHelperService }
];
NgsgItemDirective.propDecorators = {
    ngSortGridGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ngSortGridItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollPointTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollPointBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragstart', ['$event'],] }],
    dragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragenter',] }],
    dragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragend',] }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: NgsgSortService }, { type: NgsgSelectionService }, { type: NgsgReflectService }, { type: NgsgStoreService }, { type: NgsgEventsService }, { type: ScrollHelperService }]; }, { ngSortGridGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragstart', ['$event']]
        }], 
    /**
     * @return {?}
     */
    dragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragenter']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    dragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], 
    /**
     * @return {?}
     */
    drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragend']
        }], 
    /**
     * @return {?}
     */
    clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], ngSortGridItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollPointTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollPointBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngsg.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsgModule {
}
NgsgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgsgModule });
NgsgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgsgModule_Factory(t) { return new (t || NgsgModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgsgModule, { declarations: [NgsgItemDirective], exports: [NgsgItemDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgsgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgsgItemDirective],
                exports: [NgsgItemDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/ngsg-order-change.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function NgsgOrderChange() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-sortgrid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-sortgrid.js.map

/***/ }),

/***/ "2Gva":
/*!****************************************************************!*\
  !*** ./src/app/presentation/offices/offices-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: OfficesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesRoutingModule", function() { return OfficesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_offices_offices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/offices/offices.component */ "p/Ox");
/* harmony import */ var _presentation_offices_offices_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/offices/offices.guard */ "2clf");






const routes = [
    {
        path: '',
        component: _presentation_offices_offices_component__WEBPACK_IMPORTED_MODULE_2__["OfficesComponent"],
        data: {
            title: 'Список офисов'
        }
    },
    {
        path: ':floorId',
        loadChildren: () => Promise.all(/*! import() | offices-map-offices-map-module */[__webpack_require__.e("default~develop-develop-module~offices-map-offices-map-module~reservations-reservations-module~team-~9c949e03"), __webpack_require__.e("default~dashboard-dashboard-module~offices-map-offices-map-module~reservation-create-reservation-cre~c1eb1ab2"), __webpack_require__.e("default~offices-map-offices-map-module~reservation-create-reservation-create-module~team-create-team~5c833816"), __webpack_require__.e("common"), __webpack_require__.e("offices-map-offices-map-module")]).then(__webpack_require__.bind(null, /*! ./offices-map/offices-map.module */ "l/C8")).then(({ OfficesMapModule }) => OfficesMapModule),
    }
];
class OfficesRoutingModule {
}
OfficesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OfficesRoutingModule });
OfficesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OfficesRoutingModule_Factory(t) { return new (t || OfficesRoutingModule)(); }, providers: [_presentation_offices_offices_guard__WEBPACK_IMPORTED_MODULE_3__["OfficesGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_presentation_offices_offices_guard__WEBPACK_IMPORTED_MODULE_3__["OfficesGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "2clf":
/*!*******************************************************!*\
  !*** ./src/app/presentation/offices/offices.guard.ts ***!
  \*******************************************************/
/*! exports provided: OfficesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesGuard", function() { return OfficesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OfficesGuard {
    canActivate(route, state) {
        return true;
    }
}
OfficesGuard.ɵfac = function OfficesGuard_Factory(t) { return new (t || OfficesGuard)(); };
OfficesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OfficesGuard, factory: OfficesGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "C2Ty":
/*!***********************************************************!*\
  !*** ./src/app/base/office-card/office-card.component.ts ***!
  \***********************************************************/
/*! exports provided: OfficeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeCardComponent", function() { return OfficeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_office_card_office_card_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/office-card/office-card.utils */ "CIHO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function OfficeCardComponent_ng_container_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const place_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r2.PLACES_INFO[place_r1.type].icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx_r2.PLACES_INFO[place_r1.type].title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "Offices.Free"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](place_r1.freePlaceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "Offices.Available"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](place_r1.availablePlaceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, "Offices.Busy"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](place_r1.busyPlaceAmount);
} }
function OfficeCardComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OfficeCardComponent_ng_container_18_div_1_Template, 21, 16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const place_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", place_r1.availablePlaceAmount || place_r1.freePlaceAmount || place_r1.busyPlaceAmount);
} }
class OfficeCardComponent {
    constructor() {
        this.PLACES_INFO = _base_office_card_office_card_utils__WEBPACK_IMPORTED_MODULE_1__["PLACES_INFO"];
        this.places = [
            {
                type: 'conversation',
                freePlaceAmount: 5,
                availablePlaceAmount: 5,
                busyPlaceAmount: 55,
            },
            {
                type: 'workplaces',
                freePlaceAmount: 1,
                availablePlaceAmount: 1,
                busyPlaceAmount: 14,
            },
            {
                type: 'wardrobes',
                freePlaceAmount: 2,
                availablePlaceAmount: 2,
                busyPlaceAmount: 18,
            },
            {
                type: 'parkinglots',
                freePlaceAmount: 0,
                availablePlaceAmount: 0,
                busyPlaceAmount: 0,
            },
        ];
        this.title = 'Default title';
        this.floor = 0;
    }
    get workload() {
        const total = this.places.reduce((acc, val) => (acc += val.busyPlaceAmount + val.freePlaceAmount), 0);
        const use = this.places.reduce((acc, val) => (acc += val.busyPlaceAmount), 0);
        return (use / total) * 100 || 0;
    }
    get headerClass() {
        return {
            _green: this.workload <= 50,
            _red: this.workload >= 80,
            _yellow: this.workload >= 51 && this.workload <= 79,
        };
    }
}
OfficeCardComponent.ɵfac = function OfficeCardComponent_Factory(t) { return new (t || OfficeCardComponent)(); };
OfficeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfficeCardComponent, selectors: [["app-office-card"]], inputs: { places: "places", title: "title", floor: "floor" }, decls: 19, vars: 14, consts: [[1, "office-card", "ant-card-hoverable"], [1, "office-card__header", "border-bottom", 3, "ngClass"], [1, "office-card__header-icon"], ["nz-icon", "", "nzType", "icons:office-building"], [1, "office-card__header-title"], [1, "office-card__title"], [1, "office-card__floor"], [1, "office-card__header-workload"], [1, "office-card__workload"], [1, "office-card__places"], [4, "ngFor", "ngForOf"], ["class", "office-card__place", 4, "ngIf"], [1, "office-card__place"], [1, "office-card__place-icon"], ["nz-icon", "", 3, "nzType"], [1, "office-card__place-title"], [1, "office-card__place-free"], [1, "office-card__place-busy"]], template: function OfficeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OfficeCardComponent_ng_container_18_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.headerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "Offices.Floor"), " ", ctx.floor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "Offices.Workload"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 11, ctx.workload, "1.0-0"), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.places);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".office-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #ffffff;\n}\n.office-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 18px;\n}\n.office-card__header._green[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, transparent 80%, #f6ffed);\n}\n.office-card__header._green[_ngcontent-%COMP%]   .office-card__workload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #389e0d;\n}\n.office-card__header._red[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, transparent 80%, #fff1f0);\n}\n.office-card__header._red[_ngcontent-%COMP%]   .office-card__workload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #cf1322;\n}\n.office-card__header._yellow[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, transparent 80%, #fffbe6);\n}\n.office-card__header._yellow[_ngcontent-%COMP%]   .office-card__workload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffc53d;\n}\n.office-card__header-title[_ngcontent-%COMP%] {\n  flex-basis: auto;\n  flex-grow: 1;\n}\n.office-card__header-icon[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  font-size: 30px;\n}\n.office-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\n.office-card__floor[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n}\n.office-card__workload[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 15px;\n}\n.office-card__workload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-style: normal;\n}\n.office-card__places[_ngcontent-%COMP%] {\n  padding: 33px 25px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.office-card__place-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.office-card__place-free[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  display: block;\n}\n.office-card__place-free[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #389e0d;\n}\n.office-card__place-available[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  display: block;\n}\n.office-card__place-available[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #389e0d;\n}\n.office-card__place-busy[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  display: block;\n}\n.office-card__place-busy[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #ff4d4f;\n}\n.office-card__place-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZS1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWpCRDtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQW1CRjtBQWxCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFvQko7QUFuQkk7RUFDRSwrREFBQTtBQXFCTjtBQXRCSTtFQUdJLGNBQUE7QUFzQlI7QUFuQkk7RUFDRSwrREFBQTtBQXFCTjtBQXRCSTtFQUdJLGNBQUE7QUFzQlI7QUFuQkk7RUFDRSwrREFBQTtBQXFCTjtBQXRCSTtFQUdJLGNBQUE7QUFzQlI7QUFuQkk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFxQk47QUFuQkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFxQk47QUFsQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBb0JKO0FBbEJFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUFvQko7QUFsQkU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUFvQko7QUF0QkU7RUFJSSxnQkFBQTtFQUNBLGtCQUFBO0FBcUJOO0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQW9CSjtBQWpCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFtQk47QUFqQkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBbUJOO0FBdEJJO0VBS0ksa0JBQUE7RUFDQSxjQUFBO0FBb0JSO0FBakJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQW1CTjtBQXRCSTtFQUtJLGtCQUFBO0VBQ0EsY0FBQTtBQW9CUjtBQWpCSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFtQk47QUF0Qkk7RUFLSSxrQkFBQTtFQUNBLGNBQUE7QUFvQlI7QUFqQkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFtQk4iLCJmaWxlIjoib2ZmaWNlLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy90aGVtZS9vdmVycmlkZVwiO1xuLm9mZmljZS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gICZfX2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgJi5fZ3JlZW4ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCA4MCUsIEBncmVlbi0xKTtcbiAgICAgIC5vZmZpY2UtY2FyZF9fd29ya2xvYWQgaSB7XG4gICAgICAgIGNvbG9yOiBAZ3JlZW4tNztcbiAgICAgIH1cbiAgICB9XG4gICAgJi5fcmVkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgODAlLCBAcmVkLTEpO1xuICAgICAgLm9mZmljZS1jYXJkX193b3JrbG9hZCBpIHtcbiAgICAgICAgY29sb3I6IEByZWQtNztcbiAgICAgIH1cbiAgICB9XG4gICAgJi5feWVsbG93IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgODAlLCBAZ29sZC0xKTtcbiAgICAgIC5vZmZpY2UtY2FyZF9fd29ya2xvYWQgaSB7XG4gICAgICAgIGNvbG9yOiBAZ29sZC01O1xuICAgICAgfVxuICAgIH1cbiAgICAmLXRpdGxlIHtcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICAgICYtaWNvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfVxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gICZfX2Zsb29yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gICZfX3dvcmtsb2FkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGkge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG4gIH1cbiAgJl9fcGxhY2VzIHtcbiAgICBwYWRkaW5nOiAzM3B4IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICZfX3BsYWNlIHtcbiAgICAmLXRpdGxlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMjBweCAwIDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAmLWZyZWUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBjb2xvcjogQGdyZWVuLTc7XG4gICAgICB9XG4gICAgfVxuICAgICYtYXZhaWxhYmxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IEBncmVlbi03O1xuICAgICAgfVxuICAgIH1cbiAgICAmLWJ1c3kge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBjb2xvcjogQHJlZC01O1xuICAgICAgfVxuICAgIH1cbiAgICAmLWljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-office-card',
                templateUrl: './office-card.component.html',
                styleUrls: ['./office-card.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { places: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], floor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "CIHO":
/*!*******************************************************!*\
  !*** ./src/app/base/office-card/office-card.utils.ts ***!
  \*******************************************************/
/*! exports provided: PLACES_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACES_INFO", function() { return PLACES_INFO; });
const PLACES_INFO = {
    conversation: {
        title: 'Offices.Negotiations',
        icon: 'icons:dialog',
    },
    workplaces: {
        title: 'Offices.Workplaces',
        icon: 'icons:workplace',
    },
    wardrobes: {
        title: 'Offices.Cabinets',
        icon: 'icons:wardrobes',
    },
    parkinglots: {
        title: 'Offices.Parkinglots',
        icon: 'icons:parkinglots',
    },
};


/***/ }),

/***/ "Lja7":
/*!*********************************************************!*\
  !*** ./src/app/presentation/offices/offices.service.ts ***!
  \*********************************************************/
/*! exports provided: OfficesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesService", function() { return OfficesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.utils */ "7RLK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_http_services_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/http/services/user-api.service */ "zGPZ");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");












class OfficesService {
    constructor($dictionary, $userApi, $reservationsApi, $measurements, $user, $userOffices, $buildings) {
        this.$dictionary = $dictionary;
        this.$userApi = $userApi;
        this.$reservationsApi = $reservationsApi;
        this.$measurements = $measurements;
        this.$user = $user;
        this.$userOffices = $userOffices;
        this.$buildings = $buildings;
    }
    get filter() {
        return {
            date: {
                value: [new Date(), new Date()],
                time: true,
                format: this.$measurements.getMeasurementByName('dateTime'),
            },
            checkboxGroup: [
                {
                    label: 'Весь день',
                    value: 'allDay',
                },
            ],
        };
    }
    get tabs$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
                this.$userOffices.getUserWorkplaceGroups(),
                this.$buildings.allBuildingsWithFloorMaps$,
                this.$dictionary.getDictionary('workplaces'),
                this.$reservationsApi.getLiveData('busyWorkplaces'),
                this.$dictionary.getDictionary('rooms'),
                this.$reservationsApi.getLiveData('busyRooms'),
            ]),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
                this.$dictionary.getDictionary('parkingLots'),
                this.$reservationsApi.getCommonLiveData$,
            ]),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([[userWorkplaceGroup, [builds, floors], workplaces, liveData, rooms, liveDataRooms,], [parkingLots, liveDataParkingLots],]) => {
            const tabs = builds.map((build) => ({
                buildId: build.id,
                name: build.name,
            }));
            const allBusyWorkplaceIds = liveData.data.busyWorkplaces.map((place) => place.id);
            const allBusyParkingLotsIds = liveDataParkingLots.arrayLiveDataReservedParkingLots.map((place) => place.id);
            const allBusyRoomIds = liveDataRooms.data.busyRooms.map((room) => room.id);
            return tabs.map((tab) => {
                tab.items = floors
                    .filter((floor) => floor.buildingId === tab.buildId)
                    .map((floor) => {
                    const allFloorRooms = rooms.filter((w) => w.floorMapId === floor.id);
                    const allFloorWorkplaces = workplaces.filter((w) => w.floorMapId === floor.id);
                    const allFloorParkingLots = parkingLots.filter((w) => w.floorMapId === floor.id);
                    const busyWorkplace = [];
                    const freeWorkplace = [];
                    const busyRoom = [];
                    const freeRoom = [];
                    const busyParkingLots = [];
                    const freeParkingLots = [];
                    allFloorWorkplaces.forEach((place) => {
                        if (allBusyWorkplaceIds.includes(place.id)) {
                            busyWorkplace.push(place);
                        }
                        else {
                            freeWorkplace.push(place);
                        }
                    });
                    allFloorRooms.forEach((place) => {
                        if (allBusyRoomIds.includes(place.id)) {
                            busyRoom.push(place);
                        }
                        else {
                            freeRoom.push(place);
                        }
                    });
                    allFloorParkingLots.forEach((place) => {
                        if (allBusyParkingLotsIds.includes(place.id)) {
                            busyParkingLots.push(place);
                        }
                        else {
                            freeParkingLots.push(place);
                        }
                    });
                    const availableWorkplace = [];
                    freeWorkplace.forEach((place) => {
                        for (const group of place.workplaceGroups) {
                            if (userWorkplaceGroup.includes(group)) {
                                availableWorkplace.push(place);
                                break;
                            }
                        }
                    });
                    return {
                        floorId: floor.id,
                        title: floor.name,
                        floor: floor.floorNumber,
                        places: [
                            {
                                type: 'conversation',
                                freePlaceAmount: freeRoom.length,
                                availablePlaceAmount: busyRoom.length + freeRoom.length,
                                busyPlaceAmount: busyRoom.length,
                            },
                            {
                                type: 'workplaces',
                                freePlaceAmount: freeWorkplace.length,
                                availablePlaceAmount: availableWorkplace.length,
                                busyPlaceAmount: busyWorkplace.length,
                            },
                            {
                                type: 'wardrobes',
                                freePlaceAmount: 0,
                                availablePlaceAmount: 0,
                                busyPlaceAmount: 0,
                            },
                            {
                                type: 'parkinglots',
                                freePlaceAmount: freeParkingLots.length,
                                availablePlaceAmount: allFloorParkingLots.length,
                                busyPlaceAmount: busyParkingLots.length,
                            },
                        ],
                    };
                });
                return tab;
            });
        }));
    }
    nowDayRange() {
        return Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_1__["dayRange"])(new Date());
    }
    applyOrders(sequences) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.setLabelBuildingsSequence(sequences.buildingsSequence),
            this.setLabelFloorMapsSequence(sequences.floorMapsSequence),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(([{ success }, { success: success2 }]) => {
            if (!success)
                delete sequences.buildingsSequence;
            if (!success2)
                delete sequences.floorMapsSequence;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.updateLabelSequences(sequences)));
    }
    setLabelBuildingsSequence(sequence) {
        return !sequence
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: false })
            : this.$userApi.setLabelBuildingsSequence({ sequence });
    }
    setLabelFloorMapsSequence(sequence) {
        return !sequence
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: false })
            : this.$userApi.setLabelFloorMapsSequence({ sequence });
    }
    updateLabelSequences(sequences) {
        return this.$dictionary
            .updateDictionaryItem('labels', Object.assign(this.$user.label, sequences))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.$user.updateUser$()));
    }
}
OfficesService.ɵfac = function OfficesService_Factory(t) { return new (t || OfficesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_9__["UserOfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_10__["BuildingsService"])); };
OfficesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OfficesService, factory: OfficesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _shared_http_services_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_6__["ReservationsApiService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_9__["UserOfficesService"] }, { type: _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_10__["BuildingsService"] }]; }, null); })();


/***/ }),

/***/ "UQTA":
/*!********************************************************!*\
  !*** ./src/app/base/office-card/office-card.module.ts ***!
  \********************************************************/
/*! exports provided: OfficeCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeCardModule", function() { return OfficeCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _office_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./office-card.component */ "C2Ty");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class OfficeCardModule {
}
OfficeCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OfficeCardModule });
OfficeCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OfficeCardModule_Factory(t) { return new (t || OfficeCardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficeCardModule, { declarations: [_office_card_component__WEBPACK_IMPORTED_MODULE_2__["OfficeCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_office_card_component__WEBPACK_IMPORTED_MODULE_2__["OfficeCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficeCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_office_card_component__WEBPACK_IMPORTED_MODULE_2__["OfficeCardComponent"]],
                exports: [_office_card_component__WEBPACK_IMPORTED_MODULE_2__["OfficeCardComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "p/Ox":
/*!***********************************************************!*\
  !*** ./src/app/presentation/offices/offices.component.ts ***!
  \***********************************************************/
/*! exports provided: OfficesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesComponent", function() { return OfficesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _presentation_offices_offices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @presentation/offices/offices.service */ "Lja7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_sortgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-sortgrid */ "0dH1");
/* harmony import */ var _base_office_card_office_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../base/office-card/office-card.component */ "C2Ty");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _base_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../base/simple-filter/simple-filter.component */ "3TLQ");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");























function OfficesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function OfficesComponent_ng_template_1_nz_tab_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tab_r12.name, " ");
} }
function OfficesComponent_ng_template_1_nz_tab_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return [a0]; };
function OfficesComponent_ng_template_1_nz_tab_2_ng_template_5_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sorted", function OfficesComponent_ng_template_1_nz_tab_2_ng_template_5_a_0_Template_a_sorted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const tab_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.dropFloors($event, tab_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-office-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r22 = ctx.$implicit;
    const tab_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, card_r22.floorId))("scrollPointTop", 100)("ngSortGridGroup", "tab-" + tab_r12.buildId)("ngSortGridItems", tab_r12.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", card_r22.title)("floor", card_r22.floor)("places", card_r22.places);
} }
function OfficesComponent_ng_template_1_nz_tab_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OfficesComponent_ng_template_1_nz_tab_2_ng_template_5_a_0_Template, 2, 9, "a", 16);
} if (rf & 2) {
    const tab_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", tab_r12.items);
} }
function OfficesComponent_ng_template_1_nz_tab_2_ng_template_7_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-office-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, card_r29.floorId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", card_r29.title)("floor", card_r29.floor)("places", card_r29.places);
} }
function OfficesComponent_ng_template_1_nz_tab_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OfficesComponent_ng_template_1_nz_tab_2_ng_template_7_a_0_Template, 2, 6, "a", 19);
} if (rf & 2) {
    const tab_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", tab_r12.items);
} }
function OfficesComponent_ng_template_1_nz_tab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OfficesComponent_ng_template_1_nz_tab_2_ng_template_1_Template, 2, 1, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OfficesComponent_ng_template_1_nz_tab_2_ng_container_4_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OfficesComponent_ng_template_1_nz_tab_2_ng_template_5_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OfficesComponent_ng_template_1_nz_tab_2_ng_template_7_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.isDragable ? _r16 : _r18);
} }
function OfficesComponent_ng_template_1_ng_template_3_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OfficesComponent_ng_template_1_ng_template_3_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r33.enableDragAndDrop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OfficesComponent_ng_template_1_ng_template_3_nz_space_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OfficesComponent_ng_template_1_ng_template_3_nz_space_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r37.applyOrders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r35.loadingChanges));
} }
function OfficesComponent_ng_template_1_ng_template_3_nz_space_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OfficesComponent_ng_template_1_ng_template_3_nz_space_2_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r39.cancelChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r36.loadingChanges));
} }
function OfficesComponent_ng_template_1_ng_template_3_nz_space_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-space");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OfficesComponent_ng_template_1_ng_template_3_nz_space_2_button_1_Template, 3, 3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OfficesComponent_ng_template_1_ng_template_3_nz_space_2_button_2_Template, 3, 3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OfficesComponent_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OfficesComponent_ng_template_1_ng_template_3_button_0_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OfficesComponent_ng_template_1_ng_template_3_nz_space_2_Template, 3, 0, "nz-space", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r11.isDragable && !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r11.loadingChanges));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.isDragable || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r11.loadingChanges));
} }
const _c1 = function (a0) { return { dragable: a0 }; };
function OfficesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-tabset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function OfficesComponent_ng_template_1_Template_nz_tabset_cdkDropListDropped_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.dropOffice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OfficesComponent_ng_template_1_nz_tab_2_Template, 9, 2, "nz-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OfficesComponent_ng_template_1_ng_template_3_Template, 4, 6, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTabBarExtraContent", _r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r2.isDragable))("cdkDropListDisabled", !ctx_r2.isDragable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.tabs);
} }
function OfficesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-simple-filter", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tpl", _r5);
} }
function OfficesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-range-picker", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OfficesComponent_ng_template_5_Template_nz_range_picker_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.filter.date.value = $event; })("ngModelChange", function OfficesComponent_ng_template_5_Template_nz_range_picker_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r45.dateRangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-checkbox-group", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OfficesComponent_ng_template_5_Template_nz_checkbox_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.filter.checkboxGroup = $event; })("ngModelChange", function OfficesComponent_ng_template_5_Template_nz_checkbox_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.allDayHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.filter.date.value)("nzShowTime", ctx_r6.filter.date.time)("nzFormat", ctx_r6.filter.date.format);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.filter.checkboxGroup);
} }
function OfficesComponent_ng_template_7_nz_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-skeleton", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXs", 24)("nzMd", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzActive", true);
} }
function OfficesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OfficesComponent_ng_template_7_nz_col_2_Template, 2, 3, "nz-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.amountSkeleton(12));
} }
class OfficesComponent {
    constructor($service, cdr) {
        this.$service = $service;
        this.cdr = cdr;
        this.filter = this.$service.filter;
        this.tabs = [];
        this.initialTabs = [];
        this.loading = null;
        this.isDragable = false;
        this.loadingChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.isBuildingOrderChanged = false;
        this.isFloorOrderChanged = false;
    }
    get buildingIds() {
        return this.tabs.map((tab) => tab.buildId);
    }
    get floorIds() {
        let ids = [];
        this.tabs.forEach((tab) => (ids = ids.concat(tab.items.map((item) => item.floorId))));
        return ids;
    }
    allDayHandler(checkboxGroupValue) {
        if (checkboxGroupValue[0].checked) {
            this.filter.date.value = this.$service.nowDayRange();
        }
    }
    dateRangeHandler([date1, date2]) {
        const [now1, now2] = this.$service.nowDayRange();
        if ((date1 === null || date1 === void 0 ? void 0 : date1.getTime()) !== now1.getTime() ||
            (date2 === null || date2 === void 0 ? void 0 : date2.getTime()) !== now2.getTime()) {
            this.filter.checkboxGroup = [
                Object.assign(Object.assign({}, this.filter.checkboxGroup[0]), { checked: false }),
            ];
        }
    }
    amountSkeleton(amount) {
        return '1'.repeat(amount).split('');
    }
    enableDragAndDrop() {
        this.isDragable = true;
        this.initialTabs = this.tabs.slice();
    }
    dropOffice(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.tabs, event.previousIndex, event.currentIndex);
        this.isBuildingOrderChanged = true;
    }
    dropFloors(orderChange, tab) {
        tab.items = orderChange.currentOrder;
        this.isFloorOrderChanged = true;
    }
    applyOrders() {
        const sequences = {};
        this.isDragable = false;
        this.loadingChanges.next(true);
        if (this.isBuildingOrderChanged) {
            sequences.buildingsSequence = this.buildingIds;
        }
        if (this.isFloorOrderChanged) {
            sequences.floorMapsSequence = this.floorIds;
        }
        this.isBuildingOrderChanged = false;
        this.isFloorOrderChanged = false;
        this.$service
            .applyOrders(sequences)
            .subscribe(() => {
            this.loadingChanges.next(false);
        });
    }
    cancelChanges() {
        this.isDragable = false;
        this.loadingChanges.next(false);
        this.tabs = this.initialTabs.slice();
    }
    ngOnInit() {
        this.loading = true;
        this._subs = this.$service.tabs$.subscribe((tabs) => {
            this.tabs = tabs;
            this.loading = false;
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
    }
}
OfficesComponent.ɵfac = function OfficesComponent_Factory(t) { return new (t || OfficesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_presentation_offices_offices_service__WEBPACK_IMPORTED_MODULE_5__["OfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
OfficesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OfficesComponent, selectors: [["app-offices"]], decls: 9, vars: 1, consts: [[4, "ngTemplateOutlet"], ["mainTpl", ""], ["mainFilter", ""], ["filterHeader", ""], ["loadingTpl", ""], [1, "offices"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "offices__tabs", 3, "nzTabBarExtraContent", "ngClass", "cdkDropListDisabled", "cdkDropListDropped"], [3, "nzTitle", 4, "ngFor", "ngForOf"], ["actionTemplate", ""], [3, "nzTitle"], ["class", "offices__tabs__header"], ["titleTemplate", ""], [1, "offices__tabs__items"], ["dragableCards", ""], ["cards", ""], ["cdkDrag", ""], ["class", "link-reset dragable", "ngSortgridItem", "", "autoScroll", "true", 3, "routerLink", "scrollPointTop", "ngSortGridGroup", "ngSortGridItems", "sorted", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "autoScroll", "true", 1, "link-reset", "dragable", 3, "routerLink", "scrollPointTop", "ngSortGridGroup", "ngSortGridItems", "sorted"], [3, "title", "floor", "places"], ["class", "link-reset", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "link-reset", 3, "routerLink"], ["nz-button", "", "nzType", "link", 3, "click", 4, "ngIf"], [4, "ngIf"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click", 4, "nzSpaceItem"], ["nz-button", "", "nzType", "default", 3, "nzLoading", "click", 4, "nzSpaceItem"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], ["nz-button", "", "nzType", "default", 3, "nzLoading", "click"], [1, "mb-24", 3, "tpl"], [1, "mr-24", 3, "ngModel", "nzShowTime", "nzFormat", "ngModelChange"], [3, "ngModel", "ngModelChange"], [1, "skeleton"], [3, "nzGutter"], [3, "nzXs", "nzMd", 4, "ngFor", "ngForOf"], [3, "nzXs", "nzMd"], [3, "nzActive"]], template: function OfficesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OfficesComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OfficesComponent_ng_template_1_Template, 5, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OfficesComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OfficesComponent_ng_template_5_Template, 2, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OfficesComponent_ng_template_7_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.loading ? _r7 : _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_7__["NzTabSetComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_7__["NzTabComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], ng_sortgrid__WEBPACK_IMPORTED_MODULE_9__["NgsgItemDirective"], _base_office_card_office_card_component__WEBPACK_IMPORTED_MODULE_10__["OfficeCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__["NzSpaceItemDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__["NzWaveDirective"], _base_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_15__["SimpleFilterComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__["NzRangePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__["NzCheckboxGroupComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__["NzColDirective"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_20__["NzSkeletonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".offices[_ngcontent-%COMP%] {\n  margin: -24px -24px 0;\n}\n.offices__tabs[_ngcontent-%COMP%]     nz-tabs-nav {\n  background-color: #ffffff;\n  padding: 0 24px;\n  margin-bottom: 0;\n}\n.offices__tabs[_ngcontent-%COMP%]     .ant-tabs-tabpane {\n  padding: 24px;\n}\n.offices__tabs__header[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n.offices__tabs__items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  grid-gap: 20px;\n  align-items: stretch;\n}\n.offices__tabs__items[_ngcontent-%COMP%]   .dragable[_ngcontent-%COMP%] {\n  border: 3px solid #1890ff;\n}\n  .ant-tabs-tab {\n  margin: 0;\n  padding: 12px 15px;\n}\n.dragable[_ngcontent-%COMP%]     .ant-tabs-tab {\n  margin: 0;\n  padding: 12px 15px;\n  border: 2px solid #1890ff;\n}\n.dragable[_ngcontent-%COMP%]     .ant-tabs-tab:not(:first-child) {\n  border-left: none;\n}\n.dragable[_ngcontent-%COMP%]     .ant-tabs-tab-active {\n  border: none;\n  border-right: 2px solid #1890ff;\n}\n.dragable[_ngcontent-%COMP%]     .ant-tabs-tab:nth-last-child(2).ant-tabs-tab-active {\n  border-right: none;\n}\n\n.ng-sg-placeholder[_ngcontent-%COMP%] {\n  transform: scale(1.015);\n  transition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBakJEO0VBQ0UscUJBQUE7QUFtQkY7QUFsQkU7RUFFSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW1CTjtBQXZCRTtFQU9JLGFBQUE7QUFtQk47QUFoQkk7RUFDRSx1QkFBQTtBQWtCTjtBQWZJO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBaUJOO0FBckJJO0VBT0kseUJBQUE7QUFpQlI7QUFYQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQWFGO0FBVkE7RUFFSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVdKO0FBZkE7RUFRSSxpQkFBQTtBQVVKO0FBbEJBO0VBWUksWUFBQTtFQUNBLCtCQUFBO0FBU0o7QUF0QkE7RUFpQkksa0JBQUE7QUFRSjtBQUNBLDJCQUEyQjtBQUozQjtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7QUFNRjtBQUNBLHlCQUF5QiIsImZpbGUiOiJvZmZpY2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvdGhlbWUvb3ZlcnJpZGVcIjtcbi5vZmZpY2VzIHtcbiAgbWFyZ2luOiAtMjRweCAtMjRweCAwO1xuICAmX190YWJzIHtcbiAgICA6Om5nLWRlZXAgbnotdGFicy1uYXYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGdyYXktMTtcbiAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIDo6bmctZGVlcCAuYW50LXRhYnMtdGFicGFuZSB7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG5cbiAgICAmX19pdGVtcyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICAgICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgLmRyYWdhYmxlIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzE4OTBmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5hbnQtdGFicy10YWIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbn1cblxuLmRyYWdhYmxlIHtcbiAgOjpuZy1kZWVwIC5hbnQtdGFicy10YWIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzE4OTBmZjtcbiAgfVxuXG4gIDo6bmctZGVlcCAuYW50LXRhYnMtdGFiOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxODkwZmY7XG4gIH1cblxuICA6Om5nLWRlZXAgLmFudC10YWJzLXRhYjpudGgtbGFzdC1jaGlsZCgyKS5hbnQtdGFicy10YWItYWN0aXZlIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbn1cblxuLyogbmdTb3J0Z3JpZCBTdHlsZXMgU3RhcnQqL1xuLm5nLXNnLXBsYWNlaG9sZGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxNSk7XG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uZy1zZy1kcm9wcGVkIHtcbn1cblxuLm5nLXNnLXNlbGVjdGVkIHtcbn1cbi8qIG5nU29ydGdyaWQgU3R5bGVzIEVuZCovXG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], OfficesComponent.prototype, "_subs", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OfficesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-offices',
                templateUrl: './offices.component.html',
                styleUrls: ['./offices.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _presentation_offices_offices_service__WEBPACK_IMPORTED_MODULE_5__["OfficesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { _subs: [] }); })();


/***/ }),

/***/ "zPnL":
/*!********************************************************!*\
  !*** ./src/app/presentation/offices/offices.module.ts ***!
  \********************************************************/
/*! exports provided: OfficesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesModule", function() { return OfficesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _offices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offices.component */ "p/Ox");
/* harmony import */ var _presentation_offices_offices_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/offices/offices-routing.module */ "2Gva");
/* harmony import */ var _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/simple-filter/simple-filter.module */ "6pky");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _base_office_card_office_card_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @base/office-card/office-card.module */ "UQTA");
/* harmony import */ var _presentation_offices_offices_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @presentation/offices/offices.service */ "Lja7");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_sortgrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-sortgrid */ "0dH1");



















class OfficesModule {
}
OfficesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OfficesModule });
OfficesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OfficesModule_Factory(t) { return new (t || OfficesModule)(); }, providers: [_presentation_offices_offices_service__WEBPACK_IMPORTED_MODULE_12__["OfficesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _presentation_offices_offices_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficesRoutingModule"],
            _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_4__["SimpleFilterModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzGridModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__["NzSpaceModule"],
            _base_office_card_office_card_module__WEBPACK_IMPORTED_MODULE_11__["OfficeCardModule"],
            ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_13__["NzSkeletonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            ng_sortgrid__WEBPACK_IMPORTED_MODULE_17__["NgsgModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficesModule, { declarations: [_offices_component__WEBPACK_IMPORTED_MODULE_2__["OfficesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _presentation_offices_offices_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficesRoutingModule"],
        _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_4__["SimpleFilterModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzGridModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__["NzSpaceModule"],
        _base_office_card_office_card_module__WEBPACK_IMPORTED_MODULE_11__["OfficeCardModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_13__["NzSkeletonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
        ng_sortgrid__WEBPACK_IMPORTED_MODULE_17__["NgsgModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_offices_component__WEBPACK_IMPORTED_MODULE_2__["OfficesComponent"]],
                providers: [_presentation_offices_offices_service__WEBPACK_IMPORTED_MODULE_12__["OfficesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _presentation_offices_offices_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficesRoutingModule"],
                    _base_simple_filter_simple_filter_module__WEBPACK_IMPORTED_MODULE_4__["SimpleFilterModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__["NzTabsModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzGridModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
                    ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__["NzSpaceModule"],
                    _base_office_card_office_card_module__WEBPACK_IMPORTED_MODULE_11__["OfficeCardModule"],
                    ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_13__["NzSkeletonModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                    ng_sortgrid__WEBPACK_IMPORTED_MODULE_17__["NgsgModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=offices-offices-module.js.map