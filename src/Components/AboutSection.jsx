import about_image from "../../src/images/about.webp";
import { GiOpenBook } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";

const AboutSection = () => {
	return (
		<section className="container about-container">
			<div className="about-left">
				<img src={about_image} alt="" />
			</div>
			<div className="about-right">
				<h3>LEARN ANYTHING</h3>
				<h2>Benefits About Online Learning Expertise</h2>

				<div className="card-items">
					<div className="card card-one">
						<h4>Online Courses</h4>

						<div className="card-details">
							<div className="card-image">
								<GiOpenBook />
							</div>

							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
						</div>
					</div>

					<div className="card card-one">
						<h4>Earn Certificates</h4>

						<div className="card-details">
							<div className="card-image">
								<GrCertificate />
							</div>

							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
						</div>
					</div>

					<div className="card card-one">
						<h4>Learn With Experts</h4>
						<div className="card-details">
							<div className="card-image">
								<GrUserExpert />
							</div>

							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
