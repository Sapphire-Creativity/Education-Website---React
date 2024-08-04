import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import PricingPlans from "./Pages/Pricing/PricingPlans";
import Contact from "./Pages/Contact/Contact";
// import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Components/Nabbar/Navbar";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="courses" element={<Courses />} />
				<Route path="pricing" element={<PricingPlans />} />
				<Route path="team" element={<Team />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
