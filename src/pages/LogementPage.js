import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Carousel from "../components/logement/Carousel";
import LogementInfos from "../components/logement/LogementInfos";
import Collapse from "../components/logement/Collapse";
import Footer from "../components/footer/Footer";
import datas from "../assets/database/logements.json";

const LogementPage = () => {
	const { id } = useParams();
	const appartement = datas.find((logement) => logement.id === id);
	const navigate = useNavigate();

	useEffect(() => {
		if (!appartement) {
			navigate("*");
		}
	}, [appartement, navigate]);

	return (
		<div className="logement-page-container">
			<Header />
			{appartement && (
				<>
					<Carousel appartement={appartement} />
					<LogementInfos appartement={appartement} />
					<div className="collapse-section">
						<Collapse label="Description" content={appartement.description} customClass="description" />
						<Collapse label="Équipements" content={appartement.equipments} customClass="equipments" />
					</div>
				</>
			)}
			<Footer />
		</div>
	);
};

export default LogementPage;
