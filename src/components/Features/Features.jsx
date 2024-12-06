import React from "react";

const Features = () => {
	return (
		<section className="h-screen bg-white flex justify-center items-center p-36 gap-16">
			<div className="flex flex-col justify-between h-1/2">
				<h1 className="font-lexend font-normal text-5xl">
					Trusted by Many People
				</h1>
				<div className="flex flex-col gap-4">
					<p
						className="font-lato font-normal text-xl leading-relaxed"
						style={{ color: "#7D7D7D" }}
					>
						Discover the Advantages of Secure and Hassle-Free Transactions with
						Our Platform, Where Convenience Meets Reliability for Effortless
						Crypto Coin Conversion to Fiat Currency and Seamless Fiat to Coin
						Transactions.
					</p>
					<div className="flex gap-2 items-center">
						<img src="src/assets/peoplesatisfied.png" alt="" />
						<p
							className="font-lato font-medium text-lg"
							style={{ color: "#7D7D7D" }}
						>
							Many People Satisfied
						</p>
					</div>
				</div>
			</div>
			<div
				className="flex flex-col gap-4 h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('src/assets/blue-ellip.png')",
					backgroundSize: "120%",
					color: "#666666",
				}}
			>
				<div className="flex gap-4">
					<div
						className="flex flex-col gap-2 p-8 rounded-2xl flex-1"
						style={{ backgroundColor: "#FFFFFF" }}
					>
						<div className="flex justify-between">
							<p className="font-lexend font-medium text-xl">Privacy</p>
							<img src="src/assets/Privacy.png" alt="" className="pl-4" />
						</div>
						<p className="font-lato pt-4 text-lg">
							Provide Crypto Conversion without Registration
						</p>
					</div>
					<div
						className="flex flex-col gap-2 p-8 rounded-2xl flex-1"
						style={{ backgroundColor: "#FFFFFF" }}
					>
						<div className="flex justify-between">
							<p className="font-lexend font-medium text-xl">Many Choice</p>
							<img src="src/assets/ManyChoice.png" alt="" className="pl-4" />
						</div>
						<p className="font-lato pt-4 text-lg">
							4 Crypto Coin and 4 Fiat Currencies for Crypto Conversion
						</p>
					</div>
				</div>
				<div className="flex gap-4">
					<div
						className="flex flex-col gap-2 p-8 rounded-2xl flex-1"
						style={{ backgroundColor: "#FFFFFF" }}
					>
						<div className="flex justify-between">
							<p className="font-lexend font-medium text-xl">Support</p>
							<img src="src/assets/Support.png" alt="" className="pl-4" />
						</div>
						<p className="font-lato pt-4 text-lg">
							We will help and ready to answer your questions
						</p>
					</div>
					<div
						className="flex flex-col gap-2 p-8 rounded-2xl flex-1"
						style={{ backgroundColor: "#FFFFFF" }}
					>
						<div className="flex justify-between">
							<p className="font-lexend font-medium text-xl">Safety</p>
							<img src="src/assets/Safety.png" alt="" className="pl-4" />
						</div>
						<p className="font-lato pt-4 text-lg">
							We will not safe your information in our services
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
