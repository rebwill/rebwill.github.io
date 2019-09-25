import React from "react";
import "../../styles/home.scss";
import { compile } from "path-to-regexp";
import rebeccaHeadshot from "../../img/rebeccaheadshot.jpg";

export class Contact extends React.Component {
	render() {
		return (
			<div className="container-fluid about-container">
				<div className="row about-row-1">
					<div className="col-md-4 d-flex">
						<img className="img-fluid rounded-circle rebeccaheadshot" src={rebeccaHeadshot} />
					</div>
					<div className="col-md-8 about-text right-column">
						<h1>Don&apos;t be shy. What can I help you with?</h1>
						<p className="contact-p">
							<br />
							You can reach me via email at <strong>willett.rebecca at gmail.com</strong>.<br />
							<br />
							Alternatively, you can also connect with me on{" "}
							<a href="https://www.linkedin.com/in/willettrebecca/">LinkedIn </a>
							or <a href="https://twitter.com/rebeccaAwillett">Twitter</a>.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
