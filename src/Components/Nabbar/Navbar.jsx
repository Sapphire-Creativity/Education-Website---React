import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import { links } from "../../data";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);

	return (
		<nav>
			<div className="container nav-container">
				<Link to="./" className="logo" onClick={() => setIsNavShowing(false)}>
					<MdCastForEducation />
					<h3>ACADEMIA </h3>
				</Link>

				<ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"} `}>
					{links.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink
									to={path}
									className={({ isActive }) => (isActive ? "active-nav" : "")}
									onClick={() => setIsNavShowing((prev) => !prev)}>
									{name}
								</NavLink>
							</li>
						);
					})}
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
