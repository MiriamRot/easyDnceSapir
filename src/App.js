// import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
// import { Login } from "./login";
import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Menu from "./components/Menu";
import VideoPool from "./components/videoLibrary";
import { Router } from "./components/Router";
import VideoPlayer from "./components/newPlyerFromGpt";
import { Login } from "./components/SignUp";
// import UserHistory from "./components/UserHistory";
import Logo from "././assets/easyDance.png"
import UserHistory from "./components/UserHistory";
import ResultsModal from "./components/resultsModal";
import WebcamVideo from "./components/webcanera";


//import { Login } from './Login';

export default function App() {



  // useEffect(() => {
  //   fetch(
  //     "http://localhost:8080/"
  //   ).then((response) => response.text())
  //   .then((data) => console.log(data));


  // }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:8080/", {
  //       method: 'GET',
  //       mode: 'no-cors',
  //     })
  //       .then(response => response)
  //       .then(data => console.log("1111111111111",data))
  //       // .catch(error => console.error(error));


  // }, []);


  //   useEffect(() => {
  //     // Using fetch to fetch the api from 
  //     // flask server it will be redirected to proxy

  //     fetch("http://localhost:8080/",{
  //       //Adding mode: no-cors may work
  //       mode: "no-cors",
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //         "Access-Control-Allow-Credentials" : true,
  //     },

  //     }).then((res) =>
  //         res.json()
  //        .then((data) => console.log(data))
  //     );
  // }, []);
  return (
    <>

      <div className="App">
        <img src={Logo} alt="logo"></img>
        {/* <Menu/> */}
        {/* <VideoPool/> */}
        {/* <Router/> */}
        {/* <p>ccccccccccc</p> */}
        {/* { <Login /> } */}
        {/* { <SignIn /> } */}
        {/* <History/> */}
        <VideoPlayer />

        {/* <WebcamVideo/> */}

        {/* <UserHistory></UserHistory> */}
        {/* <ResultsModal/> */}

      </div></>

  );
}
// export default App;
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
