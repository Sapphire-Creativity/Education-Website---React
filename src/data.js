export const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Courses",
		path: "/courses",
	},
	{
		name: "Pricing",
		path: "/pricing",
	},
	{
		name: "Team",
		path: "/team",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

export const pricingPlans = [
	{
		id: 1,
		name: "Basic",
		price: "$19.99",
		duration: "/month",
		features: [
			"Access to all basic courses",
			"Community support",
			"5GB of cloud storage",
			"Certificate of completion",
		],
	},
	{
		id: 2,
		name: "Standard",
		price: "$49.99",
		duration: "/month",
		features: [
			"Access to all courses",
			"Priority support",
			"50GB of cloud storage",
			"Certificate of completion",
			"Monthly webinars",
		],
	},
	{
		id: 3,
		name: "Premium",
		price: "$99.99",
		duration: "/month",
		features: [
			"Access to all courses",
			"1-on-1 mentorship",
			"200GB of cloud storage",
			"Certificate of completion",
			"Monthly webinars",
			"Access to exclusive content",
		],
	},
	{
		id: 4,
		name: "Enterprise",
		price: "150",
		duration: "/month",
		features: [
			"Custom course access",
			"Dedicated account manager",
			"Unlimited cloud storage",
			"Team training sessions",
			"Custom webinars",
			"Priority support",
		],
	},
];

export const instructors = [
	{
		id: 1,
		name: "Ph.D Adrian Molises",
		title: "DEVELOPER AND LEAD INSTRUCTOR",
		instructorImage: require("../src/images/team/t1.webp"),
	},
	{
		id: 2,
		name: "Ph.D Arthur MaGregor",
		title: "DEVELOPER AND CURRICULUM DESIGNER",
		instructorImage: require("../src/images/team/t2.webp"),
	},
	{
		id: 3,
		name: "Ph.D Anna Hanzen",
		title: "DEVELOPER AND STUDENT MENTOR",
		instructorImage: require("../src/images/team/t3.webp"),
	},
	{
		id: 4,
		name: "Ph.D Brian Wooden",
		title: "DEVELOPER AND CONTENT CREATOR",
		instructorImage: require("../src/images/team/t4.webp"),
	},
	{
		id: 5,
		name: "Ph.D Catherine Lawson",
		title: "DEVELOPER AND ASSESSMENT COORDINATOR",
		instructorImage: require("../src/images/team/t5.webp"),
	},
	{
		id: 6,
		name: "Ph.D David Green",
		title: "DEVELOPER AND TECHNOLOGY SPECIALIST",
		instructorImage: require("../src/images/team/t6.webp"),
	},
	{
		id: 7,
		name: "Ph.D Emily Clark",
		title: "DEVELOPER AND COMMUNITY MANAGER",
		instructorImage: require("../src/images/team/t7.webp"),
	},
	{
		id: 8,
		name: "Ph.D Fiona Turner",
		title: "DEVELOPER AND PROJECT ADVISOR",
		instructorImage: require("../src/images/team/t8.webp"),
	},
];

export const faqs = [
	{
		id: 1,
		question: "What types of courses do you offer?",
		answer:
			"We offer a wide range of courses in various fields, including technology, business, arts, and personal development.",
	},
	{
		id: 2,
		question: "How do I enroll in a course?",
		answer:
			"To enroll in a course, simply create an account, browse our course catalog, and click 'Enroll' on your chosen course.",
	},
	{
		id: 3,
		question: "Can I access course materials after completing the course?",
		answer:
			"Yes, once you complete a course, you will have lifetime access to all course materials for future reference.",
	},
	{
		id: 4,
		question: "Do you offer any certification upon course completion?",
		answer:
			"Yes, we provide a certificate of completion for all our courses, which you can add to your resume or LinkedIn profile.",
	},
	{
		id: 5,
		question:
			"What support is available if I have questions during the course?",
		answer:
			"We offer 24/7 support via email and chat. You can also participate in our community forums to connect with peers and instructors.",
	},
];

export const review = [
	{
		id: 1,
		name: "Sarah J.",
		course: "Frontend Development",
		rating: 5,
		testimonial:
			"Fantastic Frontend Development course! Expert instructors, practical projects, and a supportive community. Gained confidence and skills for my job. Highly recommend for web development enthusiasts!",
		image: require("./images/testo/t1.webp"),
	},
	{
		id: 2,
		name: "James L.",
		course: "Data Science",
		rating: 5,
		testimonial:
			"Comprehensive Data Science course! Interactive lessons, practical assignments, and excellent mentorship. Landed a data analyst job right after. This platform is a career game-changer!",
		image: require("./images/testo/t2.webp"),
	},
	{
		id: 3,
		name: "Emily R.",
		course: "Digital Marketing",
		rating: 5,
		testimonial:
			"Flexible and engaging Digital Marketing course for busy professionals. Industry experts share practical insights. Improved my skills significantly, boosting my company's online presence. Highly recommend for career growth!",
		image: require("./images/testo/t3.webp"),
	},
	{
		id: 4,
		name: "Michael K.",
		course: "Machine Learning",
		rating: 5,
		testimonial:
			"Excellent Machine Learning course with thorough content and real-world applications. The projects were challenging yet rewarding. This course has been instrumental in advancing my career in AI and machine learning.",
		image: require("./images/testo/t1.webp"),
	},
];

export default review;
