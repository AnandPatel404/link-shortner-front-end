import React from "react";
import { Switch, Route } from "react-router-dom";
// import HeroOne from "./heroOne";
import NavBar from "./components/NavBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Footer from "./components/footer";
import Pricing from "./components/Pricing";
import "./style.css";
function Index() {
	return (
		<Switch>
			<Route exact path={`${process.env.PUBLIC_URL}/home`}>
				<div class="content-wrapper">
					<header class="wrapper">
						<NavBar />
						<SectionOne />
						<SectionThree />
						<SectionTwo />
						<SectionFour />
						<SectionFive />
						<SectionSix />
					</header>
					<Footer />
				</div>
			</Route>
			<Route exact path={`${process.env.PUBLIC_URL}/pricing`} component={Pricing}></Route>
		</Switch>
	);
}

export default Index;
