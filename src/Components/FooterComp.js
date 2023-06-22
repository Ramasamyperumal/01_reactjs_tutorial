import { useNavigate } from "react-router-dom";

function FooterComp() {

    const navigate = useNavigate();

    const redirecTo = (e) => {
        navigate(e.target.id);
        // window.location.href = e.target.id;
    }

    return (
        <div className="row4">

            <div>
                <button onClick={redirecTo} id="/">Home</button>
                <button onClick={redirecTo} id="/about">About</button>
                <button onClick={redirecTo} id="/contact">Contact</button>
                <button onClick={redirecTo} id="/blog">Blog</button>
                <button onClick={redirecTo} id="/portfolio">Portfolio</button>
            </div>
            <div>&copy; Copyright. All Rights Reserved.</div>
        </div>
    );
}

export default FooterComp;