import React from "react";
import "./Hero.css";

const Hero = ({ backgroundImage, children }) => {
	return (
		<div
			className="hero"
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="hero-overlay">{children}</div>
		</div>
	);
};

export default Hero;
