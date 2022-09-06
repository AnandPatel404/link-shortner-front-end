import React from "react";
import { Row, Col } from "../../components/Component";
import { Link } from "react-router-dom";

const AuthFooter = () => {
	return (
		<div className="nk-footer nk-auth-footer-full">
			<div className="container wide-lg">
				<Row className="g-3">
					<Col lg={6} className="order-lg-last">
						<ul className="nav nav-sm justify-content-center justify-content-lg-end">
							<li className="nav-item">
								<Link className="nav-link" target="_blank" to={`${process.env.PUBLIC_URL}/auths/terms`}>
									Terms &amp; Condition
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" target="_blank" to={`${process.env.PUBLIC_URL}/auths/terms`}>
									Privacy Policy
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" target="_blank" to={`${process.env.PUBLIC_URL}/auths/faq`}>
									Help
								</Link>
							</li>
						</ul>
					</Col>
					<Col lg="6">
						<div className="nk-block-content text-center text-lg-left">
							<p className="text-soft">&copy; {`${new Date().getFullYear()} Shorterme. All Rights Reserved.`}</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};
export default AuthFooter;
