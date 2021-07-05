'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDictionary = undefined;

var _get_translation_impl = require('./_get_translation_impl');

var _get_translation_impl2 = _interopRequireDefault(_get_translation_impl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Create a dictionary for Localize
 * @param {*} languages
 */
var createDictionary = exports.createDictionary = function createDictionary(languages) {
    var languageDicts = {};

    languages.forEach(function (lang) {
        Object.assign(languageDicts, _defineProperty({}, lang.lang_id, lang.data));
    });

    return {
        locale: 'pt-BR',
        dictionary: languageDicts,
        getTranslation: function getTranslation(entry) {
            var locale = this.locale,
                dictionary = this.dictionary;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return (0, _get_translation_impl2.default)(dictionary, locale, entry, args);
        }
    };
};