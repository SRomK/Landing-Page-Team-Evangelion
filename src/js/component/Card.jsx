import React from "react";
import * as PropTypes from "prop-types";
import "../../styles/Card.css";

const Card = (props) => {
	return (
		<>
			<div className="col-md-6">
				<div className="card myCard">
					<div className="card-body text-center">
						<img
							className="img-fluid myImg"
							src={props.imgSrc}
							alt={props.imgAlt}
						/>
					</div>
				</div>
				<div className="card-footer myCard-Footer">
					<p>{props.texto}</p>
				</div>
			</div>
		</>
	);
};

Card.propTypes = {
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	texto: PropTypes.string,
};

export default Card;
