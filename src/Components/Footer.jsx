import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
	return (
		<section className="container">
			<div className="footer-container">
				<div className="section-one">
					<a href="">ACADEMIA </a>
					<h4>ONLINE EDUCATION & LEARNING</h4>

					<p>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia.
					</p>

					<div className="socials-icon">
						<FaFacebookF className="social" />
						<RiInstagramFill className="social" />
						<FaXTwitter className="social" />
						<FaPinterestP className="social" />
					</div>
				</div>
				<div className="setion-two">
					<h3>Explore</h3>
					<div className="link-section">
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">About Us</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Services</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Courses</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Blog</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Contact Us</a>
						</li>
					</div>
				</div>
				<div className="setion-three">
					<h3>Quick Links</h3>
					<div className="link-section">
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Pricing</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Terms & Conditions</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Privacy</a>
						</li>
						<li>
							<IoIosArrowRoundForward className="link-icon" />
							<a href="">Feedback</a>
						</li>
					</div>
				</div>
				<div className="setion-four">
					<h3>Have Questions?</h3>
					<div className="inner-section">
						<FaMapLocationDot className="footer-icon" />
						<p>203 Fake St. Mountain View, San Francisco, California, USA</p>
					</div>
					<div className="inner-section">
						<IoMdCall className="footer-icon" />
						<p>+2 392 3929 210</p>
					</div>
					<div className="inner-section">
						<MdEmail className="footer-icon" />
						<p>info@academia.com</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
