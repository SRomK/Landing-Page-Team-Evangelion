import React from "react";
import "../../styles/Navbar.css";

const Navbar = () => {
	return (
		<>
			<div className="topNav">
				<img
					src="https://images6.fanpop.com/image/photos/38600000/-EVA-01-neon-genesis-evangelion-38625280-200-200.jpg"
					alt="Logo"
					className="logoImage"
				/>

				<h2 className="titleTeam">Team Evangelion</h2>

				<a href="#news">Services</a>
				<a href="#contact">Newsletter</a>
				<a href="#about">About</a>
			</div>
		</>
	);
};

export default Navbar;
