import React from "react";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isTop: true,
    navCSS: "navbar-white"
  };

  // componentDidMount() {
  // 	window.addEventListener("scroll", this.measureScroll);
  // }

  // measureScroll = e => {
  // 	var pageOffset = window.scrollY;

  // Desktop
  // if (window.matchMedia("(min-width: 769px)").matches) {
  // 	if (pageOffset <= 620) {
  // 		this.setState({
  // 			isTop: true
  // 		});
  // 	}
  // 	if (pageOffset > 620) {
  // 		this.setState({
  // 			isTop: false
  // 		});
  // 	}
  // 	// var navTog = this.state.isTop;

  // 	// set CSS
  // 	if (this.state.isTop == true) {
  // 		this.setState({
  // 			navCSS: "navbar-transparent"
  // 		});
  // 	}
  // 	if (this.state.isTop == false) {
  // 		this.setState({
  // 			navCSS: "navbar-white"
  // 		});
  // 	}
  // }

  // Mobile
  // if (window.matchMedia("(max-width: 768px)").matches) {
  // 	this.setState({
  // 		isTop: false,
  // 		navCSS: "navbar-white"
  // 	});
  // }

  // LG+ For screens 992px and up
  // if (window.matchMedia("(min-width: 992px)").matches) {
  // 	if (pageOffset <= 620) {
  // 		this.setState({
  // 			isTop: true
  // 		});
  // 	}
  // 	if (pageOffset > 620) {
  // 		this.setState({
  // 			isTop: false
  // 		});
  // 	}
  // 	var navTog = this.state.isTop;
  // 	if (this.state.isTop == true) {
  // 		this.setState({
  // 			navCSS: "navbar-transparent"
  // 		});
  // 	}
  // 	if (this.state.isTop == false) {
  // 		this.setState({
  // 			navCSS: "navbar-white"
  // 		});
  // 	}
  // }
  // // MD - for screens btwn 768-991px
  // else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
  // 	if (pageOffset <= 1000) {
  // 		this.setState({
  // 			isTop: true
  // 		});
  // 	}
  // 	if (pageOffset > 1000) {
  // 		this.setState({
  // 			isTop: false
  // 		});
  // 	}
  // 	var navTog = this.state.isTop;
  // 	if (this.state.isTop == true) {
  // 		this.setState({
  // 			navCSS: "navbar-transparent"
  // 		});
  // 	}
  // 	if (this.state.isTop == false) {
  // 		this.setState({
  // 			navCSS: "navbar-white"
  // 		});
  // 	}
  // }

  render() {
    return (
      <nav
        className={
          "navbar navbar-expand-lg navbar-light fixed-top" +
          " " +
          this.state.navCSS
        }
        id="navbar-sm"
      >
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
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mr-auto" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <button className="btn btn-light semi-trans-white-btn">
                <a className="nav-link" href="/#">
                  Home
                </a>
              </button>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <button className="btn btn-light semi-trans-white-btn">
                <a className="nav-link" href="#about">
                  About
                </a>
              </button>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
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
