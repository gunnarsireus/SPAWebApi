import * as React from "react";
import * as ReactDOM from "react-dom";
import { DangerAlert,Alert } from "./components/alert";
import { Well } from "./components/well";

ReactDOM.render(
    <div>
        <DangerAlert text="OMG, this is dangerous!"/>
        <Well text="Well well well..." />
        <div id="divDialog"/>
    </div>,
    document.getElementById("body")
);
ReactDOM.render(<Alert text="Message from jquery-ui Dialog" />, document.getElementById("divDialog"));