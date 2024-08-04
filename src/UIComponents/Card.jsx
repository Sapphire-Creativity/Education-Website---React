import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import image_one from "../../src/images/courses/c1.png";
import image_two from "../../src/images/courses/c2.png";
import image_three from "../../src/images/courses/c3.png";
import image_four from "../../src/images/courses/c4.png";
const Card = () => {
	return (
		<div className="courses-card">
			<div className="course-card">
				<div className="course-card-icon">
					<img src={image_one} alt="" />
				</div>
				<div className="course-details">
					<h3>Introducing to Software Engineering</h3>
					<div className="ratings">
						<IoIosStar />
						<IoIosStar />
						<IoIosStar />
						<IoIosStar />
						<IoIosStarHalf />
						<span>5.0</span>
					</div>

					<div className="author">
						<div className="profile-icon">
							<CgProfile />
						</div>
						<span>by Ram Gurung</span>
					</div>
					<span>50 lectures (190 hrs)</span>

					<h4>$100 All Course / $15 per month</h4>
				</div>
				<button className="btn .btn-icon">
					Enroll Now <FaArrowRightLong className="btn-icon" />
				</button>
			</div>
			<div className="course-card">
				<div className="course-card-icon">
					<img src={image_two} alt="" />
				</div>
				<div className="course-details">
					<h3>Enhancing Adobe Photoshop CC 2020 Skills</h3>
					<div className="ratings">
						<IoIosStar />
						<IoIosStar />
						<IoIosStar />
						<IoIosStar />
						<IoIosStarHalf />
						<span>5.0</span>
					</div>

					<div className="author">
						<div className="profile-icon">
							<CgProfile />
						</div>
						<span>by Ram Gurung</span>
					</div>
					<span>30 lectures (125 hrs)</span>

					<h4>$200 All Course / $25 per month</h4>
				</div>
				<button className="btn .btn-icon">
					Enroll Now <FaArrowRightLong className="btn-icon" />
				</button>
			</div>
			<div className="course-card">
				<div className="course-card-icon">
					<img src={image_three} alt="" />
				</div>
				<div className="course-details">
					<h3>HTML, CSS, and Javascript for Web Developers</h3>
					<div className="ratings">
						<IoIosStar />
						<IoIosStar />
						<IoIosStar />
						<IoIosStar />
						<IoIosStarHalf />
						<span>5.0</span>
					</div>

					<div className="author">
						<div className="profile-icon">
							<CgProfile />
						</div>
						<span>by Saroj Nepal</span>
					</div>
					<span>30 lectures (125 hrs)</span>

					<h4>$50 All Course / $5 per month</h4>
				</div>
				<button className="btn btn-one">
					Enroll Now <FaArrowRightLong className="btn-icon" />
				</button>
			</div>
		</div>
	);
};

export default Card;
