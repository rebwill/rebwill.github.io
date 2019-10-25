import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		isTop: true,
		navCSS: "navbar-transparent"
	};

	componentDidMount() {
		window.addEventListener("scroll", this.measureScroll);
	}

	measureScroll = e => {
		var pageOffset = window.scrollY;
		if (pageOffset <= 600) {
			this.setState({
				isTop: true
			});
		}
		if (pageOffset > 600) {
			this.setState({
				isTop: false
			});
		}
		var navTog = this.state.isTop;
		if (this.state.isTop == true) {
			this.setState({
				navCSS: "navbar-transparent"
			});
		}
		if (this.state.isTop == false) {
			this.setState({
				navCSS: "navbar-white"
			});
		}
	};

	render() {
		return (
			<nav className={"navbar navbar-expand-lg navbar-light fixed-top" + " " + this.state.navCSS} id="navbar-sm">
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
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon ml-auto" />
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
							<button className="btn btn-light semi-trans-white-btn">
								<a className="nav-link" href="/#">
									Home
								</a>
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
