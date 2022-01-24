//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/Index.css";

//import your own components
import Home from "/workspace/Landing-Page-Team-Evangelion/src/js/view/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
