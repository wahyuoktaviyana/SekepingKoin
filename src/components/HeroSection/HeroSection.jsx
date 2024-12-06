import React from "react";

const HeroSection = ({ page }) => {
	return (
		<section className="text-center pb-12">
			{page === "Coin" ? (
				<>
					<h1
						className="text-7xl font-semibold mb-4 font-lexend"
						style={{ color: "#1E1E1E" }}
					>
						Crypto Coin Conversion
					</h1>
					<p className="text-2xl font-lato" style={{ color: "#1E1E1E" }}>
						Free from sign-up, limits, complications
					</p>
				</>
			) : (
				<>
					<h1
						className="text-7xl font-semibold mb-4 font-lexend"
						style={{ color: "#1E1E1E" }}
					>
						Fiat Conversion
					</h1>
					<p className="text-2xl font-lato" style={{ color: "#1E1E1E" }}>
						Free from sign-up, limits, complications
					</p>
				</>
			)}
		</section>
	);
};

export default HeroSection;
