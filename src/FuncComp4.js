import { useContext } from "react";
import { LoginContext } from "./App";

function FuncComp4() {
    return (
        <>
            <h2>Function Component 4</h2>

            <p>Login: {useContext(LoginContext).toString()}</p>
        </>
    )
}

export default FuncComp4;