import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form, Spinner } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userSubStore from "../../../zustand/Subscription/sub";
import { Link } from "react-router-dom";

function Expirationlink({ sm, updateSm }) {
	const [rangeStart] = useState(new Date());
	const [expireLink, setExpirationLink] = useState(null);
	const [loading, setLoading] = useState(false);
	const [rangeEnd, setRangeEnd] = useState();
	const { SingleLink, createExpirationLink } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		createExpirationLink: state.createExpirationLink,
	}));
	const { sub } = userSubStore((state) => ({
		sub: state.subscription,
	}));
	const s = async () => {
		setLoading(true);
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			setLoading(false);
			return errorToast("Please select link first", "Error");
		}

		if (expireLink !== null && expireLink !== "") {
			const data = {
				linkId: SingleLink.id,
				after_expired: expireLink,
				expireDate: rangeEnd,
			};
			createExpirationLink(data, setLoading);
		} else {
			const data = {
				linkId: SingleLink.id,
				expireDate: rangeEnd,
			};
			createExpirationLink(data, setLoading);
		}
	};

	const afterExpiration = (e) => {
		setExpirationLink(e);
	};

	const { handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Create a Link with your time and expiration
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				{sub.planId?.expiration_link ? (
					<Block size="lg">
						<Form className="gy-3" onSubmit={handleSubmit(s)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Date & Time
										</label>
										<span className="form-note">Specify the link you want short</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<div className="form-note">
												Date Format <code>mm/dd/yyyy</code>
											</div>
											<div className="input-daterange date-picker-range input-group">
												<DatePicker
													selected={rangeEnd}
													onChange={setRangeEnd}
													startDate={rangeStart}
													endDate={rangeEnd}
													selectsEnd
													minDate={rangeStart}
													wrapperClassName="end-m"
													className="form-control"
												/>
											</div>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											After expire link (optional)
										</label>
										<span className="form-note">
											Specify the link that re-direct the client after expire the main link (optional)
										</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="text"
												id="after_expired"
												name="after_expired"
												className="form-control"
												onChange={(e) => {
													afterExpiration(e.target.value);
												}}
											/>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3">
								<Col lg="7" className="offset-lg-5">
									<FormGroup className="mt-2">
										<Button color="primary" size="lg" type="submit">
											{loading ? <Spinner /> : "Save"}
										</Button>
									</FormGroup>
								</Col>
							</Row>
						</Form>
					</Block>
				) : (
					<Link to={`${process.env.PUBLIC_URL}/pricing-table`}>Upgrade Your Plan To Use This Functionality</Link>
				)}
			</Content>
		</React.Fragment>
	);
}

export default Expirationlink;
