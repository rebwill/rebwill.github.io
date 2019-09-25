import React, { Component } from "react";

export const NewFooter = () => (
	<footer className="footer py-3">
		<div className="row">
			<div className="col-md-4">
				<div className="container-footer">
					<p className="footer-p">
						<strong>&copy; 2019 Rebecca Willett</strong>
					</p>
				</div>
			</div>
			<div className="col-md-3">
				<div className="container-footer">
					<p className="footer-p">
						<a href="https://twitter.com/rebeccaAwillett" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter-square footer-icon" />
						</a>
						<a href="https://www.linkedin.com/in/willettrebecca/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin footer-icon" />
						</a>
						<a href="mailto:willett.rebecca@gmail.com" target="_blank" rel="noopener noreferrer">
							<i className="fas fa-envelope-square footer-icon" />
						</a>
					</p>
				</div>
			</div>
			{/*<div className="col-md-1">
				<div className="container-footer">
					<p className="footer-p footer-icon">
						<i className="fab fa-linkedin" />
					</p>
				</div>
			</div>
			<div className="col-md-1">
				<div className="container-footer">
					<p className="footer-p footer-icon">
						<i className="fas fa-envelope-square" />
					</p>
				</div>
			</div> */}
		</div>
	</footer>
);

{
	/* <i className="fa fa-heart" /> by{" "}
				<a className="footer-link" href="https://www.linkedin.com/in/willettrebecca/">
					<strong>Rebecca Willett</strong>
				</a> */
}
