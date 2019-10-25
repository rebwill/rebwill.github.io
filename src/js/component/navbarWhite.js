import React from "react";
import { Link } from "react-router-dom";

export class NavbarWhite extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-white">
				<a className="navbar-brand" href="#">
					<h1 className="navbar-h1">
						Rebecca
						<br />
						Willett
					</h1>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon ml-auto" />
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<button className="btn btn-light semi-trans-white-btn" href="/#">
								<a className="nav-link">Home</a>
							</button>
						</li>
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<button className="btn btn-light semi-trans-white-btn">
								<a className="nav-link" href="#about">
									About
								</a>
							</button>
						</li>
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<button className="btn btn-light semi-trans-white-btn">
								<a className="nav-link" href="#contact">
									Contact
								</a>
							</button>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

{
	/* <Link className="navbar-title" to="/">
					<h1 className="navbar-h1">
						Rebecca
						<br />
						Willett
					</h1>
		</Link>
    <div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Home</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/about">
						<button className="btn btn-primary">About</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/contact">
						<button className="btn btn-primary">Contact</button>
					</Link>
				</div> */
}
