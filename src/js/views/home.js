import React from "react";
import "../../styles/home.scss";
import { compile } from "path-to-regexp";
import { Link } from "react-router-dom";
import coralPreview from "../../img/coralguardians.png";
import toDoPreview from "../../img/todolist.png";
import meetupPreview from "../../img/fakemeetup.png";
import { navbar } from "../component/navbar";

export class Home extends React.Component {
	componentDidMount() {
		window.addEventListener("hashchange", this.scrollBuffer);
	}
	scrollBuffer = e => {
		window.scrollTo(window.scrollX, window.scrollY - 140);
	};

	render() {
		return (
			<div>
				{navbar}
				<div className="image-container">
					<div className="home-hero-image">
						<div className="home-hero-text">
							<h1>
								Hello! <i className="fas fa-hand-paper" />
							</h1>
							<h5>I&apos;m a Miami-based full stack web developer.</h5>
							<button className="btn see-work-btn">
								<a className="nav-link" href="#my-work">
									See my work
								</a>
							</button>
						</div>
					</div>
				</div>
				<div className="project-section">
					<div className="project-section-title" id="my-work">
						<h1>Recent Work</h1>
					</div>
					<div className="row">
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
									<Link href="#" className="btn see-work-btn" target="_blank" rel="noopener noreferrer">
										See more
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 d-flex">
							<div className="card">
								<img src={meetupPreview} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Meetup Clone</h5>
									<p className="card-text">
										A simple re-creation of Meetup.com, displaying meetup groups and associated
										events using HTML, CSS, Javascript, React, React Router and React Context API.
									</p>
									<Link to="" className="btn btn see-work-btn" target="_blank" rel="noopener noreferrer">
										See more
									</Link>
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
										React.
									</p>
									<Link href="https://rebwill.github.io/toDoApp-portfolio/" className="btn btn see-work-btn" target="_blank" rel="noopener noreferrer">
										See more
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

{
	/*<div className="lorem-ipsum">
					<h2>Escape is not his plan. I must face him, alone. </h2>
					<p>
						I have traced the Rebel spies to her. Now she is my only link to finding their secret base.
						Partially, but it also obeys your commands. The Force is strong with this one. I have you now.
						Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or
						wherever youre going. Im surprised you had the courage to take the responsibility yourself.
						Partially, but it also obeys your commands. She must have hidden the plans in the escape pod.
						Send a detachment down to retrieve them, and see to it personally, Commander. got a lot of
						spirit. I know, what do you think? Escape is not his plan. I must face him, alone. In my
						experience, there is no such thing as luck. A tremor in the Force. The last time I felt it was
						in the presence of my old master. Red Five standing by.
						<br /> I have traced the Rebel spies to her. Now she is my only link to finding their secret
						base. Partially, but it also obeys your commands. The Force is strong with this one. I have you
						now. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or
						wherever youre going. Im surprised you had the courage to take the responsibility yourself.
						Partially, but it also obeys your commands. She must have hidden the plans in the escape pod.
						Send a detachment down to retrieve them, and see to it personally, Commander. got a lot of
						spirit. I know, what do you think? Escape is not his plan. I must face him, alone. In my
						experience, there is no such thing as luck. A tremor in the Force. The last time I felt it was
						in the presence of my old master. Red Five standing by.
					</p>
				</div> */
}
