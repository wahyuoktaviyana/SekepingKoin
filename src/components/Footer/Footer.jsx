import React from "react";

const Footer = () => {
	return (
		<footer class="p-8 bg-slate-800 text-white">
			<nav class="max-w-7xl mx-auto flex justify-between items-center">
				<a href="/" class="flex gap-2">
					<img src="src/assets/iconKoin.svg" alt="Logo" />
					<span class="text-2xl font-medium font-lexend">SekepingKoin</span>
				</a>
				<div class="flex gap-8 text-lg font-lato">
					<p>Privacy Policy</p>
					<p>Terms</p>
					<p>&copy; Gavrila</p>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
