'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DictionaryShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DictionaryShape = exports.DictionaryShape = _propTypes2.default.shape({
    locale: _propTypes2.default.string,
    dictionary: _propTypes2.default.object.isRequired,
    getTranslation: _propTypes2.default.func.isRequired
}).isRequired;