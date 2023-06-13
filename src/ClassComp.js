import React from "react";

class AdditionCls extends React.Component {
    constructor(props) {
        super(props);
        // this.a = 10;
        // this.b = 20;
    }

    render() {
        return (
            <>
                <div>{this.props.name} of {this.props.a} + {this.props.b} = {this.props.a+this.props.b}</div>
            </>
        );
    }
}

class SubtractionCls extends React.Component {
    constructor(props) {
        super(props);
        // this.a = 1;
        // this.b = 1;
    }

    render() {
        return (
            <>
                <div>{this.props.name} of {this.props.a} - {this.props.b} = {this.props.a-this.props.b}</div>
            </>
        );
    }
}

class DivisionCls extends React.Component {
    constructor(props) {
        super(props);
        // this.a = 1;
        // this.b = 1;
    }

    render() {
        return (
            <>
                <div>{this.props.name} of {this.props.a} / {this.props.b} = {this.props.a/this.props.b}</div>

                <MultiplicationCls name="Multiplication" a={this.props.a} b={this.props.b} />
            </>
        );
    }
}

class MultiplicationCls extends React.Component {
    constructor(props) {
        super(props);
        // this.a = 2;
        // this.b = 2;
    }

    render() {
        return (
            <>
                <div>{this.props.name} of {this.props.a} * {this.props.b} = {this.props.a*this.props.b}</div>
            </>
        );
    }
}

export default AdditionCls;
export { SubtractionCls, DivisionCls };