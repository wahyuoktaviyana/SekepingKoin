import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/iconKoin.svg";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`${
				scrolled
					? "bg-white backdrop-blur-md shadow-sm"
					: "bg-transparent shadow-md"
			} sticky top-0 p-8 transition-all ease-in-out duration-200 z-50`}
			style={{
				backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent",
				backdropFilter: scrolled ? "blur(10px)" : "none",
			}}
		>
			<nav className="max-w-7xl mx-auto flex justify-between items-center">
				<Link to="/" className="flex gap-2">
					<img src={Logo} alt="Logo" />
					<span className="text-2xl font-medium text-gray-600 font-lexend">
						SekepingKoin
					</span>
				</Link>
				<div className="flex gap-8 text-gray-600 text-lg font-lato">
					<Link to="/">Coin to Fiat</Link>
					<Link to="/fiat-to-coin">Fiat to Coin</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
