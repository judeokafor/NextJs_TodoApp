webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Todo.js":
/*!**********************************!*\
  !*** ./pages/components/Todo.js ***!
  \**********************************/
/*! exports provided: Todo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TodoItem */ "./pages/components/TodoItem.js");
/* harmony import */ var _AddTodo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddTodo */ "./pages/components/AddTodo.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);













var Todo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Todo, _Component);

  function Todo() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Todo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Todo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      todos: _this.props.props.todos // todos: [
      //   {
      //     id: uuid.v4(),
      //     title: "Learn React hooks",
      //     completed: false,
      //     created: Date.now()
      //   },
      //   {
      //     id: uuid.v4(),
      //     title: "Learn Progressive Web App",
      //     completed: false,
      //     created: Date.now()
      //   },
      //   {
      //     id: uuid.v4(),
      //     title: "Learn React Router",
      //     completed: true,
      //     created: Date.now()
      //   },
      //   {
      //     id: uuid.v4(),
      //     title: "Read documentation of next js",
      //     completed: true,
      //     created: Date.now()
      //   },
      //   {
      //     id: uuid.v4(),
      //     title: "Read documentation of next js",
      //     completed: true,
      //     created: Date.now()
      //   }
      // ]
      // Toogle todo

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "markComplete", function (id) {
      _this.setState({
        todos: _this.state.todos.map(function (todo) {
          if (todo.id == id) {
            todo.completed = !todo.completed;
          }

          return todo;
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "delTodo", function (id) {
      _this.setState({
        todos: _this.state.todos.filter(function (todo) {
          return todo.id !== id;
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addTodo", function (title) {
      var newTodo = {
        id: uuid__WEBPACK_IMPORTED_MODULE_11___default.a.v4(),
        title: title,
        completed: false
      };

      _this.setState({
        todos: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.todos), [newTodo])
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Todo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log('inside todo component', this.props.props.todos);
      return [react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AddTodo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        addTodo: this.addTodo
      }), this.state.todos.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: todo.id,
          todo: todo,
          markComplete: _this2.markComplete,
          delTodo: _this2.delTodo
        });
      })];
    }
  }]);

  return Todo;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]); // Prop-Types

Todo.propTypes = {
  todos: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ })

})
//# sourceMappingURL=index.js.028de22211bed894155e.hot-update.js.map