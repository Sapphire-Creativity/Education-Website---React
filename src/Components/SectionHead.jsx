const SectionHead = ({ subTitle, title, className }) => {
	return (
		<div className={`section_head ${className}`}>
			<span>{subTitle}</span>
			<h2>{title}</h2>
		</div>
	);
};

export default SectionHead;
