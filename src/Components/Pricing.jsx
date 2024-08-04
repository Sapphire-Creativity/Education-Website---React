import SectionHead from "./SectionHead";
import { pricingPlans } from "../data";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Pricing = () => {
	return (
		<section className="container ">
			<SectionHead subTitle="OUR PRICING" title="Pricing & Packages" />

			<div className="pricing-container">
				{pricingPlans.map(({ name, price, duration, features }) => {
					return (
						<div className="pricing-card">
							<span>{name}</span>
							<div className="price">
								<h3>{price}</h3>
								<span>{duration}</span>
							</div>
							<ul>
								{features.map((features, index) => (
									<li key={index}>
										<IoMdCheckmarkCircleOutline className="check-icon" />
										{features}
									</li>
								))}
							</ul>

							<button className="btn btn-icon">
								Get Started <FaPaperPlane className="btn-icon" />
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Pricing;
