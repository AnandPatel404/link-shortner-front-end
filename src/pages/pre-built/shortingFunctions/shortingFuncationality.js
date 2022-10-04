import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, PreviewCard, Icon, Button } from "../../../components/Component";
function ShortingFuncationality() {
	const [rangeStart, setRangeStart] = useState(new Date());
	const [rangeEnd, setRangeEnd] = useState();
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockHeadContent>
						<BlockTitle tag="h2" className="fw-normal">
							Create a Link
						</BlockTitle>
						<BlockDes>
							<p className="lead">
								Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide
								variety of forms. Here’s a quick example to demonstrate form styles, so use these classes to opt into their customized
								displays.
							</p>
						</BlockDes>
					</BlockHeadContent>
				</BlockHead>

				<Block size="lg">
					<PreviewCard>
						<div className="card-head">
							<h5 className="card-title">Website Setting</h5>
						</div>
						<form className="gy-3">
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Link
										</label>
										<span className="form-note">Specify the link you want short</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="text" id="site-name" className="form-control" />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Branded back link
										</label>
										<span className="form-note">Specify the back link</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="text" id="site-name" className="form-control" />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label">Link status</label>
										<span className="form-note">Enable or disable link status.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<ul className="custom-control-group g-3 align-center flex-wrap">
											<li>
												<div className="custom-control custom-radio">
													<input
														type="radio"
														className="custom-control-input form-control"
														defaultChecked
														name="reg-public"
														id="reg-enable"
													/>
													<label className="custom-control-label" htmlFor="reg-enable">
														Enable
													</label>
												</div>
											</li>
											<li>
												<div className="custom-control custom-radio">
													<input
														type="radio"
														className="custom-control-input form-control"
														name="reg-public"
														id="reg-disable"
													/>
													<label className="custom-control-label" htmlFor="reg-disable">
														Disable
													</label>
												</div>
											</li>
										</ul>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label">Choose your domain</label>
										<span className="form-note">Specify the domain of your link.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<div className="form-control-select">
												<Input type="select" name="select" id="default-4">
													<option value="shorterMe.link/">shorterMe.link/</option>
													<option value="option_select_name">Option select name</option>
													<option value="option_select_name">Option select name</option>
												</Input>
											</div>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label">Set Password</label>
										<span className="form-note">Set Password of your link.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="text" id="site-copyright" className="form-control" />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label">Re-direction link</label>
										<span className="form-note">Specify the URL if your main website is down.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="text" name="site-url" className="form-control" placeholder="https://www.example.com" />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label">Enter error link</label>
										<span className="form-note">Specify the URL if your main website is down.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="text" name="site-url" className="form-control" placeholder="https://www.example.com" />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label">Specify date</label>
										<span className="form-note">Specify the start to expire date</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<Label>Datepicker Range Multiple Input</Label>
										<div className="form-control-wrap">
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
										<div className="form-note">
											Date Format <code>mm/dd/yyyy</code>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-off">
											Maintanance Mode
										</label>
										<span className="form-note">Enable to make website make offline.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="custom-control custom-switch">
											<input type="checkbox" className="custom-control-input form-control" name="reg-public" id="site-off" />
											<label className="custom-control-label" htmlFor="site-off">
												Offline
											</label>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label">Click's limit</label>
										<span className="form-note">
											Specify click's limit of link then (disable link default limit is unlimited)
										</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="number" name="site-url" className="form-control" />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3">
								<Col lg="7" className="offset-lg-5">
									<FormGroup className="mt-2">
										<Button color="primary" size="lg" onClick={(e) => e.preventDefault()}>
											Create
										</Button>
									</FormGroup>
								</Col>
							</Row>
						</form>
					</PreviewCard>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default ShortingFuncationality;
