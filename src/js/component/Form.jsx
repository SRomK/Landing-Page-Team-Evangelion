import React from "react";
//import * as PropTypes from "prop-types";
import "../../styles/Form.css";

const ContactForm = () => {
	const handleClick = (e) => {
		e.preventDefault();
	};
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
								className="form-control"
								placeholder="How we'll address you"
							/>
							<label htmlFor="email" className="email">
								Your prefered email
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Email"
							/>
						</div>

						<div className="col-md-6">
							<label htmlFor="message" className="">
								Your message
							</label>
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
						<div className="text-center">
							<button
								onClick={handleClick}
								className="btn btn-dark form-control btnForm"
								type="button"
								role="submit">
								Send
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
