"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var alert_1 = require("./src/components/alert");
var well_1 = require("./src/components/well");
ReactDOM.render(React.createElement("div", null,
    React.createElement(alert_1.DangerAlert, { text: "OMG, this is dangerous!!!" }),
    React.createElement("div", { id: "divDialog" }, "XXX"),
    React.createElement(well_1.Well, { text: "Well well well..." })), document.getElementById("body"));
ReactDOM.render(React.createElement(alert_1.Alert, { text: "Dialog-alert" }), document.getElementById("divDialog"));
//# sourceMappingURL=index.js.map