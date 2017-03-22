"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
require("../../jquery-ui.js");
var DangerAlert = (function (_super) {
    __extends(DangerAlert, _super);
    function DangerAlert(props) {
        return _super.call(this, props) || this;
    }
    ;
    DangerAlert.prototype.render = function () {
        return React.createElement("div", { className: "alert alert-danger" }, this.props.text);
    };
    return DangerAlert;
}(React.Component));
exports.DangerAlert = DangerAlert;
var SuccessAlert = (function (_super) {
    __extends(SuccessAlert, _super);
    function SuccessAlert(props) {
        return _super.call(this, props) || this;
    }
    ;
    SuccessAlert.prototype.render = function () {
        return React.createElement("div", { className: "alert alert-success" }, this.props.text);
    };
    return SuccessAlert;
}(React.Component));
exports.SuccessAlert = SuccessAlert;
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        return _super.call(this, props) || this;
    }
    ;
    Alert.prototype.render = function () {
        return (React.createElement(DialogAlert, null,
            React.createElement("p", null, this.props.text)));
    };
    return Alert;
}(React.Component));
exports.Alert = Alert;
;
var DialogAlert = (function (_super) {
    __extends(DialogAlert, _super);
    function DialogAlert(props) {
        return _super.call(this, props) || this;
    }
    ;
    DialogAlert.prototype.render = function () {
        return React.createElement("div", null);
    };
    DialogAlert.prototype.componentDidMount = function () {
        // 2) do DOM lib stuff
        var node = ReactDOM.findDOMNode(this);
        var dialog = $(node).dialog({
            modal: true,
            title: 'Message:',
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        }).data('ui-dialog');
        // 3) call method to reconnect React's rendering
        this.renderDialogContent(null, node, dialog);
    };
    ;
    DialogAlert.prototype.componentWillReceiveProps = function (newProps, node, dialog) {
        // 4) render reconnected tree when props change
        this.renderDialogContent(newProps, node, dialog);
    };
    ;
    DialogAlert.prototype.renderDialogContent = function (props, node, dialog) {
        // decide to use newProps from `componentWillReceiveProps` or to use
        // existing props from `componentDidMount`
        props = props || this.props;
        // 5) make a new rendering tree, we've now hidden the DOM
        //    manipulation from jQuery UI dialog and then continued
        //    rendering with React
        ReactDOM.render(React.createElement("div", null, this.props.children), node);
        // 6) Call methods on the DOM lib via prop changes
        if (this.props.open)
            dialog.open;
        else
            dialog.close;
    };
    ;
    DialogAlert.prototype.componentWillUnmount = function () {
        // clean up the mess
        //this.props.dialog.destroy;
    };
    ;
    return DialogAlert;
}(React.Component));
exports.DialogAlert = DialogAlert;
//# sourceMappingURL=alert.js.map