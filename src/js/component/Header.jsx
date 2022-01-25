import React from "react";
import "../../styles/Header.css";

let imgs = [
	"https://i0.wp.com/hipertextual.com/wp-content/uploads/2014/05/Evangelion-02.jpg?fit=1200%2C675&ssl=1",
];

const Header = () => {
	return (
		<>
			<div className="headerBackground">
				<div className="row">
					<div className="col-4-md textoClass">
						<h2 className="textoHeader">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Soluta autem fugiat asperiores quibusdam,
							repudiandae distinctio consequuntur cumque eius
							officia temporibus corrupti reiciendis maiores,
							porro incidunt hic ab quia neque fugit? Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
							Numquam, reprehenderit est temporibus a,
							consequuntur error, facilis repudiandae quia quos
							consectetur soluta quidem accusamus distinctio
							cumque! Odio quae nemo pariatur repellat!
						</h2>
					</div>
					<div className="col-4-md"></div>
					<div className="col-4-md ">
						<img
							className="imgPilotos"
							src={imgs[0]}
							alt="pilotos evangelion"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
