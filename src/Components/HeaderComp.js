import { useState } from "react";
function HeaderComp() {
    const [login, setLogin] = useState(false);

    const [fact, setFact] = useState("");
    const [length, setLength] = useState(0);

    const showFact = () => {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setFact(result.fact);
                setLength(result.length);
            });
    }

    return (
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
                    {login.toString()}

                    {
                        (login)
                        ?
                            <>
                                <div>My Account</div>
                                <div>Profile</div>
                                <button onClick={() => setLogin(false)}>Logout</button>
                            </>
                        :
                            <button onClick={() => setLogin(true)}>Login</button>
                    }
                </div>
            </div>
            {
                login 
                && 
                    <div id="row2section3">
                        <p>Fact: {fact}</p>
                        <p>Length: {length}</p>

                        <button onClick={showFact}>Show Fact</button>
                    </div>
            }
        </div>
    );
}

export default HeaderComp;