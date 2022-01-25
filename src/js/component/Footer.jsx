import React from "react";
//import * as PropTypes from "prop-types";
import "../../styles/Footer.css";

const FooterPage = () => {
	return (
		<>
			<div className="row myFooter">
				<div className="col-md-6">
					Siguenos en nuestras redes <br />
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
				<div className="col-md-6">
					All rights reserved{" "}
					<span>
						<i class="far fa-copyright"></i>
					</span>
					Team Evangelion. <br />
					Team Evangelion is commited on the full stack development
					achieving high standars and creative solutions.
				</div>
			</div>
		</>
	);
};
export default FooterPage;
