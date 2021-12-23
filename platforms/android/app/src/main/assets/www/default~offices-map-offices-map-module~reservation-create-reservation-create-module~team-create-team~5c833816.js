(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~offices-map-offices-map-module~reservation-create-reservation-create-module~team-create-team~5c833816"],{

/***/ "+IbG":
/*!************************************************************!*\
  !*** ./src/app/core/services/reservation-marks.service.ts ***!
  \************************************************************/
/*! exports provided: ReservationMarksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationMarksService", function() { return ReservationMarksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation-marks.utils */ "d0mQ");
/* harmony import */ var _src_app_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/presentation/reservations/utils/reservation */ "Y+7/");
/* harmony import */ var _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/shared/http/utils/images.const */ "xN5w");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/shared/dictionaries/services/measurements.service */ "FsS2");
/* harmony import */ var _src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/shared/dictionaries/dictionaries.service */ "1wKo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _src_app_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/shared/images/services/image-blob.service */ "AgCt");
/* harmony import */ var _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/shared/http/services/reservations-api.service */ "jEJB");
/* harmony import */ var _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_app_base_map_map_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/base/map/map.service */ "Bnie");















class ReservationMarksService {
    constructor($measurements, $dictionary, $route, $images, $api, $user, datePipe, $map) {
        this.$measurements = $measurements;
        this.$dictionary = $dictionary;
        this.$route = $route;
        this.$images = $images;
        this.$api = $api;
        this.$user = $user;
        this.datePipe = datePipe;
        this.$map = $map;
        this._floorWorkplaceReservationSocialDistanceCheck = null;
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._reload = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](void 0);
    }
    reload() {
        this._reload.next();
    }
    get currentFloor$() {
        return this.$route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            const id = Number(params.get('floorId'));
            return this.$dictionary
                .getDictionaryItemByKey('floorMaps', id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((floor) => (this._floorWorkplaceReservationSocialDistanceCheck = floor === null || floor === void 0 ? void 0 : floor.workplaceReservationSocialDistanceCheck)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.$map.marksReady$.next(false)));
        }));
    }
    getFilterValue() {
        return this._filter.getValue();
    }
    setDateFilterValue(range) {
        this._filter.next(range);
    }
    get filterValueOptimize$() {
        return this._filter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500));
    }
    get parkingLots$() {
        return this.$dictionary.getDictionary('parkingLots');
    }
    get rooms$() {
        return this.$dictionary.getDictionary('rooms');
    }
    get workplaces$() {
        return this.$dictionary.getDictionary('workplaces');
    }
    getCurrentRooms(floor, places) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            rooms: places.filter((place) => place.floorMapId === (floor === null || floor === void 0 ? void 0 : floor.id)),
        });
    }
    getCurrentWorkplacesAndReservations(floor, dates, places, disabledWorkplaces) {
        return this.getReservations(floor, dates, 'workplace').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((reservations) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(floor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((floor) => places.filter((place) => place.floorMapId === (floor === null || floor === void 0 ? void 0 : floor.id))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((workplaces) => workplaces.map((workplace) => {
            workplace.disabled =
                disabledWorkplaces.includes(workplace.id) ||
                    Boolean(reservations.find((r) => r.workplaceId === workplace.id));
            return workplace;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((workplaces) => ({ workplaces, reservations })))));
    }
    getCurrentParkingLotsAndReservations(floor, dates, places, disabledWorkplaces) {
        return this.getReservations(floor, dates, 'parking').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((parkingLotReservations) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(floor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((floor) => places.filter((place) => place.floorMapId === (floor === null || floor === void 0 ? void 0 : floor.id))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((parkingLots) => parkingLots.map((parkingLot) => {
            parkingLot.disabled =
                disabledWorkplaces.includes(parkingLot.id) ||
                    Boolean(parkingLotReservations.find((r) => r.parkingLotId === parkingLot.id));
            return parkingLot;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((parkingLots) => ({ parkingLots, parkingLotReservations })))));
    }
    getReservations(floor, dates, type) {
        if (!floor || !dates) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }
        return this.$api.getMapReservationsByType(type, {
            floorMapId: floor.id,
            dateTimeFrom: this._getApiDate(dates[0]),
            dateTimeTo: this._getApiDate(dates[1]),
        });
    }
    get mapMarks$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.workplaces$,
            this.$api.getWorkplacesDisabled$,
            this.currentFloor$,
            this.filterValueOptimize$,
            this.rooms$,
            this.parkingLots$,
            this.$api.getParkingLotsDisabled$,
            this._reload,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([workplaces, disabledWorkplaces, floor, dates, rooms, parkingLots, disabledParkingLots,]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.getCurrentWorkplacesAndReservations(floor, dates, workplaces, disabledWorkplaces),
            this.getCurrentUsersWithWorkplace(floor, dates),
            this.getCurrentCustomObject(floor),
            this.getCurrentRooms(floor, rooms),
            this.getCurrentParkingLotsAndReservations(floor, dates, parkingLots, disabledParkingLots),
        ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([{ workplaces, reservations }, usersWithWorkplaces, customObjects, { rooms }, { parkingLots, parkingLotReservations },]) => {
            const roomImages = rooms
                .map((room) => {
                return [room.id, this.$images.getImageBlob(room.avatarImageUrl)];
            })
                .reduce((acc, [id, _img]) => (Object.assign(Object.assign({}, acc), { [id]: _img })), {});
            const workplaceImages = workplaces
                .map((place) => {
                const reservation = reservations.find((r) => r.workplaceId === place.id);
                if (this._floorWorkplaceReservationSocialDistanceCheck ===
                    'FORBIDDEN') {
                    place.disabled = Object(_src_app_presentation_reservations_utils_reservation__WEBPACK_IMPORTED_MODULE_2__["checkReservedNeighbors"])(place, reservations);
                }
                const img = this._markDistributionImage(reservation, place);
                return [place.id, this.$images.getImageBlob(img)];
            })
                .reduce((acc, [id, _img]) => (Object.assign(Object.assign({}, acc), { [id]: _img })), {});
            const parkingLotImages = parkingLots
                .map((place) => {
                const reservation = parkingLotReservations.find((r) => r.parkingLotId === place.id);
                place.disabled = !!reservation;
                const img = this._markDistributionImage(reservation, place);
                return [place.id, this.$images.getImageBlob(img)];
            })
                .reduce((acc, [id, _img]) => (Object.assign(Object.assign({}, acc), { [id]: _img })), {});
            const usersImages = usersWithWorkplaces.reduce((acc, item) => (Object.assign(Object.assign({}, acc), { [item.workplace.id]: this.$images.getImageBlob(item.user.avatarImageUrl || _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_USER_AVATAR"]) })), {});
            // tslint:disable-next-line:max-line-length
            const customObjectsImages = customObjects.reduce((acc, customObject) => (Object.assign(Object.assign({}, acc), { [customObject.id]: this.$images.getImageBlob(customObject.imageNormalUrl || _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MAP_POINT"]) })), {});
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["forkJoinObjectEmpty"])(workplaceImages)),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["forkJoinObjectEmpty"])(usersImages)),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["forkJoinObjectEmpty"])(customObjectsImages)),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["forkJoinObjectEmpty"])(roomImages)),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["forkJoinObjectEmpty"])(parkingLotImages)),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([wImages, uImages, coImages, rImages, pImages]) => ({
                workplaceImages: wImages,
                usersImages: uImages,
                customObjectsImages: coImages,
                places: workplaces,
                usersWithWorkplaces,
                customObjects,
                rooms,
                roomImages: rImages,
                parkingLots,
                parkingLotImages: pImages,
            })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(({ workplaceImages, usersImages, customObjectsImages, places, usersWithWorkplaces, customObjects, rooms, roomImages, parkingLots, parkingLotImages }) => {
            const marks = [];
            if ((places === null || places === void 0 ? void 0 : places.length) > 0) {
                places.forEach((place) => {
                    marks.push(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["generateWorkplaceMark"])(place, workplaceImages[place.id]));
                });
            }
            if ((parkingLots === null || parkingLots === void 0 ? void 0 : parkingLots.length) > 0) {
                parkingLots.forEach((parkingLot) => {
                    marks.push(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["generateParkingLotMark"])(parkingLot, parkingLotImages[parkingLot.id]));
                });
            }
            if ((rooms === null || rooms === void 0 ? void 0 : rooms.length) > 0) {
                rooms.forEach((room) => {
                    marks.push(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["generateRoomMark"])(room, roomImages[room.id]));
                });
            }
            if ((usersWithWorkplaces === null || usersWithWorkplaces === void 0 ? void 0 : usersWithWorkplaces.length) > 0) {
                usersWithWorkplaces.forEach(({ user: rUser, workplace }) => {
                    if (workplace && rUser) {
                        marks.push(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["generateUserMark"])(workplace, rUser, usersImages[workplace.id], 'Users'));
                    }
                });
            }
            if ((customObjects === null || customObjects === void 0 ? void 0 : customObjects.length) > 0) {
                customObjects.forEach((cObj) => {
                    marks.push(Object(_reservation_marks_utils__WEBPACK_IMPORTED_MODULE_1__["generateCustomObjectMark"])(cObj, customObjectsImages[cObj.id]));
                });
            }
            return marks;
        }), 
        // tap(() => this._loading.next(false)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
    }
    getCurrentCustomObject(floor) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(floor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((floor) => {
            if (!floor) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
            return this.$dictionary
                .getDictionary('customObjects')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((objs) => objs.filter((obj) => obj.floorMapId === (floor === null || floor === void 0 ? void 0 : floor.id))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((data) => Boolean(data)));
    }
    getCurrentUsersWithWorkplace(floor, dates) {
        if (floor && dates) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
                this.$dictionary.getDictionary('labels'),
                this.$api.getWorkplaceReservations({
                    floorMapId: floor.id,
                    dateTimeFrom: this._getApiDate(dates[0]),
                    dateTimeTo: this._getApiDate(dates[1]),
                }),
                this.$dictionary.getDictionary('workplaces'),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([users, reservations, workplaces]) => {
                return reservations.map((r) => ({
                    user: users.find((u) => u.id === r.labelId),
                    workplace: workplaces.find((w) => w.id === r.workplaceId),
                }));
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }
        // }));
    }
    _markDistributionImage(reservation, workplace) {
        let img = workplace.imageFreeUrl;
        if (workplace.disabled) {
            img = workplace.imageDisabledUrl;
        }
        if (reservation) {
            if (reservation.labelId === this.$user.info.id) {
                img =
                    reservation.status === 'CONFIRMED'
                        ? workplace.imageReservedByMeUrl
                        : workplace.imageReservedByMeNotConfirmedUrl;
            }
            else {
                img = workplace.imageReservedByUserUrl;
            }
        }
        return img || _src_app_shared_http_utils_images_const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MAP_POINT"];
    }
    _getApiDate(date) {
        return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
    }
}
ReservationMarksService.ɵfac = function ReservationMarksService_Factory(t) { return new (t || ReservationMarksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_9__["ImageBlobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_10__["ReservationsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_base_map_map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"])); };
ReservationMarksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservationMarksService, factory: ReservationMarksService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationMarksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _src_app_shared_dictionaries_services_measurements_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementsService"] }, { type: _src_app_shared_dictionaries_dictionaries_service__WEBPACK_IMPORTED_MODULE_7__["DictionariesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _src_app_shared_images_services_image_blob_service__WEBPACK_IMPORTED_MODULE_9__["ImageBlobService"] }, { type: _src_app_shared_http_services_reservations_api_service__WEBPACK_IMPORTED_MODULE_10__["ReservationsApiService"] }, { type: _src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"] }, { type: _src_app_base_map_map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"] }]; }, null); })();


/***/ }),

/***/ "d0mQ":
/*!**********************************************************!*\
  !*** ./src/app/core/services/reservation-marks.utils.ts ***!
  \**********************************************************/
/*! exports provided: generateRoomMark, generateWorkplaceMark, generateParkingLotMark, generateUserMark, generateCustomObjectMark, forkJoinObjectEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRoomMark", function() { return generateRoomMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateWorkplaceMark", function() { return generateWorkplaceMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateParkingLotMark", function() { return generateParkingLotMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUserMark", function() { return generateUserMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCustomObjectMark", function() { return generateCustomObjectMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoinObjectEmpty", function() { return forkJoinObjectEmpty; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const generateRoomMark = (room, image) => {
    return {
        id: (room === null || room === void 0 ? void 0 : room.id) || 0,
        img: null,
        disabled: (room === null || room === void 0 ? void 0 : room.disabled) || false,
        logicType: 'Room',
        relativePlace: room,
        tooltip: (room === null || room === void 0 ? void 0 : room.name) || '-',
        coordinates: {
            x: (room === null || room === void 0 ? void 0 : room.x) || 0,
            y: (room === null || room === void 0 ? void 0 : room.y) || 0,
            size: 120,
        },
        size: {
            height: (room === null || room === void 0 ? void 0 : room.height) || 120,
            width: (room === null || room === void 0 ? void 0 : room.width) || 120,
        },
    };
};
const generateWorkplaceMark = (workplace, image) => {
    return {
        id: (workplace === null || workplace === void 0 ? void 0 : workplace.id) || 0,
        img: image,
        disabled: (workplace === null || workplace === void 0 ? void 0 : workplace.disabled) || false,
        logicType: 'Workplace',
        relativePlace: workplace,
        tooltip: (workplace === null || workplace === void 0 ? void 0 : workplace.name) || '-',
        coordinates: {
            x: (workplace === null || workplace === void 0 ? void 0 : workplace.x) || 0,
            y: (workplace === null || workplace === void 0 ? void 0 : workplace.y) || 0,
            size: (workplace === null || workplace === void 0 ? void 0 : workplace.width) || 40,
        },
    };
};
const generateParkingLotMark = (parkingLot, image) => {
    return {
        id: (parkingLot === null || parkingLot === void 0 ? void 0 : parkingLot.id) || 0,
        img: image,
        disabled: (parkingLot === null || parkingLot === void 0 ? void 0 : parkingLot.disabled) || false,
        logicType: 'ParkingLot',
        relativePlace: parkingLot,
        tooltip: (parkingLot === null || parkingLot === void 0 ? void 0 : parkingLot.name) || '-',
        coordinates: {
            x: (parkingLot === null || parkingLot === void 0 ? void 0 : parkingLot.x) || 0,
            y: (parkingLot === null || parkingLot === void 0 ? void 0 : parkingLot.y) || 0,
            size: (parkingLot === null || parkingLot === void 0 ? void 0 : parkingLot.width) || 40,
        },
    };
};
const generateUserMark = (workplace, user, image, type = 'User') => {
    return {
        id: (workplace === null || workplace === void 0 ? void 0 : workplace.id) || 0,
        img: image,
        logicType: type,
        tooltip: (user === null || user === void 0 ? void 0 : user.name) || '-',
        coordinates: {
            x: (workplace === null || workplace === void 0 ? void 0 : workplace.x) || 0,
            y: (workplace === null || workplace === void 0 ? void 0 : workplace.y) || 0,
            size: (workplace === null || workplace === void 0 ? void 0 : workplace.width) || 40,
        },
    };
};
const generateCustomObjectMark = (customObj, image) => {
    const SIZE = 72;
    return {
        id: customObj.id,
        img: image,
        logicType: 'POI',
        tooltip: customObj.htmlText || customObj.name,
        coordinates: {
            x: customObj.x - SIZE / 2,
            y: customObj.y - SIZE / 2,
            size: SIZE,
        },
    };
};
const forkJoinObjectEmpty = (obj) => {
    return Object.entries(obj).length ? obj : { 0: Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null) };
};


/***/ })

}]);
//# sourceMappingURL=default~offices-map-offices-map-module~reservation-create-reservation-create-module~team-create-team~5c833816.js.map