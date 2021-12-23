(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9/e":
/*!*********************************************************************!*\
  !*** ./src/app/base/reservation-by-qr/reservation-by-qr.service.ts ***!
  \*********************************************************************/
/*! exports provided: ReservationByQRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationByQRService", function() { return ReservationByQRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _reservation_by_qr_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-by-qr.util */ "GlYv");
/* harmony import */ var _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/shared/settings/settings.service */ "kgew");
/* harmony import */ var _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











class ReservationByQRService {
    constructor($api, $settings, $measurements, $dictionary, $user, datePipe) {
        this.$api = $api;
        this.$settings = $settings;
        this.$measurements = $measurements;
        this.$dictionary = $dictionary;
        this.$user = $user;
        this.datePipe = datePipe;
    }
    reservationPlaceByType(objectType, placeId, dates) {
        const reservationType = this.getReservationType(objectType);
        const reservations = [
            this.setReservationByType(reservationType, 'main', placeId, dates),
        ];
        const params = {};
        switch (reservationType) {
            case 'appointment':
                params.appointments = reservations;
                break;
            case 'parking':
                params.reservations = reservations;
                break;
            default:
                params.reservations = reservations;
                break;
        }
        return this.$api
            .putReservationsByType(reservationType, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response === null || response === void 0 ? void 0 : response.data));
    }
    cancelReservationByType(objectType, placeId) {
        const reservationType = this.getReservationType(objectType);
        let request;
        switch (reservationType) {
            case 'appointment':
                request = this.$api.deleteAppointment(placeId.toString());
            default:
                request = this.$api.cancelReservation(reservationType, placeId.toString());
        }
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.success));
    }
    confirmReservationByType(objectType, placeId) {
        const reservationType = this.getReservationType(objectType);
        let request;
        switch (reservationType) {
            case 'appointment':
                request = this.$api.confirmAppointment(placeId.toString());
            default:
                request = this.$api.confirmReservation(reservationType, placeId.toString());
        }
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.success));
    }
    getReservationType(type) {
        switch (type) {
            case 'WORKPLACE':
                return 'workplace';
            case 'PARKING_LOT':
                return 'parking';
            case 'APPOINTMENT':
                return 'appointment';
            default:
                return 'workplace';
        }
    }
    setReservationByType(type, recordCode, placeId, dates) {
        return Object.assign(Object.assign(Object.assign({ recordCode: `${recordCode}` }, ((type === 'workplace' && {
            workplaceId: placeId,
            labelId: this.$user.info.id,
            dateTimeFrom: this._getApiDate(dates[0]),
            dateTimeTo: this._getApiDate(dates[1]),
        }) ||
            {})), ((type === 'parking' && {
            parkingLotId: placeId,
            labelId: this.$user.info.id,
            dateTimeFrom: this._getApiDate(dates[0]),
            dateTimeTo: this._getApiDate(dates[1]),
        }) ||
            {})), ((type === 'appointment' && {
            appointmentRoomsList: [placeId],
            appointmentDateFrom: this._getApiDate(dates[0]),
            appointmentDateTo: this._getApiDate(dates[1]),
        }) ||
            {}));
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
    getReservationByQR(qrCode) {
        const body = {};
        body.qrCode = qrCode;
        return this.$api.getQRAction(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((response) => {
            if (response.success) {
                const reservation = response.data;
                if (reservation.actionType === 'WORKPLACE_RESERVATION_ALREADY_EXISTS') {
                    let reservedPlaceId = Object(_reservation_by_qr_util__WEBPACK_IMPORTED_MODULE_3__["getReservationId"])(reservation);
                    let dicName;
                    if (reservation.objectType === 'APPOINTMENT') {
                        dicName = 'rooms';
                    }
                    else {
                        dicName = 'workplaces';
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                        this.$dictionary.getDictionaryItemByKey('floorMaps', reservation.objectData.floorMapId),
                        this.$dictionary.getDictionaryItemByKey(dicName, reservedPlaceId),
                    ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([floor, place]) => {
                        reservation.floor = floor;
                        reservation.objectData = place;
                        return reservation;
                    }));
                }
                else {
                    return this.$dictionary
                        .getDictionaryItemByKey('floorMaps', reservation.objectData.floorMapId)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((floor) => {
                        reservation.floor = floor;
                        return reservation;
                    }));
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
        }));
    }
    get reservationDateRange() {
        const minReservationDuration = this.$settings.getSettingByName('workplaceReservationDurationMinSeconds') * 1000;
        const workHours = [
            this.$settings.getSettingByName('workplaceReservationBeginHourDefault'),
            this.$settings.getSettingByName('workplaceReservationEndHourDefault'),
        ];
        const dates = Object(_reservation_by_qr_util__WEBPACK_IMPORTED_MODULE_3__["getInitDate"])(workHours, minReservationDuration);
        return {
            value: dates,
            format: this.$measurements.getMeasurementByName('date'),
            workHours,
        };
    }
}
ReservationByQRService.ɵfac = function ReservationByQRService_Factory(t) { return new (t || ReservationByQRService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"])); };
ReservationByQRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservationByQRService, factory: ReservationByQRService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationByQRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_4__["ReservationsApiService"] }, { type: _src_app_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }, { type: _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"] }, { type: _src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"] }, { type: _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "+J7z":
/*!***************************************************************!*\
  !*** ./src/app/shared/http/services/live-data-api.service.ts ***!
  \***************************************************************/
/*! exports provided: LiveDataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveDataApiService", function() { return LiveDataApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/base/base.api */ "zYZC");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");







class LiveDataApiService extends _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_1__["BaseApi"] {
    constructor(injector, $user) {
        super(injector);
        this.injector = injector;
        this.$user = $user;
        this.$config
            .getOne$('liveDataUrl')
            .subscribe((liveDataUrl) => this._liveDataUrl = liveDataUrl);
    }
    get(key) {
        const url = Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(key) ? this._liveDataUrl : `${this._liveDataUrl}`;
        const headers = {
            tokenUuid: this.$user.info.tokenUUID,
            deviceId: this.$user.info.deviceId,
        };
        return this.$http
            .get(url, {}, { headers })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((liveData) => {
            return key ? liveData === null || liveData === void 0 ? void 0 : liveData[key] : liveData;
        }));
    }
}
LiveDataApiService.ɵfac = function LiveDataApiService_Factory(t) { return new (t || LiveDataApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
LiveDataApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LiveDataApiService, factory: LiveDataApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveDataApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "+ziw":
/*!************************************************!*\
  !*** ./src/app/base/filters/filters.uttils.ts ***!
  \************************************************/
/*! exports provided: PS_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PS_CONFIG", function() { return PS_CONFIG; });
const PS_CONFIG = {
    suppressScrollX: true
};


/***/ }),

/***/ "/9OL":
/*!*********************************************!*\
  !*** ./src/app/core/enums/auth-key.enum.ts ***!
  \*********************************************/
/*! exports provided: AuthKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthKey", function() { return AuthKey; });
var AuthKey;
(function (AuthKey) {
    AuthKey["PHONE"] = "PHONE";
    AuthKey["EMAIL"] = "EMAIL";
})(AuthKey || (AuthKey = {}));


/***/ }),

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_layout_header_header_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/header/header.utils */ "3jdI");
/* harmony import */ var _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/header/header.service */ "mtWJ");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_layout_header_components_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/layout/header/components/header-search/header-search.component */ "9AfI");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/layout/header/components/header-notifications/header-notifications.component */ "QT/m");
/* harmony import */ var _app_layout_header_components_header_locale_header_locale_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/layout/header/components/header-locale/header-locale.component */ "EAxR");
/* harmony import */ var _app_layout_header_components_header_profile_header_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layout/header/components/header-profile/header-profile.component */ "Sr1X");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");















function HeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function HeaderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header-notifications", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-header-locale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-header-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", 40, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.logo.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r2.logo.alt)("title", ctx_r2.logo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nz-tooltip", "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indentClass", "top-indent");
} }
function HeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-spin", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor($service, $loader) {
        this.$service = $service;
        this.$loader = $loader;
        this.quickCreateUrls = _app_layout_header_header_utils__WEBPACK_IMPORTED_MODULE_1__["QUICK_CREATE_URLS"];
        this.logo = $service.logo;
        this.notifications = $service.notifications;
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_3__["GlobalLoaderService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 3, consts: [[4, "ngTemplateOutlet"], ["content", ""], ["loader", ""], ["routerLink", "/", 1, "header__logo"], [3, "src", "alt", "title"], [1, "header__tools"], ["nz-icon", "", "nzType", "question-circle", "nzTheme", "outline", 3, "nz-tooltip"], [3, "indentClass"], [1, "header__loading"], ["nzSimple", "", "nzTip", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0448\u0430\u043F\u043A\u0438..."]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ng_template_2_Template, 8, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.$loader.headerLoading$) ? _r3 : _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _app_layout_header_components_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_6__["HeaderSearchComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_10__["HeaderNotificationsComponent"], _app_layout_header_components_header_locale_header_locale_component__WEBPACK_IMPORTED_MODULE_11__["HeaderLocaleComponent"], _app_layout_header_components_header_profile_header_profile_component__WEBPACK_IMPORTED_MODULE_12__["HeaderProfileComponent"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_13__["NzSpinComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.header__loading[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 83px;\n}\n.header__tools[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  margin-left: auto;\n  width: 100%;\n}\n.header__tools[_ngcontent-%COMP%]     i {\n  font-size: 15px;\n  cursor: pointer;\n}\n.header__tools[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n.header__tools[_ngcontent-%COMP%]     app-header-search {\n  max-width: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUVJLGNBQUE7RUFDQSxXQUFBO0FBSE47QUFPRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTEo7QUFBRTtFQVFJLGVBQUE7RUFDQSxlQUFBO0FBTE47QUFKRTtFQWFJLGNBQUE7QUFOTjtBQVBFO0VBaUJJLGdCQUFBO0VBQ0EsV0FBQTtBQVBOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgJl9fbG9hZGluZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDgzcHg7XG4gICAgfVxuICB9XG5cbiAgJl9fdG9vbHMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgOjpuZy1kZWVwIGkge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgID4gKiB7XG4gICAgICBtYXJnaW46IDAgMTVweDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgYXBwLWhlYWRlci1zZWFyY2gge1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_3__["GlobalLoaderService"] }]; }, null); })();


/***/ }),

/***/ "/VmJ":
/*!********************************************************!*\
  !*** ./src/app/core/services/notifications.service.ts ***!
  \********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");




class NotificationsService {
    constructor($notifications, $localization) {
        this.$notifications = $notifications;
        this.$localization = $localization;
        this._position = 'bottomRight';
    }
    error(title, message) {
        this.call(title, message, 'error');
    }
    info(title, message) {
        this.call(title, message);
    }
    success(title, message) {
        this.call(title, message, 'success');
    }
    warning(title, message) {
        this.call(title, message, 'warning');
    }
    call(title, message, type = 'info') {
        title = this.$localization.translate(title);
        message = this.$localization.translate(message);
        this.$notifications.create(type, title, message, { nzPlacement: this._position });
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__["NzNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"])); };
NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__["NzNotificationService"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "/tb3":
/*!************************************************!*\
  !*** ./src/app/shared/images/images.module.ts ***!
  \************************************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");
/* harmony import */ var _pipes_full_image_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/full-image-url.pipe */ "9Ig5");





class ImagesModule {
}
ImagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImagesModule });
ImagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImagesModule_Factory(t) { return new (t || ImagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImagesModule, { declarations: [_shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_2__["ImageBlobPipe"], _pipes_full_image_url_pipe__WEBPACK_IMPORTED_MODULE_3__["FullImageUrlPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_2__["ImageBlobPipe"],
        _pipes_full_image_url_pipe__WEBPACK_IMPORTED_MODULE_3__["FullImageUrlPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_2__["ImageBlobPipe"], _pipes_full_image_url_pipe__WEBPACK_IMPORTED_MODULE_3__["FullImageUrlPipe"]],
                exports: [
                    _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_2__["ImageBlobPipe"],
                    _pipes_full_image_url_pipe__WEBPACK_IMPORTED_MODULE_3__["FullImageUrlPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\workrep\src\main.ts */"zUnb");


/***/ }),

/***/ "0Lx0":
/*!************************************************!*\
  !*** ./src/app/layout/layout-shared.module.ts ***!
  \************************************************/
/*! exports provided: LayoutSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSharedModule", function() { return LayoutSharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ "MYni");
/* harmony import */ var _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/header/header.module */ "ayF6");
/* harmony import */ var _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/header/header.service */ "mtWJ");
/* harmony import */ var _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/layout/navigation/navigation.module */ "iNfJ");
/* harmony import */ var _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/layout/navigation-mobile/navigation-mobile.module */ "QtL1");







class LayoutSharedModule {
}
LayoutSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutSharedModule });
LayoutSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutSharedModule_Factory(t) { return new (t || LayoutSharedModule)(); }, providers: [_app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]], imports: [_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
        _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
        _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_5__["NavigationMobileModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutSharedModule, { exports: [_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
        _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
        _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_5__["NavigationMobileModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutSharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                providers: [_app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]],
                exports: [
                    _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
                    _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
                    _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_5__["NavigationMobileModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "0Q2C":
/*!*********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.service.ts ***!
  \*********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_layout_navigation_navigation_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/navigation/navigation.utils */ "dEQI");
/* harmony import */ var _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models/app-errorl.model */ "zewn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/http/services/meta-api.service */ "s4sJ");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _src_app_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/shared/settings/settings.service */ "kgew");









class NavigationService {
    constructor($metaApi, $user, $settings) {
        this.$metaApi = $metaApi;
        this.$user = $user;
        this.$settings = $settings;
        this.collapse = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    get mainNavigation$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.$settings.getSettingByName$('workplaceReservationConfirmationMethod'),
            this.$metaApi.getMeta('navigation'),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([setting, nav]) => {
            let navigations;
            if (!(nav instanceof _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_2__["AppError"])) {
                navigations = nav;
            }
            navigations = Object(_app_layout_navigation_navigation_utils__WEBPACK_IMPORTED_MODULE_1__["showHideQRNavigation"])(navigations, setting);
            return this.$user.info$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ labelGroups }) => Object(_app_layout_navigation_navigation_utils__WEBPACK_IMPORTED_MODULE_1__["filterNavigation"])(navigations, labelGroups)));
        }));
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_5__["MetaApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"])); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_5__["MetaApiService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _src_app_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "12Dr":
/*!*****************************************!*\
  !*** ./src/app/base/card/card.model.ts ***!
  \*****************************************/
/*! exports provided: CardEditModeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardEditModeEvent", function() { return CardEditModeEvent; });
var CardEditModeEvent;
(function (CardEditModeEvent) {
    CardEditModeEvent[CardEditModeEvent["Enable"] = 0] = "Enable";
    CardEditModeEvent[CardEditModeEvent["Save"] = 1] = "Save";
    CardEditModeEvent[CardEditModeEvent["Cancel"] = 2] = "Cancel";
})(CardEditModeEvent || (CardEditModeEvent = {}));


/***/ }),

/***/ "1j6E":
/*!*****************************************************!*\
  !*** ./src/app/shared/http/utils/constants.util.ts ***!
  \*****************************************************/
/*! exports provided: SUCCESS_KEY, FAILURE_KEY, EXCEPTION_KEY, ERROR_CODE_KEY, UNKNOWN_SERVER_ERROR, DB_CACHE_RESPONSE_HEADER, LOCALIZATION_RESPONSE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_KEY", function() { return SUCCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE_KEY", function() { return FAILURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXCEPTION_KEY", function() { return EXCEPTION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CODE_KEY", function() { return ERROR_CODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_SERVER_ERROR", function() { return UNKNOWN_SERVER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_CACHE_RESPONSE_HEADER", function() { return DB_CACHE_RESPONSE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALIZATION_RESPONSE_REGEX", function() { return LOCALIZATION_RESPONSE_REGEX; });
const SUCCESS_KEY = 'RESULT_SUCCESS';
const FAILURE_KEY = 'RESULT_FAILURE';
const EXCEPTION_KEY = 'EXCEPTION';
const ERROR_CODE_KEY = 'ERROR_CODE';
const UNKNOWN_SERVER_ERROR = 'Unknown server error';
const DB_CACHE_RESPONSE_HEADER = 'cacheInIndexedDb';
const LOCALIZATION_RESPONSE_REGEX = /i18n.*\.json/;


/***/ }),

/***/ "1wKo":
/*!*************************************************************!*\
  !*** ./src/app/shared/dictionaries/dictionaries.service.ts ***!
  \*************************************************************/
/*! exports provided: DictionariesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionariesService", function() { return DictionariesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var _shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.utils */ "rIQ8");
/* harmony import */ var _shared_dictionaries_services_dictionaries_matchers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/services/dictionaries-matchers.service */ "v4UZ");
/* harmony import */ var _app_shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/dictionaries/dictionaries.indexed-db */ "7mus");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/http.service */ "bUwk");
/* harmony import */ var _core_services_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/url.service */ "Yrpq");











class DictionariesService {
    constructor($indexedDb, $config, $http, $url) {
        this.$indexedDb = $indexedDb;
        this.$config = $config;
        this.$http = $http;
        this.$url = $url;
        this._already$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._progress$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._dictionaryCount = Object(_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_4__["getLoadableDictionaries"])().length;
    }
    get already$() {
        return this._already$.asObservable();
    }
    get progress$() {
        return this._progress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((progress) => Math.round((100 * progress) / this._dictionaryCount)));
    }
    getDictionary(name, whenEmpty = null) {
        return this.$indexedDb
            .getDictionary(name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((dictionary) => dictionary || whenEmpty));
    }
    getDictionaryItemByKey(name, id, whenEmpty = null) {
        return this.$indexedDb
            .getDictionaryItemByKey(name, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((dictionary) => dictionary || whenEmpty));
    }
    getDictionaryItemByIndex(name, index, value, whenEmpty = null) {
        return this.$indexedDb
            .getDictionaryItemByIndex(name, index, value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((dictionary) => dictionary || whenEmpty));
    }
    addDictionary(name, data) {
        return this.$indexedDb.addDictionary(name, data);
    }
    updateDictionaryItem(name, item, key) {
        return this.$indexedDb.updateDictionaryItem(name, item, key);
    }
    checkAlreadyDictionaries() {
        const cacheTime = this.$config.get('dictionariesCacheTime', 0);
        const nowTime = Date.now();
        return this.$indexedDb.getLastCacheTime().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((lastCacheTime) => {
            if (nowTime - lastCacheTime <= cacheTime) {
                this.setAlready();
            }
        }));
    }
    cacheDictionaries() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(Object(_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_4__["getLoadableDictionaries"])().map((dictionary) => this.cacheDictionary(dictionary)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$indexedDb.setLastCacheTime(Date.now())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            if (err) {
                console.error('Error loading dictionaries', err);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.setAlready()));
    }
    cacheDictionariesByName(dictionary) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.cacheDictionary(dictionary)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$indexedDb.setLastCacheTime(Date.now())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            if (err) {
                console.error('Error loading dictionaries', err);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.setAlready()));
    }
    incrementProgress() {
        this._progress$.next(this._progress$.value + 1);
    }
    setAlready() {
        _shared_dictionaries_services_dictionaries_matchers_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesMatchersService"].already = true;
        this._already$.next(true);
        this._already$.complete();
    }
    cacheDictionary(dictionaryName) {
        const dictionaryUrl = this.$config.get('dictionaryUrl');
        const url = this.$url.createUrl(dictionaryUrl, { dictionaryName });
        let data;
        return this.$http.get(url).pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => (data = response.data || [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((response) => this.$indexedDb.updateDictionary(dictionaryName, (response === null || response === void 0 ? void 0 : response.data) || [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('Error loading dictionary', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.incrementProgress()));
    }
    patchDictionaryItem(dictionaryName, itemId, data) {
        const dictionaryUrl = this.$config.get('dictionaryUrl');
        const url = `${this.$url.createUrl(dictionaryUrl, {
            dictionaryName,
        })}/${itemId}`;
        return this.$http.post(url, data).pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    putDictionaries(dictionaryName, data) {
        const dictionaryUrl = this.$config.get('dictionaryUrl');
        const url = `${this.$url.createUrl(dictionaryUrl, {
            dictionaryName,
        })}`;
        return this.$http.put(url, data).pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
}
DictionariesService.ɵfac = function DictionariesService_Factory(t) { return new (t || DictionariesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_6__["DictionariesIndexedDb"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_url_service__WEBPACK_IMPORTED_MODULE_9__["UrlService"])); };
DictionariesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DictionariesService, factory: DictionariesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionariesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_6__["DictionariesIndexedDb"] }, { type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }, { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] }, { type: _core_services_url_service__WEBPACK_IMPORTED_MODULE_9__["UrlService"] }]; }, null); })();


/***/ }),

/***/ "2Mmv":
/*!********************************************************************!*\
  !*** ./src/app/shared/dictionaries/services/floor-maps.service.ts ***!
  \********************************************************************/
/*! exports provided: FloorMapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorMapsService", function() { return FloorMapsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.utils */ "rIQ8");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");








class FloorMapsService {
    constructor($dictionaries, $user) {
        this.$dictionaries = $dictionaries;
        this.$user = $user;
        this._allFloorMaps$ = this.getAllFloorMaps$();
        this._parkingLotsFloorMaps$ = this.getFloorMapsByType$('parkingLots');
        this._roomsFloorMaps$ = this.getFloorMapsByType$('rooms');
        this._workplacesFloorMaps$ = this.getFloorMapsByType$('workplaces');
    }
    get allFloorMaps$() {
        return this._allFloorMaps$;
    }
    get allFloorMapsOne$() {
        return this.allFloorMaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    get parkingLotsFloorMaps$() {
        return this._parkingLotsFloorMaps$;
    }
    get roomsFloorMaps$() {
        return this._roomsFloorMaps$;
    }
    get workplacesFloorMaps$() {
        return this._workplacesFloorMaps$;
    }
    getFloorMaps$(type, buildingId) {
        let floorMaps$ = this.allFloorMaps$;
        switch (type) {
            case 'parkingLots':
                floorMaps$ = this.parkingLotsFloorMaps$;
                break;
            case 'rooms':
                floorMaps$ = this.roomsFloorMaps$;
                break;
            case 'workplaces':
                floorMaps$ = this.workplacesFloorMaps$;
                break;
        }
        return Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(buildingId)
            ? floorMaps$
            : floorMaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(floorMaps => Object(_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_3__["filterFloorMapsByBuildingId"])(floorMaps, buildingId)));
    }
    get sequence$() {
        return this.$user.label$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((label) => (label === null || label === void 0 ? void 0 : label.floorMapsSequence) || []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])));
    }
    getAllFloorMaps$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.$dictionaries.getDictionary('floorMaps'),
            this.sequence$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([allFloorMaps, sequence]) => Object(_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_3__["sortItemsBySequence"])(allFloorMaps, 'id', sequence)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    getFloorMapsByType$(name) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.allFloorMaps$,
            this.$dictionaries.getDictionary(name)
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([floorMaps, items]) => Object(_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_3__["filterFloorMaps"])(floorMaps, items)));
    }
}
FloorMapsService.ɵfac = function FloorMapsService_Factory(t) { return new (t || FloorMapsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
FloorMapsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FloorMapsService, factory: FloorMapsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorMapsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "3G0t":
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary.service */ "8OyG");




class LocalStorageService {
    constructor($dictionary) {
        this.$dictionary = $dictionary;
        this._storage = localStorage;
        this._keys = new Set(...Array.from(new Array(this._storage.length), (_, index) => this._storage.key(index)));
    }
    get(name) {
        return this._storage.getItem(name);
    }
    getObject(name) {
        const objJSON = this.get(name);
        try {
            return JSON.parse(objJSON);
        }
        catch (e) {
            console.error(_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"].get('localStorageBadParsing').replace('$name', name));
            console.error(e);
            return null;
        }
    }
    set(name, value) {
        this._storage.setItem(name, value);
        this._keys.add(name);
    }
    setObject(name, value) {
        let objJSON = null;
        try {
            objJSON = JSON.stringify(value);
            this.set(name, objJSON);
        }
        catch (e) {
            console.error(_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"].get('localStorageBadStringify').replace('$name', name));
            console.error(_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"].get('localStorageObjectNotSaved').replace('$name', name));
            console.error(e);
        }
    }
    has(key) {
        return this._keys.has(key);
    }
    delete(name) {
        this._storage.removeItem(name);
        this._keys.delete(name);
    }
    remove(name) {
        this.delete(name);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"])); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "3jdI":
/*!***********************************************!*\
  !*** ./src/app/layout/header/header.utils.ts ***!
  \***********************************************/
/*! exports provided: QUICK_CREATE_URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICK_CREATE_URLS", function() { return QUICK_CREATE_URLS; });
const QUICK_CREATE_URLS = [
    { label: 'workplace', url: '/reservations/workplace/create' },
    { label: 'appointment', url: '/reservations/appointment/create' },
    { label: 'parking', url: '/reservations/parking/create' }
];


/***/ }),

/***/ "3oFZ":
/*!****************************************!*\
  !*** ./src/app/core/pipes/map.pipe.ts ***!
  \****************************************/
/*! exports provided: MapPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPipe", function() { return MapPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MapPipe {
    transform(arr, keys, deleteKeys = []) {
        if (!(keys instanceof Array)) {
            keys = Object.entries(keys);
        }
        if (!(deleteKeys instanceof Array)) {
            deleteKeys = [];
        }
        return []
            .concat(arr)
            .map((item) => (Object.assign({}, item)))
            .map((item) => {
            keys.forEach(([curKey, newKey]) => {
                item[newKey] = item[curKey];
            });
            keys
                .map(([key1]) => key1)
                .concat(deleteKeys)
                .forEach(key => delete item[key]);
            return item;
        });
    }
}
MapPipe.ɵfac = function MapPipe_Factory(t) { return new (t || MapPipe)(); };
MapPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "map", type: MapPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'map'
            }]
    }], null, null); })();


/***/ }),

/***/ "4bej":
/*!********************************************************************!*\
  !*** ./src/app/base/reservation-by-qr/reservation-by-qr.module.ts ***!
  \********************************************************************/
/*! exports provided: ReservationByQRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationByQRModule", function() { return ReservationByQRModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/ngx-scanner */ "IyRd");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _filters_filters_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filters/filters.module */ "9jWK");
/* harmony import */ var _reservation_by_qr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reservation-by-qr.component */ "w9E8");
/* harmony import */ var _reservation_by_qr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reservation-by-qr.service */ "+9/e");










class ReservationByQRModule {
}
ReservationByQRModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReservationByQRModule });
ReservationByQRModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ReservationByQRModule_Factory(t) { return new (t || ReservationByQRModule)(); }, providers: [_reservation_by_qr_service__WEBPACK_IMPORTED_MODULE_8__["ReservationByQRService"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _filters_filters_module__WEBPACK_IMPORTED_MODULE_6__["FiltersModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReservationByQRModule, { declarations: [_reservation_by_qr_component__WEBPACK_IMPORTED_MODULE_7__["ReservationByQRComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _filters_filters_module__WEBPACK_IMPORTED_MODULE_6__["FiltersModule"],
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"]], exports: [_reservation_by_qr_component__WEBPACK_IMPORTED_MODULE_7__["ReservationByQRComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReservationByQRModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_reservation_by_qr_component__WEBPACK_IMPORTED_MODULE_7__["ReservationByQRComponent"]],
                exports: [_reservation_by_qr_component__WEBPACK_IMPORTED_MODULE_7__["ReservationByQRComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _filters_filters_module__WEBPACK_IMPORTED_MODULE_6__["FiltersModule"],
                    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"]
                ],
                providers: [_reservation_by_qr_service__WEBPACK_IMPORTED_MODULE_8__["ReservationByQRService"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "4lnu":
/*!************************************************************************!*\
  !*** ./src/app/shared/dictionaries/constants/measurements.constant.ts ***!
  \************************************************************************/
/*! exports provided: MEASUREMENTS_DICT_NAME, MEASUREMENTS_URL_KEY, MEASUREMENTS_DEFAULT_VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEASUREMENTS_DICT_NAME", function() { return MEASUREMENTS_DICT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEASUREMENTS_URL_KEY", function() { return MEASUREMENTS_URL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEASUREMENTS_DEFAULT_VALUES", function() { return MEASUREMENTS_DEFAULT_VALUES; });
const MEASUREMENTS_DICT_NAME = 'measurements';
const MEASUREMENTS_URL_KEY = 'measurementsUrl';
const MEASUREMENTS_DEFAULT_VALUES = [
    {
        id: 1,
        lang: 'ru',
        default: true,
        measurements: {
            date: 'dd.MM.yyyy',
            time: 'HH:mm:ss',
            dateTime: 'dd.MM.yyyy HH:mm:ss',
            shortDate: 'dd.MM.yy',
            shortTime: 'HH:mm',
            shortDateTime: 'dd.MM.yy HH:mm',
            filterDate: 'yyyy-MM-dd HH:mm:ss.SSS Z'
        }
    },
    {
        "id": 2,
        "lang": "en",
        "default": false,
        "measurements": {
            "date": "yyyy-MM-dd",
            "time": "HH:mm:ss",
            "dateTime": "yyyy-MM-dd HH:mm:ss",
            "shortDate": "yy-MM-dd",
            "shortTime": "HH:mm",
            "shortDateTime": "yy-MM-dd HH:mm",
            "filterDate": "yyyy-MM-dd HH:mm:ss.SSS Z"
        }
    }
];


/***/ }),

/***/ "5YXH":
/*!*********************************************************************!*\
  !*** ./src/app/base/renderer/components/status/status.component.ts ***!
  \*********************************************************************/
/*! exports provided: StatusRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusRendererComponent", function() { return StatusRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_renderer_components_map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/renderer/components/map/map.component */ "GnH+");
/* harmony import */ var _base_renderer_components_status_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/renderer/components/status/status.service */ "eMNE");





class StatusRendererComponent extends _base_renderer_components_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapRendererComponent"] {
    constructor($service) {
        super();
        this.$service = $service;
        this.needConvert = true;
    }
    get mappedValue() {
        var _a, _b;
        return ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b[this.value]) || this.value;
    }
    ngOnInit() {
        var _a;
        if (this.needConvert) {
            this.color = this.$service.mapColor(this.options, this.value);
            this.value = (_a = this.mappedValue) === null || _a === void 0 ? void 0 : _a.value;
        }
    }
}
StatusRendererComponent.ɵfac = function StatusRendererComponent_Factory(t) { return new (t || StatusRendererComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_base_renderer_components_status_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"])); };
StatusRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusRendererComponent, selectors: [["app-status-renderer"]], hostVars: 2, hostBindings: function StatusRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-status-renderer", true);
    } }, inputs: { value: "value", color: "color", needConvert: "needConvert" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_base_renderer_components_status_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[1, "app-status-renderer__indicator"], [1, "app-status-renderer__label"]], template: function StatusRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
    } }, styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n}\n.app-status-renderer__indicator[_ngcontent-%COMP%] {\n  background: #1890ff;\n  border-radius: 50%;\n  display: inline-block;\n  flex: 0 0 6px;\n  height: 6px;\n  margin-right: 8px;\n}\n.app-status-renderer__label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFoQkQ7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWtCRjtBQWRFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWdCSjtBQWJFO0VBQ0UsY0FBQTtBQWVKIiwiZmlsZSI6InN0YXR1cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuOmhvc3Qge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLXN0YXR1cy1yZW5kZXJlciB7XG4gICZfX2luZGljYXRvciB7XG4gICAgYmFja2dyb3VuZDogQGJsdWUtNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsZXg6IDAgMCA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cblxuICAmX19sYWJlbCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusRendererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-status-renderer',
                templateUrl: './status.component.html',
                styleUrls: ['./status.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.app-status-renderer]': `true`
                },
                providers: [_base_renderer_components_status_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]]
            }]
    }], function () { return [{ type: _base_renderer_components_status_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], needConvert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "60b9":
/*!***************************************************************!*\
  !*** ./src/app/shared/dictionaries/dictionaries.constants.ts ***!
  \***************************************************************/
/*! exports provided: DICTIONARY_PREFIX_NAME, LAST_CACHE_TIME_KEY, dbConfigItem, dbConfigStatusItem, dbCustomDictionariesConfig, DICTIONARIES, CUSTOM_DICTIONARIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DICTIONARY_PREFIX_NAME", function() { return DICTIONARY_PREFIX_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_CACHE_TIME_KEY", function() { return LAST_CACHE_TIME_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbConfigItem", function() { return dbConfigItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbConfigStatusItem", function() { return dbConfigStatusItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbCustomDictionariesConfig", function() { return dbCustomDictionariesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DICTIONARIES", function() { return DICTIONARIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_DICTIONARIES", function() { return CUSTOM_DICTIONARIES; });
const DICTIONARY_PREFIX_NAME = 'dict_';
const LAST_CACHE_TIME_KEY = 'dictionariesLastCacheTime';
const dbConfigItem = {
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
    ]
};
const dbConfigStatusItem = {
    store: `${DICTIONARY_PREFIX_NAME}statuses`,
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'code', keypath: 'code', options: { unique: true } },
    ]
};
const dbCustomDictionariesConfig = [
    {
        store: `${DICTIONARY_PREFIX_NAME}statuses`,
        storeConfig: { keyPath: 'id', autoIncrement: false },
        storeSchema: [
            { name: 'id', keypath: 'id', options: { unique: true } },
            { name: 'lang', keypath: 'lang', options: { unique: true } },
            { name: 'default', keypath: 'default', options: { unique: false } },
        ]
    },
    {
        store: `${DICTIONARY_PREFIX_NAME}measurements`,
        storeConfig: { keyPath: 'id', autoIncrement: false },
        storeSchema: [
            { name: 'id', keypath: 'id', options: { unique: true } },
            { name: 'lang', keypath: 'lang', options: { unique: true } },
            { name: 'default', keypath: 'default', options: { unique: false } },
        ]
    }
];
const DICTIONARIES = [
    'buildings',
    'floorMaps',
    'rooms',
    'workplaceGroups',
    'workplaces',
    'labelGroups',
    'labels',
    'tags',
    'gateways',
    'beacons',
    'customObjects',
    'serviceDeskItemCategories',
    'serviceDeskItems',
    'statuses',
    'measurements',
    'areas',
    'parkingLots'
];
const CUSTOM_DICTIONARIES = ['statuses', 'measurements'];


/***/ }),

/***/ "6A2W":
/*!**************************************************************************!*\
  !*** ./src/app/presentation/team/team-profile/team-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: TeamProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfileComponent", function() { return TeamProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_team_team_profile_team_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/team/team-profile/team-profile.service */ "fKer");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/models/app-errorl.model */ "zewn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/http/services/meta-api.service */ "s4sJ");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _composite_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @composite/user-card/user-card.component */ "tuJx");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../base/renderer/components/status/status.component */ "5YXH");
















function TeamProfileComponent_nz_tab_7_ng_container_1_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](column_r7.title);
} }
const _c0 = function (a0) { return [a0]; };
function TeamProfileComponent_nz_tab_7_ng_container_1_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamProfileComponent_nz_tab_7_ng_container_1_tr_7_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const row_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.onClick(row_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TeamProfileComponent_nz_tab_7_ng_container_1_tr_7_Template_a_click_6_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-status-renderer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r8.building);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r8.floor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, "/office/" + row_r8.floorId + "/" + row_r8.placeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r8.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 9, row_r8.startDate, ctx_r6.dataFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 12, row_r8.endDate, ctx_r6.dataFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "status")("value", row_r8.status.value)("options", row_r8.status.options);
} }
function TeamProfileComponent_nz_tab_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-table", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TeamProfileComponent_nz_tab_7_ng_container_1_th_5_Template, 2, 1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TeamProfileComponent_nz_tab_7_ng_container_1_tr_7_Template, 16, 17, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx_r3.workplaceTable.data)("nzPageSize", ctx_r3.workplaceTable.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.workplaceTable.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r4.data);
} }
function TeamProfileComponent_nz_tab_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TeamProfileComponent_nz_tab_7_ng_container_1_Template, 8, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 === 0);
} }
class TeamProfileComponent {
    constructor($service, cdr, $router, $meta) {
        this.$service = $service;
        this.cdr = cdr;
        this.$router = $router;
        this.$meta = $meta;
        this.tabs = [];
        this.dataFormat = this.$service.dateFormat;
        this.workplaceTable = {
            pageSize: 10,
            data: [],
            columns: [
                { title: 'Здание' },
                { title: 'Этаж' },
                { title: 'Место' },
                { title: 'Начало' },
                { title: 'Окончание' },
                { title: 'Статус' },
            ]
        };
        this.id$ = $service.userId$;
        this.sub = $service.workplaceTableMeta$.subscribe((tableMeta) => {
            this.workplaceTable.data = tableMeta;
            this.cdr.markForCheck();
        });
        this.sub = $meta.getMeta('profile').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(profileMeta => !(profileMeta instanceof _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_5__["AppError"]))).subscribe((profileMeta) => {
            // @ts-ignore
            this.tabs = profileMeta.tabs;
            this.cdr.markForCheck();
        });
    }
    onClick(row) {
        this.$router.navigateByUrl(`/team/reservations/workplace/view/${row.reservationId}`);
    }
    ngOnDestroy() {
    }
}
TeamProfileComponent.ɵfac = function TeamProfileComponent_Factory(t) { return new (t || TeamProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_presentation_team_team_profile_team_profile_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_7__["MetaApiService"])); };
TeamProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamProfileComponent, selectors: [["app-team-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_presentation_team_team_profile_team_profile_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfileService"]])], decls: 8, vars: 6, consts: [[3, "nzGutter"], [3, "nzFlex"], [1, "mb-10", 3, "userId"], [1, "light-fon", "px-15"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"], [4, "ngIf"], [3, "nzData", "nzPageSize"], ["tableRef", ""], [4, "ngFor", "ngForOf"], ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", 3, "click"], [3, "routerLink", "click"], [3, "type", "value", "options"]], template: function TeamProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-user-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TeamProfileComponent_nz_tab_7_Template, 2, 2, "nz-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzFlex", "340px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userId", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.id$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], _composite_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__["UserCardComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_10__["NzTabComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__["NzThMeasureDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _base_renderer_components_status_status_component__WEBPACK_IMPORTED_MODULE_13__["StatusRendererComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLXByb2ZpbGUuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], TeamProfileComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeamProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-team-profile',
                templateUrl: './team-profile.component.html',
                styleUrls: ['./team-profile.component.less'],
                providers: [_presentation_team_team_profile_team_profile_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfileService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _presentation_team_team_profile_team_profile_service__WEBPACK_IMPORTED_MODULE_2__["TeamProfileService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_7__["MetaApiService"] }]; }, { sub: [] }); })();


/***/ }),

/***/ "6CMr":
/*!******************************************************!*\
  !*** ./src/app/shared/http/utils/error-code.util.ts ***!
  \******************************************************/
/*! exports provided: errorCode, transformErrorCode, transformErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCode", function() { return errorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformErrorCode", function() { return transformErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformErrorMessage", function() { return transformErrorMessage; });
/* harmony import */ var _app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/http/utils/constants.util */ "1j6E");

const errorCode = {
    '4000': 400,
    '4001': 401,
    '4002': 402,
    '4003': 403,
    '5000': 500,
    '5001': 501,
    '5002': 502,
    '5003': 503,
    '5012': 401
};
const transformErrorCode = (code) => errorCode[code] || errorCode['4000'];
const transformErrorMessage = (message) => message || _app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__["UNKNOWN_SERVER_ERROR"];


/***/ }),

/***/ "6hwj":
/*!**************************************************************!*\
  !*** ./src/app/shared/http/interceptors/auth.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _presentation_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/auth/auth.service */ "hsFk");




class AuthInterceptor {
    constructor(_user, _auth) {
        this._user = _user;
        this._auth = _auth;
    }
    intercept(request, next) {
        if (this._auth.isLoggedIn) {
            request = request.clone({
                headers: request.headers
                    .set('Authorization', this._user.authorization)
                    .set('label_token', this._user.tokenUUID)
                    .set('deviceOs', 'ANGULAR'),
                body: Object.assign(Object.assign({}, request.body), { tokenUUID: this._user.tokenUUID, deviceId: this._user.deviceId }),
            });
        }
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_presentation_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _presentation_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "6phe":
/*!***********************************************!*\
  !*** ./src/app/base/title/title.component.ts ***!
  \***********************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TitleComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function TitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TitleComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.extra);
} }
class TitleComponent {
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { title: "title", extra: "extra" }, decls: 2, vars: 1, consts: [[1, "title", "d-flex", "justify-content-between"], [4, "ngIf"], [4, "ngTemplateOutlet"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TitleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extra);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: [".title[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-bottom: 1px solid #f0f0f0;\n  padding: 0 24px 20px;\n}\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWhCRDtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQWtCRjtBQWpCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFtQkoiLCJmaWxlIjoidGl0bGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy90aGVtZS9vdmVycmlkZVwiO1xuXG4udGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGdyYXktNDtcbiAgcGFkZGluZzogMCAyNHB4IDIwcHg7XG4gICYgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title',
                templateUrl: './title.component.html',
                styleUrls: ['./title.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], extra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7RLK":
/*!***********************************************************************!*\
  !*** ./src/app/presentation/offices/offices-map/offices-map.utils.ts ***!
  \***********************************************************************/
/*! exports provided: nowRang, dayRange, breakdownDate, findDateRange, findSliderRange, workDateRange, getSliderLimitValue, getInitDate, setHours, disableWorkplaceFromNeighborsIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowRang", function() { return nowRang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayRange", function() { return dayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakdownDate", function() { return breakdownDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDateRange", function() { return findDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSliderRange", function() { return findSliderRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workDateRange", function() { return workDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSliderLimitValue", function() { return getSliderLimitValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitDate", function() { return getInitDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHours", function() { return setHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableWorkplaceFromNeighborsIds", function() { return disableWorkplaceFromNeighborsIds; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "b/SL");

const nowRang = () => {
    const now = new Date();
    return [now, Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(now, 1)];
};
const dayRange = (now) => {
    return [
        new Date(now.getFullYear(), now.getMonth(), now.getDate()),
        new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59),
    ];
};
const breakdownDate = (range, step) => {
    const [start, end] = range.map((date) => date.getTime());
    if (start >= end) {
        console.error(`Invalid range`, range);
        return;
    }
    const result = [];
    let iterable = start;
    while (iterable < end) {
        result.push(iterable);
        iterable += step;
    }
    return result;
};
const findDateRange = (date, timeRange) => {
    const result = [new Date(date[0]), date[1] ? new Date(date[1]) : null];
    const [startTime, endTime] = timeRange;
    if (!date[1]) {
        result[1] = new Date(result[0]);
    }
    result[0].setHours(new Date(startTime).getHours(), new Date(startTime).getMinutes(), 0, 0);
    result[1].setHours(new Date(endTime).getHours(), new Date(endTime).getMinutes(), 0, 0);
    return result;
};
const findSliderRange = (date) => {
    const result = [new Date(), new Date()];
    result[0].setHours(date[0].getHours(), date[0].getMinutes(), 0, 0);
    result[1].setHours(date[1].getHours(), date[1].getMinutes(), 0, 0);
    return result.map((data) => data.getTime());
};
const workDateRange = (workHours) => {
    const [startWorkHour, endWorkHour] = workHours;
    const result = [new Date(), new Date()];
    result[0].setHours(startWorkHour, 0, 0, 0);
    result[1].setHours(endWorkHour, 0, 0, 0);
    return result;
};
const getSliderLimitValue = (range) => {
    const [startWorkHour, endWorkHour] = range;
    const sliderLimitDate = [new Date(), new Date()];
    sliderLimitDate[0].setHours(startWorkHour, 0, 0, 0);
    sliderLimitDate[1].setHours(endWorkHour, 0, 0, 0);
    return sliderLimitDate.map((date) => date.getTime());
};
const getInitDate = (workHours, minDuration) => {
    const now = new Date();
    const nowHour = now.getHours();
    const nowWithMinDuration = new Date(now.getTime() + minDuration);
    const time = getSliderLimitValue(workHours);
    const [startWorkHour, endWorkHour] = time.map((t) => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getHours"])(new Date(t)));
    const endDate = setHours(now, workHours[1]);
    if (nowHour < endWorkHour && nowHour <= startWorkHour) {
        return [setHours(now, startWorkHour), endDate];
    }
    else if (nowHour < endWorkHour) {
        return [now, endDate];
    }
    else if (nowWithMinDuration > endDate) {
        const nextDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(now, 1);
        return [setHours(nextDay, startWorkHour), setHours(nextDay, endWorkHour)];
    }
};
const setHours = (date, hours) => {
    const newDate = new Date(date);
    newDate.setHours(hours, 0, 0, 0);
    return newDate;
};
const disableWorkplaceFromNeighborsIds = (workplace, neighborsIds) => {
    workplace.disabled = neighborsIds.includes(workplace.id);
    return workplace;
};


/***/ }),

/***/ "7mus":
/*!****************************************************************!*\
  !*** ./src/app/shared/dictionaries/dictionaries.indexed-db.ts ***!
  \****************************************************************/
/*! exports provided: DictionariesIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionariesIndexedDb", function() { return DictionariesIndexedDb; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/dictionaries/dictionaries.utils */ "rIQ8");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.utils */ "WPJJ");
/* harmony import */ var _shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.constants */ "60b9");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-indexed-db */ "BvB/");








class DictionariesIndexedDb {
    constructor($indexedDb) {
        this.$indexedDb = $indexedDb;
    }
    getLastCacheTime() {
        return this.getLastCacheTimeRecord().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(item => item || { value: 0 }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('value'));
    }
    getDictionary(name) {
        return this.$indexedDb.getAll(Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionaryDbStoreName"])(name));
    }
    getDictionaryItemByKey(name, id) {
        return this.$indexedDb.getByKey(Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionaryDbStoreName"])(name), id);
    }
    getDictionaryItemByIndex(name, index, value) {
        return this.$indexedDb.getByIndex(Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionaryDbStoreName"])(name), index, value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            console.error(`Error get dictionary item by index from store '${name} by index '${index}' with value '${value}'`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    setLastCacheTime(lastCacheTime) {
        const value = { name: _shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_5__["LAST_CACHE_TIME_KEY"], value: lastCacheTime };
        return this.getLastCacheTimeRecord().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((lastCacheTimeRecord) => lastCacheTimeRecord
            ? this.$indexedDb.update(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_4__["DB_STORE_OPTIONS"], Object.assign(Object.assign({}, lastCacheTimeRecord), value))
            : this.$indexedDb.add(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_4__["DB_STORE_OPTIONS"], value)));
    }
    clearAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionariesDbStoreNames"])().map(name => this.clear(name))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.error('Error clear dictionaries stores in indexeddb', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    clear(name) {
        name = Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionaryDbStoreName"])(name);
        return this.$indexedDb.clear(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.error(`Error clear dictionary store '${name}' in indexeddb`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    }
    addDictionary(name, items) {
        if (!items.length) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        const next$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](void (0));
        const items$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(items);
        const next = () => next$.next();
        const error = () => next$.next();
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const complete = () => {
                observer.next(null);
                observer.complete();
                next$.complete();
            };
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(items$, next$)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([item,]) => this.addDictionaryItem(name, item)))
                .subscribe(next, error, complete);
        });
    }
    addDictionaryItem(name, value, id) {
        name = Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionaryDbStoreName"])(name);
        return this.$indexedDb.add(name, value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.error(`Error adding an entry with id ${id} to the dictionary ${name}`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    updateDictionary(name, items) {
        if (!(items === null || items === void 0 ? void 0 : items.length)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        return this.clear(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.addDictionary(name, items)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.error(`Error update dictionary ${name}`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    updateDictionaryItem(name, item, key) {
        name = Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionaryDbStoreName"])(name);
        return this.$indexedDb.update(name, item, key);
    }
    getLastCacheTimeRecord() {
        return this.$indexedDb.getByIndex(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_4__["DB_STORE_OPTIONS"], 'name', _shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_5__["LAST_CACHE_TIME_KEY"]);
    }
}
DictionariesIndexedDb.ɵfac = function DictionariesIndexedDb_Factory(t) { return new (t || DictionariesIndexedDb)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_6__["NgxIndexedDBService"])); };
DictionariesIndexedDb.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DictionariesIndexedDb, factory: DictionariesIndexedDb.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionariesIndexedDb, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_6__["NgxIndexedDBService"] }]; }, null); })();


/***/ }),

/***/ "8ERB":
/*!***************************************************!*\
  !*** ./src/app/layout/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/layout/layout-shared.service */ "ndgU");
/* harmony import */ var _app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/layout/navigation/navigation.service */ "0Q2C");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _app_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layout/header/header.component */ "/Lhg");
/* harmony import */ var _app_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/layout/navigation/navigation.component */ "sc19");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_title_title_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../base/title/title.component */ "6phe");
/* harmony import */ var _app_layout_navigation_mobile_navigation_mobile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/layout/navigation-mobile/navigation-mobile.component */ "JSKI");
/* harmony import */ var _base_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../base/breadcrumb/breadcrumb.component */ "eEkR");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");

























const _c0 = ["headerEl"];
const _c1 = ["pageTitleEl"];
function LayoutComponent_app_breadcrumb_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r2.breadcrumbs)("back", ctx_r2.showBackBtn);
} }
function LayoutComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-spin", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "d-none": a0 }; };
class LayoutComponent {
    constructor($layout, cdr, $navigation, $loader, $router) {
        this.$layout = $layout;
        this.cdr = cdr;
        this.$navigation = $navigation;
        this.$loader = $loader;
        this.$router = $router;
        this.isCollapsed = false;
        this.title = '';
        this.showBackBtn = false;
        this.nzSider = {
            nzWidth: 'auto',
            nzTheme: 'light',
            nzCollapsible: false,
        };
        this.navigationItems = this.$navigation.mainNavigation$;
        this.subs = this.$layout.currentRouteData$.subscribe(({ title, breadcrumbs, showBackBtn }) => {
            this.title = title;
            this.breadcrumbs = breadcrumbs;
            this.showBackBtn = showBackBtn;
        });
        this.subs = this.$layout.extra$.subscribe((tpl) => {
            this.extraTpl = tpl;
            if (tpl) {
                this.setContentHeight();
            }
        });
        this.subs = this.$layout.scrollTop$.subscribe(() => {
            this.scrollTop();
        });
        this.subs = this.$layout.extra$.subscribe((tpl) => {
            this.extraTpl = tpl;
            if (tpl) {
                this.setContentHeight();
            }
        });
        this.subs = this.$router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]))
            .subscribe((_e) => {
            this.scrollTop();
        });
    }
    ngAfterViewInit() {
        this.setContentHeight();
    }
    collapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.setContentHeight();
        this.$navigation.collapse.next(this.isCollapsed);
        this.nzSider.nzWidth = this.isCollapsed ? '80px' : '210px';
    }
    setContentHeight() {
        var _a, _b;
        this.contentHeight = `calc(100vh - ${((_a = this.headerEl) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight) + ((_b = this.pageTitleEl) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetHeight)}px)`;
    }
    scrollTop() {
        this.setContentHeight();
        if (this.scroll && this.scroll.container) {
            this.scroll.container.scrollTop = 0;
        }
    }
    ngOnInit() { }
    ngOnDestroy() { }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_8__["LayoutSharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_10__["GlobalLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pageTitleEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroll = _t.first);
    } }, decls: 23, vars: 23, consts: [[1, "layout"], [1, "layout__header"], ["headerEl", ""], [1, "layout__aside", 3, "nzWidth", "nzTheme", "nzCollapsible"], [1, "layout__aside-menu", 3, "items"], [1, "layout__aside-actions"], ["nz-icon", "", 1, "toggle-btn", 3, "nzType", "nz-tooltip", "click"], [1, "layout__content", "p-0"], ["pageTitleEl", ""], ["class", "layout__breadcrumb", 3, "items", "back", 4, "ngIf"], [3, "extra"], ["appScroll", "", 1, "section-content", 3, "ngClass"], ["class", "layout__content-loader", 4, "ngIf"], [3, "items"], [1, "layout__breadcrumb", 3, "items", "back"], [1, "layout__content-loader"], ["nzSimple", "", "nzTip", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-header", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-sider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-navigation", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_i_click_8_listener() { return ctx.collapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LayoutComponent_app_breadcrumb_15_Template, 1, 2, "app-breadcrumb", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LayoutComponent_div_20_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-navigation-mobile", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", ctx.nzSider.nzWidth)("nzTheme", ctx.nzSider.nzTheme)("nzCollapsible", ctx.nzSider.nzCollapsible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.navigationItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, ctx.$navigation.collapse) ? "menu-unfold" : "menu-fold")("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 15, ctx.$navigation.collapse) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("extra", ctx.extraTpl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.contentHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 17, ctx.$loader.contentLoading$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 19, ctx.$loader.contentLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.navigationItems);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__["NzHeaderComponent"], _app_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__["NzSiderComponent"], _app_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__["NzTooltipDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__["NzContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _base_title_title_component__WEBPACK_IMPORTED_MODULE_18__["TitleComponent"], _core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _app_layout_navigation_mobile_navigation_mobile_component__WEBPACK_IMPORTED_MODULE_19__["NavigationMobileComponent"], _base_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__["BreadcrumbComponent"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_21__["NzSpinComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".layout[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.layout__breadcrumb[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 15px 24px;\n}\n.layout__title[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-bottom: 1px solid #f0f0f0;\n  padding: 0 15px 20px;\n}\n.layout__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  margin: 0;\n}\n.layout__header[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 100%;\n  padding: 0 36px;\n  box-shadow: inset 0px -1px 0px #f0f0f0;\n}\n.layout__content[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.layout__content-loader[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  height: calc(100vh - 64px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.layout__aside[_ngcontent-%COMP%] {\n  border-right: 1px solid #f0f0f0;\n}\n.layout__aside[_ngcontent-%COMP%]     .ant-layout-sider-children {\n  display: flex;\n  flex-direction: column;\n}\n.layout__aside-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid #f0f0f0;\n  padding: 14px 16px;\n}\n.layout[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 15px;\n}\n.layout[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFoQkQ7RUFDRSxZQUFBO0FBa0JGO0FBaEJFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQWtCSjtBQWZFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBaUJKO0FBZkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBaUJOO0FBYkU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFlSjtBQVpFO0VBQ0UsYUFBQTtBQWNKO0FBWkk7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFjTjtBQVZFO0VBQ0UsK0JBQUE7QUFZSjtBQWJFO0VBSUksYUFBQTtFQUNBLHNCQUFBO0FBWU47QUFOSTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQVFOO0FBN0RBO0VBMERJLGVBQUE7RUFDQSxlQUFBO0FBTUo7QUFqRUE7RUErREksYUFBQTtFQUNBLGtCQUFBO0FBS0oiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvdGhlbWUvb3ZlcnJpZGVcIjtcblxuLmxheW91dCB7XG4gIGhlaWdodDogMTAwJTtcblxuICAmX19icmVhZGNydW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAZ3JheS00O1xuICAgIHBhZGRpbmc6IDAgMTVweCAyMHB4O1xuXG4gICAgJiBoMSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAmX19oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAzNnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDBweCBAZ3JheS00O1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgcGFkZGluZzogMjVweDtcblxuICAgICYtbG9hZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IEBncmF5LTE7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fYXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIEBncmF5LTQ7XG5cbiAgICA6Om5nLWRlZXAgLmFudC1sYXlvdXQtc2lkZXItY2hpbGRyZW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi1tZW51IHtcbiAgICB9XG5cbiAgICAmLWFjdGlvbnMge1xuICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBAZ3JheS00O1xuICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC50b2dnbGUtYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgLnNlY3Rpb24tY29udGVudCB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_2__["MarkForCheck"]
], LayoutComponent.prototype, "extraTpl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], LayoutComponent.prototype, "subs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_4__["Subscribe"])()
], LayoutComponent.prototype, "navigationItems", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _app_layout_layout_shared_service__WEBPACK_IMPORTED_MODULE_8__["LayoutSharedService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_10__["GlobalLoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { extraTpl: [], subs: [], headerEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['headerEl', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], pageTitleEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['pageTitleEl']
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_core_directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollDirective"]]
        }], navigationItems: [] }); })();


/***/ }),

/***/ "8OyG":
/*!*****************************************************!*\
  !*** ./src/app/core/services/dictionary.service.ts ***!
  \*****************************************************/
/*! exports provided: DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryService", function() { return DictionaryService; });
/* harmony import */ var _utils_dictionary_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dictionary.util */ "nRlI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.tokens */ "UZaM");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");





class DictionaryService {
    constructor(_dicts = []) {
        this._dicts = _dicts;
        _dicts.forEach(dict => DictionaryService.set(dict));
    }
    static get(key, whenNull = null) {
        if (!key.includes('/')) {
            return DictionaryService._words[key] || whenNull || key;
        }
        return key.split('/').map((part) => DictionaryService.get(part, part)).join('/');
    }
    static getAll() {
        return DictionaryService._words;
    }
    static set(keyOrWords, valueOrReplace = null, replace = false) {
        if (keyOrWords instanceof Object) {
            Object
                .entries(keyOrWords)
                .forEach(([key, _value]) => DictionaryService.set(key, _value, Boolean(valueOrReplace)));
            return;
        }
        if (DictionaryService.has(keyOrWords) && !replace) {
            return;
        }
        DictionaryService._words[keyOrWords] = String(valueOrReplace);
    }
    static has(key) {
        return !Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(DictionaryService._words[key]);
    }
    get(key, whenNull = null) {
        return DictionaryService.get(key, whenNull);
    }
    getAll() {
        return DictionaryService._words;
    }
    set(keyOrWords, value = null, replace = false) {
        if (keyOrWords instanceof Object) {
            DictionaryService.set(keyOrWords);
            return;
        }
        DictionaryService.set(keyOrWords, value, replace);
    }
    has(key) {
        return DictionaryService.has(key);
    }
}
DictionaryService._words = _utils_dictionary_util__WEBPACK_IMPORTED_MODULE_0__["InitialWords"];
DictionaryService.ɵfac = function DictionaryService_Factory(t) { return new (t || DictionaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_DICTIONARY"])); };
DictionaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DictionaryService, factory: DictionaryService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DictionaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_core_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_DICTIONARY"]]
            }] }]; }, null); })();


/***/ }),

/***/ "9AfI":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/header/components/header-search/header-search.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var _core_utils_animations_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/animations.util */ "meMk");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var _app_layout_header_components_header_search_header_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/layout/header/components/header-search/header-search.service */ "wcqn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/navigation.service */ "CWrn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _core_directives_blur_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/directives/blur.directive */ "kKEL");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");
/* harmony import */ var _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../core/pipes/highlight.pipe */ "em9I");




























const _c0 = ["inputRef"];
const _c1 = ["searchRef"];
function HeaderSearchComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function HeaderSearchComponent_input_2_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.blur(); })("click", function HeaderSearchComponent_input_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "StartWritingWhatYouWantFind"));
} }
function HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", item_r31);
} }
const _c2 = function (a0, a1) { return { $implicit: a0, type: a1 }; };
function HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_ng_container_2_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_ng_container_3_Template, 2, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resultGroup_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c2, resultGroup_r28.title, resultGroup_r28.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](4, 3, resultGroup_r28.items, 0, 3));
} }
const _c3 = function () { return ["search"]; };
const _c4 = function (a0) { return { query: a0 }; };
function HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "perfect-scrollbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_nz_list_2_Template, 5, 10, "nz-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const results_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", results_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c4, ctx_r26.inputRef.nativeElement.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "ViewAllResults"), " ");
} }
function HeaderSearchComponent_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_4_ng_container_1_ng_container_1_Template, 8, 9, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const results_r25 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", results_r25.length)("ngIfElse", _r12);
} }
function HeaderSearchComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_4_ng_container_1_Template, 2, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r3.results$))("ngIfElse", _r8);
} }
function HeaderSearchComponent_ng_template_6_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c5 = function (a0) { return { $implicit: a0 }; };
function HeaderSearchComponent_ng_template_6_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_6_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r16)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, data_r36));
} }
function HeaderSearchComponent_ng_template_6_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderSearchComponent_ng_template_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_6_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, data_r36));
} }
function HeaderSearchComponent_ng_template_6_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderSearchComponent_ng_template_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_6_ng_container_11_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, data_r36));
} }
function HeaderSearchComponent_ng_template_6_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderSearchComponent_ng_template_6_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_6_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, data_r36));
} }
function HeaderSearchComponent_ng_template_6_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderSearchComponent_ng_template_6_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_6_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, data_r36));
} }
function HeaderSearchComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderSearchComponent_ng_template_6_Template_nz_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const type_r34 = ctx.$implicit; const data_r36 = ctx.data; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.openItem(type_r34, data_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-item-meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-list-item-meta-avatar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "imageBlob");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-list-item-meta-description", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderSearchComponent_ng_template_6_ng_container_9_Template, 2, 4, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderSearchComponent_ng_template_6_ng_container_10_Template, 2, 4, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderSearchComponent_ng_template_6_ng_container_11_Template, 2, 4, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderSearchComponent_ng_template_6_ng_container_12_Template, 2, 4, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderSearchComponent_ng_template_6_ng_container_13_Template, 2, 4, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r34 = ctx.$implicit;
    const title_r35 = ctx.title;
    const img_r37 = ctx.img;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSrc", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 10, img_r37)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 12, title_r35, ctx_r5.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", type_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "customObject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "workplace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "parkingLot");
} }
const _c6 = function (a1) { return ["search", a1]; };
function HeaderSearchComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r55 = ctx.$implicit;
    const type_r56 = ctx.type;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c6, type_r56))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c4, ctx_r7.inputRef.nativeElement.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, title_r55), " ");
} }
function HeaderSearchComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "PleaseEnterQueryForSearch"))("nzNotFoundImage", _r10);
} }
function HeaderSearchComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 30);
} }
function HeaderSearchComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "EmptySearchResults"))("nzNotFoundImage", _r14);
} }
function HeaderSearchComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 31);
} }
function HeaderSearchComponent_ng_template_18_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Post"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, data_r57.post, ctx_r58.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function HeaderSearchComponent_ng_template_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderSearchComponent_ng_template_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Phones"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, data_r57.phones, ctx_r60.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function HeaderSearchComponent_ng_template_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderSearchComponent_ng_template_18_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Email"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, data_r57.mail, ctx_r62.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function HeaderSearchComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderSearchComponent_ng_template_18_span_0_Template, 5, 7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderSearchComponent_ng_template_18_span_1_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderSearchComponent_ng_template_18_span_2_Template, 5, 7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderSearchComponent_ng_template_18_span_3_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderSearchComponent_ng_template_18_span_4_Template, 5, 7, "span", 32);
} if (rf & 2) {
    const data_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r57.post);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r57.post && (data_r57.phones || data_r57.mail));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r57.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r57.phones && data_r57.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r57.mail);
} }
function HeaderSearchComponent_ng_template_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "highlight");
} if (rf & 2) {
    const data_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 1, data_r66.description, ctx_r67.query), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function HeaderSearchComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderSearchComponent_ng_template_20_div_3_Template, 2, 4, "div", 33);
} if (rf & 2) {
    const data_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, "Building"), ": ", data_r66.building, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, "Floor"), ": ", data_r66.floor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r66.description);
} }
class HeaderSearchComponent {
    constructor($navigate, $service, _cdr) {
        this.$navigate = $navigate;
        this.$service = $service;
        this._cdr = _cdr;
        this.isActiveSearch = false;
        this.value = null;
        this.query = '';
        this.loading = false;
    }
    toggleSearch() {
        this.toggleActive();
        if (this.isActiveSearch) {
            this.open();
        }
        else {
            this.close();
        }
    }
    focus() {
        this._isFocus = true;
        this.inputRef.nativeElement.focus();
    }
    blur() {
        this._isFocus = false;
        this.close();
    }
    open() {
        this.focus();
        this.searchRef.show();
        this.results$ = this.$service
            .getQuery$(this.inputRef)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((query) => {
            this.query = query;
            return this.$service.getResultsByQuery$(query);
        }));
    }
    close() {
        var _a, _b;
        if (this._isFocus) {
            return;
        }
        (_a = this._subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this._subscription = null;
        (_b = this.searchRef) === null || _b === void 0 ? void 0 : _b.hide();
        if (this.inputRef) {
            this.inputRef.nativeElement.value = '';
        }
        if (this.isActiveSearch) {
            this.toggleActive();
        }
    }
    openItem(type, data) {
        this.$service.openItem(type, data);
    }
    toggleActive() {
        this.isActiveSearch = !this.isActiveSearch;
    }
}
HeaderSearchComponent.ɵfac = function HeaderSearchComponent_Factory(t) { return new (t || HeaderSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_layout_header_components_header_search_header_search_service__WEBPACK_IMPORTED_MODULE_7__["HeaderSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
HeaderSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderSearchComponent, selectors: [["app-header-search"]], viewQuery: function HeaderSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_5__["NzPopoverDirective"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchRef = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListComponent"], _app_layout_header_components_header_search_header_search_service__WEBPACK_IMPORTED_MODULE_7__["HeaderSearchService"]])], decls: 22, vars: 8, consts: [[1, "search", 3, "nz-popover", "nzPopoverTrigger", "nzPopoverContent", "nzPopoverPlacement", "nzPopoverOverlayClassName"], ["searchRef", ""], ["nz-input", "", "class", "search__control animate__animated animate__fadeInLeft", 3, "placeholder", "blur", "click", 4, "ngIf"], ["nz-icon", "", 1, "search__icon", 3, "nzType", "nzTheme", "nz-tooltip", "click"], ["searchResultTpl", ""], ["searchResultItemTpl", ""], ["searchResultHeaderTpl", ""], ["noSearchQueryResultsTpl", ""], ["noSearchQueryResultsIconTpl", ""], ["emptysearchResultTpl", ""], ["emptyResultsIconTpl", ""], ["searchResultItemDescriptionUserTpl", ""], ["searchResultItemReserveItemTpl", ""], ["nz-input", "", 1, "search__control", "animate__animated", "animate__fadeInLeft", 3, "placeholder", "blur", "click"], ["inputRef", ""], [1, "header-search-results"], [4, "ngIf", "ngIfElse"], [1, "header-search-results__scroll"], [4, "ngFor", "ngForOf"], [1, "text-center"], [3, "routerLink", "queryParams"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "header-search-results__item", 3, "click"], [3, "nzSrc"], [3, "innerHTML"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "header-search-results__title"], ["nz-typography", "", "nzType", "link"], [3, "nzNotFoundContent", "nzNotFoundImage"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["nz-icon", "", "nzType", "frown", "nzTheme", "outline"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"]], template: function HeaderSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderSearchComponent_input_2_Template, 3, 3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderSearchComponent_Template_i_click_3_listener() { return ctx.toggleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderSearchComponent_ng_template_4_Template, 3, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderSearchComponent_ng_template_6_Template, 14, 15, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderSearchComponent_ng_template_8_Template, 5, 9, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderSearchComponent_ng_template_10_Template, 2, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderSearchComponent_ng_template_12_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderSearchComponent_ng_template_14_Template, 2, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HeaderSearchComponent_ng_template_16_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HeaderSearchComponent_ng_template_18_Template, 5, 5, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HeaderSearchComponent_ng_template_20_Template, 4, 9, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPopoverTrigger", null)("nzPopoverContent", _r2)("nzPopoverPlacement", "bottomLeft")("nzPopoverOverlayClassName", "header-search-results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActiveSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "search")("nzTheme", "outline")("nz-tooltip", "\u041F\u043E\u0438\u0441\u043A");
    } }, directives: [ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_5__["NzPopoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__["NzTooltipDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputDirective"], _core_directives_blur_directive__WEBPACK_IMPORTED_MODULE_15__["BlurDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListItemComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListItemMetaComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListItemMetaAvatarComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListItemMetaTitleComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListItemMetaDescriptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_19__["NzTypographyComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__["NzEmptyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_22__["ImageBlobPipe"], _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_23__["HighlightPipe"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n.search[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n}\n.search__control[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  animation-duration: 0.5s;\n}\n.search__icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header-search-results__title[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n.header-search-results__item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0;\n  transition: background 0.25s;\n}\n.header-search-results__item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background: #e6f7ff;\n}\n.header-search-results__item[_ngcontent-%COMP%]     .ant-list-item-meta {\n  padding: 12px;\n}\n.header-search-results__scroll[_ngcontent-%COMP%] {\n  margin-right: -12px;\n  max-height: 330px;\n  max-width: calc(100% + 12px);\n  padding-right: 12px;\n  position: relative;\n  width: calc(100% + 12px);\n}\n  .header-search-results__scroll .ps,   .header-search-results__scroll .ps-content {\n  max-height: 330px;\n}\n.header-search-results[_ngcontent-%COMP%]     .ant-empty-image {\n  align-items: center;\n  color: #aaaaaa;\n  display: flex;\n  font-size: 48px;\n  justify-content: center;\n}\n.header-search-results[_ngcontent-%COMP%]     nz-divider {\n  margin: 8px 0 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1zZWFyY2guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBaEJEO0VBQ0UscUJBQUE7QUFrQkY7QUFoQkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQWtCRjtBQWhCRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUFrQko7QUFmRTtFQUNFLGVBQUE7QUFpQko7QUFYSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBYU47QUFWSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFZTjtBQWZJO0VBTUksbUJBQUE7QUFZUjtBQWxCSTtFQVVJLGFBQUE7QUFXUjtBQVBJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBU047QUFQTTs7RUFFRSxpQkFBQTtBQVNSO0FBeENFO0VBb0NJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFPTjtBQS9DRTtFQTRDSSxrQkFBQTtBQU1OIiwiZmlsZSI6ImhlYWRlci1zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29sb3JzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlYXJjaCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgJl9fY29udHJvbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xuICB9XG5cbiAgJl9faWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5oZWFkZXItc2VhcmNoIHtcbiAgJi1yZXN1bHRzIHtcbiAgICAmX190aXRsZSB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXM7XG5cbiAgICAgIDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBibHVlLTE7XG4gICAgICB9XG5cbiAgICAgIDo6bmctZGVlcCAuYW50LWxpc3QtaXRlbS1tZXRhIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19zY3JvbGwge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbiAgICAgIG1heC1oZWlnaHQ6IDMzMHB4O1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgKyAxMnB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogY2FsYygxMDAlICsgMTJweCk7XG5cbiAgICAgIDo6bmctZGVlcCAmIC5wcyxcbiAgICAgIDo6bmctZGVlcCAmIC5wcy1jb250ZW50IHtcbiAgICAgICAgbWF4LWhlaWdodDogMzMwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5hbnQtZW1wdHktaW1hZ2Uge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCBuei1kaXZpZGVyIHtcbiAgICAgIG1hcmdpbjogOHB4IDAgMTJweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [Object(_core_utils_animations_util__WEBPACK_IMPORTED_MODULE_3__["getFadeInOutAnimation"])()] }, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_4__["MarkForCheck"]
], HeaderSearchComponent.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_2__["Debounce"])(500)
], HeaderSearchComponent.prototype, "open", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_2__["Debounce"])(250)
], HeaderSearchComponent.prototype, "close", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header-search',
                templateUrl: './header-search.component.html',
                styleUrls: ['./header-search.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                animations: [Object(_core_utils_animations_util__WEBPACK_IMPORTED_MODULE_3__["getFadeInOutAnimation"])()],
                providers: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__["NzListComponent"], _app_layout_header_components_header_search_header_search_service__WEBPACK_IMPORTED_MODULE_7__["HeaderSearchService"]]
            }]
    }], function () { return [{ type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"] }, { type: _app_layout_header_components_header_search_header_search_service__WEBPACK_IMPORTED_MODULE_7__["HeaderSearchService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { loading: [], inputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inputRef']
        }], searchRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchRef', { read: ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_5__["NzPopoverDirective"] }]
        }], open: [], close: [] }); })();


/***/ }),

/***/ "9Ig5":
/*!************************************************************!*\
  !*** ./src/app/shared/images/pipes/full-image-url.pipe.ts ***!
  \************************************************************/
/*! exports provided: FullImageUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullImageUrlPipe", function() { return FullImageUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");



const LOCAL_IMAGE_REGEXP = /^(\.)?(\/)?assets/;
class FullImageUrlPipe {
    constructor($config) {
        this.$config = $config;
        if (!FullImageUrlPipe._hostUrl) {
            this.$config
                .getOne$('hostUrl')
                .subscribe((hostUrl) => FullImageUrlPipe._hostUrl = hostUrl.endsWith('/') ? hostUrl.slice(0, -1) : hostUrl);
        }
    }
    transform(imageUrl) {
        if (!imageUrl) {
            return null;
        }
        if (LOCAL_IMAGE_REGEXP.test(imageUrl)) {
            return imageUrl;
        }
        if (imageUrl.startsWith('/')) {
            imageUrl = imageUrl.slice(1);
        }
        return `${FullImageUrlPipe._hostUrl}/${imageUrl}`;
    }
}
FullImageUrlPipe._hostUrl = '';
FullImageUrlPipe.ɵfac = function FullImageUrlPipe_Factory(t) { return new (t || FullImageUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"])); };
FullImageUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fullImageUrl", type: FullImageUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullImageUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'fullImageUrl'
            }]
    }], function () { return [{ type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "9jWK":
/*!************************************************!*\
  !*** ./src/app/base/filters/filters.module.ts ***!
  \************************************************/
/*! exports provided: FiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersModule", function() { return FiltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @base/filters/filter-checkbox/filter-checkbox.component */ "JPRT");
/* harmony import */ var _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/filters/filters/filter.component */ "cpCo");
/* harmony import */ var _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/filters/filter-checkbox-group/filter-checkbox-group.component */ "FHVQ");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @base/filters/filter-date/filter-date.component */ "XYHI");
/* harmony import */ var _base_filters_filter_date_time_filter_date_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/filters/filter-date-time/filter-date-time.component */ "MJ0a");










class FiltersModule {
}
FiltersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FiltersModule });
FiltersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FiltersModule_Factory(t) { return new (t || FiltersModule)(); }, imports: [[_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forChild(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FiltersModule, { declarations: [_base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"],
        _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["FilterCheckboxComponent"],
        _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_3__["FilterCheckboxGroupComponent"],
        _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_6__["FilterDateComponent"],
        _base_filters_filter_date_time_filter_date_time_component__WEBPACK_IMPORTED_MODULE_7__["FilterDateTimeComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]], exports: [_base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"],
        _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["FilterCheckboxComponent"],
        _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_3__["FilterCheckboxGroupComponent"],
        _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_6__["FilterDateComponent"],
        _base_filters_filter_date_time_filter_date_time_component__WEBPACK_IMPORTED_MODULE_7__["FilterDateTimeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"],
                    _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["FilterCheckboxComponent"],
                    _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_3__["FilterCheckboxGroupComponent"],
                    _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_6__["FilterDateComponent"],
                    _base_filters_filter_date_time_filter_date_time_component__WEBPACK_IMPORTED_MODULE_7__["FilterDateTimeComponent"],
                ],
                imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forChild(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]],
                exports: [
                    _base_filters_filters_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"],
                    _base_filters_filter_checkbox_filter_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["FilterCheckboxComponent"],
                    _base_filters_filter_checkbox_group_filter_checkbox_group_component__WEBPACK_IMPORTED_MODULE_3__["FilterCheckboxGroupComponent"],
                    _base_filters_filter_date_filter_date_component__WEBPACK_IMPORTED_MODULE_6__["FilterDateComponent"],
                    _base_filters_filter_date_time_filter_date_time_component__WEBPACK_IMPORTED_MODULE_7__["FilterDateTimeComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "9sBA":
/*!**************************************!*\
  !*** ./src/theme/ts/color-aslias.ts ***!
  \**************************************/
/*! exports provided: ColorAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAlias", function() { return ColorAlias; });
var ColorAlias;
(function (ColorAlias) {
    ColorAlias["active"] = "#FADB14";
    ColorAlias["danger"] = "#FF4D4F";
    ColorAlias["default"] = "#8C8C8C";
    ColorAlias["error"] = "#FF4D4F";
    ColorAlias["neutral"] = "#8C8C8C";
    ColorAlias["warning"] = "#FA8C16";
    ColorAlias["success"] = "#3FA80B";
    ColorAlias["primary"] = "#40a9ff";
})(ColorAlias || (ColorAlias = {}));


/***/ }),

/***/ "9yuT":
/*!********************************************************!*\
  !*** ./src/app/shared/images/pipes/image-blob.pipe.ts ***!
  \********************************************************/
/*! exports provided: ImageBlobPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlobPipe", function() { return ImageBlobPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/images/services/image-blob.service */ "AgCt");





class ImageBlobPipe {
    constructor($images) {
        this.$images = $images;
    }
    get blobs() {
        return ImageBlobPipe._blobs;
    }
    transform(url) {
        if (this.blobs.has(url)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.blobs.get(url));
        }
        return this.$images
            .getImageBlob(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((blob) => this.blobs.set(url, blob)));
    }
}
ImageBlobPipe._blobs = new Map();
ImageBlobPipe.ɵfac = function ImageBlobPipe_Factory(t) { return new (t || ImageBlobPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_3__["ImageBlobService"])); };
ImageBlobPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "imageBlob", type: ImageBlobPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageBlobPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'imageBlob'
            }]
    }], function () { return [{ type: _shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_3__["ImageBlobService"] }]; }, null); })();


/***/ }),

/***/ "ALpe":
/*!*******************************************************!*\
  !*** ./src/app/core/decorators/complete.decorator.ts ***!
  \*******************************************************/
/*! exports provided: Complete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Complete", function() { return Complete; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

function Complete(target, propertyKey, descriptor) {
    const { name } = (target === null || target === void 0 ? void 0 : target.constructor) || {};
    const originalMethod = descriptor.value;
    if (typeof originalMethod !== 'function') {
        console.error(`Complete decorator error: The property '${propertyKey} of ${name} is not a function`);
        return;
    }
    descriptor.value = function newMethod(...args) {
        try {
            Object.values(this)
                .filter((prop) => prop instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"])
                .forEach((subject) => subject === null || subject === void 0 ? void 0 : subject.complete());
        }
        catch (e) {
            console.error(`Complete decorator error: Can't complete some subjects of ${name}`);
            console.error(e.message);
        }
        originalMethod.apply(this, args);
    };
    return descriptor;
}


/***/ }),

/***/ "AdiC":
/*!***************************************************************!*\
  !*** ./src/app/shared/global-search/global-search.service.ts ***!
  \***************************************************************/
/*! exports provided: GlobalSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchService", function() { return GlobalSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/global-search/global-search.utils */ "ty2q");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");
/* harmony import */ var _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dictionaries/services/floor-maps.service */ "2Mmv");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/navigation.service */ "CWrn");









class GlobalSearchService {
    constructor($dictionaries, $buildings, $floorMaps, $navigate) {
        this.$dictionaries = $dictionaries;
        this.$buildings = $buildings;
        this.$floorMaps = $floorMaps;
        this.$navigate = $navigate;
    }
    search(query, filterEmpty = true) {
        return this
            .joinSearchResult(query)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => !filterEmpty
            ? result
            : result.filter(group => group.items.length > 0)));
    }
    searchUsers(query) {
        return this
            .searchByDictionary('labels', query, 'user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((labels) => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["mapSearchResult"])(labels, 'Users', 'user')));
    }
    searchCustomObjects(query) {
        return this
            .searchByDictionary('customObjects', query, 'customObject')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(customObjects => this.mapItemsToFloorMaps(customObjects)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(customObjects => this.mapItemsToBuildings(customObjects)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((customObjects) => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["mapSearchResult"])(customObjects, 'CustomObjects', 'customObject')));
    }
    searchWorkplaces(query) {
        return this
            .searchByDictionary('workplaces', query, 'workplace')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(workplaces => this.mapItemsToFloorMaps(workplaces)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(workplaces => this.mapItemsToBuildings(workplaces)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((workplaces) => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["mapSearchResult"])(workplaces, 'Workplaces', 'workplace')));
    }
    searchRooms(query) {
        return this
            .searchByDictionary('rooms', query, 'room')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(rooms => this.mapItemsToFloorMaps(rooms)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(rooms => this.mapItemsToBuildings(rooms)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((rooms) => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["mapSearchResult"])(rooms, 'Rooms', 'room')));
    }
    searchParkingLots(query) {
        return this
            .searchByDictionary('parkingLots', query, 'parkingLot')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(parkingLots => this.mapItemsToFloorMaps(parkingLots)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(parkingLots => this.mapItemsToBuildings(parkingLots)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((parkingLots) => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["mapSearchResult"])(parkingLots, 'ParkingLots', 'parkingLot')));
    }
    searchByDictionary(name, query, type) {
        return this.$dictionaries
            .getDictionary(name, [])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(items => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["filterDictionaryItems"])(items, query, type)));
    }
    openItem(type, data) {
        const route = _shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["ITEMS_ROUTES"][type].slice(0);
        if (type !== 'user') {
            route.push(data.buildingId);
        }
        route.push(String(data.id));
        this.$navigate.go(route, {});
    }
    mapItemsToFloorMaps(items) {
        return this.$floorMaps.allFloorMapsOne$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(floorMaps => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["mapItemsToFloorMaps"])(items, floorMaps)));
    }
    mapItemsToBuildings(items) {
        return this.$buildings.allBuildingsOne$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(buildings => Object(_shared_global_search_global_search_utils__WEBPACK_IMPORTED_MODULE_3__["mapItemsToBuildings"])(items, buildings)));
    }
    joinSearchResult(query) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.searchUsers(query),
            this.searchWorkplaces(query),
            this.searchRooms(query),
            this.searchCustomObjects(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log)),
            this.searchParkingLots(query)
        ]);
    }
}
GlobalSearchService.ɵfac = function GlobalSearchService_Factory(t) { return new (t || GlobalSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_5__["BuildingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_6__["FloorMapsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"])); };
GlobalSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalSearchService, factory: GlobalSearchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_5__["BuildingsService"] }, { type: _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_6__["FloorMapsService"] }, { type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"] }]; }, null); })();


/***/ }),

/***/ "AgCt":
/*!**************************************************************!*\
  !*** ./src/app/shared/images/services/image-blob.service.ts ***!
  \**************************************************************/
/*! exports provided: ImageBlobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlobService", function() { return ImageBlobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/http.service */ "bUwk");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







class ImageBlobService {
    constructor($http, $sanitizer) {
        this.$http = $http;
        this.$sanitizer = $sanitizer;
    }
    getImageBlob(url) {
        if (!url) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        return this.$http.get(url, {}, { responseType: 'blob' })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((blob) => this.$sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob))));
    }
}
ImageBlobService.ɵfac = function ImageBlobService_Factory(t) { return new (t || ImageBlobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
ImageBlobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageBlobService, factory: ImageBlobService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageBlobService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list.less of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    bootConfigUrl: './assets/config/boot.config.json',
    localizationsUrl: './assets/i18n/',
    indexedDbCacheResponse: true,
    authType: 'basic',
    apiUrl: '/rest',
    appVersion: __webpack_require__(/*! ../../package.json */ "kiQV").version + '-dev',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bh0G":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/header/components/header-locale/header-locale.service.ts ***!
  \*********************************************************************************/
/*! exports provided: HeaderLocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLocaleService", function() { return HeaderLocaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");






class HeaderLocaleService {
    constructor($config, $cookie, $localization) {
        this.$config = $config;
        this.$cookie = $cookie;
        this.$localization = $localization;
        this._langCookieTime = 315360000;
        this._langCookieName = this.$config.get('langCookieName');
    }
    get currentLang$() {
        return this.$localization.currentLang$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(lang => `lang-${lang}`));
    }
    get langsOptions() {
        return this.$config
            .get('langs')
            .map(lang => ({
            label: `lang-${lang}`,
            value: lang
        }));
    }
    changeLang(lang) {
        this.$localization
            .use(lang)
            .subscribe(() => {
            this.$cookie.set(this._langCookieName, lang, this._langCookieTime);
        });
    }
}
HeaderLocaleService.ɵfac = function HeaderLocaleService_Factory(t) { return new (t || HeaderLocaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"])); };
HeaderLocaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderLocaleService, factory: HeaderLocaleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLocaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "CEEL":
/*!************************************************!*\
  !*** ./src/app/core/utils/instanceOf.utilI.ts ***!
  \************************************************/
/*! exports provided: isUndefined, isEmpty, isEmptyArray, checkEmpty, isDate, isDateArray, toString, dateToString, instanceOfI, trackByFactory, takeFirstFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEmpty", function() { return checkEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateArray", function() { return isDateArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToString", function() { return dateToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceOfI", function() { return instanceOfI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByFactory", function() { return trackByFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeFirstFromObject", function() { return takeFirstFromObject; });
/*
 * Check empty utils
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
function isEmpty(value = null, checkArray = false) {
    return (isUndefined(value) ||
        value === null ||
        String(value).trim() === '' ||
        (checkArray && isEmptyArray(value)));
}
function isEmptyArray(value) {
    return (Array.isArray(value) &&
        (value.length === 0 ||
            value.every((item) => isEmpty(item, true))));
}
function checkEmpty(value, whenEmpty = '') {
    return !isEmpty(value) ? value : whenEmpty;
}
/*
 * Check date utils
 */
function isDate(value) {
    return value instanceof Date;
}
function isDateArray(arr, strict = false) {
    return strict
        ? arr.every(item => isDate(item))
        : arr.some(item => isDate(item));
}
function toString(value) {
    if (value === null) {
        return '';
    }
    if (isDate(value)) {
        return dateToString(value);
    }
    if (Array.isArray(value)) {
        return value
            .map(item => toString(item))
            .join(',');
    }
    return String(value);
}
function dateToString(date) {
    return date.toISOString();
}
function instanceOfI(obj, ...props) {
    const strict = typeof props[1] === 'boolean' && props[1];
    if (typeof props[0] === 'object') {
        props = props[0];
    }
    if (Array.isArray(props)) {
        return props.every(key => key in obj);
    }
    return Object.entries(props).every(([key, value]) => strict ? obj[key] === value : key in obj);
}
/*
 * Common track by function for *ngFor-directive
 */
function trackByFactory(property = null) {
    return function trackByFunction(index, item) {
        return property ? item[property] : item;
    };
}
/*
 * Take first from object
 */
function takeFirstFromObject(obj) {
    return Object.entries(obj).shift();
}


/***/ }),

/***/ "CWrn":
/*!*****************************************************!*\
  !*** ./src/app/core/services/navigation.service.ts ***!
  \*****************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal-compatibility */ "w0v+");





class NavigationService {
    constructor($router, $route) {
        this.$router = $router;
        this.$route = $route;
    }
    changeQueryParams(queryParams) {
        return this.$router.navigate([], { relativeTo: this.$route, queryParams });
    }
    // public go(route: string | string[], relativeTo: ActivatedRoute, extras?: NavigationExtras): Promise<boolean>;
    go(route, relativeTo = null, extras) {
        if (!(relativeTo instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])) {
            extras = relativeTo;
        }
        else {
            extras = Object.assign(Object.assign({}, extras), { relativeTo });
        }
        return this.$router.navigate([].concat(route), extras);
    }
    // public goToUrl(route: string, relativeTo: ActivatedRoute, extras?: NavigationExtras): Promise<boolean> ;
    goToUrl(route, relativeTo = null, extras) {
        if (!(relativeTo instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])) {
            extras = relativeTo;
        }
        else {
            extras = Object.assign(Object.assign({}, extras), { relativeTo });
        }
        return this.$router.navigateByUrl(route, extras);
    }
    reload() {
        const currentRoute = this.$route.snapshot.url;
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_2__["fromPromise"])(this.$router
            .navigateByUrl('/1', { skipLocationChange: true })
            .then(() => this.$router.navigate(currentRoute)));
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Dz+d":
/*!***********************************************!*\
  !*** ./src/app/core/pipes/dictionary.pipe.ts ***!
  \***********************************************/
/*! exports provided: DictionaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryPipe", function() { return DictionaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dictionary.service */ "8OyG");



class DictionaryPipe {
    constructor($dict) {
        this.$dict = $dict;
    }
    transform(key, whenNull = null) {
        return this.$dict.get(key, whenNull || key);
    }
}
DictionaryPipe.ɵfac = function DictionaryPipe_Factory(t) { return new (t || DictionaryPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"])); };
DictionaryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dictionary", type: DictionaryPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dictionary'
            }]
    }], function () { return [{ type: _services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"] }]; }, null); })();


/***/ }),

/***/ "E+H7":
/*!******************************************!*\
  !*** ./src/app/core/antd/antd.module.ts ***!
  \******************************************/
/*! exports provided: NG_ZORRO_CONFIG, AntdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ZORRO_CONFIG", function() { return NG_ZORRO_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntdModule", function() { return AntdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");






































const NG_ZORRO_CONFIG = {
    message: {
        nzTop: 57,
        nzDuration: 3000,
    },
    notification: {
        nzTop: 57,
        nzDuration: 3000,
    },
};
class AntdModule {
}
AntdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AntdModule });
AntdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AntdModule_Factory(t) { return new (t || AntdModule)(); }, imports: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__["NzInputNumberModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__["NzDropDownModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["NzBreadCrumbModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_7__["NzAlertModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_8__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_9__["NzCollapseModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__["NzDatePickerModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__["NzDividerModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzGridModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_16__["NzMenuModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_18__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_19__["NzPageHeaderModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__["NzRadioModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_22__["NzSpinModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_25__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_27__["NzTimePickerModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__["NzToolTipModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_30__["NzAvatarModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_31__["NzBadgeModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_32__["NzCardModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_33__["NzSliderModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__["NzSkeletonModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_35__["NzProgressModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_36__["NzPopoverModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_29__["NzTypographyModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AntdModule, { exports: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__["NzInputNumberModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__["NzDropDownModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["NzBreadCrumbModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_7__["NzAlertModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_8__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_9__["NzCollapseModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__["NzDatePickerModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__["NzDividerModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzGridModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_16__["NzMenuModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_18__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_19__["NzPageHeaderModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__["NzRadioModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_22__["NzSpinModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_25__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_27__["NzTimePickerModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__["NzToolTipModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_30__["NzAvatarModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_31__["NzBadgeModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_32__["NzCardModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_33__["NzSliderModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__["NzSkeletonModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_35__["NzProgressModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_36__["NzPopoverModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_29__["NzTypographyModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AntdModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__["NzInputNumberModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__["NzDropDownModule"],
                    ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["NzBreadCrumbModule"],
                    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_7__["NzAlertModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_8__["NzCheckboxModule"],
                    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_9__["NzCollapseModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__["NzDatePickerModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__["NzDividerModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__["NzEmptyModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzGridModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_16__["NzMenuModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"],
                    ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_18__["NzNotificationModule"],
                    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_19__["NzPageHeaderModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__["NzRadioModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_22__["NzSpinModule"],
                    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__["NzSwitchModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__["NzTableModule"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_25__["NzTabsModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
                    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_27__["NzTimePickerModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__["NzToolTipModule"],
                    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_30__["NzAvatarModule"],
                    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_31__["NzBadgeModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_32__["NzCardModule"],
                    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_33__["NzSliderModule"],
                    ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_34__["NzSkeletonModule"],
                    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_35__["NzProgressModule"],
                    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_36__["NzPopoverModule"],
                    ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_29__["NzTypographyModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "E39c":
/*!*********************************************!*\
  !*** ./src/app/core/pipes/localize.pipe.ts ***!
  \*********************************************/
/*! exports provided: LocalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizePipe", function() { return LocalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");



class LocalizePipe {
    transform(value, lang = null) {
        if (typeof value === 'string') {
            return value;
        }
        lang = LocalizePipe.getLang(value, lang);
        if (Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(value)) {
            return null;
        }
        if (!lang || !value[lang]) {
            return value.toString();
        }
        return value[lang];
    }
    static getLang(value, lang = null) {
        return lang || Object.keys(value).shift() || null;
    }
}
LocalizePipe.ɵfac = function LocalizePipe_Factory(t) { return new (t || LocalizePipe)(); };
LocalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "localize", type: LocalizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'localize'
            }]
    }], null, null); })();


/***/ }),

/***/ "E6dn":
/*!**************************************************************!*\
  !*** ./src/app/shared/global-search/global-search.module.ts ***!
  \**************************************************************/
/*! exports provided: GlobalSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchModule", function() { return GlobalSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/global-search/global-search.service */ "AdiC");




class GlobalSearchModule {
}
GlobalSearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlobalSearchModule });
GlobalSearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlobalSearchModule_Factory(t) { return new (t || GlobalSearchModule)(); }, providers: [
        _shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSearchService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalSearchModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalSearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    _shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSearchService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "EAxR":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/header/components/header-locale/header-locale.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HeaderLocaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLocaleComponent", function() { return HeaderLocaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var _app_layout_header_components_header_locale_header_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/header/components/header-locale/header-locale.service */ "Bh0G");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/pipes/dictionary.pipe */ "Dz+d");













function HeaderLocaleComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderLocaleComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const langOption_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.changeLang(langOption_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const langOption_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "icons:" + langOption_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, langOption_r2.label), " ");
} }
class HeaderLocaleComponent {
    constructor($service, cdr) {
        this.$service = $service;
        this.cdr = cdr;
        this.langsOptions = [];
        this.currentLang = this.$service.currentLang$;
    }
    changeLang(lang) {
        this.$service.changeLang(lang);
    }
    ngOnInit() {
        this.langsOptions = this.$service.langsOptions;
    }
    ngOnDestroy() {
    }
}
HeaderLocaleComponent.ɵfac = function HeaderLocaleComponent_Factory(t) { return new (t || HeaderLocaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_layout_header_components_header_locale_header_locale_service__WEBPACK_IMPORTED_MODULE_3__["HeaderLocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
HeaderLocaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderLocaleComponent, selectors: [["app-header-locale"]], hostVars: 2, hostBindings: function HeaderLocaleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("header-locale", true);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_app_layout_header_components_header_locale_header_locale_service__WEBPACK_IMPORTED_MODULE_3__["HeaderLocaleService"]])], decls: 7, vars: 8, consts: [["nz-dropdown", "", "href", "javascript:void(0)", 1, "profile", 3, "nzDropdownMenu", "nzTrigger"], ["nz-icon", "", 1, "header-locale__icon", 3, "nzType", "nz-tooltip", "nzTooltipMouseEnterDelay"], ["langMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", 1, "header-locale__icon", 3, "nzType"]], template: function HeaderLocaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderLocaleComponent_li_6_Template, 4, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r0)("nzTrigger", "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "icons:" + ctx.currentLang)("nz-tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx.currentLang))("nzTooltipMouseEnterDelay", 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.langsOptions);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropDownDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__["NzTooltipDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuItemDirective"]], pipes: [_core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_10__["DictionaryPipe"]], styles: [".header-locale__icon[_ngcontent-%COMP%] {\n  font-size: 18px!important;\n  position: relative;\n  top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1sb2NhbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUFKIiwiZmlsZSI6ImhlYWRlci1sb2NhbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvY2FsZSB7XG4gICZfX2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweCFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscribe"])()
], HeaderLocaleComponent.prototype, "currentLang", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderLocaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header-locale',
                templateUrl: './header-locale.component.html',
                styleUrls: ['./header-locale.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_app_layout_header_components_header_locale_header_locale_service__WEBPACK_IMPORTED_MODULE_3__["HeaderLocaleService"]],
                host: {
                    '[class.header-locale]': `true`
                }
            }]
    }], function () { return [{ type: _app_layout_header_components_header_locale_header_locale_service__WEBPACK_IMPORTED_MODULE_3__["HeaderLocaleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { currentLang: [] }); })();


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/decorators/complete.decorator */ "ALpe");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/http.service */ "bUwk");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/shared.service */ "naTb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");












class AppService {
    constructor($config, $http, $localization, $shared, $cookie) {
        this.$config = $config;
        this.$http = $http;
        this.$localization = $localization;
        this.$shared = $shared;
        this.$cookie = $cookie;
        this._ready$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this._configReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this._error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    get error() {
        return this._error$.getValue();
    }
    get configReady$() {
        return this._configReady$.asObservable();
    }
    get ready$() {
        return this._ready$.asObservable();
    }
    get error$() {
        return this._error$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    set error(error) {
        this._error$.next(error);
        this._error$.complete();
    }
    configReady() {
        this._configReady$.next(true);
        this._configReady$.complete();
    }
    ready() {
        this._ready$.next(true);
        this._ready$.complete();
    }
    bootstrap() {
        return this.initializeConfig()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.loadAppConfig()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$shared.checkVersion()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.loadLocalization()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$shared.initialize()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1))
            .toPromise()
            .then(() => null)
            .catch(({ message }) => {
            console.error(message);
            return message;
        })
            .then((error) => this.finishBootstrap(error));
    }
    destroy() {
    }
    initializeConfig() {
        return this.$config
            .initialize()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            if (this.$config.initializationError) {
                throw new Error(`Ошибка запуска приложения: ${this.$config.initializationError} `);
            }
        }));
    }
    loadAppConfig() {
        const appConfigUrl = this.$config.get('appConfigUrl');
        if (!appConfigUrl) {
            throw new Error('Ошибка запуска приложения: Не задан адрес для загрузки конфигурации приложения');
        }
        return this.$http.get(appConfigUrl).pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_5__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(({ success, data, error }) => {
            if (success) {
                this.$config.setValues(data);
            }
            else {
                throw new Error(`Ошибка загрузки конфигурации приложения: ${(error === null || error === void 0 ? void 0 : error.message) || error}`);
            }
            this.configReady();
        }));
    }
    loadLocalization() {
        const langCookieName = this.$config.get('langCookieName');
        const defaultLang = this.$localization.browserDefaultLang ||
            this.$config.get('defaultLang');
        const langs = this.$config.get('langs');
        const lang = this.$cookie.get(langCookieName) || this.$config.get('lang');
        this.$localization.defaultLang = defaultLang;
        this.$localization.langs = langs;
        return this.$localization.initialize(lang);
    }
    finishBootstrap(error) {
        const globalLoader = document.querySelector('.global-loader');
        if (globalLoader) {
            globalLoader.classList.add('_hidden');
            setTimeout(() => {
                this.ready();
                globalLoader.remove();
                if (error) {
                    this.error = error;
                }
            }, 1500);
        }
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_8__["LocalizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_complete_decorator__WEBPACK_IMPORTED_MODULE_4__["Complete"]
], AppService.prototype, "destroy", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_8__["LocalizationService"] }, { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }]; }, { destroy: [] }); })();


/***/ }),

/***/ "FHVQ":
/*!***************************************************************************************!*\
  !*** ./src/app/base/filters/filter-checkbox-group/filter-checkbox-group.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FilterCheckboxGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCheckboxGroupComponent", function() { return FilterCheckboxGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_filters_filters_uttils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/filters/filters.uttils */ "+ziw");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/pipes/dictionary.pipe */ "Dz+d");












function FilterCheckboxGroupComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterCheckboxGroupComponent_ng_container_1_ng_container_5_Template_label_ngModelChange_1_listener($event) { const option_r4 = ctx.$implicit; return option_r4.checked = $event; })("ngModelChange", function FilterCheckboxGroupComponent_ng_container_1_ng_container_5_Template_label_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const option_r4 = ctx.$implicit; const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.applyOptionChange(option_r4.value, $event); return ctx_r6.checkGroupSelection(group_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", option_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.label, " ");
} }
function FilterCheckboxGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterCheckboxGroupComponent_ng_container_1_Template_label_ngModelChange_3_listener($event) { const group_r2 = ctx.$implicit; return group_r2.checked = $event; })("ngModelChange", function FilterCheckboxGroupComponent_ng_container_1_Template_label_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const group_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.applyGroupChange(group_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterCheckboxGroupComponent_ng_container_1_ng_container_5_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", group_r2.checked)("nzIndeterminate", group_r2.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r2.options);
} }
function FilterCheckboxGroupComponent_nz_empty_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dictionary");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "NoSelectableValues")));
} }
const _c0 = function () { return { suppressScrollX: true }; };
class FilterCheckboxGroupComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._value = [];
        this.psConfig = _base_filters_filters_uttils__WEBPACK_IMPORTED_MODULE_2__["PS_CONFIG"];
        this.onChange = (_value) => {
        };
        this.onTouched = () => {
        };
        this.groups = [];
        this.maxHeight = '190px';
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(this._value);
    }
    set viewChildPerfectScrollbarComponent(perfectScrollbarComponent) {
        try {
            const nativeElement = perfectScrollbarComponent.nativeElement;
            nativeElement.style.maxHeight = this.maxHeight;
            nativeElement.querySelector('.ps').style.maxHeight = this.maxHeight;
        }
        catch (e) {
        }
    }
    applyGroupChange(group, checked) {
        if (group.indeterminate) {
            group.indeterminate = false;
            group.checked = true;
        }
        group.options.forEach((option) => {
            option.checked = group.checked;
            this.applyOptionChange(option.value, checked);
        });
    }
    applyOptionChange(value, checked) {
        if (checked && !this.value.includes(value)) {
            this.value = this.value.concat(value);
            return;
        }
        if (!checked && this.value.includes(value)) {
            this.value = this.value.filter(_value => value !== _value);
        }
    }
    checkGroupSelection(group) {
        const checked = group.options.every(({ checked }) => checked);
        group.checked = checked;
        group.indeterminate = !checked && group.options.some(({ checked }) => checked);
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    writeValue(value) {
        this.value = value;
        this.updateCheckedGroups();
    }
    updateCheckedGroups() {
        var _a;
        (_a = this.groups) === null || _a === void 0 ? void 0 : _a.forEach(group => {
            group.options.forEach(option => option.checked = this.value.includes(option.value));
            this.checkGroupSelection(group);
        });
        this.cdr.markForCheck();
    }
}
FilterCheckboxGroupComponent.ɵfac = function FilterCheckboxGroupComponent_Factory(t) { return new (t || FilterCheckboxGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FilterCheckboxGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterCheckboxGroupComponent, selectors: [["app-filter-checkbox-group"]], viewQuery: function FilterCheckboxGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewChildPerfectScrollbarComponent = _t.first);
    } }, hostAttrs: ["class.filter-checkbox-group", "true"], inputs: { title: "title", groups: "groups", maxHeight: "maxHeight", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterCheckboxGroupComponent),
                multi: true
            }])], decls: 3, vars: 4, consts: [[3, "config"], [4, "ngFor", "ngForOf"], [3, "nzNotFoundContent", 4, "ngIf"], [1, "filter-checkbox-group__group"], [1, "filter-checkbox-group__header"], ["nz-checkbox", "", 1, "group-checkbox", 3, "ngModel", "nzIndeterminate", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], [3, "nzNotFoundContent"]], template: function FilterCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCheckboxGroupComponent_ng_container_1_Template, 6, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterCheckboxGroupComponent_nz_empty_2_Template, 3, 5, "nz-empty", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.groups == null ? null : ctx.groups.length));
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_6__["NzEmptyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_8__["DictionaryPipe"]], styles: ["[_nghost-%COMP%]     .ant-checkbox-wrapper {\n  margin: 0 0 4px;\n  width: 100%;\n}\n[_nghost-%COMP%]     .ant-checkbox-wrapper:last-child {\n  margin-bottom: 0;\n}\n.filter-checkbox-group__group[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 16px;\n}\n.filter-checkbox-group__header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f5f5f5;\n  margin-bottom: 4px;\n  padding-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1jaGVja2JveC1ncm91cC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFkRDtFQUVJLGVBQUE7RUFDQSxXQUFBO0FBZUo7QUFiSTtFQUNFLGdCQUFBO0FBZU47QUFURTtFQUNFLG1CQUFBO0FBV0o7QUFSRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVVKIiwiZmlsZSI6ImZpbHRlci1jaGVja2JveC1ncm91cC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQHByZWZpeC1jbHM6IGZpbHRlci1jaGVja2JveC1ncm91cDtcblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLmFudC1jaGVja2JveC13cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cblxuLkB7cHJlZml4LWNsc30ge1xuICAmX19ncm91cDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgJl9faGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGdyYXktMztcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterCheckboxGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-checkbox-group',
                templateUrl: './filter-checkbox-group.component.html',
                styleUrls: ['./filter-checkbox-group.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    ['class.filter-checkbox-group']: `true`
                },
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterCheckboxGroupComponent),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewChildPerfectScrollbarComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "FUCZ":
/*!******************************************!*\
  !*** ./src/app/core/utils/date.utils.ts ***!
  \******************************************/
/*! exports provided: getStartDate, getEndDate, getMinDate, getMaxDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartDate", function() { return getStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndDate", function() { return getEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinDate", function() { return getMinDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxDate", function() { return getMaxDate; });
function getStartDate(date) {
    return (new Date(date)).setHours(0, 0, 0, 0);
}
function getEndDate(date) {
    return (new Date(date)).setHours(23, 59, 59, 59);
}
function getMinDate(...date) {
    const min = Math.min(...date.filter(Boolean).map(date => date.getTime()));
    return min === Infinity ? null : new Date(min);
}
function getMaxDate(...date) {
    const max = Math.max(...date.filter(Boolean).map(date => date.getTime()));
    return max === -Infinity ? null : new Date(max);
}


/***/ }),

/***/ "FsS2":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dictionaries/services/measurements.service.ts ***!
  \**********************************************************************/
/*! exports provided: MeasurementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementsService", function() { return MeasurementsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dictionaries_constants_measurements_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/dictionaries/constants/measurements.constant */ "4lnu");
/* harmony import */ var _shared_dictionaries_services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/dictionaries/services/dictionary.service */ "LMxC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class MeasurementsService extends _shared_dictionaries_services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__["DictionaryService"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._dictionaryName = _shared_dictionaries_constants_measurements_constant__WEBPACK_IMPORTED_MODULE_1__["MEASUREMENTS_DICT_NAME"];
    }
    get measurements$() {
        return this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('measurements'));
    }
    get measurements() {
        return this.value.measurements;
    }
    getMeasurementByName$(measurement) {
        return this.measurements$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(measurement));
    }
    getMeasurementByName(measurement) {
        return this.measurements[measurement];
    }
    initialize() {
        return super.initialize(_shared_dictionaries_constants_measurements_constant__WEBPACK_IMPORTED_MODULE_1__["MEASUREMENTS_URL_KEY"], _shared_dictionaries_constants_measurements_constant__WEBPACK_IMPORTED_MODULE_1__["MEASUREMENTS_DEFAULT_VALUES"]);
    }
}
MeasurementsService.ɵfac = function MeasurementsService_Factory(t) { return new (t || MeasurementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
MeasurementsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MeasurementsService, factory: MeasurementsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasurementsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "GKa9":
/*!*****************************************************!*\
  !*** ./src/app/core/pipes/object-first-key.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ObjectFirstKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectFirstKeyPipe", function() { return ObjectFirstKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ObjectFirstKeyPipe {
    transform(object = null) {
        const keys = object ? Object.keys(object) : [];
        return keys.length > 0 ? keys.shift() : null;
    }
}
ObjectFirstKeyPipe.ɵfac = function ObjectFirstKeyPipe_Factory(t) { return new (t || ObjectFirstKeyPipe)(); };
ObjectFirstKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "objectFirstKey", type: ObjectFirstKeyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectFirstKeyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'objectFirstKey'
            }]
    }], null, null); })();


/***/ }),

/***/ "GPc/":
/*!**************************************************************************!*\
  !*** ./src/app/shared/http/interceptors/process-response.interceptor.ts ***!
  \**************************************************************************/
/*! exports provided: ProcessResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessResponseInterceptor", function() { return ProcessResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/http/utils/constants.util */ "1j6E");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");
/* harmony import */ var _app_shared_http_utils_error_code_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/http/utils/error-code.util */ "6CMr");








class ProcessResponseInterceptor {
    static processResponse(event) {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] && 'data' in event.body) {
            return ProcessResponseInterceptor.processSuccessResponseApiV2(event);
        }
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] && _app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_4__["SUCCESS_KEY"] in event.body) {
            return ProcessResponseInterceptor.processSuccessResponse(event);
        }
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] && _app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_4__["FAILURE_KEY"] in event.body) {
            return ProcessResponseInterceptor.processErrorResponse(event);
        }
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && _app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_4__["FAILURE_KEY"] in event.error) {
            return ProcessResponseInterceptor.processErrorResponse(event);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(event);
    }
    static processSuccessResponse(event) {
        const { headers, statusText, status, url } = event;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
            body: Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_5__["processSuccessResponseObject"])(event.body),
            headers,
            status,
            statusText,
            url,
        }));
    }
    static processSuccessResponseApiV2(event) {
        const { headers, statusText, status, url, body, } = event;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
            body: body.data,
            headers,
            status,
            statusText,
            url,
        }));
    }
    static processErrorResponse(event) {
        const { headers, statusText, status, url, } = event;
        const body = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] ? event.error : event.body;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]({
            error: {
                exception: body[_app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_4__["EXCEPTION_KEY"]],
                message: Object(_app_shared_http_utils_error_code_util__WEBPACK_IMPORTED_MODULE_6__["transformErrorMessage"])(body[_app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_4__["FAILURE_KEY"]]),
                code: Object(_app_shared_http_utils_error_code_util__WEBPACK_IMPORTED_MODULE_6__["transformErrorCode"])(body[_app_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_4__["ERROR_CODE_KEY"]]),
            },
            headers,
            status,
            statusText,
            url,
        }));
    }
    intercept(request, handler) {
        return handler.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((event) => ProcessResponseInterceptor.processResponse(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((event) => ProcessResponseInterceptor.processErrorResponse(event)));
    }
}
ProcessResponseInterceptor.ɵfac = function ProcessResponseInterceptor_Factory(t) { return new (t || ProcessResponseInterceptor)(); };
ProcessResponseInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessResponseInterceptor, factory: ProcessResponseInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessResponseInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "GlYv":
/*!******************************************************************!*\
  !*** ./src/app/base/reservation-by-qr/reservation-by-qr.util.ts ***!
  \******************************************************************/
/*! exports provided: getInitDate, getTimeRangeValue, setHours, getReservationId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitDate", function() { return getInitDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeRangeValue", function() { return getTimeRangeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHours", function() { return setHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReservationId", function() { return getReservationId; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "b/SL");

const getInitDate = (workHours, minDuration) => {
    const now = new Date();
    const nowHour = now.getHours();
    const nowWithMinDuration = new Date(now.getTime() + minDuration);
    const time = getTimeRangeValue(workHours);
    const [startWorkHour, endWorkHour] = time.map((t) => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getHours"])(new Date(t)));
    const endDate = setHours(now, workHours[1]);
    if (nowHour < endWorkHour && nowHour <= startWorkHour) {
        return [setHours(now, startWorkHour), endDate];
    }
    else if (nowHour < endWorkHour) {
        return [now, endDate];
    }
    else if (nowWithMinDuration > endDate) {
        const nextDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(now, 1);
        return [setHours(nextDay, startWorkHour), setHours(nextDay, endWorkHour)];
    }
};
const getTimeRangeValue = (range) => {
    const [startWorkHour, endWorkHour] = range;
    const sliderLimitDate = [new Date(), new Date()];
    sliderLimitDate[0].setHours(startWorkHour, 0, 0, 0);
    sliderLimitDate[1].setHours(endWorkHour, 0, 0, 0);
    return sliderLimitDate.map((date) => date.getTime());
};
const setHours = (date, hours) => {
    const newDate = new Date(date);
    newDate.setHours(hours, 0, 0, 0);
    return newDate;
};
const getReservationId = (reservation) => {
    var _a, _b;
    let reservationId;
    if ((reservation === null || reservation === void 0 ? void 0 : reservation.objectType) === 'APPOINTMENT') {
        reservationId = Number((_a = reservation === null || reservation === void 0 ? void 0 : reservation.extraDataWorkplaceReservation) === null || _a === void 0 ? void 0 : _a.appointmentId);
    }
    else {
        reservationId = (_b = reservation === null || reservation === void 0 ? void 0 : reservation.extraDataWorkplaceReservation) === null || _b === void 0 ? void 0 : _b.workplaceId;
    }
    return reservationId;
};


/***/ }),

/***/ "GnH+":
/*!***************************************************************!*\
  !*** ./src/app/base/renderer/components/map/map.component.ts ***!
  \***************************************************************/
/*! exports provided: MapRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRendererComponent", function() { return MapRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderer.component */ "akfq");



class MapRendererComponent extends _renderer_component__WEBPACK_IMPORTED_MODULE_1__["RendererComponent"] {
    get mappedValue() {
        var _a, _b;
        return ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b[this.value]) || this.value;
    }
    ngOnInit() {
        this.value = this.mappedValue;
    }
}
MapRendererComponent.ɵfac = function MapRendererComponent_Factory(t) { return ɵMapRendererComponent_BaseFactory(t || MapRendererComponent); };
MapRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapRendererComponent, selectors: [["app-map-renderer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, template: function MapRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.value, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
const ɵMapRendererComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MapRendererComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapRendererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-renderer',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "I+8P":
/*!******************************************************!*\
  !*** ./src/app/core/services/http-helper.service.ts ***!
  \******************************************************/
/*! exports provided: HttpHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHelperService", function() { return HttpHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_http_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/http.util */ "QEIv");
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dictionary.service */ "8OyG");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.service */ "/VmJ");






class HttpHelperService {
    constructor($notifications) {
        this.$notifications = $notifications;
    }
    responseNotification(notificationMessages = {}, processError = _utils_http_util__WEBPACK_IMPORTED_MODULE_2__["processResponseError"]) {
        const { successTitle, errorTitle, successMessage, connectionFailedMessage } = notificationMessages;
        let { title, errorMessage } = notificationMessages;
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(({ state, error, connection, success }) => {
            if (state === 'pending') {
                return;
            }
            title = success
                ? successTitle || title || _dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"].get('Notification')
                : errorTitle || title || _dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"].get('Error');
            errorMessage = !connection && connectionFailedMessage
                ? connectionFailedMessage
                : processError(error) || errorMessage;
            if (success && successMessage) {
                this.$notifications.success(title, successMessage);
                return;
            }
            if (!success) {
                this.$notifications.error(title, errorMessage);
            }
        });
    }
}
HttpHelperService.ɵfac = function HttpHelperService_Factory(t) { return new (t || HttpHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"])); };
HttpHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpHelperService, factory: HttpHelperService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }]; }, null); })();


/***/ }),

/***/ "IAEX":
/*!**********************************************************!*\
  !*** ./src/app/shared/translation/translation.module.ts ***!
  \**********************************************************/
/*! exports provided: TranslateHttpLoaderFactory, TranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHttpLoaderFactory", function() { return TranslateHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationModule", function() { return TranslationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







// tslint:disable-next-line:typedef
function TranslateHttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](httpClient, _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localizationsUrl);
}
class TranslationModule {
}
TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TranslationModule });
TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TranslationModule_Factory(t) { return new (t || TranslationModule)(); }, imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: TranslateHttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                },
                isolate: false
            })], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                            useFactory: TranslateHttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                        },
                        isolate: false
                    })],
                exports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "IS+5":
/*!*******************************************!*\
  !*** ./src/app/base/card/card.service.ts ***!
  \*******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardService {
    constructor() { }
    get card() {
        return {
            title: 'Test title',
            width: '320px',
            image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            descriptionList: [
                { name: 'Статус', value: 'Подтверждено' },
                { name: 'Начало', value: '14.02.2020 16:15' },
                { name: 'Окончание', value: '14.02.2020 18:00' },
                { name: 'Номер', value: '22-17' },
                { name: 'Помещение', value: 'Desk' },
                { name: 'Отдел', value: '22-17' },
            ],
            tags: ['Монитор', 'Телевизор', 'Мягкий стул', 'Internet port', 'Проектор']
        };
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JPRT":
/*!***************************************************************************!*\
  !*** ./src/app/base/filters/filter-checkbox/filter-checkbox.component.ts ***!
  \***************************************************************************/
/*! exports provided: FilterCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCheckboxComponent", function() { return FilterCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _base_filters_filters_uttils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/filters/filters.uttils */ "+ziw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/pipes/dictionary.pipe */ "Dz+d");
















function FilterCheckboxComponent_nz_form_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-input-group", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterCheckboxComponent_nz_form_item_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.filterOptionsValue = $event; })("ngModelChange", function FilterCheckboxComponent_nz_form_item_0_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.filterOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffixIcon", "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r0.placeholder)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.filterOptionsValue)("disabled", ctx_r0.sourceOptions.length === 0);
} }
function FilterCheckboxComponent_nz_form_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterCheckboxComponent_nz_form_item_1_Template_label_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.value.length === ctx_r1.options.length)("nzIndeterminate", ctx_r1.value.length > 0 && ctx_r1.value.length !== ctx_r1.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "All")), " ");
} }
function FilterCheckboxComponent_perfect_scrollbar_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function () { return { suppressScrollX: true }; };
const _c1 = function (a0) { return { "max-height": a0 }; };
function FilterCheckboxComponent_perfect_scrollbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCheckboxComponent_perfect_scrollbar_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r2.maxHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function FilterCheckboxComponent_ng_template_3_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function FilterCheckboxComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterCheckboxComponent_ng_template_3_ng_container_0_Template_label_ngModelChange_1_listener($event) { const option_r15 = ctx.$implicit; return option_r15.checked = $event; })("ngModelChange", function FilterCheckboxComponent_ng_template_3_ng_container_0_Template_label_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const option_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.applyChanges(option_r15.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterCheckboxComponent_ng_template_3_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", option_r15.checked)("nzDisabled", option_r15.checked && !ctx_r13.allowEmpty && ctx_r13.value.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.label || _r5)("ngTemplateOutletContext", option_r15);
} }
function FilterCheckboxComponent_ng_template_3_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dictionary");
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r14.emptyMessage)));
} }
function FilterCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterCheckboxComponent_ng_template_3_ng_container_0_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCheckboxComponent_ng_template_3_nz_empty_1_Template, 3, 5, "nz-empty", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r4.options == null ? null : ctx_r4.options.length));
} }
function FilterCheckboxComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const label_r20 = ctx.label;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", label_r20, "\n");
} }
class FilterCheckboxComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._value = [];
        this.disabled = false;
        this.psConfig = _base_filters_filters_uttils__WEBPACK_IMPORTED_MODULE_3__["PS_CONFIG"];
        this.options = [];
        this.filterOptionsValue = null;
        this.sourceOptions = [];
        this.onChange = (value) => {
        };
        this.onTouched = () => {
        };
        this.placeholder = '';
        this.maxHeight = 'auto';
        this.label = null;
        this.allowSearch = false;
        this.emptyMessage = 'NoSelectableValues';
        this.allowEmpty = true;
        this.allowSelectAll = false;
    }
    set inputOptions(sourceOptions) {
        this.sourceOptions = sourceOptions;
        this.filterOptions();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(this._value);
        if (this.allowEmpty) {
            return;
        }
        if (this.value.length === 1) {
            this.options.filter(({ value }) => value === this.value[0]).forEach(option => option.disabled = true);
        }
        else {
            this.options.filter(({ disabled }) => disabled).forEach(option => option.disabled = false);
        }
    }
    set viewChildPerfectScrollbarComponent(perfectScrollbarComponent) {
        try {
            const nativeElement = perfectScrollbarComponent.nativeElement;
            nativeElement.style.maxHeight = this.maxHeight;
            nativeElement.querySelector('.ps').style.maxHeight = this.maxHeight;
        }
        catch (e) {
        }
    }
    applyChanges(value, checked) {
        if (checked && !this.value.includes(value)) {
            this.value = this.value.concat(value);
            return;
        }
        if (!checked && this.value.includes(value)) {
            this.value = this.value.filter(_value => _value !== value);
            return;
        }
    }
    filterOptions() {
        if (!this.filterOptionsValue) {
            this.options = this.sourceOptions;
            return;
        }
        const filterOptionsValue = this.filterOptionsValue.toLowerCase();
        this.options = this.sourceOptions.filter(({ label }) => label.toLowerCase().includes(filterOptionsValue));
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    writeValue(value) {
        var _a;
        if (value === '*') {
            value = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.map(({ value }) => value)) || [];
        }
        this.value = value;
        this.updateCheckedOptions();
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    selectAll(allSelected) {
        this.options
            .filter((_, index) => this.allowEmpty || index > 0)
            .forEach((option) => {
            option.checked = allSelected;
            this.applyChanges(option.value, allSelected);
        });
    }
    updateCheckedOptions() {
        this.options.forEach(option => option.checked = this.value.includes(option.value));
        this.cdr.markForCheck();
    }
}
FilterCheckboxComponent.ɵfac = function FilterCheckboxComponent_Factory(t) { return new (t || FilterCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FilterCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterCheckboxComponent, selectors: [["app-filter-checkbox"]], viewQuery: function FilterCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewChildPerfectScrollbarComponent = _t.first);
    } }, hostAttrs: ["class.filter-checkbox", "true"], inputs: { inputOptions: ["options", "inputOptions"], placeholder: "placeholder", maxHeight: "maxHeight", label: "label", allowSearch: "allowSearch", emptyMessage: "emptyMessage", allowEmpty: "allowEmpty", allowSelectAll: "allowSelectAll", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterCheckboxComponent),
                multi: true
            }])], decls: 7, vars: 4, consts: [["class", "filter-checkbox__search", 4, "ngIf"], ["class", "filter-checkbox__all", 4, "ngIf"], ["class", "app-list-filter-item__scroll", 3, "config", "ngStyle", 4, "ngIf", "ngIfElse"], ["optionsTpl", ""], ["labelTpl", ""], [1, "filter-checkbox__search"], [3, "nzSuffixIcon"], ["nz-input", "", 3, "placeholder", "ngModel", "disabled", "ngModelChange"], [1, "filter-checkbox__all"], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange"], [1, "app-list-filter-item__scroll", 3, "config", "ngStyle"], [4, "ngTemplateOutlet"], [4, "ngFor", "ngForOf"], [3, "nzNotFoundContent", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNotFoundContent"]], template: function FilterCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterCheckboxComponent_nz_form_item_0_Template, 5, 8, "nz-form-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCheckboxComponent_nz_form_item_1_Template, 5, 7, "nz-form-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterCheckboxComponent_perfect_scrollbar_2_Template, 2, 6, "perfect-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilterCheckboxComponent_ng_template_3_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterCheckboxComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowSelectAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxHeight !== "auto")("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormItemComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__["NzCheckboxComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmptyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_12__["DictionaryPipe"]], styles: ["[_nghost-%COMP%]     .ant-checkbox-wrapper {\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0 0 4px;\n  width: 100%;\n}\n[_nghost-%COMP%]     .ant-checkbox-wrapper:last-child {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]     .ant-form-item {\n  margin-bottom: 0;\n}\n.filter-checkbox__search[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.filter-checkbox__all[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f5f5f5;\n  margin-bottom: 4px;\n  padding-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1jaGVja2JveC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUM3Rjs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7QUFmRDtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFnQko7QUFkSTtFQUNFLGdCQUFBO0FBZ0JOO0FBekJBO0VBY0ksZ0JBQUE7QUFjSjtBQVZFO0VBQ0Usa0JBQUE7QUFZSjtBQVRFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBV0oiLCJmaWxlIjoiZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbG9yc1wiO1xuQHByZWZpeC1jbHM6IGZpbHRlci1jaGVja2JveDtcblxuOmhvc3Qge1xuICA6Om5nLWRlZXAgLmFudC1jaGVja2JveC13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5hbnQtZm9ybS1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4uQHtwcmVmaXgtY2xzfSB7XG4gICZfX3NlYXJjaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgJl9fYWxsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGdyYXktMztcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-checkbox',
                templateUrl: './filter-checkbox.component.html',
                styleUrls: ['./filter-checkbox.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    ['class.filter-checkbox']: `true`
                },
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterCheckboxComponent),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { inputOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['options']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewChildPerfectScrollbarComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "JSKI":
/*!*************************************************************************!*\
  !*** ./src/app/layout/navigation-mobile/navigation-mobile.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavigationMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMobileComponent", function() { return NavigationMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_app_base_reservation_by_qr_reservation_by_qr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/app/base/reservation-by-qr/reservation-by-qr.component */ "w9E8");
/* harmony import */ var _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/header/header.service */ "mtWJ");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/layout/header/components/header-notifications/header-notifications.component */ "QT/m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");












function NavigationMobileComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { item: a0 }; };
function NavigationMobileComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationMobileComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (item_r5.children == null ? null : item_r5.children.length) > 0 ? _r3 : _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r5));
} }
function NavigationMobileComponent_ng_template_4_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r7.url)("nz-tooltip", item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r7.icon);
} }
function NavigationMobileComponent_ng_template_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMobileComponent_ng_template_4_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.showModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nz-tooltip", item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r7.icon);
} }
function NavigationMobileComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationMobileComponent_ng_template_4_a_0_Template, 2, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationMobileComponent_ng_template_4_a_1_Template, 2, 2, "a", 8);
} if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r7.openModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.openModal);
} }
function NavigationMobileComponent_ng_template_6_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r17.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r17.title, " ");
} }
function NavigationMobileComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-dropdown-menu", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavigationMobileComponent_ng_template_6_li_5_Template, 2, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.item;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nz-tooltip", item_r14.title)("nzDropdownMenu", _r15)("nzPlacement", "topCenter")("nzOverlayClassName", "navigation-mobile-dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r14.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r14.children);
} }
class NavigationMobileComponent {
    constructor($header, $modalService) {
        this.$header = $header;
        this.$modalService = $modalService;
        this.notifications = this.$header.notifications;
    }
    showModal() {
        this.$modalService.create({
            nzStyle: {
                top: '0',
                color: 'red',
                margin: '0',
                padding: '0',
                maxWidth: '100vw',
                maxHeight: '100vh',
                width: '100%',
                height: '100%',
            },
            nzBodyStyle: {
                height: '100%',
                padding: '0'
            },
            nzContent: _src_app_base_reservation_by_qr_reservation_by_qr_component__WEBPACK_IMPORTED_MODULE_1__["ReservationByQRComponent"],
            nzFooter: null
        });
    }
}
NavigationMobileComponent.ɵfac = function NavigationMobileComponent_Factory(t) { return new (t || NavigationMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalService"])); };
NavigationMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationMobileComponent, selectors: [["app-navigation-mobile"]], inputs: { items: "items" }, decls: 8, vars: 1, consts: [[1, "navigation-mobile"], [4, "ngFor", "ngForOf"], ["nz-tooltip", "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F", 1, "navigation-mobile__item"], ["indentClass", "bottom-indent"], ["itemTpl", ""], ["subItemTpl", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "navigation-mobile__item", 3, "routerLink", "nz-tooltip", 4, "ngIf"], ["class", "navigation-mobile__item", 3, "nz-tooltip", "click", 4, "ngIf"], [1, "navigation-mobile__item", 3, "routerLink", "nz-tooltip"], ["nz-icon", "", 3, "nzType"], [1, "navigation-mobile__item", 3, "nz-tooltip", "click"], ["nz-dropdown", "", "nzTrigger", "click", 1, "navigation-mobile__item", 3, "nz-tooltip", "nzDropdownMenu", "nzPlacement", "nzOverlayClassName"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "routerLink"]], template: function NavigationMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationMobileComponent_ng_container_1_Template, 2, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header-notifications", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavigationMobileComponent_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationMobileComponent_ng_template_6_Template, 6, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_6__["HeaderNotificationsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.navigation-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ffffff;\n  padding: 6px;\n  border-top: 1px solid #f0f0f0;\n  z-index: 2;\n}\n.navigation-mobile__item[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: #40a9ff;\n  font-size: 17px;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.navigation-mobile__item[_ngcontent-%COMP%]:focus {\n  background-color: #e6f7ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tbW9iaWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWpCRDtFQUNFLGNBQUE7QUFtQkY7QUFqQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFtQkY7QUFsQkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0JKO0FBbkJJO0VBQ0UseUJBQUE7QUFxQk4iLCJmaWxlIjoibmF2aWdhdGlvbi1tb2JpbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvb3ZlcnJpZGVcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2aWdhdGlvbi1tb2JpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBAZ3JheS00O1xuICB6LWluZGV4OiAyO1xuICAmX19pdGVtIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogQGJsdWUtNTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmx1ZS0xO1xuICAgIH1cbiAgfVxufVxuOjpuZy1kZWVwIC5uYXZpZ2F0aW9uLW1vYmlsZS1kcm9wZG93biB7fVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation-mobile',
                templateUrl: './navigation-mobile.component.html',
                styleUrls: ['./navigation-mobile.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JXFP":
/*!****************************************************!*\
  !*** ./src/app/shared/settings/settings.module.ts ***!
  \****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");





class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, providers: [
        _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
    ], imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, { imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild()
                ],
                providers: [
                    _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "K6s4":
/*!*******************************************!*\
  !*** ./src/app/core/pipes/string.pipe.ts ***!
  \*******************************************/
/*! exports provided: StringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringPipe", function() { return StringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StringPipe {
    transform(value) {
        return String(value);
    }
}
StringPipe.ɵfac = function StringPipe_Factory(t) { return new (t || StringPipe)(); };
StringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "string", type: StringPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'string'
            }]
    }], null, null); })();


/***/ }),

/***/ "KDOc":
/*!********************************************************!*\
  !*** ./src/app/core/decorators/subscribe.decorator.ts ***!
  \********************************************************/
/*! exports provided: Subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscribe", function() { return Subscribe; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_utils_decorators_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/decorators.utils */ "cy4D");


const DESTROY_METHOD = 'ngOnDestroy';
/*const DESTROY_IVY_METHOD: string = 'onDestroy';
const ECMP: string = 'ɵcmp';*/
function Subscribe(destroyMethodName = DESTROY_METHOD) {
    return (target, key, descriptor) => {
        const instance = target.constructor.prototype;
        const originalOnDestroy = instance[destroyMethodName];
        const currentValue = Symbol('currentValue');
        const currentSubscription = Symbol('currentSubscription');
        const currentObservable = Symbol('currentObservable');
        if (!originalOnDestroy) {
            console.error(`${target.constructor.name} is using Subscriptions decorator but doesn't implement ${destroyMethodName}`);
        }
        instance[destroyMethodName] = function newDestroyMethod() {
            dispose(this);
            if (!!originalOnDestroy) {
                originalOnDestroy.apply(this);
            }
        };
        if (!descriptor) {
            Object.defineProperty(target, key, {
                configurable: true,
                get: getterFactory(),
                set: setterFactory()
            });
            return;
        }
        if (descriptor.set) {
            descriptor.set = setterFactory(descriptor.set);
        }
        if (descriptor.get) {
            descriptor.get = getterFactory(descriptor.get);
        }
        function subscribe(target, observable, originalSetter) {
            const cdr = Object(_core_utils_decorators_utils__WEBPACK_IMPORTED_MODULE_1__["detectCdr"])(target);
            if (target[currentObservable] !== observable) {
                dispose(target);
            }
            if (!(observable instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])) {
                target[currentObservable] = null;
                target[currentValue] = observable;
                return;
            }
            target[currentObservable] = observable;
            target[currentSubscription] = observable.subscribe(newValue => {
                if (originalSetter) {
                    originalSetter.call(target, newValue);
                }
                else {
                    target[currentValue] = newValue;
                }
                check(cdr);
            });
        }
        function dispose(target) {
            if (target[currentSubscription] instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]) {
                target[currentSubscription].unsubscribe();
            }
        }
        function getterFactory(originalGetter) {
            return function get() {
                if (originalGetter) {
                    return originalGetter.call(this);
                }
                return this[currentValue];
            };
        }
        function setterFactory(originalSetter) {
            return function set(observable) {
                subscribe(this, observable, originalSetter);
            };
        }
    };
}
function check(cdr, checkType = 'markForCheck') {
    if (cdr) {
        switch (checkType) {
            case 'detectChanges':
                cdr.detectChanges();
                break;
            case 'markForCheck':
                cdr.markForCheck();
        }
    }
}


/***/ }),

/***/ "KEC1":
/*!***************************************************!*\
  !*** ./src/app/shared/settings/settings.utils.ts ***!
  \***************************************************/
/*! exports provided: getSettingsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingsArray", function() { return getSettingsArray; });
/* harmony import */ var _core_utils_sort_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/sort.util */ "LYpy");

function getSettingsArray(settings) {
    return Object
        .entries(settings)
        .map(([name, value]) => ({ name, value }))
        .sort(Object(_core_utils_sort_util__WEBPACK_IMPORTED_MODULE_0__["sortByFactory"])('name'));
}


/***/ }),

/***/ "KrC3":
/*!*******************************************************!*\
  !*** ./src/app/core/decorators/debounce.decorator.ts ***!
  \*******************************************************/
/*! exports provided: Debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debounce", function() { return Debounce; });
function Debounce(delay = 300) {
    return (target, propertyKey, descriptor) => {
        const timeoutMap = new WeakMap();
        const originalMethod = descriptor.value;
        descriptor.value = function newMethod(...args) {
            clearTimeout(timeoutMap.get(this));
            timeoutMap.set(this, setTimeout(() => {
                originalMethod.apply(this, args);
                timeoutMap.delete(this);
            }, delay));
        };
        return descriptor;
    };
}


/***/ }),

/***/ "L6sk":
/*!*************************************************************!*\
  !*** ./src/app/core/directives/perfect-scroll.directive.ts ***!
  \*************************************************************/
/*! exports provided: PerfectScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollDirective", function() { return PerfectScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");



class PerfectScrollDirective {
    constructor(element) {
        this.element = element;
        this.container = element.nativeElement;
        this.container.style.position = 'relative';
        setTimeout(() => {
            this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](this.container, {
                wheelPropagation: true,
            });
        });
    }
}
PerfectScrollDirective.ɵfac = function PerfectScrollDirective_Factory(t) { return new (t || PerfectScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PerfectScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PerfectScrollDirective, selectors: [["", "appScroll", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfectScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appScroll]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "LMxC":
/*!********************************************************************!*\
  !*** ./src/app/shared/dictionaries/services/dictionary.service.ts ***!
  \********************************************************************/
/*! exports provided: DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryService", function() { return DictionaryService; });
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/http.service */ "bUwk");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");
/* harmony import */ var _shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.indexed-db */ "7mus");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






class DictionaryService {
    constructor(injector) {
        this.injector = injector;
        this.$config = this.injector.get(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__["ConfigService"]);
        this.$http = this.injector.get(_core_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]);
        this.$localization = this.injector.get(_core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"]);
        this.$indexedDb = this.injector.get(_shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_3__["DictionariesIndexedDb"]);
        this._value$ = this.$localization.currentLang$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(lang => this.$indexedDb.getDictionaryItemByIndex(this._dictionaryName, 'lang', lang)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(value => !!value
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(value)
            : this.$indexedDb.getDictionaryItemByIndex(this._dictionaryName, 'default', 'true')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    }
    get value$() {
        return this._value$;
    }
    get value() {
        return this._value;
    }
    initialize(urlKey = null, defaultValues = []) {
        if (!this._dictionaryName) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }
        return this.$indexedDb.getDictionary(this._dictionaryName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((values) => !!values.length
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.$config.get(urlKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(url => !!url
                ? this.loadDictionaryData(url)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((values) => values || defaultValues), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((values) => this.$indexedDb.addDictionary(this._dictionaryName, values)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.value$.subscribe(value => this._value = value)));
    }
    loadDictionaryData(url) {
        return this.$http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'));
    }
}


/***/ }),

/***/ "LYpy":
/*!*****************************************!*\
  !*** ./src/app/core/utils/sort.util.ts ***!
  \*****************************************/
/*! exports provided: sortByFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByFactory", function() { return sortByFactory; });
function sortByFactory(key, direction = 1) {
    return (item1, item2) => direction * (item1[key] > item2[key] ? 1 : item1[key] < item2[key] ? -1 : 0);
}


/***/ }),

/***/ "LZ/j":
/*!***************************************************!*\
  !*** ./src/app/core/pipes/object-entries.pipe.ts ***!
  \***************************************************/
/*! exports provided: ObjectEntriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectEntriesPipe", function() { return ObjectEntriesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ObjectEntriesPipe {
    transform(object, orderBy = null, orderDirection = 'ascend', isComplexObject = false) {
        let entries;
        if (typeof object !== 'object') {
            return [];
        }
        else if (typeof object === 'object' && Array.isArray(object)) {
            return object;
        }
        entries = Object
            .entries(object)
            .map(([key, value]) => isComplexObject ? Object.assign(Object.assign({}, value), { key }) : { key, value });
        if (orderBy !== null) {
            const direction = orderDirection === 'descend' ? -1 : 1;
            entries = entries.sort((a, b) => {
                const orderByA = this.getPropertyByKeys(isComplexObject ? a : a.value, orderBy);
                const orderByB = this.getPropertyByKeys(isComplexObject ? b : b.value, orderBy);
                return orderByA > orderByB
                    ? direction
                    : (orderByA < orderByB
                        ? -direction
                        : 0);
            });
        }
        return entries;
    }
    getPropertyByKeys(object, keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        for (const key of keys) {
            object = object[key] || {};
        }
        return object;
    }
}
ObjectEntriesPipe.ɵfac = function ObjectEntriesPipe_Factory(t) { return new (t || ObjectEntriesPipe)(); };
ObjectEntriesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "objectEntries", type: ObjectEntriesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectEntriesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'objectEntries'
            }]
    }], null, null); })();


/***/ }),

/***/ "MJ0a":
/*!*****************************************************************************!*\
  !*** ./src/app/base/filters/filter-date-time/filter-date-time.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FilterDateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDateTimeComponent", function() { return FilterDateTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.utils */ "7RLK");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/filter-date.constants */ "u962");
/* harmony import */ var _utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/filter-date.utils */ "a3Xp");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/pipes/dictionary.pipe */ "Dz+d");
















class FilterDateTimeComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._value = [null, null];
        this.format = 'yyyy-MM-dd';
        this.workHours = _utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_6__["WORK_HOURS"];
        this.minDuration = 3600000;
        this.autoUpdateDateTo = false;
        this.autoUpdateDateToFullDay = false;
        this._disabledHours = [];
        this.onChange = (_value) => { };
        this.onTouched = () => { };
        this.disableDateFrom = (date) => {
            return Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["disableDateFrom"])(date);
        };
        this.disableDateTo = (date) => {
            return Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["disableDateTo"])(date, this.value[0]);
        };
        this.disableHoursFrom = () => {
            return Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["disableHoursFrom"])(this.value[0], this._disabledHours);
        };
        this.disableHoursTo = () => {
            return Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["disableHoursTo"])(this.value[1], this.value[0], this._disabledHours);
        };
        this.disableMinutesFrom = (hour) => {
            return Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["disableMinutesFrom"])(hour, this.value[0], Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["disableHoursFrom"])(this.value[0], this._disabledHours));
        };
        this.disableMinutesTo = (hour) => {
            return Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["disableMinutesTo"])(hour, this.value[0], this.value[1], this._disabledHours);
        };
    }
    get timePickerOptions() {
        return this._timePickerOptions;
    }
    set value(value) {
        this._value = value;
        this.onChange(this.value);
        this.cdr.markForCheck();
    }
    get value() {
        return this._value;
    }
    updateDateFrom(dateFrom) {
        this.value[0] = dateFrom;
        if (this.autoUpdateDateTo && this.value[1] < dateFrom) {
            this.updateDateTo(this.autoUpdateDateToFullDay
                ? Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_4__["setHours"])(new Date(this.value[0]), this.workHours[1])
                : Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["addMilliseconds"])(this.value[0], this.minDuration));
        }
        else {
            this.updateValue();
        }
    }
    updateDateTo(dateTo) {
        this.value[1] = dateTo;
        this.updateValue();
    }
    updateValue() {
        this.value = this.value;
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    ngOnInit() {
        this._timePickerOptions = Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["timePickerDefaultOptions"])(this.timePickerOptions);
        this._disabledHours = Object(_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_7__["getDisabledHours"])(this.workHours);
    }
    writeValue(value = []) {
        if (!value) {
            this.value = [null, null];
            return;
        }
        if (this.value[0] === value[0] && this.value[1] === value[1]) {
            return;
        }
        try {
            this.value = value.map((item) => item instanceof Date ||
                typeof item === 'string' ||
                typeof item === 'number'
                ? new Date(item)
                : null);
        }
        catch (e) {
            console.error(e);
        }
    }
}
FilterDateTimeComponent.ɵfac = function FilterDateTimeComponent_Factory(t) { return new (t || FilterDateTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
FilterDateTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterDateTimeComponent, selectors: [["app-filter-date-time"]], inputs: { format: "format", workHours: "workHours", minDuration: "minDuration", autoUpdateDateTo: "autoUpdateDateTo", autoUpdateDateToFullDay: "autoUpdateDateToFullDay", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => FilterDateTimeComponent),
                multi: true,
            },
        ])], decls: 23, vars: 40, consts: [["nz-form", ""], [1, "date-time"], ["name", "from-date", 3, "nzPlaceHolder", "nzFormat", "nzDisabledDate", "ngModel", "ngModelChange"], ["name", "from-date-time", 3, "ngModel", "nzDefaultOpenValue", "nzFormat", "nzMinuteStep", "nzHideDisabledOptions", "nzDisabledHours", "nzDisabledMinutes", "ngModelChange"], ["name", "to-date", 3, "nzPlaceHolder", "nzFormat", "nzDisabledDate", "ngModel", "ngModelChange"], ["name", "to-date-time", 3, "ngModel", "nzDefaultOpenValue", "nzFormat", "nzMinuteStep", "nzHideDisabledOptions", "nzDisabledHours", "nzDisabledMinutes", "ngModelChange"]], template: function FilterDateTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-date-picker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDateTimeComponent_Template_nz_date_picker_ngModelChange_8_listener($event) { return ctx.updateDateFrom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-time-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDateTimeComponent_Template_nz_time_picker_ngModelChange_11_listener($event) { return ctx.updateDateFrom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-date-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDateTimeComponent_Template_nz_date_picker_ngModelChange_19_listener($event) { return (ctx.value[1] = $event); })("ngModelChange", function FilterDateTimeComponent_Template_nz_date_picker_ngModelChange_19_listener($event) { return ctx.updateDateTo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-time-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDateTimeComponent_Template_nz_time_picker_ngModelChange_22_listener($event) { return (ctx.value[1] = $event); })("ngModelChange", function FilterDateTimeComponent_Template_nz_time_picker_ngModelChange_22_listener($event) { return ctx.updateDateTo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 26, "From")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 30, "From")))("nzFormat", ctx.format)("nzDisabledDate", ctx.disableDateFrom)("ngModel", ctx.value[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value[0])("nzDefaultOpenValue", ctx.timePickerOptions.nzDefaultOpenValue)("nzFormat", ctx.timePickerOptions.nzFormat)("nzMinuteStep", ctx.timePickerOptions.nzMinuteStep)("nzHideDisabledOptions", ctx.timePickerOptions.nzHideDisabledOptions)("nzDisabledHours", ctx.disableHoursFrom)("nzDisabledMinutes", ctx.disableMinutesFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 34, "To")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 38, "To")))("nzFormat", ctx.format)("nzDisabledDate", ctx.disableDateTo)("ngModel", ctx.value[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value[1])("nzDefaultOpenValue", ctx.timePickerOptions.nzDefaultOpenValue)("nzFormat", ctx.timePickerOptions.nzFormat)("nzMinuteStep", ctx.timePickerOptions.nzMinuteStep)("nzHideDisabledOptions", ctx.timePickerOptions.nzHideDisabledOptions)("nzDisabledHours", ctx.disableHoursTo)("nzDisabledMinutes", ctx.disableMinutesTo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormControlComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_10__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_11__["NzTimePickerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_13__["DictionaryPipe"]], styles: [".date-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n.date-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.date-time[_ngcontent-%COMP%]   nz-time-picker[_ngcontent-%COMP%] {\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1kYXRlLXRpbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUY7QUFIQTtFQU1JLFVBQUE7QUFBSjtBQU5BO0VBVUksVUFBQTtBQURKIiwiZmlsZSI6ImZpbHRlci1kYXRlLXRpbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kYXRlLXRpbWV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTBweDtcblxuICBuei1kYXRlLXBpY2tlcntcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgbnotdGltZS1waWNrZXJ7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_3__["MarkForCheck"]
], FilterDateTimeComponent.prototype, "_value", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterDateTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filter-date-time',
                templateUrl: './filter-date-time.component.html',
                styleUrls: ['./filter-date-time.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => FilterDateTimeComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { _value: [], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], workHours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoUpdateDateTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoUpdateDateToFullDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "MYni":
/*!************************************************!*\
  !*** ./src/app/layout/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/layout/layout.component */ "8ERB");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/layout/header/header.module */ "ayF6");
/* harmony import */ var _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/layout/navigation/navigation.module */ "iNfJ");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/breadcrumb/breadcrumb.module */ "Vhn4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/layout/navigation-mobile/navigation-mobile.module */ "QtL1");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _base_title_title_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @base/title/title.module */ "WsJC");














class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
            _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_9__["NavigationMobileModule"],
            _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbModule"],
            _base_title_title_module__WEBPACK_IMPORTED_MODULE_12__["TitleModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_app_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
        _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
        _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_9__["NavigationMobileModule"],
        _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbModule"],
        _base_title_title_module__WEBPACK_IMPORTED_MODULE_12__["TitleModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"]], exports: [_app_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
                exports: [_app_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                    _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _app_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
                    _app_layout_navigation_mobile_navigation_mobile_module__WEBPACK_IMPORTED_MODULE_9__["NavigationMobileModule"],
                    _base_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbModule"],
                    _base_title_title_module__WEBPACK_IMPORTED_MODULE_12__["TitleModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PCLb":
/*!******************************************!*\
  !*** ./src/app/core/models/url.model.ts ***!
  \******************************************/
/*! exports provided: Url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
class Url {
    constructor(pattern, params, stringify, includesParam, includesParams) {
        this._pattern = pattern;
        this.stringify = stringify;
        this._includesParam = includesParam;
        this._includesParams = includesParams;
        if (params && Object.keys(params).length) {
            this._pattern = this.stringify(params, true);
        }
    }
    get pattern() {
        return this._pattern;
    }
    includesParam(key) {
        if (typeof this._includesParam === 'function') {
            return this.includesParam(key);
        }
        return null;
    }
    includesParams(key, ...keys) {
        keys = key instanceof Array ? key : [].concat(key, keys);
        if (typeof this._includesParams === 'function') {
            return this.includesParams(keys);
        }
        return null;
    }
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_indexed_db_indexed_db_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/indexed-db/indexed-db.module */ "q9Tp");
/* harmony import */ var _core_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.tokens */ "UZaM");
/* harmony import */ var _app_shared_shared_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.dictionary */ "rwhT");
/* harmony import */ var _app_shared_http_http_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/http/http.module */ "zOLR");
/* harmony import */ var _app_shared_dictionaries_dictionaries_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/dictionaries/dictionaries.module */ "VHmk");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.service */ "naTb");
/* harmony import */ var _shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/settings/settings.module */ "JXFP");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        {
            provide: _core_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_DICTIONARY"],
            useValue: _app_shared_shared_dictionary__WEBPACK_IMPORTED_MODULE_3__["SharedDictionary"],
            multi: true
        },
        _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
    ], imports: [_app_shared_dictionaries_dictionaries_module__WEBPACK_IMPORTED_MODULE_5__["DictionariesModule"],
        _app_shared_indexed_db_indexed_db_module__WEBPACK_IMPORTED_MODULE_1__["IndexedDbModule"],
        _app_shared_http_http_module__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
        _shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_7__["SettingsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: [_app_shared_dictionaries_dictionaries_module__WEBPACK_IMPORTED_MODULE_5__["DictionariesModule"],
        _app_shared_indexed_db_indexed_db_module__WEBPACK_IMPORTED_MODULE_1__["IndexedDbModule"],
        _app_shared_http_http_module__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
        _shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_7__["SettingsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    _app_shared_dictionaries_dictionaries_module__WEBPACK_IMPORTED_MODULE_5__["DictionariesModule"],
                    _app_shared_indexed_db_indexed_db_module__WEBPACK_IMPORTED_MODULE_1__["IndexedDbModule"],
                    _app_shared_http_http_module__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                    _shared_settings_settings_module__WEBPACK_IMPORTED_MODULE_7__["SettingsModule"]
                ],
                providers: [
                    {
                        provide: _core_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_DICTIONARY"],
                        useValue: _app_shared_shared_dictionary__WEBPACK_IMPORTED_MODULE_3__["SharedDictionary"],
                        multi: true
                    },
                    _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PNQ3":
/*!*********************************************************!*\
  !*** ./src/app/shared/http/services/dpa-api.service.ts ***!
  \*********************************************************/
/*! exports provided: DpaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpaApiService", function() { return DpaApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _common_base_base_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/base/base.api */ "zYZC");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");





class DpaApiService extends _common_base_base_api__WEBPACK_IMPORTED_MODULE_2__["BaseApi"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._apiUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    assignDPA(params = {}) {
        return this.$http
            .post(this._apiUrl + '/assignDPA', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    checkLastDPA(params = {}) {
        return this.$http
            .post(this._apiUrl + '/checkLastDPA', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    getLastDPA() {
        return this.$http
            .post(this._apiUrl + '/getLastDPA')
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
}
DpaApiService.ɵfac = function DpaApiService_Factory(t) { return new (t || DpaApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
DpaApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DpaApiService, factory: DpaApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DpaApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "PQuL":
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/*! exports provided: User, Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
class User {
    constructor(user) {
        this.managers = [];
        Object.assign(this, user);
    }
    setLabelGroupsManager(labelGroups) {
        this.labelGroupsManager = labelGroups
            .filter(labelGroup => labelGroup.managers.includes(this.id))
            .map(({ id }) => id);
        return this;
    }
    setManagers(labelGroups) {
        this.managers = this.labelGroups
            .flatMap(labelGroup => { var _a; return ((_a = labelGroups.find(({ id }) => id === labelGroup)) === null || _a === void 0 ? void 0 : _a.managers) || []; })
            .filter(((value, index, self) => self.indexOf(value) === index))
            .sort();
        return this;
    }
}
class Users extends Array {
    constructor(users) {
        if (typeof users === 'number') {
            super(users);
            return;
        }
        super(users.length || 0);
        users.forEach((user, index) => this[index] = new User(user));
    }
    getUserById(id) {
        return this.find(user => user.id === id) || null;
    }
}


/***/ }),

/***/ "PuBB":
/*!**************************************************!*\
  !*** ./src/app/shared/http/utils/common.util.ts ***!
  \**************************************************/
/*! exports provided: checkInterceptCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInterceptCondition", function() { return checkInterceptCondition; });
/* harmony import */ var _shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/http/utils/constants.util */ "1j6E");

function checkInterceptCondition(request, cacheMeta, cacheLocalization) {
    return (cacheMeta && request.headers.has(_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__["DB_CACHE_RESPONSE_HEADER"]))
        || (cacheLocalization && _shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__["LOCALIZATION_RESPONSE_REGEX"].test(request.url));
}


/***/ }),

/***/ "QEIv":
/*!*****************************************!*\
  !*** ./src/app/core/utils/http.util.ts ***!
  \*****************************************/
/*! exports provided: processResponseError, HttpErrorCode, filterHttpEventByState, filterSuccessHttpEvent, filterNoProgressHttpEvent, throwHttpError, mergeHttpHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processResponseError", function() { return processResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorCode", function() { return HttpErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterHttpEventByState", function() { return filterHttpEventByState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSuccessHttpEvent", function() { return filterSuccessHttpEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNoProgressHttpEvent", function() { return filterNoProgressHttpEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwHttpError", function() { return throwHttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeHttpHeaders", function() { return mergeHttpHeaders; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dictionary.service */ "8OyG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




function processResponseError(error) {
    return error === null || error === void 0 ? void 0 : error.message;
}
const HttpErrorCode = {
    default: 'unknownServerError',
    0: 'connectionFailed',
    400: 'badRequest',
    403: 'accessDenied',
    404: 'notFound',
    500: 'internalServerError',
    503: 'serverUnavailable'
};
function filterHttpEventByState(state) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(({ state: resState }) => state.startsWith('!')
        ? resState !== state.replace('!', '')
        : resState === state);
}
function filterSuccessHttpEvent() {
    return filterHttpEventByState('success');
}
function filterNoProgressHttpEvent() {
    return filterHttpEventByState('!pending');
}
function throwHttpError(error) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((response) => {
        var _a;
        error = error || ((_a = response.error) === null || _a === void 0 ? void 0 : _a.message) || response.error || _services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__["DictionaryService"].get(HttpErrorCode.default);
        return response.success
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(response)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
    });
}
function mergeHttpHeaders(source = {}, extra = {}) {
    if (!(source instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"])) {
        source = Object.entries(source).reduce((_headers, [key, value]) => _headers.append(key, value), new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({}));
    }
    if (extra instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]) {
        extra.keys().forEach(key => source = source.append(key, extra.get(key)));
    }
    else {
        try {
            Object.entries(extra).forEach(([key, value]) => source = source.append(key, value));
        }
        catch (e) {
        }
    }
    return source;
}


/***/ }),

/***/ "QT/m":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/header/components/header-notifications/header-notifications.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: HeaderNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotificationsComponent", function() { return HeaderNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _app_layout_header_components_header_notifications_header_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/header/components/header-notifications/header-notifications.service */ "webD");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var _header_notifications_item_header_notifications_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header-notifications-item/header-notifications-item.component */ "ZAut");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");















function HeaderNotificationsComponent_ng_template_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-header-notifications-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("remove", function HeaderNotificationsComponent_ng_template_2_li_1_Template_app_header_notifications_item_remove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.removeById($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", item_r7.type)("message", item_r7.message)("id", item_r7.id);
} }
function HeaderNotificationsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderNotificationsComponent_ng_template_2_li_1_Template, 2, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderNotificationsComponent_ng_template_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.removeAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function HeaderNotificationsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044E\u0442");
} }
function HeaderNotificationsComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function HeaderNotificationsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderNotificationsComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 11);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.items.length > 0 ? _r0 : _r2);
} }
class HeaderNotificationsComponent {
    constructor($service, cdr) {
        this.$service = $service;
        this.cdr = cdr;
        this.showElements = [];
        this.indentClass = '';
        this.sub = $service.userNotifications$.subscribe((items) => {
            this.items = items;
            this.cdr.markForCheck();
        });
    }
    removeById(id) {
        const updateItems = this.items.filter((item) => item.id !== id);
        this.$service.userNotifications$.next(updateItems);
    }
    removeAll() {
        this.$service.userNotifications$.next([]);
    }
    showItem(index) {
        return this.showElements.includes(index);
    }
    ngOnDestroy() {
    }
}
HeaderNotificationsComponent.ɵfac = function HeaderNotificationsComponent_Factory(t) { return new (t || HeaderNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_layout_header_components_header_notifications_header_notifications_service__WEBPACK_IMPORTED_MODULE_3__["HeaderNotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
HeaderNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderNotificationsComponent, selectors: [["app-header-notifications"]], inputs: { indentClass: "indentClass" }, decls: 8, vars: 5, consts: [[1, "notifications", 3, "nzCount", "nzOverflowCount"], ["nz-icon", "", "nzType", "bell", "nzTheme", "outline", "nz-popover", "", "nzPopoverPlacement", "bottomRight", 1, "notifications__icon", 3, "nzPopoverContent", "nzPopoverOverlayClassName", "nzPopoverTrigger"], ["dropdownMenuAvailabilityTpl", ""], ["dropdownMenuAbsenceTpl", ""], ["notificationsTpl", ""], ["nz-menu", "", 1, "notifications__items"], ["nz-menu-item", "", "class", "notifications__item", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", 1, "notifications__item-delete-all", 3, "click"], ["nz-menu-item", "", 1, "notifications__item"], [3, "type", "message", "id", "remove"], [1, "light-fon", 3, "nzNotFoundContent"], [4, "ngTemplateOutlet"]], template: function HeaderNotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-badge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderNotificationsComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderNotificationsComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderNotificationsComponent_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzCount", ctx.items.length)("nzOverflowCount", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPopoverContent", _r4)("nzPopoverOverlayClassName", "notifications-dropdown " + ctx.indentClass)("nzPopoverTrigger", "click");
    } }, directives: [ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_4__["NzBadgeComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_7__["NzPopoverDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuItemDirective"], _header_notifications_item_header_notifications_item_component__WEBPACK_IMPORTED_MODULE_12__["HeaderNotificationsItemComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__["NzEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n.notifications[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: inherit;\n  color: inherit;\n}\n.notifications[_ngcontent-%COMP%]     nz-badge-sup {\n  padding: 0;\n  min-width: auto;\n  width: 15px;\n  height: 12px;\n  line-height: 1;\n  color: #ffffff;\n}\n  .notifications-dropdown .ant-popover-inner-content,   .notifications-dropdown .ant-popover-content,   .notifications-dropdown .ant-popover-inner {\n  box-shadow: none;\n  background-color: transparent!important;\n  padding: 0;\n}\n  .notifications-dropdown .ant-empty {\n  margin: 0;\n}\n  .notifications-dropdown ul,   .notifications-dropdown button,   .notifications-dropdown nz-empty {\n  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.08) !important;\n}\n  .notifications-dropdown.top-indent {\n  top: 21px;\n}\n  .notifications-dropdown.bottom-indent {\n  top: -21px;\n}\n  .notifications-dropdown .light-fon {\n  padding: 8px;\n  background-color: #ffffff;\n}\n  .notifications-dropdown .notifications__items {\n  border-radius: 2px;\n}\n  .notifications-dropdown .notifications__item {\n  display: flex;\n  align-items: center;\n  height: auto;\n  margin: 0!important;\n  padding: 4px;\n}\n  .notifications-dropdown .notifications__item-delete-all {\n  margin-top: 16px;\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBQzdGOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQztBQWpCRDtFQUNFLHFCQUFBO0FBbUJGO0FBakJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQW1CRjtBQXRCQTtFQU1JLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQW1CSjtBQWhCQTs7O0VBRUksZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7QUFtQko7QUF2QkE7RUFPSSxTQUFBO0FBbUJKO0FBMUJBOzs7RUFVSSxzREFBQTtBQXFCSjtBQW5CRTtFQUNFLFNBQUE7QUFxQko7QUFuQkU7RUFDRSxVQUFBO0FBcUJKO0FBckNBO0VBbUJJLFlBQUE7RUFDQSx5QkFBQTtBQXFCSjtBQXpDQTtFQXVCSSxrQkFBQTtBQXFCSjtBQTVDQTtFQTBCSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBcUJKO0FBcEJJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXNCTiIsImZpbGUiOiJoZWFkZXItbm90aWZpY2F0aW9ucy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9vdmVycmlkZVwiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubm90aWZpY2F0aW9ucyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgJl9faWNvbiB7fVxuICA6Om5nLWRlZXAgbnotYmFkZ2Utc3VwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6IEBncmF5LTE7XG4gIH1cbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9ucy1kcm9wZG93biB7XG4gIC5hbnQtcG9wb3Zlci1pbm5lci1jb250ZW50LCAuYW50LXBvcG92ZXItY29udGVudCwgLmFudC1wb3BvdmVyLWlubmVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5hbnQtZW1wdHkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICB1bCwgYnV0dG9uLCBuei1lbXB0eSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAycHggcmdiYSgwLDAsMCwwLjA4KSFpbXBvcnRhbnQ7XG4gIH1cbiAgJi50b3AtaW5kZW50IHtcbiAgICB0b3A6IDIxcHg7XG4gIH1cbiAgJi5ib3R0b20taW5kZW50IHtcbiAgICB0b3A6IC0yMXB4O1xuICB9XG4gIC5saWdodC1mb24ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZ3JheS0xO1xuICB9XG4gIC5ub3RpZmljYXRpb25zX19pdGVtcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG4gIC5ub3RpZmljYXRpb25zX19pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgICYtZGVsZXRlLWFsbCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscriptions"])()
], HeaderNotificationsComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderNotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header-notifications',
                templateUrl: './header-notifications.component.html',
                styleUrls: ['./header-notifications.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_layout_header_components_header_notifications_header_notifications_service__WEBPACK_IMPORTED_MODULE_3__["HeaderNotificationsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { sub: [], indentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "QtL1":
/*!**********************************************************************!*\
  !*** ./src/app/layout/navigation-mobile/navigation-mobile.module.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationMobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMobileModule", function() { return NavigationMobileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_layout_navigation_mobile_navigation_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/navigation-mobile/navigation-mobile.component */ "JSKI");
/* harmony import */ var _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/header/header.module */ "ayF6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var _src_app_base_reservation_by_qr_reservation_by_qr_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/base/reservation-by-qr/reservation-by-qr.module */ "4bej");










class NavigationMobileModule {
}
NavigationMobileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavigationMobileModule });
NavigationMobileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavigationMobileModule_Factory(t) { return new (t || NavigationMobileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
            _src_app_base_reservation_by_qr_reservation_by_qr_module__WEBPACK_IMPORTED_MODULE_8__["ReservationByQRModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationMobileModule, { declarations: [_app_layout_navigation_mobile_navigation_mobile_component__WEBPACK_IMPORTED_MODULE_2__["NavigationMobileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
        _src_app_base_reservation_by_qr_reservation_by_qr_module__WEBPACK_IMPORTED_MODULE_8__["ReservationByQRModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"]], exports: [_app_layout_navigation_mobile_navigation_mobile_component__WEBPACK_IMPORTED_MODULE_2__["NavigationMobileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationMobileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_layout_navigation_mobile_navigation_mobile_component__WEBPACK_IMPORTED_MODULE_2__["NavigationMobileComponent"]],
                exports: [_app_layout_navigation_mobile_navigation_mobile_component__WEBPACK_IMPORTED_MODULE_2__["NavigationMobileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                    _src_app_base_reservation_by_qr_reservation_by_qr_module__WEBPACK_IMPORTED_MODULE_8__["ReservationByQRModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Rs3s":
/*!*********************************************************!*\
  !*** ./src/app/shared/http/services/log-api.service.ts ***!
  \*********************************************************/
/*! exports provided: LogApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogApiService", function() { return LogApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _common_base_base_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/base/base.api */ "zYZC");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");





class LogApiService extends _common_base_base_api__WEBPACK_IMPORTED_MODULE_2__["BaseApi"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._apiUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    putLogData(params = {}) {
        return this.$http
            .post(this._apiUrl + '/putLogData', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    getLogData(params = {}) {
        return this.$http
            .get(this._apiUrl + '/putLogData', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
}
LogApiService.ɵfac = function LogApiService_Factory(t) { return new (t || LogApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
LogApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogApiService, factory: LogApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "SCoG":
/*!************************************************************************!*\
  !*** ./src/app/shared/http/interceptors/cache-response.interceptor.ts ***!
  \************************************************************************/
/*! exports provided: CacheResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheResponseInterceptor", function() { return CacheResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/indexed-db/indexed-db.utils */ "WPJJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_http_utils_common_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/http/utils/common.util */ "PuBB");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-indexed-db */ "BvB/");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/app.service */ "F5nt");










class CacheResponseInterceptor {
    constructor($indexedDb, $config, $app) {
        this.$indexedDb = $indexedDb;
        this.$config = $config;
        this.$app = $app;
        this._cacheMeta = false;
        this.$app.configReady$.subscribe(() => {
            this._cacheMeta = this.$config.get('cacheMetaResponse', false);
            this._cacheLocalization = this.$config.get('cacheLocalizationResponse', false);
        });
    }
    static responseFromIndexedDb(indexedDbResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: indexedDbResponse.data }));
    }
    intercept(request, handler) {
        if (Object(_shared_http_utils_common_util__WEBPACK_IMPORTED_MODULE_5__["checkInterceptCondition"])(request, this._cacheMeta, this._cacheLocalization)) {
            return this.$indexedDb.getByIndex(_app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_RESPONSE"], 'url', request.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(response => response && response.data
                ? CacheResponseInterceptor.responseFromIndexedDb(response)
                : this.nativeResponse(request, handler)));
        }
        return handler.handle(request);
    }
    nativeResponse(request, handler) {
        return handler.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] && event.body) {
                this.addResponseToIndexedDb(request.url, event.body);
            }
        }));
    }
    addResponseToIndexedDb(url, data) {
        this.$indexedDb.add(_app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_RESPONSE"], { url, data });
    }
}
CacheResponseInterceptor.ɵfac = function CacheResponseInterceptor_Factory(t) { return new (t || CacheResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_6__["NgxIndexedDBService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"])); };
CacheResponseInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheResponseInterceptor, factory: CacheResponseInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheResponseInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_6__["NgxIndexedDBService"] }, { type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }, { type: _app_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"] }]; }, null); })();


/***/ }),

/***/ "SIZ/":
/*!*******************************************************!*\
  !*** ./src/app/shared/settings/settings.constants.ts ***!
  \*******************************************************/
/*! exports provided: SETTINGS_URL_KEY, SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_URL_KEY", function() { return SETTINGS_URL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
const SETTINGS_URL_KEY = 'settingsUrl';
const SETTINGS = [
    'applicationMarketUrlAndroid',
    'workplaceReservationTimeStepMinutes',
    'calendarAppointmentCreationHoursRangeMax',
    'userMessagesRestRequestMaxRangeDays',
    'workplaceReservationResetHour',
    'supportPhone',
    'maxRoomBookDurationMinutes',
    'smsAuthCodeLifetimeSeconds',
    'navigineLocationId',
    'workplaceReservationDurationMaxDays',
    'workplaceReservationEndHourDefault',
    'sendingSensorsValuesPeriodSeconds',
    'navigineUserHash',
    'autorefreshMobileAppSettingsPeriodSeconds',
    'calendarAppointmentDefaultSubject',
    'workplaceColorFree',
    'applicationBackgroundPinSessionTimeoutSeconds',
    'calendarAppointmentCreationHoursRangeMin',
    'workplaceReservationTimeoutFactorSeconds',
    'itServiceMail',
    'workplaceColorReservedByUser',
    'autorefreshLabelUsersDictionaryDataPeriodSeconds',
    'workplaceUIType',
    'workplaceColorReservedByMeNotConfirmed',
    'logSenderMails',
    'workplaceColorReservedByMe',
    'trackingDataProcessingMethod',
    'applicationMarketUrlIos',
    'supportMails',
    'oktaIssuerUrl',
    'sendingBeaconsDataPeriodSeconds',
    'uiAutorefreshPeriodSeconds',
    'beaconsDataArrayMaxLength',
    'navigineServerUrl',
    'workplaceReservationDurationMinSeconds',
    'RESULT_SUCCESS',
    'workplaceColorDisabled',
    'restApiCallsStatisticPeriodSeconds',
    'workplaceReservationBeginHourDefault',
    'itServicePhone',
    'autorefreshDynamicDataPeriodSeconds',
    'restApiCallsMinSuccessPercentage',
    'workplaceReservationDelayMaxDays',
    'workplaceReservationConfirmationMethod'
];


/***/ }),

/***/ "Sr1X":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/header/components/header-profile/header-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: HeaderProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderProfileComponent", function() { return HeaderProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _presentation_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @presentation/auth/auth.service */ "hsFk");
/* harmony import */ var _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.service */ "g1UE");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/navigation.service */ "CWrn");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");














function HeaderProfileComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "imageBlob");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const currentUser_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, currentUser_r2.avatarUrl)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentUser_r2.name);
} }
class HeaderProfileComponent {
    constructor($user, $auth, $indexedDb, $nav) {
        this.$user = $user;
        this.$auth = $auth;
        this.$indexedDb = $indexedDb;
        this.$nav = $nav;
        this.currentUser$ = this.$user.info$;
    }
    clearDatabase() {
        this.$indexedDb.clearAll().subscribe(() => {
            this.$nav
                .go('/', {})
                .then(() => window.location.reload());
        });
    }
    logout() {
        this.$auth.logout();
    }
    ngOnInit() {
    }
}
HeaderProfileComponent.ɵfac = function HeaderProfileComponent_Factory(t) { return new (t || HeaderProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_presentation_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_3__["IndexedDbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"])); };
HeaderProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderProfileComponent, selectors: [["app-header-profile"]], decls: 17, vars: 5, consts: [["nz-dropdown", "", 1, "profile", 3, "nzDropdownMenu", "nzTrigger"], [4, "ngIf"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["routerLink", "/profile", 1, "link-reset"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["href", "javascript:void(0)", 1, "link-reset", 3, "click"], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline"], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], ["nzIcon", "user", 1, "profile__avatar", 3, "nzSrc"], [1, "profile__name"], ["nz-icon", "", "nzType", "more", "nzTheme", "outline", 1, "profile__icon"]], template: function HeaderProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderProfileComponent_ng_container_1_Template, 7, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041F\u0440\u043E\u0444\u0438\u043B\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderProfileComponent_Template_a_click_11_listener() { return ctx.clearDatabase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderProfileComponent_Template_li_click_14_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0412\u044B\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r1)("nzTrigger", "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.currentUser$));
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__["NzDropDownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__["NzAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_12__["ImageBlobPipe"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n.profile[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.profile__name[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 14px;\n  line-height: 23px;\n  font-weight: 400;\n  max-width: 150px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.profile__icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1wcm9maWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUNBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNFO0VBQ0MsYUFBQTtBQUNIIiwiZmlsZSI6ImhlYWRlci1wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucHJvZmlsZSB7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmX19hdmF0YXIge31cbiAgJl9fbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgJl9faWNvbiB7XG4gICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-profile',
                templateUrl: './header-profile.component.html',
                styleUrls: ['./header-profile.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _presentation_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_3__["IndexedDbService"] }, { type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] }]; }, null); })();


/***/ }),

/***/ "SsGY":
/*!*****************************************************!*\
  !*** ./src/app/presentation/presentation.module.ts ***!
  \*****************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _presentation_presentation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @presentation/presentation-routing.module */ "qOg1");
/* harmony import */ var _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @composite/user-card/user-card.module */ "W6Nk");







class PresentationModule {
}
PresentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PresentationModule });
PresentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PresentationModule_Factory(t) { return new (t || PresentationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"].forChild(),
            _presentation_presentation_routing_module__WEBPACK_IMPORTED_MODULE_3__["PresentationRoutingModule"],
            _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_4__["UserCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PresentationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _presentation_presentation_routing_module__WEBPACK_IMPORTED_MODULE_3__["PresentationRoutingModule"],
        _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_4__["UserCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"].forChild(),
                    _presentation_presentation_routing_module__WEBPACK_IMPORTED_MODULE_3__["PresentationRoutingModule"],
                    _composite_user_card_user_card_module__WEBPACK_IMPORTED_MODULE_4__["UserCardModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} }
const _c0 = function (a0) { return { "d-none": a0 }; };
class AppComponent {
    constructor($loader) {
        this.$loader = $loader;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_1__["GlobalLoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"], ["", "app-root", ""]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-root", true);
    } }, decls: 5, vars: 8, consts: [[3, "ngClass"], ["class", "global-loader", 4, "ngIf"], [1, "global-loader"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.$loader.globalLoading$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.$loader.globalLoading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  margin: 0 auto;\n  max-width: 1920px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root, [app-root]',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.app-root]': `true`
                }
            }]
    }], function () { return [{ type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_1__["GlobalLoaderService"] }]; }, null); })();


/***/ }),

/***/ "UZaM":
/*!*************************************!*\
  !*** ./src/app/core/core.tokens.ts ***!
  \*************************************/
/*! exports provided: APP_CONFIG_URL, APP_CONFIG_VALUES, APP_DEFAULT_LANG, APP_LANGS, APP_DICTIONARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG_URL", function() { return APP_CONFIG_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG_VALUES", function() { return APP_CONFIG_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DEFAULT_LANG", function() { return APP_DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LANGS", function() { return APP_LANGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DICTIONARY", function() { return APP_DICTIONARY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_tokens_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/tokens.enum */ "nHQ5");


const APP_CONFIG_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](_enums_tokens_enum__WEBPACK_IMPORTED_MODULE_1__["Tokens"].configUrl);
const APP_CONFIG_VALUES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](_enums_tokens_enum__WEBPACK_IMPORTED_MODULE_1__["Tokens"].configValues);
const APP_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](_enums_tokens_enum__WEBPACK_IMPORTED_MODULE_1__["Tokens"].defaultLang);
const APP_LANGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](_enums_tokens_enum__WEBPACK_IMPORTED_MODULE_1__["Tokens"].langs);
const APP_DICTIONARY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](_enums_tokens_enum__WEBPACK_IMPORTED_MODULE_1__["Tokens"].dictionary);


/***/ }),

/***/ "VHmk":
/*!************************************************************!*\
  !*** ./src/app/shared/dictionaries/dictionaries.module.ts ***!
  \************************************************************/
/*! exports provided: DictionariesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionariesModule", function() { return DictionariesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _app_shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/dictionaries/dictionaries.indexed-db */ "7mus");
/* harmony import */ var _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/services/buildings.service */ "x7JW");
/* harmony import */ var _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/services/floor-maps.service */ "2Mmv");








class DictionariesModule {
}
DictionariesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DictionariesModule });
DictionariesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DictionariesModule_Factory(t) { return new (t || DictionariesModule)(); }, providers: [
        _app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_2__["DictionariesService"],
        _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_5__["FloorMapsService"],
        _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_4__["BuildingsService"],
        _app_shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_3__["DictionariesIndexedDb"]
    ], imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DictionariesModule, { imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionariesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild()
                ],
                providers: [
                    _app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_2__["DictionariesService"],
                    _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_5__["FloorMapsService"],
                    _shared_dictionaries_services_buildings_service__WEBPACK_IMPORTED_MODULE_4__["BuildingsService"],
                    _app_shared_dictionaries_dictionaries_indexed_db__WEBPACK_IMPORTED_MODULE_3__["DictionariesIndexedDb"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "VMbU":
/*!**********************************************************!*\
  !*** ./src/app/base/card/card-form-control.directive.ts ***!
  \**********************************************************/
/*! exports provided: CardFormControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFormControlDirective", function() { return CardFormControlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardFormControlDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this.name = "";
    }
}
CardFormControlDirective.ɵfac = function CardFormControlDirective_Factory(t) { return new (t || CardFormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CardFormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CardFormControlDirective, selectors: [["", "appCardFormControl", ""]], inputs: { name: ["appCardFormControl", "name"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardFormControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCardFormControl]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["appCardFormControl"]
        }] }); })();


/***/ }),

/***/ "VNtZ":
/*!*****************************************************!*\
  !*** ./src/app/layout/navigation/navigation.api.ts ***!
  \*****************************************************/
/*! exports provided: NavigationApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationApi", function() { return NavigationApi; });
/* harmony import */ var _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/common/base/base.api */ "zYZC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");






class NavigationApi extends _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_0__["BaseApi"] {
    constructor(injector, $localization) {
        super(injector);
        this.injector = injector;
        this.$localization = $localization;
    }
    get mainNavigation$() {
        return this.$config.getOne$('navigationUrl').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((url) => this.$localization.currentLang$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(lang => this.$url.createUrl(url, { lang })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((url) => this.$http.get(url)), Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterSuccessHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
}
NavigationApi.ɵfac = function NavigationApi_Factory(t) { return new (t || NavigationApi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"])); };
NavigationApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationApi, factory: NavigationApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "Vhn4":
/*!******************************************************!*\
  !*** ./src/app/base/breadcrumb/breadcrumb.module.ts ***!
  \******************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.component */ "eEkR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class BreadcrumbModule {
}
BreadcrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
                exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forChild(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "VnTQ":
/*!**********************************************************!*\
  !*** ./src/app/composite/user-card/user-card.service.ts ***!
  \**********************************************************/
/*! exports provided: UserCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardService", function() { return UserCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_core_services_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/core/services/messages.service */ "mliB");











class UserCardService {
    constructor($dictionary, _maskPipe, $api, fb, $messages) {
        this.$dictionary = $dictionary;
        this._maskPipe = _maskPipe;
        this.$api = $api;
        this.fb = fb;
        this.$messages = $messages;
        this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._userCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isLoading$ = this._isLoading$.asObservable();
        this.user$ = this._user$.asObservable();
    }
    get user() {
        return this._user$.value;
    }
    setUser(value) {
        this._user = value;
        this._user$.next(value);
    }
    userData(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            user: this.$dictionary.getDictionaryItemByKey('labels', id),
            users: this.$dictionary.getDictionary('labels'),
            labelGroups: this.$dictionary.getDictionary('labelGroups'),
            lifeData: this.$api.getLiveData('activeLabels'),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ user, users, labelGroups, lifeData }) => {
            this._users = users;
            this._labelGroups = labelGroups;
            this._activeLabels = lifeData.data.activeLabels.map((_al) => _al.id);
            this.setUser(Object.assign(Object.assign({}, user), { mainPhone: user.mainPhone.slice(1) }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ user }) => user))
            .toPromise();
    }
    default() {
        return {
            title: 'UserCard.User is not found',
            width: '100%',
            image: _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_USER_AVATAR"],
            descriptionList: [],
            tags: [],
            form: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ mainPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]() }),
        };
    }
    generateDescriptionList() {
        const result = [];
        result.push({
            name: 'Телефон',
            value: this._maskPipe.transform(this._user.mainPhone, '+0 (000) 000-00-00'),
            formControlTpl: 'phoneControl',
        });
        result.push({
            name: 'email',
            value: this._user.mail,
        });
        const managerIds = this._labelGroups
            .filter((_l) => this._user.labelGroups.includes(_l.id))
            .reduce((acc, lab) => {
            acc.push(...lab.managers);
            return acc;
        }, []);
        const leaders = this._users.filter((user) => managerIds.includes(user.id));
        result.push({
            name: 'Управляющие',
            value: leaders.map((_l) => _l.name).join('; '),
        });
        result.push({
            name: 'Дополнительная информация',
            value: this._user.description,
        });
        result.push({
            name: 'Статус',
            value: this._activeLabels.includes(this._user.id) ? 'В офисе' : 'Дома',
        });
        if (this._user.post) {
            result.push({
                name: 'Должность',
                value: this._user.post,
            });
        }
        if (this._user.description) {
            result.push({
                name: 'Подразделение',
                value: this._user.description,
            });
        }
        return result;
    }
    convertUserToCard() {
        this._userCardForm = this.fb.group({
            mainPhone: [
                this._user.mainPhone,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11)],
            ],
        });
        return {
            title: this._user.name,
            width: '100%',
            image: this._user.avatarImageUrl || _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_USER_AVATAR"],
            descriptionList: this.generateDescriptionList(),
            tags: [],
            form: this._userCardForm,
        };
    }
    updateUserData(id, userData) {
        this._isLoading$.next(true);
        const prevUserValue = Object.assign({}, this._user);
        this.setUser(Object.assign(Object.assign({}, prevUserValue), userData));
        userData.phones = '+' + userData.mainPhone;
        delete userData.mainPhone;
        return this.$dictionary.patchDictionaryItem('labels', id, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ success, data }) => {
            if (!success) {
                this.setUser(Object.assign({}, prevUserValue));
                this._userCardForm.reset(this._user);
                this.$messages.error('Ошибка обновления');
            }
            else {
                this.$dictionary.updateDictionaryItem('labels', data);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => {
            console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this._isLoading$.next(false)));
    }
}
UserCardService.ɵfac = function UserCardService_Factory(t) { return new (t || UserCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_mask__WEBPACK_IMPORTED_MODULE_6__["MaskPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_7__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_messages_service__WEBPACK_IMPORTED_MODULE_8__["MessagesService"])); };
UserCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserCardService, factory: UserCardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: ngx_mask__WEBPACK_IMPORTED_MODULE_6__["MaskPipe"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_7__["ReservationsApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _src_app_core_services_messages_service__WEBPACK_IMPORTED_MODULE_8__["MessagesService"] }]; }, null); })();


/***/ }),

/***/ "W6Nk":
/*!*********************************************************!*\
  !*** ./src/app/composite/user-card/user-card.module.ts ***!
  \*********************************************************/
/*! exports provided: UserCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardModule", function() { return UserCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _composite_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @composite/user-card/user-card.component */ "tuJx");
/* harmony import */ var _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @base/card/card.module */ "lW34");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class UserCardModule {
}
UserCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserCardModule });
UserCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserCardModule_Factory(t) { return new (t || UserCardModule)(); }, providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_6__["ImagesModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserCardModule, { declarations: [_composite_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_2__["UserCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _shared_images_images_module__WEBPACK_IMPORTED_MODULE_6__["ImagesModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"]], exports: [_composite_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_2__["UserCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_composite_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_2__["UserCardComponent"]],
                exports: [_composite_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_2__["UserCardComponent"]],
                providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _base_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_6__["ImagesModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forChild(),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WPJJ":
/*!*******************************************************!*\
  !*** ./src/app/shared/indexed-db/indexed-db.utils.ts ***!
  \*******************************************************/
/*! exports provided: DB_STORE_RESPONSE, DB_STORE_OPTIONS, DB_STORE_SETTINGS, DB_STORE_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_STORE_RESPONSE", function() { return DB_STORE_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_STORE_OPTIONS", function() { return DB_STORE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_STORE_SETTINGS", function() { return DB_STORE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_STORE_VERSION", function() { return DB_STORE_VERSION; });
const DB_STORE_RESPONSE = 'response';
const DB_STORE_OPTIONS = 'options';
const DB_STORE_SETTINGS = 'settings';
const DB_STORE_VERSION = 'version';


/***/ }),

/***/ "WsJC":
/*!********************************************!*\
  !*** ./src/app/base/title/title.module.ts ***!
  \********************************************/
/*! exports provided: TitleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleModule", function() { return TitleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title.component */ "6phe");




class TitleModule {
}
TitleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TitleModule });
TitleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TitleModule_Factory(t) { return new (t || TitleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TitleModule, { declarations: [_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]],
                exports: [
                    _title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "XYHI":
/*!*******************************************************************!*\
  !*** ./src/app/base/filters/filter-date/filter-date.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDateComponent", function() { return FilterDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/base/filters/utils/filter-date.constants */ "u962");
/* harmony import */ var _src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/base/filters/utils/filter-date.utils */ "a3Xp");
/* harmony import */ var _core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/decorators/debounce.decorator */ "KrC3");
/* harmony import */ var _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/decorators/async.decorator */ "olkM");
/* harmony import */ var _presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @presentation/offices/offices-map/offices-map.utils */ "7RLK");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/pipes/dictionary.pipe */ "Dz+d");
















function FilterDateComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDateComponent_label_6_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.toggleAllDay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", false)("disabled", ctx_r0.disableAllDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "AllDay")), "\n");
} }
class FilterDateComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.disableAllDay = false;
        this.allDay = false;
        this._value = [null, null];
        this.minDateTime = null;
        this.maxDateTime = null;
        this.layout = 'vertical';
        this.format = 'yyyy-MM-dd';
        this.workHours = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_3__["WORK_HOURS"];
        this.minDuration = 300000;
        this.allowAllDay = false;
        this.autoUpdateDateTo = false;
        this.autoUpdateDateToFullDay = false;
        this.staticDisabled = false;
        this._rangeDateFrom = [null, null];
        this._rangeTimeFrom = [null, null];
        this._rangeDateTo = [null, null];
        this._rangeTimeTo = [null, null];
        this._disabledHours = [];
        this.onChange = (_value) => { };
        this.onTouched = () => { };
        this.disabledDate = (current) => Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["differenceInCalendarDays"])(current, this.minDateTime) < 0 ||
            Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["differenceInCalendarDays"])(current, this.maxDateTime) > 0;
        this.disabledDateTime = (current) => {
            let minutesRange = [];
            if (current) {
                if (current.getHours() > this.minDateTime.getHours() &&
                    current.getHours() < this.maxDateTime.getHours()) {
                    minutesRange = this.range(0, 0);
                }
                else if (current.getHours() === this.minDateTime.getHours()) {
                    minutesRange = this.range(0, this.minDateTime.getMinutes() - 1);
                }
                else if (current.getHours() === this.maxDateTime.getHours()) {
                    minutesRange = this.range(this.maxDateTime.getMinutes() + 1, 60);
                }
            }
            return {
                nzDisabledHours: () => [
                    ...this.range(0, this.minDateTime.getHours()),
                    ...this.range(this.maxDateTime.getHours() + 1, 24),
                ],
                nzDisabledMinutes: () => minutesRange,
                nzDisabledSeconds: () => [],
            };
        };
        // public disabledDateTimeMax: DisabledTimeFn = (current: Date) => {
        //   return {
        //     nzDisabledHours: () => [
        //       ...this.range(0, this.minDateTime.getHours()),
        //       ...this.range(this.maxDateTime.getHours() + 1, 24),
        //     ],
        //     nzDisabledMinutes: () =>
        //       (current ? current.getHours() : 0) !== this.maxDateTime.getHours()
        //         ? this.range(0, 0)
        //         : this.range(0, this.maxDateTime.getMinutes()),
        //     nzDisabledSeconds: () => [],
        //   };
        // };
        this.disableDateFrom = (date) => {
            return Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["disableDate"])(date, this._rangeDateFrom);
        };
        this.disableDateTo = (date) => {
            return Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["disableDate"])(date, this._rangeDateTo);
        };
        this.disableTimeFrom = (date) => {
            return Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["disableTime"])(date, this._rangeTimeFrom, this._disabledHours);
        };
        this.disableTimeTo = (date) => {
            return Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["disableTime"])(date, this._rangeTimeTo, this._disabledHours);
        };
    }
    get timePickerOptions() {
        return !this.allDay ? this._timePickerOptions : null;
    }
    set value(value) {
        this._value = value;
        this.onChange(this.value);
        this.cdr.markForCheck();
    }
    get value() {
        return this._value;
    }
    set inputTimePickerOptions(timePickerOptions) {
        if (!timePickerOptions) {
            this._timePickerOptions = null;
            return;
        }
        this._timePickerOptions = Object.assign(Object.assign({}, this.timePickerOptions), timePickerOptions);
    }
    toggleAllDay(allDay) {
        this.allDay = allDay;
        if (this.allDay) {
            this.setAllDay();
        }
        this.updateRangeFrom();
        this.updateRangeTo();
    }
    updateDateFrom(dateFrom) {
        this.value[0] = dateFrom;
        this.checkAllDayEnabled(dateFrom);
        if (this.allDay) {
            this.setAllDay();
        }
        else if (this.autoUpdateDateTo && this.value[1] < dateFrom) {
            this.updateDateTo(this.autoUpdateDateToFullDay
                ? Object(_presentation_offices_offices_map_offices_map_utils__WEBPACK_IMPORTED_MODULE_7__["setHours"])(new Date(this.value[0]), this.workHours[1])
                : Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["addMilliseconds"])(this.value[0], this.minDuration));
        }
        else {
            this.updateValue();
        }
        this.updateRangeTo();
    }
    checkAllDayEnabled(dateFrom) {
        let checkDateFrom = new Date(dateFrom);
        checkDateFrom.setHours(0);
        checkDateFrom.setMinutes(0);
        checkDateFrom.setSeconds(0);
        checkDateFrom.setMilliseconds(0);
        let now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        if (+checkDateFrom === +now) {
            this.allDay = false;
            this.disableAllDay = true;
        }
        else {
            this.disableAllDay = false;
        }
    }
    updateDateTo(dateTo) {
        this.value[1] = dateTo;
        this.updateValue();
        this.updateRangeFrom();
    }
    updateValue() {
        this.value = this.value;
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    writeValue(value = []) {
        if (!value) {
            this.value = [null, null];
            return;
        }
        if (this.value[0] === value[0] && this.value[1] === value[1]) {
            return;
        }
        try {
            this.value = value.map((item) => item instanceof Date ||
                typeof item === 'string' ||
                typeof item === 'number'
                ? new Date(item)
                : null);
        }
        catch (e) {
            console.error(e);
        }
        this.checkAllDayEnabled(this.value[0]);
    }
    ngOnInit() {
        this._timePickerOptions = Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["timePickerDefaultOptions"])(this.timePickerOptions);
        this._disabledHours = Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["getDisabledHours"])(this.workHours);
    }
    updateRangeFrom() {
        this._rangeDateFrom = Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeDateFrom"])(this.minDateTime, this.minDateTime, this.value[1], this.minDuration, this.workHours, this.allDay || this.autoUpdateDateTo);
        this._rangeTimeFrom = Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeTimeFrom"])(this.minDateTime, this.minDateTime, this.value[1], this.minDuration, this.allDay || this.autoUpdateDateTo);
    }
    updateRangeTo() {
        this._rangeDateTo = Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeDateTo"])(this.minDateTime, this.minDateTime, this.value[0], this.minDuration, this.workHours);
        this._rangeTimeTo = Object(_src_app_base_filters_utils_filter_date_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeTimeTo"])(this.minDateTime, this.minDateTime, this.value[0], this.minDuration);
    }
    setAllDay() {
        const startHours = this.workHours[0] || 0;
        const endHours = this.workHours[1] || 23;
        const startDate = this.value[0] || new Date();
        this.value[0] = new Date(startDate.setHours(startHours, 0, 0, 0));
        this.value[1] = new Date(startDate.setHours(endHours, 0, 0, 0));
        this.updateValue();
    }
    range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
}
FilterDateComponent.ɵfac = function FilterDateComponent_Factory(t) { return new (t || FilterDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
FilterDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterDateComponent, selectors: [["app-filter-date"]], hostVars: 6, hostBindings: function FilterDateComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filter-date", true)("_horizontal", ctx.layout === "horizontal")("_vertical", ctx.layout === "vertical");
    } }, inputs: { minDateTime: "minDateTime", maxDateTime: "maxDateTime", layout: "layout", format: "format", workHours: "workHours", minDuration: "minDuration", allowAllDay: "allowAllDay", autoUpdateDateTo: "autoUpdateDateTo", autoUpdateDateToFullDay: "autoUpdateDateToFullDay", staticDisabled: "staticDisabled", value: "value", inputTimePickerOptions: ["timePickerOptions", "inputTimePickerOptions"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => FilterDateComponent),
                multi: true,
            },
        ])], decls: 7, vars: 22, consts: [[3, "nzPlaceHolder", "nzShowTime", "nzFormat", "nzDisabledDate", "nzDisabledTime", "ngModel", "ngModelChange"], [3, "nzPlaceHolder", "nzShowTime", "nzFormat", "nzDisabled", "nzDisabledDate", "nzDisabledTime", "ngModel", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "disabled", "ngModelChange"]], template: function FilterDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDateComponent_Template_nz_date_picker_ngModelChange_0_listener($event) { return ctx.updateDateFrom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-date-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDateComponent_Template_nz_date_picker_ngModelChange_3_listener($event) { return (ctx.value[1] = $event); })("ngModelChange", function FilterDateComponent_Template_nz_date_picker_ngModelChange_3_listener($event) { ctx.updateDateTo($event); return ctx.updateRangeFrom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FilterDateComponent_label_6_Template, 4, 7, "label", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 16, "From")))("nzShowTime", ctx.timePickerOptions)("nzFormat", ctx.format)("nzDisabledDate", !ctx.staticDisabled && ctx.disableDateFrom || ctx.staticDisabled && ctx.disabledDate)("nzDisabledTime", !ctx.staticDisabled && ctx.disableTimeFrom || ctx.staticDisabled && ctx.disabledDateTime)("ngModel", ctx.value[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 20, "To")))("nzShowTime", ctx.timePickerOptions)("nzFormat", ctx.format)("nzDisabled", ctx.allDay)("nzDisabledDate", !ctx.staticDisabled && ctx.disableDateTo || ctx.staticDisabled && ctx.disabledDate)("nzDisabledTime", !ctx.staticDisabled && ctx.disableTimeTo || ctx.staticDisabled && ctx.disabledDateTime)("ngModel", ctx.value[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allowAllDay);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__["NzCheckboxComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_13__["DictionaryPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n._horizontal[_nghost-%COMP%] {\n  flex-direction: row;\n  margin: 0 -8px;\n}\n._horizontal[_nghost-%COMP%]     .ant-picker {\n  margin: 0 8px;\n}\n._vertical[_nghost-%COMP%] {\n  flex-direction: column;\n}\n._vertical[_nghost-%COMP%]     .ant-picker {\n  margin-bottom: 22px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1kYXRlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUhFO0VBS0ksYUFBQTtBQUNOO0FBR0U7RUFDRSxzQkFBQTtBQURKO0FBQUU7RUFJSSxtQkFBQTtFQUNBLFdBQUE7QUFETiIsImZpbGUiOiJmaWx0ZXItZGF0ZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcblxuICAmLl9ob3Jpem9udGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMCAtOHB4O1xuXG4gICAgOjpuZy1kZWVwIC5hbnQtcGlja2Vye1xuICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG4gIH1cblxuICAmLl92ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIDo6bmctZGVlcCAuYW50LXBpY2tlcntcbiAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _core_decorators_async_decorator__WEBPACK_IMPORTED_MODULE_6__["MarkForCheck"]
], FilterDateComponent.prototype, "allDay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_debounce_decorator__WEBPACK_IMPORTED_MODULE_5__["Debounce"])(100)
], FilterDateComponent.prototype, "toggleAllDay", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filter-date',
                templateUrl: './filter-date.component.html',
                styleUrls: ['./filter-date.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => FilterDateComponent),
                        multi: true,
                    },
                ],
                host: {
                    '[class.filter-date]': `true`,
                    '[class._horizontal]': `layout === "horizontal"`,
                    '[class._vertical]': `layout === "vertical"`,
                },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { allDay: [], minDateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], workHours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowAllDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoUpdateDateTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoUpdateDateToFullDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], staticDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputTimePickerOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['timePickerOptions']
        }], toggleAllDay: [] }); })();


/***/ }),

/***/ "Xaq5":
/*!***********************************************!*\
  !*** ./src/app/shared/http/http.constants.ts ***!
  \***********************************************/
/*! exports provided: API_SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_SERVICES", function() { return API_SERVICES; });
/* harmony import */ var _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/http/services/meta-api.service */ "s4sJ");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _shared_http_services_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/http/services/user-api.service */ "zGPZ");
/* harmony import */ var _shared_http_services_live_data_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/services/live-data-api.service */ "+J7z");
/* harmony import */ var _services_log_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/log-api.service */ "Rs3s");
/* harmony import */ var _services_dpa_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/dpa-api.service */ "PNQ3");






const API_SERVICES = [
    _shared_http_services_live_data_api_service__WEBPACK_IMPORTED_MODULE_3__["LiveDataApiService"],
    _shared_http_services_meta_api_service__WEBPACK_IMPORTED_MODULE_0__["MetaApiService"],
    _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_1__["ReservationsApiService"],
    _shared_http_services_user_api_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"],
    _services_log_api_service__WEBPACK_IMPORTED_MODULE_4__["LogApiService"],
    _services_dpa_api_service__WEBPACK_IMPORTED_MODULE_5__["DpaApiService"],
];


/***/ }),

/***/ "XuKx":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/loading-dictionaries/loading-dictionaries.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoadingDictionariesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingDictionariesComponent", function() { return LoadingDictionariesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscribe.decorator */ "KDOc");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.service */ "naTb");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/navigation.service */ "CWrn");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/pipes/dictionary.pipe */ "Dz+d");













const _c0 = function () { return { "0%": "#108ee9", "100%": "#87d068" }; };
class LoadingDictionariesComponent {
    constructor($dictionaries, $shared, $navigation, $settings, _cdr) {
        this.$dictionaries = $dictionaries;
        this.$shared = $shared;
        this.$navigation = $navigation;
        this.$settings = $settings;
        this._cdr = _cdr;
        this.progress = this.$dictionaries.progress$;
    }
    ngOnInit() {
        this.$settings.initialize()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.$shared.loadDictionaries()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .subscribe(() => this.$navigation.reload());
    }
    ngOnDestroy() {
    }
}
LoadingDictionariesComponent.ɵfac = function LoadingDictionariesComponent_Factory(t) { return new (t || LoadingDictionariesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
LoadingDictionariesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingDictionariesComponent, selectors: [["app-loading-dictionaries"]], decls: 5, vars: 8, consts: [["nz-typography", ""], [3, "nzPercent", "nzStrokeColor"]], template: function LoadingDictionariesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nz-progress", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "WaitPleaseResourcesLoading")), "...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPercent", ctx.progress)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__["NzTypographyComponent"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__["NzProgressComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _core_pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_11__["DictionaryPipe"]], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.75);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n[_nghost-%COMP%]     .ant-progress {\n  width: 440px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctZGljdGlvbmFyaWVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFDRjtBQVhBO0VBYUksWUFBQTtBQUNKIiwiZmlsZSI6ImxvYWRpbmctZGljdGlvbmFyaWVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcblxuICA6Om5nLWRlZXAgLmFudC1wcm9ncmVzcyB7XG4gICAgd2lkdGg6IDQ0MHB4O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscribe"])()
], LoadingDictionariesComponent.prototype, "progress", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingDictionariesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-loading-dictionaries',
                templateUrl: './loading-dictionaries.component.html',
                styleUrls: ['./loading-dictionaries.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }, { type: _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { progress: [] }); })();


/***/ }),

/***/ "Yrpq":
/*!**********************************************!*\
  !*** ./src/app/core/services/url.service.ts ***!
  \**********************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_url_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/url.model */ "PCLb");
/* harmony import */ var _utils_instanceOf_utilI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/instanceOf.utilI */ "CEEL");




/* url-pattern example
 *
 * with replaced parameter
 * [http://host:port]/{:path-parameter}/page?q={:query-parameter}
 */
const PARAM_REGEX = /:[a-zA-Z][a-zA-Z0-9_]+/g;
const HTTP_PROTOCOL_SEP = '://';
class UrlService {
    concat(hostUrl, pathUrl) {
        if (hostUrl.endsWith('/')) {
            hostUrl = hostUrl.slice(0, -1);
        }
        if (pathUrl && pathUrl.startsWith('/')) {
            pathUrl = pathUrl.slice(1);
        }
        if (!pathUrl) {
            return hostUrl;
        }
        return `${hostUrl}/${pathUrl}`;
    }
    create(pattern = null, params = null) {
        if (Object(_utils_instanceOf_utilI__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(pattern)) {
            console.error('Cannot create Url-object with empty pattern');
            pattern = '';
        }
        return new _models_url_model__WEBPACK_IMPORTED_MODULE_1__["Url"](pattern, params, urlStringify);
    }
    createUrl(pattern, params = {}) {
        if (!pattern) {
            return null;
        }
        return this.stringify(this.create(pattern), params);
    }
    stringify(url, params) {
        return url.stringify(params);
    }
}
UrlService.ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(); };
UrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UrlService, factory: UrlService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
function urlStringify(params, preStringify = false) {
    let url = this.pattern;
    const paramsMatch = this.pattern.match(PARAM_REGEX);
    if (paramsMatch && paramsMatch.length > 0) {
        url = urlStringifyParams(url, paramsMatch, params);
    }
    if (preStringify) {
        return url;
    }
    url = url.replace(PARAM_REGEX, '');
    if (!url.includes(HTTP_PROTOCOL_SEP)) {
        return url.replace(/\/\//g, '/');
    }
    url = url
        .split(HTTP_PROTOCOL_SEP)
        .map((part) => part.replace(/\/\//g, '/'))
        .join(HTTP_PROTOCOL_SEP);
    return url;
}
function urlStringifyParams(url, paramsMatch, params) {
    paramsMatch.forEach((paramMatch) => {
        const paramName = paramMatch.startsWith(':')
            ? paramMatch.slice(1)
            : paramMatch;
        if (typeof params[paramName] !== 'undefined' &&
            params[paramName] !== null &&
            params[paramName] !== '') {
            url = url.replace(paramMatch, params[paramName]);
        }
    });
    return url;
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppBootstrapServiceFactory, NzI18NFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapServiceFactory", function() { return AppBootstrapServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzI18NFactory", function() { return NzI18NFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/ru */ "wq8c");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @presentation/presentation.module */ "SsGY");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _app_layout_layout_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layout/layout-shared.module */ "0Lx0");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/antd/antd.module */ "E+H7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/app.service */ "F5nt");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @core/services/http.service */ "bUwk");
/* harmony import */ var _core_core_tokens__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/core.tokens */ "UZaM");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
/* harmony import */ var _shared_http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/http/interceptors/auth.interceptor */ "6hwj");
/* harmony import */ var _core_services_notifications_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @core/services/notifications.service */ "/VmJ");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @core/services/messages.service */ "mliB");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-mask */ "tmjD");


































Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default.a);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6___default.a);
function AppBootstrapServiceFactory($app) {
    return () => $app.bootstrap();
}
function NzI18NFactory(localeId) {
    switch (localeId) {
        case 'en-US':
            return ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["en_US"];
        case 'ru-RU':
            return ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["ru_RU"];
    }
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _core_services_messages_service__WEBPACK_IMPORTED_MODULE_27__["MessagesService"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__["NzMessageService"],
        _core_services_notifications_service__WEBPACK_IMPORTED_MODULE_25__["NotificationsService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        {
            provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"],
            useFactory: NzI18NFactory,
            deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        },
        {
            provide: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NZ_CONFIG"],
            useValue: _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_14__["NG_ZORRO_CONFIG"]
        },
        {
            provide: _core_core_tokens__WEBPACK_IMPORTED_MODULE_21__["APP_CONFIG_VALUES"],
            useValue: [],
            multi: true
        },
        {
            provide: _core_core_tokens__WEBPACK_IMPORTED_MODULE_21__["APP_CONFIG_URL"],
            useValue: _src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].bootConfigUrl,
            multi: false
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: AppBootstrapServiceFactory,
            multi: true,
            deps: [_app_app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"], _core_services_config_service__WEBPACK_IMPORTED_MODULE_19__["ConfigService"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_20__["HttpService"], _core_services_localization_service__WEBPACK_IMPORTED_MODULE_17__["LocalizationService"]]
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _shared_http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
            multi: true
        },
        { provide: 'Window', useValue: window }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_10__["PresentationModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"].forRoot(),
            _app_layout_layout_shared_module__WEBPACK_IMPORTED_MODULE_12__["LayoutSharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicModule"].forRoot(),
            ngx_mask__WEBPACK_IMPORTED_MODULE_28__["NgxMaskModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_10__["PresentationModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _app_layout_layout_shared_module__WEBPACK_IMPORTED_MODULE_12__["LayoutSharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_28__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_10__["PresentationModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"].forRoot(),
                    _app_layout_layout_shared_module__WEBPACK_IMPORTED_MODULE_12__["LayoutSharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicModule"].forRoot(),
                    ngx_mask__WEBPACK_IMPORTED_MODULE_28__["NgxMaskModule"].forRoot(),
                ],
                providers: [
                    _core_services_messages_service__WEBPACK_IMPORTED_MODULE_27__["MessagesService"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_26__["NzMessageService"],
                    _core_services_notifications_service__WEBPACK_IMPORTED_MODULE_25__["NotificationsService"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
                    {
                        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"],
                        useFactory: NzI18NFactory,
                        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
                    },
                    {
                        provide: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NZ_CONFIG"],
                        useValue: _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_14__["NG_ZORRO_CONFIG"]
                    },
                    {
                        provide: _core_core_tokens__WEBPACK_IMPORTED_MODULE_21__["APP_CONFIG_VALUES"],
                        useValue: [],
                        multi: true
                    },
                    {
                        provide: _core_core_tokens__WEBPACK_IMPORTED_MODULE_21__["APP_CONFIG_URL"],
                        useValue: _src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].bootConfigUrl,
                        multi: false
                    },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: AppBootstrapServiceFactory,
                        multi: true,
                        deps: [_app_app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"], _core_services_config_service__WEBPACK_IMPORTED_MODULE_19__["ConfigService"], _core_services_http_service__WEBPACK_IMPORTED_MODULE_20__["HttpService"], _core_services_localization_service__WEBPACK_IMPORTED_MODULE_17__["LocalizationService"]]
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: _shared_http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
                        multi: true
                    },
                    { provide: 'Window', useValue: window }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAut":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/layout/header/components/header-notifications/header-notifications-item/header-notifications-item.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: HeaderNotificationsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotificationsItemComponent", function() { return HeaderNotificationsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/header/header.service */ "mtWJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");






class HeaderNotificationsItemComponent {
    constructor($header) {
        this.$header = $header;
        this.notificationIcons = this.$header.notificationIconsMap;
        this.itemClasses = [];
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.itemClasses.push('_' + this.type);
    }
    removeOutput(event) {
        event.stopPropagation();
        this.remove.emit(this.id);
    }
    showFullMessage() {
        if (!this.itemClasses.includes('_show')) {
            this.itemClasses.push('_show');
        }
    }
    get itemIcon() {
        return this.notificationIcons[this.type];
    }
}
HeaderNotificationsItemComponent.ɵfac = function HeaderNotificationsItemComponent_Factory(t) { return new (t || HeaderNotificationsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"])); };
HeaderNotificationsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderNotificationsItemComponent, selectors: [["app-header-notifications-item"]], inputs: { id: "id", type: "type", message: "message" }, outputs: { remove: "remove" }, decls: 9, vars: 6, consts: [[1, "notifications-item", 3, "ngClass", "click"], ["nz-icon", "", "nzTheme", "outline", 1, "notifications-item__icon", 3, "nzType"], [1, "notifications-item__content"], [1, "notifications-item__title"], [1, "notifications-item__message"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "notifications-item__delete", 3, "click"]], template: function HeaderNotificationsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNotificationsItemComponent_Template_div_click_0_listener() { return ctx.showFullMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNotificationsItemComponent_Template_i_click_8_listener($event) { return ctx.removeOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.itemClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.itemIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.notifications-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 18px;\n  border: 1px solid transparent;\n  border-radius: 2px;\n}\n.notifications-item._show[_ngcontent-%COMP%]   .notifications-item__message[_ngcontent-%COMP%] {\n  white-space: normal;\n  text-overflow: unset;\n  overflow: unset;\n}\n.notifications-item._success[_ngcontent-%COMP%] {\n  border-color: #b7eb8f;\n}\n.notifications-item._success[_ngcontent-%COMP%]   .notifications-item__icon[_ngcontent-%COMP%] {\n  color: #52c41a;\n}\n.notifications-item._error[_ngcontent-%COMP%] {\n  border-color: #ffccc7;\n}\n.notifications-item._error[_ngcontent-%COMP%]   .notifications-item__icon[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n}\n.notifications-item._warning[_ngcontent-%COMP%] {\n  border-color: #ffe58f;\n}\n.notifications-item._warning[_ngcontent-%COMP%]   .notifications-item__icon[_ngcontent-%COMP%] {\n  color: #faad14;\n}\n.notifications-item._info[_ngcontent-%COMP%] {\n  border-color: #bae7ff;\n}\n.notifications-item._info[_ngcontent-%COMP%]   .notifications-item__icon[_ngcontent-%COMP%] {\n  color: #40a9ff;\n}\n.notifications-item__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  line-height: 22px;\n  padding-bottom: 4px;\n}\n.notifications-item__icon[_ngcontent-%COMP%] {\n  font-size: 21px;\n  align-self: flex-start;\n  margin-right: 15px;\n}\n.notifications-item__message[_ngcontent-%COMP%] {\n  max-width: 260px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 14px;\n  margin: 0;\n  line-height: 16px;\n  padding-right: 8px;\n}\n.notifications-item__delete[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1ub3RpZmljYXRpb25zLWl0ZW0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBakJEO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFtQkY7QUFqQkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBbUJGO0FBbEJFO0VBRUksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFtQk47QUFoQkU7RUFJRSxxQkFBQTtBQWVKO0FBbkJFO0VBRUksY0FBQTtBQW9CTjtBQWhCRTtFQUlFLHFCQUFBO0FBZUo7QUFuQkU7RUFFSSxjQUFBO0FBb0JOO0FBaEJFO0VBSUUscUJBQUE7QUFlSjtBQW5CRTtFQUVJLGNBQUE7QUFvQk47QUFoQkU7RUFJRSxxQkFBQTtBQWVKO0FBbkJFO0VBRUksY0FBQTtBQW9CTjtBQWZFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBaUJKO0FBZkU7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWlCSjtBQWZFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFpQko7QUFmRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQWlCSiIsImZpbGUiOiJoZWFkZXItbm90aWZpY2F0aW9ucy1pdGVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvb3ZlcnJpZGUnO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubm90aWZpY2F0aW9ucy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAmLl9zaG93IHtcbiAgICAubm90aWZpY2F0aW9ucy1pdGVtX19tZXNzYWdlIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcbiAgICAgIG92ZXJmbG93OiB1bnNldDtcbiAgICB9XG4gIH1cbiAgJi5fc3VjY2VzcyB7XG4gICAgLm5vdGlmaWNhdGlvbnMtaXRlbV9faWNvbiB7XG4gICAgICBjb2xvcjogQGdyZWVuLTY7XG4gICAgfVxuICAgIGJvcmRlci1jb2xvcjogQGdyZWVuLTM7XG4gIH1cbiAgJi5fZXJyb3Ige1xuICAgIC5ub3RpZmljYXRpb25zLWl0ZW1fX2ljb24ge1xuICAgICAgY29sb3I6IEByZWQtNTtcbiAgICB9XG4gICAgYm9yZGVyLWNvbG9yOiBAcmVkLTI7XG4gIH1cbiAgJi5fd2FybmluZyB7XG4gICAgLm5vdGlmaWNhdGlvbnMtaXRlbV9faWNvbiB7XG4gICAgICBjb2xvcjogQGdvbGQtNjtcbiAgICB9XG4gICAgYm9yZGVyLWNvbG9yOiBAZ29sZC0zO1xuICB9XG4gICYuX2luZm8ge1xuICAgIC5ub3RpZmljYXRpb25zLWl0ZW1fX2ljb24ge1xuICAgICAgY29sb3I6IEBibHVlLTU7XG4gICAgfVxuICAgIGJvcmRlci1jb2xvcjogQGJsdWUtMjtcbiAgfVxuICAmX19jb250ZW50IHt9XG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIH1cbiAgJl9faWNvbiB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gICZfX21lc3NhZ2Uge1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gICZfX2RlbGV0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderNotificationsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-notifications-item',
                templateUrl: './header-notifications-item.component.html',
                styleUrls: ['./header-notifications-item.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZM1w":
/*!********************************************************!*\
  !*** ./src/app/shared/indexed-db/indexed-db.config.ts ***!
  \********************************************************/
/*! exports provided: indexedDbConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexedDbConfig", function() { return indexedDbConfig; });
/* harmony import */ var _indexed_db_migration_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed-db-migration.factory */ "p2k/");
/* harmony import */ var _app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/indexed-db/indexed-db.utils */ "WPJJ");
/* harmony import */ var _app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/dictionaries/dictionaries.utils */ "rIQ8");



const indexedDbConfig = {
    name: 'smartOfficeDb',
    version: 3,
    objectStoresMeta: [
        {
            store: _app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_1__["DB_STORE_RESPONSE"],
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'url', keypath: 'url', options: { unique: true } },
                { name: 'data', keypath: 'data', options: { unique: false } }
            ]
        },
        {
            store: _app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_1__["DB_STORE_OPTIONS"],
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: true } }
            ]
        },
        {
            store: _app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_1__["DB_STORE_SETTINGS"],
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: true } }
            ]
        },
        {
            store: _app_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_1__["DB_STORE_VERSION"],
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'version', keypath: 'version', options: { unique: true } }
            ]
        },
        ...Object(_app_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_2__["getDictionariesDbConfig"])()
    ],
    migrationFactory: _indexed_db_migration_factory__WEBPACK_IMPORTED_MODULE_0__["indexedDbMigrationFactory"]
};


/***/ }),

/***/ "a3Xp":
/*!*********************************************************!*\
  !*** ./src/app/base/filters/utils/filter-date.utils.ts ***!
  \*********************************************************/
/*! exports provided: timePickerDefaultOptions, getDisabledHours, getRangeDateFrom, getRangeTimeFrom, getRangeDateTo, getRangeTimeTo, disableDate, disableTime, disableDateFrom, disableDateTo, disableHoursFrom, disableHoursTo, disableMinutesFrom, disableMinutesTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timePickerDefaultOptions", function() { return timePickerDefaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisabledHours", function() { return getDisabledHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeDateFrom", function() { return getRangeDateFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeTimeFrom", function() { return getRangeTimeFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeDateTo", function() { return getRangeDateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeTimeTo", function() { return getRangeTimeTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDate", function() { return disableDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableTime", function() { return disableTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDateFrom", function() { return disableDateFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDateTo", function() { return disableDateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableHoursFrom", function() { return disableHoursFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableHoursTo", function() { return disableHoursTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableMinutesFrom", function() { return disableMinutesFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableMinutesTo", function() { return disableMinutesTo; });
/* harmony import */ var _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/app/base/filters/utils/filter-date.constants */ "u962");
/* harmony import */ var _core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/date.utils */ "FUCZ");


function timePickerDefaultOptions(options) {
    return Object.assign(Object.assign({}, _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_TIME_PICKER_OPTIONS"]), options);
}
function getDisabledHours(workHours) {
    return _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["HOURS"].filter((hour) => hour < workHours[0] || hour > workHours[1]);
}
function getRangeDateFrom(minDate, maxDate, dateTo, minDuration = 0, workHours = [], notUseDateTo = false) {
    if (!notUseDateTo) {
        maxDate = Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getMinDate"])(maxDate, dateTo);
    }
    if (maxDate) {
        const maxDateWithoutDurationHours = new Date(maxDate.getTime() - minDuration).getHours();
        if (typeof workHours[0] !== 'undefined' &&
            maxDateWithoutDurationHours < workHours[0]) {
            maxDate.setDate(maxDate.getDate() - 1);
        }
        maxDate = new Date(Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])(maxDate));
    }
    if (minDate)
        minDate = new Date(Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])(minDate));
    return [minDate, maxDate];
}
function getRangeTimeFrom(minDate, maxDate, dateTo, minDuration = 0, notUseDateTo = false) {
    const range = [null, null];
    if (!notUseDateTo) {
        maxDate = Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getMinDate"])(maxDate, dateTo);
    }
    if (minDate)
        range[0] = minDate;
    if (maxDate)
        range[1] = new Date(maxDate.getTime() - minDuration);
    return range;
}
function getRangeDateTo(minDate, maxDate, dateFrom, minDuration = 0, workHours = []) {
    minDate = Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getMinDate"])(minDate, dateFrom);
    if (minDate) {
        const minDateWithDurationHours = new Date(minDate.getTime() + minDuration).getHours();
        if (typeof workHours[1] !== 'undefined' &&
            minDateWithDurationHours >= workHours[1]) {
            minDate.setDate(minDate.getDate() + 1);
        }
        minDate = new Date(Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])(minDate));
    }
    if (maxDate)
        maxDate = new Date(Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])(maxDate));
    return [minDate, maxDate];
}
function getRangeTimeTo(minDate, maxDate, dateFrom, minDuration = 0) {
    const range = [null, null];
    if (maxDate)
        range[1] = maxDate;
    if ((!minDate && dateFrom) || (minDate && dateFrom && dateFrom > minDate))
        minDate = dateFrom;
    if (minDate)
        range[0] = new Date(minDate.getTime() + minDuration);
    return range;
}
function disableDate(date, [from, to]) {
    return (from && date < from) || (to && date > to);
}
function disableTime(date, [from, to], disabledHours) {
    const dateHours = date === null || date === void 0 ? void 0 : date.getHours();
    let disabledMinutes = [];
    if (from && Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])(date) === Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])(from)) {
        const fromHours = from.getHours();
        disabledHours = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["HOURS"].filter((hour) => disabledHours.includes(hour) || hour < fromHours);
        if (dateHours === fromHours) {
            const fromMinutes = from.getMinutes();
            disabledMinutes = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTES"].filter((minute) => minute < fromMinutes);
        }
    }
    if (to && Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])(date) === Object(_core_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])(to)) {
        const toHours = to.getHours();
        disabledHours = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["HOURS"].filter((hour) => disabledHours.includes(hour) || hour > toHours);
        if (dateHours === toHours) {
            const toMinutes = to.getMinutes();
            disabledMinutes = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTES"].filter((minute) => minute > toMinutes);
        }
    }
    return {
        nzDisabledHours() {
            return disabledHours;
        },
        nzDisabledMinutes(hour) {
            return disabledHours.includes(hour) ? _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTES"] : disabledMinutes;
        },
        nzDisabledSeconds(hour, minute) {
            return [];
        },
    };
}
function disableDateFrom(date) {
    const now = new Date();
    return (date === null || date === void 0 ? void 0 : date.getDate()) < now.getDate();
}
function disableDateTo(date, from) {
    return (date === null || date === void 0 ? void 0 : date.getDate()) < (from === null || from === void 0 ? void 0 : from.getDate());
}
function disableHoursFrom(date, disabledHours) {
    const now = new Date();
    if ((date === null || date === void 0 ? void 0 : date.getDate()) === now.getDate()) {
        const nowHour = now.getHours();
        disabledHours = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["HOURS"].filter((hour) => disabledHours.includes(hour) || hour < nowHour);
    }
    return disabledHours;
}
function disableHoursTo(to, from, disabledHours) {
    if ((to === null || to === void 0 ? void 0 : to.getDate()) === (from === null || from === void 0 ? void 0 : from.getDate())) {
        const fromDate = from.getHours();
        disabledHours = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["HOURS"].filter((hour) => disabledHours.includes(hour) || hour < fromDate);
    }
    return disabledHours;
}
function disableMinutesFrom(dateHour, from, disabledHours) {
    let disabledMinutes = [];
    const now = new Date();
    if (from.getDate() === now.getDate()) {
        const nowHour = now.getHours();
        if (dateHour === nowHour) {
            const nowMinute = now.getMinutes();
            disabledMinutes = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTES"].filter((minute) => minute < nowMinute);
        }
    }
    return disabledHours.includes(dateHour) ? _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTES"] : disabledMinutes;
}
function disableMinutesTo(dateHour, from, to, disabledHours) {
    let disabledMinutes = [];
    if ((from === null || from === void 0 ? void 0 : from.getDate()) === (to === null || to === void 0 ? void 0 : to.getDate())) {
        if ((from === null || from === void 0 ? void 0 : from.getHours()) === dateHour) {
            const fromMinute = from === null || from === void 0 ? void 0 : from.getMinutes();
            disabledMinutes = _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTES"].filter((minute) => minute < fromMinute);
        }
    }
    return disabledHours.includes(dateHour) ? _src_app_base_filters_utils_filter_date_constants__WEBPACK_IMPORTED_MODULE_0__["MINUTES"] : disabledMinutes;
}


/***/ }),

/***/ "acRR":
/*!**************************************************!*\
  !*** ./src/app/core/services/message.service.ts ***!
  \**************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/dictionary.service */ "8OyG");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");




const ITEM_REGEXP = /\${[^}]*}/g;
class MessageService {
    constructor($dictionary, $localization) {
        this.$dictionary = $dictionary;
        this.$localization = $localization;
    }
    concat(...values) {
        let separator = '';
        if (values.length > 2) {
            separator = values.pop();
        }
        return values
            .map(value => this.transformValue(value))
            .join(separator);
    }
    construct(template, vars) {
        const valuesMatch = template.match(ITEM_REGEXP);
        const values = valuesMatch.map(value => this.transformValue(value.slice(2, -1)));
        valuesMatch.forEach((valueMatch, index) => {
            template = template.replace(valueMatch, (vars === null || vars === void 0 ? void 0 : vars[values[index]]) || values[index]);
        });
        return template;
    }
    transformValue(value) {
        return this.$localization.translate(this.$dictionary.get(value, value));
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "akfq":
/*!*****************************************************!*\
  !*** ./src/app/base/renderer/renderer.component.ts ***!
  \*****************************************************/
/*! exports provided: RendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererComponent", function() { return RendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


function RendererComponent_app_formatter_renderer_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-formatter-renderer", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("options", ctx_r0.options)("value", ctx_r0.value);
} }
function RendererComponent_ng_container_2_app_link_renderer_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-link-renderer", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.options)("value", ctx_r2.value)("data", ctx_r2.data);
} }
function RendererComponent_ng_container_2_app_map_renderer_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map-renderer", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.options)("value", ctx_r3.value);
} }
function RendererComponent_ng_container_2_app_status_renderer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-status-renderer", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r4.options)("value", ctx_r4.value);
} }
function RendererComponent_ng_container_2_app_template_renderer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-template-renderer", 11);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r5.options)("data", ctx_r5.data);
} }
function RendererComponent_ng_container_2_app_action_renderer_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-action-renderer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionCall", function RendererComponent_ng_container_2_app_action_renderer_5_Template_app_action_renderer_actionCall_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.emitActionCall($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r6.options)("data", ctx_r6.data);
} }
function RendererComponent_ng_container_2_app_actions_renderer_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-actions-renderer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionCall", function RendererComponent_ng_container_2_app_actions_renderer_6_Template_app_actions_renderer_actionCall_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.emitActionCall($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r7.options)("data", ctx_r7.data);
} }
function RendererComponent_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.value, " ");
} }
function RendererComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RendererComponent_ng_container_2_app_link_renderer_1_Template, 1, 3, "app-link-renderer", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RendererComponent_ng_container_2_app_map_renderer_2_Template, 1, 2, "app-map-renderer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RendererComponent_ng_container_2_app_status_renderer_3_Template, 1, 2, "app-status-renderer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RendererComponent_ng_container_2_app_template_renderer_4_Template, 1, 2, "app-template-renderer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RendererComponent_ng_container_2_app_action_renderer_5_Template, 1, 2, "app-action-renderer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RendererComponent_ng_container_2_app_actions_renderer_6_Template, 1, 2, "app-actions-renderer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RendererComponent_ng_container_2_ng_container_7_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "actions");
} }
class RendererComponent {
    constructor() {
        this.data = null;
        this.type = null;
        this.options = null;
        this.value = null;
        this.lang = null;
        this.actionCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isFormatter() {
        return this.type === 'datetime' || this.type === 'number';
    }
    emitActionCall($event) {
        this.actionCall.emit($event);
    }
}
RendererComponent.ɵfac = function RendererComponent_Factory(t) { return new (t || RendererComponent)(); };
RendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RendererComponent, selectors: [["app-renderer"], ["", "app-renderer", ""]], hostVars: 2, hostBindings: function RendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-renderer", true);
    } }, inputs: { data: "data", type: "type", options: "options", value: "value", lang: "lang" }, outputs: { actionCall: "actionCall" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "type", "options", "value", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [3, "type", "options", "value"], [3, "options", "value", "data", 4, "ngSwitchCase"], [3, "options", "value", 4, "ngSwitchCase"], [3, "options", "data", 4, "ngSwitchCase"], [3, "options", "data", "actionCall", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "options", "value", "data"], [3, "options", "value"], [3, "options", "data"], [3, "options", "data", "actionCall"]], template: function RendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RendererComponent_app_formatter_renderer_1_Template, 1, 3, "app-formatter-renderer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RendererComponent_ng_container_2_Template, 8, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.isFormatter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW5kZXJlci5jb21wb25lbnQubGVzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RendererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-renderer, [app-renderer]',
                templateUrl: './renderer.component.html',
                styleUrls: ['./renderer.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.app-renderer]': `true`
                }
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lang: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actionCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ayF6":
/*!************************************************!*\
  !*** ./src/app/layout/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/header/header.component */ "/Lhg");
/* harmony import */ var _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/header/components/header-notifications/header-notifications.component */ "QT/m");
/* harmony import */ var _app_layout_header_components_header_profile_header_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/header/components/header-profile/header-profile.component */ "Sr1X");
/* harmony import */ var _app_layout_header_components_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/layout/header/components/header-search/header-search.component */ "9AfI");
/* harmony import */ var _components_header_notifications_header_notifications_item_header_notifications_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header-notifications/header-notifications-item/header-notifications-item.component */ "ZAut");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/core.module */ "pKmL");
/* harmony import */ var _shared_translation_translation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/translation/translation.module */ "IAEX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "Jioy");
/* harmony import */ var _app_layout_header_components_header_locale_header_locale_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layout/header/components/header-locale/header-locale.component */ "EAxR");
/* harmony import */ var _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/global-search/global-search.module */ "E6dn");
















class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"].forChild(),
            _shared_translation_translation_module__WEBPACK_IMPORTED_MODULE_7__["TranslationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__["ImagesModule"],
            ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_11__["NzAutocompleteModule"],
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__["NzListModule"],
            _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_13__["GlobalSearchModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_app_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNotificationsComponent"],
        _components_header_notifications_header_notifications_item_header_notifications_item_component__WEBPACK_IMPORTED_MODULE_5__["HeaderNotificationsItemComponent"],
        _app_layout_header_components_header_profile_header_profile_component__WEBPACK_IMPORTED_MODULE_3__["HeaderProfileComponent"],
        _app_layout_header_components_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_4__["HeaderSearchComponent"],
        _app_layout_header_components_header_locale_header_locale_component__WEBPACK_IMPORTED_MODULE_12__["HeaderLocaleComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _shared_translation_translation_module__WEBPACK_IMPORTED_MODULE_7__["TranslationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__["ImagesModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_11__["NzAutocompleteModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__["NzListModule"],
        _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_13__["GlobalSearchModule"]], exports: [_app_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNotificationsComponent"],
        _components_header_notifications_header_notifications_item_header_notifications_item_component__WEBPACK_IMPORTED_MODULE_5__["HeaderNotificationsItemComponent"],
        _app_layout_header_components_header_profile_header_profile_component__WEBPACK_IMPORTED_MODULE_3__["HeaderProfileComponent"],
        _app_layout_header_components_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_4__["HeaderSearchComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                    _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNotificationsComponent"],
                    _components_header_notifications_header_notifications_item_header_notifications_item_component__WEBPACK_IMPORTED_MODULE_5__["HeaderNotificationsItemComponent"],
                    _app_layout_header_components_header_profile_header_profile_component__WEBPACK_IMPORTED_MODULE_3__["HeaderProfileComponent"],
                    _app_layout_header_components_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_4__["HeaderSearchComponent"],
                    _app_layout_header_components_header_locale_header_locale_component__WEBPACK_IMPORTED_MODULE_12__["HeaderLocaleComponent"],
                ],
                exports: [
                    _app_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                    _app_layout_header_components_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNotificationsComponent"],
                    _components_header_notifications_header_notifications_item_header_notifications_item_component__WEBPACK_IMPORTED_MODULE_5__["HeaderNotificationsItemComponent"],
                    _app_layout_header_components_header_profile_header_profile_component__WEBPACK_IMPORTED_MODULE_3__["HeaderProfileComponent"],
                    _app_layout_header_components_header_search_header_search_component__WEBPACK_IMPORTED_MODULE_4__["HeaderSearchComponent"],
                ],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"].forChild(),
                    _shared_translation_translation_module__WEBPACK_IMPORTED_MODULE_7__["TranslationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_9__["ImagesModule"],
                    ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_11__["NzAutocompleteModule"],
                    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__["NzListModule"],
                    _shared_global_search_global_search_module__WEBPACK_IMPORTED_MODULE_13__["GlobalSearchModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "bUwk":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dictionary.service */ "8OyG");
/* harmony import */ var _utils_http_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/http.util */ "QEIv");









class HttpService {
    constructor(native, $dictionary) {
        this.native = native;
        this.$dictionary = $dictionary;
    }
    static createHeader(name, value) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ [name]: value });
    }
    static handlerResponse(request) {
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ state: 'pending', nativeEvent: null }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((httpEvent) => httpEvent instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]
            ? HttpService.handlerSuccessResponse(httpEvent)
            : httpEvent instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]
                ? HttpService.handlerErrorResponse(httpEvent)
                : HttpService.handlerProgressResponse(httpEvent)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(HttpService.handlerErrorResponse(err))));
    }
    static handlerErrorResponse(httpErrorResponse) {
        const { error, message, status } = httpErrorResponse;
        return {
            data: null,
            connection: !!status,
            error: HttpService.handlerError(error || message, status),
            state: 'error',
            success: false,
            nativeEvent: httpErrorResponse
        };
    }
    static handlerProgressResponse(httpEvent) {
        return {
            state: 'pending',
            nativeEvent: httpEvent
        };
    }
    static handlerSuccessResponse(httpResponse) {
        return {
            data: httpResponse.body,
            state: 'success',
            success: true,
            nativeEvent: httpResponse
        };
    }
    static handlerError(error, status) {
        const code = !status
            ? _utils_http_util__WEBPACK_IMPORTED_MODULE_5__["HttpErrorCode"][0]
            : _utils_http_util__WEBPACK_IMPORTED_MODULE_5__["HttpErrorCode"][status] || _utils_http_util__WEBPACK_IMPORTED_MODULE_5__["HttpErrorCode"].default;
        if (typeof error === 'string') {
            return { code: _utils_http_util__WEBPACK_IMPORTED_MODULE_5__["HttpErrorCode"].default, message: error };
        }
        if (error instanceof ProgressEvent) {
            return null;
        }
        if ((error === null || error === void 0 ? void 0 : error.error) && typeof (error === null || error === void 0 ? void 0 : error.error) === 'object') {
            error = error.error;
        }
        return { code, message: (error === null || error === void 0 ? void 0 : error.error) || (error === null || error === void 0 ? void 0 : error.message) || _dictionary_service__WEBPACK_IMPORTED_MODULE_4__["DictionaryService"].get(code) };
    }
    delete(url, options = {}, headers = {}) {
        return this.request('delete', url, {}, options, headers);
    }
    get(url, params = {}, options = {}, headers = {}) {
        if (params) {
            options.params = params;
        }
        return this.request('get', url, {}, options, headers);
    }
    getText(url, params = {}, options = {}, headers = {}) {
        options.responseType = 'text';
        return this.get(url, params, options, headers);
    }
    head(url, options = {}, headers = {}) {
        return this.request('head', url, {}, options, headers);
    }
    post(url, data = {}, options = {}, headers = {}) {
        return this.request('post', url, data, options, headers);
    }
    postForm(url, data = {}, options = {}, headers = {}) {
        const formData = Object.entries(data)
            .reduce((urlSearchParams, [name, value]) => {
            urlSearchParams.append(name, value);
            return data;
        }, new URLSearchParams())
            .toString();
        options.headers = HttpService.createHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        return this.post(url, formData, options, headers);
    }
    put(url, data = {}, options = {}, headers = {}) {
        return this.request('put', url, data, options, headers);
    }
    request(type, url, data = {}, httpOptions = {}, headers = {}) {
        let request$;
        httpOptions.headers = Object(_utils_http_util__WEBPACK_IMPORTED_MODULE_5__["mergeHttpHeaders"])(httpOptions.headers, headers);
        if (!httpOptions.observe) {
            httpOptions.observe = 'response';
        }
        if (httpOptions.responseType === 'json' || !httpOptions.responseType) {
            httpOptions.headers = httpOptions.headers.append('Content-Type', 'application/json;charset=UTF-8');
        }
        switch (type) {
            case 'delete':
                request$ = this.native.delete(url, httpOptions);
                break;
            case 'head':
                request$ = this.native.head(url, httpOptions);
                break;
            case 'post':
                request$ = this.native.post(url, data, httpOptions);
                break;
            case 'put':
                request$ = this.native.put(url, data, httpOptions);
                break;
            default:
                request$ = this.native.get(url, httpOptions);
        }
        return HttpService.handlerResponse(request$);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dictionary_service__WEBPACK_IMPORTED_MODULE_4__["DictionaryService"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _dictionary_service__WEBPACK_IMPORTED_MODULE_4__["DictionaryService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dictionary_service__WEBPACK_IMPORTED_MODULE_4__["DictionaryService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "cpCo":
/*!**********************************************************!*\
  !*** ./src/app/base/filters/filters/filter.component.ts ***!
  \**********************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _core_utils_subcriptions_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/subcriptions.util */ "dL77");





class FilterComponent {
    constructor(injector) {
        this.injector = injector;
        this.valuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cdr = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]);
    }
    ngOnInit() {
        this._subscriptions = Object(_core_utils_subcriptions_util__WEBPACK_IMPORTED_MODULE_3__["Subscribe"])(this.formGroup.valueChanges, values => this.valuesChange.emit(values));
    }
    ngOnDestroy() {
    }
    control(name) {
        var _a;
        return (_a = this.formGroup.controls) === null || _a === void 0 ? void 0 : _a[name];
    }
    assignControls(suffix = 'Control') {
        Object
            .entries(this.formGroup.controls)
            .forEach(([name, control]) => this[`${name}${suffix}`] = control);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], inputs: { formGroup: "formGroup" }, outputs: { valuesChange: "valuesChange" }, decls: 0, vars: 0, template: function FilterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXIuY29tcG9uZW50Lmxlc3MifQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_2__["Subscriptions"])()
], FilterComponent.prototype, "_subscriptions", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, { formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valuesChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], _subscriptions: [] }); })();


/***/ }),

/***/ "cr/+":
/*!*********************************************!*\
  !*** ./src/app/core/pipes/safe-url.pipe.ts ***!
  \*********************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafeUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(url) {
        return this.domSanitizer
            .bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeUrl'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "cy4D":
/*!************************************************!*\
  !*** ./src/app/core/utils/decorators.utils.ts ***!
  \************************************************/
/*! exports provided: detectCdr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCdr", function() { return detectCdr; });
function detectCdr(target) {
    return Object.values(target).find(property => '_appRef' in property);
}


/***/ }),

/***/ "dEQI":
/*!*******************************************************!*\
  !*** ./src/app/layout/navigation/navigation.utils.ts ***!
  \*******************************************************/
/*! exports provided: filterNavigation, showHideQRNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNavigation", function() { return filterNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHideQRNavigation", function() { return showHideQRNavigation; });
const TEAM_NAV_URL_KEY = 'team';
const QR_NAV_ID = '7';
const QR_CONF_METHOD_NAME = 'QR_CODE';
function filterNavigation(navigations, labelGroups) {
    return navigations.filter(({ url }) => !url.includes(TEAM_NAV_URL_KEY) || labelGroups.length);
}
function showHideQRNavigation(navigations, confirmationMethod) {
    if (confirmationMethod !== QR_CONF_METHOD_NAME) {
        return navigations.filter((nav) => nav.id !== QR_NAV_ID);
    }
    return navigations;
}


/***/ }),

/***/ "dL77":
/*!*************************************************!*\
  !*** ./src/app/core/utils/subcriptions.util.ts ***!
  \*************************************************/
/*! exports provided: destroy, Subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscribe", function() { return Subscribe; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

function destroy(...subscriptions) {
    if (subscriptions instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]) {
        subscriptions.unsubscribe();
        return;
    }
    try {
        subscriptions = subscriptions instanceof Array ? subscriptions : Object.values(subscriptions);
        subscriptions.forEach(destroy);
    }
    catch (e) {
    }
}
const Subscribe = (observable, callback) => {
    return observable.subscribe(callback);
};


/***/ }),

/***/ "e5AP":
/*!********************************************************!*\
  !*** ./src/app/core/services/global-loader.service.ts ***!
  \********************************************************/
/*! exports provided: GlobalLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalLoaderService", function() { return GlobalLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class GlobalLoaderService {
    constructor() {
        this.globalLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.headerLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.menuLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.contentLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
}
GlobalLoaderService.ɵfac = function GlobalLoaderService_Factory(t) { return new (t || GlobalLoaderService)(); };
GlobalLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalLoaderService, factory: GlobalLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "eEkR":
/*!*********************************************************!*\
  !*** ./src/app/base/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function BreadcrumbComponent_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumbComponent_nz_breadcrumb_item_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", 0, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "Back"), " ");
} }
function BreadcrumbComponent_nz_breadcrumb_item_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r4.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
} }
function BreadcrumbComponent_nz_breadcrumb_item_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
} }
function BreadcrumbComponent_nz_breadcrumb_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_nz_breadcrumb_item_2_a_1_Template, 2, 2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_nz_breadcrumb_item_2_span_2_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const last_r5 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r5);
} }
class BreadcrumbComponent {
    constructor(_location) {
        this._location = _location;
        this.back = false;
    }
    goBack() {
        this._location.back();
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { items: "items", back: "back" }, decls: 3, vars: 2, consts: [[1, "breadcrumbs"], [4, "ngIf"], ["class", "breadcrumbs__item", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "text", 3, "click"], ["nz-icon", "", "nzType", "arrow-left"], [1, "breadcrumbs__item"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_nz_breadcrumb_item_1_Template, 5, 5, "nz-breadcrumb-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_nz_breadcrumb_item_2_Template, 3, 2, "nz-breadcrumb-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.back);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["NzBreadCrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["NzBreadCrumbItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.breadcrumbs__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .breadcrumbs__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: -3px;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 350px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFFRTs7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQU4iLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYnJlYWRjcnVtYnMge1xuICAmX19pdGVtIHtcbiAgICBhLCBzcGFuIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], back: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "eMNE":
/*!*******************************************************************!*\
  !*** ./src/app/base/renderer/components/status/status.service.ts ***!
  \*******************************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var _src_theme_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/theme/ts */ "x14V");

class StatusService {
    mapColor(options, value) {
        const mappedColor = options.map[value].color;
        if (mappedColor && mappedColor.startsWith('#')) {
            return mappedColor;
        }
        return _src_theme_ts__WEBPACK_IMPORTED_MODULE_0__["ColorAlias"][mappedColor] || _src_theme_ts__WEBPACK_IMPORTED_MODULE_0__["ColorAlias"].default;
    }
}


/***/ }),

/***/ "em9I":
/*!**********************************************!*\
  !*** ./src/app/core/pipes/highlight.pipe.ts ***!
  \**********************************************/
/*! exports provided: HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




class HighlightPipe {
    constructor($sanitizer) {
        this.$sanitizer = $sanitizer;
    }
    transform(text, query, color) {
        if (Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(query)) {
            return text;
        }
        const queryRegexp = new RegExp(query, 'gi');
        const matches = text.match(queryRegexp);
        if (!matches) {
            return text;
        }
        text = text.replace(queryRegexp, () => {
            if (!color) {
                return `<strong>${matches[0]}</strong>`;
            }
            return `<strong style="color: ${color}">${matches[0]}</strong>`;
        });
        return this.$sanitizer.bypassSecurityTrustHtml(text);
    }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "highlight", type: HighlightPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'highlight'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "ewFJ":
/*!*******************************************!*\
  !*** ./src/app/core/utils/common.util.ts ***!
  \*******************************************/
/*! exports provided: isEmpty, isDefined, objectsEquals, processSuccessResponseObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsEquals", function() { return objectsEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processSuccessResponseObject", function() { return processSuccessResponseObject; });
/* harmony import */ var _shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/http/utils/constants.util */ "1j6E");

function isEmpty(value) {
    return value === ''
        || value === null
        || !isDefined(value);
}
function isDefined(value) {
    return typeof value !== 'undefined';
}
function objectsEquals(source, target, strict = true) {
    if (!source) {
        source = {};
    }
    if (!target) {
        target = {};
    }
    return Object.entries(source).every(([key, value]) => (strict && target[key] === value) || target[key] == value);
}
function processSuccessResponseObject(source) {
    if (!source || typeof source !== 'object') {
        return null;
    }
    const successValue = source[_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__["SUCCESS_KEY"]];
    delete source[_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__["SUCCESS_KEY"]];
    const keys = Object.keys(source);
    if (keys.length === 1) {
        const firstKey = keys.shift();
        return !firstKey ? null : source[firstKey];
    }
    else {
        return Object.assign(Object.assign({}, source), { [_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__["SUCCESS_KEY"]]: successValue });
    }
}


/***/ }),

/***/ "f4AX":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "PQuL");
/* harmony import */ var _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/http/utils/images.const */ "xN5w");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");







class UserService {
    constructor(_dictionaries) {
        this._dictionaries = _dictionaries;
        this.isOauthLoggedIn = false;
        this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._authorization = '';
        this._tokenUUID = '';
        this._deviceId = '';
        this._isManager = null;
        this._label = null;
    }
    get label() {
        return this._label;
    }
    get isAuth() {
        return Boolean(this._user);
    }
    get info() {
        return this._user;
    }
    get info$() {
        return this._user$.asObservable();
    }
    get authorization() {
        return this._authorization;
    }
    get tokenUUID() {
        return this._tokenUUID;
    }
    get deviceId() {
        return this._deviceId;
    }
    get isManager() {
        return this._isManager;
    }
    get label$() {
        return this._user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.getLabel$()));
    }
    setUser(id, deviceId, uuid, credentials) {
        this._authorization = `Basic ${credentials}`;
        this._tokenUUID = uuid;
        this._deviceId = deviceId;
        this._dictionaries.already$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this._dictionaries.getDictionary('labelGroups'),
            this.getLabel$(id),
        ])))
            .subscribe(([labelGroupsDict, label]) => {
            const { name, avatarImageUrl, labelGroups } = label;
            this.setManager(labelGroupsDict, id);
            this._user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]({
                id,
                name,
                deviceId,
                labelGroups,
                tokenUUID: this._tokenUUID,
                avatarUrl: avatarImageUrl || _shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_USER_AVATAR"],
                authorization: this._authorization,
            });
            this._user.setLabelGroupsManager(labelGroupsDict);
            this._label = label;
            this.updateUser$();
        });
    }
    setManager(groups, userId) {
        const managerIds = groups.reduce((acc, item) => {
            acc.push(...item.managers);
            return acc;
        }, []);
        this._isManager = managerIds.includes(userId);
    }
    updateUser$() {
        this._user$.next(this._user);
    }
    getLabel$(id = this._user.id) {
        return this._dictionaries.getDictionaryItemByKey('labels', id);
    }
    isAppointmentOrganizer(appointment) {
        if (appointment && this._label) {
            return (this._label.mail.toLowerCase() ===
                appointment.appointmentOrganizerMail.toLowerCase());
        }
        return false;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }]; }, null); })();


/***/ }),

/***/ "fKer":
/*!************************************************************************!*\
  !*** ./src/app/presentation/team/team-profile/team-profile.service.ts ***!
  \************************************************************************/
/*! exports provided: TeamProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfileService", function() { return TeamProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/core/services/user-offices.service */ "j4Kb");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");











class TeamProfileService {
    constructor($route, $dictionaries, $userOffices, $loader, $api, $measurements, $user) {
        this.$route = $route;
        this.$dictionaries = $dictionaries;
        this.$userOffices = $userOffices;
        this.$loader = $loader;
        this.$api = $api;
        this.$measurements = $measurements;
        this.$user = $user;
    }
    get userId$() {
        return this.$route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Number(params.get('userId') || this.$user.info.id))));
    }
    get user$() {
        return this.userId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.$loader.contentLoading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((id) => this.$dictionaries.getDictionaryItemByKey('labels', id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_u) => this._user = _u));
    }
    get workplace$() {
        return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((user) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            workplaceReservations: this.$api.getWorkplaceReservations({
                labelId: user.id
            }),
            workplaces: this.$dictionaries.getDictionary('workplaces'),
            floors: this.$userOffices.getMyOrderedFloors(),
            buildings: this.$userOffices.getMyOrderedBuildings(),
            statuses: this.$dictionaries.getDictionary('statuses'),
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(({ workplaceReservations, workplaces, floors, buildings, statuses }) => {
            this._workplaceReservations = workplaceReservations;
            this._workplaces = workplaces;
            this._floors = floors;
            this._buildings = buildings;
            this._statuses = statuses[0].statuses.reduce((acc, status) => {
                acc[status.code] = {
                    value: status.name,
                    color: status.color
                };
                return acc;
            }, {});
        }));
    }
    get workplaceTableMeta$() {
        return this.workplace$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ workplaceReservations, workplaces, floors, buildings }) => {
            return workplaceReservations.map((_r) => {
                const workplace = workplaces.find((_w) => _w.id === _r.workplaceId);
                const floor = floors.find((_f) => _f.id === (workplace === null || workplace === void 0 ? void 0 : workplace.floorMapId));
                const building = buildings.find((_b) => _b.id === (floor === null || floor === void 0 ? void 0 : floor.buildingId));
                return {
                    reservationId: _r.id,
                    floorId: (floor === null || floor === void 0 ? void 0 : floor.id) || 0,
                    placeId: (workplace === null || workplace === void 0 ? void 0 : workplace.id) || 0,
                    building: (building === null || building === void 0 ? void 0 : building.name) || '-',
                    floor: (floor === null || floor === void 0 ? void 0 : floor.name) || '-',
                    place: (workplace === null || workplace === void 0 ? void 0 : workplace.name) || '-',
                    startDate: _r.dateTimeFrom,
                    endDate: _r.dateTimeTo,
                    status: {
                        value: _r.status,
                        options: { map: this._statuses }
                    }
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.$loader.contentLoading$.next(false)));
    }
    get workplaceReservations() {
        return this._workplaceReservations;
    }
    get workplaces() {
        return this._workplaces;
    }
    get floors() {
        return this._floors;
    }
    get buildings() {
        return this._buildings;
    }
    get dateFormat() {
        return this.$measurements.getMeasurementByName('dateTime');
    }
    get statuses() {
        return this._statuses;
    }
}
TeamProfileService.ɵfac = function TeamProfileService_Factory(t) { return new (t || TeamProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__["UserOfficesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_6__["GlobalLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_7__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"])); };
TeamProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamProfileService, factory: TeamProfileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _src_app_core_services_user_offices_service__WEBPACK_IMPORTED_MODULE_5__["UserOfficesService"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_6__["GlobalLoaderService"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_7__["ReservationsApiService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_8__["MeasurementsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }]; }, null); })();


/***/ }),

/***/ "fOet":
/*!******************************************************************!*\
  !*** ./src/app/shared/dictionaries/services/statuses.service.ts ***!
  \******************************************************************/
/*! exports provided: StatusesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusesService", function() { return StatusesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dictionaries_services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/dictionaries/services/dictionary.service */ "LMxC");
/* harmony import */ var _shared_dictionaries_constants_statuses_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/dictionaries/constants/statuses.constant */ "rfmf");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class StatusesService extends _shared_dictionaries_services_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._dictionaryName = _shared_dictionaries_constants_statuses_constant__WEBPACK_IMPORTED_MODULE_2__["STATUSES_DICT_NAME"];
    }
    get statuses$() {
        return this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('statuses'));
    }
    get statuses() {
        return this.value.statuses;
    }
    get statusesMap() {
        const map = new Map();
        this.statuses.forEach((status) => map.set(status.code, status));
        return map;
    }
    get allStatusesCodes() {
        return this.statuses.map(({ code }) => code);
    }
    initialize() {
        return super.initialize(_shared_dictionaries_constants_statuses_constant__WEBPACK_IMPORTED_MODULE_2__["STATUSES_URL_KEY"], _shared_dictionaries_constants_statuses_constant__WEBPACK_IMPORTED_MODULE_2__["STATUSES_DEFAULT_VALUES"]);
    }
}
StatusesService.ɵfac = function StatusesService_Factory(t) { return new (t || StatusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
StatusesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatusesService, factory: StatusesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "g1UE":
/*!*********************************************************!*\
  !*** ./src/app/shared/indexed-db/indexed-db.service.ts ***!
  \*********************************************************/
/*! exports provided: IndexedDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDbService", function() { return IndexedDbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_indexed_db_indexed_db_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.config */ "ZM1w");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ "BvB/");






class IndexedDbService {
    constructor($indexedDb) {
        this.$indexedDb = $indexedDb;
    }
    getStore(name) {
        return this.$indexedDb.getAll(name);
    }
    getStoreItemByKey(name, id) {
        return this.$indexedDb.getByKey(name, id);
    }
    getStoreItemByIndex(name, index, value) {
        return this.$indexedDb.getByIndex(name, index, value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.error(`Error get item by index from store '${name} with index '${index}' with value '${value}'`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    clearAll() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(_shared_indexed_db_indexed_db_config__WEBPACK_IMPORTED_MODULE_3__["indexedDbConfig"].objectStoresMeta.map(({ store }) => this.clear(store)));
    }
    clear(storeName) {
        return this.$indexedDb.clear(storeName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.error(`Error clear dictionary store '${storeName}' in indexeddb`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    }
    addStoreItems(storeName, items) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(items.map(item => this.addStoreItem(storeName, item, item.id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.error(`Error adding records to the directory ${name}`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    addStoreItem(storeName, value, id) {
        return this.$indexedDb.add(storeName, value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.error(`Error adding an entry with id ${id} to the directory ${storeName}`, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    updateStoreItem(storeName, value, key) {
        return this.$indexedDb.update(storeName, value, key);
    }
}
IndexedDbService.ɵfac = function IndexedDbService_Factory(t) { return new (t || IndexedDbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDBService"])); };
IndexedDbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndexedDbService, factory: IndexedDbService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexedDbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDBService"] }]; }, null); })();


/***/ }),

/***/ "hsFk":
/*!***************************************************!*\
  !*** ./src/app/presentation/auth/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_app_core_enums_auth_key_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/core/enums/auth-key.enum */ "/9OL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");
/* harmony import */ var _core_services_url_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/url.service */ "Yrpq");












class AuthService {
    constructor($router, _api, _cookie, _user, $config, $settings, $url) {
        this.$router = $router;
        this._api = _api;
        this._cookie = _cookie;
        this._user = _user;
        this.$config = $config;
        this.$settings = $settings;
        this.$url = $url;
        this._login$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._authMethod = 'basic';
        this.userCaptcha$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.authNumberAttempts = 0;
        this._oauth2Available = false;
        const userStr = _cookie.get(this._cookieName);
        if (userStr) {
            const { id, deviceId, tokenUUID, authorization } = JSON.parse(userStr);
            _user.setUser(id, deviceId, tokenUUID, authorization.split(' ')[1]);
            this._login$.next(true);
        }
        this.$config
            .getOne$('authMethod')
            .subscribe(authMethod => {
            this._authMethod = authMethod;
        });
        this.$config
            .getOne$()
            .subscribe((configValues) => {
            this.configureAuth(configValues);
        });
    }
    static base64credentials(login, password) {
        return window.btoa(unescape(encodeURIComponent(`${login}:${password}`)));
    }
    get isLoggedIn() {
        return this._login$.getValue();
    }
    get isLoggedIn$() {
        return this._login$;
    }
    get authMethod() {
        return this._authMethod;
    }
    get isBotDetected$() {
        return this.userCaptcha$;
    }
    get oauth2Available() {
        return this.$config.get('oauth2Available');
    }
    get oauth2AuthorizationUrl() {
        const hostUrl = this.$config.get('hostUrl');
        const oauth2AuthorizationUrl = this.$config.get('oauth2AuthorizationUrl');
        return this.$url.concat(hostUrl, oauth2AuthorizationUrl);
    }
    checkNumberAttempts() {
        this.authNumberAttempts++;
        if (this.authNumberAttempts === this.maxAuthNumberAttempts) {
            this.userCaptcha$.next(true);
        }
    }
    get oauthSuccessRoute() {
        return this.$config.get('oauth2SuccessLoginPage');
    }
    get maxAuthNumberAttempts() {
        return this.$config.get('authNumberAttempts') || 3;
    }
    getOtpCode(authKey, credentials) {
        const headers = {};
        headers.Authorization = `Basic ${credentials}`;
        const body = {};
        body.authKeyType = _src_app_core_enums_auth_key_enum__WEBPACK_IMPORTED_MODULE_3__["AuthKey"].PHONE;
        body.authKey = authKey;
        return this._api.getOtpToken(body, headers);
    }
    login(credentials) {
        const headers = {};
        this.checkNumberAttempts();
        switch (this._authMethod) {
            case 'basic':
                headers.Authorization = `Basic ${credentials}`;
                break;
            case 'ad_token':
                headers.ad_token = credentials;
                break;
        }
        return this._api.getUserToken({ deviceOs: 'ANGULAR' }, headers); // isDpaAutoAssign = false
    }
    checkOtpCode(authKey, authCode) {
        const body = {};
        body.authKeyType = _src_app_core_enums_auth_key_enum__WEBPACK_IMPORTED_MODULE_3__["AuthKey"].PHONE;
        body.authKey = authKey;
        body.authCode = authCode;
        this.checkNumberAttempts();
        return this._api.checkOtpToken(body);
    }
    logout() {
        this.setLogin(false);
        if (this._user.isOauthLoggedIn) {
            this.oauth2Logout();
        }
        this.$router.navigateByUrl('/auth');
    }
    goToMainUrl() {
        this.$router.navigateByUrl('/');
    }
    initializeSettings() {
        return this.$settings.initialize().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.goToMainUrl()));
    }
    setLogin(login) {
        this._login$.next(login);
        if (login) {
            this._user.info$.subscribe((user) => {
                const days = +this.$config.get('authTokenCookieTime') /
                    1000 /
                    60 /
                    60 /
                    24; // calculate count of days
                const cookieTime = days || 0.1;
                this._cookie.set(this._cookieName, JSON.stringify(user), cookieTime);
            });
        }
        else {
            this._cookie.delete(this._cookieName);
        }
        this.resetAuthAttempts();
    }
    configureAuth({ hostUrl, oauth2Available, authMethod, oauth2AuthorizationUrl, serverLogoutUrl }) {
        this._authMethod = authMethod;
        this._oauth2Available = oauth2Available;
        this._serverLogout = this.$url.concat(hostUrl, serverLogoutUrl);
        if (oauth2Available) {
            this.configureOauth2(hostUrl, oauth2AuthorizationUrl);
        }
    }
    configureOauth2(hostUrl, oauth2AuthorizationUrl) {
        this._oauth2AuthorizationUrl = this.$url.concat(hostUrl, oauth2AuthorizationUrl);
    }
    get _cookieName() {
        return this.$config.get('authTokenCookieName') || 'auth';
    }
    resetAuthAttempts() {
        this.authNumberAttempts = 0;
        this.userCaptcha$.next(false);
    }
    oauth2Logout() {
        this._user.isOauthLoggedIn = false;
        window.location.href = this._serverLogout;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsApiService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }, { type: _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"] }, { type: _core_services_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"] }]; }, null); })();


/***/ }),

/***/ "iKGl":
/*!******************************************!*\
  !*** ./src/app/core/pipes/delay.pipe.ts ***!
  \******************************************/
/*! exports provided: DelayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayPipe", function() { return DelayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class DelayPipe {
    transform(value, delayIn = 0, delayOut = 0) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(!!value ? delayIn : delayOut));
    }
}
DelayPipe.ɵfac = function DelayPipe_Factory(t) { return new (t || DelayPipe)(); };
DelayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "delay", type: DelayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DelayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'delay'
            }]
    }], null, null); })();


/***/ }),

/***/ "iNfJ":
/*!********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.module.ts ***!
  \********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _app_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/navigation/navigation.component */ "sc19");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/layout/navigation/navigation.service */ "0Q2C");
/* harmony import */ var _app_layout_navigation_navigation_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/layout/navigation/navigation.api */ "VNtZ");










class NavigationModule {
}
NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }, providers: [
        _app_layout_navigation_navigation_api__WEBPACK_IMPORTED_MODULE_8__["NavigationApi"],
        _app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_app_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"]], exports: [_app_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
                exports: [_app_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"],
                ],
                providers: [
                    _app_layout_navigation_navigation_api__WEBPACK_IMPORTED_MODULE_8__["NavigationApi"],
                    _app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "iYEa":
/*!*********************************************!*\
  !*** ./src/app/base/card/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.model */ "12Dr");
/* harmony import */ var _base_card_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @base/card/card.service */ "IS+5");
/* harmony import */ var _card_form_control_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-form-control.directive */ "VMbU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/shared/http/utils/images.const */ "xN5w");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






















function CardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CardComponent_ng_template_1_nz_descriptions_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-descriptions-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", desc_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", desc_r9.value, " ");
} }
function CardComponent_ng_template_1_nz_tag_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r10);
} }
function CardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-descriptions", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_ng_template_1_nz_descriptions_item_2_Template, 2, 2, "nz-descriptions-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_ng_template_1_nz_tag_4_Template, 2, 1, "nz-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCover", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx_r2.title)("nzColumn", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.descriptionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tags);
} }
function CardComponent_ng_template_3_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_3_img_5_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.onLink(ctx_r15.calendarLink); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.CALENDAR_ICON, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "Meeting room calendar"));
} }
function CardComponent_ng_template_3_div_6_nz_spin_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spin", 22);
} }
function CardComponent_ng_template_3_div_6_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_3_div_6_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r22.enableEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_template_3_div_6_ng_container_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_3_div_6_ng_container_2_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r24.saveEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r20.cardForm.valid);
} }
function CardComponent_ng_template_3_div_6_ng_container_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_3_div_6_ng_container_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_ng_template_3_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_3_div_6_ng_container_2_button_1_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_ng_template_3_div_6_ng_container_2_button_2_Template, 2, 1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_ng_template_3_div_6_ng_container_2_button_3_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.editModeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.editModeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.editModeEnabled);
} }
function CardComponent_ng_template_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_3_div_6_nz_spin_1_Template, 1, 0, "nz-spin", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_ng_template_3_div_6_ng_container_2_Template, 4, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.loading);
} }
function CardComponent_ng_template_3_div_9_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CardComponent_ng_template_3_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_3_div_9_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", desc_r28.nameTpl);
} }
function CardComponent_ng_template_3_div_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", desc_r28.name, ": ");
} }
function CardComponent_ng_template_3_div_9_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CardComponent_ng_template_3_div_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_ng_template_3_div_9_ng_container_5_ng_container_3_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.formControlsHash[desc_r28.formControlTpl]);
} }
function CardComponent_ng_template_3_div_9_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CardComponent_ng_template_3_div_9_ng_template_6_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", desc_r28.value, " ");
} }
function CardComponent_ng_template_3_div_9_ng_template_6_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_ng_template_3_div_9_ng_template_6_ng_container_1_ng_template_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.onLink(desc_r28.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](desc_r28.value);
} }
function CardComponent_ng_template_3_div_9_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_3_div_9_ng_template_6_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_ng_template_3_div_9_ng_template_6_ng_container_1_ng_template_2_Template, 2, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !desc_r28.link)("ngIfElse", _r42);
} }
function CardComponent_ng_template_3_div_9_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_ng_template_3_div_9_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_3_div_9_ng_template_6_ng_container_1_Template, 4, 2, "ng-container", 21);
} if (rf & 2) {
    const desc_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", desc_r28.valueTpl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", desc_r28.value && !desc_r28.valueTpl);
} }
const _c0 = function (a0) { return { "card__form--enabled": a0 }; };
function CardComponent_ng_template_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_ng_template_3_div_9_ng_container_2_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_ng_template_3_div_9_ng_container_3_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_ng_template_3_div_9_ng_container_5_Template, 4, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_ng_template_3_div_9_ng_template_6_Template, 2, 2, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r28 = ctx.$implicit;
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r13.editModeEnabled && desc_r28.formControlTpl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", desc_r28.nameTpl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", desc_r28.name && !desc_r28.nameTpl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.editModeEnabled && desc_r28.formControlTpl)("ngIfElse", _r32);
} }
function CardComponent_ng_template_3_nz_tag_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r51);
} }
function CardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_ng_template_3_img_5_Template, 2, 4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_ng_template_3_div_6_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardComponent_ng_template_3_div_9_Template, 8, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardComponent_ng_template_3_nz_tag_11_Template, 2, 1, "nz-tag", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCover", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "Meeting room calendar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.calendarLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showEditControls && ctx_r4.descriptionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.cardForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.descriptionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.tags);
} }
function CardComponent_ng_template_5_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r52.title)("src", ctx_r52.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_ng_template_5_img_0_Template, 1, 2, "img", 37);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.image);
} }
class CardComponent {
    constructor($service, route) {
        this.$service = $service;
        this.route = route;
        this.CALENDAR_ICON = _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_ICON"];
        this.title = this.$service.card.title;
        this.width = this.$service.card.width;
        this.image = this.$service.card.image;
        this.descriptionList = this.$service.card.descriptionList;
        this.tags = this.$service.card.tags;
        this.type = 'flex';
        this.showEditControls = false;
        this.editModeEnabled = false;
        this.loading = false;
        this.cardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.editModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formControlsHash = {};
    }
    ngAfterContentInit() {
        this.formControls.forEach((item) => (this.formControlsHash[item.name] = item.templateRef));
    }
    enableEditMode() {
        this.editModeChange.emit(_card_model__WEBPACK_IMPORTED_MODULE_1__["CardEditModeEvent"].Enable);
    }
    saveEdit() {
        this.editModeChange.emit(_card_model__WEBPACK_IMPORTED_MODULE_1__["CardEditModeEvent"].Save);
    }
    cancelEdit() {
        this.editModeChange.emit(_card_model__WEBPACK_IMPORTED_MODULE_1__["CardEditModeEvent"].Cancel);
    }
    onLink(link) {
        this.route.navigate([link]);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_base_card_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], contentQueries: function CardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _card_form_control_directive__WEBPACK_IMPORTED_MODULE_3__["CardFormControlDirective"], false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formControls = _t);
    } }, inputs: { title: "title", width: "width", image: "image", descriptionList: "descriptionList", tags: "tags", type: "type", showEditControls: "showEditControls", editModeEnabled: "editModeEnabled", loading: "loading", cardForm: "cardForm", calendarLink: "calendarLink" }, outputs: { editModeChange: "editModeChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_base_card_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]])], decls: 7, vars: 1, consts: [[4, "ngTemplateOutlet"], ["table", ""], ["flex", ""], ["coverTpl", ""], [3, "nzCover"], [1, "description-list", 3, "nzTitle", "nzColumn"], [3, "nzTitle", 4, "ngFor", "ngForOf"], ["class", "mb-10", 4, "ngFor", "ngForOf"], [3, "nzTitle"], [1, "mb-10"], [1, "card__title"], [3, "title"], ["class", "card__calendar", 3, "src", "alt", "click", 4, "ngIf"], ["class", "card__edit-controls", 4, "ngIf"], ["nz-form", "", 3, "formGroup"], [1, "card__description-list"], ["class", "card__description-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card__tags"], [1, "card__calendar", 3, "src", "alt", "click"], [1, "card__edit-controls"], ["nzSimple", "", 4, "ngIf"], [4, "ngIf"], ["nzSimple", ""], ["nz-button", "", "nzSize", "small", "nzShape", "circle", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzShape", "circle", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzShape", "circle", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], ["nz-button", "", "nzSize", "small", "nzShape", "circle", 3, "disabled", "click"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], [1, "card__description-item", 3, "ngClass"], [1, "card__description-title"], [1, "card__description-value"], [4, "ngIf", "ngIfElse"], ["elseEditModeEnabledBlock", ""], ["isLink", ""], [3, "click"], [3, "alt", "src", 4, "ngIf"], [3, "alt", "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_template_1_Template, 5, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_ng_template_3_Template, 12, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.type === "flex" ? _r3 : _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_9__["NzDescriptionsItemComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormControlComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]], styles: [".description-list[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.description-list[_ngcontent-%COMP%]     .ant-descriptions-item-container {\n  justify-content: space-between;\n}\n.description-list[_ngcontent-%COMP%]     .ant-descriptions-item-content {\n  flex: initial;\n}\n  .ant-card-body {\n  padding: 15px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.6;\n  margin: 0 0 20px;\n}\n.card__edit-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n.card__edit-controls[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n}\n.card__edit-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 5px;\n}\n.card__calendar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 173px;\n  right: 15px;\n  width: 20px;\n}\n.card__description-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__description-item.card__form--enabled[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.card__description-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  max-width: 50%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex: 1 0 auto;\n}\n.card__description-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: 400;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: end;\n  flex: 0 1 auto;\n}\n  .card__description-value .ant-form-item {\n  margin-bottom: 0;\n}\n  .card__description-value input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBRkE7RUFHSSw4QkFBQTtBQUVKO0FBTEE7RUFNSSxhQUFBO0FBRUo7QUFDQTtFQUNFLGFBQUE7QUFDRjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQUo7QUFIRTtFQU9NLG1CQUFBO0FBRFI7QUFORTtFQVdNLGlCQUFBO0FBRlI7QUFNRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUpKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDRSxtQkFBQTtBQUpOO0FBT0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUxKO0FBT0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTEo7QUFPSTtFQUVJLGdCQUFBO0FBTlI7QUFJSTtFQU1JLFdBQUE7QUFQUiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIDo6bmctZGVlcCAuYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIDo6bmctZGVlcCAuYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbnRlbnQge1xuICAgIGZsZXg6IGluaXRpYWw7XG4gIH1cbn1cbjo6bmctZGVlcCAuYW50LWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY2FyZCB7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gIH1cbiAgJl9fZWRpdC1jb250cm9scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcblxuICAgICYgPiB7XG4gICAgICBuei1zcGluIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX19jYWxlbmRhciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3M3B4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gICZfX2Rlc2NyaXB0aW9uLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAmLmNhcmRfX2Zvcm0tLWVuYWJsZWQge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgJl9fZGVzY3JpcHRpb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxIDAgYXV0bztcbiAgfVxuICAmX19kZXNjcmlwdGlvbi12YWx1ZSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmbGV4OiAwIDEgYXV0bztcblxuICAgIDo6bmctZGVlcCAmIHtcbiAgICAgIC5hbnQtZm9ybS1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.less'],
                providers: [_base_card_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _base_card_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descriptionList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showEditControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editModeEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calendarLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], formControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_card_form_control_directive__WEBPACK_IMPORTED_MODULE_3__["CardFormControlDirective"]]
        }] }); })();


/***/ }),

/***/ "j4Kb":
/*!*******************************************************!*\
  !*** ./src/app/core/services/user-offices.service.ts ***!
  \*******************************************************/
/*! exports provided: UserOfficesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOfficesService", function() { return UserOfficesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "f4AX");






class UserOfficesService {
    constructor($dictionary, $user) {
        this.$dictionary = $dictionary;
        this.$user = $user;
    }
    get label() {
        return this.$user.label;
    }
    get user$() {
        return this.$dictionary.getDictionaryItemByKey('labels', this.userId);
    }
    get userId() {
        var _a;
        return (_a = this.$user.info) === null || _a === void 0 ? void 0 : _a.id;
    }
    getUserWorkplaceGroups() {
        return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            return user.workplaceGroups;
        }));
    }
    getMyOrderedBuildings() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.user$,
            this.getDictionaryByName('buildings'),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([user, buildings]) => {
            return this.getSortedItems(buildings, user.buildingsSequence);
        }));
    }
    getMyOrderedFloors() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.user$,
            this.getDictionaryByName('floorMaps'),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([user, floors]) => {
            return this.getSortedItems(floors, user.floorMapsSequence);
        }));
    }
    getDictionaryByName(name) {
        return this.$dictionary.getDictionary(name);
    }
    getSortedItems(items, sequence) {
        return items.sort((a, b) => sequence.indexOf(a.id) - sequence.indexOf(b.id));
    }
}
UserOfficesService.ɵfac = function UserOfficesService_Factory(t) { return new (t || UserOfficesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
UserOfficesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserOfficesService, factory: UserOfficesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserOfficesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_3__["DictionariesService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "jEJB":
/*!******************************************************************!*\
  !*** ./src/app/shared/http/services/reservations-api.service.ts ***!
  \******************************************************************/
/*! exports provided: ReservationsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsApiService", function() { return ReservationsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/base/base.api */ "zYZC");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");







class ReservationsApiService extends _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_4__["BaseApi"] {
    constructor(injector, _user) {
        super(injector);
        this.injector = injector;
        this._user = _user;
        this._apiUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.$config.getOne$('metaUrl').subscribe(() => {
            this._getOrganizerAppointmentsUrl = this.$config.get('getOrganizerAppointmentsUrl');
            this._getParkingLotReservationsUrl = this.$config.get('getParkingLotReservationsUrl');
        });
    }
    getUserToken(params = {}, headers = {}) {
        return this.$http
            .post(this._apiUrl + '/getUserToken', params, {}, headers)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    getOtpToken(params = {}, headers = {}) {
        return this.$http
            .post(this._apiUrl + '/kioskAuthorizationGetOtp', params, {}, headers)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    checkOtpToken(params = {}) {
        return this.$http
            .post(this._apiUrl + '/kioskAuthorizationGetTokenByOtp', params, {}, {})
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    getQRAction(params = {}) {
        return this.$http
            .post(this._apiUrl + '/getQRAction', params, {}, {})
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    setLabelBuildingsSequence(params = {}) {
        return this.$http
            .post(this._apiUrl + '/setLabelBuildingsSequence', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    setLabelFloorMapsSequence(params = {}) {
        return this.$http
            .post(this._apiUrl + '/setLabelFloorMapsSequence', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    get getCommonLiveData$() {
        return this.$http
            .post(this._apiUrl + '/getCommonLiveData')
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    get getWorkplacesDisabled$() {
        return this.$http
            .post(this._apiUrl + '/getWorkplacesDisabled')
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    get getParkingLotsDisabled$() {
        return this.$http
            .post(this._apiUrl + '/getParkingLotsDisabled')
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    getLiveData(key, params = {}) {
        return this.$http
            .get(`${this._apiUrl}/liveData/${key}`, params, {}, {
            tokenUuid: this._user.info.tokenUUID,
            deviceId: this._user.info.deviceId,
        })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    putReservationsByType(type, params = {}) {
        switch (type) {
            case 'appointment':
                return this.putAppointments(params);
            case 'parking':
                return this.putParkingLotReservations(params);
            case 'workplace':
            default:
                return this.putWorkplaceReservations(params);
        }
    }
    putWorkplaceReservations(params = {}) {
        return this.$http
            .post(this._apiUrl + '/putWorkplaceReservations', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    putParkingLotReservations(params = {}) {
        return this.$http
            .post(this._apiUrl + '/putParkingLotReservations', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    putAppointments(params = {}) {
        return this.$http
            .post(this._apiUrl + '/putAppointments', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    putWorkplaceReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/putWorkplaceReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    putParkingLotReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/putParkingLotReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    // TODO What is the difference between getOrganizerAppointments and getRoomsAppointments
    getReservationsByType(type, params = {}) {
        switch (type) {
            case 'appointment':
                return this.getOrganizerAppointments(params);
            case 'parking':
                return this.getParkingLotsReservations(params);
            default:
                return this.getWorkplaceReservations(params);
        }
    }
    getMapReservationsByType(type, params = {}) {
        switch (type) {
            case 'appointment':
                return this.getRoomsAppointments(params);
            case 'parking':
                return this.getParkingLotsReservations(params);
            default:
                return this.getWorkplaceReservations(params);
        }
    }
    getOrganizerAppointments(params) {
        return this.$http
            .post(this._getOrganizerAppointmentsUrl, params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    getRoomsAppointments(params = {}) {
        return this.$http
            .post(this._apiUrl + '/getRoomsAppointments', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    getRoomAppointments(params = {}) {
        return this.$http
            .post(this._apiUrl + '/getRoomAppointments', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    getParkingLotsReservations(params = {}) {
        return this.$http
            .post(this._getParkingLotReservationsUrl, params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    getWorkplaceReservations(params = {}, messages = {}) {
        return this.$http
            .post(this._apiUrl + '/getWorkplaceReservations', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification(messages), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    getWorkplacesDisabledExpanded(params = {}) {
        return this.$http
            .post(this._apiUrl + '/getWorkplacesDisabledExpanded', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    confirmReservation(type, id) {
        const params = {};
        switch (type) {
            case 'parking':
                params.parkingLotReservationId = id;
                return this.confirmParkingLotReservation(params);
            case 'workplace':
            default:
                params.workplaceReservationId = id;
                return this.confirmWorkplaceReservation(params);
        }
    }
    confirmWorkplaceReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/confirmWorkplaceReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    confirmParkingLotReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/confirmParkingLotReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    approveReservation(type, id) {
        const params = {};
        switch (type) {
            case 'parking':
                params.parkingLotReservationId = id;
                return this.approveParkingLotReservation(params);
            case 'workplace':
            default:
                params.workplaceReservationId = id;
                return this.approveWorkplaceReservation(params);
        }
    }
    approveWorkplaceReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/approveWorkplaceReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    approveParkingLotReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/approveParkingLotReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    cancelReservation(type, id) {
        const params = {};
        switch (type) {
            case 'parking':
                params.parkingLotReservationId = id;
                return this.cancelParkingLotReservation(params);
            case 'workplace':
            default:
                params.workplaceReservationId = id;
                return this.cancelWorkplaceReservation(params);
        }
    }
    cancelWorkplaceReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/cancelWorkplaceReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    cancelParkingLotReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/cancelParkingLotReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    denyReservation(type, id) {
        const params = {};
        switch (type) {
            case 'parking':
                params.parkingLotReservationId = id;
                return this.denyParkingLotReservation(params);
            case 'workplace':
            default:
                params.workplaceReservationId = id;
                return this.denyWorkplaceReservation(params);
        }
    }
    denyWorkplaceReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/denyWorkplaceReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    denyParkingLotReservation(params = {}) {
        return this.$http
            .post(this._apiUrl + '/denyParkingLotReservation', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}));
    }
    getUserAppointments(params = {}) {
        return this.$http
            .post(this._apiUrl + '/getUserAppointments', params)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    callReservationAction(url, method, data, messages) {
        return this.$http
            .request(method, url, data)
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification(messages));
    }
    getAppointmentById(id) {
        return this.$http
            .post(this._apiUrl + '/getAppointmentById', {
            appointmentId: decodeURIComponent(id),
        })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    saveAppointmentEmails(id, emails) {
        return this.$http
            .post(this._apiUrl + '/addAppointmentAttendees', {
            appointmentId: id,
            appointmentAttendees: emails,
        })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({
            successTitle: 'Успех',
            successMessage: 'Участники сохранены',
            errorTitle: 'Ошибка',
            errorMessage: 'Не удалось выполнить сораниние участников',
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    closeAppointment(id) {
        return this.$http
            .post(this._apiUrl + '/closeAppointment', {
            appointmentId: id,
        })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({
            successTitle: 'Успех',
            successMessage: 'Встреча успешно закрыта',
            errorTitle: 'Ошибка',
            errorMessage: 'Не удалось выполнить закрытие встречи',
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    confirmAppointment(id) {
        return this.$http
            .post(this._apiUrl + '/confirmAppointment', {
            appointmentId: id,
        })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({
            successTitle: 'Успех',
            successMessage: 'Встреча успешно подтвержена',
            errorTitle: 'Ошибка',
            errorMessage: 'Не удалось выполнить подтверждение встречи',
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    deleteAppointment(id) {
        return this.$http
            .post(this._apiUrl + '/cancelAppointment', {
            appointmentId: id,
        })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({
            successTitle: 'Успех',
            successMessage: 'Встреча успешно удалена',
            errorTitle: 'Ошибка',
            errorMessage: 'Не удалось выполнить удаление встречи',
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    checkAppointmentAttendeesAvailability(from, to, emails, id) {
        return this.$http
            .post(this._apiUrl + '/checkAppointmentAttendeesAvailability', {
            requestDateFrom: from,
            requestDateTo: to,
            appointmentAttendees: emails,
            requestAppointmentId: id,
        })
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification({
            errorTitle: 'Ошибка',
            errorMessage: 'Не удалось проверить статусы пользователей',
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('data'));
    }
    getK2Scenarios(params = {}) {
        return this.$http
            .post(this._apiUrl + '/k2GetScenarios', params, {}, {})
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    openK2Session(params = {}) {
        return this.$http
            .post(this._apiUrl + '/k2OpenSession', params, {}, {})
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    putK2SessionStep(params = {}) {
        return this.$http
            .post(this._apiUrl + '/k2PutSessionStep', params, {}, {})
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
    commitK2Session(params = {}) {
        return this.$http
            .post(this._apiUrl + '/k2CommitSession', params, {}, {})
            .pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["filterNoProgressHttpEvent"])());
    }
}
ReservationsApiService.ɵfac = function ReservationsApiService_Factory(t) { return new (t || ReservationsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
ReservationsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservationsApiService, factory: ReservationsApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "jIIN":
/*!************************************************************!*\
  !*** ./src/app/core/decorators/subscriptions.decorator.ts ***!
  \************************************************************/
/*! exports provided: Subscriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriptions", function() { return Subscriptions; });
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal-compatibility */ "w0v+");

const DESTROY_METHOD = 'ngOnDestroy';
/*const DESTROY_IVY_METHOD: string = 'onDestroy';
const ECMP: string = 'ɵcmp';*/
function Subscriptions(destroyMethodName = DESTROY_METHOD) {
    return (target, key) => {
        const subscriptionsSymbol = Symbol('__subscriptions');
        const originalOnDestroy = target[destroyMethodName];
        Object.defineProperty(target, key, {
            configurable: false,
            get() {
                return this[subscriptionsSymbol] || [];
            },
            set(newSub) {
                if (!this[subscriptionsSymbol]) {
                    this[subscriptionsSymbol] = [];
                }
                this[subscriptionsSymbol].push(newSub);
            }
        });
        target[destroyMethodName] = function (...args) {
            var _a;
            if (originalOnDestroy && Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(originalOnDestroy)) {
                originalOnDestroy.apply(this, args);
            }
            if ((_a = this[subscriptionsSymbol]) === null || _a === void 0 ? void 0 : _a.length) {
                this[subscriptionsSymbol].splice(0).forEach(sub => sub.unsubscribe());
            }
        };
    };
}


/***/ }),

/***/ "jIrl":
/*!*************************************************!*\
  !*** ./src/app/presentation/auth/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "hsFk");




class AuthGuard {
    constructor($router, $auth) {
        this.$router = $router;
        this.$auth = $auth;
    }
    canActivate(route, state) {
        return this.$auth.isLoggedIn || this.$router.parseUrl('/auth');
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "jtrZ":
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core.tokens */ "UZaM");
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dictionary.service */ "8OyG");
/* harmony import */ var _utils_http_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/http.util */ "QEIv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "bUwk");










class ConfigService {
    constructor($http, $dictionary, _url, _initialValues) {
        this.$http = $http;
        this.$dictionary = $dictionary;
        this._url = _url;
        this._initialValues = _initialValues;
        this._values = {};
        this._values$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this._initialized$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._initializationError$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    get all() {
        return this._values;
    }
    get initialized$() {
        return this._initialized$.asObservable();
    }
    get values$() {
        return this._values$.asObservable();
    }
    get initializationError$() {
        return this._initializationError$.asObservable();
    }
    get initializationError() {
        return this._initializationError$.getValue();
    }
    get$(key) {
        return this.values$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(values => key ? values[key] : values));
    }
    getOne$(key) {
        if (key) {
            return this.get$(key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(value => !Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(value)));
        }
        return this
            .get$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((values) => Object.keys(values).length > 2));
    }
    get(key = null, whenNull = null) {
        const value = this._values[key];
        return typeof value !== 'undefined' ? value : whenNull;
    }
    getValues(keys, ...anyKeys) {
        keys = [].concat(keys, anyKeys);
        return keys.reduce((values, key) => (Object.assign(Object.assign({}, values), { [key]: this.get(key) })), {});
    }
    setValues(newValues, mode = 'append') {
        if (!(newValues instanceof Array)) {
            newValues = Object.entries(newValues).map(([code, value]) => ({ code, value }));
        }
        if (mode === 'replace') {
            this._values = {};
        }
        else if (mode === 'append') {
            newValues = newValues.filter(({ code }) => !(code in this._values));
        }
        newValues.forEach(({ code, value }) => this._values[code] = value);
        this._values$.next(this._values);
    }
    initialize(initialValues = null) {
        if (this._initialValues || initialValues) {
            this.setInitialValues(initialValues);
        }
        if (!this._url) {
            this.setInitialized();
            return this.initialized$;
        }
        if (!this.initialized) {
            this.$http.get(this._url)
                .pipe(Object(_utils_http_util__WEBPACK_IMPORTED_MODULE_4__["filterNoProgressHttpEvent"])())
                .subscribe(({ success, data, error }) => {
                this.setValues(data || []);
                if (!success) {
                    console.error(_dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"].get('configLoadingError'));
                    this._initializationError$.next(error.message);
                }
                this.setInitialized();
                this._initializationError$.complete();
            });
        }
        return this.initialized$;
    }
    get initialized() {
        return this._initialized$.getValue();
    }
    setInitialized() {
        this._initialized$.next(true);
        this._initialized$.complete();
    }
    setInitialValues(initialValues = []) {
        const values = [].concat(this._initialValues, initialValues);
        values
            .filter(Boolean)
            .forEach((_initialValues) => this.setValues(_initialValues));
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG_URL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG_VALUES"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }, { type: _dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG_URL"]]
            }] }, { type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG_VALUES"]]
            }] }]; }, null); })();


/***/ }),

/***/ "kKEL":
/*!***************************************************!*\
  !*** ./src/app/core/directives/blur.directive.ts ***!
  \***************************************************/
/*! exports provided: BlurDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurDirective", function() { return BlurDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BlurDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    click() {
        this.elRef.nativeElement.blur();
    }
}
BlurDirective.ɵfac = function BlurDirective_Factory(t) { return new (t || BlurDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BlurDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BlurDirective, selectors: [["", "blur", ""]], hostBindings: function BlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlurDirective_click_HostBindingHandler() { return ctx.click(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlurDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[blur]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kgew":
/*!*****************************************************!*\
  !*** ./src/app/shared/settings/settings.service.ts ***!
  \*****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_settings_settings_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/settings/settings.constants */ "SIZ/");
/* harmony import */ var _shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.utils */ "WPJJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var _shared_settings_settings_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/settings/settings.utils */ "KEC1");
/* harmony import */ var _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.service */ "g1UE");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/http.service */ "bUwk");











class SettingsService {
    constructor($indexedDb, $config, $http) {
        this.$indexedDb = $indexedDb;
        this.$config = $config;
        this.$http = $http;
        this._settings = {};
    }
    get settings$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._settings);
    }
    get settings() {
        return this._settings;
    }
    getSettingByName$(name) {
        return this.$indexedDb
            .getStoreItemByIndex(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_SETTINGS"], 'name', name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
    }
    getSettingByName(name) {
        const value = this._settings[name];
        return typeof value !== 'undefined' ? value : null;
    }
    initialize() {
        const url = this.$config.get(_shared_settings_settings_constants__WEBPACK_IMPORTED_MODULE_2__["SETTINGS_URL_KEY"]);
        return !url
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)
            : this.$http.post(url).pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_5__["filterNoProgressHttpEvent"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ success, data }) => !success
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({})
                : this.$indexedDb
                    .clear(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_SETTINGS"])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this._settings = data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((settings) => Object(_shared_settings_settings_utils__WEBPACK_IMPORTED_MODULE_6__["getSettingsArray"])(settings)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((settingsArray) => this.$indexedDb.addStoreItems(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_SETTINGS"], settingsArray)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                console.error('Error loading settings', err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(250));
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_7__["IndexedDbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_7__["IndexedDbService"] }, { type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }, { type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, cordova, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"smartofficemerusoftrelease-angular\",\"version\":\"0.9.88\",\"scripts\":{\"ng\":\"ng\",\"updateVersion\":\"node update-version.js\",\"prebuild\":\"npm --no-git-tag-version version patch\",\"start\":\"ng serve --open --port 9099\",\"start:ssl\":\"ng serve --open --port 9099 --ssl true\",\"start:prod\":\"ng serve --open --port 9099 --prod\",\"start:prod:ssl\":\"ng serve --open --port 9099 --prod --ssl true\",\"build\":\"ng build --prod --deploy-url ./ --base-href /\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"build:mobile:andorid\":\"ionic cordova run android --project smartofficemerusoftrelease-angular --device\",\"emulate:mobile:andorid\":\"ionic cordova emulate android --project smartofficemerusoftrelease-angular --no-native-run\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~11.0.5\",\"@angular/common\":\"~11.0.5\",\"@angular/compiler\":\"~11.0.5\",\"@angular/core\":\"~11.0.5\",\"@angular/forms\":\"~11.0.5\",\"@angular/platform-browser\":\"~11.0.5\",\"@angular/platform-browser-dynamic\":\"~11.0.5\",\"@angular/router\":\"~11.0.5\",\"@ionic/angular\":\"^5.5.2\",\"@ngx-translate/core\":\"^13.0.0\",\"@ngx-translate/http-loader\":\"^6.0.0\",\"@zxing/browser\":\"0.0.9\",\"@zxing/library\":\"^0.18.6\",\"@zxing/ngx-scanner\":\"^3.2.0\",\"angular-calendar\":\"^0.28.24\",\"angular-oauth2-oidc\":\"^12.0.2\",\"animate.css\":\"^4.1.1\",\"date-fns\":\"^2.19.0\",\"dayjs\":\"^1.10.5\",\"file-saver\":\"^2.0.5\",\"ng-sortgrid\":\"^4.0.3\",\"ng-zorro-antd\":\"^11.4.1\",\"ngx-cookie-service\":\"^3.0.4\",\"ngx-drag-drop\":\"^2.0.0\",\"ngx-indexed-db\":\"^6.1.2\",\"ngx-mask\":\"^11.1.5\",\"ngx-perfect-scrollbar\":\"^10.1.0\",\"ngx-pinch-zoom\":\"^2.5.5\",\"ol\":\"^6.5.0\",\"perfect-scrollbar\":\"^1.5.0\",\"rxjs\":\"~6.6.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.2\",\"xlsx\":\"^0.17.0\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1100.5\",\"@angular/cli\":\"~11.0.5\",\"@angular/compiler-cli\":\"~11.0.5\",\"@ionic/angular-toolkit\":\"latest\",\"@types/date-fns\":\"^2.6.0\",\"@types/jasmine\":\"~3.6.0\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^6.0.0\",\"cordova-android\":\"^9.0.0\",\"cordova-plugin-device\":\"^2.0.2\",\"cordova-plugin-ionic-keyboard\":\"^2.2.0\",\"cordova-plugin-ionic-webview\":\"^4.2.1\",\"cordova-plugin-splashscreen\":\"^5.0.2\",\"cordova-plugin-statusbar\":\"^2.4.2\",\"cordova-plugin-whitelist\":\"^1.3.3\",\"husky\":\"^4.3.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.1.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage\":\"~2.0.3\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.0.2\"},\"cordova\":{\"plugins\":{\"cordova-plugin-whitelist\":{},\"cordova-plugin-statusbar\":{},\"cordova-plugin-device\":{},\"cordova-plugin-splashscreen\":{},\"cordova-plugin-ionic-webview\":{\"ANDROID_SUPPORT_ANNOTATIONS_VERSION\":\"27.+\"},\"cordova-plugin-ionic-keyboard\":{}},\"platforms\":[\"android\"]}}");

/***/ }),

/***/ "lW34":
/*!******************************************!*\
  !*** ./src/app/base/card/card.module.ts ***!
  \******************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "iYEa");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var _card_form_control_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-form-control.directive */ "VMbU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















class CardModule {
}
CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_4__["NzTagModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormModule"],
            ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__["NzDescriptionsModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forChild(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _card_form_control_directive__WEBPACK_IMPORTED_MODULE_9__["CardFormControlDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_4__["NzTagModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__["NzDescriptionsModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]], exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _card_form_control_directive__WEBPACK_IMPORTED_MODULE_9__["CardFormControlDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _card_form_control_directive__WEBPACK_IMPORTED_MODULE_9__["CardFormControlDirective"]],
                exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _card_form_control_directive__WEBPACK_IMPORTED_MODULE_9__["CardFormControlDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_4__["NzTagModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormModule"],
                    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__["NzDescriptionsModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forChild(),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "meMk":
/*!***********************************************!*\
  !*** ./src/app/core/utils/animations.util.ts ***!
  \***********************************************/
/*! exports provided: fadeInOutAnimation, getFadeInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOutAnimation", function() { return fadeInOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFadeInOutAnimation", function() { return getFadeInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fadeInOutAnimation = [getFadeInOutAnimation()];
function getFadeInOutAnimation(name = 'fadeInOut', inDelay = .35, outDelay = .35) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])(name, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${inDelay}s ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${outDelay}s ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${inDelay}s ease-out`)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${outDelay}s ease-out`)
        ]),
    ]);
}


/***/ }),

/***/ "mliB":
/*!***************************************************!*\
  !*** ./src/app/core/services/messages.service.ts ***!
  \***************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localization.service */ "r8tS");




const DURATION = 5000;
class MessagesService {
    constructor($message, $localization) {
        this.$message = $message;
        this.$localization = $localization;
    }
    create(content, type = 'info', duration = DURATION) {
        content = this.$localization.translate(content);
        return this.$message.create(type, content, { nzDuration: duration }).messageId;
    }
    remove(messageId) {
        this.$message.remove(messageId);
    }
    error(content, duration = DURATION) {
        return this.create(content, 'error', duration);
    }
    info(content, duration = DURATION) {
        return this.create(content, 'info', duration);
    }
    success(content, duration = DURATION) {
        return this.create(content, 'success', duration);
    }
    warning(content, duration = DURATION) {
        return this.create(content, 'warning', duration);
    }
    loading(content, duration = 0) {
        return this.create(content, 'loading', duration);
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"])); };
MessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"] }, { type: _localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "mtWJ":
/*!*************************************************!*\
  !*** ./src/app/layout/header/header.service.ts ***!
  \*************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderService {
    constructor() { }
    get logo() {
        return {
            src: './assets/images/logo.svg',
            alt: 'Meru-Software',
            title: 'Meru-Software',
        };
    }
    get notifications() {
        return [
            {
                id: '1',
                type: 'success',
                message: 'Авторизация прошла успешно',
            },
            {
                id: '2',
                type: 'info',
                message: 'Рады приветствовать вас в нашей системе',
            },
            {
                id: '3',
                type: 'warning',
                message: 'Подтвердите вашу электронную почту',
            },
            {
                id: '4',
                type: 'error',
                message: 'Произошла ошибка на сервере',
            },
        ];
    }
    get notificationIconsMap() {
        return {
            info: 'info-circle',
            error: 'close-circle',
            success: 'check-circle',
            warning: 'warning',
        };
    }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); };
HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nHQ5":
/*!*******************************************!*\
  !*** ./src/app/core/enums/tokens.enum.ts ***!
  \*******************************************/
/*! exports provided: Tokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tokens", function() { return Tokens; });
var Tokens;
(function (Tokens) {
    Tokens["configUrl"] = "APP_CONFIG_URL";
    Tokens["configValues"] = "APP_CONFIG_VALUES";
    Tokens["defaultLang"] = "APP_DEFAULT_LANG";
    Tokens["langs"] = "APP_LANGS";
    Tokens["dictionary"] = "APP_DICTIONARY";
})(Tokens || (Tokens = {}));


/***/ }),

/***/ "nRlI":
/*!***********************************************!*\
  !*** ./src/app/core/utils/dictionary.util.ts ***!
  \***********************************************/
/*! exports provided: InitialWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialWords", function() { return InitialWords; });
var InitialWords;
(function (InitialWords) {
    InitialWords["alreadyExist"] = "Already exist";
    InitialWords["configLoadingError"] = "Config error: config load failed. Initialization front application was aborted. Please reload this page for repeat.";
    InitialWords["configValueError"] = "Config error: value with code $code in not exist in values.";
    InitialWords["coreModuleAlreadyLoaded"] = "CoreModule has already been loaded";
    InitialWords["coreModuleNotLoaded"] = "CoreModule has not loaded";
    InitialWords["localStorageBadParsing"] = "Local storage error: Bad parsing localstorage object with name $name.";
    InitialWords["localStorageBadStringify"] = "Local storage error: Bad stringify object with name $name before stringify.";
    InitialWords["localStorageObjectNotSaved"] = "Local storage error: Object with name $name not saved.";
    InitialWords["theWordWithKey"] = "The word with key";
    /*Http errors*/
    InitialWords["accessDenied"] = "Access denied";
    InitialWords["badRequest"] = "Bad request";
    InitialWords["connectionFailed"] = "Connection failed";
    InitialWords["internalServerError"] = "Internal server error";
    InitialWords["notFound"] = "Not found";
    InitialWords["unknownServerError"] = "Unknown server error";
    InitialWords["serverUnavailable"] = "Server unavailable now";
    InitialWords["lang-ru"] = "\u0420\u0443\u0441\u0441\u043A\u0438\u0439";
    InitialWords["lang-en"] = "English";
})(InitialWords || (InitialWords = {}));


/***/ }),

/***/ "naTb":
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.utils */ "WPJJ");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/settings/settings.service */ "kgew");
/* harmony import */ var _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/dictionaries/services/statuses.service */ "fOet");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");
/* harmony import */ var _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.service */ "g1UE");












class SharedService {
    constructor($config, $dictionaries, $settings, $measurements, $statuses, $user, $indexedDb) {
        this.$config = $config;
        this.$dictionaries = $dictionaries;
        this.$settings = $settings;
        this.$measurements = $measurements;
        this.$statuses = $statuses;
        this.$user = $user;
        this.$indexedDb = $indexedDb;
    }
    initialize() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$dictionaries.checkAlreadyDictionaries()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$measurements.initialize()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$statuses.initialize()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$user.isAuth ? this.$settings.initialize() : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
    }
    loadDictionaries() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$dictionaries.cacheDictionaries()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)));
    }
    checkVersion() {
        const currentVersion = this.$config.get('version');
        const [notNeedUpdate$, needUpdate$] = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["partition"])(this.$indexedDb.getStoreItemByIndex(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_VERSION"], 'version', currentVersion), Boolean);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(notNeedUpdate$, needUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.clearIndexedDbStores()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            console.error('Error clear indexed-db');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.$indexedDb.addStoreItem(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_VERSION"], { version: currentVersion }))));
    }
    clearIndexedDbStores() {
        return this.$indexedDb
            .clear(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_VERSION"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.$indexedDb.clear(_shared_indexed_db_indexed_db_utils__WEBPACK_IMPORTED_MODULE_3__["DB_STORE_RESPONSE"])));
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_8__["StatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_10__["IndexedDbService"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }, { type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_5__["DictionariesService"] }, { type: _shared_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }, { type: _shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_7__["MeasurementsService"] }, { type: _shared_dictionaries_services_statuses_service__WEBPACK_IMPORTED_MODULE_8__["StatusesService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_10__["IndexedDbService"] }]; }, null); })();


/***/ }),

/***/ "ndgU":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-shared.service.ts ***!
  \*************************************************/
/*! exports provided: LayoutSharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSharedService", function() { return LayoutSharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






class LayoutSharedService {
    constructor($router) {
        this.$router = $router;
        this._title = '';
        this._breadcrumbs = [];
        this._extra = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._scrollTop = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._lastComponentName = null;
        this.navigationEnd$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => !this.currentRouteRoot.data.componentName ||
            this.currentRouteRoot.data.componentName !== this._lastComponentName))
            .subscribe(() => (this.extra = null));
    }
    get currentRouteData$() {
        return this.navigationEnd$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => this.currentRouteData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
    }
    get currentRouteData() {
        var _a;
        const current = this.currentRouteRoot;
        this._title = !current.data.hideTitle ? current.data.title || '' : '';
        this._lastComponentName = ((_a = current === null || current === void 0 ? void 0 : current.data) === null || _a === void 0 ? void 0 : _a.componentName) || null;
        if (!current.data.hideBreadcrumbs) {
            const routes = current.pathFromRoot.filter((route) => route.data.title &&
                !route.data.hideInBreadcrumbs &&
                !route.routeConfig.loadChildren);
            let url = '';
            this._breadcrumbs = routes.map((route) => ({
                title: route.data.title,
                url: (url += `${route.routeConfig.path}/`),
            }));
        }
        else {
            this._breadcrumbs = [];
        }
        return {
            title: this._title,
            breadcrumbs: this._breadcrumbs,
            showBackBtn: current.data.showBackBtn,
        };
    }
    get extra$() {
        return this._extra.asObservable();
    }
    set extra(tpl) {
        this._extra.next(tpl);
    }
    get currentRouteRoot() {
        let current = this.$router.routerState.snapshot.root;
        while (current.firstChild) {
            current = current.firstChild;
        }
        return current;
    }
    get navigationEnd$() {
        let lastRoute;
        return this.$router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => {
            const eventRoute = event.urlAfterRedirects.split('?')[0];
            if (eventRoute === lastRoute)
                return false;
            lastRoute = eventRoute;
            return true;
        }));
    }
    toScrollTop$() {
        this._scrollTop.next();
    }
    get scrollTop$() {
        return this._scrollTop;
    }
}
LayoutSharedService.ɵfac = function LayoutSharedService_Factory(t) { return new (t || LayoutSharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LayoutSharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutSharedService, factory: LayoutSharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutSharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "nfWu":
/*!*******************************************!*\
  !*** ./src/app/core/pipes/filter.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(values, key, searchValue, direct = true) {
        const stringedSearchValue = String(searchValue).toLowerCase();
        return values.filter((value) => {
            if (typeof value === 'object' && value !== null) {
                value = value[key];
            }
            const result = this.compareValues(searchValue, stringedSearchValue, value);
            return direct ? result : !result;
        });
    }
    compareValues(searchValue, stringedSearchValue, comparedValue) {
        const stringedCompareValue = String(comparedValue).toLowerCase();
        return searchValue === comparedValue || stringedCompareValue.includes(stringedSearchValue);
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "olkM":
/*!****************************************************!*\
  !*** ./src/app/core/decorators/async.decorator.ts ***!
  \****************************************************/
/*! exports provided: MarkForCheck, DetectChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkForCheck", function() { return MarkForCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectChanges", function() { return DetectChanges; });
/* harmony import */ var _core_utils_decorators_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/decorators.utils */ "cy4D");

const MarkForCheck = asyncDecoratorFactory('markForCheck');
const DetectChanges = asyncDecoratorFactory('markForCheck');
function asyncDecoratorFactory(checkType = 'markForCheck') {
    return (target, key, descriptor) => {
        var _a;
        let originalMethod;
        let cdr;
        if (!descriptor) {
            const valueSymbol = Symbol(key);
            delete target[key];
            Object.defineProperty(target, key, {
                get() {
                    return this[valueSymbol];
                },
                set(value) {
                    if (!cdr) {
                        cdr = Object(_core_utils_decorators_utils__WEBPACK_IMPORTED_MODULE_0__["detectCdr"])(this);
                    }
                    this[valueSymbol] = value;
                    check(checkType);
                }
            });
            return;
        }
        if ('value' in descriptor) {
            originalMethod = descriptor.value;
            descriptor.value = newMethod;
        }
        else if (!!descriptor.set) {
            originalMethod = descriptor.set;
            descriptor.set = newMethod;
        }
        else {
            console.error(`Can't apply '${checkType}' decorator for property '${key}' of '${(_a = target.constructor) === null || _a === void 0 ? void 0 : _a.name}'. Absent setter or original method for '${key}'`);
            return;
        }
        function newMethod(...args) {
            try {
                originalMethod.apply(this, args);
                check(checkType);
            }
            catch (e) {
                console.error(`Can't use original method or setter for property '${key}' of '${target.constructor.name}' in '${checkType}' decorator`);
            }
        }
        function check(checkType) {
            if (cdr) {
                switch (checkType) {
                    case 'detectChanges':
                        cdr.detectChanges();
                        break;
                    case 'markForCheck':
                        cdr.markForCheck();
                }
            }
        }
    };
}


/***/ }),

/***/ "p2k/":
/*!*******************************************************************!*\
  !*** ./src/app/shared/indexed-db/indexed-db-migration.factory.ts ***!
  \*******************************************************************/
/*! exports provided: indexedDbMigrationFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexedDbMigrationFactory", function() { return indexedDbMigrationFactory; });
function indexedDbMigrationFactory() {
    return {};
}


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.tokens */ "UZaM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/filter.pipe */ "nfWu");
/* harmony import */ var _pipes_object_entries_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/object-entries.pipe */ "LZ/j");
/* harmony import */ var _pipes_object_first_key_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/object-first-key.pipe */ "GKa9");
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/safe-url.pipe */ "cr/+");
/* harmony import */ var _pipes_pluck_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/pluck.pipe */ "yBQe");
/* harmony import */ var _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/map.pipe */ "3oFZ");
/* harmony import */ var _pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/dictionary.pipe */ "Dz+d");
/* harmony import */ var _services_dictionary_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/dictionary.service */ "8OyG");
/* harmony import */ var _services_condition_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/condition.service */ "sA3S");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/config.service */ "jtrZ");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/http.service */ "bUwk");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/local-storage.service */ "3G0t");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/url.service */ "Yrpq");
/* harmony import */ var _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/string.pipe */ "K6s4");
/* harmony import */ var _services_http_helper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/http-helper.service */ "I+8P");
/* harmony import */ var _pipes_delay_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/delay.pipe */ "iKGl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_object_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/object.pipe */ "uA+i");
/* harmony import */ var _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/antd/antd.module */ "E+H7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");
/* harmony import */ var _directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/perfect-scroll.directive */ "L6sk");
/* harmony import */ var _directives_condition_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/condition.directive */ "taEc");
/* harmony import */ var _pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/localize.pipe */ "E39c");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @core/services/navigation.service */ "CWrn");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _directives_blur_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./directives/blur.directive */ "kKEL");
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @core/services/message.service */ "acRR");
/* harmony import */ var _pipes_array_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/array.pipe */ "tyjl");
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/highlight.pipe */ "em9I");



































class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: _core_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG_VALUES"],
                    useValue: [],
                    multi: true
                },
                _services_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"],
                _services_dictionary_service__WEBPACK_IMPORTED_MODULE_11__["DictionaryService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_14__["HttpService"],
                _core_services_localization_service__WEBPACK_IMPORTED_MODULE_24__["LocalizationService"],
                _core_services_message_service__WEBPACK_IMPORTED_MODULE_31__["MessageService"]
            ]
        };
    }
    static forChild() {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _services_condition_service__WEBPACK_IMPORTED_MODULE_12__["ConditionService"],
        _services_http_helper_service__WEBPACK_IMPORTED_MODULE_18__["HttpHelperService"],
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_15__["LocalStorageService"],
        _services_url_service__WEBPACK_IMPORTED_MODULE_16__["UrlService"],
        _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_28__["NavigationService"]
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"],
        _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_22__["AntdModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_29__["PerfectScrollbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"],
        _pipes_object_entries_pipe__WEBPACK_IMPORTED_MODULE_5__["ObjectEntriesPipe"],
        _pipes_object_first_key_pipe__WEBPACK_IMPORTED_MODULE_6__["ObjectFirstKeyPipe"],
        _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeUrlPipe"],
        _pipes_pluck_pipe__WEBPACK_IMPORTED_MODULE_8__["PluckPipe"],
        _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_9__["MapPipe"],
        _pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_10__["DictionaryPipe"],
        _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_17__["StringPipe"],
        _pipes_delay_pipe__WEBPACK_IMPORTED_MODULE_19__["DelayPipe"],
        _pipes_object_pipe__WEBPACK_IMPORTED_MODULE_21__["ObjectPipe"],
        _directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollDirective"],
        _directives_condition_directive__WEBPACK_IMPORTED_MODULE_26__["ConditionDirective"],
        _pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_27__["LocalizePipe"],
        _directives_blur_directive__WEBPACK_IMPORTED_MODULE_30__["BlurDirective"],
        _pipes_array_pipe__WEBPACK_IMPORTED_MODULE_32__["ArrayPipe"],
        _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_33__["HighlightPipe"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"],
        _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_22__["AntdModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_29__["PerfectScrollbarModule"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"],
        _pipes_object_entries_pipe__WEBPACK_IMPORTED_MODULE_5__["ObjectEntriesPipe"],
        _pipes_object_first_key_pipe__WEBPACK_IMPORTED_MODULE_6__["ObjectFirstKeyPipe"],
        _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeUrlPipe"],
        _pipes_pluck_pipe__WEBPACK_IMPORTED_MODULE_8__["PluckPipe"],
        _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_9__["MapPipe"],
        _pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_10__["DictionaryPipe"],
        _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_17__["StringPipe"],
        _pipes_delay_pipe__WEBPACK_IMPORTED_MODULE_19__["DelayPipe"],
        _directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollDirective"],
        _directives_condition_directive__WEBPACK_IMPORTED_MODULE_26__["ConditionDirective"],
        _pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_27__["LocalizePipe"],
        _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_33__["HighlightPipe"],
        _directives_blur_directive__WEBPACK_IMPORTED_MODULE_30__["BlurDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"],
                    _pipes_object_entries_pipe__WEBPACK_IMPORTED_MODULE_5__["ObjectEntriesPipe"],
                    _pipes_object_first_key_pipe__WEBPACK_IMPORTED_MODULE_6__["ObjectFirstKeyPipe"],
                    _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeUrlPipe"],
                    _pipes_pluck_pipe__WEBPACK_IMPORTED_MODULE_8__["PluckPipe"],
                    _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_9__["MapPipe"],
                    _pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_10__["DictionaryPipe"],
                    _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_17__["StringPipe"],
                    _pipes_delay_pipe__WEBPACK_IMPORTED_MODULE_19__["DelayPipe"],
                    _pipes_object_pipe__WEBPACK_IMPORTED_MODULE_21__["ObjectPipe"],
                    _directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollDirective"],
                    _directives_condition_directive__WEBPACK_IMPORTED_MODULE_26__["ConditionDirective"],
                    _pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_27__["LocalizePipe"],
                    _directives_blur_directive__WEBPACK_IMPORTED_MODULE_30__["BlurDirective"],
                    _pipes_array_pipe__WEBPACK_IMPORTED_MODULE_32__["ArrayPipe"],
                    _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_33__["HighlightPipe"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"],
                    _core_antd_antd_module__WEBPACK_IMPORTED_MODULE_22__["AntdModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_29__["PerfectScrollbarModule"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"],
                    _pipes_object_entries_pipe__WEBPACK_IMPORTED_MODULE_5__["ObjectEntriesPipe"],
                    _pipes_object_first_key_pipe__WEBPACK_IMPORTED_MODULE_6__["ObjectFirstKeyPipe"],
                    _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeUrlPipe"],
                    _pipes_pluck_pipe__WEBPACK_IMPORTED_MODULE_8__["PluckPipe"],
                    _pipes_map_pipe__WEBPACK_IMPORTED_MODULE_9__["MapPipe"],
                    _pipes_dictionary_pipe__WEBPACK_IMPORTED_MODULE_10__["DictionaryPipe"],
                    _pipes_string_pipe__WEBPACK_IMPORTED_MODULE_17__["StringPipe"],
                    _pipes_delay_pipe__WEBPACK_IMPORTED_MODULE_19__["DelayPipe"],
                    _directives_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollDirective"],
                    _directives_condition_directive__WEBPACK_IMPORTED_MODULE_26__["ConditionDirective"],
                    _pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_27__["LocalizePipe"],
                    _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_33__["HighlightPipe"],
                    _directives_blur_directive__WEBPACK_IMPORTED_MODULE_30__["BlurDirective"]
                ],
                providers: [
                    _services_condition_service__WEBPACK_IMPORTED_MODULE_12__["ConditionService"],
                    _services_http_helper_service__WEBPACK_IMPORTED_MODULE_18__["HttpHelperService"],
                    _services_local_storage_service__WEBPACK_IMPORTED_MODULE_15__["LocalStorageService"],
                    _services_url_service__WEBPACK_IMPORTED_MODULE_16__["UrlService"],
                    _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_28__["NavigationService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "q9Tp":
/*!********************************************************!*\
  !*** ./src/app/shared/indexed-db/indexed-db.module.ts ***!
  \********************************************************/
/*! exports provided: IndexedDbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDbModule", function() { return IndexedDbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-indexed-db */ "BvB/");
/* harmony import */ var _app_shared_indexed_db_indexed_db_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/indexed-db/indexed-db.config */ "ZM1w");
/* harmony import */ var _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/indexed-db/indexed-db.service */ "g1UE");






class IndexedDbModule {
}
IndexedDbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IndexedDbModule });
IndexedDbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IndexedDbModule_Factory(t) { return new (t || IndexedDbModule)(); }, providers: [
        _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_3__["IndexedDbService"]
    ], imports: [[
            ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__["NgxIndexedDBModule"].forRoot(_app_shared_indexed_db_indexed_db_config__WEBPACK_IMPORTED_MODULE_2__["indexedDbConfig"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IndexedDbModule, { imports: [ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__["NgxIndexedDBModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexedDbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__["NgxIndexedDBModule"].forRoot(_app_shared_indexed_db_indexed_db_config__WEBPACK_IMPORTED_MODULE_2__["indexedDbConfig"]),
                ],
                providers: [
                    _shared_indexed_db_indexed_db_service__WEBPACK_IMPORTED_MODULE_3__["IndexedDbService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qOg1":
/*!*************************************************************!*\
  !*** ./src/app/presentation/presentation-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PresentationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationRoutingModule", function() { return PresentationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "jIrl");
/* harmony import */ var _app_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/layout/layout.component */ "8ERB");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _app_layout_loading_dictionaries_loading_dictionaries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/layout/loading-dictionaries/loading-dictionaries.component */ "XuKx");
/* harmony import */ var _shared_dictionaries_services_dictionaries_matchers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/dictionaries/services/dictionaries-matchers.service */ "v4UZ");
/* harmony import */ var _presentation_team_team_profile_team_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @presentation/team/team-profile/team-profile.component */ "6A2W");










const layoutRoutes = [
    {
        path: 'reservations',
        loadChildren: () => Promise.all(/*! import() | reservations-reservations-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module~team-prof~02a0fcc2"), __webpack_require__.e("default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0"), __webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~offices-offices-module~reservations-reserv~185ffae0"), __webpack_require__.e("default~develop-develop-module~offices-map-offices-map-module~reservations-reservations-module~team-~9c949e03"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-requests-team-requests-module~t~91afb84d"), __webpack_require__.e("default~develop-develop-module~office-services-office-services-module~reservations-reservations-modu~91cbca5f"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-create-team-create-module"), __webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module"), __webpack_require__.e("default~reservations-reservations-module~team-requests-team-requests-module~team-reservations-team-r~d46fbeaa"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-reservations-team-reservations-module"), __webpack_require__.e("default~reservations-reservations-module~team-reservations-team-reservations-module"), __webpack_require__.e("common"), __webpack_require__.e("reservations-reservations-module")]).then(__webpack_require__.bind(null, /*! ./reservations/reservations.module */ "ea6Q")).then(({ ReservationsModule }) => ReservationsModule),
    },
    {
        path: 'office',
        loadChildren: () => Promise.all(/*! import() | offices-offices-module */[__webpack_require__.e("default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0"), __webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~offices-offices-module~reservations-reserv~185ffae0"), __webpack_require__.e("default~develop-develop-module~offices-offices-module"), __webpack_require__.e("offices-offices-module")]).then(__webpack_require__.bind(null, /*! ./offices/offices.module */ "zPnL")).then(({ OfficesModule }) => OfficesModule),
        data: {
            title: 'Офисы',
        },
    },
    {
        path: 'services',
        loadChildren: () => Promise.all(/*! import() | office-services-office-services-module */[__webpack_require__.e("default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0"), __webpack_require__.e("default~develop-develop-module~office-services-office-services-module~reservations-reservations-modu~91cbca5f"), __webpack_require__.e("office-services-office-services-module")]).then(__webpack_require__.bind(null, /*! ./office-services/office-services.module */ "kMfV")).then(({ OfficeServicesModule }) => OfficeServicesModule),
    }, {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ./search/search.module */ "xDGX")).then(({ SearchModule }) => SearchModule),
        data: {
            title: 'Search'
        }
    },
    {
        path: 'team',
        loadChildren: () => __webpack_require__.e(/*! import() | team-team-module */ "team-team-module").then(__webpack_require__.bind(null, /*! ./team/team.module */ "fl93")).then(({ TeamModule }) => TeamModule),
        data: {
            title: 'Моя команда',
        },
    },
    {
        path: 'profile',
        component: _presentation_team_team_profile_team_profile_component__WEBPACK_IMPORTED_MODULE_7__["TeamProfileComponent"],
        data: {
            title: 'Мой профиль',
        },
    },
    {
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module~team-prof~02a0fcc2"), __webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~offices-offices-module~reservations-reserv~185ffae0"), __webpack_require__.e("default~dashboard-dashboard-module~offices-map-offices-map-module~reservation-create-reservation-cre~c1eb1ab2"), __webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "UshW")).then(({ DashboardModule }) => DashboardModule),
        matcher: _shared_dictionaries_services_dictionaries_matchers_service__WEBPACK_IMPORTED_MODULE_6__["DictionariesMatchersService"].alreadyMatcherFactory(),
    },
    {
        component: _app_layout_loading_dictionaries_loading_dictionaries_component__WEBPACK_IMPORTED_MODULE_5__["LoadingDictionariesComponent"],
        matcher: _shared_dictionaries_services_dictionaries_matchers_service__WEBPACK_IMPORTED_MODULE_6__["DictionariesMatchersService"].notAlreadyMatcherFactory(),
    },
];
const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "JlAy")).then(({ AuthModule }) => AuthModule),
    },
    {
        path: '',
        component: _app_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: layoutRoutes,
        data: {
            title: 'Главная',
        },
    },
];
if (!_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    layoutRoutes.unshift({
        path: 'dev',
        loadChildren: () => Promise.all(/*! import() | develop-develop-module */[__webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module~team-prof~02a0fcc2"), __webpack_require__.e("default~auth-auth-module~develop-develop-module~office-services-office-services-module~offices-offic~241ad9d0"), __webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~offices-offices-module~reservations-reserv~185ffae0"), __webpack_require__.e("default~develop-develop-module~offices-map-offices-map-module~reservations-reservations-module~team-~9c949e03"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-requests-team-requests-module~t~91afb84d"), __webpack_require__.e("default~develop-develop-module~office-services-office-services-module~reservations-reservations-modu~91cbca5f"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-create-team-create-module"), __webpack_require__.e("default~dashboard-dashboard-module~develop-develop-module~reservations-reservations-module"), __webpack_require__.e("default~develop-develop-module~reservations-reservations-module~team-reservations-team-reservations-module"), __webpack_require__.e("default~develop-develop-module~offices-offices-module"), __webpack_require__.e("develop-develop-module")]).then(__webpack_require__.bind(null, /*! ./develop/develop.module */ "1kCU")).then(({ DevelopModule }) => DevelopModule),
        data: {
            title: 'Разработка',
        },
    });
}
class PresentationRoutingModule {
}
PresentationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PresentationRoutingModule });
PresentationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PresentationRoutingModule_Factory(t) { return new (t || PresentationRoutingModule)(); }, providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PresentationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "r8tS":
/*!*******************************************************!*\
  !*** ./src/app/core/services/localization.service.ts ***!
  \*******************************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core.tokens */ "UZaM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_observable_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/observable.util */ "tPSh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/locale */ "PSO/");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










class LocalizationService {
    constructor($translate, $i18n, _langs, _defaultLang) {
        this.$translate = $translate;
        this.$i18n = $i18n;
        this._langs = _langs;
        this._defaultLang = _defaultLang;
        this._currentLangS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        if (!_defaultLang) {
            this._defaultLang = this.$translate.getBrowserLang();
        }
        if (!_langs) {
            this._langs = [this._defaultLang];
        }
        this.$translate.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('lang'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((currentLang) => {
            LocalizationService.currentLang = currentLang;
            this.switchNzLanguage();
        })).subscribe(this._currentLangS);
    }
    get browserDefaultLang() {
        return this.$translate.getBrowserLang();
    }
    get currentLang$() {
        return this._currentLangS;
    }
    get currentLang() {
        return this.$translate.currentLang;
    }
    get langs() {
        return this._langs;
    }
    set langs(langs) {
        this._langs = langs;
    }
    get defaultLang() {
        return this._defaultLang;
    }
    set defaultLang(defaultLang) {
        this._defaultLang = defaultLang;
    }
    getTranslation(lang) {
        return this.$translate.getTranslation(lang);
    }
    initialize(lang = this.defaultLang) {
        return this.getTranslation(lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            this.$translate.addLangs(this.langs);
            this.$translate.setDefaultLang(this.defaultLang);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.use(lang)));
    }
    use(lang = this.defaultLang) {
        lang = this.getAvailableLang(lang);
        return this.$translate.use(lang);
    }
    translate(query) {
        return _utils_observable_util__WEBPACK_IMPORTED_MODULE_3__["ObservableUtil"].take(this.translate$(query));
    }
    translate$(query) {
        return this.$translate.get(query);
    }
    getAvailableLang(lang = null) {
        return this.langs.includes(lang)
            ? lang
            : this.defaultLang;
    }
    switchNzLanguage() {
        switch (this.currentLang) {
            case 'ru':
                this.$i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["ru_RU"]);
                this.$i18n.setDateLocale(date_fns_locale__WEBPACK_IMPORTED_MODULE_6__["ru"]);
                break;
            case 'en':
                this.$i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["en_US"]);
                this.$i18n.setDateLocale(date_fns_locale__WEBPACK_IMPORTED_MODULE_6__["enUS"]);
                break;
        }
    }
}
LocalizationService.currentLang = null;
LocalizationService.ɵfac = function LocalizationService_Factory(t) { return new (t || LocalizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_tokens__WEBPACK_IMPORTED_MODULE_1__["APP_LANGS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_tokens__WEBPACK_IMPORTED_MODULE_1__["APP_DEFAULT_LANG"], 8)); };
LocalizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalizationService, factory: LocalizationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_core_tokens__WEBPACK_IMPORTED_MODULE_1__["APP_LANGS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_core_tokens__WEBPACK_IMPORTED_MODULE_1__["APP_DEFAULT_LANG"]]
            }] }]; }, null); })();


/***/ }),

/***/ "rIQ8":
/*!***********************************************************!*\
  !*** ./src/app/shared/dictionaries/dictionaries.utils.ts ***!
  \***********************************************************/
/*! exports provided: getDictionariesDbStoreNames, getDictionariesDbConfig, getDictionaryDbStoreName, getLoadableDictionaries, getLoadableDictionariesDbStoreNames, filterFloorMaps, filterFloorMapsByBuildingId, filterBuildingsByFloorMaps, sortItemsBySequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDictionariesDbStoreNames", function() { return getDictionariesDbStoreNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDictionariesDbConfig", function() { return getDictionariesDbConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDictionaryDbStoreName", function() { return getDictionaryDbStoreName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadableDictionaries", function() { return getLoadableDictionaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadableDictionariesDbStoreNames", function() { return getLoadableDictionariesDbStoreNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFloorMaps", function() { return filterFloorMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFloorMapsByBuildingId", function() { return filterFloorMapsByBuildingId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBuildingsByFloorMaps", function() { return filterBuildingsByFloorMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortItemsBySequence", function() { return sortItemsBySequence; });
/* harmony import */ var _shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.constants */ "60b9");

function getDictionariesDbStoreNames() {
    return _shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__["DICTIONARIES"].map(getDictionaryDbStoreName);
}
function getDictionariesDbConfig() {
    return getLoadableDictionariesDbStoreNames()
        .map(store => (Object.assign(Object.assign({}, _shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__["dbConfigItem"]), { store })))
        .concat(_shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__["dbCustomDictionariesConfig"]);
}
function getDictionaryDbStoreName(name) {
    return name.startsWith(_shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__["DICTIONARY_PREFIX_NAME"]) ? name : `${_shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__["DICTIONARY_PREFIX_NAME"]}${name}`;
}
function getLoadableDictionaries() {
    return _shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__["DICTIONARIES"].filter((name) => !_shared_dictionaries_dictionaries_constants__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_DICTIONARIES"].includes(name));
}
function getLoadableDictionariesDbStoreNames() {
    return getLoadableDictionaries().map(getDictionaryDbStoreName);
}
function filterFloorMaps(floorMaps, items) {
    return floorMaps.filter(({ id }) => items.some(({ floorMapId }) => floorMapId === id));
}
function filterFloorMapsByBuildingId(floorMaps, id) {
    return floorMaps.filter(({ buildingId }) => buildingId === id);
}
function filterBuildingsByFloorMaps(buildings, floorMaps) {
    return buildings.filter(({ id }) => floorMaps.some(({ buildingId }) => buildingId === id));
}
function sortItemsBySequence(items, fieldName, sequence) {
    if (!(sequence === null || sequence === void 0 ? void 0 : sequence.length) || !fieldName)
        return items;
    return items.sort((item1, item2) => sequence.indexOf(item1 === null || item1 === void 0 ? void 0 : item1[fieldName]) - sequence.indexOf(item2 === null || item2 === void 0 ? void 0 : item2[fieldName]));
}


/***/ }),

/***/ "rfmf":
/*!********************************************************************!*\
  !*** ./src/app/shared/dictionaries/constants/statuses.constant.ts ***!
  \********************************************************************/
/*! exports provided: STATUSES_DICT_NAME, STATUSES_URL_KEY, STATUSES_DEFAULT_VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES_DICT_NAME", function() { return STATUSES_DICT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES_URL_KEY", function() { return STATUSES_URL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES_DEFAULT_VALUES", function() { return STATUSES_DEFAULT_VALUES; });
const STATUSES_DICT_NAME = 'statuses';
const STATUSES_URL_KEY = 'statusesUrl';
const STATUSES_DEFAULT_VALUES = [
    {
        id: 0,
        lang: 'ru',
        default: true,
        statuses: [
            {
                code: 'NEW',
                name: 'Создана',
                color: '#FADB14',
                secondaryColor: '#ffffb8'
            },
            {
                code: 'APPROVED',
                name: 'Одобрена',
                color: '#FA8C16',
                secondaryColor: '#ffe7ba'
            },
            {
                code: 'CONFIRMED',
                name: 'Подтверждена',
                color: '#52c41a',
                secondaryColor: '#d9f7be'
            },
            {
                code: 'CLOSED',
                name: 'Завершена',
                color: '#1890FF',
                secondaryColor: '#bae7ff'
            },
            {
                code: 'CANCELED',
                name: 'Отменена',
                color: '#8c8c8c',
                secondaryColor: '#d9d9d9'
            },
            {
                code: 'DENIED',
                name: 'Отклонена',
                color: '#FF4D4F',
                secondaryColor: '#ffccc7'
            },
            {
                code: 'REFUSED',
                name: 'Отказ',
                color: '#FF4D4F',
                secondaryColor: '#ffccc7'
            },
            {
                code: 'UNDEFINED',
                name: 'Неизвестен',
                color: '#8c8c8c',
                secondaryColor: '#d9d9d9'
            }
        ]
    },
    {
        id: 1,
        lang: 'en',
        default: false,
        statuses: [
            {
                code: 'NEW',
                name: 'New',
                color: '#FADB14',
                secondaryColor: '#ffffb8'
            },
            {
                code: 'APPROVED',
                name: 'Approved',
                color: '#FA8C16',
                secondaryColor: '#ffe7ba'
            },
            {
                code: 'CONFIRMED',
                name: 'Confirmed',
                color: '#3FA80B',
                secondaryColor: '#d9f7be'
            },
            {
                code: 'CLOSED',
                name: 'Завершена',
                color: '#1890FF',
                secondaryColor: '#bae7ff'
            },
            {
                code: 'CANCELED',
                name: 'Отменена',
                color: '#8c8c8c',
                secondaryColor: '#d9d9d9'
            },
            {
                code: 'DENIED',
                name: 'Отклонена',
                color: '#FF4D4F',
                secondaryColor: '#ffccc7'
            },
            {
                code: 'REFUSED',
                name: 'Отказ',
                color: '#FF4D4F',
                secondaryColor: '#ffccc7'
            },
            {
                code: 'UNDEFINED',
                name: 'Неизвестен',
                color: '#8c8c8c',
                secondaryColor: '#d9d9d9'
            }
        ]
    }
];


/***/ }),

/***/ "rwhT":
/*!*********************************************!*\
  !*** ./src/app/shared/shared.dictionary.ts ***!
  \*********************************************/
/*! exports provided: SharedDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDictionary", function() { return SharedDictionary; });
var SharedDictionary;
(function (SharedDictionary) {
    SharedDictionary["AccessDenied"] = "Access denied";
    SharedDictionary["ActionCompleted"] = "Action completed";
    SharedDictionary["ActionCompletedSuccessfully"] = "Action completed successfully";
    SharedDictionary["ActionFailed"] = "Action failed";
    SharedDictionary["Add"] = "Add";
    SharedDictionary["AllDay"] = "All day";
    SharedDictionary["Attention"] = "Attention";
    SharedDictionary["Cancel"] = "Cancel";
    SharedDictionary["Close"] = "Close";
    SharedDictionary["ConnectionFailed"] = "Connection failed";
    SharedDictionary["Create"] = "Create";
    SharedDictionary["CriticalError"] = "Critical error";
    SharedDictionary["CriticalErrorOccurred"] = "Critical error occurred";
    SharedDictionary["Day"] = "Day";
    SharedDictionary["Delete"] = "Delete";
    SharedDictionary["EnterName"] = "Enter name";
    SharedDictionary["EnterYourName"] = "Enter your name";
    SharedDictionary["Error"] = "Error";
    SharedDictionary["ErrorLoading"] = "Error loading";
    SharedDictionary["Export"] = "Export";
    SharedDictionary["FailedDeleteItem"] = "Failed to delete item";
    SharedDictionary["LoadingPleaseWait"] = "Loading... Please wait";
    SharedDictionary["Month"] = "Month";
    SharedDictionary["NextDay"] = "Next day";
    SharedDictionary["NextMonth"] = "Next month";
    SharedDictionary["NextWeek"] = "Next week";
    SharedDictionary["No"] = "No";
    SharedDictionary["NotFound"] = "Not found";
    SharedDictionary["NoSelectableValues"] = "No selectable values";
    SharedDictionary["Save"] = "Save";
    SharedDictionary["SelectWorkplace"] = "Select workplace";
    SharedDictionary["ServerError"] = "Server error";
    SharedDictionary["PrevDay"] = "Previous day";
    SharedDictionary["PrevMonth"] = "Previous month";
    SharedDictionary["PrevWeek"] = "Previous week";
    SharedDictionary["ResultOfAction"] = "Result of action";
    SharedDictionary["SelectOffice"] = "Select office";
    SharedDictionary["Today"] = "Today";
    SharedDictionary["WaitPleaseResourcesLoading"] = "Wait, please. Resources are loading";
    SharedDictionary["Week"] = "Week";
    SharedDictionary["items"] = "items";
})(SharedDictionary || (SharedDictionary = {}));


/***/ }),

/***/ "s4sJ":
/*!**********************************************************!*\
  !*** ./src/app/shared/http/services/meta-api.service.ts ***!
  \**********************************************************/
/*! exports provided: MetaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaApiService", function() { return MetaApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/base/base.api */ "zYZC");
/* harmony import */ var _shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common/utils/reservations.util */ "xK1C");
/* harmony import */ var _core_services_localization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/localization.service */ "r8tS");







class MetaApiService extends _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"] {
    constructor(injector, $localization) {
        super(injector);
        this.injector = injector;
        this.$localization = $localization;
        this.$config
            .getOne$('metaUrl')
            .subscribe((metaUrl) => this._metaUrl = metaUrl);
    }
    getMeta(name, messages = {}) {
        return this.$localization.currentLang$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((lang) => this.$url.createUrl(this._metaUrl[name], { lang })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((url) => this.$http.get(url, {}, { headers: _shared_common_utils_reservations_util__WEBPACK_IMPORTED_MODULE_4__["HEADERS_META"] })), Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_1__["filterNoProgressHttpEvent"])(), this.$httpHelper.responseNotification(messages), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.processResponse));
    }
}
MetaApiService.ɵfac = function MetaApiService_Factory(t) { return new (t || MetaApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_localization_service__WEBPACK_IMPORTED_MODULE_5__["LocalizationService"])); };
MetaApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MetaApiService, factory: MetaApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _core_services_localization_service__WEBPACK_IMPORTED_MODULE_5__["LocalizationService"] }]; }, null); })();


/***/ }),

/***/ "sA3S":
/*!****************************************************!*\
  !*** ./src/app/core/services/condition.service.ts ***!
  \****************************************************/
/*! exports provided: ConditionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionService", function() { return ConditionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "bUwk");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_instanceOf_utilI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/instanceOf.utilI */ "CEEL");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url.service */ "Yrpq");








const EXPRESSION_FUNCTION_ARGS = [empty, equals, pluck];
const EXPRESSION_FUNCTION_ARGS_LIST = ['value', 'response', 'empty', 'equals', 'pluck'];
const OPERATORS = /(!==|===|!=|==|<=|>=|<|>|\+|-|\*\*|\*|\/|&&|\|\|)/g;
class ConditionService {
    constructor($http, $url) {
        this.$http = $http;
        this.$url = $url;
    }
    check(expression, data, defaultResult = false, value, preFlight = false) {
        try {
            return this.checkExpression(expression, data, defaultResult, value, preFlight);
        }
        catch (e) {
            return defaultResult;
        }
    }
    checkAsync(expression, data, url = null, defaultResult = false, value, preFlight = false) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.$url.createUrl(url, data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((_url) => !_url
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            : this.$http.get(_url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ success, data: _data }) => success ? _data : defaultResult))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => this.checkExpression(expression, data, defaultResult, value, preFlight, responseData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(defaultResult)));
    }
    checkExpression(expression, data, defaultResult, value, hasPreFlight = false, response = null) {
        const result = this.calcExpression(expression, data, value, response, defaultResult);
        const operands = expression.split(OPERATORS).map(o => o.trim());
        if (!hasPreFlight) {
            return result;
        }
        if (operands) {
            operands.forEach(operand => expression = expression.replace(operand, this.calcExpression(operand, data, value, response)));
        }
        return { result, preflight: expression };
    }
    calcExpression(expression, data, value, response = null, defaultResult = null) {
        const argsList = [...EXPRESSION_FUNCTION_ARGS_LIST, ...Object.keys(data), `return ${expression}`];
        const argsValues = [value, response, ...EXPRESSION_FUNCTION_ARGS, ...Object.values(data)];
        try {
            return (Function(...argsList))(...argsValues);
        }
        catch (e) {
            return defaultResult;
        }
    }
}
ConditionService.ɵfac = function ConditionService_Factory(t) { return new (t || ConditionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"])); };
ConditionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConditionService, factory: ConditionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConditionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
            }] }, { type: _url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"] }]; }, null); })();
function empty(value) {
    return Object(_utils_instanceOf_utilI__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(value);
}
function equals(a, b) {
    return a === b;
}
function pluck(obj, keys, ...anyKeys) {
    if (typeof obj !== 'object' || !obj) {
        return null;
    }
    if (typeof keys === 'string') {
        keys = anyKeys.concat(keys);
    }
    return keys.reduce((_obj, key) => _obj ? _obj[key] : null, obj);
}


/***/ }),

/***/ "sc19":
/*!***********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/layout/navigation/navigation.service */ "0Q2C");
/* harmony import */ var _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/global-loader.service */ "e5AP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");









function NavigationComponent_ng_container_4_ng_template_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r8.icon);
} }
function NavigationComponent_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_ng_container_4_ng_template_1_i_1_Template, 1, 1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r8.title)("routerLink", item_r8.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.title);
} }
function NavigationComponent_ng_container_4_ng_template_3_li_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} if (rf & 2) {
    const children_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", children_r13.icon);
} }
const _c0 = function () { return {}; };
function NavigationComponent_ng_container_4_ng_template_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_ng_container_4_ng_template_3_li_2_i_1_Template, 1, 1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const children_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", children_r13.url)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", children_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", children_r13.title, " ");
} }
function NavigationComponent_ng_container_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_ng_container_4_ng_template_3_li_2_Template, 3, 5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", item_r11.title)("nzIcon", item_r11.icon)("title", item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.children);
} }
function NavigationComponent_ng_container_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { item: a0 }; };
function NavigationComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_ng_container_4_ng_template_1_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationComponent_ng_container_4_ng_template_3_Template, 3, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavigationComponent_ng_container_4_ng_container_5_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (item_r2.children == null ? null : item_r2.children.length) > 0 ? _r5 : _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r2));
} }
function NavigationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-spin", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "d-none": a0 }; };
class NavigationComponent {
    constructor($navigation, $loader) {
        this.$navigation = $navigation;
        this.$loader = $loader;
        this.mode = 'inline';
        this.items = [];
    }
    ngOnChanges(changes) {
        if (changes && changes.items && changes.items.currentValue) {
            const currentItems = changes.items.currentValue;
            this.items = currentItems.filter((item) => !item.showOnlyOnMobile);
        }
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_2__["GlobalLoaderService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { mode: "mode", items: "items" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 14, consts: [[3, "ngClass"], ["nz-menu", "", 1, "navigation", 3, "nzMode", "nzInlineIndent", "nzInlineCollapsed"], [4, "ngFor", "ngForOf"], ["class", "p-30", 4, "ngIf"], ["itemTpl", ""], ["subItemTpl", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-menu-item", "", 1, "navigation__item", 3, "title", "routerLink"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-submenu", "", 1, "navigation__sub-item", 3, "nzTitle", "nzIcon", "title"], ["nz-menu-item", "", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "routerLink", "queryParams"], [1, "p-30"], ["nzSimple", "", "nzTip", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438..."]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavigationComponent_ng_container_4_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavigationComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.$loader.menuLoading$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", ctx.mode)("nzInlineIndent", 26)("nzInlineCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx.$navigation.collapse));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, ctx.$loader.menuLoading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzSubMenuComponent"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".ant-layout-sider-trigger {\n  border-top: 1px solid #f0f0f0;\n}\n  .ant-menu-inline,   .ant-menu-vertical,   .ant-menu-vertical-left {\n  border-right: 0;\n}\n  .ant-menu-inline-collapsed {\n  border-right: 1px solid #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUFDN0Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDO0FBYkQ7RUFFSSw2QkFBQTtBQWNKO0FBaEJBOzs7RUFLSSxlQUFBO0FBZ0JKO0FBckJBO0VBUUksK0JBQUE7QUFnQkoiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9vdmVycmlkZVwiO1xuLm5hdmlnYXRpb24ge1xuICAmX19pdGVtIHt9XG4gICZfX3N1Yi1pdGVtIHt9XG59XG46Om5nLWRlZXAge1xuICAuYW50LWxheW91dC1zaWRlci10cmlnZ2VyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgQGdyYXktNDtcbiAgfVxuICAuYW50LW1lbnUtaW5saW5lLCAuYW50LW1lbnUtdmVydGljYWwsIC5hbnQtbWVudS12ZXJ0aWNhbC1sZWZ0IHtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gIH1cbiAgLmFudC1tZW51LWlubGluZS1jb2xsYXBzZWQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIEBncmF5LTQ7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.less'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _app_layout_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _core_services_global_loader_service__WEBPACK_IMPORTED_MODULE_2__["GlobalLoaderService"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tPSh":
/*!***********************************************!*\
  !*** ./src/app/core/utils/observable.util.ts ***!
  \***********************************************/
/*! exports provided: ObservableUtil, delayWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableUtil", function() { return ObservableUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayWhen", function() { return delayWhen; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


class ObservableUtil {
    static complete(...subjects) {
        if (typeof subjects === 'object' && !Array.isArray(subjects)) {
            subjects = Object.values(subjects);
        }
        subjects.forEach(subject => subject.complete());
    }
    static take(observable) {
        let value = null;
        observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((_value) => value = _value);
        return value;
    }
}
function delayWhen(trueDelay = 5000, falseDelay = 0) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((value) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(value ? trueDelay : falseDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => value)));
}


/***/ }),

/***/ "taEc":
/*!********************************************************!*\
  !*** ./src/app/core/directives/condition.directive.ts ***!
  \********************************************************/
/*! exports provided: ConditionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionDirective", function() { return ConditionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_condition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/condition.service */ "sA3S");



class ConditionDirective {
    constructor($condition, _templateRef, _viewContainer) {
        this.$condition = $condition;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
        this._type = 'disable';
        this._expression = 'false';
        this._data = {};
        this._ready = false;
        this._viewRef = null;
        this._altTemplateRef = null;
    }
    set appConditionFor(condition) {
        if (typeof condition === 'object') {
            this._type = condition.type;
            this._expression = String(condition.expression);
            this._url = condition.url;
        }
        else {
            this._expression = String(condition);
        }
        this.checkCondition();
    }
    set appConditionType(type) {
        this._type = type;
        this.checkCondition();
    }
    set appConditionUrl(url) {
        this._url = url;
        this.checkCondition();
    }
    set appConditionData(data) {
        this._data = data;
        this.checkCondition();
    }
    set appConditionElse(altTemplateRef) {
        this._altTemplateRef = altTemplateRef;
    }
    set $implicit($implicit) {
        this._context.$implicit = $implicit;
        this.updateView();
    }
    ngOnInit() {
        this._context = {
            $implicit: this._type === 'visible'
        };
        this._ready = true;
        this.checkCondition();
    }
    checkCondition() {
        if (!this._ready) {
            return;
        }
        if (this._url) {
            this.checkConditionAsync();
            return;
        }
        this.$implicit = this.$condition.check(this._expression, this._data);
    }
    checkConditionAsync() {
        this.$condition.checkAsync(this._expression, this._data, this._url).subscribe(result => this.$implicit = result);
    }
    updateView() {
        if (this._type !== 'visible') {
            if (!this._viewRef) {
                this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef, this._context);
            }
            return;
        }
        if (this._context.$implicit && !this._viewRef) {
            this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef, this._context);
            return;
        }
        if (!this._context.$implicit && this._altTemplateRef) {
            this._viewRef = this._viewContainer.createEmbeddedView(this._altTemplateRef, this._context);
            return;
        }
        if (!this._context.$implicit && !!this._viewRef) {
            this._viewRef = null;
            this._viewContainer.clear();
        }
    }
}
ConditionDirective.ɵfac = function ConditionDirective_Factory(t) { return new (t || ConditionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_condition_service__WEBPACK_IMPORTED_MODULE_1__["ConditionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ConditionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ConditionDirective, selectors: [["", "appCondition", ""]], inputs: { appConditionFor: "appConditionFor", appConditionType: "appConditionType", appConditionUrl: "appConditionUrl", appConditionData: "appConditionData", appConditionElse: "appConditionElse" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConditionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCondition]'
            }]
    }], function () { return [{ type: _core_services_condition_service__WEBPACK_IMPORTED_MODULE_1__["ConditionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { appConditionFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appConditionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appConditionUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appConditionData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appConditionElse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tuJx":
/*!************************************************************!*\
  !*** ./src/app/composite/user-card/user-card.component.ts ***!
  \************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _composite_user_card_user_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @composite/user-card/user-card.service */ "VnTQ");
/* harmony import */ var _core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/decorators/subscriptions.decorator */ "jIIN");
/* harmony import */ var _base_card_card_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @base/card/card.model */ "12Dr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/messages.service */ "mliB");
/* harmony import */ var _base_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base/card/card.component */ "iYEa");
/* harmony import */ var _base_card_card_form_control_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../base/card/card-form-control.directive */ "VMbU");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/images/pipes/image-blob.pipe */ "9yuT");

















function UserCardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.userCard == null ? null : ctx_r0.userCard.form.controls.mainPhone);
} }
class UserCardComponent {
    constructor($service, $userService, $messages, cdr) {
        this.$service = $service;
        this.$userService = $userService;
        this.$messages = $messages;
        this.cdr = cdr;
        this.userCard = this.$service.default();
        this.editModeEnabled = false;
    }
    set userId(value) {
        this._userId = value;
        if (value) {
            this.$service
                .userData(value)
                .then((_user) => {
                this.userCard = this.$service.convertUserToCard();
            })
                .catch(() => {
                this.userCard = this.$service.default();
                this.$messages.error(`Пользователь ${value} не найден`);
            })
                .finally(() => this.cdr.markForCheck());
        }
    }
    ngOnInit() {
        this.sub = this.$service.user$.subscribe((value) => {
            if (value) {
                this.userCard = this.$service.convertUserToCard();
                this.cdr.markForCheck();
            }
        });
    }
    onEditModeChange(cardEditModeEvent) {
        switch (cardEditModeEvent) {
            case _base_card_card_model__WEBPACK_IMPORTED_MODULE_4__["CardEditModeEvent"].Enable:
                this.editModeEnabled = true;
                break;
            case _base_card_card_model__WEBPACK_IMPORTED_MODULE_4__["CardEditModeEvent"].Save:
                this.saveEditState();
                break;
            case _base_card_card_model__WEBPACK_IMPORTED_MODULE_4__["CardEditModeEvent"].Cancel:
                this.cancelEditMode();
                break;
            default:
                break;
        }
    }
    get showEditControls() {
        return this.$userService.info.id === this._userId;
    }
    saveEditState() {
        this.editModeEnabled = false;
        this.sub = this.$service
            .updateUserData(this._userId, this.userCard.form.value)
            .subscribe();
    }
    cancelEditMode() {
        this.editModeEnabled = false;
        this.userCard.form.reset(this.$service.user);
    }
    ngOnDestroy() { }
}
UserCardComponent.ɵfac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_composite_user_card_user_card_service__WEBPACK_IMPORTED_MODULE_2__["UserCardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
UserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserCardComponent, selectors: [["app-user-card"]], inputs: { userId: "userId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_composite_user_card_user_card_service__WEBPACK_IMPORTED_MODULE_2__["UserCardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], decls: 7, vars: 19, consts: [["mask", "", 1, "user-card", 3, "type", "title", "image", "width", "descriptionList", "tags", "cardForm", "showEditControls", "editModeEnabled", "loading", "editModeChange"], ["appCardFormControl", "phoneControl"], ["nz-input", "", "mask", "+0 (000) 000-00-00", "placeholder", "+1 (234) 567-89-00", 1, "ant-input", 3, "formControl"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("editModeChange", function UserCardComponent_Template_app_card_editModeChange_0_listener($event) { return ctx.onEditModeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "imageBlob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserCardComponent_ng_template_5_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "flex")("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 11, ctx.userCard == null ? null : ctx.userCard.title))("image", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 15, ctx.userCard == null ? null : ctx.userCard.image)))("width", ctx.userCard == null ? null : ctx.userCard.width)("descriptionList", ctx.userCard == null ? null : ctx.userCard.descriptionList)("tags", ctx.userCard == null ? null : ctx.userCard.tags)("cardForm", ctx.userCard == null ? null : ctx.userCard.form)("showEditControls", ctx.showEditControls)("editModeEnabled", ctx.editModeEnabled)("loading", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 17, ctx.$service.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userCard == null ? null : ctx.userCard.image, "\n");
    } }, directives: [_base_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _base_card_card_form_control_directive__WEBPACK_IMPORTED_MODULE_9__["CardFormControlDirective"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _shared_images_pipes_image_blob_pipe__WEBPACK_IMPORTED_MODULE_13__["ImageBlobPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.user-card[_ngcontent-%COMP%]     .card__title {\n  text-align: center;\n}\n.user-card[_ngcontent-%COMP%]     .ant-card {\n  border-radius: 5px;\n}\n.user-card[_ngcontent-%COMP%]     .ant-card-cover {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n}\n.user-card[_ngcontent-%COMP%]     .ant-card-cover img {\n  border-radius: 50%;\n  width: 72px;\n  object-fit: cover;\n  height: 72px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNBO0VBR00sa0JBQUE7QUFETjtBQUZBO0VBTU0sa0JBQUE7QUFETjtBQUxBO0VBU00sYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRE47QUFYQTtFQWNRLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFSIiwiZmlsZSI6InVzZXItY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlci1jYXJkIHtcbiAgOjpuZy1kZWVwIHtcbiAgICAuY2FyZF9fdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYW50LWNhcmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuYW50LWNhcmQtY292ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDcycHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_decorators_subscriptions_decorator__WEBPACK_IMPORTED_MODULE_3__["Subscriptions"])()
], UserCardComponent.prototype, "sub", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-card',
                templateUrl: './user-card.component.html',
                styleUrls: ['./user-card.component.less'],
                providers: [_composite_user_card_user_card_service__WEBPACK_IMPORTED_MODULE_2__["UserCardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _composite_user_card_user_card_service__WEBPACK_IMPORTED_MODULE_2__["UserCardService"] }, { type: _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_7__["MessagesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { sub: [], userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "ty2q":
/*!*************************************************************!*\
  !*** ./src/app/shared/global-search/global-search.utils.ts ***!
  \*************************************************************/
/*! exports provided: ITEMS_ROUTES, filterDictionaryItems, mapItemsToFloorMaps, mapItemsToBuildings, mapSearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_ROUTES", function() { return ITEMS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDictionaryItems", function() { return filterDictionaryItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapItemsToFloorMaps", function() { return mapItemsToFloorMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapItemsToBuildings", function() { return mapItemsToBuildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSearchResult", function() { return mapSearchResult; });
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");

const TAG_REGEXP = /<[^>]*>/g;
const ITEMS_ROUTES = {
    user: ['team', 'profiles'],
    customObject: ['office'],
    workplace: ['office'],
    room: ['office'],
    parkingLot: ['office']
};
const FILTER_FIELDS = {
    user: ['name', 'mail', 'mainPhone', 'phones'],
    customObject: ['name', 'description'],
    workplace: ['name', 'uniqueCode'],
    room: ['name', 'description'],
    parkingLot: ['name', 'description'],
};
const MAP_DATA_FIELDS = {
    user: ['name', 'mail', 'mainPhone', 'phones'],
    customObject: ['name', 'description', 'floor', 'buildingId'],
    workplace: ['name', 'building', 'floor', 'buildingId'],
    room: ['name', 'description', 'building', 'floor', 'buildingId'],
    parkingLot: ['name', 'description', 'building', 'floor', 'buildingId'],
};
const DEFAULT_IMAGE = {
    user: './assets/images/avatar-def.png',
    workplace: './assets/images/workplace-card-default.jpg',
    room: './assets/images/workplace-card-default.jpg',
    customObject: './assets/icons/printer.svg',
    parkingLot: './assets/icons/parkinglots.svg',
};
const IMAGE_FIELDS = {
    user: 'avatarImageUrl',
    workplace: 'no-image',
    room: 'avatarImageUrl',
    customObject: 'imageNormalUrl',
    parkingLot: 'no-image',
};
function filterDictionaryItems(items, query, type) {
    return items.filter(item => FILTER_FIELDS[type].some(field => { var _a; return (_a = item[field]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(query); }));
}
function mapItemsToFloorMaps(items, floorMaps) {
    return items.map(item => {
        const floorMap = floorMaps.find(({ id }) => item.floorMapId === id);
        if (floorMap) {
            Object.assign(item, { floor: floorMap.name || '', buildingId: floorMap.buildingId });
        }
        return item;
    });
}
function mapItemsToBuildings(items, buildings) {
    return items
        .filter(({ buildingId }) => !Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(buildingId))
        .map(item => {
        const building = buildings.find(({ id }) => item.floorMapId === id);
        if (building) {
            Object.assign(item, { building: building.name });
        }
        return item;
    });
}
function mapSearchResult(items, title, type) {
    return {
        type,
        title,
        items: items.map((item) => ({
            $implicit: type,
            title: item.name,
            img: item[IMAGE_FIELDS[type]] || DEFAULT_IMAGE[type],
            data: reduceItemData(item, MAP_DATA_FIELDS[type])
        }))
    };
    function reduceItemData(item, fields) {
        return fields
            .map(key => {
            const value = typeof item[key] === 'string'
                ? item[key].replace(TAG_REGEXP, '')
                : item[key];
            return [key, value];
        })
            .reduce((data, [key, value]) => (Object.assign(data, { [key]: value })), { id: item.id });
    }
}


/***/ }),

/***/ "tyjl":
/*!******************************************!*\
  !*** ./src/app/core/pipes/array.pipe.ts ***!
  \******************************************/
/*! exports provided: ArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayPipe", function() { return ArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ArrayPipe {
    static push(arr, value) {
        arr.push(value);
        return arr;
    }
    transform(arr, operation, value) {
        if (!arr)
            return null;
        switch (operation) {
            case 'push':
                return ArrayPipe.push(arr, value);
            default:
                return arr;
        }
    }
}
ArrayPipe.ɵfac = function ArrayPipe_Factory(t) { return new (t || ArrayPipe)(); };
ArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "array", type: ArrayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'array'
            }]
    }], null, null); })();


/***/ }),

/***/ "u962":
/*!*************************************************************!*\
  !*** ./src/app/base/filters/utils/filter-date.constants.ts ***!
  \*************************************************************/
/*! exports provided: HOURS, MINUTES, WORK_HOURS, DEFAULT_TIME_PICKER_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS", function() { return HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTES", function() { return MINUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORK_HOURS", function() { return WORK_HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIME_PICKER_OPTIONS", function() { return DEFAULT_TIME_PICKER_OPTIONS; });
const HOURS = Array.from(Array(24)).map((_, index) => index);
const MINUTES = Array.from(Array(60)).map((_, index) => index);
const WORK_HOURS = [7, 19];
const DEFAULT_TIME_PICKER_OPTIONS = {
    nzDefaultOpenValue: new Date(),
    nzFormat: 'HH:mm',
    nzMinuteStep: 5,
    nzHideDisabledOptions: false,
};


/***/ }),

/***/ "uA+i":
/*!*******************************************!*\
  !*** ./src/app/core/pipes/object.pipe.ts ***!
  \*******************************************/
/*! exports provided: ObjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectPipe", function() { return ObjectPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ObjectPipe {
    transform(value, ...args) {
        return null;
    }
}
ObjectPipe.ɵfac = function ObjectPipe_Factory(t) { return new (t || ObjectPipe)(); };
ObjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "object", type: ObjectPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'object'
            }]
    }], null, null); })();


/***/ }),

/***/ "v4UZ":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/dictionaries/services/dictionaries-matchers.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DictionariesMatchersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionariesMatchersService", function() { return DictionariesMatchersService; });
class DictionariesMatchersService {
    static alreadyMatcherFactory() {
        return (url) => DictionariesMatchersService._already
            ? ({ consumed: url })
            : null;
    }
    static notAlreadyMatcherFactory() {
        return (url) => !DictionariesMatchersService._already
            ? ({ consumed: url })
            : null;
    }
    static set already(already) {
        this._already = already;
    }
}
DictionariesMatchersService._already = false;


/***/ }),

/***/ "w9E8":
/*!***********************************************************************!*\
  !*** ./src/app/base/reservation-by-qr/reservation-by-qr.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReservationByQRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationByQRComponent", function() { return ReservationByQRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/library */ "Ik8O");
/* harmony import */ var _reservation_by_qr_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-by-qr.util */ "GlYv");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _reservation_by_qr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservation-by-qr.service */ "+9/e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zxing/ngx-scanner */ "IyRd");
/* harmony import */ var _base_filters_filter_date_time_filter_date_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @base/filters/filter-date-time/filter-date-time.component */ "MJ0a");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");













function ReservationByQRComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.gotQrResult ? "\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0441\u0442\u0430" : "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434", "\n");
} }
function ReservationByQRComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "zxing-scanner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deviceChange", function ReservationByQRComponent_div_1_Template_zxing_scanner_deviceChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.currentDevice = $event; })("scanSuccess", function ReservationByQRComponent_div_1_Template_zxing_scanner_scanSuccess_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onCodeResult($event); })("permissionResponse", function ReservationByQRComponent_div_1_Template_zxing_scanner_permissionResponse_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onHasPermission($event); })("camerasFound", function ReservationByQRComponent_div_1_Template_zxing_scanner_camerasFound_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onCamerasFound($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.hasDevices)("device", ctx_r1.currentDevice)("formats", ctx_r1.formatsEnabled);
} }
function ReservationByQRComponent_div_2_app_filter_date_time_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-date-time", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationByQRComponent_div_2_app_filter_date_time_6_Template_app_filter_date_time_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.reservationDateRange.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.reservationDateRange.value)("layout", "vertical")("workHours", ctx_r8.reservationDateRange.workHours)("autoUpdateDateTo", true)("autoUpdateDateToFullDay", true);
} }
function ReservationByQRComponent_div_2_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservationByQRComponent_div_2_div_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.yesAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDanger", ctx_r12.canCancelReservation);
} }
function ReservationByQRComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReservationByQRComponent_div_2_div_7_button_1_Template, 2, 1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservationByQRComponent_div_2_div_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.destroyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.reservationDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.reservationDisabled ? "\u041E\u043A" : "\u041D\u0435\u0442", " ");
} }
function ReservationByQRComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReservationByQRComponent_div_2_app_filter_date_time_6_Template, 1, 5, "app-filter-date-time", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReservationByQRComponent_div_2_div_7_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.actionMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.placeInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.canCreateReservation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.gotQrResult);
} }
class ReservationByQRComponent {
    constructor(modal, $modalService, $service) {
        this.modal = modal;
        this.$modalService = $modalService;
        this.$service = $service;
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].DATA_MATRIX,
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].QR_CODE,
        ];
        this.gotQrResult = false;
    }
    ngOnInit() {
        this.reservationDateRange = this.$service.reservationDateRange;
        console.log("this.reservationDateRange: ", this.reservationDateRange);
    }
    get placeInfo() {
        return this.floorName + ', ' + this.placeName;
    }
    get floorName() {
        var _a, _b, _c, _d;
        return ((_b = (_a = this.reservation) === null || _a === void 0 ? void 0 : _a.floor) === null || _b === void 0 ? void 0 : _b.name) ? (_d = (_c = this.reservation) === null || _c === void 0 ? void 0 : _c.floor) === null || _d === void 0 ? void 0 : _d.name : '';
    }
    get placeName() {
        var _a, _b, _c, _d;
        return ((_b = (_a = this.reservation) === null || _a === void 0 ? void 0 : _a.objectData) === null || _b === void 0 ? void 0 : _b.name) ? (_d = (_c = this.reservation) === null || _c === void 0 ? void 0 : _c.objectData) === null || _d === void 0 ? void 0 : _d.name : '';
    }
    get reservationType() {
        var _a;
        return (_a = this.reservation) === null || _a === void 0 ? void 0 : _a.objectType;
    }
    get actionType() {
        var _a;
        return (_a = this.reservation) === null || _a === void 0 ? void 0 : _a.actionType;
    }
    get placeId() {
        var _a, _b;
        return (_b = (_a = this.reservation) === null || _a === void 0 ? void 0 : _a.objectData) === null || _b === void 0 ? void 0 : _b.id;
    }
    get reservationId() {
        return Object(_reservation_by_qr_util__WEBPACK_IMPORTED_MODULE_2__["getReservationId"])(this.reservation);
    }
    get actionMessage() {
        switch (this.actionType) {
            case 'WORKPLACE_RESERVATION_CANCEL':
                return this.reservationCancelMessage;
            case 'WORKPLACE_RESERVATION_CONFIRM':
                return this.reservationConfirmMessage;
            case 'WORKPLACE_RESERVATION_ALREADY_EXISTS':
                return this.reservationAlreadyExistsMessage;
            case 'WORKPLACE_DISABLED_BY_LABEL_PROPERTIES':
                return this.reservationDisabledByLabelMessage;
            case 'WORKPLACE_DISABLED_BY_SOCIAL_DISTANCE':
                return this.reservationDisabledBySocialDistanceMessage;
            case 'APPOINTMENT_VIEW':
            case 'WORKPLACE_VIEW':
            case 'WORKPLACE_RESERVATION_VIEW':
                return this.reservationViewMessage;
            case 'APPOINTMENT_CREATE':
            case 'WORKPLACE_RESERVATION_CREATE':
            default:
                return this.reservationCreateMessage;
        }
    }
    get reservationCreateMessage() {
        switch (this.reservationType) {
            case 'WORKPLACE':
                return 'Забронировать рабочее место';
            case 'APPOINTMENT':
                return 'Забронировать переговорная комната';
            case 'PARKING_LOT':
                return 'Забронировать парковочное место';
            default:
                return '';
        }
    }
    get reservationCancelMessage() {
        switch (this.reservationType) {
            case 'WORKPLACE':
                return 'Отменить бронирование рабочего места';
            case 'APPOINTMENT':
                return 'Отменить бронирование переговорной комнаты';
            case 'PARKING_LOT':
                return 'Отменить бронирование парковочного места';
            default:
                return '';
        }
    }
    get reservationConfirmMessage() {
        switch (this.reservationType) {
            case 'WORKPLACE':
                return 'Подтвердить бронирование рабочего места';
            case 'APPOINTMENT':
                return 'Подтвердить бронирование переговорной комнаты';
            case 'PARKING_LOT':
                return 'Подтвердить бронирование парковочного места';
            default:
                return '';
        }
    }
    get reservationAlreadyExistsMessage() {
        switch (this.reservationType) {
            case 'WORKPLACE':
                return 'Вы уже забронировали рабочее место';
            case 'APPOINTMENT':
                return 'Вы уже забронировали переговорная комната';
            case 'PARKING_LOT':
                return 'Вы уже забронировали парковочное место';
            default:
                return '';
        }
    }
    get reservationDisabledByLabelMessage() {
        switch (this.reservationType) {
            case 'WORKPLACE':
                return 'Рабочее место недоступно';
            case 'APPOINTMENT':
                return 'Переговорная комната недоступно';
            case 'PARKING_LOT':
                return 'Парковочное место недоступно';
            default:
                return '';
        }
    }
    get reservationDisabledBySocialDistanceMessage() {
        switch (this.reservationType) {
            case 'WORKPLACE':
                return 'Рабочее место недоступно из-за нарушения социалной дистанции';
            case 'APPOINTMENT':
                return 'Переговорная комната недоступно из-за нарушения социалной дистанции';
            case 'PARKING_LOT':
                return 'Парковочное место недоступно из-за нарушения социалной дистанции';
            default:
                return '';
        }
    }
    get reservationViewMessage() {
        switch (this.reservationType) {
            case 'WORKPLACE':
                return 'Рабочее место';
            case 'APPOINTMENT':
                return 'Переговорная комната';
            case 'PARKING_LOT':
                return 'Парковочное место';
            default:
                return '';
        }
    }
    get canCreateReservation() {
        return (this.actionType === 'APPOINTMENT_CREATE' ||
            this.actionType === 'WORKPLACE_RESERVATION_CREATE');
    }
    get canCancelReservation() {
        return this.actionType === 'WORKPLACE_RESERVATION_CANCEL';
    }
    get canConfirmReservation() {
        return this.actionType === 'WORKPLACE_RESERVATION_CONFIRM';
    }
    get reservationAlreadyExists() {
        return this.actionType === 'WORKPLACE_RESERVATION_ALREADY_EXISTS';
    }
    get reservationDisabled() {
        return (this.actionType === 'WORKPLACE_RESERVATION_ALREADY_EXISTS' ||
            this.actionType === 'WORKPLACE_DISABLED_BY_LABEL_PROPERTIES' ||
            this.actionType === 'WORKPLACE_DISABLED_BY_SOCIAL_DISTANCE' ||
            this.actionType === 'APPOINTMENT_VIEW' ||
            this.actionType === 'WORKPLACE_RESERVATION_VIEW' ||
            this.actionType === 'WORKPLACE_VIEW');
    }
    clearResult() {
        this.reservation = undefined;
    }
    onCodeResult(qrCode) {
        this.$service.getReservationByQR(qrCode).subscribe((reservation) => {
            this.reservation = reservation;
            this.gotQrResult = true;
        });
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
        this.onDeviceSelectChange();
    }
    onDeviceSelectChange() {
        const device = this.availableDevices[0];
        this.currentDevice = device || null;
    }
    onHasPermission(has) {
        this.hasPermission = has;
    }
    yesAction() {
        switch (this.actionType) {
            case 'WORKPLACE_RESERVATION_CANCEL':
                this.cancelReservation();
                break;
            case 'WORKPLACE_RESERVATION_CONFIRM':
                this.confirmReservation();
                break;
            case 'APPOINTMENT_CREATE':
            case 'WORKPLACE_RESERVATION_CREATE':
                this.reservationPlace();
                break;
            default:
                this.destroyModal();
                break;
        }
    }
    reservationPlace() {
        var _a;
        this.$service
            .reservationPlaceByType(this.reservationType, this.placeId, (_a = this.reservationDateRange) === null || _a === void 0 ? void 0 : _a.value)
            .subscribe((reservations) => {
            this.$modalService.closeAll();
            const main = reservations.find((r) => r.meta.recordCode === 'main');
            if (reservations.length === 1) {
                if (main.meta.isOk) {
                    this.$modalService.success({
                        nzTitle: 'Успешно забронировано',
                        nzContent: main.meta.message,
                    });
                }
                else {
                    this.$modalService.error({
                        nzTitle: 'Не удалось забронировать',
                        nzContent: main.meta.message,
                    });
                }
            }
        });
    }
    cancelReservation() {
        this.$service
            .cancelReservationByType(this.reservationType, this.reservationId)
            .subscribe((success) => {
            this.$modalService.closeAll();
            if (success) {
                this.$modalService.success({
                    nzTitle: 'Бронирование успешно отменено',
                });
            }
            else {
                this.$modalService.error({
                    nzTitle: 'Не удалось отменить бронирование',
                });
            }
        });
    }
    confirmReservation() {
        this.$service
            .confirmReservationByType(this.reservationType, this.reservationId)
            .subscribe((success) => {
            this.$modalService.closeAll();
            if (success) {
                this.$modalService.success({
                    nzTitle: 'Бронирование успешно подтвержена',
                });
            }
            else {
                this.$modalService.error({
                    nzTitle: 'Не удалось выполнить подтверждение бронирования',
                });
            }
        });
    }
    destroyModal() {
        this.modal.destroy();
    }
}
ReservationByQRComponent.ɵfac = function ReservationByQRComponent_Factory(t) { return new (t || ReservationByQRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reservation_by_qr_service__WEBPACK_IMPORTED_MODULE_4__["ReservationByQRService"])); };
ReservationByQRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReservationByQRComponent, selectors: [["app-reservation-by-qr"]], decls: 3, vars: 2, consts: [[4, "nzModalTitle"], ["class", "content", 4, "ngIf"], [1, "content"], [1, "qr-scanner", 3, "hidden", "device", "formats", "deviceChange", "scanSuccess", "permissionResponse", "camerasFound"], [1, "element"], [1, "place-info"], [3, "ngModel", "layout", "workHours", "autoUpdateDateTo", "autoUpdateDateToFullDay", "ngModelChange", 4, "ngIf"], ["class", "actions", 4, "ngIf"], [3, "ngModel", "layout", "workHours", "autoUpdateDateTo", "autoUpdateDateToFullDay", "ngModelChange"], [1, "actions"], ["nz-button", "", "nzType", "primary", 3, "nzDanger", "click", 4, "ngIf"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzDanger", "click"]], template: function ReservationByQRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReservationByQRComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReservationByQRComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReservationByQRComponent_div_2_Template, 8, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gotQrResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gotQrResult);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalTitleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_6__["ZXingScannerComponent"], _base_filters_filter_date_time_filter_date_time_component__WEBPACK_IMPORTED_MODULE_7__["FilterDateTimeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"]], styles: [".content[_ngcontent-%COMP%] {\n  height: calc(100vh - 55px);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-bottom: 30px;\n}\n.place-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin: 0 auto;\n  height: 100%;\n  padding: 10px;\n}\n.place-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n}\nzxing-scanner[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  max-height: 100%;\n  height: 100%;\n}\n.element[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  clip-path: polygon(0% 0%, 0% 100%, 50px 100%, 50px calc(50vh - calc(100vw - 2 * 50px) / 2), calc(100vw - 50px) calc(50vh - calc(100vw - 2 * 50px) / 2), calc(100vw - 50px) calc(50vh + calc(100vw - 2 * 50px) / 2), 50px calc(50vh + calc(100vw - 2 * 50px) / 2), 50px 100%, 100% 100%, 100% 0%);\n  -webkit-clip-path: polygon(0% 0%, 0% 100%, 50px 100%, 50px calc(50vh - calc(100vw - 2 * 50px) / 2), calc(100vw - 50px) calc(50vh - calc(100vw - 2 * 50px) / 2), calc(100vw - 50px) calc(50vh + calc(100vw - 2 * 50px) / 2), 50px calc(50vh + calc(100vw - 2 * 50px) / 2), 50px 100%, 100% 100%, 100% 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLWJ5LXFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFGO0FBUEE7RUFVSSxZQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUZGO0FBRkE7RUFPSSxZQUFBO0FBRko7QUFNQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSkY7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFFQSxnU0FBQTtFQWFBLHdTQUFBO0FBeEJGIiwiZmlsZSI6InJlc2VydmF0aW9uLWJ5LXFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ucGxhY2UtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgcHtcbiAgICBjb2xvcjogYmxhY2tcbiAgfVxufVxuXG4uYWN0aW9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuXG4gIGJ1dHRvbntcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cblxuenhpbmctc2Nhbm5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQGE6IDUwcHg7XG5Ad2lkdGhCb3g6IGNhbGMoMTAwdncgLSAyICogQGEpO1xuQGI6IGNhbGMoNTB2aCAtIEB3aWR0aEJveCAvIDIpO1xuQGM6IGNhbGMoNTB2aCArIEB3aWR0aEJveCAvIDIpO1xuQGQ6IGNhbGMoMTAwdncgLSBAYSk7XG5cbi5lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcblxuICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgMCUgMCUsXG4gICAgMCUgMTAwJSxcbiAgICBAYSAxMDAlLFxuICAgIEBhIEBiLFxuICAgIEBkIEBiLFxuICAgIEBkIEBjLFxuICAgIEBhIEBjLFxuICAgIEBhIDEwMCUsXG4gICAgMTAwJSAxMDAlLFxuICAgIDEwMCUgMCVcbiAgKTtcblxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcbiAgICAwJSAwJSxcbiAgICAwJSAxMDAlLFxuICAgIEBhIDEwMCUsXG4gICAgQGEgQGIsXG4gICAgQGQgQGIsXG4gICAgQGQgQGMsXG4gICAgQGEgQGMsXG4gICAgQGEgMTAwJSxcbiAgICAxMDAlIDEwMCUsXG4gICAgMTAwJSAwJVxuICApO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationByQRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reservation-by-qr',
                templateUrl: './reservation-by-qr.component.html',
                styleUrls: ['./reservation-by-qr.component.less'],
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }, { type: _reservation_by_qr_service__WEBPACK_IMPORTED_MODULE_4__["ReservationByQRService"] }]; }, null); })();


/***/ }),

/***/ "wcqn":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/header/components/header-search/header-search.service.ts ***!
  \*********************************************************************************/
/*! exports provided: HeaderSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchService", function() { return HeaderSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_utils_common_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/common.util */ "ewFJ");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/navigation.service */ "CWrn");
/* harmony import */ var _shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/global-search/global-search.service */ "AdiC");







class HeaderSearchService {
    constructor($navigate, $globalSearch) {
        this.$navigate = $navigate;
        this.$globalSearch = $globalSearch;
    }
    getQuery$({ nativeElement }) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => nativeElement.value.trim().toLocaleLowerCase()));
    }
    getResultsByQuery$(query) {
        return Object(_core_utils_common_util__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(query)
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)
            : this.$globalSearch.search(query);
    }
    openItem(type, data) {
        this.$globalSearch.openItem(type, data);
    }
}
HeaderSearchService.ɵfac = function HeaderSearchService_Factory(t) { return new (t || HeaderSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_5__["GlobalSearchService"])); };
HeaderSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderSearchService, factory: HeaderSearchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] }, { type: _shared_global_search_global_search_service__WEBPACK_IMPORTED_MODULE_5__["GlobalSearchService"] }]; }, null); })();


/***/ }),

/***/ "webD":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/header/components/header-notifications/header-notifications.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: HeaderNotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotificationsService", function() { return HeaderNotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class HeaderNotificationsService {
    constructor() {
        this.userNotifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    addNotification(item) {
        this.userNotifications$.next([...this.userNotifications$.getValue(), item]);
    }
}
HeaderNotificationsService.ɵfac = function HeaderNotificationsService_Factory(t) { return new (t || HeaderNotificationsService)(); };
HeaderNotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderNotificationsService, factory: HeaderNotificationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderNotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "x14V":
/*!*******************************!*\
  !*** ./src/theme/ts/index.ts ***!
  \*******************************/
/*! exports provided: ColorAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_theme_ts_color_aslias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/theme/ts/color-aslias */ "9sBA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorAlias", function() { return _src_theme_ts_color_aslias__WEBPACK_IMPORTED_MODULE_0__["ColorAlias"]; });





/***/ }),

/***/ "x7JW":
/*!*******************************************************************!*\
  !*** ./src/app/shared/dictionaries/services/buildings.service.ts ***!
  \*******************************************************************/
/*! exports provided: BuildingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsService", function() { return BuildingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.utils */ "rIQ8");
/* harmony import */ var _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/dictionaries/services/floor-maps.service */ "2Mmv");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/user.service */ "f4AX");








class BuildingsService {
    constructor($dictionaries, $floorMaps, $user) {
        this.$dictionaries = $dictionaries;
        this.$floorMaps = $floorMaps;
        this.$user = $user;
        this._allBuildings$ = this.getAllBuildings$();
        this._parkingLotsBuildings$ = this.getBuildingsByType('parkingLots');
        this._roomsBuildings$ = this.getBuildingsByType('rooms');
        this._workplacesBuildings$ = this.getBuildingsByType('workplaces');
    }
    get allBuildings$() {
        return this._allBuildings$;
    }
    get allBuildingsOne$() {
        return this.allBuildings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    get parkingLotsBuildings$() {
        return this._parkingLotsBuildings$;
    }
    get roomsBuildings$() {
        return this._roomsBuildings$;
    }
    get workplacesBuildings$() {
        return this._workplacesBuildings$;
    }
    get allBuildingsWithFloorMaps$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.allBuildings$, this.$floorMaps.allFloorMaps$]);
    }
    get roomsBuildingsWithFloorMaps$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.roomsBuildings$, this.$floorMaps.roomsFloorMaps$]);
    }
    get parkingLotsBuildingsWithFloorMaps$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.parkingLotsBuildings$, this.$floorMaps.parkingLotsFloorMaps$]);
    }
    get workplacesBuildingsWithFloorMaps$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.workplacesBuildings$, this.$floorMaps.workplacesFloorMaps$]);
    }
    getBuildingsByPlaceType$(type) {
        switch (type) {
            case 'rooms':
                return this.roomsBuildings$;
            case 'parkingLots':
                return this.parkingLotsBuildings$;
            case 'workplaces':
                return this.workplacesBuildings$;
            default:
                return this.allBuildings$;
        }
    }
    getBuildingsByType(name) {
        let floorMaps$ = this.$floorMaps.allFloorMaps$;
        switch (name) {
            case 'rooms':
                floorMaps$ = this.$floorMaps.roomsFloorMaps$;
                break;
            case 'parkingLots':
                floorMaps$ = this.$floorMaps.parkingLotsFloorMaps$;
                break;
            case 'workplaces':
                floorMaps$ = this.$floorMaps.workplacesFloorMaps$;
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.allBuildings$, floorMaps$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([buildings, floorMaps]) => Object(_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_3__["filterBuildingsByFloorMaps"])(buildings, floorMaps)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    get sequence$() {
        return this.$user.label$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((label) => (label === null || label === void 0 ? void 0 : label.buildingsSequence) || []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])));
    }
    getAllBuildings$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.$dictionaries.getDictionary('buildings'),
            this.sequence$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([allBuildings, sequence]) => Object(_shared_dictionaries_dictionaries_utils__WEBPACK_IMPORTED_MODULE_3__["sortItemsBySequence"])(allBuildings, 'id', sequence)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
}
BuildingsService.ɵfac = function BuildingsService_Factory(t) { return new (t || BuildingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_5__["FloorMapsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
BuildingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuildingsService, factory: BuildingsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_4__["DictionariesService"] }, { type: _shared_dictionaries_services_floor_maps_service__WEBPACK_IMPORTED_MODULE_5__["FloorMapsService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "xK1C":
/*!**********************************************************!*\
  !*** ./src/app/shared/common/utils/reservations.util.ts ***!
  \**********************************************************/
/*! exports provided: maxFilterButtonVisibleWindowWidth, maxFilterHideWindowWith, HEADERS_META, mapActiveLabels, mapActions, mapDictionaryValues, prepareUrlQueryParams, parseUrlQueryParams, filterActionsColumn, mapStatusDictionary, initQueryParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxFilterButtonVisibleWindowWidth", function() { return maxFilterButtonVisibleWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxFilterHideWindowWith", function() { return maxFilterHideWindowWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS_META", function() { return HEADERS_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActiveLabels", function() { return mapActiveLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDictionaryValues", function() { return mapDictionaryValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareUrlQueryParams", function() { return prepareUrlQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrlQueryParams", function() { return parseUrlQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterActionsColumn", function() { return filterActionsColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStatusDictionary", function() { return mapStatusDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initQueryParams", function() { return initQueryParams; });
/* harmony import */ var _shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/http/utils/constants.util */ "1j6E");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/models/user.model */ "PQuL");





const maxFilterButtonVisibleWindowWidth = 1600;
const maxFilterHideWindowWith = 1366;
const HEADERS_META = { [_shared_http_utils_constants_util__WEBPACK_IMPORTED_MODULE_0__["DB_CACHE_RESPONSE_HEADER"]]: 'true' };
function mapActiveLabels(reservations, activeLabels) {
    return reservations.forEach(reservation => reservation.online = activeLabels.some(({ id }) => reservation.labelId = id));
}
function mapActions($dictionaries, meta, data, currentUser) {
    if (!(data === null || data === void 0 ? void 0 : data.length)) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ data, meta });
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
        $dictionaries.getDictionary('labels'),
        $dictionaries.getDictionary('labelGroups')
    ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([labels, labelGroups]) => (new _core_models_user_model__WEBPACK_IMPORTED_MODULE_4__["Users"](labels)).map((user) => user.setManagers(labelGroups))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((users) => data.forEach(item => {
        var _a;
        item.currentUser = currentUser.id;
        item.managers = ((_a = users.getUserById(item.labelId)) === null || _a === void 0 ? void 0 : _a.managers) || [];
    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => ({ data, meta })));
}
function mapDictionaryValues($dictionaries, meta, data) {
    var _a;
    if (!((_a = meta.dictionaries) === null || _a === void 0 ? void 0 : _a.length) || !(data === null || data === void 0 ? void 0 : data.length)) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ data, meta });
    }
    sortMetaDictionaries(meta.dictionaries);
    const next$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    const lastDictionaryName = [...meta.dictionaries].reverse().shift().name;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(meta.dictionaries), next$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([{ name, fieldId, maps }, _any]) => $dictionaries.getDictionary(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((items) => {
        data.forEach(row => {
            const item = items.find(item => item.id === row[fieldId]) || {};
            (maps || []).forEach(({ fieldFrom, fieldTo }) => {
                row[fieldTo] = typeof item[fieldFrom] !== 'undefined' ? item[fieldFrom] : row[fieldTo];
                if (typeof row[fieldTo] === 'undefined') {
                    row[fieldTo] = null;
                }
            });
        });
        return name;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(name);
    }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((dictionaryName) => dictionaryName !== lastDictionaryName ? next$.next(null) : next$.complete()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((dictionaryName) => dictionaryName === lastDictionaryName), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => ({ data, meta })));
}
function sortMetaDictionaries(dictionaries) {
    return dictionaries.sort(({ order: orderA }, { order: orderB }) => (orderA < orderB ? -1 : orderB < orderA ? 1 : 0));
}
function prepareUrlQueryParams(queryParams, dateFormat, currentLang) {
    queryParams = Object.assign({}, queryParams);
    Object.entries(queryParams).forEach(([key, value]) => {
        if (value === null || (value === null || value === void 0 ? void 0 : value.length) === 0) {
            delete queryParams[key];
            return;
        }
        if (value instanceof Date) {
            queryParams[key] = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(value, dateFormat, currentLang);
            return;
        }
        queryParams[key] = String(value);
    });
    return queryParams;
}
function parseUrlQueryParams(queryParams) {
    queryParams = Object.assign({}, queryParams);
    Object.entries(queryParams).forEach(([key, value]) => {
        switch (key) {
            case 'buildingId':
            case 'floorMapIds':
            case 'labelIds':
            case 'requestAppointmentRoomFloorMapIds':
            case 'requestAppointmentLabelIds':
                queryParams[key] = parseNumberArrayUrlQueryParam(value);
                return;
            case 'labelGroupId':
                queryParams[key] = parseInt(value, 10);
                return;
            case 'statuses':
            case 'requestAppointmentStatuses':
                queryParams[key] = parseStringArray(value);
                return;
            case 'dateTimeFrom':
            case 'dateTimeTo':
            case 'requestAppointmentDateFrom':
            case 'requestAppointmentDateTo':
                queryParams[key] = parseDataUrlQueryParam(value);
                return;
        }
        if (value === 'false') {
            queryParams[key] = false;
            return;
        }
        if (value === 'false') {
            queryParams[key] = true;
            return;
        }
    });
    return queryParams;
}
function parseStringArray(value) {
    return (value instanceof Array)
        ? value
        : !value
            ? []
            : value.split(',');
}
function parseNumberArrayUrlQueryParam(value) {
    return parseStringArray(value).map(id => parseInt(id, 10));
}
function parseDataUrlQueryParam(value) {
    try {
        return new Date(Date.parse(value));
    }
    catch (e) {
        return null;
    }
}
function filterActionsColumn(meta, user) {
    var _a;
    if (((_a = user === null || user === void 0 ? void 0 : user.labelGroupsManager) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        return;
    }
    meta.columns = meta.columns.filter(({ renderer }) => (renderer === null || renderer === void 0 ? void 0 : renderer.type) !== 'actions');
}
function mapStatusDictionary(columns, statuses) {
    var _a;
    try {
        const statusColumnRenderer = (_a = columns
            .find(({ id }) => id === 'status')) === null || _a === void 0 ? void 0 : _a.renderer;
        if (statusColumnRenderer) {
            const map = statuses.reduce((statusRendererMap, status) => (Object.assign(Object.assign({}, statusRendererMap), { [status.code]: { value: status.name, color: status.color } })), {});
            statusColumnRenderer.options = { map };
        }
    }
    catch (e) {
    }
}
function initQueryParams(queryParamsBuilder, meta, routeQueryParams, filters = {}) {
    queryParamsBuilder
        // .clear()
        .withPaging(meta.paging)
        .withSort(meta.sort)
        .withFilters(filters)
        .updateQueryParams(parseUrlQueryParams(routeQueryParams))
        .withParams({ updateData: true });
    queryParamsBuilder.ready = true;
}


/***/ }),

/***/ "xN5w":
/*!***************************************************!*\
  !*** ./src/app/shared/http/utils/images.const.ts ***!
  \***************************************************/
/*! exports provided: DEFAULT_USER_AVATAR, DEFAULT_WORKPLACE_CARD, DEFAULT_MAP_POINT, DEFAULT_MAP_MARK, MAP_POINT_SVG, MAP_POINT_BUSY_SVG, MAP_POINT_DISABLED_SVG, ROOM_DISABLED_COLOR, CALENDAR_ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_USER_AVATAR", function() { return DEFAULT_USER_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WORKPLACE_CARD", function() { return DEFAULT_WORKPLACE_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAP_POINT", function() { return DEFAULT_MAP_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAP_MARK", function() { return DEFAULT_MAP_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_POINT_SVG", function() { return MAP_POINT_SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_POINT_BUSY_SVG", function() { return MAP_POINT_BUSY_SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_POINT_DISABLED_SVG", function() { return MAP_POINT_DISABLED_SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOM_DISABLED_COLOR", function() { return ROOM_DISABLED_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_ICON", function() { return CALENDAR_ICON; });
const DEFAULT_USER_AVATAR = './assets/images/avatar-def.png';
const DEFAULT_WORKPLACE_CARD = './assets/images/workplace-card-default.jpg';
const DEFAULT_MAP_POINT = './assets/images/default-map-point.png';
const DEFAULT_MAP_MARK = './assets/images/map-marker.png';
const MAP_POINT_SVG = './assets/images/traffic-light-green.svg';
const MAP_POINT_BUSY_SVG = './assets/images/traffic-light-red.svg';
const MAP_POINT_DISABLED_SVG = './assets/images/traffic-light-gray.svg';
const ROOM_DISABLED_COLOR = '#bfbfbf';
const CALENDAR_ICON = './assets/images/calendar.svg';


/***/ }),

/***/ "yBQe":
/*!******************************************!*\
  !*** ./src/app/core/pipes/pluck.pipe.ts ***!
  \******************************************/
/*! exports provided: PluckPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckPipe", function() { return PluckPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PluckPipe {
    transform(obj, keys, ...anyKeys) {
        if (!(keys instanceof Array)) {
            keys = [].concat(keys).concat(anyKeys);
        }
        while (keys.length > 0) {
            const key = keys.shift();
            if (typeof obj === 'undefined') {
                obj = {};
            }
            obj = obj[key];
        }
        return typeof obj !== 'undefined' ? obj : null;
    }
}
PluckPipe.ɵfac = function PluckPipe_Factory(t) { return new (t || PluckPipe)(); };
PluckPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pluck", type: PluckPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluckPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'pluck'
            }]
    }], null, null); })();


/***/ }),

/***/ "zGPZ":
/*!**********************************************************!*\
  !*** ./src/app/shared/http/services/user-api.service.ts ***!
  \**********************************************************/
/*! exports provided: UserApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/base/base.api */ "zYZC");
/* harmony import */ var _core_utils_http_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/http.util */ "QEIv");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/environments/environment */ "AytR");





class UserApiService extends _shared_common_base_base_api__WEBPACK_IMPORTED_MODULE_1__["BaseApi"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._apiUrl = _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    setLabelBuildingsSequence(params = {}) {
        return this.$http.post(this._apiUrl + '/setLabelBuildingsSequence', params).pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_2__["filterNoProgressHttpEvent"])());
    }
    setLabelFloorMapsSequence(params = {}) {
        return this.$http.post(this._apiUrl + '/setLabelFloorMapsSequence', params).pipe(Object(_core_utils_http_util__WEBPACK_IMPORTED_MODULE_2__["filterNoProgressHttpEvent"])());
    }
}
UserApiService.ɵfac = function UserApiService_Factory(t) { return new (t || UserApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
UserApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserApiService, factory: UserApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "zOLR":
/*!********************************************!*\
  !*** ./src/app/shared/http/http.module.ts ***!
  \********************************************/
/*! exports provided: HttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_shared_http_interceptors_process_response_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/http/interceptors/process-response.interceptor */ "GPc/");
/* harmony import */ var _app_shared_http_interceptors_cache_response_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/http/interceptors/cache-response.interceptor */ "SCoG");
/* harmony import */ var _shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/images/images.module */ "/tb3");
/* harmony import */ var _shared_http_http_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/http/http.constants */ "Xaq5");







class HttpModule {
}
HttpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpModule });
HttpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpModule_Factory(t) { return new (t || HttpModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _app_shared_http_interceptors_cache_response_interceptor__WEBPACK_IMPORTED_MODULE_3__["CacheResponseInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _app_shared_http_interceptors_process_response_interceptor__WEBPACK_IMPORTED_MODULE_2__["ProcessResponseInterceptor"],
            multi: true
        },
        ..._shared_http_http_constants__WEBPACK_IMPORTED_MODULE_5__["API_SERVICES"]
    ], imports: [[
            _shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpModule, { imports: [_shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_images_images_module__WEBPACK_IMPORTED_MODULE_4__["ImagesModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _app_shared_http_interceptors_cache_response_interceptor__WEBPACK_IMPORTED_MODULE_3__["CacheResponseInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _app_shared_http_interceptors_process_response_interceptor__WEBPACK_IMPORTED_MODULE_2__["ProcessResponseInterceptor"],
                        multi: true
                    },
                    ..._shared_http_http_constants__WEBPACK_IMPORTED_MODULE_5__["API_SERVICES"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zYZC":
/*!************************************************!*\
  !*** ./src/app/shared/common/base/base.api.ts ***!
  \************************************************/
/*! exports provided: BaseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApi", function() { return BaseApi; });
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/http.service */ "bUwk");
/* harmony import */ var _core_services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/url.service */ "Yrpq");
/* harmony import */ var _core_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/http-helper.service */ "I+8P");
/* harmony import */ var _core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/dictionary.service */ "8OyG");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/local-storage.service */ "3G0t");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/config.service */ "jtrZ");
/* harmony import */ var _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/models/app-errorl.model */ "zewn");







class BaseApi {
    constructor(injector) {
        this.injector = injector;
        this.$config = this.injector.get(_core_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]);
        this.$localStorage = this.injector.get(_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]);
        this.$http = this.injector.get(_core_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]);
        this.$httpHelper = this.injector.get(_core_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"]);
        this.$url = this.injector.get(_core_services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"]);
        this.$dict = this.injector.get(_core_services_dictionary_service__WEBPACK_IMPORTED_MODULE_3__["DictionaryService"]);
    }
    processResponse(response) {
        return response.success
            ? response.data
            : new _core_models_app_errorl_model__WEBPACK_IMPORTED_MODULE_6__["AppError"](response.error);
    }
}


/***/ }),

/***/ "zewn":
/*!*************************************************!*\
  !*** ./src/app/core/models/app-errorl.model.ts ***!
  \*************************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(codeOrProps, message, title, subtitle) {
        this.isError = true;
        if (isErrorObject(codeOrProps)) {
            Object.assign(this, codeOrProps);
            return;
        }
        this.code = codeOrProps;
        this.message = message;
        this.subtitle = subtitle;
        this.title = title;
    }
}
function isErrorObject(codeOrProps) {
    return codeOrProps && typeof codeOrProps === 'object';
}
const err = new AppError({});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map