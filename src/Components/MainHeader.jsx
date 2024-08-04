import { FaArrowRightLong } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

const MainHeader = () => {
	return (
		<header className="main_header">
			<div className="container main-header-container">
				<div className="home-text">
					<h3>Welcome to Academia</h3>
					<h1>
						Best Online Education <br />
						Expertise
					</h1>
					<p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>

					<div className="buttons">
						<button className="btn btn-one">
							GET STARTED NOW <FaArrowRightLong className="btn-icon" />
						</button>
						<button className="btn btn-two">
							VIEW COURSE <FaPaperPlane className="btn-icon" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
