import "./OtherHeader.css";
const OtherHeader = ({ title, image, children }) => {
	return (
		<header className="other-header ">
			<div className="other-header-container">
				<div className="header-container-bg">
					<img src={image} alt="Header Background" />
				</div>
				<div className="header-content">
					<h2>{title}</h2>
					<p>{children}</p>
				</div>
			</div>
		</header>
	);
};

export default OtherHeader;
