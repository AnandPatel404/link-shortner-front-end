import React from "react";
// import Logo from "../../images/logo.png";
// import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button } from "../../components/Component";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import r from "../../images/svg/Completed.svg";

const Success = () => {
	return (
		<React.Fragment>
			<Head title="Success" />
			<PageContainer>
				<Row>
					<Col xl="7">
						<div className="d-md-flex justify-content-md-center align-items-md-center mt-lg-4">
							<img src={r} alt="" width={600} />
						</div>
					</Col>
					<Col xl="5" className="d-flex align-items-center">
						<Block className="nk-auth-body wide-s">
							{/* <div className="brand-logo pb-5">
								<Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
									<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
									<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
								</Link>
							</div> */}
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
			<AuthFooter />
		</React.Fragment>
	);
};
export default Success;
