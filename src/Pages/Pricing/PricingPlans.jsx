import Footer from "../../Components/Footer";
import Copyright from "../../Components/Copyright";
import pricingImage from "../../images/pricing.jpg";
import Pricing from "../../Components/Pricing";
import Newsletter from "../../Components/Newsletter";
import CenterDiv from "../../Components/CenterDiv";
import Hero from "../../Components/Hero/Hero";

const PricingPlans = () => {
	return (
		<>
			<Hero backgroundImage={pricingImage}>
				<h2>Pricing</h2>
				<p>Choose the best plan for your learning experience </p>
			</Hero>

			<Pricing />
			<CenterDiv />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default PricingPlans;
