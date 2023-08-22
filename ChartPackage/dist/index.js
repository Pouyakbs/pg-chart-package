"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ChartPage", {
  enumerable: true,
  get: function get() {
    return _ChartPage["default"];
  }
});
Object.defineProperty(exports, "PieChart", {
  enumerable: true,
  get: function get() {
    return _PieChart["default"];
  }
});
exports["default"] = void 0;
var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));
var _react = _interopRequireWildcard(require("react"));
var _reactI18next = require("react-i18next");
require("./style.css");
var _material = require("@mui/material");
var _ChartPage = _interopRequireDefault(require("./ChartPage"));
var _PieChart = _interopRequireDefault(require("./PieChart"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ar = require("apexcharts/dist/locales/ar.json");
var fa = require("apexcharts/dist/locales/fa.json");
var en = require("apexcharts/dist/locales/en.json");
var Chart = function Chart(_ref) {
  var xaxis = _ref.xaxis,
    chartSeries = _ref.chartSeries,
    height = _ref.height,
    width = _ref.width,
    type = _ref.type,
    chartMap = _ref.chartMap,
    chartGrid = _ref.chartGrid,
    colors = _ref.colors;
  var theme = (0, _material.useTheme)();
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var chart = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var _chart$current;
    chart === null || chart === void 0 || (_chart$current = chart.current) === null || _chart$current === void 0 || (_chart$current = _chart$current.chart) === null || _chart$current === void 0 ? void 0 : _chart$current.setLocale(i18n.language);
  }, [i18n.language]);
  var chartOptions = {
    chart: {
      defaultLocale: i18n.language === 'fa' ? 'fa' : i18n.language === 'ar' ? 'ar' : 'en',
      locales: [en, fa, ar]
    },
    xaxis: {
      categories: xaxis,
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 2
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 3,
      curve: 'smooth'
    },
    fill: {
      opacity: 1
    },
    grid: {
      show: chartGrid
    },
    legend: {
      show: chartMap,
      fontFamily: 'IRANSansWeb',
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: true
      },
      markers: {
        width: 16,
        height: 16,
        radius: '50%',
        offsexX: 2,
        offsexY: 2
      },
      itemMargin: {
        horizontal: 15,
        vertical: 50
      }
    }
  };
  if (colors) {
    chartOptions.colors = colors;
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactApexcharts["default"], {
    ref: chart,
    options: chartOptions,
    series: chartSeries,
    type: type,
    height: height,
    width: width
  }));
};
var _default = /*#__PURE__*/_react["default"].memo(Chart);
exports["default"] = _default;