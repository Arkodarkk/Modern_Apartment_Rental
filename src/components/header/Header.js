import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
	return (
		<header className="header-container">
			<Logo />
			<Navigation />
		</header>
	);
};

export default Header;
