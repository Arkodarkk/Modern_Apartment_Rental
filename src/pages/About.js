import React from "react";
import Header from "../components/header/Header";
import AboutPicture from "../components/about/AboutPicture";
import Footer from "../components/footer/Footer";
import Collapse from "../components/logement/Collapse";

const About = () => {

	const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
	
	const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
	
	const service = "Chez Kasa, le service est essentiel. Notre équipe dévouée est là pour répondre à vos besoins, du début à la fin de votre séjour. Chaque aspect de votre expérience est soigneusement orchestré pour vous offrir un moment inoubliable. Vous n'obtenez pas seulement un logement, vous obtenez une expérience de service complète, à la hauteur de vos attentes."
	
	const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

	return (
		<div>
			<Header />
			<AboutPicture />
			<div className="collapses-wrapper">
				<Collapse label="Fiabilité" content={fiabilite} customClass="about-collapses" />
				<Collapse label="Respect" content={respect} customClass="about-collapses" />
				<Collapse label="Service" content={service} customClass="about-collapses" />
				<Collapse label="Sécurité" content={securite} customClass="about-collapses" />
			</div>
			<Footer />
		</div>
	);
};

export default About;
