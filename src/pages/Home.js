import React, { useState } from "react";
import Header from "../components/header/Header";
import PictureHeader from "../components/header/TagLine";
import Card from "../components/home/Card";
import Footer from "../components/footer/Footer";
import datas from "../assets/database/logements.json";

const Home = () => {
	const [visibleCard, setvisibleCard] = useState(6);

	const handleShowMore = () => {
		setvisibleCard((prevCount) => prevCount + 6);
	};

	return (
		<div className="home-container">
			<Header />
			<PictureHeader />
			<main className="cards-container">
				{datas &&
					datas
						.slice(0, visibleCard)
						.map((logement) => <Card key={logement.id} logement={logement} />)}
				{visibleCard < datas.length && (
					<p className="show-more" onClick={handleShowMore}>
						Afficher plus de logements
					</p>
				)}
			</main>
			<Footer />
		</div>
	);
};

export default Home;
