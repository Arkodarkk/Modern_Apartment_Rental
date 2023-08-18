import React from "react";
import Header from "../components/header/Header";
import AboutPicture from "../components/about/AboutPicture";
import Footer from "../components/footer/Footer";
import Collapse from "../components/logement/Collapse";
import aboutData from '../assets/database/aboutData.json';

const About = () => {

	return (
		<div>
			<Header />
			<AboutPicture />
			<div className="collapses-wrapper">
				<Collapse label="Fiabilité" content={aboutData.fiabilite} customClass="about-collapses" />
				<Collapse label="Respect" content={aboutData.respect} customClass="about-collapses" />
				<Collapse label="Service" content={aboutData.service} customClass="about-collapses" />
				<Collapse label="Sécurité" content={aboutData.securite} customClass="about-collapses" />
			</div>
			<Footer />
		</div>
	);
};

export default About;