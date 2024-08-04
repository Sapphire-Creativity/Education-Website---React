import React from "react";
import Footer from "../../Components/Footer";
import Copyright from "../../Components/Copyright";
import Newsletter from "../../Components/Newsletter";
import CenterDiv from "../../Components/CenterDiv";

import ContactImage from "../../images/courses.jpg";
import Hero from "../../Components/Hero/Hero";

import "./Contact.css";

const Contact = () => {
	const [result, setResult] = React.useState("");
	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "75f849b9-8898-4887-8d2a-3928894856c9");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<>
			<Hero backgroundImage={ContactImage}>
				<h2>Contact Us</h2>
			</Hero>

			<section className="container">
				<div className="contact-container">
					<div
						className="map"
						style={{ width: "100%", height: "450px", border: 0 }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1722768232326!5m2!1sen!2sng"
							width="600"
							height="450"
							style={{ border: "0" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
					<div className="contact-form">
						<p>
							We'd love to hear from you! Whether you have questions, feedback,
							or need support, please reach out to us. Our team is here to help
							you.
						</p>

						<div className="contact-info">
							<div className="info-detail">
								<i class="ri-map-pin-fill"></i>

								<h4>198 West 21th Street, NY 10016</h4>
							</div>
							<div className="info-detail">
								<i class="ri-mail-fill"></i>
								<h4>info@academia.com</h4>
							</div>
							<div className="info-detail">
								<i class="ri-phone-fill"></i>

								<h4>+2 392 3929 210</h4>
							</div>
						</div>

						<form onSubmit={onSubmit}>
							<label>Your Name</label>
							<input
								type="text"
								name="name"
								placeholder="Enter Your Name"
								required
							/>
							<label>Phone Number</label>
							<input
								type="tel"
								name="phone"
								placeholder="Enter Your Mobile Number"
								required
							/>
							<label>Write your messages here</label>
							<textarea
								name="message"
								id=""
								rows="6"
								placeholder="Enter Your Message"
								required></textarea>

							<button type="submit" className="btn dark-btn">
								Submit Now
							</button>

							<span>{result}</span>
						</form>
					</div>
				</div>
			</section>

			<CenterDiv />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default Contact;
