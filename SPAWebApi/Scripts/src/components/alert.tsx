import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import '../../../node_modules/jquery-ui/ui/widgets/dialog';

export interface IAlertProp {
    text: string;
}

export interface IDialogProp {
    open?: boolean;
    onClose?: () => void;
    title?: string;
}


export class DangerAlert extends React.Component<IAlertProp, {}> {
    constructor(props: IAlertProp) {
        super(props);
    };
    render() {
        return <div className="alert alert-danger">{this.props.text}</div>;
    }
}

export class SuccessAlert extends React.Component<IAlertProp, {}> {
    constructor(props: IAlertProp) {
        super(props);
    };
    render() {
        return <div className="alert alert-success">{this.props.text}</div>;
    }
}

export class Alert extends React.Component<IAlertProp, {}> {
    constructor(props: IAlertProp) {
        super(props);
    };

    render() {
        return (
            <DialogAlert >
                <p>{this.props.text}</p>
            </DialogAlert>
        );
    }
};

export class DialogAlert extends React.Component<IDialogProp, {}> {
    constructor(props: IDialogProp) {
        super(props);
    };
    render() {
        return <div/>;
    }
    componentDidMount() {
        // 2) do DOM lib stuff
        var node: Element = ReactDOM.findDOMNode(this);
        var dialog: JQueryUI.Dialog = $(node).dialog({
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

    componentWillReceiveProps(newProps: IDialogProp, node: Element, dialog: JQueryUI.Dialog) {
        // 4) render reconnected tree when props change
        this.renderDialogContent(newProps, node, dialog);
    };

    renderDialogContent(props: IDialogProp, node: Element, dialog: JQueryUI.Dialog) {
        // decide to use newProps from `componentWillReceiveProps` or to use
        // existing props from `componentDidMount`
        props = props || this.props;

        // 5) make a new rendering tree, we've now hidden the DOM
        //    manipulation from jQuery UI dialog and then continued
        //    rendering with React
        ReactDOM.render(<div>{this.props.children}</div>, node);

        // 6) Call methods on the DOM lib via prop changes
        if (this.props.open)
            dialog.open;
        else
            dialog.close;
    };

    componentWillUnmount() {
        // clean up the mess
        //this.props.dialog.destroy;
    };
}