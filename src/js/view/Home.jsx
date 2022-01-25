import React from "react";
import FooterPage from "../component/Footer.jsx";
import ContactForm from "../component/Form.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<FooterPage />
			<ContactForm />
		</div>
	);
};

export default Home;
