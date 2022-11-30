import React, { useEffect, useState, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { BlockBetween, BlockDes, Block, BlockContent, BlockHead, BlockTitle, Icon, Button } from "../../../components/Component";
import userPlan from "../../../zustand/plans/plan";
import Loader from "../../Loader/Loader";
import userPayment from "../../../zustand/payment/payment";
import userStore from "../../../zustand/userStore/userStore";
import Swal from "sweetalert2";
import Logo from "../../../images/logo.svg";

const PricingTable = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { plan } = userPlan((state) => ({
		plan: state.plan,
	}));
	const { createOrderOfRazorPay } = userPayment((state) => ({
		createOrderOfRazorPay: state.createOrderOfRazorPay,
	}));
	const userData = userStore((state) => state.user);
	const getAllPlan = useCallback(async () => {
		const data = await plan(setLoading);
		setData(data);
	}, [plan]);

	useEffect(() => {
		getAllPlan();
	}, [getAllPlan]);

	const choosePlan = async (id, planName) => {
		if (planName === "free") {
			return Swal.fire("Error", "This plan is not valid", "error");
		}

		const data = await createOrderOfRazorPay(id);
		const options = {
			key: process.env.RAZORPAYKEYID,
			amount: data.amount,
			currency: data.currency,
			name: planName,
			description: "Buy ShorterMe Plan And Subscription",
			image: Logo,
			order_id: data.id,
			// TODO: this is change in development
			callback_url: `http://localhost:8000/v1/payment/RazorPay/paymentVerification/${id}`,
			prefill: {
				name: userData.name,
				email: userData.email,
				contact: userData.number,
			},
			notes: {
				address: "Razorpay Corporate Office",
			},
			theme: {
				color: "#f4bd0e",
			},
		};
		const rzp1 = new window.Razorpay(options);

		rzp1.open();
	};

	return (
		<React.Fragment>
			<Head title="Pricing Table"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween className="g-3">
						<BlockContent>
							<BlockTitle>Pricing</BlockTitle>
							<BlockDes className="text-soft">
								<p>Choose your pricing plan and start enjoying our service.</p>
							</BlockDes>
						</BlockContent>
					</BlockBetween>
				</BlockHead>
				{loading ? (
					<Loader />
				) : (
					<Block size="lg">
						<section class="wrapper">
							<div class="container py-14 py-md-16">
								<div class="pricing-wrapper">
									<div class="row gx-2 gy-6 mt-2">
										{data.length > 0
											? data.map((item) =>
													item.plan_name !== "free" ? (
														<div class="col-md-6 col-lg-3" key={item.id}>
															<div class="pricing card shadow-lg">
																<div class="card-body">
																	<h4 class="card-title">{item.plan_name}</h4>
																	<div class="prices text-dark">
																		<div class="price price-show justify-content-start">
																			<span class="price-currency">$</span>
																			<span class="price-value">{item.plan_price}</span>{" "}
																			<span class="price-duration"> {item.validity} days</span>
																		</div>
																	</div>

																	<ul className="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				{" "}
																				7/24 <strong>Support</strong>
																			</span>
																		</li>
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				<strong>{item.link_creating_limit}</strong> Link creating Limit{" "}
																			</span>
																		</li>
																		{item.api_webhook ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>{item.api_webhook_limit}</strong> Api Hit per Day{" "}
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>{item.api_webhook_limit}</strong> Api Hit per Day{" "}
																				</span>
																			</li>
																		)}
																		{item.qr_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>QR Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>QR Link</strong>
																				</span>
																			</li>
																		)}
																		{item.user_analytics ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>User Analytics</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>User Analytics</strong>
																				</span>
																			</li>
																		)}
																		{item.password_protected_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Password Protected Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Password Protected Link</strong>
																				</span>
																			</li>
																		)}
																		{item.custom_domain ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Custom Domain</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Custom Domain</strong>
																				</span>
																			</li>
																		)}
																		{item.unique_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Unique Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Unique Link</strong>
																				</span>
																			</li>
																		)}
																		{item.limited_click_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Limited Click Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Limited Click Link</strong>
																				</span>
																			</li>
																		)}
																		{item.expiration_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Expiration Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Expiration Link</strong>
																				</span>
																			</li>
																		)}
																		{item.device_targeting_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Device Targeting Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Device Targeting Link</strong>
																				</span>
																			</li>
																		)}
																		{item.browser_targeting_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Browser Targeting Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Browser Targeting Link</strong>
																				</span>
																			</li>
																		)}
																		{item.unique_branded_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Unique Branded Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Unique Branded Link</strong>
																				</span>
																			</li>
																		)}
																		{item.custom_qr_link ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Custom QR Link</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Custom QR Link</strong>
																				</span>
																			</li>
																		)}
																		{item.custom_link_redirection_page ? (
																			<li>
																				<Icon name="check-fill-c" className="text-yellow" />
																				<span>
																					<strong>Custom Link Redirection Page</strong>
																				</span>
																			</li>
																		) : (
																			<li>
																				<Icon name="cross-fill-c" className="text-danger" />
																				<span>
																					<strong>Custom Link Redirection Page</strong>
																				</span>
																			</li>
																		)}
																	</ul>
																	<Button
																		className="btn btn-primary rounded-pill"
																		type="button"
																		onClick={() => {
																			choosePlan(item.id, item.plan_name);
																		}}
																	>
																		Choose Plan
																	</Button>
																</div>
															</div>
														</div>
													) : (
														""
													)
											  )
											: null}
									</div>
								</div>
							</div>
						</section>
					</Block>
				)}
			</Content>
		</React.Fragment>
	);
};

export default PricingTable;
