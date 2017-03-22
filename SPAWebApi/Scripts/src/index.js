"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var alert_1 = require("./components/alert");
var well_1 = require("./components/well");
ReactDOM.render(React.createElement("div", null,
    React.createElement(alert_1.DangerAlert, { text: "OMG, this is dangerous!" }),
    React.createElement(well_1.Well, { text: "Well well well..." }),
    React.createElement("div", { id: "divDialog" })), document.getElementById("body"));
ReactDOM.render(React.createElement(alert_1.Alert, { text: "Message from jquery-ui Dialog" }), document.getElementById("divDialog"));
//# sourceMappingURL=index.js.map