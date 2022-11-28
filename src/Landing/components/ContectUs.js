import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import ContectUsSvg from "../assets/img/svg/aaa.svg";
import useUserMode from "../../zustand/userMode/userMode";

function ContectUs() {
	const { createFeedBack } = useUserMode((state) => ({
		createFeedBack: state.createFeedBack,
	}));
	const onFormSubmit = async (formData) => {
		await createFeedBack(formData);
	};
	const { handleSubmit, register } = useForm();
	return (
		// TODO : Not Con to Back End
		<section className="bg-light">
			<NavBar />
			<section className="wrapper bg-dark text-white">
				<div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
					<div className="row">
						<div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
							<h1 className="display-1 text-white mb-3">Get in Touch</h1>
							<p className="lead px-xl-10 px-xxl-10">
								Have any questions? Reach out to us from our contact form and we will get back to you shortly.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="wrapper bg-light">
				<div className="container pb-14 pb-md-16">
					<div className="row">
						<div className="col mt-n19 mb-16">
							<div className="card shadow-lg">
								<div className="row gx-0">
									<div className="col-lg-6">
										<img src={ContectUsSvg} alt="" />
									</div>
									<div className="col-lg-6">
										<div className="p-10 p-md-11 p-lg-13">
											<h2 className="display-4 mb-3">Let’s Talk</h2>
											<p className="lead fs-lg">
												Let's make something great together. We are trusted by over 5000+ clients. Join them by using our
												services and grow your business.
											</p>
											<p>
												We are humans, we can make mistakes, but that does not mean that it cannot be rectified again, you can
												raise your complaint here. We will definitely bring a solution for it and will send it to you.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-10 mx-auto">
							<div className="row gy-10 gx-lg-8 gx-xl-12">
								<div className="col-lg-8">
									<Form className="contact-form needs-validation" onSubmit={handleSubmit(onFormSubmit)}>
										<div className="messages"></div>
										<div className="row gx-4">
											<div className="col-md-6">
												<div className="form-floating mb-4">
													<input
														id="form_name"
														type="text"
														name="name"
														className="form-control"
														placeholder="Name"
														ref={register({ required: "This field is required" })}
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-floating mb-4">
													<input
														id="form_email"
														type="email"
														name="email"
														ref={register({ required: "This field is required" })}
														className="form-control"
														placeholder="Email"
													/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-floating mb-4">
													<textarea
														id="form_message"
														name="message"
														className="form-control"
														ref={register({ required: "This field is required" })}
														placeholder="Your message"
													></textarea>
												</div>
											</div>
											<div className="col-12">
												<input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Send message" />
											</div>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</section>
	);
}

export default ContectUs;
