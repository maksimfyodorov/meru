(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~develop-develop-module~reservations-reservations-module~team-reservations-team-reservations-module"],{

/***/ "+4nq":
/*!********************************************!*\
  !*** ./src/app/base/steps/steps.module.ts ***!
  \********************************************/
/*! exports provided: StepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsModule", function() { return StepsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _steps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steps.component */ "NB7L");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");





class StepsModule {
}
StepsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StepsModule });
StepsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StepsModule_Factory(t) { return new (t || StepsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_3__["NzStepsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StepsModule, { declarations: [_steps_component__WEBPACK_IMPORTED_MODULE_2__["StepsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_3__["NzStepsModule"]], exports: [_steps_component__WEBPACK_IMPORTED_MODULE_2__["StepsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_steps_component__WEBPACK_IMPORTED_MODULE_2__["StepsComponent"]],
                exports: [
                    _steps_component__WEBPACK_IMPORTED_MODULE_2__["StepsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_3__["NzStepsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5l53":
/*!*********************************************************!*\
  !*** ./src/app/base/add-members/add-members.service.ts ***!
  \*********************************************************/
/*! exports provided: AddMembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersService", function() { return AddMembersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");




class AddMembersService {
    constructor($dictionary, $api) {
        this.$dictionary = $dictionary;
        this.$api = $api;
    }
    get users$() {
        return this.$dictionary.getDictionary('labels');
    }
    checkAppointmentAttendeesAvailability$(from, to, emails, id) {
        return this.$api.checkAppointmentAttendeesAvailability(from, to, emails, id);
    }
}
AddMembersService.ɵfac = function AddMembersService_Factory(t) { return new (t || AddMembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_1__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsApiService"])); };
AddMembersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddMembersService, factory: AddMembersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMembersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_1__["DictionariesService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsApiService"] }]; }, null); })();


/***/ }),

/***/ "7f2s":
/*!*********************************************************************!*\
  !*** ./src/app/base/reservation-view/reservation-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReservationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationViewComponent", function() { return ReservationViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/reservations/utils/reservation */ "Y+7/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/common/utils/workplace.utils */ "udpc");
/* harmony import */ var _shared_common_utils_appointment_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/common/utils/appointment.utils */ "G8CF");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/core/services/config.service */ "jtrZ");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../card/card.component */ "iYEa");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../comments/comments.component */ "Qvys");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../steps/steps.component */ "NB7L");
/* harmony import */ var _add_members_add_members_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../add-members/add-members.component */ "cuK8");
/* harmony import */ var _order_services_order_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../order-services/order-services.component */ "iUNK");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");























function ReservationViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-steps", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r0.statusSteps)("current", ctx_r0.stepsTarget);
} }
function ReservationViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-divider", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-add-members", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemsChange", function ReservationViewComponent_div_8_Template_app_add_members_itemsChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.members = $event; })("itemsChange", function ReservationViewComponent_div_8_Template_app_add_members_itemsChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.saveAppointmentEmails($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r1.members)("appointment", ctx_r1.appointment);
} }
function ReservationViewComponent_div_9_app_order_services_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-order-services");
} }
function ReservationViewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-divider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReservationViewComponent_div_9_app_order_services_3_Template, 1, 0, "app-order-services", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.serviceDrivers["K2"] === "true");
} }
class ReservationViewComponent {
    constructor($user, $dicts, _cdr, $api, $config) {
        this.$user = $user;
        this.$dicts = $dicts;
        this._cdr = _cdr;
        this.$api = $api;
        this.$config = $config;
        this.imageUrl = _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_WORKPLACE_CARD"];
        this.statusSteps = [];
        this.descriptionList = [];
        this.comments = [];
        this.nornikAplana = false;
        this.appointmentStatusVisible = true;
        this.serviceDrivers = [];
        this.reservation = null;
        this.workplace = null;
        this.appointment = null;
        this.rooms = [];
        this.showLabelName = false;
        this.members = [];
        this.sub = $dicts.getDictionary('labels').subscribe((users) => {
            this.users = users;
        });
        this.serviceDrivers = this.$config.get('serviceDrivers');
        this.nornikAplana = this.$config.get('nornikAplana') === 'true';
        this.appointmentStatusVisible =
            this.$config.get('appointmentStatusVisible') === 'true';
    }
    set placeType(value) {
        this._placeType = value;
    }
    get placeType() {
        return this._placeType;
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        if (this.placeType === 'workplace' || this.placeType === 'parking') {
            if (((_a = changes === null || changes === void 0 ? void 0 : changes.reservation) === null || _a === void 0 ? void 0 : _a.currentValue) && ((_b = changes === null || changes === void 0 ? void 0 : changes.workplace) === null || _b === void 0 ? void 0 : _b.currentValue)) {
                this.setComments();
            }
        }
        if (this.placeType === 'appointment') {
            if (((_c = changes === null || changes === void 0 ? void 0 : changes.appointment) === null || _c === void 0 ? void 0 : _c.currentValue) && ((_d = changes === null || changes === void 0 ? void 0 : changes.rooms) === null || _d === void 0 ? void 0 : _d.currentValue)) {
                this.setMembers();
            }
        }
        this.setDescriptionList();
        this.setImageUrl();
        this.setStatusSteps();
        this.setTags();
    }
    title(type) {
        var _a, _b;
        switch (type) {
            case 'workplace':
            case 'parking':
                return `Место ${(_a = this.workplace) === null || _a === void 0 ? void 0 : _a.uniqueCode}`;
            case 'appointment':
                return (_b = this.appointment) === null || _b === void 0 ? void 0 : _b.appointmentSubject;
            default:
                return '-';
        }
    }
    get room() {
        return this.rooms && this.rooms[0];
    }
    setDescriptionList() {
        if ((this.placeType === 'workplace' || this.placeType === 'parking') &&
            this.workplace &&
            this.reservation) {
            this.descriptionList = [
                { name: 'Тип', value: Object(_shared_common_utils_workplace_utils__WEBPACK_IMPORTED_MODULE_7__["getTypeName"])(this.workplace.type) },
                { name: 'Статус', value: Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["getStatus"])(this.reservation.status) },
                {
                    name: 'Начало',
                    value: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.reservation.dateTimeFrom, 'dd-MM-yyyy HH:mm', 'ru-RU'),
                },
                {
                    name: 'Окончание',
                    value: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.reservation.dateTimeTo, 'dd-MM-yyyy HH:mm', 'ru-RU'),
                },
                { name: 'Номер', value: this.workplace.uniqueCode },
                { name: 'Помещение', value: this.workplace.name },
            ];
            if (this.showLabelName) {
                this.$dicts
                    .getDictionaryItemByKey('labels', this.reservation.labelId)
                    .subscribe((label) => {
                    this.descriptionList.unshift({
                        name: 'Пользователь',
                        value: label.name,
                    });
                    this._cdr.markForCheck();
                });
            }
        }
        // if (this.placeType === 'appointment' && this.appointment && this.room) { @Kholodov проверить room
        if (this.placeType === 'appointment' && this.appointment) {
            this.descriptionList = [
                {
                    name: 'Индификатор встречи',
                    value: this.appointment.appointmentParentId,
                },
                { name: 'Тип', value: 'Переговорка' },
                {
                    name: 'Статус',
                    value: Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["getStatus"])(this.appointment.appointmentStatus),
                },
                {
                    name: 'Начало',
                    value: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.appointment.appointmentDateFrom, 'dd-MM-yyyy HH:mm', 'ru-RU'),
                },
                {
                    name: 'Окончание',
                    value: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.appointment.appointmentDateTo, 'dd-MM-yyyy HH:mm', 'ru-RU'),
                },
                {
                    name: 'Помещение',
                    value: this.appointment.appointmentLocationString,
                },
            ];
        }
    }
    setImageUrl() {
        var _a, _b;
        this.imageUrl = ((_a = this.room) === null || _a === void 0 ? void 0 : _a.avatarImageUrl) ? (_b = this.room) === null || _b === void 0 ? void 0 : _b.avatarImageUrl : _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_WORKPLACE_CARD"];
    }
    setStatusSteps() {
        var _a, _b;
        if ((this.placeType === 'workplace' || this.placeType === 'parking') &&
            this.reservation) {
            this.stepsTarget = 0;
            this.statusSteps = [
                {
                    title: Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["getStatus"])('new'),
                    description: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.reservation.dateTimeCreated, 'dd-MM-yyyy HH:mm', 'ru-RU'),
                },
            ];
            this._addStep('Approved');
            this._addStep('Confirmed');
            if (this.reservation.dateTimeCanceled) {
                this._addStep('Canceled');
            }
            this._addStep('Closed');
        }
        if (this.placeType === 'appointment') {
            this.statusSteps.length = 0;
            this.stepsTarget = (_b = (_a = Object(_shared_common_utils_appointment_utils__WEBPACK_IMPORTED_MODULE_8__["getTypeName"])(name)) === null || _a === void 0 ? void 0 : _a.order) !== null && _b !== void 0 ? _b : 0;
            this._addStepAppointment('NEW');
            this._addStepAppointment('CONFIRMED');
            this._addStepAppointment('DECLINED');
        }
    }
    setTags() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!((_b = (_a = this.workplace) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.length) && !((_d = (_c = this.room) === null || _c === void 0 ? void 0 : _c.tags) === null || _d === void 0 ? void 0 : _d.length)) {
            this.tags = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        }
        if ((_f = (_e = this.workplace) === null || _e === void 0 ? void 0 : _e.tags) === null || _f === void 0 ? void 0 : _f.length) {
            this.tags = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([
                ...this.workplace.tags.map((tagId) => this.$dicts.getDictionaryItemByKey('tags', tagId, '')),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((tags) => tags.map((tag) => tag.name)));
        }
        if ((_h = (_g = this.room) === null || _g === void 0 ? void 0 : _g.tags) === null || _h === void 0 ? void 0 : _h.length) {
            this.tags = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([
                ...this.room.tags.map((tagId) => this.$dicts.getDictionaryItemByKey('tags', tagId, '')),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((tags) => tags.map((tag) => tag.name)));
        }
    }
    setComments() {
        if (this.reservation.approvalComment) {
            this.$dicts
                .getDictionaryItemByKey('labels', this.reservation.labelIdApprovalManager)
                .subscribe((label) => {
                this.comments = [
                    {
                        content: this.reservation.approvalComment,
                        avatar: label.avatarImageUrl,
                        author: label.name,
                        datetime: new Date(this.reservation.dateTimeApproved),
                    },
                ];
            });
        }
    }
    setMembers() {
        var _a, _b, _c, _d;
        if (!this.nornikAplana) {
            this.sub = this.$api
                .checkAppointmentAttendeesAvailability((_a = this.appointment) === null || _a === void 0 ? void 0 : _a.appointmentDateFrom, (_b = this.appointment) === null || _b === void 0 ? void 0 : _b.appointmentDateTo, (_c = this.appointment) === null || _c === void 0 ? void 0 : _c.appointmentAttendees, (_d = this.appointment) === null || _d === void 0 ? void 0 : _d.appointmentParentId)
                .subscribe((check) => {
                this.members = this.appointment.appointmentAttendees.map((mail) => {
                    const findUser = this.users.find((u) => u.mail === mail);
                    const status = check === null || check === void 0 ? void 0 : check.find((s) => s.attendeeId === mail);
                    if (findUser) {
                        return {
                            label: findUser.name,
                            value: mail,
                            theme: (status === null || status === void 0 ? void 0 : status.availabilityStatus) ? 'blue' : 'red',
                        };
                    }
                    else {
                        return {
                            label: mail,
                            value: mail,
                            theme: (status === null || status === void 0 ? void 0 : status.availabilityStatus) ? 'blue' : 'red',
                        };
                    }
                });
                this._cdr.markForCheck();
            });
        }
    }
    _addStep(name) {
        const step = { title: Object(_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["getStatus"])(name) };
        const time = this.reservation[`dateTime${name}`]
            ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.reservation[`dateTime${name}`], 'dd-MM-yyyy HH:mm', 'ru-RU')
            : '';
        if (time) {
            step.description = time;
            this.stepsTarget++;
        }
        this.statusSteps.push(step);
    }
    _addStepAppointment(name) {
        var _a;
        const step = { title: (_a = Object(_shared_common_utils_appointment_utils__WEBPACK_IMPORTED_MODULE_8__["getTypeName"])(name)) === null || _a === void 0 ? void 0 : _a.name };
        this.statusSteps.push(step);
    }
    saveAppointmentEmails(items) {
        const emails = items.map((i) => i.value);
        this.sub = this.$api
            .saveAppointmentEmails(this.appointment.appointmentId, emails)
            .subscribe(console.debug);
    }
    ngOnDestroy() { }
    get isOrganizer() {
        return this.$user.isAppointmentOrganizer(this.appointment);
    }
}
ReservationViewComponent.ɵfac = function ReservationViewComponent_Factory(t) { return new (t || ReservationViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_11__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_12__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"])); };
ReservationViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReservationViewComponent, selectors: [["app-reservation-view"]], inputs: { reservation: "reservation", workplace: "workplace", appointment: "appointment", rooms: "rooms", showLabelName: "showLabelName", placeType: "placeType" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 14, consts: [[1, "reservation"], [1, "reservation__card"], [3, "title", "image", "descriptionList", "tags"], [1, "reservation__main"], ["class", "reservation__block _steps", 4, "ngIf"], ["class", "reservation__block _members", 4, "ngIf"], [1, "reservation__block", "_comments"], [1, "reservation__divider"], ["nzText", "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"], [3, "items"], [1, "reservation__block", "_steps"], ["nzText", "\u0421\u0442\u0430\u0442\u0443\u0441"], [3, "items", "current"], [1, "reservation__block", "_members"], ["nzText", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430"], [3, "items", "appointment", "itemsChange"], ["nzText", "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438"], [4, "ngIf"]], template: function ReservationViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "imageBlob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ReservationViewComponent_div_7_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ReservationViewComponent_div_8_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ReservationViewComponent_div_9_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nz-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-comments", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title(ctx.placeType))("image", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 10, ctx.imageUrl)))("descriptionList", ctx.descriptionList)("tags", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx.tags));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.placeType === "appointment" && ctx.appointmentStatusVisible || ctx.placeType !== "appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.placeType === "appointment" && !ctx.nornikAplana && ctx.isOrganizer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.placeType === "appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.comments);
    } }, directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__["NzDividerComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_16__["CommentsComponent"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_17__["StepsComponent"], _add_members_add_members_component__WEBPACK_IMPORTED_MODULE_18__["AddMembersComponent"], _order_services_order_services_component__WEBPACK_IMPORTED_MODULE_19__["OrderServicesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_20__["ImageBlobPipe"]], styles: [".reservation[_ngcontent-%COMP%] {\n  display: flex;\n}\n.reservation__card[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n.reservation__main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.reservation__block[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.reservation__block[_ngcontent-%COMP%]    + .reservation__block[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.reservation__block._steps[_ngcontent-%COMP%] {\n  padding: 10px 0 30px 0;\n}\n.reservation__block._comments[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n.reservation__block._members[_ngcontent-%COMP%] {\n  padding: 10px 0 20px;\n}\n.reservation__divider[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.reservation__divider[_ngcontent-%COMP%]     .ant-divider {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLXZpZXcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUFFO0VBQ0Usc0JBQUE7QUFFSjtBQURJO0VBQ0UsZ0JBQUE7QUFHTjtBQURJO0VBQ0Usc0JBQUE7QUFHTjtBQURJO0VBQ0UsZUFBQTtBQUdOO0FBREk7RUFDRSxvQkFBQTtBQUdOO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFIRTtFQUdJLGFBQUE7QUFHTiIsImZpbGUiOiJyZXNlcnZhdGlvbi12aWV3LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2VydmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgJl9fY2FyZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB9XG4gICZfX21haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICZfX2Jsb2NrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICYgKyAucmVzZXJ2YXRpb25fX2Jsb2NrIHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICAgICYuX3N0ZXBzIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMCAzMHB4IDA7XG4gICAgfVxuICAgICYuX2NvbW1lbnRzIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB9XG4gICAgJi5fbWVtYmVycyB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMjBweDtcbiAgICB9XG4gIH1cbiAgJl9fZGl2aWRlciB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIDo6bmctZGVlcCAuYW50LWRpdmlkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_9__["Subscriptions"])()
], ReservationViewComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReservationViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reservation-view',
                templateUrl: './reservation-view.component.html',
                styleUrls: ['./reservation-view.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_11__["DictionariesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_12__["ReservationsApiService"] }, { type: _src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"] }]; }, { sub: [], reservation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], workplace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], appointment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rooms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLabelName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "Bf4v":
/*!***************************************************!*\
  !*** ./src/app/base/members/members.component.ts ***!
  \***************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");












function MembersComponent_nz_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function MembersComponent_nz_tag_1_Template_nz_tag_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const member_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onClose(member_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r5, " ");
} }
function MembersComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MembersComponent_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const member_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addMember(member_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r8, " ");
} }
function MembersComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MembersComponent {
    constructor() {
        this.members = ['Иванов Иван', 'Петров Сергей', 'Евдокимов Алексей'];
        this.newMembers = ['Иванов Иван Иванович', 'Иванова Мария Дмитриевна', 'Ивочкина Александра Сергеевна'];
    }
    onClose(member) {
        console.log('closed member:', member);
    }
    addMember(member) {
        this.members.push(member);
    }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(); };
MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], decls: 13, vars: 4, consts: [[1, "members"], ["class", "tag", "nzMode", "closeable", 3, "nzOnClose", 4, "ngFor", "ngForOf"], ["nzNoAnimation", "", "nz-dropdown", "", "nzTrigger", "click", 1, "editable-tag", "tag", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "plus"], ["menu", ""], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nzSearch", "", 1, "email-input", 3, "nzAddOnAfter"], ["type", "email", "nz-input", "", "placeholder", "email \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430"], ["suffixIconButton", ""], ["nzMode", "closeable", 1, "tag", 3, "nzOnClose"], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "user-add"], ["nz-button", "", "nzType", "primary", "nzSearch", "", 1, "email-input__btn"], ["nz-icon", "", "nzType", "right"]], template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MembersComponent_nz_tag_1_Template, 2, 1, "nz-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0418\u043C\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-dropdown-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MembersComponent_li_8_Template, 3, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MembersComponent_ng_template_11_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagComponent"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuItemDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"]], styles: [".members[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.editable-tag[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-style: dashed;\n  cursor: pointer;\n}\n.email-input[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 8px 4px;\n}\n.email-input__btn[_ngcontent-%COMP%] {\n  min-width: 46px;\n}\n.tag[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQ0E7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6Im1lbWJlcnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVycyB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbi5lZGl0YWJsZS10YWcge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1haWwtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwIDhweCA0cHg7XG4gICZfX2J0biB7XG4gICAgbWluLXdpZHRoOiA0NnB4O1xuICB9XG59XG4udGFnIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-members',
                templateUrl: './members.component.html',
                styleUrls: ['./members.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "G8CF":
/*!**********************************************************!*\
  !*** ./src/app/shared/common/utils/appointment.utils.ts ***!
  \**********************************************************/
/*! exports provided: AppointmentTypes, getTypeName, AppointmentTypesMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentTypes", function() { return AppointmentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeName", function() { return getTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentTypesMap", function() { return AppointmentTypesMap; });
var AppointmentTypes;
(function (AppointmentTypes) {
    AppointmentTypes["NEW"] = "\u041D\u043E\u0432\u0430\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0430";
    AppointmentTypes["CONFIRMED"] = "\u0412\u0441\u0442\u0440\u0435\u0447\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430";
    AppointmentTypes["DECLINED"] = "\u041E\u0442\u043C\u0435\u043D\u0435\u043D\u043D\u0430\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0430";
})(AppointmentTypes || (AppointmentTypes = {}));
const getTypeName = (type) => AppointmentTypesMap.find((app) => app.value === type);
const AppointmentTypesMap = [
    {
        value: 'NEW',
        name: AppointmentTypes.NEW,
        order: 0
    },
    {
        value: 'CONFIRMED',
        name: AppointmentTypes.CONFIRMED,
        order: 1
    },
    {
        value: 'DECLINED',
        name: AppointmentTypes.DECLINED,
        order: 2
    },
];


/***/ }),

/***/ "J3gr":
/*!******************************************************************!*\
  !*** ./src/app/base/reservation-view/reservation-view.module.ts ***!
  \******************************************************************/
/*! exports provided: ReservationViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationViewModule", function() { return ReservationViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reservation_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-view.component */ "7f2s");
/* harmony import */ var _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/card/card.module */ "lW34");
/* harmony import */ var _base_steps_steps_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/steps/steps.module */ "+4nq");
/* harmony import */ var _base_comments_comments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @base/comments/comments.module */ "TVq+");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var _base_members_members_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/members/members.module */ "zAtJ");
/* harmony import */ var _base_add_members_add_members_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @base/add-members/add-members.module */ "zWLE");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");
/* harmony import */ var _order_services_order_services_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../order-services/order-services.module */ "iktw");












class ReservationViewModule {
}
ReservationViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReservationViewModule });
ReservationViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReservationViewModule_Factory(t) { return new (t || ReservationViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _base_steps_steps_module__WEBPACK_IMPORTED_MODULE_4__["StepsModule"],
            _base_comments_comments_module__WEBPACK_IMPORTED_MODULE_5__["CommentsModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
            _base_members_members_module__WEBPACK_IMPORTED_MODULE_7__["MembersModule"],
            _base_add_members_add_members_module__WEBPACK_IMPORTED_MODULE_8__["AddMembersModule"],
            _order_services_order_services_module__WEBPACK_IMPORTED_MODULE_10__["OrderServicesModule"],
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__["ImagesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReservationViewModule, { declarations: [_reservation_view_component__WEBPACK_IMPORTED_MODULE_2__["ReservationViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
        _base_steps_steps_module__WEBPACK_IMPORTED_MODULE_4__["StepsModule"],
        _base_comments_comments_module__WEBPACK_IMPORTED_MODULE_5__["CommentsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
        _base_members_members_module__WEBPACK_IMPORTED_MODULE_7__["MembersModule"],
        _base_add_members_add_members_module__WEBPACK_IMPORTED_MODULE_8__["AddMembersModule"],
        _order_services_order_services_module__WEBPACK_IMPORTED_MODULE_10__["OrderServicesModule"],
        _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__["ImagesModule"]], exports: [_reservation_view_component__WEBPACK_IMPORTED_MODULE_2__["ReservationViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_reservation_view_component__WEBPACK_IMPORTED_MODULE_2__["ReservationViewComponent"]],
                exports: [
                    _reservation_view_component__WEBPACK_IMPORTED_MODULE_2__["ReservationViewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                    _base_steps_steps_module__WEBPACK_IMPORTED_MODULE_4__["StepsModule"],
                    _base_comments_comments_module__WEBPACK_IMPORTED_MODULE_5__["CommentsModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
                    _base_members_members_module__WEBPACK_IMPORTED_MODULE_7__["MembersModule"],
                    _base_add_members_add_members_module__WEBPACK_IMPORTED_MODULE_8__["AddMembersModule"],
                    _order_services_order_services_module__WEBPACK_IMPORTED_MODULE_10__["OrderServicesModule"],
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__["ImagesModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "NB7L":
/*!***********************************************!*\
  !*** ./src/app/base/steps/steps.component.ts ***!
  \***********************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function StepsComponent_nz_step_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-step", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r1.title)("nzDescription", item_r1.description);
} }
class StepsComponent {
    constructor() {
        this.items = [
            { title: 'Создана', description: '15.09.2020 11:15' },
            { title: 'Одобрена', description: '15.09.2020 11:15' },
            { title: 'Подтверждена', description: '15.09.2020 11:15' },
            { title: 'Закончена', description: '15.09.2020 11:15' },
        ];
        this.current = 2;
    }
}
StepsComponent.ɵfac = function StepsComponent_Factory(t) { return new (t || StepsComponent)(); };
StepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepsComponent, selectors: [["app-steps"]], inputs: { items: "items", current: "current" }, decls: 2, vars: 2, consts: [["nzProgressDot", "", 3, "nzCurrent"], [3, "nzTitle", "nzDescription", 4, "ngFor", "ngForOf"], [3, "nzTitle", "nzDescription"]], template: function StepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepsComponent_nz_step_1_Template, 1, 2, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwcy5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-steps',
                templateUrl: './steps.component.html',
                styleUrls: ['./steps.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], current: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OEtX":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-steps.js ***!
  \*********************************************************************************/
/*! exports provided: NzStepComponent, NzStepsComponent, NzStepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStepComponent", function() { return NzStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStepsComponent", function() { return NzStepsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStepsModule", function() { return NzStepsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");










/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["processDotTemplate"];
function NzStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function NzStepComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.index + 1);
} }
function NzStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", !ctx_r10.oldAPIIcon && icon_r11)("ngClass", ctx_r10.oldAPIIcon && icon_r11);
} }
function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r9.nzIcon);
} }
function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzStepComponent_ng_template_3_span_2_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_3_span_3_Template, 2, 1, "span", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzStatus === "finish" && !ctx_r1.nzIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzStatus === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.nzStatus === "process" || ctx_r1.nzStatus === "wait") && !ctx_r1.nzIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzIcon);
} }
function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
} }
function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customProcessTemplate || _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c1, _r12, ctx_r2.nzStatus, ctx_r2.index));
} }
function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzTitle);
} }
function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.nzSubtitle);
} }
function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzSubtitle);
} }
function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzDescription);
} }
const _c2 = ["*"];
class NzStepComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._currentIndex = 0;
    }
    get nzStatus() {
        return this._status;
    }
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    get nzIcon() {
        return this._icon;
    }
    set nzIcon(value) {
        if (!(value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])) {
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
        }
        this._icon = value;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    onClick() {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    }
    enable() {
        this.nzDisabled = false;
        this.cdr.markForCheck();
    }
    disable() {
        this.nzDisabled = true;
        this.cdr.markForCheck();
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.click$.complete();
    }
}
NzStepComponent.ɵfac = function NzStepComponent_Factory(t) { return new (t || NzStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
NzStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzStepComponent, selectors: [["nz-step"]], viewQuery: function NzStepComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.processDotTemplate = _t.first);
    } }, hostAttrs: [1, "ant-steps-item"], hostVars: 16, hostBindings: function NzStepComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    } }, inputs: { nzDisabled: "nzDisabled", nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzDescription: "nzDescription" }, exportAs: ["nzStep"], decls: 11, vars: 8, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], ["nz-icon", "", 3, "nzType", "ngClass"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function NzStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzStepComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzStepComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.last !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showProcessDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProcessDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzSubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzDescription);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzStepComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['processDotTemplate', { static: false },] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDescription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Object)
], NzStepComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-step',
                exportAs: 'nzStep',
                preserveWhitespaces: false,
                template: `
    <div
      class="ant-steps-item-container"
      [attr.role]="clickable && !nzDisabled ? 'button' : null"
      [tabindex]="clickable && !nzDisabled ? 0 : null"
      (click)="onClick()"
    >
      <div class="ant-steps-item-tail" *ngIf="last !== true"></div>
      <div class="ant-steps-item-icon">
        <ng-template [ngIf]="!showProcessDot">
          <span class="ant-steps-icon" *ngIf="nzStatus === 'finish' && !nzIcon"><i nz-icon nzType="check"></i></span>
          <span class="ant-steps-icon" *ngIf="nzStatus === 'error'"><i nz-icon nzType="close"></i></span>
          <span class="ant-steps-icon" *ngIf="(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon">{{ index + 1 }}</span>
          <span class="ant-steps-icon" *ngIf="nzIcon">
            <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
              <i nz-icon [nzType]="!oldAPIIcon && icon" [ngClass]="oldAPIIcon && icon"></i>
            </ng-container>
          </span>
        </ng-template>
        <ng-template [ngIf]="showProcessDot">
          <span class="ant-steps-icon">
            <ng-template #processDotTemplate>
              <span class="ant-steps-icon-dot"></span>
            </ng-template>
            <ng-template
              [ngTemplateOutlet]="customProcessTemplate || processDotTemplate"
              [ngTemplateOutletContext]="{
                $implicit: processDotTemplate,
                status: nzStatus,
                index: index
              }"
            ></ng-template>
          </span>
        </ng-template>
      </div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          <div *ngIf="nzSubtitle" class="ant-steps-item-subtitle">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </div>
        </div>
        <div class="ant-steps-item-description">
          <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
        </div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-steps-item',
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'nzDisabled',
                    '[class.ant-steps-item-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], processDotTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['processDotTemplate', { static: false }]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDescription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStepsComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzType = 'default';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.nzIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showProcessDot = false;
        this.classMap = {};
        this.dir = 'ltr';
        this.setClassMap();
    }
    set nzProgressDot(value) {
        if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        }
        this.updateChildrenSteps();
    }
    ngOnChanges(changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.setClassMap();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.setClassMap();
        this.updateChildrenSteps();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    }
    ngAfterContentInit() {
        if (this.steps) {
            this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.updateChildrenSteps();
            });
        }
    }
    updateChildrenSteps() {
        if (this.steps) {
            const length = this.steps.length;
            this.steps.toArray().forEach((step, index) => {
                Promise.resolve().then(() => {
                    step.outStatus = this.nzStatus;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.clickable = this.nzIndexChange.observers.length > 0;
                    step.direction = this.nzDirection;
                    step.index = index + this.nzStartIndex;
                    step.currentIndex = this.nzCurrent;
                    step.last = length === index + 1;
                    step.markForCheck();
                });
            });
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...this.steps.map(step => step.click$)).subscribe(index => this.nzIndexChange.emit(index));
        }
    }
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.nzDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.nzDirection === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.nzSize === 'small',
            ['ant-steps-navigation']: this.nzType === 'navigation',
            ['ant-steps-rtl']: this.dir === 'rtl'
        };
    }
}
NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) { return new (t || NzStepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8)); };
NzStepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzStepsComponent, selectors: [["nz-steps"]], contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzStepComponent, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.steps = _t);
    } }, inputs: { nzCurrent: "nzCurrent", nzDirection: "nzDirection", nzLabelPlacement: "nzLabelPlacement", nzType: "nzType", nzSize: "nzSize", nzStartIndex: "nzStartIndex", nzStatus: "nzStatus", nzProgressDot: "nzProgressDot" }, outputs: { nzIndexChange: "nzIndexChange" }, exportAs: ["nzSteps"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function NzStepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], encapsulation: 2, changeDetection: 0 });
NzStepsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzStepsComponent.propDecorators = {
    steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzStepComponent,] }],
    nzCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLabelPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzStartIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzProgressDot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                selector: 'nz-steps',
                exportAs: 'nzSteps',
                template: `
    <div class="ant-steps" [ngClass]="classMap">
      <ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLabelPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzStartIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzProgressDot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzStepComponent]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStepsModule {
}
NzStepsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzStepsModule });
NzStepsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzStepsModule_Factory(t) { return new (t || NzStepsModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzStepsModule, { declarations: function () { return [NzStepsComponent, NzStepComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]]; }, exports: function () { return [NzStepsComponent, NzStepComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]],
                exports: [NzStepsComponent, NzStepComponent],
                declarations: [NzStepsComponent, NzStepComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-steps.js.map

/***/ }),

/***/ "Qvys":
/*!*****************************************************!*\
  !*** ./src/app/base/comments/comments.component.ts ***!
  \*****************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");







function CommentsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-comment", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-avatar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "imageBlob");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-comment-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-comment-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reply to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAuthor", item_r2.author)("nzDatetime", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 4, item_r2.datetime, "dd.mm.YYYY hh:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, item_r2.avatar)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.content);
} }
class CommentsComponent {
    constructor() {
        this.newComment = '';
        this.items = [];
        this.userAvatar = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
        this.addComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleAddComment() {
        this.addComment.emit(this.newComment);
        this.newComment = '';
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], inputs: { items: "items", userAvatar: "userAvatar" }, outputs: { addComment: "addComment" }, decls: 3, vars: 3, consts: [[3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [3, "nzAuthor", "nzDatetime"], ["nz-comment-avatar", "", "nzIcon", "user", 3, "nzSrc"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsComponent_ng_template_1_Template, 10, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.items)("nzRenderItem", _r0)("nzItemLayout", "horizontal");
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__["NzListComponent"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__["NzCommentComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__["NzAvatarComponent"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__["NzCommentAvatarDirective"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__["NzCommentContentDirective"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__["NzCommentActionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_5__["ImageBlobPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userAvatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addComment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "TVq+":
/*!**************************************************!*\
  !*** ./src/app/base/comments/comments.module.ts ***!
  \**************************************************/
/*! exports provided: CommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.component */ "Qvys");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/comment */ "ZVAZ");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");












class CommentsModule {
}
CommentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommentsModule });
CommentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommentsModule_Factory(t) { return new (t || CommentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__["NzCommentModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__["NzListModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_10__["ImagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsModule, { declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_2__["CommentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__["NzCommentModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__["NzListModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _shared_images_images_module__WEBPACK_IMPORTED_MODULE_10__["ImagesModule"]], exports: [_comments_component__WEBPACK_IMPORTED_MODULE_2__["CommentsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_2__["CommentsComponent"]],
                exports: [
                    _comments_component__WEBPACK_IMPORTED_MODULE_2__["CommentsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__["NzCommentModule"],
                    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
                    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__["NzListModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_10__["ImagesModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Yrn+":
/*!***************************************************************************************!*\
  !*** ./src/app/base/order-services/components/modal/order-service-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OrderServiceModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServiceModalComponent", function() { return OrderServiceModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/office-services/models/service-step-type.enum */ "WxKn");
/* harmony import */ var _shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/office-services/order-services.service */ "ErID");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _shared_office_services_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/office-services/components/custom-input/custom-input.component */ "KqCa");
/* harmony import */ var _shared_office_services_components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/office-services/components/custom-output/custom-output.component */ "029i");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");





















function OrderServiceModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043B\u0443\u0433 ", ctx_r0.title, "");
} }
function OrderServiceModalComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function OrderServiceModalComponent_ng_template_4_div_1_nz_radio_group_1_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scenario_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", scenario_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](scenario_r14.description);
} }
function OrderServiceModalComponent_ng_template_4_div_1_nz_radio_group_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-radio-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderServiceModalComponent_ng_template_4_div_1_nz_radio_group_1_Template_nz_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.selectedScenario = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderServiceModalComponent_ng_template_4_div_1_nz_radio_group_1_label_1_Template, 2, 2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.selectedScenario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.scenarios);
} }
function OrderServiceModalComponent_ng_template_4_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrderServiceModalComponent_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderServiceModalComponent_ng_template_4_div_1_nz_radio_group_1_Template, 2, 2, "nz-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderServiceModalComponent_ng_template_4_div_1_ng_template_2_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.scenarios && ctx_r7.scenarios.length > 0)("ngIfElse", _r11);
} }
function OrderServiceModalComponent_ng_template_4_form_2_custom_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "custom-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const param_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepForm", ctx_r17.stepForm)("param", param_r18)("index", i_r19)("dateFormat", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx_r17.dateTimeFormat));
} }
function OrderServiceModalComponent_ng_template_4_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderServiceModalComponent_ng_template_4_form_2_custom_input_1_Template, 2, 6, "custom-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r8.stepForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.currentStepParams);
} }
function OrderServiceModalComponent_ng_template_4_form_3_custom_output_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "custom-output", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const param_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("param", param_r21)("dateFormat", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r20.dateTimeFormat));
} }
function OrderServiceModalComponent_ng_template_4_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderServiceModalComponent_ng_template_4_form_3_custom_output_1_Template, 2, 4, "custom-output", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.displayedStepParams);
} }
function OrderServiceModalComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderServiceModalComponent_ng_template_4_div_1_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderServiceModalComponent_ng_template_4_form_2_Template, 2, 2, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrderServiceModalComponent_ng_template_4_form_3_Template, 2, 1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r3.stepType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r3.ServiceStepType.INITIAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r3.ServiceStepType.PROCESS);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r3.ServiceStepType.COMPLETE);
} }
function OrderServiceModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-spin", 21);
} }
function OrderServiceModalComponent_div_8_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderServiceModalComponent_div_8_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.nextAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0414\u0430\u043B\u0435\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r22.selectedScenario || ctx_r22.stepNumber > 0 && ctx_r22.stepForm.invalid)("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r22.loading));
} }
function OrderServiceModalComponent_div_8_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderServiceModalComponent_div_8_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.commitSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r23.loading));
} }
function OrderServiceModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderServiceModalComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.destroyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041E\u0442\u043C\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrderServiceModalComponent_div_8_button_3_Template, 3, 4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrderServiceModalComponent_div_8_button_5_Template, 3, 3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx_r6.loading) != null && ctx_r6.stepType !== ctx_r6.ServiceStepType.COMPLETE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.stepType === ctx_r6.ServiceStepType.COMPLETE);
} }
class OrderServiceModalComponent {
    constructor(modal, orderService, formBuilder) {
        this.modal = modal;
        this.orderService = orderService;
        this.formBuilder = formBuilder;
        this.stepType = _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStepType"].INITIAL;
        this.ServiceStepType = _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStepType"];
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.actions = [];
    }
    ngOnInit() {
        this.sub = this.orderService.getK2Scenarios().subscribe((scenarios) => {
            this.scenarios = scenarios;
            this.loading.next(false);
        });
        this.dateTimeFormat = this.orderService.dateTimeFormat$;
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
                    validator.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                }
                return this.formBuilder.group({
                    field: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, validator),
                });
            })
            : [];
    }
    nextAction() {
        if (this.actions && this.actions.length > 0) {
            this.getNextStep();
        }
        else {
            this.selectScenario();
        }
    }
    selectScenario() {
        var _a;
        this.loading.next(true);
        this.sub = this.orderService
            .openK2Session((_a = this.selectedScenario) === null || _a === void 0 ? void 0 : _a.id)
            .subscribe((action) => {
            this.addNewStepAction(action);
        });
    }
    getNextStep() {
        this.loading.next(true);
        this.sub = this.orderService
            .putK2SessionStep(this.currentStepAction)
            .subscribe((action) => {
            this.addNewStepAction(action);
        });
    }
    commitSession() {
        this.loading.next(true);
        this.sub = this.orderService
            .commitK2Session(this.uuid)
            .subscribe((resultStatus) => {
            this.url = resultStatus.data.k2RequestUrl;
            this.destroyModal(resultStatus.success);
            this.loading.next(false);
        });
    }
    addNewStepAction(newAction) {
        this.actions.push(newAction);
        this.createForm();
        this.stepType = this.isLastStep
            ? _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStepType"].COMPLETE
            : _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStepType"].PROCESS;
        this.loading.next(false);
    }
    get currentStepAction() {
        return this.actions ? this.actions.slice().pop() : undefined;
    }
    get isLastStep() {
        return this.currentStepAction ? this.currentStepAction.isLastStep : false;
    }
    get currentStepParams() {
        return this.currentStepAction ? this.currentStepAction.params : [];
    }
    get displayedStepParams() {
        return this.currentStepParams.filter((stepParam) => stepParam.dataType.type === 'STRING' ||
            stepParam.dataType.type === 'INTEGER' ||
            stepParam.dataType.type === 'DICTIONARY' ||
            stepParam.dataType.type === 'DATETIME');
    }
    get uuid() {
        return this.currentStepAction ? this.currentStepAction.uuid : undefined;
    }
    get stepNumber() {
        return this.currentStepAction ? this.currentStepAction.step : 0;
    }
    get title() {
        switch (this.stepType) {
            case _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStepType"].INITIAL:
                return ' | Выберите сценарий';
            case _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStepType"].COMPLETE:
            case _shared_office_services_models_service_step_type_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStepType"].PROCESS:
                return this.selectedScenario && this.selectedScenario.description
                    ? ' | ' +
                        this.selectedScenario.description +
                        ', шаг ' +
                        this.stepNumber
                    : '';
            default:
                return '';
        }
    }
    destroyModal(resultStatus) {
        this.modal.destroy({ resultStatus, k2RequestUrl: this.url });
    }
}
OrderServiceModalComponent.ɵfac = function OrderServiceModalComponent_Factory(t) { return new (t || OrderServiceModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_6__["OrderServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
OrderServiceModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderServiceModalComponent, selectors: [["app-order-service-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_6__["OrderServicesService"]])], decls: 9, vars: 3, consts: [[4, "nzModalTitle"], [1, "modal-search-scroll"], [4, "ngTemplateOutlet"], ["contentTempl", ""], ["loadingTempl", ""], [4, "nzModalFooter"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "step-form", "nz-form", "", 3, "formGroup", 4, "ngSwitchCase"], ["nz-form", "", "nzLayout", "vertical", 4, "ngSwitchCase"], ["nzName", "scenariosList", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["noScenarios", ""], ["nzName", "scenariosList", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-radio", "", 3, "nzValue"], ["nz-form", "", 1, "step-form", 3, "formGroup"], [3, "stepForm", "param", "index", "dateFormat", 4, "ngFor", "ngForOf"], [3, "stepForm", "param", "index", "dateFormat"], ["nz-form", "", "nzLayout", "vertical"], [3, "param", "dateFormat", 4, "ngFor", "ngForOf"], [3, "param", "dateFormat"], ["nzSimple", "", 1, "loading-spinner"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function OrderServiceModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrderServiceModalComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "perfect-scrollbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderServiceModalComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrderServiceModalComponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrderServiceModalComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrderServiceModalComponent_div_8_Template, 6, 4, "div", 5);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.loading) == null ? _r4 : _r2);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalTitleDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__["NzRadioComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _shared_office_services_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_12__["CustomInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _shared_office_services_components_custom_output_custom_output_component__WEBPACK_IMPORTED_MODULE_13__["CustomOutputComponent"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__["NzSpinComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[nz-radio][_ngcontent-%COMP%] {\n  display: block;\n  height: 32px;\n  line-height: 32px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-left: 10px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  padding: 30% 0;\n  text-align: center;\n}\n.step-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n  .ant-modal-header {\n  padding-right: 35px;\n}\n.modal-search-scroll[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXNlcnZpY2UtbW9kYWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQURGO0FBSUE7RUFDRSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0FBSEYiLCJmaWxlIjoib3JkZXItc2VydmljZS1tb2RhbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1yYWRpb10ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cbmlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIHBhZGRpbmc6IDMwJSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGVwLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuYW50LW1vZGFsLWhlYWRlcntcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cblxuLm1vZGFsLXNlYXJjaC1zY3JvbGx7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_src_app_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], OrderServiceModalComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderServiceModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-order-service-modal',
                templateUrl: './order-service-modal.component.html',
                styleUrls: ['./order-service-modal.component.less'],
                providers: [_shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_6__["OrderServicesService"]],
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalRef"] }, { type: _shared_office_services_order_services_service__WEBPACK_IMPORTED_MODULE_6__["OrderServicesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { sub: [] }); })();


/***/ }),

/***/ "ZVAZ":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-comment.js ***!
  \***********************************************************************************/
/*! exports provided: NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentComponent, NzCommentContentDirective, NzCommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentActionComponent", function() { return NzCommentActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentActionHostDirective", function() { return NzCommentActionHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentAvatarDirective", function() { return NzCommentAvatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentComponent", function() { return NzCommentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentContentDirective", function() { return NzCommentContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCommentModule", function() { return NzCommentModule; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





function NzCommentActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.nzAuthor);
} }
function NzCommentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzAuthor);
} }
function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.nzDatetime);
} }
function NzCommentComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzDatetime);
} }
function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) { }
function NzCommentComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzCommentActionHost", action_r6.content);
} }
function NzCommentComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.actions);
} }
const _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
const _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
class NzCommentAvatarDirective {
}
NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) { return new (t || NzCommentAvatarDirective)(); };
NzCommentAvatarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzCommentAvatarDirective, selectors: [["nz-avatar", "nz-comment-avatar", ""]], exportAs: ["nzCommentAvatar"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCommentAvatarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            }]
    }], null, null); })();
class NzCommentContentDirective {
}
NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) { return new (t || NzCommentContentDirective)(); };
NzCommentContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzCommentContentDirective, selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]], hostAttrs: [1, "ant-comment-content-detail"], exportAs: ["nzCommentContent"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCommentContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            }]
    }], null, null); })();
class NzCommentActionHostDirective extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"] {
    constructor(componentFactoryResolver, viewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        this.attach(this.nzCommentActionHost);
    }
}
NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) { return new (t || NzCommentActionHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
NzCommentActionHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzCommentActionHostDirective, selectors: [["", "nzCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["nzCommentActionHost"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
NzCommentActionHostDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];
NzCommentActionHostDirective.propDecorators = {
    nzCommentActionHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCommentActionHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]; }, { nzCommentActionHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
class NzCommentActionComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    get content() {
        return this.contentPortal;
    }
    ngOnInit() {
        this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](this.implicitContent, this.viewContainerRef);
    }
}
NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(t) { return new (t || NzCommentActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
NzCommentActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCommentActionComponent, selectors: [["nz-comment-action"]], viewQuery: function NzCommentActionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.implicitContent = _t.first);
    } }, exportAs: ["nzCommentAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCommentActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
NzCommentActionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];
NzCommentActionComponent.propDecorators = {
    implicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCommentActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-comment-action',
                exportAs: 'nzCommentAction',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]; }, { implicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCommentComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCommentComponent.ɵfac = function NzCommentComponent_Factory(t) { return new (t || NzCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
NzCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCommentComponent, selectors: [["nz-comment"]], contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzCommentActionComponent, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.actions = _t);
    } }, hostVars: 4, hostBindings: function NzCommentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
    } }, inputs: { nzAuthor: "nzAuthor", nzDatetime: "nzDatetime" }, exportAs: ["nzComment"], ngContentSelectors: _c2, decls: 11, vars: 3, consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-content-author-time", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [3, "nzCommentActionHost"]], template: function NzCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzCommentComponent_span_5_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzCommentComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzCommentComponent_ul_8_Template, 2, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](10, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzAuthor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzDatetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.actions == null ? null : ctx.actions.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], NzCommentActionHostDirective], encapsulation: 2, changeDetection: 0 });
NzCommentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzCommentComponent.propDecorators = {
    nzAuthor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDatetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    actions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [NzCommentActionComponent,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-comment',
                exportAs: 'nzComment',
                template: `
    <div class="ant-comment-inner">
      <div class="ant-comment-avatar">
        <ng-content select="nz-avatar[nz-comment-avatar]"></ng-content>
      </div>
      <div class="ant-comment-content">
        <div class="ant-comment-content-author">
          <span *ngIf="nzAuthor" class="ant-comment-content-author-name">
            <ng-container *nzStringTemplateOutlet="nzAuthor">{{ nzAuthor }}</ng-container>
          </span>
          <span *ngIf="nzDatetime" class="ant-comment-content-author-time">
            <ng-container *nzStringTemplateOutlet="nzDatetime">{{ nzDatetime }}</ng-container>
          </span>
        </div>
        <ng-content select="nz-comment-content"></ng-content>
        <ul class="ant-comment-actions" *ngIf="actions?.length">
          <li *ngFor="let action of actions">
            <span><ng-template [nzCommentActionHost]="action.content"></ng-template></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ant-comment-nested">
      <ng-content></ng-content>
    </div>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.ant-comment]': `true`,
                    '[class.ant-comment-rtl]': `dir === "rtl"`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzAuthor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDatetime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], actions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [NzCommentActionComponent]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
class NzCommentModule {
}
NzCommentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzCommentModule });
NzCommentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzCommentModule_Factory(t) { return new (t || NzCommentModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCommentModule, { declarations: function () { return [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]]; }, exports: function () { return [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCommentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]],
                exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
                declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-comment.js.map

/***/ }),

/***/ "cuK8":
/*!***********************************************************!*\
  !*** ./src/app/base/add-members/add-members.component.ts ***!
  \***********************************************************/
/*! exports provided: AddMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersComponent", function() { return AddMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var _base_add_members_add_members_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/add-members/add-members.service */ "5l53");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");
























const _c0 = ["popover"];
function AddMembersComponent_nz_tag_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnClose", function AddMembersComponent_nz_tag_0_Template_nz_tag_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.removeItem(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMode", ctx_r0.tagMode(item_r8.value))("nz-tooltip", item_r8.value)("nzColor", item_r8.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.label);
} }
function AddMembersComponent_ng_template_6_perfect_scrollbar_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddMembersComponent_ng_template_6_perfect_scrollbar_0_li_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const user_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.addUserInSearch(user_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddMembersComponent_ng_template_6_perfect_scrollbar_0_li_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const user_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.setActiveUser(user_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPopoverTrigger", "click")("nzPopoverContent", _r6)("nzPopoverOverlayClassName", "add-member__user-card")("nzPopoverPlacement", "right");
} }
function AddMembersComponent_ng_template_6_perfect_scrollbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "perfect-scrollbar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddMembersComponent_ng_template_6_perfect_scrollbar_0_li_2_Template, 7, 5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.users);
} }
function AddMembersComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddMembersComponent_ng_template_6_perfect_scrollbar_0_Template, 3, 1, "perfect-scrollbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddMembersComponent_ng_template_6_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.submit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-control", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-input-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddMembersComponent_ng_template_6_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.value = $event; })("ngModelChange", function AddMembersComponent_ng_template_6_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.searchUsers($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.validateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Please enter a valid email"))("nzDisableAutoTips", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.value)("formControlName", "mail");
} }
function AddMembersComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddMembersComponent_ng_template_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.submit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddMembersComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "imageBlob");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u041F\u043E\u0447\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, ctx_r7.activeUser.avatarImageUrl)) || ctx_r7.DEFAULT_USER_AVATAR, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r7.activeUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.activeUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.activeUser.mail || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.activeUser.mainPhone || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.activeUser.post || "-");
} }
class AddMembersComponent {
    constructor($service, cdr, fb) {
        this.$service = $service;
        this.cdr = cdr;
        this.fb = fb;
        this._items = [];
        this.DEFAULT_USER_AVATAR = _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_USER_AVATAR"];
        this.value = '';
        this.allUsers = [];
        this.users = [];
        this.popoverVisible = false;
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sub = $service.users$.subscribe((users) => {
            this.allUsers = users;
            this.cdr.markForCheck();
        });
        this.validateForm = this.fb.group({
            mail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]
        });
    }
    set items(value) {
        this._items = [...value];
        this.$service.emails = value.map((i) => i.value);
    }
    get items() {
        return this._items;
    }
    ngOnInit() { }
    removeItem(item) {
        this.itemsChange.emit(this.items.filter((i) => i.value !== item.value));
    }
    searchUsers(value) {
        if (value.length) {
            this.users = this.allUsers.filter((user) => { var _a, _b; return ((_a = user.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(value.toLowerCase())) || ((_b = user.mail) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(value.toLowerCase())); });
        }
        else {
            this.users = [];
        }
        this.cdr.markForCheck();
    }
    get isFound() {
        return this.users.length > 0;
    }
    submit(event) {
        event.preventDefault();
        console.log('form', this.validateForm, this.value.trim());
        if (this.value.trim()) {
            if (this.validateForm.valid) {
                this._items.push({ label: this.value, value: this.value });
                this.value = '';
                this.popoverVisible = false;
            }
        }
    }
    addUser(member) {
        var _a, _b;
        if (!this.items.find((i) => i.value === member.value) && member.value.trim()) {
            this.sub = this.$service.checkAppointmentAttendeesAvailability$((_a = this.appointment) === null || _a === void 0 ? void 0 : _a.appointmentDateFrom, (_b = this.appointment) === null || _b === void 0 ? void 0 : _b.appointmentDateTo, [member.value], this.appointment.appointmentParentId).subscribe((check) => {
                var _a;
                this._items.push(Object.assign(Object.assign({}, member), { theme: ((_a = check[0]) === null || _a === void 0 ? void 0 : _a.availabilityStatus) ? 'blue' : 'red' }));
                this.$service.emails = this.items.map((i) => i.value);
                this.itemsChange.emit(this.items);
            });
        }
    }
    popoverVisibleChange() {
        this.popoverVisible = !this.popoverVisible;
    }
    setActiveUser(user) {
        this.activeUser = user;
    }
    addUserInSearch(user) {
        this.addUser({ label: user.name, value: user.mail });
        this.popoverVisible = false;
        this.value = '';
    }
    tagMode(email) {
        return email === this.appointment.appointmentOrganizerMail ? 'default' : 'closeable';
    }
}
AddMembersComponent.ɵfac = function AddMembersComponent_Factory(t) { return new (t || AddMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_add_members_add_members_service__WEBPACK_IMPORTED_MODULE_7__["AddMembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
AddMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddMembersComponent, selectors: [["app-add-members"]], viewQuery: function AddMembersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
    } }, inputs: { appointment: "appointment", items: "items" }, outputs: { itemsChange: "itemsChange" }, decls: 12, vars: 10, consts: [["class", "mb-10", 3, "nzMode", "nz-tooltip", "nzColor", "nzOnClose", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzSize", "small", "nz-popover", "", 3, "nzType", "nzPopoverContent", "nzPopoverTrigger", "nzPopoverOverlayClassName", "nzPopoverPlacement", "nzPopoverVisible", "click"], ["popover", ""], ["nz-icon", "", "nzType", "plus"], ["searchContentTpl", ""], ["suffixIconSearch", ""], ["userCardTpl", ""], [1, "mb-10", 3, "nzMode", "nz-tooltip", "nzColor", "nzOnClose"], ["class", "search-scroll", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [3, "nzErrorTip", "nzDisableAutoTips"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "email \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430", 3, "ngModel", "formControlName", "ngModelChange"], [1, "search-scroll"], [1, "list-reset"], [4, "ngFor", "ngForOf"], ["nz-button", "", 1, "btn-reset", 3, "click"], ["nz-icon", "", "nzType", "user-add", "nzTheme", "outline"], ["nz-button", "", "nz-popover", "", 1, "btn-reset", 3, "nzPopoverTrigger", "nzPopoverContent", "nzPopoverOverlayClassName", "nzPopoverPlacement", "click"], ["nz-icon", "", "nzType", "idcard", "nzTheme", "outline"], ["nz-button", "", "nzType", "primary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "right"], [1, "user-card"], [1, "user-card__header"], [1, "user-card__avatar", 3, "src", "alt"], [1, "user-card__name"], [1, "user-card__description"], [1, "user-card__description-item"], [1, "user-card__description-label"], [1, "user-card__description-value"]], template: function AddMembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddMembersComponent_nz_tag_0_Template, 2, 4, "nz-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddMembersComponent_Template_button_click_1_listener() { return ctx.popoverVisibleChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddMembersComponent_ng_template_6_Template, 7, 9, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddMembersComponent_ng_template_8_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AddMembersComponent_ng_template_10_Template, 23, 10, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "dashed")("nzPopoverContent", _r2)("nzPopoverTrigger", null)("nzPopoverOverlayClassName", "add-member")("nzPopoverPlacement", "bottomLeft")("nzPopoverVisible", ctx.popoverVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Add user"), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__["NzTagComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_20__["ImageBlobPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n  .ant-popover.add-member .empty-search-result {\n  margin: 0;\n  padding: 10px 0;\n  text-align: center;\n}\n  .ant-popover.add-member .search-scroll {\n  max-height: 200px;\n  margin-bottom: 15px;\n}\n  .ant-popover.add-member .ant-popover-inner-content {\n  padding-bottom: 1px;\n}\n  .ant-popover.add-member .anticon-idcard {\n  color: #1890ff;\n}\n  .ant-popover.add-member__user-card .user-card__header {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  padding-bottom: 15px;\n}\n  .ant-popover.add-member__user-card .user-card__name {\n  padding: 0 12px;\n  flex: 1 1 auto;\n}\n  .ant-popover.add-member__user-card .user-card__avatar {\n  display: block;\n  width: 90px;\n  height: auto;\n  border-radius: 50%;\n}\n  .ant-popover.add-member__user-card .user-card__description-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n  .ant-popover.add-member__user-card .user-card__description-label {\n  flex: 0 1 50%;\n  padding: 0 5px;\n  font-weight: 500;\n}\n  .ant-popover.add-member__user-card .user-card__description-value {\n  text-align: right;\n  flex: 0 1 50%;\n  padding: 0 5px;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.65);\n}\n  .ant-popover.add-member__user-card .user-card__description-item + .user-card__description-item {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tZW1iZXJzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWpCRDtFQUNFLGNBQUE7QUFtQkY7QUFqQkE7RUFFSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBa0JKO0FBdEJBO0VBT0ksaUJBQUE7RUFDQSxtQkFBQTtBQWtCSjtBQTFCQTtFQVdJLG1CQUFBO0FBa0JKO0FBN0JBO0VBY0ksY0FBQTtBQWtCSjtBQWJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWVOO0FBYkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWVOO0FBYkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWVOO0FBYkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQWVOO0FBYkk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBZU47QUFiSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBZU47QUFoREE7RUFxQ0ksZUFBQTtBQWNKIiwiZmlsZSI6ImFkZC1tZW1iZXJzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy90aGVtZS9jb2xvcnMnO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAuYW50LXBvcG92ZXIuYWRkLW1lbWJlciB7XG4gIC5lbXB0eS1zZWFyY2gtcmVzdWx0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2VhcmNoLXNjcm9sbCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuYW50LXBvcG92ZXItaW5uZXItY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgfVxuICAuYW50aWNvbi1pZGNhcmQge1xuICAgIGNvbG9yOiBAYmx1ZS02O1xuICB9XG59XG46Om5nLWRlZXAgLmFudC1wb3BvdmVyLmFkZC1tZW1iZXJfX3VzZXItY2FyZCB7XG4gIC51c2VyLWNhcmQge1xuICAgICZfX2hlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICZfX25hbWUge1xuICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuICAgICZfX2F2YXRhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICAmX19kZXNjcmlwdGlvbi1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgICZfX2Rlc2NyaXB0aW9uLWxhYmVsIHtcbiAgICAgIGZsZXg6IDAgMSA1MCU7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgICZfX2Rlc2NyaXB0aW9uLXZhbHVlIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZmxleDogMCAxIDUwJTtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICAgIH1cbiAgfVxuICAudXNlci1jYXJkX19kZXNjcmlwdGlvbi1pdGVtICsgLnVzZXItY2FyZF9fZGVzY3JpcHRpb24taXRlbSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscriptions"])()
], AddMembersComponent.prototype, "sub", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_3__["Debounce"])(300)
], AddMembersComponent.prototype, "searchUsers", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddMembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-members',
                templateUrl: './add-members.component.html',
                styleUrls: ['./add-members.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _base_add_members_add_members_service__WEBPACK_IMPORTED_MODULE_7__["AddMembersService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, { sub: [], popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['popover', { read: ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_4__["NzPopoverDirective"] }]
        }], appointment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], itemsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], searchUsers: [] }); })();


/***/ }),

/***/ "iUNK":
/*!*****************************************************************!*\
  !*** ./src/app/base/order-services/order-services.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServicesComponent", function() { return OrderServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_modal_order_service_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal/order-service-modal.component */ "Yrn+");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["successUrlTpl"];
function OrderServicesComponent_ng_template_4_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u041A2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OrderServicesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u041A2.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderServicesComponent_ng_template_4_a_4_Template, 2, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.url);
} }
class OrderServicesComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openOrderSeriveModal() {
        this.modalService
            .create({
            nzContent: _components_modal_order_service_modal_component__WEBPACK_IMPORTED_MODULE_1__["OrderServiceModalComponent"],
            nzStyle: {
                maxWidth: '400px',
                width: '100%',
            },
            nzBodyStyle: {
                height: '300px',
                padding: '0',
            },
        })
            .afterClose.subscribe((result) => {
            if (result.resultStatus) {
                this.url = result.k2RequestUrl;
                this.modalService.success({
                    nzTitle: 'Услуга заказана успешно',
                    nzContent: this.successUrlTpl,
                });
            }
            else if (result === false) {
                this.modalService.error({
                    nzTitle: 'Не удалось заказать услугу',
                    nzContent: '',
                });
            }
        });
    }
}
OrderServicesComponent.ɵfac = function OrderServicesComponent_Factory(t) { return new (t || OrderServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"])); };
OrderServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderServicesComponent, selectors: [["app-order-services"]], viewQuery: function OrderServicesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.successUrlTpl = _t.first);
    } }, decls: 6, vars: 0, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["successUrlTpl", ""], [1, "url-link"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"]], template: function OrderServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderServicesComponent_Template_button_click_0_listener() { return ctx.openOrderSeriveModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0437\u0430\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u041A2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderServicesComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.url-link[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXNlcnZpY2VzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUFBSjtBQUdBO0VBQ0UsZ0JBQUE7QUFERiIsImZpbGUiOiJvcmRlci1zZXJ2aWNlcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxufVxuLnVybC1saW5rIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-services',
                templateUrl: './order-services.component.html',
                styleUrls: ['./order-services.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }]; }, { successUrlTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['successUrlTpl']
        }] }); })();


/***/ }),

/***/ "iktw":
/*!**************************************************************!*\
  !*** ./src/app/base/order-services/order-services.module.ts ***!
  \**************************************************************/
/*! exports provided: OrderServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderServicesModule", function() { return OrderServicesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/shared/office-services/shared-office-services.module */ "ZIWv");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _components_modal_order_service_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modal/order-service-modal.component */ "Yrn+");
/* harmony import */ var _order_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-services.component */ "iUNK");



















class OrderServicesModule {
}
OrderServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderServicesModule });
OrderServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OrderServicesModule_Factory(t) { return new (t || OrderServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_3__["SharedOfficeServicesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__["NzModalModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__["NzSpinModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__["NzInputNumberModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__["NzSpaceModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__["NzDatePickerModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderServicesModule, { declarations: [_order_services_component__WEBPACK_IMPORTED_MODULE_17__["OrderServicesComponent"],
        _components_modal_order_service_modal_component__WEBPACK_IMPORTED_MODULE_16__["OrderServiceModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_3__["SharedOfficeServicesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__["NzModalModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__["NzSpinModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__["NzInputNumberModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__["NzSpaceModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__["NzDatePickerModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"]], exports: [_order_services_component__WEBPACK_IMPORTED_MODULE_17__["OrderServicesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _order_services_component__WEBPACK_IMPORTED_MODULE_17__["OrderServicesComponent"],
                    _components_modal_order_service_modal_component__WEBPACK_IMPORTED_MODULE_16__["OrderServiceModalComponent"],
                ],
                exports: [_order_services_component__WEBPACK_IMPORTED_MODULE_17__["OrderServicesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _src_app_shared_office_services_shared_office_services_module__WEBPACK_IMPORTED_MODULE_3__["SharedOfficeServicesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__["NzModalModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__["NzSpinModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__["NzInputNumberModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
                    ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_13__["NzSpaceModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__["NzDatePickerModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "zAtJ":
/*!************************************************!*\
  !*** ./src/app/base/members/members.module.ts ***!
  \************************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members.component */ "Bf4v");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");










class MembersModule {
}
MembersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MembersModule });
MembersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MembersModule_Factory(t) { return new (t || MembersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MembersModule, { declarations: [_members_component__WEBPACK_IMPORTED_MODULE_2__["MembersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"]], exports: [_members_component__WEBPACK_IMPORTED_MODULE_2__["MembersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_members_component__WEBPACK_IMPORTED_MODULE_2__["MembersComponent"]],
                exports: [
                    _members_component__WEBPACK_IMPORTED_MODULE_2__["MembersComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zWLE":
/*!********************************************************!*\
  !*** ./src/app/base/add-members/add-members.module.ts ***!
  \********************************************************/
/*! exports provided: AddMembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersModule", function() { return AddMembersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-members.component */ "cuK8");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");
















class AddMembersModule {
}
AddMembersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddMembersModule });
AddMembersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddMembersModule_Factory(t) { return new (t || AddMembersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_9__["NzPopoverModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzToolTipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_14__["ImagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddMembersModule, { declarations: [_add_members_component__WEBPACK_IMPORTED_MODULE_2__["AddMembersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_9__["NzPopoverModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzToolTipModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
        _shared_images_images_module__WEBPACK_IMPORTED_MODULE_14__["ImagesModule"]], exports: [_add_members_component__WEBPACK_IMPORTED_MODULE_2__["AddMembersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMembersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_members_component__WEBPACK_IMPORTED_MODULE_2__["AddMembersComponent"]],
                exports: [
                    _add_members_component__WEBPACK_IMPORTED_MODULE_2__["AddMembersComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_3__["NzTagModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_6__["NzDropDownModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_9__["NzPopoverModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__["NzToolTipModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_14__["ImagesModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~develop-develop-module~reservations-reservations-module~team-reservations-team-reservations-module.js.map