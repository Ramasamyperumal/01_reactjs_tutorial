import { useContext } from "react";
import { LoginContext } from "./App";

function FuncComp3() {
    return (
        <>
            <h2>Function Component 3</h2>

            <p>Login: {useContext(LoginContext).toString()}</p>
        </>
    )
}

export default FuncComp3;