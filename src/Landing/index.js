import React from "react";
import HeroOne from "./heroOne";
import NavBar from "./components/NavBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import "./style.css";
function Index() {
	return (
		<div class="content-wrapper">
			<div className="bg-soft-primary">
				<NavBar />
			</div>
			<header class="wrapper bg-primary">
				<SectionOne />
				<SectionTwo />
				<HeroOne />
			</header>
		</div>
	);
}

export default Index;
