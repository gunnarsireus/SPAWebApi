"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
require("../node_modules/jquery-ui/themes/base/jquery-ui.css");
var DangerAlert = (function (_super) {
    __extends(DangerAlert, _super);
    function DangerAlert(props) {
        _super.call(this, props);
    }
    ;
    DangerAlert.prototype.render = function () {
        return React.createElement("div", {className: "alert alert-danger"}, this.props.text);
    };
    return DangerAlert;
}(React.Component));
exports.DangerAlert = DangerAlert;
var SuccessAlert = (function (_super) {
    __extends(SuccessAlert, _super);
    function SuccessAlert(props) {
        _super.call(this, props);
    }
    ;
    SuccessAlert.prototype.render = function () {
        return React.createElement("div", {className: "alert alert-success"}, this.props.text);
    };
    return SuccessAlert;
}(React.Component));
exports.SuccessAlert = SuccessAlert;
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        _super.call(this, props);
    }
    ;
    Alert.prototype.render = function () {
        return (React.createElement(DialogAlert, null, React.createElement("p", null, this.props.text)));
    };
    return Alert;
}(React.Component));
exports.Alert = Alert;
;
var DialogAlert = (function (_super) {
    __extends(DialogAlert, _super);
    function DialogAlert(props) {
        _super.call(this, props);
    }
    ;
    DialogAlert.prototype.render = function () {
        return React.createElement("div", null);
    };
    DialogAlert.prototype.componentDidMount = function () {
        // 2) do DOM lib stuff
        this.props.node = ReactDOM.findDOMNode(this);
        this.props.dialog = $(this.props.node).dialog({
            modal: true,
            title: 'Felmeddelande:',
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        }).data('ui-dialog');
        // 3) call method to reconnect React's rendering
        this.renderDialogContent(null);
    };
    ;
    DialogAlert.prototype.componentWillReceiveProps = function (newProps) {
        // 4) render reconnected tree when props change
        this.renderDialogContent(newProps);
    };
    ;
    DialogAlert.prototype.renderDialogContent = function (props) {
        // decide to use newProps from `componentWillReceiveProps` or to use
        // existing props from `componentDidMount`
        props = props || this.props;
        // 5) make a new rendering tree, we've now hidden the DOM
        //    manipulation from jQuery UI dialog and then continued
        //    rendering with React
        ReactDOM.render(React.createElement("div", null, this.props.children), this.props.node);
        // 6) Call methods on the DOM lib via prop changes
        if (props.open)
            this.props.dialog.open;
        else
            this.props.dialog.close;
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