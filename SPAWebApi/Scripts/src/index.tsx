import * as React from "react";
import * as ReactDOM from "react-dom";
import { DangerAlert,Alert } from "./components/alert";
import { Well } from "./components/well";

ReactDOM.render(
    <div>
        <DangerAlert text="OMG, this is dangerous!!!"/>
        <div id="divDialog">XXX</div>
        <Well text="Well well well..."/>
    </div>,
    document.getElementById("body")
);
ReactDOM.render(<Alert text="Dialog-alert" />, document.getElementById("divDialog"));