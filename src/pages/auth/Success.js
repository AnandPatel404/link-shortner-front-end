import React from "react";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle } from "../../components/Component";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import fevIcon from "../../images/svg/fevicon-and-logo.svg";
import r from "../../images/svg/Completed.svg";

const Success = () => {
	return (
		<React.Fragment>
			<Head title="Success" />
			<PageContainer>
				<Row>
					<Col xl="7" className="position-relative" style={{ backgroundColor: "#f1c40f4a" }}>
						<img src={fevIcon} alt="" width={50} className="position-absolute mt-3 ml-3  mt-md-5 ml-md-5" />
						<div className="d-md-flex justify-content-md-center align-items-md-center mt-lg-4 flex-column text-center">
							<img src={r} alt="" width={600} />
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h3">Your account is now verified ✅😊</BlockTitle>
									<BlockDes>
										<p>
											Please do not share your password and otp with anyone
											<br />
										</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
						</div>
					</Col>
					<Col xl="5" className="d-flex align-items-center">
						<Block className="nk-auth-body wide-s">
							<div className="brand-logo pb-5">
								<Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
									<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" width={160} />
									<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
								</Link>
							</div>
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h2">Thank you for choosing us</BlockTitle>
									<BlockDes className="text-success">
										<p>You can now sign in with your email and password</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
							<div className="form-note-s2 text-center pt-4">
								<Link
									className="btn-block py-1 btn-primary"
									to={`${process.env.PUBLIC_URL}/auth-login`}
									style={{ borderRadius: 5 + "px" }}
								>
									Login
								</Link>
							</div>
						</Block>
					</Col>
				</Row>
			</PageContainer>
		</React.Fragment>
	);
};
export default Success;
