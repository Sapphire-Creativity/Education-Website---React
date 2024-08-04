import Card from "../UIComponents/Card";
import SectionHead from "./SectionHead";

const CoursesSection = () => {
	return (
		<section className="container course-section">
			<SectionHead
				subTitle="OUR COURSES"
				title="Explore Our Popular Online Courses"
			/>
			<Card />
		</section>
	);
};

export default CoursesSection;
