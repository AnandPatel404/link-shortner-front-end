import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";

function Expirationlink({ sm, updateSm }) {
	const [rangeStart, setRangeStart] = useState(new Date());
	const [rangeEnd, setRangeEnd] = useState();
	const { SingleLink, createExpirationLink } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		createExpirationLink: state.createExpirationLink,
	}));
	const s = async () => {
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			return errorToast("Please select link first", "Error");
		}
		const data = {
			linkId: SingleLink.id,
			staringDate: rangeStart,
			expireDate: rangeEnd,
		};
		createExpirationLink(data);
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
												selected={rangeStart}
												onChange={setRangeStart}
												selectsStart
												startDate={rangeStart}
												endDate={rangeEnd}
												wrapperClassName="start-m"
												className="form-control"
											/>{" "}
											<div className="input-group-addon">TO</div>
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
						<Row className="g-3">
							<Col lg="7" className="offset-lg-5">
								<FormGroup className="mt-2">
									<Button color="primary" size="lg" type="submit">
										Save
									</Button>
								</FormGroup>
							</Col>
						</Row>
					</Form>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default Expirationlink;
