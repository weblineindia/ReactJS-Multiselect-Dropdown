import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes__default, { object, any } from 'prop-types';
import styled from '@emotion/styled';

class ClickOutside extends React.Component {
  constructor(...args) {
    super(...args);
    this.container = React.createRef();

    this.handleClick = event => {
      const container = this.container.current;
      const {
        target
      } = event;
      const {
        onClickOutside
      } = this.props;

      if (container && container === target || container && !container.contains(target)) {
        onClickOutside(event);
      }
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, true);
  }

  render() {
    const {
      className,
      children
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      ref: this.container
    }, children);
  }

}

ClickOutside.propTypes = {
  onClickOutside: PropTypes__default.func.isRequired,
  children: PropTypes__default.node.isRequired,
  className: PropTypes__default.string
};

const valueExistInSelected = (value, values, props) => !!values.find(val => getByPath(val, props['valueField']) === value);
const hexToRGBA = (hex, alpha) => {
  const RR = parseInt(hex.slice(1, 3), 16);
  const GG = parseInt(hex.slice(3, 5), 16);
  const BB = parseInt(hex.slice(5, 7), 16);
  return `rgba(${RR}, ${GG}, ${BB}${alpha && `, ${alpha}`})`;
};
const debounce = (fn, delay = 0) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const getByPath = (object, path) => {
  if (!path) {
    return;
  }

  return path.split('.').reduce((acc, value) => acc[value], object);
};
const getProp = (object, path, defaultValue) => {
  if (!path) {
    return object;
  }

  const normalizedPath = Array.isArray(path) ? path : path.split('.').filter(item => item.length);

  if (!normalizedPath.length) {
    return object === undefined ? defaultValue : object;
  }

  return getProp(object[normalizedPath.shift()], normalizedPath, defaultValue);
};
const isomorphicWindow = () => {
  if (typeof window == 'undefined') {
    global.window = {};
  }

  return window;
};

const LIB_NAME = 'react-dropdown-select';

let _ = t => t,
    _t;

const Option = ({
  item,
  props,
  state,
  methods
}) => item && props.optionRenderer ? props.optionRenderer({
  item,
  props,
  state,
  methods
}) : /*#__PURE__*/React.createElement(OptionComponent, {
  role: "listitem",
  disabled: props.disabled,
  direction: props.direction,
  className: `${LIB_NAME}-option`,
  color: props.color
}, /*#__PURE__*/React.createElement("span", {
  className: `${LIB_NAME}-option-label`
}, getByPath(item, props.labelField)), /*#__PURE__*/React.createElement("span", {
  className: `${LIB_NAME}-option-remove`,
  onClick: event => methods.removeItem(event, item, props.closeOnSelect)
}, "\xD7"));

const OptionComponent = styled.span(_t || (_t = _`
  padding: 0 5px;
  border-radius: 2px;
  line-height: 21px;
  margin: 3px 0 3px 5px;
  background: ${0};
  color: #fff;
  display: flex;
  flex-direction: ${0};
  

  .${0}-option-remove {
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: inline-block;
    text-align: center;
    margin: 0 -5px 0 0px;
    border-radius: 0 3px 3px 0;

    :hover {
      color: tomato;
    }
  }

  :hover,
  :hover > span {
    opacity: 0.9;
  }
`), ({
  color
}) => color, ({
  direction
}) => direction === 'rtl' ? 'row-reverse' : 'row', LIB_NAME);

let _$1 = t => t,
    _t$1;

const handlePlaceHolder = (props, state) => {
  const {
    addPlaceholder,
    searchable,
    placeholder
  } = props;
  const noValues = state.values && state.values.length === 0;
  const hasValues = state.values && state.values.length > 0;

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

class Input extends Component {
  constructor(...args) {
    super(...args);
    this.input = React.createRef();

    this.onBlur = event => {
      event.stopPropagation();

      if (!this.props.state.dropdown) {
        return this.input.current.blur();
      }

      return this.input.current.focus();
    };

    this.handleKeyPress = event => {
      const {
        props,
        state,
        methods
      } = this.props;
      return props.create && event.key === 'Enter' && !valueExistInSelected(state.search, state.values, this.props) && state.search && state.cursor === null && methods.createNew(state.search);
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.state.dropdown || prevProps.state.dropdown !== this.props.state.dropdown && this.props.state.dropdown || this.props.props.autoFocus) {
      this.input.current.focus();
    }

    if (prevProps.state.dropdown !== this.props.state.dropdown && !this.props.state.dropdown) {
      this.input.current.blur();
    }
  }

  render() {
    const {
      props,
      state,
      methods
    } = this.props;

    if (props.inputRenderer) {
      return props.inputRenderer({
        props,
        state,
        methods,
        inputRef: this.input
      });
    }

    return /*#__PURE__*/React.createElement(InputComponent, {
      ref: this.input,
      tabIndex: "-1",
      onFocus: event => event.stopPropagation(),
      className: `${LIB_NAME}-input`,
      size: methods.getInputSize(),
      value: state.search,
      readOnly: !props.searchable,
      onClick: () => methods.dropDown('open'),
      onKeyPress: this.handleKeyPress,
      onChange: methods.setSearch,
      onBlur: this.onBlur,
      placeholder: handlePlaceHolder(props, state),
      disabled: props.disabled
    });
  }

}

Input.propTypes = {
  props: object,
  state: object,
  methods: object
};
const InputComponent = styled.input(_t$1 || (_t$1 = _$1`
  line-height: inherit;
  width: calc(${0} + 5px);
  border: none;
  margin-left: 5px;
  background: transparent;
  font-size: smaller;
  ${0}
  :focus {
    outline: none;
  }
`), ({
  size
}) => `${size}ch`, ({
  readOnly
}) => readOnly && 'cursor: pointer;');

let _$2 = t => t,
    _t$2;

const Content = ({
  props,
  state,
  methods
}) => {
  return /*#__PURE__*/React.createElement(ContentComponent, {
    className: `${LIB_NAME}-content ${props.multi ? `${LIB_NAME}-type-multi` : `${LIB_NAME}-type-single`}`,
    onClick: event => {
      event.stopPropagation();
      methods.dropDown('open');
    }
  }, props.contentRenderer ? props.contentRenderer({
    props,
    state,
    methods
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, props.multi ? state.values && state.values.map(item => /*#__PURE__*/React.createElement(Option, {
    key: `${getByPath(item, props.valueField)}${getByPath(item, props.labelField)}`,
    item: item,
    state: state,
    props: props,
    methods: methods
  })) : state.values && state.values.length > 0 && /*#__PURE__*/React.createElement("span", null, getByPath(state.values[0], props.labelField)), /*#__PURE__*/React.createElement(Input, {
    props: props,
    methods: methods,
    state: state
  })));
};

const ContentComponent = styled.div(_t$2 || (_t$2 = _$2`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`));

let _$3 = t => t,
    _t$3;

const NoData = ({
  props,
  state,
  methods
}) => props.noDataRenderer ? props.noDataRenderer({
  props,
  state,
  methods
}) : /*#__PURE__*/React.createElement(NoDataComponent, {
  className: `${LIB_NAME}-no-data`,
  color: props.color
}, props.noDataLabel);

const NoDataComponent = styled.div(_t$3 || (_t$3 = _$3`
  padding: 10px;
  text-align: center;
  color: ${0};
`), ({
  color
}) => color);

let _$4 = t => t,
    _t$4;

class Item extends Component {
  constructor(...args) {
    super(...args);
    this.item = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.state.cursor === this.props.itemIndex) {
      this.item.current && this.item.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }

  render() {
    const {
      props,
      state,
      methods,
      item,
      itemIndex
    } = this.props;

    if (props.itemRenderer) {
      return props.itemRenderer({
        item,
        itemIndex,
        props,
        state,
        methods
      });
    }

    if (!props.keepSelectedInList && methods.isSelected(item)) {
      return null;
    }

    return /*#__PURE__*/React.createElement(ItemComponent, {
      role: "option",
      ref: this.item,
      "aria-selected": methods.isSelected(item),
      "aria-disabled": item.disabled,
      disabled: item.disabled,
      "aria-label": getByPath(item, props.labelField),
      key: `${getByPath(item, props.valueField)}${getByPath(item, props.labelField)}`,
      tabIndex: "-1",
      className: `${LIB_NAME}-item ${methods.isSelected(item) ? `${LIB_NAME}-item-selected` : ''} ${state.cursor === itemIndex ? `${LIB_NAME}-item-active` : ''} ${item.disabled ? `${LIB_NAME}-item-disabled` : ''}`,
      onClick: item.disabled ? undefined : () => methods.addItem(item),
      onKeyPress: item.disabled ? undefined : () => methods.addItem(item),
      color: props.color
    }, getByPath(item, props.labelField), " ", item.disabled && /*#__PURE__*/React.createElement("ins", null, props.disabledLabel));
  }

}

Item.propTypes = {
  props: any,
  state: any,
  methods: any,
  item: any,
  itemIndex: any
};
const ItemComponent = styled.span(_t$4 || (_t$4 = _$4`
  padding: 5px 10px;
  cursor: pointer;
  border-bottom: 1px solid #fff;

  &.${0}-item-active {
    border-bottom: 1px solid #fff;
    ${0}
  }

  :hover,
  :focus {
    background: ${0};
    outline: none;
  }

  &.${0}-item-selected {
    ${0}
  }

  ${0}
`), LIB_NAME, ({
  disabled,
  color
}) => !disabled && color && `background: ${hexToRGBA(color, 0.1)};`, ({
  color
}) => color && hexToRGBA(color, 0.1), LIB_NAME, ({
  disabled,
  color
}) => disabled ? `
    background: #f2f2f2;
    color: #ccc;
    ` : `
    background: ${color};
    color: #fff;
    border-bottom: 1px solid #fff;
    `, ({
  disabled
}) => disabled ? `
    background: #f2f2f2;
    color: #ccc;

    ins {
      text-decoration: none;
      border:1px solid #ccc;
      border-radius: 2px;
      padding: 0px 3px;
      font-size: x-small;
      text-transform: uppercase;
    }
    ` : '');

let _$5 = t => t,
    _t$5,
    _t2;

const dropdownPosition = (props, methods) => {
  const DropdownBoundingClientRect = methods.getSelectRef().getBoundingClientRect();
  const dropdownHeight = DropdownBoundingClientRect.bottom + parseInt(props.dropdownHeight, 10) + parseInt(props.dropdownGap, 10);

  if (props.dropdownPosition !== 'auto') {
    return props.dropdownPosition;
  }

  if (dropdownHeight > isomorphicWindow().innerHeight && dropdownHeight > DropdownBoundingClientRect.top) {
    return 'top';
  }

  return 'bottom';
};

const Dropdown = ({
  props,
  state,
  methods
}) => /*#__PURE__*/React.createElement(DropDown, {
  tabIndex: "-1",
  "aria-expanded": "true",
  role: "list",
  dropdownPosition: dropdownPosition(props, methods),
  selectBounds: state.selectBounds,
  portal: props.portal,
  dropdownGap: props.dropdownGap,
  dropdownHeight: props.dropdownHeight,
  className: `${LIB_NAME}-dropdown ${LIB_NAME}-dropdown-position-${dropdownPosition(props, methods)}`
}, props.dropdownRenderer ? props.dropdownRenderer({
  props,
  state,
  methods
}) : /*#__PURE__*/React.createElement(React.Fragment, null, props.create && state.search && !valueExistInSelected(state.search, state.values, props) && /*#__PURE__*/React.createElement(AddNew, {
  className: `${LIB_NAME}-dropdown-add-new`,
  color: props.color,
  onClick: () => methods.createNew(state.search)
}, props.createNewLabel.replace('{search}', `"${state.search}"`)), methods.searchResults().length === 0 ? /*#__PURE__*/React.createElement(NoData, {
  className: `${LIB_NAME}-no-data`,
  state: state,
  props: props,
  methods: methods
}) : methods.searchResults().map((item, itemIndex) => /*#__PURE__*/React.createElement(Item, {
  key: item[props.valueField],
  item: item,
  itemIndex: itemIndex,
  state: state,
  props: props,
  methods: methods
}))));

const DropDown = styled.div(_t$5 || (_t$5 = _$5`
  position: absolute;
  ${0};

  ${0};
  border: 1px solid #ccc;
  width: ${0}px;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 10px 0 ${0};
  max-height: ${0};
  overflow: auto;
  z-index: 9;

  :focus {
    outline: none;
  }
}
`), ({
  selectBounds,
  dropdownGap,
  dropdownPosition
}) => dropdownPosition === 'top' ? `bottom: ${selectBounds.height + 2 + dropdownGap}px` : `top: ${selectBounds.height + 2 + dropdownGap}px`, ({
  selectBounds,
  dropdownGap,
  dropdownPosition,
  portal
}) => portal ? `
      position: fixed;
      ${dropdownPosition === 'bottom' ? `top: ${selectBounds.bottom + dropdownGap}px;` : `bottom: ${isomorphicWindow().innerHeight - selectBounds.top + dropdownGap}px;`}
      left: ${selectBounds.left - 1}px;` : 'left: -1px;', ({
  selectBounds
}) => selectBounds.width, () => hexToRGBA('#000000', 0.2), ({
  dropdownHeight
}) => dropdownHeight);
const AddNew = styled.div(_t2 || (_t2 = _$5`
  color: ${0};
  padding: 5px 10px;

  :hover {
    background: ${0};
    outline: none;
    cursor: pointer;
  }
`), ({
  color
}) => color, ({
  color
}) => color && hexToRGBA(color, 0.1));

let _$6 = t => t,
    _t$6;

const Loading = ({
  props
}) => props.loadingRenderer ? props.loadingRenderer({
  props
}) : /*#__PURE__*/React.createElement(LoadingComponent, {
  className: `${LIB_NAME}-loading`,
  color: props.color
});

const LoadingComponent = styled.div(_t$6 || (_t$6 = _$6`
  @keyframes dual-ring-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  padding: 0 5px;
  display: block;
  width: auto;
  height: auto;

  :after {
    content: ' ';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: ${0} transparent;
    animation: dual-ring-spin 0.7s ease-in-out infinite;
    margin: 0 0 0 -10px;
  }
`), ({
  color
}) => color);

let _$7 = t => t,
    _t$7;

const Clear = ({
  props,
  state,
  methods
}) => props.clearRenderer ? props.clearRenderer({
  props,
  state,
  methods
}) : /*#__PURE__*/React.createElement(ClearComponent, {
  className: `${LIB_NAME}-clear`,
  tabIndex: "-1",
  onClick: () => methods.clearAll(),
  onKeyPress: () => methods.clearAll()
}, "\xD7");

const ClearComponent = styled.div(_t$7 || (_t$7 = _$7`
  line-height: 25px;
  margin: 0 10px;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    color: tomato;
  }
`));

let _$8 = t => t,
    _t$8;

const Separator = ({
  props,
  state,
  methods
}) => props.separatorRenderer ? props.separatorRenderer({
  props,
  state,
  methods
}) : /*#__PURE__*/React.createElement(SeparatorComponent, {
  className: `${LIB_NAME}-separator`
});

const SeparatorComponent = styled.div(_t$8 || (_t$8 = _$8`
  border-left: 1px solid #ccc;
  width: 1px;
  height: 25px;
  display: block;
`));

let _$9 = t => t,
    _t$9;

const DropdownHandle = ({
  props,
  state,
  methods
}) => /*#__PURE__*/React.createElement(DropdownHandleComponent, {
  tabIndex: "-1",
  onClick: event => methods.dropDown(state.dropdown ? 'close' : 'open', event),
  dropdownOpen: state.dropdown,
  onKeyPress: event => methods.dropDown('toggle', event),
  onKeyDown: event => methods.dropDown('toggle', event),
  className: `${LIB_NAME}-dropdown-handle`,
  rotate: props.dropdownHandleRenderer ? 0 : 1,
  color: props.color
}, props.dropdownHandleRenderer ? props.dropdownHandleRenderer({
  props,
  state,
  methods
}) : /*#__PURE__*/React.createElement("svg", {
  fill: "currentColor",
  viewBox: "0 0 40 40"
}, /*#__PURE__*/React.createElement("path", {
  d: "M31 26.4q0 .3-.2.5l-1.1 1.2q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.2q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z"
})));

const DropdownHandleComponent = styled.div(_t$9 || (_t$9 = _$9`
  text-align: center;
  ${0};
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  :hover {
    path {
      stroke: ${0};
    }
  }

  :focus {
    outline: none;

    path {
      stroke: ${0};
    }
  }
`), ({
  dropdownOpen,
  rotate
}) => dropdownOpen ? `
      pointer-events: all;
      ${rotate ? 'transform: rotate(0deg);margin: 0px 0 -3px 5px;' : ''}
      ` : `
      pointer-events: none;
      ${rotate ? 'margin: 0 0 0 5px;transform: rotate(180deg);' : ''}
      `, ({
  color
}) => color, ({
  color
}) => color);

let _$a = t => t,
    _t$a;

class Select extends Component {
  constructor(_props) {
    super(_props);

    this.onDropdownClose = () => {
      this.setState({
        cursor: null
      });
      this.props.onDropdownClose();
    };

    this.onScroll = () => {
      if (this.props.closeOnScroll) {
        this.dropDown('close');
      }

      this.updateSelectBounds();
    };

    this.updateSelectBounds = () => this.select.current && this.setState({
      selectBounds: this.select.current.getBoundingClientRect()
    });

    this.getSelectBounds = () => this.state.selectBounds;

    this.dropDown = (action = 'toggle', event, force = false) => {
      const target = event && event.target || event && event.srcElement;

      if (this.props.onDropdownCloseRequest !== undefined && this.state.dropdown && force === false && action === 'close') {
        return this.props.onDropdownCloseRequest({
          props: this.props,
          methods: this.methods,
          state: this.state,
          close: () => this.dropDown('close', null, true)
        });
      }

      if (this.props.portal && !this.props.closeOnScroll && !this.props.closeOnSelect && event && target && target.offsetParent && target.offsetParent.classList.contains('react-dropdown-select-dropdown')) {
        return;
      }

      if (this.props.keepOpen) {
        return this.setState({
          dropdown: true
        });
      }

      if (action === 'close' && this.state.dropdown) {
        this.select.current.blur();
        return this.setState({
          dropdown: false,
          search: this.props.clearOnBlur ? '' : this.state.search
        });
      }

      if (action === 'open' && !this.state.dropdown) {
        return this.setState({
          dropdown: true
        });
      }

      if (action === 'toggle') {
        this.select.current.focus();
        return this.setState({
          dropdown: !this.state.dropdown
        });
      }

      return false;
    };

    this.getSelectRef = () => this.select.current;

    this.addItem = item => {
      if (this.props.multi) {
        if (valueExistInSelected(getByPath(item, this.props.valueField), this.state.values, this.props)) {
          return this.removeItem(null, item, false);
        }

        this.setState({
          values: [...this.state.values, item]
        });
      } else {
        this.setState({
          values: [item],
          dropdown: false
        });
      }

      this.props.clearOnSelect && this.setState({
        search: ''
      });
      return true;
    };

    this.removeItem = (event, item, close = false) => {
      if (event && close) {
        event.preventDefault();
        event.stopPropagation();
        this.dropDown('close');
      }

      this.setState({
        values: this.state.values.filter(values => getByPath(values, this.props.valueField) !== getByPath(item, this.props.valueField))
      });
    };

    this.setSearch = event => {
      this.setState({
        cursor: null
      });
      this.setState({
        search: event.target.value
      });
    };

    this.getInputSize = () => {
      if (this.state.search) {
        return this.state.search.length;
      }

      if (this.state.values.length > 0) {
        return this.props.addPlaceholder.length;
      }

      return this.props.placeholder.length;
    };

    this.toggleSelectAll = () => {
      return this.setState({
        values: this.state.values.length === 0 ? this.selectAll() : this.clearAll()
      });
    };

    this.clearAll = () => {
      this.props.onClearAll();
      this.setState({
        values: []
      });
    };

    this.selectAll = (valuesList = []) => {
      this.props.onSelectAll();
      const values = valuesList.length > 0 ? valuesList : this.props.options.filter(option => !option.disabled);
      this.setState({
        values
      });
    };

    this.isSelected = option => !!this.state.values.find(value => getByPath(value, this.props.valueField) === getByPath(option, this.props.valueField));

    this.areAllSelected = () => this.state.values.length === this.props.options.filter(option => !option.disabled).length;

    this.safeString = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    this.sortBy = () => {
      const {
        sortBy,
        options
      } = this.props;

      if (!sortBy) {
        return options;
      }

      options.sort((a, b) => {
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

    this.searchFn = ({
      state,
      methods
    }) => {
      const regexp = new RegExp(methods.safeString(state.search), 'i');
      return methods.sortBy().filter(item => regexp.test(getByPath(item, this.props.searchBy) || getByPath(item, this.props.valueField)));
    };

    this.searchResults = () => {
      const args = {
        state: this.state,
        props: this.props,
        methods: this.methods
      };
      return this.props.searchFn(args) || this.searchFn(args);
    };

    this.activeCursorItem = activeCursorItem => this.setState({
      activeCursorItem
    });

    this.handleKeyDown = event => {
      const args = {
        event,
        state: this.state,
        props: this.props,
        methods: this.methods,
        setState: this.setState.bind(this)
      };
      return this.props.handleKeyDownFn(args) || this.handleKeyDownFn(args);
    };

    this.handleKeyDownFn = ({
      event,
      state,
      props,
      methods,
      setState
    }) => {
      const {
        cursor
      } = state;
      const escape = event.key === 'Escape';
      const enter = event.key === 'Enter';
      const arrowUp = event.key === 'ArrowUp';
      const arrowDown = event.key === 'ArrowDown';
      const backspace = event.key === 'Backspace';
      const tab = event.key === 'Tab' && !event.shiftKey;
      const shiftTab = event.shiftKey && event.key === 'Tab';

      if (arrowDown && !state.dropdown) {
        event.preventDefault();
        this.dropDown('open');
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
        this.dropDown('close');
      }

      if (enter) {
        const currentItem = methods.searchResults()[cursor];

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
        setState(prevState => ({
          cursor: prevState.cursor + 1
        }));
      }

      if ((arrowUp || shiftTab && state.dropdown) && cursor > 0) {
        setState(prevState => ({
          cursor: prevState.cursor - 1
        }));
      }

      if ((arrowUp || shiftTab && state.dropdown) && cursor === 0) {
        setState({
          cursor: methods.searchResults().length
        });
      }

      if (backspace && props.multi && props.backspaceDelete && this.getInputSize() === 0) {
        this.setState({
          values: this.state.values.slice(0, -1)
        });
      }
    };

    this.renderDropdown = () => this.props.portal ? ReactDOM.createPortal( /*#__PURE__*/React.createElement(Dropdown, {
      props: this.props,
      state: this.state,
      methods: this.methods
    }), this.dropdownRoot) : /*#__PURE__*/React.createElement(Dropdown, {
      props: this.props,
      state: this.state,
      methods: this.methods
    });

    this.createNew = item => {
      const newValue = {
        [this.props.labelField]: item,
        [this.props.valueField]: item
      };
      this.addItem(newValue);
      this.props.onCreateNew(newValue);
      this.setState({
        search: ''
      });
    };

    this.state = {
      dropdown: false,
      values: _props.values,
      search: '',
      selectBounds: {},
      cursor: null
    };
    this.methods = {
      removeItem: this.removeItem,
      dropDown: this.dropDown,
      addItem: this.addItem,
      setSearch: this.setSearch,
      getInputSize: this.getInputSize,
      toggleSelectAll: this.toggleSelectAll,
      clearAll: this.clearAll,
      selectAll: this.selectAll,
      searchResults: this.searchResults,
      getSelectRef: this.getSelectRef,
      isSelected: this.isSelected,
      getSelectBounds: this.getSelectBounds,
      areAllSelected: this.areAllSelected,
      handleKeyDown: this.handleKeyDown,
      activeCursorItem: this.activeCursorItem,
      createNew: this.createNew,
      sortBy: this.sortBy,
      safeString: this.safeString
    };
    this.select = React.createRef();
    this.dropdownRoot = typeof document !== 'undefined' && document.createElement('div');
  }

  componentDidMount() {
    this.props.portal && this.props.portal.appendChild(this.dropdownRoot);
    isomorphicWindow().addEventListener('resize', debounce(this.updateSelectBounds));
    isomorphicWindow().addEventListener('scroll', debounce(this.onScroll));
    this.dropDown('close');

    if (this.select) {
      this.updateSelectBounds();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(prevProps.values, this.props.values) && isEqual(prevProps.values, prevState.values)) {
      this.setState({
        values: this.props.values
      }, () => {
        this.props.onChange(this.state.values);
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
  }

  componentWillUnmount() {
    this.props.portal && this.props.portal.removeChild(this.dropdownRoot);
    isomorphicWindow().removeEventListener('resize', debounce(this.updateSelectBounds, this.props.debounceDelay));
    isomorphicWindow().removeEventListener('scroll', debounce(this.onScroll, this.props.debounceDelay));
  }

  render() {
    return /*#__PURE__*/React.createElement(ClickOutside, {
      onClickOutside: event => this.dropDown('close', event)
    }, /*#__PURE__*/React.createElement(ReactDropdownSelect, Object.assign({
      onKeyDown: this.handleKeyDown,
      onClick: event => this.dropDown('open', event),
      tabIndex: this.props.disabled ? '-1' : '0',
      direction: this.props.direction,
      style: this.props.style,
      ref: this.select,
      disabled: this.props.disabled,
      className: `${LIB_NAME} ${this.props.className}`,
      color: this.props.color
    }, this.props.additionalProps), /*#__PURE__*/React.createElement(Content, {
      props: this.props,
      state: this.state,
      methods: this.methods
    }), (this.props.name || this.props.required) && /*#__PURE__*/React.createElement("input", {
      tabIndex: -1,
      style: {
        opacity: 0,
        width: 0,
        position: 'absolute'
      },
      name: this.props.name,
      required: this.props.required,
      pattern: this.props.pattern,
      defaultValue: this.state.values.map(value => value[this.props.labelField]).toString() || [],
      disabled: this.props.disabled
    }), this.props.loading && /*#__PURE__*/React.createElement(Loading, {
      props: this.props
    }), this.props.clearable && /*#__PURE__*/React.createElement(Clear, {
      props: this.props,
      state: this.state,
      methods: this.methods
    }), this.props.separator && /*#__PURE__*/React.createElement(Separator, {
      props: this.props,
      state: this.state,
      methods: this.methods
    }), this.props.dropdownHandle && /*#__PURE__*/React.createElement(DropdownHandle, {
      onClick: () => this.select.current.focus(),
      props: this.props,
      state: this.state,
      methods: this.methods
    }), this.state.dropdown && !this.props.disabled && this.renderDropdown()));
  }

}

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
  onChange: () => undefined,
  onDropdownOpen: () => undefined,
  onDropdownClose: () => undefined,
  onDropdownCloseRequest: undefined,
  onClearAll: () => undefined,
  onSelectAll: () => undefined,
  onCreateNew: () => undefined,
  searchFn: () => undefined,
  handleKeyDownFn: () => undefined,
  additionalProps: null,
  backspaceDelete: true
};
const ReactDropdownSelect = styled.div(_t$a || (_t$a = _$a`
  box-sizing: border-box;
  position: relative;
  display: flex;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 2px;
  padding: 2px 5px;
  flex-direction: row;
  direction: ${0};
  align-items: center;
  cursor: pointer;
  min-height: 36px;
  ${0}

  :hover,
  :focus-within {
    border-color: ${0};
  }

  :focus,
  :focus-within {
    outline: 0;
    box-shadow: 0 0 0 3px ${0};
  }

  * {
    box-sizing: border-box;
  }
`), ({
  direction
}) => direction, ({
  disabled
}) => disabled ? 'cursor: not-allowed;pointer-events: none;opacity: 0.3;' : 'pointer-events: all;', ({
  color
}) => color, ({
  color
}) => hexToRGBA(color, 0.2));

export default Select;
//# sourceMappingURL=index.modern.js.map
