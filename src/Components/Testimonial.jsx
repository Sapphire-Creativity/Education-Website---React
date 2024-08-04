import SectionHead from "./SectionHead";
import { FaQuoteLeft } from "react-icons/fa";
import { review } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: "30px",

		responsive: [
			{
				breakpoint: 1024, // For screens smaller than 1024px
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerPadding: "20px",
				},
			},
			{
				breakpoint: 768, // For screens smaller than 768px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "10px",
				},
			},
			{
				breakpoint: 480, // For screens smaller than 480px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "5px",
				},
			},
		],
	};


	return (
		<section className="container ">
			<SectionHead subTitle="TESTIMONIAL" title="Our Successful Students" />
			<div className="review-container">
				<Slider {...settings}>
					{review.map(({ name, course, testimonial, image }) => {
						return (
							<div className="review-card">
								<FaQuoteLeft className="quote-icon" />
								<p>{testimonial}</p>
								<div className="author-profile">
									<div className="image">
										<img src={image} alt="" />
									</div>
									<div className="info">
										<h3>{name}</h3>
										<span>{course}</span>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonial;
