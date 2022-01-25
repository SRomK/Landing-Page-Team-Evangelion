import React from "react";
//import * as PropTypes from "prop-types";
import "../../styles/Form.css";

const ContactForm = () => {
	return (
		<>
			<div className="form-control">
				<form action="submit">
					<div className="row">
						<div className="col-md-6">
							<label htmlFor="fullName">Full Name</label>
							<input
								type="text"
								id="fullName"
								className="form-control myInput"
								placeholder="How we'll address you"
							/>
							<label htmlFor="email">Email</label>
							<input
								type="text"
								className="form-control"
								placeholder="Email"
							/>
						</div>

						<div className="col-md-6">
							<label htmlFor="message">Your message</label>
							<textarea
								className="form-control"
								name="message"
								id="message"
								cols="60"
								rows="5"
								placeholder="Let us know your needs"></textarea>
						</div>
					</div>
					<div className="row">
						<button
							className="btn btn-light"
							type="button"
							role="submit">
							submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
