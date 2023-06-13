function Addition(props) {
    // let a = 1;
    // let b = 1;

    // console.log(props);
    // console.log(props.name);
    // console.log(props.a);
    // console.log(props.b);

    return (
        <>
            <div>{props.name} of {props.a} + {props.b} = {props.a+props.b}</div>
        </>
    );
}

function Subtraction(props) {
    // let a = 1;
    // let b = 1;

    return (
        <>
            <div>{props.name} of {props.a} - {props.b} = {props.a-props.b}</div>
        </>
    );
}

function Division(props) {
    // let a = 1;
    // let b = 1;

    return (
        <>
            <div>{props.name} of {props.a} / {props.b} = {props.a/props.b}</div>

            <Multiplication name="Multiplication" a={props.a} b={props.b} />
        </>
    );
}

function Multiplication(props) {
    // let a = 1;
    // let b = 1;

    return (
        <>
            <div>{props.name} of {props.a} * {props.b} = {props.a*props.b}</div>
        </>
    )
}

export default Addition;
export { Subtraction, Division };