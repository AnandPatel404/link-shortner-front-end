import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";

import { Form, FormGroup, Spinner, Alert, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { NioIcon } from "../../components/icon/Icon";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

  const onFormSubmit = (formData) => {
    setLoading(true);
    const loginName = "info@softnio.com";
    const pass = "123456";
    if (formData.name === loginName && formData.passcode === pass) {
      localStorage.setItem("accessToken", "token");
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
        );
        window.location.reload();
      }, 2000);
    } else {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 2000);
    }
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Login" />
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
                  <h5 className="nk-block-title page">Sign-In</h5>
                  <div className="nk-block-des">
                  <p>Access Dashlite using your email and passcode.</p>
                  </div >
                </div>
              </div>
              {errorVal && (
                <div className="mb-3">
                  <Alert color="danger" className="alert-icon">
                    {" "}
                    <NioIcon icon="alert-circle" /> Unable to login with credentials{" "}
                  </Alert>
                </div>
              )}
              <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
                <FormGroup>
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">
                      Email or Username
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      type="text"
                      id="default-01"
                      name="name"
                      ref={register({ required: "This field is required" })}
                      defaultValue="info@softnio.com"
                      placeholder="Enter your email address or username"
                      className="form-control-lg form-control"
                    />
                    {errors.name && <span className="invalid">{errors.name.message}</span>}
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="password">
                      Passcode
                    </label>
                    <Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/pages/auths/auth-forgotpassword`}>
                      Forgot Code?
                    </Link>
                  </div>
                  <div className="form-control-wrap">
                    <a
                      href="#password"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setPassState(!passState);
                      }}
                      className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                    >
                      <NioIcon icon="eye" className="passcode-icon icon-show"></NioIcon>

                      <NioIcon icon="eye-off" className="passcode-icon icon-hide"></NioIcon>
                    </a>
                    <input
                      type={passState ? "text" : "password"}
                      id="password"
                      name="passcode"
                      defaultValue="123456"
                      ref={register({ required: "This field is required" })}
                      placeholder="Enter your passcode"
                      className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                    />
                    {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                  </div>
                </FormGroup>
                <FormGroup>
                  <Button size="lg" className="btn-block" type="submit" color="primary">
                    {loading ? <Spinner size="sm" color="light" /> : "Sign in"}
                  </Button>
                </FormGroup>
              </Form>
              <div className="form-note-s2 text-center pt-4">
                {" "}
                New on our platform? <Link to={`${process.env.PUBLIC_URL}/pages/auths/auth-register`}>Create an account</Link>
              </div>
              <div className="text-center pt-4 pb-3">
                <h6 className="overline-title overline-title-sap">
                  <span>OR</span>
                </h6>
              </div>
              <ul className="nav justify-center gx-4">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#socials"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    Facebook
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#socials"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    Google
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Login;
