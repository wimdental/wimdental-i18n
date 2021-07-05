'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Implement function translation
 */
exports.default = function (dictionary, locale, entry, args) {
    var currentLocale = dictionary['en-US'];

    if (dictionary && dictionary[locale] !== undefined) {
        currentLocale = dictionary[locale];
    } else {
        console.warn('Locale ' + locale + ' not found on dictionary.');
    }

    var entryValue = currentLocale[entry];

    if (entryValue === undefined) {
        console.error('Key ' + entry + ' not found on locale ' + currentLocale + '.');
        return entry;
    }

    if (typeof entryValue === 'function') {
        var result = entryValue.call({}, args);
        return result;
    } else if (typeof entryValue === 'string') {
        return entryValue;
    } else if (_react2.default.isValidElement(entryValue)) {
        return entryValue;
    } else {
        throw new Error('Locale entry ' + locale + '.data.' + entry + ' must be a string or function.');
    }
};