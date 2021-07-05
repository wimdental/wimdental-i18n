'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.reducer = reducer;

var _actions = require('../actions');

/**
 * Find local storage language or get it from browser
 */
var getLocalLanguage = function getLocalLanguage() {
    var lsLang = localStorage.getItem('app.lang.id');
    if (!lsLang) {
        var _lsLang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
        localStorage.setItem('app.lang.id', _lsLang);
    }
    return lsLang;
};

var initialState = {
    locale: getLocalLanguage()
};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { type: '', payload: {} };

    switch (action.type) {
        case _actions.actionTypes.SET_LANGUAGE:
            return _extends({}, state, {
                locale: action.payload
            });
        default:
            return state;
    }
}