'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var label = _ref.label,
        icon = _ref.icon,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['label', 'icon']);
    return rest;
};

var FormTab = function FormTab(_ref2) {
    var children = _ref2.children,
        rest = (0, _objectWithoutProperties3.default)(_ref2, ['children']);
    return _react2.default.createElement(
        'span',
        null,
        _react2.default.Children.map(children, function (input) {
            return input && _react2.default.createElement(_FormInput2.default, (0, _extends3.default)({ input: input }, sanitizeRestProps(rest)));
        })
    );
};

FormTab.propTypes = {
    children: _propTypes2.default.node
};

exports.default = FormTab;
module.exports = exports['default'];