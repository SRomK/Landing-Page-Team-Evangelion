import React from "react";

const Navbar = () => {
	return (
		<>
		<Nav> 
			<NavLink>

			<h1>Team Evangelion</h1>
			</NavLink>
			<bars/>
			<NavMenu>
				<NavLink to="/GitHub" activeStyle>GitHub</NavLink>
				<NavLink to="/LinkedIn" activeStyle>LinkedIn</NavLink>
				<NavLink to="/Blog" activeStyle>Blog</NavLink>
				<NavLink to="/ContactUs" activeStyle>ContactUs</NavLink>

			</NavMenu>
			<NavBtn>
				<NavBtnLink to="/signin">
				Newsletter
				</NavBtnLink>
			</NavBtn>
		</Nav>
		</>
	);
};

export default Navbar;
