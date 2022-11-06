import React, { useEffect, useState, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { BlockBetween, BlockDes, Block, BlockContent, BlockHead, BlockTitle, Icon } from "../../../components/Component";
import userPlan from "../../../zustand/plans/plan";
import Loader from "../../Loader/Loader";
import StripeCheckout from "react-stripe-checkout";

const PricingTable = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { plan } = userPlan((state) => ({
		plan: state.plan,
	}));

	const getAllPlan = useCallback(async () => {
		const data = await plan(setLoading);
		setData(data);
	}, [plan]);

	useEffect(() => {
		getAllPlan();
	}, [getAllPlan]);
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
											? data.map((item) => (
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

																<ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
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
																			<strong>{item.link_creating_limit}</strong> Link creating{" "}
																		</span>
																	</li>
																	{item.custom_domain ? (
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				<strong>{item.custom_domain_limit}</strong> Custom Domain{" "}
																			</span>
																		</li>
																	) : (
																		<li>
																			<Icon name="cross-fill-c" className="text-danger" />
																			<span>
																				<strong>{item.custom_domain_limit}</strong> Custom Domain{" "}
																			</span>
																		</li>
																	)}
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
																				<strong>{item.qr_link_limit}</strong> QR{" "}
																			</span>
																		</li>
																	) : (
																		<li>
																			<Icon name="cross-fill-c" className="text-danger" />
																			<span>
																				<strong>{item.qr_link_limit}</strong> QR{" "}
																			</span>
																		</li>
																	)}
																	{item.custom_link_redirect ? (
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				<strong>{item.custom_link_redirect_limit}</strong> Custom Link
																				Redirect{" "}
																			</span>
																		</li>
																	) : (
																		<li>
																			<Icon name="cross-fill-c" className="text-danger" />
																			<span>
																				<strong>{item.custom_link_redirect_limit}</strong> Custom Link
																				Redirect{" "}
																			</span>
																		</li>
																	)}
																</ul>
																<a href="/" class="btn btn-primary rounded-pill">
																	Choose Plan
																</a>
															</div>
														</div>
													</div>
											  ))
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
