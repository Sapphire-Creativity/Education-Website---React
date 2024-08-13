import React from "react";
import TeamImage from "../../images/team.jpg";
import SectionHead from "../../Components/SectionHead";
import Footer from "../../Components/Footer";
import Copyright from "../../Components/Copyright";
import Newsletter from "../../Components/Newsletter";

import CenterDiv from "../../Components/CenterDiv";
import { instructors } from "../../data";
import "./Team.css";
import Hero from "../../Components/Hero/Hero";

const Team = () => {
	return (
		<>
			<Hero backgroundImage={TeamImage}>
				<h2>Pricing</h2>
				<p>Meet our team of dedicated professionals.</p>
			</Hero>

			<section className="container">
				<SectionHead subTitle="Our Team" title="Meet Our Expert Instructors" />
			</section>

			<section className="container">
				<div className="team-container">
					{instructors.map(({ id, name, title, instructorImage }) => {
						return (
							<div className="team-card" key={id}>
								<div className="team-image">
									<div className="team-socials">
										
									</div>
									<img src={instructorImage} alt="" />
									<div className="team-details">
										<h3>{name}</h3>
										<p>{title}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<CenterDiv />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default Team;
