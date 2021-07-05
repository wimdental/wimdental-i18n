'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Locale = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _locale_get_translation_impl = require('../utils/locale_get_translation_impl');

var _locale_get_translation_impl2 = _interopRequireDefault(_locale_get_translation_impl);

var _DictionaryShape = require('../shapes/DictionaryShape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Inject an react element or string from dictionary
 */
var Locale = exports.Locale = (_temp = _class = function (_Component) {
    _inherits(Locale, _Component);

    function Locale(props, context) {
        _classCallCheck(this, Locale);

        var _this = _possibleConstructorReturn(this, (Locale.__proto__ || Object.getPrototypeOf(Locale)).call(this, props, context));

        _this.render = function () {
            var dictionary = _this.context.dictionary;
            var entry = _this.props.entry;

            return (0, _locale_get_translation_impl2.default)(dictionary.dictionary, dictionary.locale, entry, _this.props);
        };

        return _this;
    }
    /**
     * Render the component
     */


    return Locale;
}(_react.Component), _class.propTypes = {
    /**
    * Entry name on current locale dictionary
    */
    entry: _propTypes2.default.string
}, _class.contextTypes = {
    dictionary: _DictionaryShape.DictionaryShape
}, _temp);