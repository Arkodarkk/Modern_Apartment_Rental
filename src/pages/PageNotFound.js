import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="pnf-container">
			<Header />
			<div className="pnf-body-container">
				<h2>404</h2>
				<h3>Oups! La page que vous demandez n'existe pas.</h3>
				<Link to="/">
					<p>Retourner sur la page d'accueil</p>
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default PageNotFound;
