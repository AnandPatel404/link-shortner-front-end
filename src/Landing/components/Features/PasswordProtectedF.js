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
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Password Protected Link
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
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default PasswordProtectedF;
