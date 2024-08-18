import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { links } from "../../data";
import "./Navbar.css";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);
	const [navBackground, setNavBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150) {
				setNavBackground(true);
			} else {
				setNavBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={navBackground ? "nav-scrolled" : ""}>
			<div className="container nav-container">
				<Link to="./" className="logo" onClick={() => setIsNavShowing(false)}>
					<MdCastForEducation />
					<h3>ACADEMIA</h3>
				</Link>

				<ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
					{links.map(({ name, path }, index) => (
						<li key={index}>
							<NavLink
								to={path}
								className={({ isActive }) => (isActive ? "active-nav" : "")}
								onClick={() => setIsNavShowing((prev) => !prev)}>
								{name}
							</NavLink>
						</li>
					))}
				</ul>

				<button
					className="nav-toggle-btn"
					onClick={() => setIsNavShowing((prev) => !prev)}>
					{isNavShowing ? <IoClose /> : <HiMenu />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
