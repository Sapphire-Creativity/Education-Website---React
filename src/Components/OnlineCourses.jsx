import SectionHead from "./SectionHead";
import card_one from "../../src/images/courses/online/o1.png";
import card_two from "../../src/images/courses/online/o2.png";
import card_three from "../../src/images/courses/online/o3.png";
import card_four from "../../src/images/courses/online/o4.png";
import card_five from "../../src/images/courses/online/o5.png";
import card_six from "../../src/images/courses/online/o6.png";
import card_seven from "../../src/images/courses/online/o7.png";
import card_eight from "../../src/images/courses/online/o8.png";
import { FaArrowRightLong } from "react-icons/fa6";
const OnlineCourses = () => {
	return (
		<section className="container online-courses">
			<SectionHead subTitle="COURSES" title="Browse Our Online Courses" />

			<div className="courses-container">
				<div className="online-card">
					<div className="card-icon">
						<img src={card_one} alt="" />
					</div>
					<h4>UI/UX Design Courses</h4>

					<span>25 Courses</span>
				</div>
				<div className="online-card">
					<div className="card-icon">
						<img src={card_two} alt="" />
					</div>
					<h4>Art & Design</h4>

					<span>35 Courses</span>
				</div>
				<div className="online-card">
					<div className="card-icon">
						<img src={card_three} alt="" />
					</div>
					<h4>Computer Science</h4>

					<span>30 Courses</span>
				</div>
				<div className="online-card">
					<div className="card-icon">
						<img src={card_four} alt="" />
					</div>
					<h4>History & Archeologic</h4>

					<span>30 Courses</span>
				</div>
				<div className="online-card">
					<div className="card-icon">
						<img src={card_five} alt="" />
					</div>
					<h4>Software Engineering</h4>

					<span>30 Courses</span>
				</div>
				<div className="online-card">
					<div className="card-icon">
						<img src={card_six} alt="" />
					</div>
					<h4>Information Software</h4>

					<span>30 Courses</span>
				</div>
				<div className="online-card">
					<div className="card-icon">
						<img src={card_seven} alt="" />
					</div>
					<h4>Health & Fitness</h4>

					<span>30 Courses</span>
				</div>
				<div className="online-card">
					<div className="card-icon">
						<img src={card_eight} alt="" />
					</div>
					<h4>Marketing</h4>

					<span>30 Courses</span>
				</div>
			</div>

			<button className="btn .btn-icon">
				Enroll Now <FaArrowRightLong className="btn-icon" />
			</button>
		</section>
	);
};

export default OnlineCourses;
