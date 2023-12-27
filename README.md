# ReactJS - Multiselect Dropdown Component

Multiselect Dropdown component is a feature rich select / dropdown / typeahead component built in ReactJS. It provides a default template that fits most use cases for a filterable multiselect dropdown. 

- Configurable via `prop`s
- Total custom component overrides for all internals via render prop callbacks (with access to internal props, state and methods)
- Stylable via css (or custom components)
- Portal support for rendering dropdown outside local DOM tree. e.g. in `document.body`
- Auto position
- Small bundle size


## Table of contents

- [Browser Support](#browser-support)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Available Props](#available-props)
- [Events](#events)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Other Components](#collection-of-components)
- [Changelog](#changelog)
- [Credits](#credits)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- |
83.0 ✔ | 77.0  ✔ | 13.1.1 ✔ | 83.0 ✔ | 11.9 ✔ |

## Demo

[![](multiselect.gif)](https://github.com/weblineindia/ReactJS-Multiselect-Dropdown/multiselect.gif)

## Getting started

```bash
npm install react-weblineindia-multiselect 
# oR
yarn add react-weblineindia-multiselect 
```

Then, import and register the component:

```js
import React, { Component } from "react";
import Select from 'react-weblineindia-multiselect '
class Test extends Component {
constructor(props) {
    super(props);
    this.state = {
      gender : [
        { name: "abc", id: "1" },
        { name: "pqr", id: "2" },
        { name: "xyz", id: "3"}
    }
  render(){
    retrun(
      <div>
      <Select options={options} onChange={(values) => this.setValues(values)} />
      </div>
    )
  }
}
export default Test

```

## Available Props

| Prop                                                                                        | Type        | Default        | Description                                                                                                                            |
| ------------------------------------------------------------------------------------------- | ----------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| values                                                                                      | array       | []             | Selected values                                                                                                                        |
| options                                                                                     | array       | []             | Available options, (option with key `disabled: true` will be disabled)                                                                 |
| keepOpen                                                                                    | bool        | false          | If true, dropdown will always stay open (good for debugging)                                                                           |
| autoFocus                                                                                   | bool        | false          | If true, and `searchable`, dropdown will auto focus                                                                                    |
| clearOnBlur                                                                                 | bool        | true           | If true, and `searchable`, search value will be cleared on blur                                                                        |
| clearOnSelect                                                                               | bool        | true           | If true, and `searchable`, search value will be cleared upon value select/de-select                                                    |
| name                                                                                        | string      | null           | If set, input type hidden would be added in the component with the value of the `name` prop as name and select's `values` as value     |
| required                                                                                    | bool        | false          | If set, input type hidden would be added in the component with `required` prop as true/false                                           |
| pattern                                                                                     | string      | null           | If set, input type hidden would be added in the component with `pattern` prop as regex                                                 |
| dropdownGap                                                                                 | number      | 5              | Gap between select element and dropdown                                                                                                |
| placeholder                                                                                 | string      | "Select..."    | Placeholder shown where there are no selected values                                                                                   |
| addPlaceholder                                                                              | string      | ""             | Secondary placeholder on search field if any value selected                                                                            |
| disabled                                                                                    | bool        | false          | Disable select and all interactions                                                                                                    |
| style                                                                                       | object      | {}             | Style object to pass to select                                                                                                         |
| className                                                                                   | string      |                | CSS class attribute to pass to select                                                                                                  |
| loading                                                                                     | bool        | false          | Loading indicator                                                                                                                      |
| clearable                                                                                   | bool        | false          | Clear all indicator                                                                                                                    |
| searchable                                                                                  | bool        | true           | If true, select will have search input text                                                                                            |
| separator                                                                                   | bool        | false          | Separator line between close all and dropdown handle                                                                                   |
| dropdownHandle                                                                              | bool        | true           | Dropdown handle to open/close dropdown                                                                                                 |
| dropdownHeight                                                                              | string      | "300px"        | Minimum height of a dropdown                                                                                                           |
| direction                                                                                   | string      | "ltr"          | direction of a dropdown "ltr", "rtl" or "auto"                                                                                         |
| searchBy                                                                                    | string      | label          | Search by object property in values                                                                                                    |
| sortBy                                                                                      | string      | null           | Sort by object property in values                                                                                                      |
| labelField                                                                                  | string      | "label"        | Field in data to use for label                                                                                                         |
| valueField                                                                                  | string      | "value"        | Field in data to use for value                                                                                                         |
| color                                                                                       | string      | "#0074D9"      | Base color to use in component, also can be overwritten via CSS                                                                        |
| closeOnScroll                                                                               | bool        | false          | If true, scrolling the page will close the dropdown                                                                                    |
| closeOnSelect                                                                               | bool        | false          | If true, selecting option will close the dropdown                                                                                      |
| dropdownPosition | string      | "bottom"       | Available options are "auto", "top" and "bottom" defaults to "bottom". Auto will adjust itself according Select's position on the page |
| keepSelectedInList                                                                          | bool        | true           | If false, selected item will not appear in a list                                                                                      |
| portal                                                                                      | DOM element | false          | If valid dom element specified - dropdown will break out to render inside the specified element                                        |
| create                                                                                      | bool        | false          | If true, select will create value from search string and fire `onCreateNew` callback prop                                              |
| backspaceDelete                                                                             | bool        | true           | If true, backspace key will delete last value                                                                                          |
| createNewLabel                                                                              | string      | "add {search}" | If create set to true, this will be the label of the "add new" component. `{search}` will be replaced by search value                  |
| disabledLabel                                                                               | string      | "disabled"     | Label shown on disabled field (after) the text                                                                                         |
| additionalProps                                                                             | object      | null           |

## Events

| Prop                                                                                                     | Type | Default   | Description                                                                            |
| -------------------------------------------------------------------------------------------------------- | ---- | --------- | -------------------------------------------------------------------------------------- |
| onChange                                                                                                 | func |           | On values change callback, returns array of values objects                             |
| onDropdownClose                                                                                          | func |           | Fires upon dropdown close                                                              |
| onDropdownOpen                                                                                           | func |           | Fires upon dropdown open                                                               |
| onCreateNew                                                                                              | func |           | Fires upon creation of new item if `create` prop set to `true`                         |
| onClearAll                                                                                               | func |           | Fires upon clearing all values (via custom renderers)                                  |
| onSelectAll                                                                                              | func |           | Fires upon selecting all values (via custom renderers)                                 |
| onDropdownCloseRequest                                                                                   | func | undefined | Fires upon dropdown closing state, stops the closing and provides own method `close()` |
| contentRenderer               | func |           | Overrides internal content component (the contents of the select component)            |
| itemRenderer                      | func |           | Overrides internal item in a dropdown                                                  |
| noDataRenderer               | func |           | Overrides internal "no data" (shown where search has no results)                       |
| optionRenderer                  | func |           | Overrides internal option (the pillow with an "x") on the select content               |
| inputRenderer                    | func |           | Overrides internal input text                                                          |
| loadingRenderer               | func |           | Overrides internal loading                                                             |
| clearRenderer                    | func |           | Overrides internal clear button                                                        |
| separatorRenderer            | func |           | Overrides internal separator                                                           |
| dropdownRenderer              | func |           | Overrides internal dropdown component                                                  |
| dropdownHandleRenderer | func |           | Overrides internal dropdown handle                                                     |
| searchFn                                                                                                 | func | undefined | Overrides internal search function                                                     |
| handleKeyDownFn                                                                                          | func | undefined | Overrides internal keyDown function                                                    |

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/communities.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

react-weblineindia-multiselect  is inspired by [react-dropdown-select](https://www.npmjs.com/package/react-dropdown-select).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/ReactJS-Multiselect-Dropdown/blob/master/LICENSE

## Keywords

react-weblineindia-multiselect , react-weblineindia-multiselect, multiselect, select-component, react-multiselect, reactjs-multiselect, react-select
