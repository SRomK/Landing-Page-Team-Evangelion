import React from "react";
//import * as PropTypes from "prop-types";
import "../../styles/Footer.css";

const FooterPage = () => {
	return (
		<>
			<div className="row myFooter">
				<div className="col-md-6">
					Siguenos en nuestras redes sociales<br />
					<span className="footerSpan">
						<i class="fab fa-twitter-square"></i>
					</span>
					<span className="footerSpan grow">
						<i class="fab fa-youtube"></i>
					</span>
					<span className="footerSpan grow">
						<i class="fab fa-instagram"></i>
					</span>
					<span className="footerSpan grow">
						<i class="fab fa-linkedin"></i>
					</span>
					<span className="footerSpan">
						<i class="fab fa-github-square"></i>
					</span>
				</div>
				<div className="col-md-6 footerRight">
					All Rights Reserved
					<span>
						<i className="far fa-copyright"> </i>
					</span>
					Team Evangelion. <br />
					Team Evangelion aims to achieve high <br /> standars and
					creative solutions.
				</div>
			</div>
		</>
	);
};
export default FooterPage;
