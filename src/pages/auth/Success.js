import React from "react";
// import Logo from "../../images/logo.png";
// import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle } from "../../components/Component";
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
						<div className="d-md-flex justify-content-md-center align-items-md-center">
							<img src={r} alt="" width={600} />
						</div>
					</Col>
					<Col xl="5">
						<Block className="nk-auth-body py-5 my-4 wide-s text-center d-flex justify-content-center">
							{/* <div className="brand-logo pb-5">
								<Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
									<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
									<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
								</Link>
							</div> */}
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h4">Thank you for submitting form</BlockTitle>
									<BlockDes className="text-success">
										<p>You can now sign in with your new password</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
						</Block>
					</Col>
				</Row>
			</PageContainer>
			<AuthFooter />
		</React.Fragment>
	);
};
export default Success;
