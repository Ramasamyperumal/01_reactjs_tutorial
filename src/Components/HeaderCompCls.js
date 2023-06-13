import React from "react";
class HeaderCompCls extends React.Component {
    constructor() {
        super();
        
        this.state = {
            login: false,
            fact: "",
            length: 0
        }

        this.showFact = this.showFact.bind(this);
    }

    showFact() {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({fact: result.fact});
                this.setState({length: result.length});
            });
    }

    render() {
        return (
            <>
                <div className="row1">
                    <div className="row1section1">
                        <div>
                            <img src="images/Dinesh.jpg" alt="" className="logo" />
                        </div>
                        <div>
                            <h3 className='titleText'>Dinesh</h3>
                            <div>Technical Trainer</div>
                            <div>Web Developer</div>
                            <div>Email Me</div>
                        </div>
                    </div>
                    <div className="row1section2">
                        <div>Projects</div>
                        <div>About Me</div>
                        <div>Contact Me</div>
                        <div>
                            {this.state.login.toString()}

                            {
                                (this.state.login)
                                ?
                                    <>
                                        <div>My Account</div>
                                        <div>Profile</div>
                                        <button onClick={() => this.setState({login: false})}>Logout</button>
                                    </>
                                :
                                    <button onClick={() => this.setState({login: true})}>Login</button>
                            }
                        </div>
                    </div>
                    {
                        this.state.login 
                        && 
                            <div id="row2section3">
                                <p>Fact: {this.state.fact}</p>
                                <p>Length: {this.state.length}</p>

                                <button onClick={this.showFact}>Show Fact</button>
                            </div>
                    }
                </div>
            </>
        )
    }
}

export default HeaderCompCls;