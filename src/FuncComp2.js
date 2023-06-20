import { useContext } from "react";
import { LoginContext } from "./App";

function FuncComp2() {
    return (
        <>
            <h2>Function Component 2</h2>

            <p>Login: {useContext(LoginContext).toString()}</p>
        </>
    )
}

export default FuncComp2;