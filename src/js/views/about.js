import React from "react";
import "../../styles/index.scss";
import { compile } from "path-to-regexp";
import rebeccaHeadshot from "../../img/rebeccaheadshot.jpg";

export class About extends React.Component {
	render() {
		return (
			<div>
				<div className="about-box">
					<h1>About Me</h1>
					<p>
						{" "}
						My professional career has covered a lot of ground throughout the worlds of tech, startups, and
						social entrepreneurship in the US and Latin America. This year, I decided I was ready for yet
						another new challenge (and wanted some of those magical tech powers for myself) — so I began my
						coding journey with 4Geeks Academy&apos;s full stack web development bootcamp.
						<br />
						<br />
						I&apos;m now seeking a web developer role in the Miami area. I&apos;m proficient in HTML, CSS,
						Bootstrap, Javascript, React, and PHP, and am excited to deepen my expertise in these
						technologies and continue adding new tools to my belt.
						<br />
						<br />
						Previously, among other adventures, I received my MBA from the Universidad de Palermo in Buenos
						Aires, Argentina, and most recently led BUILDING.co, Miami&apos;s premier coworking space for
						tech companies, as the General Manager.
						<br />
						<br />
						I&apos;m also passionate about: environment and sustainability; teaching lean startup
						methodologies; and diversity and inclusion in tech and in our city. Apart from that, I&apos;m an
						avid scuba diver and love exploring South Florida&apos;s marine ecosystems! I also volunteer as
						a diver with the Coral Restoration Foundation in Key Largo.
					</p>
				</div>
			</div>
			// <div className="container-fluid about-container">
			// 	<div className="row about-row-1">
			// 		<div className="col-md-4 d-flex">
			// 			<img className="img-fluid rounded-circle rebeccaheadshot" src={rebeccaHeadshot} />
			// 		</div>
			// 		<div className="col-md-8 about-text right-column">
			// 			<h1>About Me</h1>
			// 			<p>
			// My professional career has covered a lot of ground throughout the worlds of tech, startups,
			// and social entrepreneurship in the US and Latin America. This year, I decided I was ready
			// for yet another new challenge (and wanted some of those magical tech powers for myself) — so
			// I began my coding journey with 4Geeks Academy&apos;s full stack web development bootcamp.
			// <br />
			// <br />
			// I&apos;m now seeking a web developer role in the Miami area. I&apos;m proficient in HTML,
			// CSS, Bootstrap, Javascript, React, and PHP, and am excited to deepen my expertise in these
			// technologies and continue adding new tools to my belt.
			// <br />
			// <br />
			// Previously, among other adventures, I received my MBA from the Universidad de Palermo in
			// Buenos Aires, Argentina, and most recently led BUILDING.co, Miami&apos;s premier coworking
			// space for tech companies, as the General Manager.
			// <br />
			// <br />
			// I&apos;m also passionate about: environment and sustainability; teaching lean startup
			// methodologies; and diversity and inclusion in tech and in our city. Apart from that,
			// I&apos;m an avid scuba diver and love exploring South Florida&apos;s marine ecosystems! I
			// also volunteer as a diver with the Coral Restoration Foundation in Key Largo.
			// 			</p>
			// 		</div>
			// 	</div>

			// 	<div className="row about-row-2">
			// 		<div className="col-md-4 d-flex" />
			// 		<div className="col-md-8 d-flex text-center badge-container right-column">
			// 			<span>
			// 				<h1>Skills</h1>
			// 			</span>
			// 		</div>
			// 	</div>
			// 	<div className="row about-row-3">
			// 		<div className="col-md-4 d-flex" />
			// 		<div className="col-md-8 d-flex text-center badge-container right-column">
			// 			<span className="badge badge-pill badge-dark">HTML</span>
			// 			<span className="badge badge-pill badge-dark">CSS</span>
			// 			<span className="badge badge-pill badge-dark">Bootstrap</span>
			// 			<span className="badge badge-pill badge-dark">Javascript</span>
			// 			<span className="badge badge-pill badge-dark">React</span>
			// 			<span className="badge badge-pill badge-dark">PHP</span>
			// 		</div>
			// 	</div>
			// 	<div className="row about-row-4">
			// 		<div className="col-md-4 d-flex" />
			// 		<div className="col-md-8 d-flex text-center right-column">
			// 			<h1>Education</h1>
			// 		</div>
			// 	</div>
			// 	<div className="row about-row-5">
			// 		<div className="col-md-4 d-flex" />
			// 		<div className="col-md-8 right-column">
			// 			<p>
			// 				<strong>Full Stack Web Development Bootcamp</strong>
			// 				<br />
			// 				4Geeks Academy
			// 				<br />
			// 				Miami, FL
			// 				<br />
			// 			</p>
			// 			<br />
			// 			<p>
			// 				<strong>MBA</strong>
			// 				<br />
			// 				Universidad de Palermo
			// 				<br />
			// 				Buenos Aires, Argentina
			// 				<br />
			// 			</p>
			// 			<br />
			// 			<p>
			// 				<strong>BA in International Affairs and Anthropology</strong>
			// 				<br />
			// 				Northeastern University
			// 				<br />
			// 				Boston, MA
			// 				<br />
			// 			</p>
			// 			<br />
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}
