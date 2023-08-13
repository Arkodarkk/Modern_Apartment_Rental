import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Carousel from "../components/logement/Carousel";
import LogementInfos from "../components/logement/LogementInfos";
import Footer from "../components/footer/Footer";
import datas from "../assets/database/logements.json";

const LogementPage = () => {
	const { id } = useParams();
	const appartement = datas.find((logement) => logement.id === id);

	return (
		<div className="logement-page-container">
			<Header />
			<Carousel appartement={appartement} />
			<LogementInfos appartement={appartement} />
			<Footer />
		</div>
	);
};

export default LogementPage;
