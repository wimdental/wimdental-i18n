"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LocalizeProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DictionaryShape = require("../shapes/DictionaryShape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Make localization api avaliable to @locale decorator
 */
var LocalizeProvider = exports.LocalizeProvider = (_dec = (0, _reactRedux.connect)(function (state) {
    return { state: state };
}), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(LocalizeProvider, _Component);

    function LocalizeProvider(props, context) {
        _classCallCheck(this, LocalizeProvider);

        var _this = _possibleConstructorReturn(this, (LocalizeProvider.__proto__ || Object.getPrototypeOf(LocalizeProvider)).call(this, props, context));

        _this.render = function () {
            var children = _this.props.children;

            return _react.Children.only(children);
        };

        return _this;
    }

    _createClass(LocalizeProvider, [{
        key: "getChildContext",
        value: function getChildContext() {
            var _props = this.props,
                dictionary = _props.dictionary,
                mapStateToProps = _props.mapStateToProps,
                state = _props.state;


            var locale = mapStateToProps ? mapStateToProps : function (state) {
                return state.i18n.locale;
            };

            return {
                dictionary: _extends({}, dictionary, {
                    locale: locale(state)
                })
            };
        }
        /**
         *
         */

    }]);

    return LocalizeProvider;
}(_react.Component), _class2.propTypes = {
    /**
    * Dictionary generate by createDictionary helper
    */
    dictionary: _DictionaryShape.DictionaryShape,
    /**
    * Function that return current locale from state
    */
    mapStateToProps: _propTypes2.default.func
}, _class2.childContextTypes = {
    dictionary: _DictionaryShape.DictionaryShape
}, _temp)) || _class);