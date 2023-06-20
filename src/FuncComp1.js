import { useContext } from "react";
import { LoginContext } from "./App";

function FuncComp1() {
    return (
        <>
            <h2>Function Component 1</h2>

            <p>Login: {useContext(LoginContext).toString()}</p>
        </>
    )
}

export default FuncComp1;