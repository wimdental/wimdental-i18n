'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLanguage = setLanguage;

/**
 * Action types
 */
var actionTypes = exports.actionTypes = {
    SET_LANGUAGE: '@wimdental/i18n/SET_LANGUAGE'
};

/**
 * Se language action creator
 * @param {*} language
 */
function setLanguage(language) {
    return {
        type: actionTypes.SET_LANGUAGE,
        payload: language
    };
}