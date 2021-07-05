'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LocalizeProvider = require('./components/LocalizeProvider');

Object.keys(_LocalizeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LocalizeProvider[key];
    }
  });
});

var _Locale = require('./components/Locale');

Object.keys(_Locale).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Locale[key];
    }
  });
});

var _locale = require('./decorators/locale');

Object.keys(_locale).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _locale[key];
    }
  });
});

var _createDictionary = require('./utils/createDictionary');

Object.keys(_createDictionary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createDictionary[key];
    }
  });
});

var _actions = require('./actions');

Object.keys(_actions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actions[key];
    }
  });
});

var _reducers = require('./reducers');

Object.keys(_reducers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reducers[key];
    }
  });
});