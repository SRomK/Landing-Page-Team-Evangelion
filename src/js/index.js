//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/Index.css";
import "../styles/Navbar.css";

//import your own components
import Home from "/workspace/react-hello/src/view/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
