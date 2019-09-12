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
/*! exports provided: PORT, SERVER_URL, UPDATE_INTERVAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/common/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["PORT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INTERVAL", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INTERVAL"]; });




/***/ }),

/***/ "./src/common/variables.ts":
/*!*********************************!*\
  !*** ./src/common/variables.ts ***!
  \*********************************/
/*! exports provided: PORT, SERVER_URL, UPDATE_INTERVAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INTERVAL", function() { return UPDATE_INTERVAL; });
var PORT = process.env.PORT || 3000;
var SERVER_URL = 'http://localhost:' + PORT;
var UPDATE_INTERVAL = 1000 / 25;


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

var app = __webpack_require__(/*! express */ "express")();
var http = __webpack_require__(/*! http */ "http").createServer(app);
var socketIO = __webpack_require__(/*! socket.io */ "socket.io")(http);
app.get('/', function (req, res) {
    res.send('<h1>Server</h1>');
});
var players = {};
socketIO.on('connection', function (socket) {
    socket.on('join', function () {
        players[socket.id] = {
            x: 300,
            y: 300
        };
        socketIO.sockets.emit('joined', true);
    });
    socket.on('movement', function (data) {
        var player = players[socket.id] || {};
        if (data.left) {
            player.x -= 5;
        }
        if (data.up) {
            player.y -= 5;
        }
        if (data.right) {
            player.x += 5;
        }
        if (data.down) {
            player.y += 5;
        }
    });
});
setInterval(function () {
    socketIO.sockets.emit('state', players);
}, _common__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INTERVAL"]);
http.listen(_common__WEBPACK_IMPORTED_MODULE_0__["PORT"], function () {
    console.log('listening on ' + _common__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]);
});


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

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCOzs7Ozs7Ozs7Ozs7O0FDRDVCO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3RDLElBQU0sVUFBVSxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQztBQUM5QyxJQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDRHpDO0FBQUE7QUFBOEQ7QUFFOUQsSUFBTSxHQUFHLEdBQUcsbUJBQU8sQ0FBQyx3QkFBUyxDQUFDLEVBQUUsQ0FBQztBQUNqQyxJQUFNLElBQUksR0FBRyxtQkFBTyxDQUFDLGtCQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsSUFBTSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyw0QkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUTtJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLE9BQU8sR0FBUSxFQUFFLENBQUM7QUFDeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFjO0lBQ3ZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUc7WUFDbkIsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztTQUNQLENBQUM7UUFDRixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxjQUFJO1FBQ3hCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2Y7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDO0lBQ1YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLENBQUMsRUFBRSx1REFBZSxDQUFDLENBQUM7QUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0Q0FBSSxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGtEQUFVLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0NILG9DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InNlcnZlci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZhcmlhYmxlcyc7XHJcbiIsImV4cG9ydCBjb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5leHBvcnQgY29uc3QgU0VSVkVSX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBQT1JUO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0lOVEVSVkFMID0gMTAwMCAvIDI1O1xyXG4iLCJpbXBvcnQgeyBTb2NrZXQgfSBmcm9tICdzb2NrZXQuaW8nO1xyXG5pbXBvcnQgeyBQT1JULCBTRVJWRVJfVVJMLCBVUERBVEVfSU5URVJWQUwgfSBmcm9tICcuLi9jb21tb24nO1xyXG5cclxuY29uc3QgYXBwID0gcmVxdWlyZSgnZXhwcmVzcycpKCk7XHJcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJykuY3JlYXRlU2VydmVyKGFwcCk7XHJcbmNvbnN0IHNvY2tldElPID0gcmVxdWlyZSgnc29ja2V0LmlvJykoaHR0cCk7XHJcblxyXG5hcHAuZ2V0KCcvJywgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xyXG4gIHJlcy5zZW5kKCc8aDE+U2VydmVyPC9oMT4nKTtcclxufSk7XHJcblxyXG5jb25zdCBwbGF5ZXJzOiBhbnkgPSB7fTtcclxuc29ja2V0SU8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBTb2NrZXQpID0+IHtcclxuICBzb2NrZXQub24oJ2pvaW4nLCBmdW5jdGlvbigpIHtcclxuICAgIHBsYXllcnNbc29ja2V0LmlkXSA9IHtcclxuICAgICAgeDogMzAwLFxyXG4gICAgICB5OiAzMDBcclxuICAgIH07XHJcbiAgICBzb2NrZXRJTy5zb2NrZXRzLmVtaXQoJ2pvaW5lZCcsIHRydWUpO1xyXG4gIH0pO1xyXG4gIHNvY2tldC5vbignbW92ZW1lbnQnLCBkYXRhID0+IHtcclxuICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbc29ja2V0LmlkXSB8fCB7fTtcclxuICAgIGlmIChkYXRhLmxlZnQpIHtcclxuICAgICAgcGxheWVyLnggLT0gNTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnVwKSB7XHJcbiAgICAgIHBsYXllci55IC09IDU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5yaWdodCkge1xyXG4gICAgICBwbGF5ZXIueCArPSA1O1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuZG93bikge1xyXG4gICAgICBwbGF5ZXIueSArPSA1O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gIHNvY2tldElPLnNvY2tldHMuZW1pdCgnc3RhdGUnLCBwbGF5ZXJzKTtcclxufSwgVVBEQVRFX0lOVEVSVkFMKTtcclxuXHJcbmh0dHAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnbGlzdGVuaW5nIG9uICcgKyBTRVJWRVJfVVJMKTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==