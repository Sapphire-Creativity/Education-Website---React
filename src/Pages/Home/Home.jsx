import AboutSection from "../../Components/AboutSection";
import CenterDiv from "../../Components/CenterDiv";
import Copyright from "../../Components/Copyright";
import CoursesSection from "../../Components/CoursesSection";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import Newsletter from "../../Components/Newsletter";
import OnlineCourses from "../../Components/OnlineCourses";
import Pricing from "../../Components/Pricing";
import Testimonial from "../../Components/Testimonial";
import "./Home.css";
const Home = () => {
	return (
		<div>
			<MainHeader />
			<AboutSection />
			<CenterDiv />
			<CoursesSection />
			<OnlineCourses />
			<Pricing />
			<Testimonial />

			<Newsletter />
			<Footer />
			<Copyright />
		</div>
	);
};

export default Home;
