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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/*! exports provided: PORT, SERVER_URL, UPDATE_INTERVAL, GAME_MAP_WIDTH, GAME_MAP_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/common/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["PORT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INTERVAL", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INTERVAL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GAME_MAP_WIDTH", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["GAME_MAP_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GAME_MAP_HEIGHT", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["GAME_MAP_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLAYER_WIDTH", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["PLAYER_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLAYER_HEIGHT", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["PLAYER_HEIGHT"]; });




/***/ }),

/***/ "./src/common/variables.ts":
/*!*********************************!*\
  !*** ./src/common/variables.ts ***!
  \*********************************/
/*! exports provided: PORT, SERVER_URL, UPDATE_INTERVAL, GAME_MAP_WIDTH, GAME_MAP_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INTERVAL", function() { return UPDATE_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_MAP_WIDTH", function() { return GAME_MAP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_MAP_HEIGHT", function() { return GAME_MAP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_WIDTH", function() { return PLAYER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_HEIGHT", function() { return PLAYER_HEIGHT; });
var PORT = process.env.PORT || 5000;
var SERVER_URL = 'http://localhost:' + PORT;
var UPDATE_INTERVAL = 1000 / 40;
var GAME_MAP_WIDTH = 800;
var GAME_MAP_HEIGHT = 800;
var PLAYER_WIDTH = 40;
var PLAYER_HEIGHT = 40;


/***/ }),

/***/ "./src/server/game.ts":
/*!****************************!*\
  !*** ./src/server/game.ts ***!
  \****************************/
/*! exports provided: gameCircle, addNewPlayer, movePlayer, deletePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameCircle", function() { return gameCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewPlayer", function() { return addNewPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePlayer", function() { return movePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePlayer", function() { return deletePlayer; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./src/common/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var SPEED = 5;
var players = {};
function gameCircle() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(_common__WEBPACK_IMPORTED_MODULE_2__["UPDATE_INTERVAL"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return players; }));
}
function addNewPlayer(name, playerId) {
    players[playerId] = __assign(__assign({}, getRandomPosition()), { color: getRandomColor(), name: name });
    return players[playerId];
}
function movePlayer(playerId, data) {
    var player = players[playerId];
    if (!player) {
        return;
    }
    if (data.left && player.x > 0) {
        player.x -= SPEED;
    }
    if (data.up && player.y > 0) {
        player.y -= SPEED;
    }
    if (data.right && player.x < _common__WEBPACK_IMPORTED_MODULE_2__["GAME_MAP_WIDTH"] - _common__WEBPACK_IMPORTED_MODULE_2__["PLAYER_WIDTH"]) {
        player.x += SPEED;
    }
    if (data.down && player.y < _common__WEBPACK_IMPORTED_MODULE_2__["GAME_MAP_WIDTH"] - _common__WEBPACK_IMPORTED_MODULE_2__["PLAYER_WIDTH"]) {
        player.y += SPEED;
    }
}
function deletePlayer(playerId) {
    delete players[playerId];
}
function getRandomPosition() {
    return {
        x: getRandomizer(_common__WEBPACK_IMPORTED_MODULE_2__["PLAYER_WIDTH"], _common__WEBPACK_IMPORTED_MODULE_2__["GAME_MAP_WIDTH"] - _common__WEBPACK_IMPORTED_MODULE_2__["PLAYER_WIDTH"]),
        y: getRandomizer(_common__WEBPACK_IMPORTED_MODULE_2__["PLAYER_WIDTH"], _common__WEBPACK_IMPORTED_MODULE_2__["GAME_MAP_WIDTH"] - _common__WEBPACK_IMPORTED_MODULE_2__["PLAYER_WIDTH"])
    };
}
function getRandomizer(bottom, top) {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}
function getRandomColor() {
    var letters = '123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/common/index.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/server/game.ts");


var app = __webpack_require__(/*! express */ "express")();
var http = __webpack_require__(/*! http */ "http").createServer(app);
var socketIO = __webpack_require__(/*! socket.io */ "socket.io")(http);
var cors = __webpack_require__(/*! cors */ "cors");
app.use(cors());
app.get('/', function (req, res) {
    res.send('<h1>Server</h1>');
});
socketIO.on('connection', function (socket) {
    socket.on('join', function (name) {
        var player = Object(_game__WEBPACK_IMPORTED_MODULE_1__["addNewPlayer"])(name, socket.id);
        if (player) {
            socketIO.sockets.emit('joined', true);
        }
    });
    socket.on('movement', function (data) {
        Object(_game__WEBPACK_IMPORTED_MODULE_1__["movePlayer"])(socket.id, data);
    });
    socket.on('disconnect', function () {
        Object(_game__WEBPACK_IMPORTED_MODULE_1__["deletePlayer"])(socket.id);
    });
    Object(_game__WEBPACK_IMPORTED_MODULE_1__["gameCircle"])().subscribe(function (players) { return socketIO.sockets.emit('state', players); });
});
http.listen(_common__WEBPACK_IMPORTED_MODULE_0__["PORT"], function () {
    console.log('listening on ' + _common__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]);
});


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9vcGVyYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtR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QUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxJQUFjO1FBQ25DLHdEQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ3RCLDBEQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsd0RBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxJQUFJLGVBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQztBQUM1RSxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxNQUFNLENBQUMsNENBQUksRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxrREFBVSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2hDSCxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzZXJ2ZXItYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuZXhwb3J0ICogZnJvbSAnLi92YXJpYWJsZXMnO1xyXG4iLCJleHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcclxuZXhwb3J0IGNvbnN0IFNFUlZFUl9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgUE9SVDtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9JTlRFUlZBTCA9IDEwMDAgLyA0MDtcclxuZXhwb3J0IGNvbnN0IEdBTUVfTUFQX1dJRFRIID0gODAwO1xyXG5leHBvcnQgY29uc3QgR0FNRV9NQVBfSEVJR0hUID0gODAwO1xyXG5leHBvcnQgY29uc3QgUExBWUVSX1dJRFRIID0gNDA7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfSEVJR0hUID0gNDA7XHJcbiIsImltcG9ydCB7IGludGVydmFsLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR0FNRV9NQVBfV0lEVEgsIFBMQVlFUl9XSURUSCwgVVBEQVRFX0lOVEVSVkFMIH0gZnJvbSAnLi4vY29tbW9uJztcclxuaW1wb3J0IHsgTW92ZW1lbnQsIFBsYXllciB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IFNQRUVEID0gNTtcclxuXHJcbmludGVyZmFjZSBQbGF5ZXJzIHsgW3BsYXllcklkOiBzdHJpbmddOiBQbGF5ZXIgfVxyXG5cclxuY29uc3QgcGxheWVyczogUGxheWVycyA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVDaXJjbGUoKTogT2JzZXJ2YWJsZTxQbGF5ZXJzPiB7XHJcbiAgcmV0dXJuIGludGVydmFsKFVQREFURV9JTlRFUlZBTCkucGlwZShtYXAoKCkgPT4gcGxheWVycykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3UGxheWVyKG5hbWU6IHN0cmluZywgcGxheWVySWQ6IHN0cmluZyk6IFBsYXllciB7XHJcbiAgcGxheWVyc1twbGF5ZXJJZF0gPSB7XHJcbiAgICAuLi5nZXRSYW5kb21Qb3NpdGlvbigpLFxyXG4gICAgY29sb3I6IGdldFJhbmRvbUNvbG9yKCksXHJcbiAgICBuYW1lXHJcbiAgfTtcclxuICByZXR1cm4gcGxheWVyc1twbGF5ZXJJZF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlUGxheWVyKHBsYXllcklkOiBzdHJpbmcsIGRhdGE6IE1vdmVtZW50KTogdm9pZCB7XHJcbiAgY29uc3QgcGxheWVyOiBQbGF5ZXIgPSBwbGF5ZXJzW3BsYXllcklkXTtcclxuICBpZiAoIXBsYXllcikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoZGF0YS5sZWZ0ICYmIHBsYXllci54ID4gMCkge1xyXG4gICAgcGxheWVyLnggLT0gU1BFRUQ7XHJcbiAgfVxyXG4gIGlmIChkYXRhLnVwICYmIHBsYXllci55ID4gMCkge1xyXG4gICAgcGxheWVyLnkgLT0gU1BFRUQ7XHJcbiAgfVxyXG4gIGlmIChkYXRhLnJpZ2h0ICYmIHBsYXllci54IDwgR0FNRV9NQVBfV0lEVEggLSBQTEFZRVJfV0lEVEgpIHtcclxuICAgIHBsYXllci54ICs9IFNQRUVEO1xyXG4gIH1cclxuICBpZiAoZGF0YS5kb3duICYmIHBsYXllci55IDwgR0FNRV9NQVBfV0lEVEggLSBQTEFZRVJfV0lEVEgpIHtcclxuICAgIHBsYXllci55ICs9IFNQRUVEO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVBsYXllcihwbGF5ZXJJZDogc3RyaW5nKSB7XHJcbiAgZGVsZXRlIHBsYXllcnNbcGxheWVySWRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21Qb3NpdGlvbigpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiBnZXRSYW5kb21pemVyKFBMQVlFUl9XSURUSCwgR0FNRV9NQVBfV0lEVEggLSBQTEFZRVJfV0lEVEgpLFxyXG4gICAgeTogZ2V0UmFuZG9taXplcihQTEFZRVJfV0lEVEgsIEdBTUVfTUFQX1dJRFRIIC0gUExBWUVSX1dJRFRIKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9taXplcihib3R0b206IG51bWJlciwgdG9wOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIHRvcCAtIGJvdHRvbSkpICsgYm90dG9tO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGxldHRlcnMgPSAnMTIzNDU2Nzg5QUJDREVGJztcclxuICBsZXQgY29sb3IgPSAnIyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbG9yO1xyXG59XHJcbiIsImltcG9ydCB7IFNvY2tldCB9IGZyb20gJ3NvY2tldC5pbyc7XHJcbmltcG9ydCB7IE1vdmVtZW50LCBQT1JULCBTRVJWRVJfVVJMLCBVUERBVEVfSU5URVJWQUwgfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgeyBhZGROZXdQbGF5ZXIsIGRlbGV0ZVBsYXllciwgZ2FtZUNpcmNsZSwgbW92ZVBsYXllciB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG5jb25zdCBhcHAgPSByZXF1aXJlKCdleHByZXNzJykoKTtcclxuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKS5jcmVhdGVTZXJ2ZXIoYXBwKTtcclxuY29uc3Qgc29ja2V0SU8gPSByZXF1aXJlKCdzb2NrZXQuaW8nKShodHRwKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAuZ2V0KCcvJywgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xyXG4gIHJlcy5zZW5kKCc8aDE+U2VydmVyPC9oMT4nKTtcclxufSk7XHJcblxyXG5zb2NrZXRJTy5vbignY29ubmVjdGlvbicsIChzb2NrZXQ6IFNvY2tldCkgPT4ge1xyXG4gIHNvY2tldC5vbignam9pbicsIG5hbWUgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyID0gYWRkTmV3UGxheWVyKG5hbWUsIHNvY2tldC5pZCk7XHJcbiAgICBpZiAocGxheWVyKSB7XHJcbiAgICAgIHNvY2tldElPLnNvY2tldHMuZW1pdCgnam9pbmVkJywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgc29ja2V0Lm9uKCdtb3ZlbWVudCcsIChkYXRhOiBNb3ZlbWVudCkgPT4ge1xyXG4gICAgbW92ZVBsYXllcihzb2NrZXQuaWQsIGRhdGEpO1xyXG4gIH0pO1xyXG4gIHNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuICAgIGRlbGV0ZVBsYXllcihzb2NrZXQuaWQpO1xyXG4gIH0pO1xyXG4gIGdhbWVDaXJjbGUoKS5zdWJzY3JpYmUocGxheWVycyA9PiBzb2NrZXRJTy5zb2NrZXRzLmVtaXQoJ3N0YXRlJywgcGxheWVycykpXHJcbn0pO1xyXG5cclxuaHR0cC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdsaXN0ZW5pbmcgb24gJyArIFNFUlZFUl9VUkwpO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL29wZXJhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==