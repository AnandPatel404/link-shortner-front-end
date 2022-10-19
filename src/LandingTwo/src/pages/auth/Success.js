import React from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <React.Fragment>
      <Head title="Success" />
      <PageContainer>
        <div className="nk-block nk-block-middle nk-auth-body">
          <div className="brand-logo pb-5">
            <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <div className="nk-block">
            <div className="nk-block-content">
              <h4 className="nk-block-title">Thank you for submitting form</h4>
              <div className="nk-block-des text-success">
                <p>You can now sign in with your new password</p>
              </div>
            </div>
          </div>
        </div>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Success;
