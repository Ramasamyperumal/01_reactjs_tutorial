import { useState, useRef } from "react";

function FuncFoms() {
    const [username, setUsername] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handlePureForms = () => {
        (username === "") ? setUsernameErr("Please enter a username") : setUsernameErr("");
        (password === "") ? setPasswordErr("Please enter a password") : setPasswordErr("");
        console.log("Username", username);
        console.log("Password", password);
    }

    const handleHalfPureForms = () => {
        console.log("Username", usernameRef.current.value);
        console.log("Password", passwordRef.current.value);
    }

    const handleDOMForms = (e) => {
        e.preventDefault();
        console.log("Username", document.getElementById("username").value);
        console.log("Password", document.getElementById("password").value);
    }

    return (
        <>
            <h2>Function Forms</h2>

            <h3>Pure Forms</h3>
            <div>
                <input type="text" placeholder="Username:" onChange={(e) => setUsername(e.target.value)} />{usernameErr}<br />
                <input type="text" placeholder="Password:" onChange={(e) => setPassword(e.target.value)} />{passwordErr}<br />
                <button onClick={handlePureForms}>Submit</button><br />
                <p>
                    Username: {username}<br />
                    Password: {password}<br />
                </p>
            </div>


            <h3>Half Pure Forms</h3>
            <div>
                <input type="text" placeholder="Username:" ref={usernameRef} /><br />
                <input type="text" placeholder="Password:" ref={passwordRef} /><br />
                <button onClick={handleHalfPureForms}>Submit</button><br />
            </div>


            <h3>DOM Forms</h3>
            <div>
                <form>
                    <input type="text" placeholder="Username:" id="username" /><br />
                    <input type="text" placeholder="Password:" id="password" /><br />
                    <button onClick={handleDOMForms}>Submit</button><br />
                </form>
            </div>
        </>
    )
}

export default FuncFoms;