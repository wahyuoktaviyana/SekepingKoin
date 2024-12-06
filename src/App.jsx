import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import SupportedCoins from "./components/SupportedCoins/SupportedCoins";
import Footer from "./components/Footer/Footer";
import CoinToFiat from "./pages/CoinToFiat";
import FiatToCoin from "./pages/FiatToCoin";
import "./App.css";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<CoinToFiat />} />
				<Route path="/fiat-to-coin" element={<FiatToCoin />} />
			</Routes>
			<Features />
			<SupportedCoins />
			<Footer />
		</Router>
	);
};

export default App;
