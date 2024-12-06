import React from "react";

const SupportedCoins = () => {
	return (
		<section className="h-screen bg-white flex justify-center items-center p-36 gap-8">
			<div className="flex flex-col gap-8">
				<div className="flex items-end gap-4">
					<h1 className="text-5xl font-lexend">Supported Coins</h1>
					<img
						src="src/assets/ArrowElbowRightDown.svg"
						alt=""
						className="w-max"
					/>
				</div>
				<div
					className="flex flex-col gap-8 rounded-3xl p-8 font-lato"
					style={{ backgroundColor: "#FFEAD1", color: "#F7931A" }}
				>
					<div className="flex bg-white rounded-full w-max p-1 gap-1 items-center">
						<img src="src/assets/Bitcoin.svg" alt="" />
						<p className="font-semibold px-1">Bitcoin</p>
					</div>
					<div className="flex">
						<img src="src/assets/BitcoinIllus.png" alt="" />
						<p className="text-2xl text-justify px-10 leading-relaxed">
							<span className="font-bold">Bitcoin</span> is the first and most
							recognized cryptocurrency, offering a decentralized and secure
							store of value that has gained widespread adoption as "digital
							gold."
						</p>
					</div>
				</div>
				<div
					className="flex flex-col gap-8 rounded-3xl p-8 font-lato"
					style={{ backgroundColor: "#FFF6D8", color: "#F0B90B" }}
				>
					<div className="flex bg-white rounded-full w-max p-1 gap-1 items-center">
						<img src="src/assets/BNB-Coin.svg" alt="" />
						<p className="font-semibold px-1">Binance Coin</p>
					</div>
					<div className="flex">
						<p className="text-2xl text-justify pr-12 pl-2 leading-relaxed">
							<span className="font-bold">Binance Coin</span> is widely used on
							the Binance exchange for trading fee discounts and various
							applications within the Binance ecosystem.
						</p>
						<img src="src/assets/BNBIllus.png" alt="" />
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<div
					className="flex flex-col gap-8 rounded-3xl p-8 font-lato"
					style={{ backgroundColor: "#DEE5FF", color: "#454A75" }}
				>
					<div className="flex bg-white rounded-full w-max p-1 gap-1 items-center">
						<img src="src/assets/ETH.svg" alt="" />
						<p className="font-semibold px-1">Ethereum</p>
					</div>
					<div className="flex">
						<p className="text-2xl text-justify pr-12 pl-2 leading-relaxed">
							<span className="font-bold">Ethereum</span> enables developers to
							build decentralized applications and smart contracts on its
							blockchain, providing a versatile platform
						</p>
						<img src="src/assets/EthIllus.png" alt="" />
					</div>
				</div>
				<div
					className="flex flex-col gap-8 rounded-3xl p-8 font-lato"
					style={{ backgroundColor: "#EEF8F8", color: "#53AE94" }}
				>
					<div className="flex bg-white rounded-full w-max p-1 gap-1 items-center">
						<img src="src/assets/Tether-Coin.svg" alt="" />
						<p className="font-semibold px-1">Tether</p>
					</div>
					<div className="flex">
						<img src="src/assets/TetherIllus.png" alt="" />
						<p className="text-2xl text-justify px-10 leading-relaxed">
							<span className="font-bold">Tether</span> is a stablecoin pegged
							to the US dollar, providing a reliable means of preserving value
							and facilitating transactions in the volatile cryptocurrency
							market.
						</p>
					</div>
				</div>
				<div className="flex items-center">
					<p className="text-2xl font-lato">
						And for the fiat we got USD, IDR, EUR and GBP
					</p>
					<img src="src/assets/arrowlongright.svg" alt="" />
				</div>
			</div>
		</section>
	);
};

export default SupportedCoins;
