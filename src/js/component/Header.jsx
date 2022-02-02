import React from "react";
import "../../styles/Header.css";

let imgs = [
	"https://i0.wp.com/hipertextual.com/wp-content/uploads/2014/05/Evangelion-02.jpg?fit=1200%2C675&ssl=1",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wYksyoVFruvtyeh_Jg63IaSjhFb0W5pV9A&usqp=CAU",
];

const Header = () => {
	return (
		<>
			<div className="headerBackground">
				<div className="row rowUno">
					<div className="col-md-6 textoClassUno">
						<section className="textoHeaderUno">
							<h3 className="tituloFront">
								Front end Development (Client side)
							</h3>
							<p className="textoFront">
								Everything on a web page from the logo, to the
								search bar, buttons, overall layout and how the
								user interacts with the page was created by a
								front end developer. Front end developers are in
								charge of the look and feel of the website.
								Front end developers also have to make sure the
								website looks good on all devices (phones,
								tablets, and computer screens). This is called
								Responsive Web Design.
							</p>
						</section>
					</div>
					<div className="col-md-6 mt-3 imgContainerPilotos">
						<img
							className="imgPilotos"
							src={imgs[0]}
							alt="pilotos evangelion"
						/>
					</div>
				</div>
				<div className="row mt-5 rowDos">
					<div className="col-md-6 imgContainerNerv">
						<img
							className="imgNerv"
							src={imgs[1]}
							alt="pilotos evangelion"
						/>
					</div>
					<div className="col-md-6 mt-3 textoClassDos">
						<section className="textoHeaderDos">
							<h3 className="tituloBack">
								Back end Development (Server side)
							</h3>
							<p className="textoBack">
								Back end development refers to the part of the
								application that the user does not see. Back end
								developers focus on the logic of the site,
								creating servers, and working with databases and
								API's (Application Programming Interfaces). For
								example, the content and layout for a form would
								be created on the client side, but when the
								users submits their information it gets
								processed on the server side (back end).
							</p>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
