import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import "./style.css";
import secondPng from "../../assets/img/second.png";
import qrWithLogoPng from "../../assets/img/qrwithlogo.png";
import qrWithLogoTwoPng from "../../assets/img/qrwithlogotwo.png";
import qrListPng from "../../assets/img/qrlistWithlogo.png";
function QRWithLogo({ sm, updateSm }) {
	const items = [
		{
			src: secondPng,
			key: 1,
		},
		{
			src: qrWithLogoPng,
			key: 2,
		},
		{
			src: qrWithLogoTwoPng,
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
			<Head title="Guide To Create Qr Link With Your Logo" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Create Qr Link With Your Logo
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
						<Col lg="12" className="mt-5">
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Step 1 :-</h5>
							<p>
								✅ First of all click on create link , After that when the link menu opens, click on Create or find link Now sort your
								link in that or find it.
							</p>
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Step 2 :-</h5>
							<p>
								✅ Now the one who has already made his own QR is fine but the one who has not made his own Qr then just upload the
								photo And the QR will be created automatically with your logo, after that you click on save
							</p>
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Step 3 :-</h5>
							<p>
								✅ After all this is done, it is an important step that you will see your link in blue color, below it will be the
								button of apply changes, do not forget to press it.
							</p>
							<p>
								✅ If you forget to press this button, then your link will be QR created, but if you do any other work, then it will
								be on current link so it is important to press this button.
							</p>
							<h5 className="mb-5 mx-md-n5 mx-lg-0">Note :-</h5>
							<p>✅ Once you have created the QR, after that you cannot make any changes in it.</p>
							<Col lg="12" className="mt-5">
								<img src={qrListPng} alt="" />
								<p>✅ You can see your QR list in the dashboard.</p>
								<p>
									✅ Yes but you can definitely do this when you don't need QR then you can delete it and your link will still work
								</p>
							</Col>
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default QRWithLogo;
