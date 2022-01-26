import React from "react";
import FooterPage from "../component/Footer.jsx";
import Navbar from "/workspace/react-hello/src/js/component/Navbar.jsx";
import Header from "../js/component/Header.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<FooterPage />
		</>
	);
};

export default Home;
