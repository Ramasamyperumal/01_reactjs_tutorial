import React from 'react';

class ClassCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            fact: "",
            length: 0,
            timeout: "",
        }
        console.log("constructor");
    }

    // static getDerivedStateFromProps(nextProps, nextState) {
    //     console.log("getDerivedStateFromProps");
    //     return nextState.login = nextProps.login;
    // }

    fetchData() {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({fact: result.fact});
                this.setState({length: result.length});
            });
    }

    componentDidMount() {
        // this.setState({ login: this.props.login });
        console.log("componentDidMount");
        
        this.fetchData();

        // if(this.state.login !== false)
            this.setState({login: this.props.login});
    }

    shouldComponentUpdate(prevProps, prevState) {
        console.log(prevState.login, "PREV STATE LOGIN");
        console.log(this.state.login, "CURRENT STATE LOGIN");

        // if(prevState.login !== this.state.login)
        if(prevState.fact !== this.state.fact)
            return true;
        else
            return false;
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(prevState.login, "PREV STATE LOGIN");
    //     return "";
    // }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        // this.setState({login: this.props.login});
        // this.timeout = setTimeout(() => {
        //     this.fetchData();
        // }, 5000);
    }

    // componentWillUnmount() {
    //     clearTimeout(this.timeout);
    // }

    render() {
        console.log("render");
        return (
            <>
                <p>My State Value is: {this.state.login.toString()}</p>
                <p>My Props Values is: {this.props.login.toString()}</p>
                <div id="row2section3">
                    <p>Fact: {this.state.fact}</p>
                    <p>Length: {this.state.length}</p>
                </div>
            </>
        )
    }
}

export default ClassCycle;