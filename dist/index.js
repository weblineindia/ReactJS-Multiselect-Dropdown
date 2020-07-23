function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var styled = _interopDefault(require('@emotion/styled'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var ClickOutside = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ClickOutside, _React$Component);

  function ClickOutside() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.container = React__default.createRef();

    _this.handleClick = function (event) {
      var container = _this.container.current;
      var target = event.target;
      var onClickOutside = _this.props.onClickOutside;

      if (container && container === target || container && !container.contains(target)) {
        onClickOutside(event);
      }
    };

    return _this;
  }

  var _proto = ClickOutside.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('click', this.handleClick, true);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, true);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children;
    return /*#__PURE__*/React__default.createElement("div", {
      className: className,
      ref: this.container
    }, children);
  };

  return ClickOutside;
}(React__default.Component);

ClickOutside.propTypes = {
  onClickOutside: PropTypes__default.func.isRequired,
  children: PropTypes__default.node.isRequired,
  className: PropTypes__default.string
};

var valueExistInSelected = function valueExistInSelected(value, values, props) {
  return !!values.find(function (val) {
    return getByPath(val, props['valueField']) === value;
  });
};
var hexToRGBA = function hexToRGBA(hex, alpha) {
  var RR = parseInt(hex.slice(1, 3), 16);
  var GG = parseInt(hex.slice(3, 5), 16);
  var BB = parseInt(hex.slice(5, 7), 16);
  return "rgba(" + RR + ", " + GG + ", " + BB + (alpha && ", " + alpha) + ")";
};
var debounce = function debounce(fn, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
};
var isEqual = function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};
var getByPath = function getByPath(object, path) {
  if (!path) {
    return;
  }

  return path.split('.').reduce(function (acc, value) {
    return acc[value];
  }, object);
};
var getProp = function getProp(object, path, defaultValue) {
  if (!path) {
    return object;
  }

  var normalizedPath = Array.isArray(path) ? path : path.split('.').filter(function (item) {
    return item.length;
  });

  if (!normalizedPath.length) {
    return object === undefined ? defaultValue : object;
  }

  return getProp(object[normalizedPath.shift()], normalizedPath, defaultValue);
};
var isomorphicWindow = function isomorphicWindow() {
  if (typeof window == 'undefined') {
    global.window = {};
  }

  return window;
};

var LIB_NAME = 'react-dropdown-select';

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 5px;\n  border-radius: 2px;\n  line-height: 21px;\n  margin: 3px 0 3px 5px;\n  background: ", ";\n  color: #fff;\n  display: flex;\n  flex-direction: ", ";\n  \n\n  .", "-option-remove {\n    cursor: pointer;\n    width: 22px;\n    height: 22px;\n    display: inline-block;\n    text-align: center;\n    margin: 0 -5px 0 0px;\n    border-radius: 0 3px 3px 0;\n\n    :hover {\n      color: tomato;\n    }\n  }\n\n  :hover,\n  :hover > span {\n    opacity: 0.9;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Option = function Option(_ref) {
  var item = _ref.item,
      props = _ref.props,
      state = _ref.state,
      methods = _ref.methods;
  return item && props.optionRenderer ? props.optionRenderer({
    item: item,
    props: props,
    state: state,
    methods: methods
  }) : /*#__PURE__*/React__default.createElement(OptionComponent, {
    role: "listitem",
    disabled: props.disabled,
    direction: props.direction,
    className: LIB_NAME + "-option",
    color: props.color
  }, /*#__PURE__*/React__default.createElement("span", {
    className: LIB_NAME + "-option-label"
  }, getByPath(item, props.labelField)), /*#__PURE__*/React__default.createElement("span", {
    className: LIB_NAME + "-option-remove",
    onClick: function onClick(event) {
      return methods.removeItem(event, item, props.closeOnSelect);
    }
  }, "\xD7"));
};

var OptionComponent = styled.span(_templateObject(), function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (_ref3) {
  var direction = _ref3.direction;
  return direction === 'rtl' ? 'row-reverse' : 'row';
}, LIB_NAME);

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  line-height: inherit;\n  width: calc(", " + 5px);\n  border: none;\n  margin-left: 5px;\n  background: transparent;\n  font-size: smaller;\n  ", "\n  :focus {\n    outline: none;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var handlePlaceHolder = function handlePlaceHolder(props, state) {
  var addPlaceholder = props.addPlaceholder,
      searchable = props.searchable,
      placeholder = props.placeholder;
  var noValues = state.values && state.values.length === 0;
  var hasValues = state.values && state.values.length > 0;

  if (hasValues && addPlaceholder && searchable) {
    return addPlaceholder;
  }

  if (noValues) {
    return placeholder;
  }

  if (hasValues && !searchable) {
    return '';
  }

  return '';
};

var Input = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Input, _Component);

  function Input() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.input = React__default.createRef();

    _this.onBlur = function (event) {
      event.stopPropagation();

      if (!_this.props.state.dropdown) {
        return _this.input.current.blur();
      }

      return _this.input.current.focus();
    };

    _this.handleKeyPress = function (event) {
      var _this$props = _this.props,
          props = _this$props.props,
          state = _this$props.state,
          methods = _this$props.methods;
      return props.create && event.key === 'Enter' && !valueExistInSelected(state.search, state.values, _this.props) && state.search && state.cursor === null && methods.createNew(state.search);
    };

    return _this;
  }

  var _proto = Input.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.state.dropdown || prevProps.state.dropdown !== this.props.state.dropdown && this.props.state.dropdown || this.props.props.autoFocus) {
      this.input.current.focus();
    }

    if (prevProps.state.dropdown !== this.props.state.dropdown && !this.props.state.dropdown) {
      this.input.current.blur();
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        props = _this$props2.props,
        state = _this$props2.state,
        methods = _this$props2.methods;

    if (props.inputRenderer) {
      return props.inputRenderer({
        props: props,
        state: state,
        methods: methods,
        inputRef: this.input
      });
    }

    return /*#__PURE__*/React__default.createElement(InputComponent, {
      ref: this.input,
      tabIndex: "-1",
      onFocus: function onFocus(event) {
        return event.stopPropagation();
      },
      className: LIB_NAME + "-input",
      size: methods.getInputSize(),
      value: state.search,
      readOnly: !props.searchable,
      onClick: function onClick() {
        return methods.dropDown('open');
      },
      onKeyPress: this.handleKeyPress,
      onChange: methods.setSearch,
      onBlur: this.onBlur,
      placeholder: handlePlaceHolder(props, state),
      disabled: props.disabled
    });
  };

  return Input;
}(React.Component);

Input.propTypes = {
  props: PropTypes.object,
  state: PropTypes.object,
  methods: PropTypes.object
};
var InputComponent = styled.input(_templateObject$1(), function (_ref) {
  var size = _ref.size;
  return size + "ch";
}, function (_ref2) {
  var readOnly = _ref2.readOnly;
  return readOnly && 'cursor: pointer;';
});

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var Content = function Content(_ref) {
  var props = _ref.props,
      state = _ref.state,
      methods = _ref.methods;
  return /*#__PURE__*/React__default.createElement(ContentComponent, {
    className: LIB_NAME + "-content " + (props.multi ? LIB_NAME + "-type-multi" : LIB_NAME + "-type-single"),
    onClick: function onClick(event) {
      event.stopPropagation();
      methods.dropDown('open');
    }
  }, props.contentRenderer ? props.contentRenderer({
    props: props,
    state: state,
    methods: methods
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, props.multi ? state.values && state.values.map(function (item) {
    return /*#__PURE__*/React__default.createElement(Option, {
      key: "" + getByPath(item, props.valueField) + getByPath(item, props.labelField),
      item: item,
      state: state,
      props: props,
      methods: methods
    });
  }) : state.values && state.values.length > 0 && /*#__PURE__*/React__default.createElement("span", null, getByPath(state.values[0], props.labelField)), /*#__PURE__*/React__default.createElement(Input, {
    props: props,
    methods: methods,
    state: state
  })));
};

var ContentComponent = styled.div(_templateObject$2());

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 10px;\n  text-align: center;\n  color: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var NoData = function NoData(_ref) {
  var props = _ref.props,
      state = _ref.state,
      methods = _ref.methods;
  return props.noDataRenderer ? props.noDataRenderer({
    props: props,
    state: state,
    methods: methods
  }) : /*#__PURE__*/React__default.createElement(NoDataComponent, {
    className: LIB_NAME + "-no-data",
    color: props.color
  }, props.noDataLabel);
};

var NoDataComponent = styled.div(_templateObject$3(), function (_ref2) {
  var color = _ref2.color;
  return color;
});

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 5px 10px;\n  cursor: pointer;\n  border-bottom: 1px solid #fff;\n\n  &.", "-item-active {\n    border-bottom: 1px solid #fff;\n    ", "\n  }\n\n  :hover,\n  :focus {\n    background: ", ";\n    outline: none;\n  }\n\n  &.", "-item-selected {\n    ", "\n  }\n\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var Item = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Item, _Component);

  function Item() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.item = React__default.createRef();
    return _this;
  }

  var _proto = Item.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.state.cursor === this.props.itemIndex) {
      this.item.current && this.item.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        props = _this$props.props,
        state = _this$props.state,
        methods = _this$props.methods,
        item = _this$props.item,
        itemIndex = _this$props.itemIndex;

    if (props.itemRenderer) {
      return props.itemRenderer({
        item: item,
        itemIndex: itemIndex,
        props: props,
        state: state,
        methods: methods
      });
    }

    if (!props.keepSelectedInList && methods.isSelected(item)) {
      return null;
    }

    return /*#__PURE__*/React__default.createElement(ItemComponent, {
      role: "option",
      ref: this.item,
      "aria-selected": methods.isSelected(item),
      "aria-disabled": item.disabled,
      disabled: item.disabled,
      "aria-label": getByPath(item, props.labelField),
      key: "" + getByPath(item, props.valueField) + getByPath(item, props.labelField),
      tabIndex: "-1",
      className: LIB_NAME + "-item " + (methods.isSelected(item) ? LIB_NAME + "-item-selected" : '') + " " + (state.cursor === itemIndex ? LIB_NAME + "-item-active" : '') + " " + (item.disabled ? LIB_NAME + "-item-disabled" : ''),
      onClick: item.disabled ? undefined : function () {
        return methods.addItem(item);
      },
      onKeyPress: item.disabled ? undefined : function () {
        return methods.addItem(item);
      },
      color: props.color
    }, getByPath(item, props.labelField), " ", item.disabled && /*#__PURE__*/React__default.createElement("ins", null, props.disabledLabel));
  };

  return Item;
}(React.Component);

Item.propTypes = {
  props: PropTypes.any,
  state: PropTypes.any,
  methods: PropTypes.any,
  item: PropTypes.any,
  itemIndex: PropTypes.any
};
var ItemComponent = styled.span(_templateObject$4(), LIB_NAME, function (_ref) {
  var disabled = _ref.disabled,
      color = _ref.color;
  return !disabled && color && "background: " + hexToRGBA(color, 0.1) + ";";
}, function (_ref2) {
  var color = _ref2.color;
  return color && hexToRGBA(color, 0.1);
}, LIB_NAME, function (_ref3) {
  var disabled = _ref3.disabled,
      color = _ref3.color;
  return disabled ? "\n    background: #f2f2f2;\n    color: #ccc;\n    " : "\n    background: " + color + ";\n    color: #fff;\n    border-bottom: 1px solid #fff;\n    ";
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? "\n    background: #f2f2f2;\n    color: #ccc;\n\n    ins {\n      text-decoration: none;\n      border:1px solid #ccc;\n      border-radius: 2px;\n      padding: 0px 3px;\n      font-size: x-small;\n      text-transform: uppercase;\n    }\n    " : '';
});

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  padding: 5px 10px;\n\n  :hover {\n    background: ", ";\n    outline: none;\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  ", ";\n\n  ", ";\n  border: 1px solid #ccc;\n  width: ", "px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 10px 0 ", ";\n  max-height: ", ";\n  overflow: auto;\n  z-index: 9;\n\n  :focus {\n    outline: none;\n  }\n}\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var dropdownPosition = function dropdownPosition(props, methods) {
  var DropdownBoundingClientRect = methods.getSelectRef().getBoundingClientRect();
  var dropdownHeight = DropdownBoundingClientRect.bottom + parseInt(props.dropdownHeight, 10) + parseInt(props.dropdownGap, 10);

  if (props.dropdownPosition !== 'auto') {
    return props.dropdownPosition;
  }

  if (dropdownHeight > isomorphicWindow().innerHeight && dropdownHeight > DropdownBoundingClientRect.top) {
    return 'top';
  }

  return 'bottom';
};

var Dropdown = function Dropdown(_ref) {
  var props = _ref.props,
      state = _ref.state,
      methods = _ref.methods;
  return /*#__PURE__*/React__default.createElement(DropDown, {
    tabIndex: "-1",
    "aria-expanded": "true",
    role: "list",
    dropdownPosition: dropdownPosition(props, methods),
    selectBounds: state.selectBounds,
    portal: props.portal,
    dropdownGap: props.dropdownGap,
    dropdownHeight: props.dropdownHeight,
    className: LIB_NAME + "-dropdown " + LIB_NAME + "-dropdown-position-" + dropdownPosition(props, methods)
  }, props.dropdownRenderer ? props.dropdownRenderer({
    props: props,
    state: state,
    methods: methods
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, props.create && state.search && !valueExistInSelected(state.search, state.values, props) && /*#__PURE__*/React__default.createElement(AddNew, {
    className: LIB_NAME + "-dropdown-add-new",
    color: props.color,
    onClick: function onClick() {
      return methods.createNew(state.search);
    }
  }, props.createNewLabel.replace('{search}', "\"" + state.search + "\"")), methods.searchResults().length === 0 ? /*#__PURE__*/React__default.createElement(NoData, {
    className: LIB_NAME + "-no-data",
    state: state,
    props: props,
    methods: methods
  }) : methods.searchResults().map(function (item, itemIndex) {
    return /*#__PURE__*/React__default.createElement(Item, {
      key: item[props.valueField],
      item: item,
      itemIndex: itemIndex,
      state: state,
      props: props,
      methods: methods
    });
  })));
};

var DropDown = styled.div(_templateObject$5(), function (_ref2) {
  var selectBounds = _ref2.selectBounds,
      dropdownGap = _ref2.dropdownGap,
      dropdownPosition = _ref2.dropdownPosition;
  return dropdownPosition === 'top' ? "bottom: " + (selectBounds.height + 2 + dropdownGap) + "px" : "top: " + (selectBounds.height + 2 + dropdownGap) + "px";
}, function (_ref3) {
  var selectBounds = _ref3.selectBounds,
      dropdownGap = _ref3.dropdownGap,
      dropdownPosition = _ref3.dropdownPosition,
      portal = _ref3.portal;
  return portal ? "\n      position: fixed;\n      " + (dropdownPosition === 'bottom' ? "top: " + (selectBounds.bottom + dropdownGap) + "px;" : "bottom: " + (isomorphicWindow().innerHeight - selectBounds.top + dropdownGap) + "px;") + "\n      left: " + (selectBounds.left - 1) + "px;" : 'left: -1px;';
}, function (_ref4) {
  var selectBounds = _ref4.selectBounds;
  return selectBounds.width;
}, function () {
  return hexToRGBA('#000000', 0.2);
}, function (_ref5) {
  var dropdownHeight = _ref5.dropdownHeight;
  return dropdownHeight;
});
var AddNew = styled.div(_templateObject2(), function (_ref6) {
  var color = _ref6.color;
  return color;
}, function (_ref7) {
  var color = _ref7.color;
  return color && hexToRGBA(color, 0.1);
});

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  @keyframes dual-ring-spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n\n  padding: 0 5px;\n  display: block;\n  width: auto;\n  height: auto;\n\n  :after {\n    content: ' ';\n    display: block;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border-width: 1px;\n    border-style: solid;\n    border-color: ", " transparent;\n    animation: dual-ring-spin 0.7s ease-in-out infinite;\n    margin: 0 0 0 -10px;\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

var Loading = function Loading(_ref) {
  var props = _ref.props;
  return props.loadingRenderer ? props.loadingRenderer({
    props: props
  }) : /*#__PURE__*/React__default.createElement(LoadingComponent, {
    className: LIB_NAME + "-loading",
    color: props.color
  });
};

var LoadingComponent = styled.div(_templateObject$6(), function (_ref2) {
  var color = _ref2.color;
  return color;
});

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  line-height: 25px;\n  margin: 0 10px;\n  cursor: pointer;\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    color: tomato;\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

var Clear = function Clear(_ref) {
  var props = _ref.props,
      state = _ref.state,
      methods = _ref.methods;
  return props.clearRenderer ? props.clearRenderer({
    props: props,
    state: state,
    methods: methods
  }) : /*#__PURE__*/React__default.createElement(ClearComponent, {
    className: LIB_NAME + "-clear",
    tabIndex: "-1",
    onClick: function onClick() {
      return methods.clearAll();
    },
    onKeyPress: function onKeyPress() {
      return methods.clearAll();
    }
  }, "\xD7");
};

var ClearComponent = styled.div(_templateObject$7());

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n  border-left: 1px solid #ccc;\n  width: 1px;\n  height: 25px;\n  display: block;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}

var Separator = function Separator(_ref) {
  var props = _ref.props,
      state = _ref.state,
      methods = _ref.methods;
  return props.separatorRenderer ? props.separatorRenderer({
    props: props,
    state: state,
    methods: methods
  }) : /*#__PURE__*/React__default.createElement(SeparatorComponent, {
    className: LIB_NAME + "-separator"
  });
};

var SeparatorComponent = styled.div(_templateObject$8());

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  text-align: center;\n  ", ";\n  cursor: pointer;\n\n  svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  :hover {\n    path {\n      stroke: ", ";\n    }\n  }\n\n  :focus {\n    outline: none;\n\n    path {\n      stroke: ", ";\n    }\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var DropdownHandle = function DropdownHandle(_ref) {
  var props = _ref.props,
      state = _ref.state,
      methods = _ref.methods;
  return /*#__PURE__*/React__default.createElement(DropdownHandleComponent, {
    tabIndex: "-1",
    onClick: function onClick(event) {
      return methods.dropDown(state.dropdown ? 'close' : 'open', event);
    },
    dropdownOpen: state.dropdown,
    onKeyPress: function onKeyPress(event) {
      return methods.dropDown('toggle', event);
    },
    onKeyDown: function onKeyDown(event) {
      return methods.dropDown('toggle', event);
    },
    className: LIB_NAME + "-dropdown-handle",
    rotate: props.dropdownHandleRenderer ? 0 : 1,
    color: props.color
  }, props.dropdownHandleRenderer ? props.dropdownHandleRenderer({
    props: props,
    state: state,
    methods: methods
  }) : /*#__PURE__*/React__default.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 40 40"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M31 26.4q0 .3-.2.5l-1.1 1.2q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.2q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z"
  })));
};

var DropdownHandleComponent = styled.div(_templateObject$9(), function (_ref2) {
  var dropdownOpen = _ref2.dropdownOpen,
      rotate = _ref2.rotate;
  return dropdownOpen ? "\n      pointer-events: all;\n      " + (rotate ? 'transform: rotate(0deg);margin: 0px 0 -3px 5px;' : '') + "\n      " : "\n      pointer-events: none;\n      " + (rotate ? 'margin: 0 0 0 5px;transform: rotate(180deg);' : '') + "\n      ";
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
});

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  border: 1px solid #ccc;\n  width: 100%;\n  border-radius: 2px;\n  padding: 2px 5px;\n  flex-direction: row;\n  direction: ", ";\n  align-items: center;\n  cursor: pointer;\n  min-height: 36px;\n  ", "\n\n  :hover,\n  :focus-within {\n    border-color: ", ";\n  }\n\n  :focus,\n  :focus-within {\n    outline: 0;\n    box-shadow: 0 0 0 3px ", ";\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var Select = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Select, _Component);

  function Select(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;

    _this.onDropdownClose = function () {
      _this.setState({
        cursor: null
      });

      _this.props.onDropdownClose();
    };

    _this.onScroll = function () {
      if (_this.props.closeOnScroll) {
        _this.dropDown('close');
      }

      _this.updateSelectBounds();
    };

    _this.updateSelectBounds = function () {
      return _this.select.current && _this.setState({
        selectBounds: _this.select.current.getBoundingClientRect()
      });
    };

    _this.getSelectBounds = function () {
      return _this.state.selectBounds;
    };

    _this.dropDown = function (action, event, force) {
      if (action === void 0) {
        action = 'toggle';
      }

      if (force === void 0) {
        force = false;
      }

      var target = event && event.target || event && event.srcElement;

      if (_this.props.onDropdownCloseRequest !== undefined && _this.state.dropdown && force === false && action === 'close') {
        return _this.props.onDropdownCloseRequest({
          props: _this.props,
          methods: _this.methods,
          state: _this.state,
          close: function close() {
            return _this.dropDown('close', null, true);
          }
        });
      }

      if (_this.props.portal && !_this.props.closeOnScroll && !_this.props.closeOnSelect && event && target && target.offsetParent && target.offsetParent.classList.contains('react-dropdown-select-dropdown')) {
        return;
      }

      if (_this.props.keepOpen) {
        return _this.setState({
          dropdown: true
        });
      }

      if (action === 'close' && _this.state.dropdown) {
        _this.select.current.blur();

        return _this.setState({
          dropdown: false,
          search: _this.props.clearOnBlur ? '' : _this.state.search
        });
      }

      if (action === 'open' && !_this.state.dropdown) {
        return _this.setState({
          dropdown: true
        });
      }

      if (action === 'toggle') {
        _this.select.current.focus();

        return _this.setState({
          dropdown: !_this.state.dropdown
        });
      }

      return false;
    };

    _this.getSelectRef = function () {
      return _this.select.current;
    };

    _this.addItem = function (item) {
      if (_this.props.multi) {
        if (valueExistInSelected(getByPath(item, _this.props.valueField), _this.state.values, _this.props)) {
          return _this.removeItem(null, item, false);
        }

        _this.setState({
          values: [].concat(_this.state.values, [item])
        });
      } else {
        _this.setState({
          values: [item],
          dropdown: false
        });
      }

      _this.props.clearOnSelect && _this.setState({
        search: ''
      });
      return true;
    };

    _this.removeItem = function (event, item, close) {
      if (close === void 0) {
        close = false;
      }

      if (event && close) {
        event.preventDefault();
        event.stopPropagation();

        _this.dropDown('close');
      }

      _this.setState({
        values: _this.state.values.filter(function (values) {
          return getByPath(values, _this.props.valueField) !== getByPath(item, _this.props.valueField);
        })
      });
    };

    _this.setSearch = function (event) {
      _this.setState({
        cursor: null
      });

      _this.setState({
        search: event.target.value
      });
    };

    _this.getInputSize = function () {
      if (_this.state.search) {
        return _this.state.search.length;
      }

      if (_this.state.values.length > 0) {
        return _this.props.addPlaceholder.length;
      }

      return _this.props.placeholder.length;
    };

    _this.toggleSelectAll = function () {
      return _this.setState({
        values: _this.state.values.length === 0 ? _this.selectAll() : _this.clearAll()
      });
    };

    _this.clearAll = function () {
      _this.props.onClearAll();

      _this.setState({
        values: []
      });
    };

    _this.selectAll = function (valuesList) {
      if (valuesList === void 0) {
        valuesList = [];
      }

      _this.props.onSelectAll();

      var values = valuesList.length > 0 ? valuesList : _this.props.options.filter(function (option) {
        return !option.disabled;
      });

      _this.setState({
        values: values
      });
    };

    _this.isSelected = function (option) {
      return !!_this.state.values.find(function (value) {
        return getByPath(value, _this.props.valueField) === getByPath(option, _this.props.valueField);
      });
    };

    _this.areAllSelected = function () {
      return _this.state.values.length === _this.props.options.filter(function (option) {
        return !option.disabled;
      }).length;
    };

    _this.safeString = function (string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    _this.sortBy = function () {
      var _this$props = _this.props,
          sortBy = _this$props.sortBy,
          options = _this$props.options;

      if (!sortBy) {
        return options;
      }

      options.sort(function (a, b) {
        if (getProp(a, sortBy) < getProp(b, sortBy)) {
          return -1;
        } else if (getProp(a, sortBy) > getProp(b, sortBy)) {
          return 1;
        } else {
          return 0;
        }
      });
      return options;
    };

    _this.searchFn = function (_ref) {
      var state = _ref.state,
          methods = _ref.methods;
      var regexp = new RegExp(methods.safeString(state.search), 'i');
      return methods.sortBy().filter(function (item) {
        return regexp.test(getByPath(item, _this.props.searchBy) || getByPath(item, _this.props.valueField));
      });
    };

    _this.searchResults = function () {
      var args = {
        state: _this.state,
        props: _this.props,
        methods: _this.methods
      };
      return _this.props.searchFn(args) || _this.searchFn(args);
    };

    _this.activeCursorItem = function (activeCursorItem) {
      return _this.setState({
        activeCursorItem: activeCursorItem
      });
    };

    _this.handleKeyDown = function (event) {
      var args = {
        event: event,
        state: _this.state,
        props: _this.props,
        methods: _this.methods,
        setState: _this.setState.bind(_assertThisInitialized(_this))
      };
      return _this.props.handleKeyDownFn(args) || _this.handleKeyDownFn(args);
    };

    _this.handleKeyDownFn = function (_ref2) {
      var event = _ref2.event,
          state = _ref2.state,
          props = _ref2.props,
          methods = _ref2.methods,
          setState = _ref2.setState;
      var cursor = state.cursor;
      var escape = event.key === 'Escape';
      var enter = event.key === 'Enter';
      var arrowUp = event.key === 'ArrowUp';
      var arrowDown = event.key === 'ArrowDown';
      var backspace = event.key === 'Backspace';
      var tab = event.key === 'Tab' && !event.shiftKey;
      var shiftTab = event.shiftKey && event.key === 'Tab';

      if (arrowDown && !state.dropdown) {
        event.preventDefault();

        _this.dropDown('open');

        return setState({
          cursor: 0
        });
      }

      if ((arrowDown || tab && state.dropdown) && cursor === null) {
        return setState({
          cursor: 0
        });
      }

      if (arrowUp || arrowDown || shiftTab && state.dropdown || tab && state.dropdown) {
        event.preventDefault();
      }

      if (escape) {
        _this.dropDown('close');
      }

      if (enter) {
        var currentItem = methods.searchResults()[cursor];

        if (currentItem && !currentItem.disabled) {
          if (props.create && valueExistInSelected(state.search, state.values, props)) {
            return null;
          }

          methods.addItem(currentItem);
        }
      }

      if ((arrowDown || tab && state.dropdown) && methods.searchResults().length === cursor) {
        return setState({
          cursor: 0
        });
      }

      if (arrowDown || tab && state.dropdown) {
        setState(function (prevState) {
          return {
            cursor: prevState.cursor + 1
          };
        });
      }

      if ((arrowUp || shiftTab && state.dropdown) && cursor > 0) {
        setState(function (prevState) {
          return {
            cursor: prevState.cursor - 1
          };
        });
      }

      if ((arrowUp || shiftTab && state.dropdown) && cursor === 0) {
        setState({
          cursor: methods.searchResults().length
        });
      }

      if (backspace && props.multi && props.backspaceDelete && _this.getInputSize() === 0) {
        _this.setState({
          values: _this.state.values.slice(0, -1)
        });
      }
    };

    _this.renderDropdown = function () {
      return _this.props.portal ? ReactDOM.createPortal( /*#__PURE__*/React__default.createElement(Dropdown, {
        props: _this.props,
        state: _this.state,
        methods: _this.methods
      }), _this.dropdownRoot) : /*#__PURE__*/React__default.createElement(Dropdown, {
        props: _this.props,
        state: _this.state,
        methods: _this.methods
      });
    };

    _this.createNew = function (item) {
      var _newValue;

      var newValue = (_newValue = {}, _newValue[_this.props.labelField] = item, _newValue[_this.props.valueField] = item, _newValue);

      _this.addItem(newValue);

      _this.props.onCreateNew(newValue);

      _this.setState({
        search: ''
      });
    };

    _this.state = {
      dropdown: false,
      values: _props.values,
      search: '',
      selectBounds: {},
      cursor: null
    };
    _this.methods = {
      removeItem: _this.removeItem,
      dropDown: _this.dropDown,
      addItem: _this.addItem,
      setSearch: _this.setSearch,
      getInputSize: _this.getInputSize,
      toggleSelectAll: _this.toggleSelectAll,
      clearAll: _this.clearAll,
      selectAll: _this.selectAll,
      searchResults: _this.searchResults,
      getSelectRef: _this.getSelectRef,
      isSelected: _this.isSelected,
      getSelectBounds: _this.getSelectBounds,
      areAllSelected: _this.areAllSelected,
      handleKeyDown: _this.handleKeyDown,
      activeCursorItem: _this.activeCursorItem,
      createNew: _this.createNew,
      sortBy: _this.sortBy,
      safeString: _this.safeString
    };
    _this.select = React__default.createRef();
    _this.dropdownRoot = typeof document !== 'undefined' && document.createElement('div');
    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.portal && this.props.portal.appendChild(this.dropdownRoot);
    isomorphicWindow().addEventListener('resize', debounce(this.updateSelectBounds));
    isomorphicWindow().addEventListener('scroll', debounce(this.onScroll));
    this.dropDown('close');

    if (this.select) {
      this.updateSelectBounds();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    if (!isEqual(prevProps.values, this.props.values) && isEqual(prevProps.values, prevState.values)) {
      this.setState({
        values: this.props.values
      }, function () {
        _this2.props.onChange(_this2.state.values);
      });
      this.updateSelectBounds();
    }

    if (prevState.values !== this.state.values) {
      this.props.onChange(this.state.values);
      this.updateSelectBounds();
    }

    if (prevState.search !== this.state.search) {
      this.updateSelectBounds();
    }

    if (prevState.values !== this.state.values && this.props.closeOnSelect) {
      this.dropDown('close');
    }

    if (prevProps.multi !== this.props.multi) {
      this.updateSelectBounds();
    }

    if (prevState.dropdown && prevState.dropdown !== this.state.dropdown) {
      this.onDropdownClose();
    }

    if (!prevState.dropdown && prevState.dropdown !== this.state.dropdown) {
      this.props.onDropdownOpen();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.portal && this.props.portal.removeChild(this.dropdownRoot);
    isomorphicWindow().removeEventListener('resize', debounce(this.updateSelectBounds, this.props.debounceDelay));
    isomorphicWindow().removeEventListener('scroll', debounce(this.onScroll, this.props.debounceDelay));
  };

  _proto.render = function render() {
    var _this3 = this;

    return /*#__PURE__*/React__default.createElement(ClickOutside, {
      onClickOutside: function onClickOutside(event) {
        return _this3.dropDown('close', event);
      }
    }, /*#__PURE__*/React__default.createElement(ReactDropdownSelect, _extends({
      onKeyDown: this.handleKeyDown,
      onClick: function onClick(event) {
        return _this3.dropDown('open', event);
      },
      tabIndex: this.props.disabled ? '-1' : '0',
      direction: this.props.direction,
      style: this.props.style,
      ref: this.select,
      disabled: this.props.disabled,
      className: LIB_NAME + " " + this.props.className,
      color: this.props.color
    }, this.props.additionalProps), /*#__PURE__*/React__default.createElement(Content, {
      props: this.props,
      state: this.state,
      methods: this.methods
    }), (this.props.name || this.props.required) && /*#__PURE__*/React__default.createElement("input", {
      tabIndex: -1,
      style: {
        opacity: 0,
        width: 0,
        position: 'absolute'
      },
      name: this.props.name,
      required: this.props.required,
      pattern: this.props.pattern,
      defaultValue: this.state.values.map(function (value) {
        return value[_this3.props.labelField];
      }).toString() || [],
      disabled: this.props.disabled
    }), this.props.loading && /*#__PURE__*/React__default.createElement(Loading, {
      props: this.props
    }), this.props.clearable && /*#__PURE__*/React__default.createElement(Clear, {
      props: this.props,
      state: this.state,
      methods: this.methods
    }), this.props.separator && /*#__PURE__*/React__default.createElement(Separator, {
      props: this.props,
      state: this.state,
      methods: this.methods
    }), this.props.dropdownHandle && /*#__PURE__*/React__default.createElement(DropdownHandle, {
      onClick: function onClick() {
        return _this3.select.current.focus();
      },
      props: this.props,
      state: this.state,
      methods: this.methods
    }), this.state.dropdown && !this.props.disabled && this.renderDropdown()));
  };

  return Select;
}(React.Component);

Select.propTypes = {
  onChange: PropTypes__default.func.isRequired,
  onDropdownClose: PropTypes__default.func,
  onDropdownCloseRequest: PropTypes__default.func,
  onDropdownOpen: PropTypes__default.func,
  onClearAll: PropTypes__default.func,
  onSelectAll: PropTypes__default.func,
  values: PropTypes__default.array,
  options: PropTypes__default.array.isRequired,
  keepOpen: PropTypes__default.bool,
  dropdownGap: PropTypes__default.number,
  multi: PropTypes__default.bool,
  placeholder: PropTypes__default.string,
  addPlaceholder: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  className: PropTypes__default.string,
  loading: PropTypes__default.bool,
  clearable: PropTypes__default.bool,
  searchable: PropTypes__default.bool,
  separator: PropTypes__default.bool,
  dropdownHandle: PropTypes__default.bool,
  searchBy: PropTypes__default.string,
  sortBy: PropTypes__default.string,
  closeOnScroll: PropTypes__default.bool,
  openOnTop: PropTypes__default.bool,
  style: PropTypes__default.object,
  contentRenderer: PropTypes__default.func,
  dropdownRenderer: PropTypes__default.func,
  itemRenderer: PropTypes__default.func,
  noDataRenderer: PropTypes__default.func,
  optionRenderer: PropTypes__default.func,
  inputRenderer: PropTypes__default.func,
  loadingRenderer: PropTypes__default.func,
  clearRenderer: PropTypes__default.func,
  separatorRenderer: PropTypes__default.func,
  dropdownHandleRenderer: PropTypes__default.func,
  direction: PropTypes__default.string,
  required: PropTypes__default.bool,
  pattern: PropTypes__default.string,
  name: PropTypes__default.string,
  backspaceDelete: PropTypes__default.bool
};
Select.defaultProps = {
  addPlaceholder: '',
  placeholder: 'Select...',
  values: [],
  options: [],
  multi: true,
  disabled: false,
  searchBy: 'label',
  sortBy: null,
  clearable: false,
  searchable: true,
  dropdownHandle: true,
  separator: false,
  keepOpen: undefined,
  noDataLabel: 'No data',
  createNewLabel: 'add {search}',
  disabledLabel: 'disabled',
  dropdownGap: 5,
  closeOnScroll: false,
  debounceDelay: 0,
  labelField: 'label',
  valueField: 'value',
  color: '#0074D9',
  keepSelectedInList: true,
  closeOnSelect: false,
  clearOnBlur: true,
  clearOnSelect: true,
  dropdownPosition: 'bottom',
  dropdownHeight: '300px',
  autoFocus: false,
  portal: null,
  create: false,
  direction: 'ltr',
  name: null,
  required: false,
  pattern: undefined,
  onChange: function onChange() {
    return undefined;
  },
  onDropdownOpen: function onDropdownOpen() {
    return undefined;
  },
  onDropdownClose: function onDropdownClose() {
    return undefined;
  },
  onDropdownCloseRequest: undefined,
  onClearAll: function onClearAll() {
    return undefined;
  },
  onSelectAll: function onSelectAll() {
    return undefined;
  },
  onCreateNew: function onCreateNew() {
    return undefined;
  },
  searchFn: function searchFn() {
    return undefined;
  },
  handleKeyDownFn: function handleKeyDownFn() {
    return undefined;
  },
  additionalProps: null,
  backspaceDelete: true
};
var ReactDropdownSelect = styled.div(_templateObject$a(), function (_ref3) {
  var direction = _ref3.direction;
  return direction;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'cursor: not-allowed;pointer-events: none;opacity: 0.3;' : 'pointer-events: all;';
}, function (_ref5) {
  var color = _ref5.color;
  return color;
}, function (_ref6) {
  var color = _ref6.color;
  return hexToRGBA(color, 0.2);
});

module.exports = Select;
//# sourceMappingURL=index.js.map
