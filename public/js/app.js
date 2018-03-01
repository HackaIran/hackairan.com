/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var TimeLine = __webpack_require__(2);

var Loading = __webpack_require__(3);

var Modal = __webpack_require__(4);

var loading = new Loading();

var modal = new Modal();

document.addEventListener("DOMContentLoaded", function () {

    //Let's Get The Events

    axios.get("api/index/getTimeLine").then(function (data) {
        var timeline = new TimeLine(data.data);
    });
});

document.addEventListener("app:load", function () {
    loading.showLoading();
});

document.addEventListener("app:loaded", function () {
    loading.hideLoading();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeLine = function () {
        function TimeLine(bars) {
                _classCallCheck(this, TimeLine);

                this.bars = bars;

                this.timeLineWrapper = document.querySelector("#timeline");

                this.upComingWrapper = document.querySelector("#eventSection>div>aside>ul");

                this.inactives = this.bars.filter(function (item) {
                        return item.time.timestamp < Date.now();
                }).length;

                this.appendBarLines();

                this.appendUpcomingEvents();

                //Hiding Loading

                this._hideLoading();

                this.initialEvents();

                if (this.bars.length - this.inactives == 0) {
                        // all events are passed
                        this.showEvent(this.inactives - 1); //showing the nearest past event
                } else {
                        this.showEvent(this.inactives); //showing the nearest upcoming event
                }
        }

        ////////////
        //
        //  Let's Append Bar Lines
        //
        ///////////

        _createClass(TimeLine, [{
                key: "appendBarLines",
                value: function appendBarLines() {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                                for (var _iterator = this.bars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        var bar = _step.value;


                                        var barProps = this.calculateProps(bar.time.timestamp);

                                        var barEl = document.createElement("div");

                                        barEl.classList += "bar inactive";

                                        barEl.innerHTML = "<div><span>" + barProps.remaining + "</span><span>" + bar.time.nameGregorian + "</span></div><div></div>";

                                        barEl.style.left = barProps.left + '%';

                                        this.timeLineWrapper.appendChild(barEl);
                                }
                        } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                        } finally {
                                try {
                                        if (!_iteratorNormalCompletion && _iterator.return) {
                                                _iterator.return();
                                        }
                                } finally {
                                        if (_didIteratorError) {
                                                throw _iteratorError;
                                        }
                                }
                        }
                }

                ////////////
                //
                //  Let's Append Up Coming Events
                //
                ///////////

        }, {
                key: "appendUpcomingEvents",
                value: function appendUpcomingEvents() {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {

                                for (var _iterator2 = this.bars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var bar = _step2.value;


                                        if (bar.time.timestamp < Date.now()) {
                                                continue;
                                        }

                                        var upComEl = document.createElement("li");

                                        upComEl.setAttribute("data-active", "false");

                                        upComEl.innerHTML = "<h3>" + bar.title + "</h3><h4>" + bar.location + "</h4><time>" + bar.time.nameGregorian + " - " + bar.time.nameJalali;

                                        this.upComingWrapper.appendChild(upComEl);
                                }
                        } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                        } finally {
                                try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                                _iterator2.return();
                                        }
                                } finally {
                                        if (_didIteratorError2) {
                                                throw _iteratorError2;
                                        }
                                }
                        }
                }

                ////////////
                //
                //  Let's Add Click Events For Time Line And Up Coming Event
                //
                ///////////

        }, {
                key: "initialEvents",
                value: function initialEvents() {
                        var _this = this;

                        var bars = document.querySelectorAll(".bar");

                        var _loop = function _loop(i) {
                                bars[i].onclick = function () {
                                        _this.showEvent(i);
                                };
                        };

                        for (var i = 0; i < bars.length; i++) {
                                _loop(i);
                        }

                        var upComs = this.upComingWrapper.querySelectorAll("li");

                        var _loop2 = function _loop2(i) {
                                upComs[i].onclick = function () {
                                        //Showing Event
                                        _this.showEvent(i + _this.inactives);
                                };
                        };

                        for (var i = 0; i < upComs.length; i++) {
                                _loop2(i);
                        }
                }
        }, {
                key: "calculateProps",
                value: function calculateProps(timestamp) {

                        var date = moment(timestamp);

                        var diffWithNow = -moment().diff(date, 'days');

                        var remaining = Math.abs(diffWithNow) + ' days';

                        if (Math.abs(diffWithNow) > 30) remaining = '~' + Math.floor(Math.abs(diffWithNow) / 30) + ' months';

                        remaining += diffWithNow < 0 ? ' ago' : ' to go';

                        if (diffWithNow === 0) {
                                if (moment().diff(date, "hours") >= 0) {
                                        remaining = moment().diff(date, "hours") + " Hours Left";
                                }
                        }

                        var left = diffWithNow / 60 * 50 + 50;

                        return {
                                left: left,
                                remaining: remaining
                        };
                }
        }, {
                key: "showEvent",
                value: function showEvent(index) {
                        var _this2 = this;

                        var barEl = document.querySelectorAll(".bar")[index];

                        var descriptionCont = document.querySelector("#eventDescriptionCont");

                        if (barEl.getAttribute("data-active") != "true") {
                                // If Not Currently Being Showed

                                // A Little Animation

                                descriptionCont.style.transform = "scale(1.03) translate(-10px, -10px)";

                                descriptionCont.style.opacity = "0";

                                setTimeout(function () {
                                        //After Animation

                                        // Change Event Description

                                        _this2._changeEventDescription(_this2.bars[index]);

                                        //inactive the last one

                                        if (document.querySelector(".bar.active")) {
                                                document.querySelector(".bar.active").classList = "bar inactive";
                                        }

                                        if (_this2.bars[index].time.timestamp >= Date.now()) {
                                                // if current bar is not passed --> highlight the upcoming event li

                                                if (_this2.upComingWrapper.querySelector("li[data-active=true]")) {
                                                        _this2.upComingWrapper.querySelector("li[data-active=true]").setAttribute("data-active", "false");
                                                }

                                                _this2.upComingWrapper.querySelectorAll("li")[index - _this2.inactives].setAttribute("data-active", "true");
                                        } else {

                                                //unhighlight the upcoming li(if exists)

                                                if (_this2.upComingWrapper.querySelector("li[data-active=true]")) {
                                                        _this2.upComingWrapper.querySelector("li[data-active=true]").setAttribute("data-active", "false");
                                                }
                                        }

                                        barEl.classList = "bar active";

                                        descriptionCont.style.opacity = "1";

                                        descriptionCont.style.transform = "scale(1) translate(0px,0px)";
                                }, 200);
                        }
                }
        }, {
                key: "_changeEventDescription",
                value: function _changeEventDescription(bar) {

                        var eventBtn = document.querySelector("#eventBtn");

                        if (bar.time.timestamp > Date.now()) {
                                eventBtn.setAttribute("data-active", "true");
                                eventBtn.innerText = "Register";
                        } else {
                                eventBtn.setAttribute("data-active", "false");
                                eventBtn.innerText = "Passed!";
                        }

                        eventBtn.setAttribute("href", bar.register_link);

                        document.querySelector("#eventDescriptionCont>h2").innerText = bar.title;

                        document.querySelector("#eventDescriptionCont>h3").innerText = bar.location;

                        document.querySelector("#eventDescriptionCont>time").innerText = bar.time.nameGregorian + " - " + bar.time.nameJalali;

                        document.querySelector("#eventDescriptionCont>p").innerHTML = bar.short_description;
                }
        }, {
                key: "_hideLoading",
                value: function _hideLoading() {
                        document.querySelector("#eventPreLoader").remove();
                        document.querySelector("#eventSectionWrapper").style.filter = "blur(0px)";
                }
        }]);

        return TimeLine;
}();

module.exports = TimeLine;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loading = function () {
    function Loading() {
        _classCallCheck(this, Loading);
    }

    _createClass(Loading, [{
        key: "showLoading",
        value: function showLoading() {
            var _this = this;

            this.loadingElem = this._createLoading();

            this.loadingInterval = setInterval(function () {
                _this._progress();
            }, 1000);
        }
    }, {
        key: "hideLoading",
        value: function hideLoading() {

            clearInterval(this.loadingInterval);

            console.log(this.loadingElem);

            this.loadingElem.style.width = "100%";

            setTimeout(this._distructLoading, 500);
        }
    }, {
        key: "_createLoading",
        value: function _createLoading() {
            var div = document.createElement("div");
            div.setAttribute("id", "nprogress");
            div.style.width = "0%";
            document.body.appendChild(div);
            return div;
        }
    }, {
        key: "_distructLoading",
        value: function _distructLoading() {
            document.body.removeChild(document.querySelector("#nprogress"));
        }
    }, {
        key: "_progress",
        value: function _progress() {
            if (parseInt(this.loadingElem.style.width) == 95) {
                clearInterval(this.loadingInterval);
            } else {
                this.loadingElem.style.width = parseInt(this.loadingElem.style.width) + 5 + "%";
            }
        }
    }]);

    return Loading;
}();

module.exports = Loading;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
        function Modal() {
                _classCallCheck(this, Modal);

                this.listenEvents();
        }

        _createClass(Modal, [{
                key: "init",
                value: function init(index) {
                        var _this = this;

                        // fix scroll

                        var wrapper = document.querySelector("#wrapper");

                        var modal = document.querySelector(".modalWrapper");

                        var hackaSection = document.querySelector(".hackaSection:nth-child(" + (index + 1) + ")");

                        var sectionName = hackaSection.getAttribute("data-name");

                        var modalImage = document.querySelector(".modalHeadImg");

                        var modalHeaderText = document.querySelector(".modalCont>header>h2");

                        // wrapper.style.overflow = "hidden";

                        wrapper.style.transitionDuration = "0.5s";

                        wrapper.style.filter = "blur(15px)";

                        modal.style.visibility = "visible";

                        modal.style.opacity = "1";

                        setTimeout(function () {

                                modal.querySelector(".modalCont").style.transform = "scale(1)";

                                modalImage.src = hackaSection.querySelector("img").src;

                                modalHeaderText.innerHTML = hackaSection.querySelector("h2").innerHTML;

                                _this.triggerLoadingEvent();

                                _this.getContent(sectionName).then(function (data) {
                                        console.log(data);
                                        _this.appendContent(data);

                                        _this.triggerFinishLoadingEvent();
                                });
                        }, 300);
                }
        }, {
                key: "triggerLoadingEvent",
                value: function triggerLoadingEvent() {
                        var event = new Event("app:load");
                        document.dispatchEvent(event);
                }
        }, {
                key: "triggerFinishLoadingEvent",
                value: function triggerFinishLoadingEvent() {
                        var event = new Event("app:loaded");
                        document.dispatchEvent(event);
                }
        }, {
                key: "getContent",
                value: function getContent(sectionName) {

                        return new Promise(function (resolve, reject) {
                                axios.get("api/index/getPartial/" + sectionName).then(function (data) {
                                        resolve(data.data);
                                });
                        });
                }
        }, {
                key: "appendContent",
                value: function appendContent(data) {
                        document.querySelector(".modalCont main").innerHTML = data;
                }
        }, {
                key: "closeModal",
                value: function closeModal() {

                        var wrapper = document.querySelector("#wrapper");

                        var modal = document.querySelector(".modalWrapper");

                        modal.querySelector(".modalCont").style.transform = "scale(0.5)";

                        setTimeout(function () {

                                wrapper.style.transitionDuration = "0.5s";

                                wrapper.style.filter = "blur(0px)";

                                modal.style.visibility = "hidden";

                                modal.style.opacity = "0";
                        }, 200);
                }
        }, {
                key: "listenEvents",
                value: function listenEvents() {
                        var _this2 = this;

                        var hackaSections = document.querySelectorAll(".hackaSection");

                        var limit = hackaSections.length;

                        var _loop = function _loop(i) {

                                hackaSections[i].onclick = function () {

                                        _this2.init(i);
                                };
                        };

                        for (var i = 0; i < limit; i++) {
                                _loop(i);
                        }

                        //for closing modal

                        var closeModal = document.querySelector(".closeModal");

                        closeModal.onclick = function () {
                                _this2.closeModal();
                        };
                }
        }]);

        return Modal;
}();

module.exports = Modal;

/***/ })
/******/ ]);