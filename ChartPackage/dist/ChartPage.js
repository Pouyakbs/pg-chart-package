"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _selectBox = require("devextreme-react/select-box");
var _material = require("@mui/material");
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _reactI18next = require("react-i18next");
var _getLangDate = require("../../utils/getLangDate");
var _index = _interopRequireDefault(require("./index"));
var _PieChart = _interopRequireDefault(require("./PieChart"));
var _BarChart = _interopRequireDefault(require("@mui/icons-material/BarChart"));
var _PieChart2 = _interopRequireDefault(require("@mui/icons-material/PieChart"));
var _ShowChart = _interopRequireDefault(require("@mui/icons-material/ShowChart"));
var _ScatterPlot = _interopRequireDefault(require("@mui/icons-material/ScatterPlot"));
var _icons = require("@ant-design/icons");
var _preview = _interopRequireDefault(require("./preview.gif"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ChartPage(_ref) {
  var data = _ref.data,
    columnsObj = _ref.columnsObj,
    chartObj = _ref.chartObj,
    savedCharts = _ref.savedCharts;
  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var gridId = searchParams.get('id');
  var settings = JSON.parse(localStorage.getItem("chart_".concat(gridId)));
  var location = (0, _reactRouterDom.useLocation)();
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)(settings === null || settings === void 0 ? void 0 : settings.chartMap),
    _useState2 = _slicedToArray(_useState, 2),
    chartMap = _useState2[0],
    setChartMap = _useState2[1];
  var _useState3 = (0, _react.useState)(settings === null || settings === void 0 ? void 0 : settings.chartGrid),
    _useState4 = _slicedToArray(_useState3, 2),
    chartGrid = _useState4[0],
    setChartGrid = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    xaxis = _useState6[0],
    setXaxis = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    pieSeries = _useState8[0],
    setPieSeries = _useState8[1];
  var dependentTemp = {};
  chartObj.forEach(function (item) {
    dependentTemp[item.value] = false;
  });
  var _useState9 = (0, _react.useState)((settings === null || settings === void 0 ? void 0 : settings.dependentField) || dependentTemp),
    _useState10 = _slicedToArray(_useState9, 2),
    dependentField = _useState10[0],
    setDependentField = _useState10[1];
  var _useState11 = (0, _react.useState)(settings === null || settings === void 0 ? void 0 : settings.pieDependent),
    _useState12 = _slicedToArray(_useState11, 2),
    pieDependent = _useState12[0],
    setPieDependent = _useState12[1];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    chartSeries = _useState14[0],
    setChartSeries = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    pieLabels = _useState16[0],
    setPieLabels = _useState16[1];
  var _useState17 = (0, _react.useState)(settings === null || settings === void 0 ? void 0 : settings.mainChartField),
    _useState18 = _slicedToArray(_useState17, 2),
    mainChartField = _useState18[0],
    setMainChartField = _useState18[1];
  var _useState19 = (0, _react.useState)(settings === null || settings === void 0 ? void 0 : settings.chartType),
    _useState20 = _slicedToArray(_useState19, 2),
    chartType = _useState20[0],
    setChartType = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    newChart = _useState22[0],
    setNewChart = _useState22[1];
  var chartTypes = [{
    name: t('میله ای'),
    value: 'bar',
    icon: /*#__PURE__*/_react["default"].createElement(_BarChart["default"], null)
  }, {
    name: t('دایره ای'),
    value: 'pie',
    icon: /*#__PURE__*/_react["default"].createElement(_PieChart2["default"], null)
  }, {
    name: t('خطی'),
    value: 'line',
    icon: /*#__PURE__*/_react["default"].createElement(_ShowChart["default"], null)
  }, {
    name: t('مساحت'),
    value: 'area',
    icon: /*#__PURE__*/_react["default"].createElement(_icons.AreaChartOutlined, {
      style: {
        fontSize: '22px'
      }
    })
  }, {
    name: t('پراکندگی'),
    value: 'scatter',
    icon: /*#__PURE__*/_react["default"].createElement(_ScatterPlot["default"], null)
  }];
  var Item = function Item(data) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "custom-select-item ".concat(i18n.dir() === 'rtl' ? 'rtl' : '')
    }, data.icon, /*#__PURE__*/_react["default"].createElement("div", {
      className: "name"
    }, data.name));
  };
  (0, _react.useEffect)(function () {
    var temp = chartObj.map(function (field) {
      var obj1 = dependentField[field.value] ? {
        name: field.title,
        data: data.map(function (item) {
          var temp = item[field.value] instanceof Date ? (0, _getLangDate.getLangDate)(i18n.language, item[field.value]) : item[field.value];
          return "".concat(temp);
        })
      } : null;
      return obj1;
    });
    temp = temp.filter(function (item) {
      return item != null;
    });
    setChartSeries(temp);
  }, [dependentField, i18n.language, data]);
  (0, _react.useEffect)(function () {
    var temp = data.map(function (item) {
      var temp = item[mainChartField] instanceof Date ? (0, _getLangDate.getLangDate)(i18n.language, item[mainChartField]) : item[mainChartField];
      return "".concat(temp);
    });
    setXaxis(temp);
    setPieLabels(temp);
  }, [mainChartField, i18n.language, data]);
  (0, _react.useEffect)(function () {
    var temp = data.map(function (item) {
      return item[pieDependent];
    });
    setPieSeries(temp);
  }, [pieDependent, data]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-template grid-popover p-3",
    style: {
      backgroundColor: "".concat(theme.palette.background.paper),
      borderColor: "".concat(theme.palette.divider)
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12",
    style: {
      minHeight: '700px'
    }
  }, chartSeries.length && xaxis.length && chartType !== 'pie' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      direction: 'ltr'
    },
    className: i18n.dir() === 'rtl' ? 'rtl-chart' : ''
  }, chartType === 'bar' && /*#__PURE__*/_react["default"].createElement(_index["default"], {
    xaxis: xaxis,
    chartSeries: chartSeries,
    type: 'bar',
    height: 600,
    width: '100%',
    chartMap: chartMap,
    chartGrid: chartGrid
  }), chartType === 'line' && /*#__PURE__*/_react["default"].createElement(_index["default"], {
    xaxis: xaxis,
    chartSeries: chartSeries,
    type: 'line',
    height: 600,
    width: '100%',
    chartMap: chartMap,
    chartGrid: chartGrid
  }), chartType === 'area' && /*#__PURE__*/_react["default"].createElement(_index["default"], {
    xaxis: xaxis,
    chartSeries: chartSeries,
    type: 'area',
    height: 600,
    width: '100%',
    chartMap: chartMap,
    chartGrid: chartGrid
  }), chartType === 'scatter' && /*#__PURE__*/_react["default"].createElement(_index["default"], {
    xaxis: xaxis,
    chartSeries: chartSeries,
    type: 'scatter',
    height: 600,
    width: '100%',
    chartMap: chartMap,
    chartGrid: chartGrid
  }))) : pieDependent && mainChartField && chartType === 'pie' ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      direction: 'ltr'
    },
    className: i18n.dir() === 'rtl' ? 'rtl-chart' : ''
  }, /*#__PURE__*/_react["default"].createElement(_PieChart["default"], {
    pieLabels: pieLabels,
    pieSeries: pieSeries,
    height: 600,
    width: '100%',
    chartMap: chartMap,
    chartGrid: chartGrid
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex align-items-center justify-content-center h-100"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _preview["default"],
    alt: 'chart'
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-4 col-12"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "popover-title"
  }, t('تنظیمات')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement("span", null, t("نوع نمودار"))), /*#__PURE__*/_react["default"].createElement(_selectBox.SelectBox, {
    dataSource: chartTypes,
    rtlEnabled: i18n.dir() == "ltr" ? false : true,
    onValueChanged: function onValueChanged(e) {
      return setChartType(e.value);
    },
    defaultValue: chartType,
    className: "selectBox",
    noDataText: t('اطلاعات یافت نشد'),
    itemRender: Item,
    valueExpr: "value",
    displayExpr: "name",
    placeholder: '',
    name: "chartType",
    id: "chartType",
    searchEnabled: true
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: chartMap,
      onChange: function onChange(event) {
        return setChartMap(event.target.checked);
      },
      name: "chartMap",
      color: "primary",
      size: "small"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h6"
    }, t('نمایش نقشه راهنما')),
    className: "mt-3"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: chartGrid,
      onChange: function onChange(event) {
        return setChartGrid(event.target.checked);
      },
      name: "chartGrid",
      color: "primary",
      size: "small"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h6"
    }, t('نمایش خطوط راهنما')),
    className: "mt-3"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "title mt-3"
  }, /*#__PURE__*/_react["default"].createElement("span", null, t("مولفه اصلی"))), /*#__PURE__*/_react["default"].createElement(_selectBox.SelectBox, {
    dataSource: columnsObj,
    value: mainChartField,
    rtlEnabled: i18n.dir() == "ltr" ? false : true,
    onValueChanged: function onValueChanged(e) {
      return setMainChartField(e.value);
    },
    className: "selectBox",
    noDataText: t('اطلاعات یافت نشد'),
    itemRender: null,
    displayExpr: "title",
    valueExpr: "value",
    placeholder: '',
    name: "chartType",
    id: "chartType",
    searchEnabled: true
  }), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "title mt-3"
  }, t('مولفه وابسته')), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "field-list"
  }, chartType === 'pie' ? /*#__PURE__*/_react["default"].createElement(_material.RadioGroup, {
    name: "pie-field",
    defaultChecked: pieDependent,
    defaultValue: pieDependent,
    onChange: function onChange(e) {
      return setPieDependent(e.target.defaultValue);
    }
  }, chartObj.map(function (item, index) {
    return mainChartField !== item.value && /*#__PURE__*/_react["default"].createElement("li", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
      value: item.value,
      control: /*#__PURE__*/_react["default"].createElement(_material.Radio, null),
      label: item.title
    }));
  })) : chartObj.map(function (item, index) {
    return mainChartField !== item.value && /*#__PURE__*/_react["default"].createElement("li", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
      control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        checked: dependentField[item.value],
        onChange: function onChange(event) {
          var temp = _objectSpread({}, dependentField);
          temp[item.value] = event.target.checked;
          setDependentField(temp);
        },
        name: "checked",
        color: "primary",
        size: "small"
      }),
      label: /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h6"
      }, item.title)
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12 col-md-8"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "popover-title"
  }, t('نمودارهای ذخیره شده')), savedCharts.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "saved-item d-flex",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "index"
    }, index + 1), /*#__PURE__*/_react["default"].createElement("span", {
      className: "title"
    }, item.title), /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
      control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        checked: savedCharts[index].dashboard,
        onChange: function onChange(event) {
          var temp = savedCharts;
          temp[index].dashboard = event.target.checked;
          console.log('temp', temp);
          // setSavedCharts([...temp])
        },

        name: "savedCharts[".concat(index, "].dashboard"),
        color: "primary",
        size: "small"
      }),
      label: /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h6"
      }, t('نمایش در داشبورد'))
    }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      variant: "contained",
      color: "primary",
      className: "kendo-action-btn",
      onClick: function onClick() {
        return console.log('view');
      }
    }, /*#__PURE__*/_react["default"].createElement(_Visibility["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      variant: "contained",
      color: "error",
      className: "kendo-action-btn",
      onClick: function onClick() {
        var temp = savedCharts.filter(function (s) {
          return s.title !== item.title;
        });
        // setSavedCharts(temp)
      }
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex mt-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '70%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-design p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement("span", null, t('عنوان'))), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-input",
    type: "text",
    id: "title",
    name: "title",
    onChange: function onChange(e) {
      return setNewChart(e.target.value);
    },
    value: newChart
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: i18n.dir() === 'rtl' ? {
      marginRight: '10px'
    } : {
      marginLeft: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-design p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\u200C")), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "outlined",
    color: "success",
    onClick: function onClick() {
      // setSavedCharts(s=>[...s, {title:newChart,dashboard:false}])
      setNewChart('');
    },
    style: {
      padding: '3px 15px 4px',
      fontSize: '12px'
    }
  }, t('ذخیره نمودار')))))))));
}
var _default = ChartPage;
exports["default"] = _default;