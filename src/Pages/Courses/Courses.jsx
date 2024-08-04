import Footer from "../../Components/Footer";
import Newsletter from "../../Components/Newsletter";
import CoursesSection from "../../Components/CoursesSection";
import OnlineCourses from "../../Components/OnlineCourses";

import CourseImage from "../../images/courses.jpg";
import Copyright from "../../Components/Copyright";
import Hero from "../../Components/Hero/Hero";
const Courses = () => {
	return (
		<>
			<Hero backgroundImage={CourseImage}>
				<h2>Courses</h2>
				<p>Explore our courses selected for your learning journey </p>
			</Hero>
			<CoursesSection />
			<OnlineCourses />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default Courses;
