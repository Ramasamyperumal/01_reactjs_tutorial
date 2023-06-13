// import logo from './logo.svg';
import './App.css';
import AboutComp from './Components/AboutComp';
import FooterComp from './Components/FooterComp';
import HeaderComp from './Components/HeaderComp';
import HeaderCompCls from './Components/HeaderCompCls';
import ProjectComp from './Components/ProjectComp';
import { useState } from 'react';

// function App() {
//   let output = 'This is a JS Code';

//   //Lists and Keys
//   let items = ["Item 1", "Item 2", "Item 3", "Item 4", "New Item 5"];
//   // let results = items.map((v, i)=> {
//   //   return (
//   //     <li>{v}</li>
//   //   );
//   // });

//   let results = items.map((v, i) => <li key={i}>{v}</li>);

//   let users = [
//     {
//       name: "Dinesh",
//       age: 30,
//       phone: 1234567890,
//       email: "srinanoo@gmail.com"
//     },
//     {
//       name: "Tony",
//       age: 35,
//       phone: 9876543210,
//       email: "tony@gmail.com"
//     },
//     {
//       name: "Gopal",
//       age: 20,
//       phone: 1111111111,
//       email: "gopal@gmail.com"
//     }
//   ]

//   return (
//     <div>
//       <h1>My First ReactJs Project</h1>
//       {/* <div>{ output }</div>
//       <div>{ 5+5 }</div>
//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         <li>Item 4</li>
//       </ul>

//       <ul>
//         {results}
//       </ul>

//       <ul>
//         {
//           items.map((v, i) => <li key={i}>{v}</li>)
//         }
//       </ul> */}

//       <h3>Users List</h3>
//       {
//         users.map((v, i) => {
//           return (
//             <div key={i}>
//               <p>Name: {v.name}</p>
//               <p>Age: {v.age}</p>
//               <p>Phone: {v.phone}</p>
//               <p>Email: {v.email}</p>
//               <hr />
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }

function App() {
    return (
        <div>
            {/* <HeaderComp /> */}
            <HeaderCompCls />
            <ProjectComp />
            <AboutComp />
            <FooterComp />
        </div>
    );
}

export default App;



// // Class Component
// import React from 'react';
// import AdditionCls, { SubtractionCls, DivisionCls } from './ClassComp';

// import Addition, { Subtraction, Division } from './FuncComp';
// class AppCls extends React.Component {
//     constructor() {
//         super();
//         this.a = 10;
//         this.b = 10;
//     }
//     render() {
//         return (
//             <>
//                 <h1>This is my first Class Component</h1>

//                 <AdditionCls name="Addition" a={this.a} b={this.b} />
//                 <SubtractionCls name="Subtraction" a={this.a} b={this.b} />
//                 <DivisionCls name="Division" a={this.a} b={this.b} />
//             </>
//         );
//     }
// }

// // Function Component
// function App() {
//     // let a = 20;
//     // let b = 20;

//     const [a, setA] = useState(20);
//     const [b, setB] = useState(20);

//     console.log(a, b, " before calling the function");

//     const updateValue = () => {
//         // a = 30;
//         // b = 30;
//         setA(30);
//         setB(30);
//         console.log(a, b, " after calling the function");
//     }

//     return (
//         <>
//             <h1>My First Function Component</h1>

//             a variable's value is: {a}<br />
//             b variable's value is: {b}<br /><br />

//             <Addition name="Addition" a={a} b={b} />
//             <Subtraction name="Subtraction" a={a} b={b} />
//             <Division name="Division" a={a} b={b} /><br />

//             <button onClick={updateValue}>Change Value</button>
//         </>
//     )
// }

// export default App;
// export { AppCls };


// function App() {
//     return (
//         <>
//             <div className="menu">
//                 <div className="title">
//                     <h1><code>A</code>kshaya's&nbsp;<code>V</code>isionaries</h1><small id="small">Photography</small>
//                 </div>
//                 <div className="menus">
//                     <br />
//                     <a href="#about" className="red active" style={{"color":"white"}}>About</a>
//                     <a href="#services">Services</a>
//                     <a href="#folio">Folio</a>
//                     <a href="#welcome">Blogs</a>
//                     <a href="#contact">Contact</a>
//                 </div>
//             </div><br />
//             <div className="container-fluid gridimages text-center">
//                 <div className="row">
//                     <div className="col-sm-2"><img src="img/b1.jpg" alt="img1" width="400" height="500" /></div>
//                     <div className="col-sm-2"><img src="img/b3.jpg" alt="img2" width="400" height="500" /></div>
//                     <div className="col-sm-2"><img src="img/b2.jpg" alt="img3" width="400" height="500" /></div>
//                     <div className="col-sm-2"><img src="img/b4.jpg" alt="img4" width="400" height="500" /></div>
//                     <div className="col-sm-2"><img src="img/b5.jpg" alt="img5" width="400" height="500" /></div>   
//             </div>
//             </div><br />
//             <div className="container-fluid welcome">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <h1><code>W</code>elcome!</h1>
//                     </div>
//                     <div className="col-lg-8">
//                             <p id="welcome"><code1>Click Here&nbsp;&nbsp;</code1> for more info about this photography page.Explore the roots of categories via our clicks and Services.We came around the sun on 2019.Hope we will improve our features for the user's emphasize in various categories like Travel,Food,Wedding,Wildlife etc., </p>
//                     </div>
//                 </div>
//             </div><br />
//             <div className="container-fluid Services"><br />
//                 <div className="row">
//                     <div className="col-md-3">
//                         <h2 id="services">Fashion</h2><br />
//                         <img src="img/Fashion.jpeg" width="300" height="300" alt="fashion" /><br /><br />
//                         <i>
//                         <strong>#FashionkiJalwa</strong>
//                         <p> A Fashion with passion arises attitude!We offer photoshoots at different attires and ambiences.</p></i><br /><br />
//                         <button width="150px" height="50px" className="serv">Read More</button>
//                     </div>
//                     <div className="col-md-3">
//                         <h2>Nature</h2><br />
//                         <img src="img/Nature.jpg" width="300" height="300" alt="nature" /><br /><br />
//                         <i>
//                         <strong>#BlisstoNaturalhears</strong>
//                         <p>We provide module offers at different locations with variances theme.</p></i><br /><br />
//                         <button width="150px" height="50px" className="serv">Read More</button>
//                     </div>
//                     <div className="col-md-3">
//                         <h2>Wedding</h2><br />
//                         <img src="img/Wedding.jpg" width="300" height="300" alt="wedding" /><br /><br />
//                         <i>
//                         <strong>#SnapsJustMarried</strong>
//                         <p>Oh Ringing Bells!How can it be expressed without clicks.HDD,Hovers,Pre and Post shoots available with flat 30% offers.</p></i><br />
//                         <button  width="150px" height="50px" className="serv">Read More</button>
//                     </div>
//                     <div className="col-md-2">
//                         <h2>Travel</h2><br />
//                         <img src="img/travel.jpeg" width="300" height="300" alt="travel" /><br /><br />
//                         <i>
//                         <strong>#ARoadtoParadise</strong>
//                         <p>Travel to desired dream palaces with photo packages and theme light-out effects.</p></i><br /><br />
//                         <button  width="150px" height="50px" className="serv">Read More</button>
//                     </div>
//                 </div><br />
//             </div><br />
            
//             <div className="container-fluid AboutmeFolio">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <h1 id="about">Shortly AboutMe</h1><br />
//                         <div className="row" >
//                             <div className="col-md-6">
//                                 <img src="img/about.jpg" width="300px" height="500px" style={{"border":"2px solid white"}} alt="about" />
//                             </div>
//                             <div className="col-md-6">
//                                 <strong ><i>We offer various services in accordance with customer's need and heed for your dream effect to come true.</i></strong>
//                                 <br /><br /><p style={{"font-size": "small"}}>We are striving over past years with new eqipped galvanizing focuses on each launches.Some of the services includes.</p>
//                                 <div className="row">
//                                     <div className="col-md-6" style={{"color":"darkmagenta", "font-size": "large", "font-style":"italic"}}><br />
//                                         <ul>
//                                             <li>Fashion</li>
//                                             <li>Public events</li>
//                                             <li>Arts and Design</li>
//                                             <li>Travels</li>
//                                         </ul>
//                                     </div>
//                                     <div className="col-md-6" style={{"color":"darkmagenta", "font-size": "large", "font-style":"italic"}}><br />
//                                         <ul>
//                                             <li>Weddings</li>
//                                             <li>Party</li>
//                                             <li>Validictories</li>
//                                             <li>Food Fests</li>
//                                             <li>Business Events</li>
//                                         </ul>
//                                     </div>
//                                 </div>
                                
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <h1 id="folio">Latest Photoshoots</h1><br />
//                         <div className="photos">
//                             <div className="row">
//                                 <div className="col-sm-4">
//                                     <img src="img/mod1.jpeg" id="p1" alt="img6" />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <img src="img/mod2.jpg" id="p2" alt="img7" />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <img src="img/mod 3.jpg" id="p3" alt="img8" />
//                                 </div>
//                             </div><br />
//                             <div className="row">
//                                 <div className="col-sm-4">
//                                     <img src="img/mod 4.jpg" id="p1" alt="img9" />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <img src="img/mod5.jpeg" id="p2" alt="img10" />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <img src="img/mod6.jpg" id="p3" alt="img11" />
//                                 </div>
//                             </div><br />
//                             <div className="row">
//                                 <div className="col-sm-4">
//                                     <img src="img/mod7.jpg" id="p1" alt="img12" />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <img src="img/mod8.jpg" id="p2" alt="img13" />
//                                 </div>
//                                 <div className="col-sm-4">
//                                     <img src="img/mod9.jpeg" id="p3" alt="img14" />
//                                 </div>
//                             </div><br />
//                         </div>
//                     </div>
//                 </div>
//             </div><h5 style={{"padding-left": "5%"}}>Contact Us @<a href="#1" className="text-info" style={{"cursor":"pointer"}} id="con">www.akshayavisionaries.com</a></h5><br />
//             <div  className="container-fluid footer" style={{"background-color": "white", "width":"100%", "height":"60px"}}>
//                 <div className="row" style={{"background-color": "white", "width":"100%", "height":"60px"}}>
//                     <div className="col-md-4"><br />
//                         <h6 className="text-secondary font-weight-bold">Designed by Akshaya Devi Maheswaran&REG;</h6>
//                     </div>
//                     <div className="col-md-8" id="a"><br />
                        
//                             <a name="contact" href="https://www.facebook.com"  target="_parent"><i className="fa fa-facebook"></i></a>
//                             <a name="contact" href="https://www.youtube.com/" target="_parent"><i className="fa fa-youtube"></i></a>
//                             <a name="contact" href="https://www.instagram.com/"  target="_parent"><i className="fa fa-instagram"></i></a>
//                             <a name="contact" href="https://www.pinterest.com/" target="_parent"><i className="fa fa-pinterest"></i></a>
                        
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default App;