import React from "react";
import "../../styles/home.scss";
import { compile } from "path-to-regexp";
import { Link } from "react-router-dom";

// Components
import { navbar } from "../component/navbar";

// Screenshot images
import coralPreview from "../../img/coralguardians.png";
import toDoPreview from "../../img/todolist.png";
import meetupPreview from "../../img/fakemeetup.png";
import veganbrunchPreview from "../../img/veganbrunchPreview.png";
import meetupPreviewNEW from "../../img/meetupPreviewNEW.png";
import whatstheweatherPreview from "../../img/whatstheweatherPreview.png";

// Other images
import rebeccaHeadshot from "../../img/rebeccaheadshot.jpg";
import rebeccaScuba from "../../img/rebeccascuba.jpg";

export class Home extends React.Component {
	componentDidMount() {
		window.addEventListener("hashchange", this.scrollBuffer);
	}

	findOffsetPosition = elmnt => {
		var headerOffset = 125;
		var element = document.getElementById(elmnt);
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition - headerOffset;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	};

	scrollBuffer = e => {
		if (location.hash === "#projects") {
			this.findOffsetPosition("projects");
		}

		if (location.hash === "#about") {
			this.findOffsetPosition("about");
		}
		if (location.hash === "#contact") {
			this.findOffsetPosition("contact");
		}
	};

	render() {
		return (
			<div className="return-div">
				{navbar}
				<div className="image-container">
					<div className="home-hero-image">
						<div className="home-hero-text">
							<h1>
								Hello! <i className="fas fa-hand-paper" />
							</h1>
							<h5>I&apos;m a Miami-based full stack web developer.</h5>
							<button className="btn see-work-btn">
								<a className="nav-link" href="#projects">
									See my work
								</a>
							</button>
						</div>
					</div>
				</div>
				<div className="project-section" id="project-section">
					<div className="project-section-title" id="projects">
						<h1>Recent Work</h1>
					</div>

					<div className="row">
						<div className="col-lg-4 d-flex">
							<div className="card">
								<img src={whatstheweatherPreview} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">What&apos;s the Weather</h5>
									<p className="card-text">
										A simple React app that displays the current weather in the requested location.
										Built with React, WeatherAPI.com&apos;s RESTful API, and React Router. Deployed
										on Heroku.
									</p>
									<a
										href="https://whatstheweatherin.herokuapp.com/"
										className="btn btn see-work-btn stretched-link"
										target="_blank"
										rel="noopener noreferrer">
										See more
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 d-flex">
							<div className="card">
								<img src={veganbrunchPreview} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Vegan Brunch Society</h5>
									<p className="card-text">
										A collection of recipes for our monthly gathering of friends to cook a decadent
										vegan brunch together. Built with Node.js, HTML, and CSS. Deployed on Heroku.
									</p>
									<a
										href="https://vegan-brunch.herokuapp.com/"
										className="btn btn see-work-btn stretched-link"
										target="_blank"
										rel="noopener noreferrer">
										See more
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 d-flex">
							<div className="card">
								<img src={meetupPreviewNEW} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Meetup Clone</h5>
									<p className="card-text">
										A simple re-creation of Meetup.com, displaying meetup groups and associated
										events using HTML, CSS, Javascript, React, React Router and React Context API.
										Deployed on Netlify.
									</p>
									<a
										href="https://meetupclone.netlify.com"
										className="btn btn see-work-btn stretched-link"
										target="_blank"
										rel="noopener noreferrer">
										See more
									</a>
									{/* <h5 className="coming-soon">Coming soon!</h5> */}
								</div>
							</div>
						</div>

						<div className="col-lg-4 d-flex">
							<div className="card">
								<img src={toDoPreview} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">To-Do App</h5>
									<p className="card-text">
										Add, delete, or complete tasks on your to-do list. Unfortunately does not
										include any fixes for procrastination. Built with HTML, CSS, Javascript, and
										React. Deployed via GitHub Pages.
									</p>
									<a
										href="https://rebwill.github.io/toDoApp-portfolio/"
										className="btn btn see-work-btn stretched-link"
										target="_blank"
										rel="noopener noreferrer">
										See more
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 d-flex">
							<div className="card">
								<img src={coralPreview} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Coral Guardians</h5>
									<p className="card-text">
										Allows ocean lovers to discover and donate to organizations working in coral
										restoration all over the world. Built with HTML, CSS, Javascript, React, React
										Router, React Context API, and Google Maps API.
									</p>
									{/* <Link to="#" className="btn see-work-btn" target="_blank" rel="noopener noreferrer">
										See more
									</Link> */}
									<h5 className="coming-soon stretched-link">Coming soon!</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid about-container" id="about">
					<div className="row about-row-1">
						<div className="col-md-4 d-flex">
							<img className="img-fluid rounded-circle rebeccaheadshot" src={rebeccaHeadshot} />
						</div>
						<div className="col-md-8 about-text right-column right-column-mobile">
							<h1>About Me</h1>
							<p>
								My professional career has covered a lot of ground throughout the worlds of tech,
								startups, and social entrepreneurship in the US and Latin America. After leading
								BUILDING.co, Miami&apos;s premier coworking space for tech companies, for two years as
								the General Manager, I decided I was ready for yet another new challenge — so I began my
								coding journey in 2019 with 4Geeks Academy&apos;s full stack web development bootcamp.
								<br />
								<br />
								I&apos;m now seeking a web developer role in the Miami area. I&apos;m proficient in
								HTML, CSS, Javascript, and React, and have basic knowledge of Node.js and RESTful APIs.
								I am excited to deepen my expertise in these technologies and continue adding new tools
								to my belt.
								<br />
								<br />I hold a BA in International Affairs and Anthropology from Northeastern University
								in Boston and an MBA from the Universidad de Palermo in Buenos Aires, Argentina.
								<br />
								<br />
								I&apos;m an active member of the Miami startup and tech community. I&apos;m an organizer
								of our local{" "}
								<a href="https://www.1millioncups.com/miami" target="_blank" rel="noopener noreferrer">
									1 Million Cups
								</a>{" "}
								chapter; I teach occasional workshops at{" "}
								<a href="https://theideacenter.co">the Idea Center</a> of Miami Dade College on rapid
								prototyping for business model validation; and I&apos;m a member of the Global Shapers{" "}
								<a
									href="https://www.instagram.com/globalshapersmiami/"
									target="_blank"
									rel="noopener noreferrer">
									Miami hub.
								</a>{" "}
								I&apos;m passionate about promoting diversity and inclusion in our community, as well as
								environmental causes. I&apos;m also an avid scuba diver and love exploring South
								Florida&apos;s marine ecosystems, including volunteering as a diver with the Coral
								Restoration Foundation in Key Largo!
							</p>
						</div>
					</div>

					<div className="row about-row-2">
						<div className="col-md-4 d-flex" />
						<div className="col-md-8 d-flex text-center badge-container right-column">
							<span>
								<h1>Knowledge Areas</h1>
							</span>
						</div>
					</div>
					<div className="row about-row-3">
						<div className="col-md-4 d-flex" />
						<div className="col-md-8  badge-container right-column">
							<p>
								<strong>Proficient:</strong>
							</p>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>Bootstrap</li>
								<li>Javascript</li>
								<li>React</li>
								<li>Node.js</li>
								<li>REST APIs</li>
							</ul>

							<p>
								<strong>Currently Studying:</strong>
							</p>
							<ul>
								<li>Express</li>
								<li>MongoDB</li>
							</ul>
						</div>
					</div>
					<div className="row about-row-6">
						<div className="col-md-4 d-flex" />
						<div className="col-md-8 d-flex text-center right-column">
							<h1>Education</h1>
						</div>
					</div>
					<div className="row about-row-7">
						<div className="col-md-4 d-flex" />
						<div className="col-md-8 right-column">
							<p>
								<strong>Full Stack Web Development Bootcamp</strong>
								<br />
								4Geeks Academy
								<br />
								Miami, FL
								<br />
							</p>
							<br />
							<p>
								<strong>MBA</strong>
								<br />
								Universidad de Palermo
								<br />
								Buenos Aires, Argentina
								<br />
							</p>
							<br />
							<p>
								<strong>BA in International Affairs and Anthropology</strong>
								<br />
								Northeastern University
								<br />
								Boston, MA
								<br />
							</p>
							<br />
						</div>
					</div>
				</div>
				<div className="container-fluid contact-container" id="contact">
					<div className="row about-row-1">
						<div className="col-md-4 d-flex">
							<img className="img-fluid rounded-circle rebeccaheadshot" src={rebeccaScuba} />
						</div>
						<div className="col-md-8 about-text right-column">
							<h1>Don&apos;t be shy. What can I help you with?</h1>
							<p className="contact-p">
								<br />
								You can reach me via email at <strong>willett.rebecca at gmail.com</strong>.<br />
								<br />
								Alternatively, you can also connect with me on{" "}
								<a
									href="https://www.linkedin.com/in/willettrebecca/"
									target="_blank"
									rel="noopener noreferrer">
									LinkedIn
								</a>
								,{" "}
								<a href="https://twitter.com/rebeccaAwillett" target="_blank" rel="noopener noreferrer">
									Twitter
								</a>
								, or{" "}
								<a href="https://github.com/rebwill" target="_blank" rel="noopener noreferrer">
									GitHub
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
