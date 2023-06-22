// import { useState } from "react";
// function HeaderComp() {
//     const [login, setLogin] = useState(false);

//     const [fact, setFact] = useState("");
//     const [length, setLength] = useState(0);

//     const showFact = () => {
//         fetch("https://catfact.ninja/fact")
//             .then(response => response.json())
//             .then(result => {
//                 console.log(result);
//                 setFact(result.fact);
//                 setLength(result.length);
//             });
//     }

//     return (
//         <div className="row1">
//             <div className="row1section1">
//                 <div>
//                     <img src="images/Dinesh.jpg" alt="" className="logo" />
//                 </div>
//                 <div>
//                     <h3 className='titleText'>Dinesh</h3>
//                     <div>Technical Trainer</div>
//                     <div>Web Developer</div>
//                     <div>Email Me</div>
//                 </div>
//             </div>
//             <div className="row1section2">
//                 <div>Projects</div>
//                 <div>About Me</div>
//                 <div>Contact Me</div>
//                 <div>
//                     {login.toString()}

//                     {
//                         (login)
//                         ?
//                             <>
//                                 <div>My Account</div>
//                                 <div>Profile</div>
//                                 <button onClick={() => setLogin(false)}>Logout</button>
//                             </>
//                         :
//                             <button onClick={() => setLogin(true)}>Login</button>
//                     }
//                 </div>
//             </div>
//             {
//                 login 
//                 && 
//                     <div id="row2section3">
//                         <p>Fact: {fact}</p>
//                         <p>Length: {length}</p>

//                         <button onClick={showFact}>Show Fact</button>
//                     </div>
//             }
//         </div>
//     );
// }

// export default HeaderComp;

import { Link, NavLink } from "react-router-dom";
function HeaderComp() {
    return (
        <>
            <div className="flex">
                <div className="part30">Logo</div>
                <div className="part70">
                    <a href="/">Home</a> | 
                    <a href="/about">About</a> | 
                    <a href="/contact">Contact</a> | 
                    <a href="/blog">Blog</a> | 
                    <a href="/portfolio">Portfolio</a>

                    <br/><br/>
                    <Link to="/">Home</Link> | 
                    <Link to="/about">About</Link> | 
                    <Link to="/contact">Contact</Link> | 
                    <Link to="/blog">Blog</Link> | 
                    <Link to="/portfolio">Portfolio</Link>

                    <br/><br/>
                    <NavLink to="/">Home</NavLink> | 
                    <NavLink to="/about">About</NavLink> | 
                    <NavLink to="/contact">Contact</NavLink> | 
                    <NavLink to="/blog">Blog</NavLink> | 
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </div>
            </div>
        </>
    )
}
export default HeaderComp;