import { useState, useEffect, useRef } from "react";

function FuncHooks(props) {
    const [loginFunc, setLoginFunc] = useState(false);
    const [fact, setFact] = useState("");
    const [length, setLength] = useState(0);

    const [counter, setCounter] = useState(0);

    const [currentText, setCurrentText] = useState("");
    const previousText = useRef();

    const fetchData = () => {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setFact(result.fact);
                setLength(result.length);
            });
    }

    // useEffect(() => {
    //     console.log("useEffect");
    //     // setLoginFunc(props.login);
    //     setCounter(counter => counter + 1);

    //     fetchData();
    // },[]); // componentDidMount();

    // useEffect(() => {
    //     console.log("useEffect - Facts");
    //     let timer = setTimeout(() => {
    //         fetchData();
    //     }, 5000);

    //     return () => clearTimeout(timer);
    // }, [fact]); // componentDidUpdate();

    const showUpdatedText = (e) => {
        setCurrentText(e.target.value);
    }

    useEffect(() => {
        previousText.current = currentText;
    },[currentText, fact]);

    return (
        <>
            <h1>Function Hooks</h1>
            <p>Login (Property): {props.login.toString()}</p>
            <p>Login (State): {loginFunc.toString()}</p>
            <p>Counter: {counter}</p>
            <p>Fact: {fact}</p>
            <p>Length: {length}</p>

            <p><input type="text" onChange={showUpdatedText} /></p>
            <p>Current Text: {currentText}</p>
            <p>Previous Text: {previousText.current}</p>
        </>
    )
}

export default FuncHooks;