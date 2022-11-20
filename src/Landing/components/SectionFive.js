import React from "react";
import { Link } from "react-router-dom";
import a from "../assets/img/svg/youtube.svg";
function SectionFive() {
	return (
		<div>
			<section className="wrapper">
				<div className="container pt-md-14 text-center">
					<div className="row">
						<div className="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13">
							<h3 className="mb-4">See Our Link Solution's Tutorials For Stay On Top Of Your Business.</h3>
							<hr />
							<p className=" px-xl-12 px-xxl-6 mb-7">
								Easily Achieve Your Saving Goals And Grow Your Business From Our Link Solution For More Information Click To This
								Button
							</p>
							<div className="d-flex justify-content-center mt-10">
								<Link className="btn btn-primary rounded mx-1" to="/">
									See Our Link Solution's Tutorials
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="container">
				<div className="row mb-16 mt-10 mb-mb-20">
					<div className="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n20">
						<img className="img-fluid mx-auto" src={a} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionFive;
