import { FaArrowRightLong } from "react-icons/fa6";
import OtherHeader from "../../Components/OtherHeader/OtherHeader";
import OnlineImage from "../../images/online.jpg";
import Testimonial from "../../Components/Testimonial";
import HeaderImage from "../../images/back.webp";
import SectionHead from "../../Components/SectionHead";
import AboutSection from "../../Components/AboutSection";
import Footer from "../../Components/Footer";
import Newsletter from "../../Components/Newsletter";
import CenterDiv from "../../Components/CenterDiv";
import Copyright from "../../Components/Copyright";
import "./About.css";
import Hero from "../../Components/Hero/Hero";

const About = () => {
	return (
		<>
			<Hero backgroundImage={HeaderImage}>
				<h2>About Us</h2>
				<p>
					Transforming education with accessible, innovative courses. Join our
					global community of learners and unlock your potential.
				</p>
			</Hero>
			<section>
				<SectionHead subTitle="About us" title="Global community of learners" />

				<div className="container about-us-content">
					<div className="about-content-left">
						<h3>
							Empowering Your <br />
							Journey to Knowledge
						</h3>
						<p>
							Welcome to Your Online Learning Website Name, your go-to platform
							for unlocking knowledge and skills from the comfort of your home.
							Our mission is to provide accessible, high-quality education to
							learners of all ages and backgrounds.
						</p>
						<p>
							At Your Online Learning Website Name, we believe that learning
							should be a lifelong journey. Our diverse range of courses, taught
							by industry experts, cover everything from tech and business to
							arts and personal development. Whether you're looking to advance
							your career, pick up a new hobby, or simply explore new interests,
							we have something for you.
						</p>
						<p>
							Join our community of passionate learners and start your
							educational journey today. With our user-friendly platform,
							engaging content, and supportive community, the possibilities are
							endless.
						</p>
					</div>
					<div className="about-content-image">
						<img src={OnlineImage} alt="" />
					</div>
				</div>
				<AboutSection />
			</section>

			<CenterDiv />
			<Testimonial />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default About;
