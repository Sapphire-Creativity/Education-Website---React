import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";

const CenterDiv = () => {
	return (
		<div className="center-div">
			<div className="stories">
				<div className="stories-image">
					<PiStudentFill />
				</div>
				<div className="stories-text">
					<h2>3,000</h2>
					<span> SUCCESS STORIES</span>
				</div>
			</div>
			<div className="stories">
				<div className="stories-image">
					<FaChalkboardTeacher />
				</div>
				<div className="stories-text">
					<h2>320</h2>
					<span> TRUSTED TUTORS</span>
				</div>
			</div>
			<div className="stories">
				<div className="stories-image">
					<AiOutlineSchedule />
				</div>
				<div className="stories-text">
					<h2>1,000</h2>
					<span>SCHEDULES</span>
				</div>
			</div>
			<div className="stories">
				<div className="stories-image">
					<IoBookOutline />
				</div>
				<div className="stories-text">
					<h2>587</h2>
					<span>COURSES</span>
				</div>
			</div>
		</div>
	);
};

export default CenterDiv;
