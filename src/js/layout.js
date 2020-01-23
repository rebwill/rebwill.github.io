import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { About } from "./views/about";
import { Contact } from "./views/contact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { NewFooter } from "./component/newfooter";
import { NavbarWhite } from "./component/navbarWhite";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Navbar} />
							<Route exact path="/about" component={NavbarWhite} />
							{/* ^ Not currently in use because I have everything on the Home page */}
							<Route exact path="/contact" component={NavbarWhite} />
							{/* ^ Not currently in use because I have everything on the Home page */}
						</Switch>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<NewFooter />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
