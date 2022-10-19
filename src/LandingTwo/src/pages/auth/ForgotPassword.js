import React from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <div className="nk-block nk-block-middle nk-auth-body wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <div className="card-preview card-bordered">
            <div className="card-inner card-inner-lg">
              <div className="nk-block-head">
                <div className="nk-block-content">
                  <h5 className="nk-block-title page">Reset Password</h5>
                  <div className="nk-block-des">
                    <p>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
                  </div >
                </div>
              </div>
              <form>
                <FormGroup>
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">
                      Email
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="default-01"
                    placeholder="Enter your email address"
                  />
                </FormGroup>
                <FormGroup>
                  <Button color="primary" size="lg" className="btn-block" onClick={(ev) => ev.preventDefault()}>
                    Send Reset Link
                  </Button>
                </FormGroup>
              </form>
              <div className="form-note-s2 text-center pt-4">
                <Link to={`${process.env.PUBLIC_URL}/pages/auths/auth-login`}>
                  <strong>Return to login</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default ForgotPassword;
