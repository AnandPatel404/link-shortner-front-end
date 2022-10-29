import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import "./style.css";
function Index() {
	return (
		<header class="wrapper">
			<SectionOne />
			<SectionThree />
			<SectionTwo />
			<SectionFour />
			<SectionFive />
			<SectionSix />
		</header>
	);
}

export default Index;
