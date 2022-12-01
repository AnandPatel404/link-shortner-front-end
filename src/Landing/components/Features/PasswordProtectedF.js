import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import "./style.css";
import firstPng from "../../assets/img/first.png";
import secondPng from "../../assets/img/second.png";
import thirdPng from "../../assets/img/third.png";
function PasswordProtectedF({ sm, updateSm }) {
	const items = [
		{
			src: firstPng,
			key: 1,
		},
		{
			src: secondPng,
			key: 2,
		},
		{
			src: thirdPng,
			key: 3,
		},
	];
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
				<img src={item.src} alt={item.altText} />
			</CarouselItem>
		);
	});

	return (
		<React.Fragment>
			<Head title="Guide To Create A Password Protected Link" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Create Password Protected link
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				<Block size="xl">
					<Row>
						<Col lg="12">
							<Carousel activeIndex={activeIndex} next={next} previous={previous}>
								<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
								{slides}
								<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="lfnp " />
								<CarouselControl direction="next" directionText="Next" onClickHandler={next} className="lfnp" />
							</Carousel>
						</Col>
					</Row>
					<Row>
						<Col lg="12">
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Step 1 :-</h5>
							<p>
								✅ First of all click on create link , After that when the link menu opens, click on Create or find link Now sort your
								link in that or find it.
							</p>
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Step 2 :-</h5>
							<p>
								✅ Now click on the password protected link in the menu of the link Now enter your password and click on save You will
								see a success message saying that your link has been updated.
							</p>
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Step 3 :-</h5>
							<p>
								✅ After all this is done, it is an important step that you will see your link in blue color, below it will be the
								button of apply changes, do not forget to press it.
							</p>
							<p>
								✅ If you forget to press this button, then your link will be password protected, but if you do any other work, then
								it will be on current link so it is important to press this button.
							</p>
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Note :-</h5>
							<p>
								✅ These passwords are saved in encrypted form, so once you save your password, you cannot change it after that, If
								you want to see this password, then you can go to the dashboard and click on your link details.
							</p>
							<p>✅ You can definitely unlock this password protected link</p>
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default PasswordProtectedF;
