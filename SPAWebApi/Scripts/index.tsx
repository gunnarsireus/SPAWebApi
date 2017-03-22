import * as React from "react";
import * as ReactDOM from "react-dom";
import { DangerAlert,Alert } from "./src/components/alert";
import { Well } from "./src/components/well";

ReactDOM.render(
    <div>
        <DangerAlert text="OMG, this is dangerous!!!"/>
        <div id="divDialog">XXX</div>
        <Well text="Well well well..."/>
    </div>,
    document.getElementById("body")
);
ReactDOM.render(<Alert text="Message from jquery-ui Dialog" />, document.getElementById("divDialog"));