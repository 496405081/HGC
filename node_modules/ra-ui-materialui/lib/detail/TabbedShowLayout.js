'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabbedShowLayout = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tabs = require('@material-ui/core/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    tab: { padding: '0 1em 1em 1em' }
};

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var children = _ref.children,
        className = _ref.className,
        classes = _ref.classes,
        record = _ref.record,
        resource = _ref.resource,
        basePath = _ref.basePath,
        version = _ref.version,
        initialValues = _ref.initialValues,
        translate = _ref.translate,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'classes', 'record', 'resource', 'basePath', 'version', 'initialValues', 'translate']);
    return rest;
};

/**
 * Tabbed Layout for a Show view, showing fields grouped in tabs.
 * 
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its childen. Children should be Tab components.
 *
 * @example     
 *     // in src/posts.js
 *     import React from 'react';
 *     import { Show, TabbedShowLayout, Tab, TextField } from 'react-admin';
 *     
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content">
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata">
 *                     <TextField source="category" />
 *                </Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import React from 'react';
 *     import { Admin, Resource } from 'react-admin';
 *     
 *     import { PostShow } from './posts';
 *     
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */

var TabbedShowLayout = exports.TabbedShowLayout = function (_Component) {
    (0, _inherits3.default)(TabbedShowLayout, _Component);

    function TabbedShowLayout(props) {
        (0, _classCallCheck3.default)(this, TabbedShowLayout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabbedShowLayout.__proto__ || Object.getPrototypeOf(TabbedShowLayout)).call(this, props));

        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
        };

        _this.state = {
            value: 0
        };
        return _this;
    }

    (0, _createClass3.default)(TabbedShowLayout, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                className = _props.className,
                classes = _props.classes,
                record = _props.record,
                resource = _props.resource,
                basePath = _props.basePath,
                version = _props.version,
                rest = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'classes', 'record', 'resource', 'basePath', 'version']);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({
                    className: className,
                    key: version
                }, sanitizeRestProps(rest)),
                _react2.default.createElement(
                    _Tabs2.default,
                    {
                        scrollable: true,
                        value: this.state.value,
                        onChange: this.handleChange,
                        indicatorColor: 'primary'
                    },
                    _react.Children.map(children, function (tab, index) {
                        return tab && (0, _react.cloneElement)(tab, {
                            context: 'header',
                            value: index
                        });
                    })
                ),
                _react2.default.createElement(_Divider2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: classes.tab },
                    _react.Children.map(children, function (tab, index) {
                        return tab && _this2.state.value === index && (0, _react.cloneElement)(tab, {
                            context: 'content',
                            resource: resource,
                            record: record,
                            basePath: basePath
                        });
                    })
                )
            );
        }
    }]);
    return TabbedShowLayout;
}(_react.Component);

TabbedShowLayout.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    record: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    basePath: _propTypes2.default.string,
    version: _propTypes2.default.number,
    translate: _propTypes2.default.func
};

var enhance = (0, _styles.withStyles)(styles);

exports.default = enhance(TabbedShowLayout);