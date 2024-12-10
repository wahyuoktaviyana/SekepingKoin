import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";

const staticRates = {
	BTC: {
		IDR: 1200000000,
		USD: 50000,
		EUR: 46000,
		GBP: 40000,
	},
	ETH: {
		IDR: 70000000,
		USD: 3500,
		EUR: 3200,
		GBP: 2800,
	},
	BNB: {
		IDR: 9000000,
		USD: 600,
		EUR: 550,
		GBP: 500,
	},
	Tether: {
		IDR: 15000,
		USD: 1,
		EUR: 0.95,
		GBP: 0.85,
	},
};

const CoinToFiat = () => {
	const [coinValue, setCoinValue] = useState("");
	const [fiatValue, setFiatValue] = useState(0);
	const [selectedCoin, setSelectedCoin] = useState("BTC");
	const [selectedFiat, setSelectedFiat] = useState("IDR");

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "coin") {
			setSelectedCoin(value);
		} else {
			setSelectedFiat(value);
		}
	};

	const handleConversion = () => {
		const rate = staticRates[selectedCoin][selectedFiat];
		const calculatedValue = (parseFloat(coinValue) * rate).toFixed(2);
		setFiatValue(Number(calculatedValue).toLocaleString());
	};

	const handleCoinChange = (e) => {
		const value = e.target.value;
		if (/^\d*\.?\d*$/.test(value)) {
			setCoinValue(value);
		}
	};

	return (
		<>
			<div
				className="lg:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url(src/assets/GlassMorphBg.png)" }}
			>
				<HeroSection page={"Coin"} />
				<div
					className="max-w-sm mx-auto p-2 rounded-[24px] shadow-xl bg-[#F7F9FC] sm:max-w-[480px]"
					style={{ backgroundColor: "#F7F9FC" }}
				>
					<div className="flex items-center bg-white p-6 mb-2 rounded-[20px]">
						<div className="flex flex-col w-full mr-4">
							<label className="text-sm text-gray-500 font-medium mb-1 py-1">
								Coin
							</label>
							<input
								type="text"
								value={coinValue}
								onChange={handleCoinChange}
								className="bg-transparent text-4xl font-medium outline-none w-full py-1"
								placeholder="0"
								style={{ color: "#1E1E1E" }}
							/>
						</div>
						<select
							name="coin"
							value={selectedCoin}
							onChange={handleChange}
							className="bg-white border text-gray-900 font-medium text-sm p-2"
						>
							{Object.keys(staticRates).map((coin) => (
								<option key={coin} value={coin}>
									{coin}
								</option>
							))}
						</select>
					</div>

					<div className="flex items-center bg-slate-100 p-6 mb-2 rounded-[20px]">
						<div className="flex flex-col w-full mr-4">
							<label className="text-sm text-gray-500 font-medium mb-1 py-1">
								Fiat
							</label>
							<input
								type="text"
								disabled
								value={fiatValue}
								className="bg-transparent text-4xl font-medium outline-none w-full py-1"
								placeholder="0"
								style={{ color: "#1E1E1E" }}
							/>
						</div>
						<select
							name="fiat"
							value={selectedFiat}
							onChange={handleChange}
							className="bg-white border text-gray-900 font-medium text-sm p-2 flex items-center"
						>
							{["IDR", "USD", "EUR", "GBP"].map((fiat) => (
								<option key={fiat} value={fiat}>
									{fiat}
								</option>
							))}
						</select>
					</div>

					<button
						onClick={handleConversion}
						className="w-full py-4 rounded-[20px] transition font-semibold"
						style={{
							backgroundColor: coinValue > 0 ? "#308EFF" : "#CDE1EE",
							color: coinValue > 0 ? "#FFFFFF" : "#87A2B9",
						}}
						disabled={coinValue <= 0}
					>
						Convert
					</button>
				</div>
				<p
					className="mt-8 text-xl font-lato font-medium text-center"
					style={{ color: "#7D7D7D" }}
				>
					The most efficient and visually appealing website for
					<br />
					crypto conversion
				</p>
			</div>
			<div className="sticky bottom-0 flex flex-col items-center justify-center gap-1 mb-4 animate-bounce">
				<p
					className="font-lato font-medium text-lg"
					style={{ color: "#B0B0B0" }}
				>
					About SekepingKoin
				</p>
				<img src="src/assets/ArrowDown.svg" alt="" className="pb-2" />
			</div>
		</>
	);
};

export default CoinToFiat;
