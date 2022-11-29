import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockDes, BlockHead, BlockHeadContent, BlockTitle, PreviewCard } from "../../components/Component";

const Terms = ({ ...props }) => {
	return (
		<React.Fragment>
			<Head title="Terms &amp; Conditions" />
			<Content>
				<div className="content-page wide-md m-auto">
					<BlockHead size="lg" wide="xs" className="mx-auto">
						<BlockHeadContent className="text-center">
							<BlockTitle tag="h2" className="fw-normal">
								Terms &amp; Policy
							</BlockTitle>
							<BlockDes>
								<p className="lead">
									We are on a mission to make the web a better place. The following terms, as well as our Policy and Terms of
									Service, apply to all users.
								</p>
								<p className="text-soft ff-italic">Last Update: Dec 2, 2022</p>
							</BlockDes>
						</BlockHeadContent>
					</BlockHead>
					<Block>
						<PreviewCard className="card-bordered">
							<div className="entry">
								<h3>Terms and Conditions</h3>
								<p>
									ShorterMe, Inc. (“ShorterMe,” “we” or “our”) provides URL shortening, custom-branded link, and link management and
									analytics products and services to its users (collectively, the “ShorterMe Services”). Please read these Terms of
									Service (the “Agreement”) carefully, as they govern your access to and use of the ShorterMe Services and
									constitutes a binding legal agreement between you and ShorterMe. If you accept this Agreement or use the ShorterMe
									Services on behalf of a company or other legal entity, you represent and warrant that you have the authority to
									bind that company or other legal entity to the Agreement and, in such event, “you”, “your” and “Customer” will
									refer and apply to that company or other legal entity. If you have been granted access to and use of the ShorterMe
									Services by and on behalf of the primary account holder, whether directly or through an administrator, you also
									agree to abide by this Agreement. In addition to this Agreement, Customer’s use of the ShorterMe Services is
									governed by the ShorterMe Privacy Policy and ShorterMe’s DMCA Copyright Policy.
								</p>
								<strong>
									YOU ACKNOWLEDGE AND AGREE THAT, BY CREATING A SHORTERME ACCOUNT, PURCHASING A PAID ACCOUNT, OR ACCESSING OR USING
									THE SHORTERME SERVICES, YOU ARE INDICATING THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THESE TERMS. IF
									YOU DO NOT AGREE TO THESE TERMS, THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE SHORTERME SERVICES. THIS AGREEMENT
									CONTAINS AN ARBITRATION PROVISION AND CLASS ACTION WAIVER AS DESCRIBED IN THE ARBITRATION SECTION BELOW. YOU AGREE
									THAT DISPUTES BETWEEN US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION, AND YOU ARE WAIVING YOUR RIGHT TO A
									TRIAL BY JURY OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION OR REPRESENTATIVE
									PROCEEDING
								</strong>
								<h4>SCOPE & MODIFICATIONS</h4>
								<h6>Modifications.</h6>
								<p>
									{" "}
									ShorterMe reserves the right, in its sole discretion, to modify or replace this Agreement at any time. If we
									modify these Terms, we will post the modification on our site or provide you with notice of the modification on
									your ShorterMe Account Details page. By continuing to access or use the ShorterMe Services after the effective
									date of the modification, you are indicating that you agree to be bound by the modified Agreement. Customer agrees
									that it is Customer’s responsibility to check this Agreement periodically for changes and that its use of the
									ShorterMe Services following the posting of any changes to this Agreement constitutes acceptance of those changes.
									If the modified Agreement is not acceptable to you, your only recourse is to cease using the ShorterMe Services.
								</p>
								<h6>Scope & Current Offerings.</h6>
								<p>
									As of the Effective Date, ShorterMe offers certain ShorterMe Services to Customer. ShorterMe may add, remove,
									suspend, discontinue, modify or update the ShorterMe Services at any time, at its discretion. After the effective
									date of such update, ShorterMe shall bear no obligation to run, provide or support legacy versions of the
									ShorterMe Services.
								</p>
								<h6>Support, Uptime & Training</h6>
								<p>
									The training and level of customer support for the tier of ShorterMe Services you purchase is set forth on the
									ShorterMe Services pricing page.
								</p>
								<h4>PAID ACCOUNTS</h4>
								<h6>Fees</h6>
								<p>
									ShorterMe offers fee-based ShorterMe Services that provide additional features and functionality. Pricing and
									services for paid accounts are described on ShorterMe’s Services pricing page and may be updated from time to
									time. If you sign up for a paid account, you agree to pay ShorterMe all applicable fees for the tier of ShorterMe
									Services according to your selection. Fees are non-refundable except as required by law or as otherwise
									specifically permitted in this Agreement
								</p>
								<h6>Payment</h6>
								<p>
									Customer will pay ShorterMe invoices on the payment interval selected. If not otherwise specified, payments will
									be due immediately. Customer authorizes ShorterMe to charge Customer for all applicable Fees using Customer’s
									selected payment method through ShorterMe’s online payments platform. Customer will provide complete and accurate
									billing and contact information to ShorterMe. ShorterMe may suspend or terminate the Services if Fees are past
									due. Unpaid Fees are subject to a finance charge of one percent (1.5%) per month (18% per annum), or the maximum
									permitted by law, whichever is lower, plus all expenses of collection, including reasonable attorneys’ fees.
								</p>
								<h6>Taxes</h6>
								<p>
									Fees are exclusive of taxes, duties, levies, tariffs, and other governmental charges (collectively, “Taxes”), and
									Customer is responsible for all Taxes resulting from this Agreement or Customer’s use of the ShorterMe Services.
									ShorterMe will invoice Customer for Taxes when required to do so by applicable law, and Customer agrees to provide
									payment under the terms of the invoice. In the event Customer is required by law to deduct and withhold any Taxes
									on amounts payable under this Agreement, any amounts required to be withheld will be promptly deducted and timely
									remitted by the Customer on behalf of ShorterMe to the appropriate taxation authority and Customer agrees that it
									will provide ShorterMe with copies of all necessary documents (including but not limited to tax receipts received
									from the applicable tax authority) in order for ShorterMe to claim and receive a foreign tax credit in an amount
									corresponding to the amount withheld by the Customer.
								</p>
								<h6>Downgrades</h6>
								<p>
									ShorterMe reserves the right to downgrade, suspend or terminate Customer’s access to any or all ShorterMe Services
									if Fees are past due.
								</p>
								<h4>LICENSE, METRICS AND COMPLIANCE</h4>
								<h6>License to ShorterMe Services</h6>
								<p>
									{" "}
									Subject to the terms and conditions of this Agreement and payment of all Fees due hereunder, ShorterMe grants
									Customer, and any other party agreed in an Order Form, a limited, revocable, non-exclusive, non-sublicensable,
									non-transferable right and license to use the ShorterMe Services solely to shorten uniform resource locators
									(“URL”), receive certain ShorterMe Link Metrics (defined in ShorterMe’s Privacy Policy) and, for Enterprise Plan
									Customers, to utilize the other products and services defined on the applicable Order Form during the Term
								</p>
								<h6>ShorterMe Link Metrics</h6>
								<p>
									As part of the provision of ShorterMe Services, ShorterMe collects and generates ShorterMe Link Metrics, which are
									described in ShorterMe’s Privacy Policy. Certain, limited ShorterMe Link Metrics are published on ShorterMe’s
									website. Customer acknowledges and agrees that all ShorterMe Link Metrics are owned by ShorterMe, and that
									ShorterMe has the right to use, license, sell or otherwise dispose of ShorterMe Link Metrics as detailed in
									ShorterMe’s Privacy Policy. ShorterMe does not make all ShorterMe Link Metrics available to Customer. Customer may
									access, use, and copy the limited ShorterMe Link Metrics we make available to Customer according to the Customer’s
									service tier. Customer may not combine any ShorterMe Link Metrics with any personally identifiable information and
									may not sublicense, sell, syndicate or otherwise share ShorterMe Link Metrics with any third party.
								</p>
								<h6>Compliance Monitoring</h6>
								<p>
									ShorterMe may monitor Customer’s use of the ShorterMe Services for compliance with the Agreement. If ShorterMe
									observes usage of the ShorterMe Services that it believes are not in compliance with the Agreement, ShorterMe will
									notify the Customer and give the Customer five (5) business days to remedy its non-compliance. If Customer does
									not remedy its non-compliance within five (5) business days, ShorterMe reserves the right to suspend or terminate
									Customer’s use of the ShorterMe Services. ShorterMe reserves the right to suspend Customer’s use of the ShorterMe
									Services without notice in the event that it believes, in good faith, the security of Customer’s ShorterMe account
									has been compromised, or the Customer’s ShorterMe account is being used for an unlawful purpose. And may suspend
									or terminate Customer’s access to the Services without notice for violation of the Agreement.
								</p>
								<h4>INTELLECTUAL PROPERTY & LICENSE RESTRICTIONS</h4>
								<h6>Ownership</h6>
								<p>
									Except for any Customer Content or Customer Services, Customer acknowledges and agrees that ShorterMe is the sole
									and exclusive owner of all right, title and interest in and to the ShorterMe Services and ShorterMe Link Metrics
									and all related documentation, source code, tools, scripts, processes, techniques, methodologies, inventions,
									know-how, concepts, formatting, arrangements, visual attributes, ideas, database rights, copyrights, patents,
									trade secrets, and other intellectual property, and all derivatives, enhancements, modifications and improvements
									thereof (“ShorterMe Materials”). Nothing in this Agreement or any other document shall be deemed to transfer
									ownership of the ShorterMe Materials. Except for the limited license rights expressly granted herein, no rights to
									ShorterMe Materials are granted hereunder and all rights in such ShorterMe Materials are reserved.
								</p>
								<h6>Feedback</h6>
								<p>
									Customer is not required to provide any suggestions, enhancement requests, recommendations or other feedback
									regarding the ShorterMe Services or ShorterMe Link Metrics (“Feedback”). However, if Customer does so, all right,
									title and interest in and to such Feedback shall be assigned to, and shall become the sole and exclusive property
									of, ShorterMe upon its creation
								</p>
								<h6>License Restrictions</h6>
								<p>
									Customer shall not share access credentials to exceed the user limitations of the service tier Customer has
									purchased. Customer and its Personnel shall not, and shall not permit any third party to: (i) access the Services
									or export data from the Services to create a service, software, documentation or data for a URL shortening service
									other than ShorterMe or create shortened links or a service that is competitive with, substantially similar or
									confusingly similar to any aspect of the ShorterMe Services or ShorterMe Link Metrics; (ii) use, modify, display,
									perform, copy, disclose or create derivative works of the ShorterMe Services except as expressly permitted herein;
									(iii) reverse engineer, decompile, disassemble, mimic, screen-scrape, frame or mirror the ShorterMe Services or
									ShorterMe Link Metrics, or use any other means to attempt to discover their source code except as expressly
									permitted herein; (iv) benchmark, encumber, distribute, sublicense, assign, share, sell, rent, lease, pledge or
									otherwise transfer the ShorterMe Services or ShorterMe Link Metrics to any third party; (v) transmit harmful,
									disabling or malicious code or devices, or infringing, defamatory, unlawful, tortious, deceptive, misleading,
									fraudulent, abusive, indecent or otherwise offensive content, or content that contains someone’s personal
									information or violates a third party’s intellectual property, privacy or publicity rights (“Prohibited Content”)
									through the ShorterMe Services; (vi) access via automated or unauthorized means, interfere with, disrupt or
									attempt to monitor, override access or circumvent security measures for, the ShorterMe Services or ShorterMe Link
									Metrics or related systems, including via robots, spiders and other electronic methods; and (vii) obscure, remove
									or alter any proprietary rights or other notices on the ShorterMe Services or ShorterMe Link Metrics.
									Notwithstanding anything to the contrary herein, ShorterMe may, in its sole discretion, immediately revoke the
									grant of rights set forth in Section 3 if Customer breaches or threatens to breach the restrictions in this
									Section or creates other security or legal concerns. Customer hereby agrees that ShorterMe will be entitled, in
									addition to any other remedies available to it at law or in equity, to injunctive relief to prevent the breach or
									threatened breach of Customer’s obligations under this Section, without any requirement to demonstrate irreparable
									harm or post a bond.
								</p>
								<h6>Technical Restrictions</h6>
								<p>
									Customer shall not exceed the number and/or frequency of API calls, concurrent URL shortens or other access to or
									use of ShorterMe Services in the relevant documentation or as otherwise provided by ShorterMe in an Order Form. If
									ShorterMe believes that Customer has attempted to exceed or circumvent these limitations, ShorterMe may suspend or
									block Customer’s access to the ShorterMe Services. ShorterMe may monitor Customer’s use of the ShorterMe Services,
									including to ensure Customer’s compliance with this Agreement.
								</p>
								<h6>Open Source Software</h6>
								<p>
									ShorterMe Services may incorporate software that is subject to terms that, as a condition of use, copying,
									modification or redistribution, require such software and derivative works thereof to be disclosed or distributed
									in source code form, to be licensed for the purpose of making derivative works, or to be redistributed free of
									charge (“Open Source Software”). To the extent any Open Source Software license terms are inconsistent with this
									Agreement, then such rights in the applicable Open Source Software license shall take precedence over the rights
									granted in this Agreement, but solely with respect to such Open Source Software. Any applicable Open Source
									Software license is solely between Customer and the applicable licensor of the Open Source Software and Customer
									shall comply with the applicable Open Source Software license.
								</p>
								<h6>Third Party Materials</h6>
								<p>
									ShorterMe Services may utilize third party software or source code, including without limitation Open Source
									Software (“Third Party Materials”). ShorterMe has no control over Third Party Materials. Accordingly, ShorterMe is
									not responsible or liable for any Third Party Materials. While ShorterMe has no obligation to monitor Third Party
									Materials, ShorterMe may remove or modify such Third Party Materials in its discretion, including without
									limitation to comply with Law. Customer agrees to comply with all terms and conditions and privacy policies
									related to any Third Party Materials.
								</p>
								<h6>Trademarks</h6>
								<p>
									{" "}
									ShorterMe grants Customer a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to
									access and use ShorterMe’s names, logos, designs, and other trademarks incorporated into the ShorterMe Services
									(“ShorterMe Marks”) during the Term and solely for the purposes of displaying such notice as part of the ShorterMe
									Services. Customer recognizes the validity of the ShorterMe Marks and ShorterMe’s ownership and title thereto. Any
									goodwill derived from the use of the ShorterMe Marks by Customer shall inure to the benefit ShorterMe. Customer
									will not challenge the ShorterMe Marks, or ShorterMe’s ownership and title thereto, or the USPTO application or
									registration thereof, either during or subsequent to the term of this Agreement. Customer shall execute such
									documents as may be reasonably requested by ShorterMe, or required by law, to establish ShorterMe’s sole and
									exclusive ownership and rights in the ShorterMe Marks, or to obtain registration thereof. Customer agrees to use
									the ShorterMe Marks consistent with ShorterMe’s Brand Assets it makes available at
									https://ShorterMe.com/pages/press, so as to protect and maintain the ShorterMe Marks and ShorterMe’s rights
									therein. To this end, ShorterMe shall have the right to revoke the license granted in this Section and/or to
									review and approve the manner of use of the ShorterMe Marks, and Customer agrees to modify the use of any
									ShorterMe Marks which do not meet ShorterMe’s standards. Notwithstanding the foregoing, Customer may not use any
									ShorterMe Marks in any manner implying any partnership with, sponsorship by, or endorsement by ShorterMe.
								</p>
								<h4>CUSTOMER SERVICES, CONTENT AND INFORMATION</h4>
								<h6>Customer Services</h6>
								<p>
									{" "}
									ShorterMe shall have no liability for any Customer product or service accessed through or making use of the
									ShorterMe Services or any end user, customer or Personnel’s use thereof (“Customer Service”). Customer shall not
									use the ShorterMe Services in any manner implying any partnership with, sponsorship by, or endorsement of the
									Customer Service by ShorterMe. Customer shall not suggest or imply that ShorterMe is the author of or otherwise
									responsible for the views or content of the Customer Service. The ShorterMe Services shall not be used in
									connection with any Prohibited Content, or any activities where the use or failure of the ShorterMe Services could
									lead to death, personal injury or property or environmental damage or adversely impact or impose liability on
									ShorterMe in any manner.
								</p>
								<h6>Customer Content</h6>
								<p>
									Customer hereby grants to ShorterMe an irrevocable, perpetual, non-exclusive, sublicensable, transferable,
									royalty-free, worldwide license, to use, copy, import, display, reproduce, perform, distribute, create derivative
									works, alter or modify all URLs and other information provided by Customer to ShorterMe (“Customer Content”) in
									connection with the provision, operation and promotion of the ShorterMe Services, creation of ShorterMe Link
									Metrics and for other business purposes. ShorterMe’s collection, use and sharing of personal information ShorterMe
									receives from Customer or third parties (including social media networks) is described ShorterMe’s Privacy Policy.
									As stated in our Privacy Policy, where permitted by law, if you register a ShorterMe Account with an email address
									on a domain owned by an organization, such as your employer, we may share your email address and information about
									your Account with our sales team and the business to explore the business’ interest in creating or managing an
									enterprise account or for related purposes.
								</p>
								<h4>ShorterMe DISCLAIMERS. </h4>
								<p>
									ShorterMe SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
									INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR
									A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE
									EXPRESSLY DISCLAIMED. ShorterMe DOES NOT WARRANT THAT: (I) THE ShorterMe SERVICES WILL BE SECURE OR AVAILABLE AT
									ANY PARTICULAR TIME OR LOCATION; (II) SHORTENED URLS, THE ShorterMe SERVICES AND ShorterMe LINK METRICS WILL BE
									ACCURATE, ERROR-FREE OR THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; (III) THE ShorterMe SERVICES ARE SECURE,
									FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; (IV) THE RESULTS OF USING THE ShorterMe SERVICES OR ShorterMe LINK
									METRICS WILL MEET CUSTOMER’S REQUIREMENTS OR ANY OF ITS OR ITS USERS’, PERSONNEL’S OR CUSTOMERS’ BUSINESS NEEDS;
									OR (V) THE ShorterMe SERVICES WILL BE UNINTERRUPTED OR THAT ANY INTERRUPTION WILL BE CORRECTED IN A TIMELY MANNER.
									CUSTOMERS USE OF THE ShorterMe SERVICES AND ShorterMe LINK METRICS IS SOLELY AT ITS OWN RISK. FURTHER, ShorterMe
									MAKES NO REPRESENTATIONS OR WARRANTIES AND SHALL ASSUME NO LIABILITY AMOUNTS OR INDEMNITY OBLIGATIONS WITH RESPECT
									TO ENSURING THAT CUSTOMER’S USE OF THE ShorterMe SERVICES AND ShorterMe LINK METRICS COMPLY WITH ANY LAWS OR
									REGULATIONS OUTSIDE THE UNITED STATES AND CUSTOMER SHALL BE SOLELY LIABLE FOR SUCH COMPLIANCE. ShorterMe SHALL
									BEAR NO RESPONSIBILITY FOR THIRD PARTY PRODUCTS OR SERVICES (E.G., OPEN SOURCE SOFTWARE, SOCIAL MEDIA PLATFORMS,
									THIRD PARTY MATERIALS OR FOR HOST OR APP STORE PROVIDERS). CUSTOMER RECOGNIZES THAT THE FIGURES CONTAINED IN THE
									ShorterMe LINK METRICS PRODUCED HEREUNDER ARE ESTIMATES AND MAY BE SUBJECT TO STATISTICAL ERROR. ShorterMe DOES
									NOT WARRANT THAT THE ShorterMe LINK METRICS WILL BE COMPLETELY CORRECT, ACCURATE, TIMELY OR OTHERWISE RELIABLE.
									ShorterMe HEREBY DISCLAIMS ANY LIABILITY FOR ANY USE OR RELIANCE ON THE ShorterMe LINK METRICS BY CUSTOMER AND
									THIRD PARTIES.
								</p>
								<h4>Customer Indemnification.</h4>
								<p>
									{" "}
									Customer will defend, indemnify and hold harmless ShorterMe, its parents, subsidiaries, affiliates and their
									employees, officers, directors, representatives, contractors, customers, business partners, successors and assigns
									(“ShorterMe Indemnitees”) from and against any third party claims and actions, and resulting damages, liabilities
									and costs (including reasonable attorneys’ fees and expenses) incurred by ShorterMe Indemnitees arising out of or
									directly or indirectly related to (a) the Customer Content, Customer Services or any other Customer products and
									services; (b) Customer’s acts and omissions hereunder, breach of this Agreement, or violation of Laws; and/or (c)
									any allegation of intellectual property, privacy or publicity infringement concerning Customer Content or Customer
									Services. ShorterMe shall promptly notify Customer of any claim for which it seeks indemnification; provided,
									however, that any delay in providing notification shall not vitiate Customer’s indemnification obligations unless
									Customer is materially prejudiced thereby. Customer shall have sole control over the defense of any claim under
									this Section, except that ShorterMe may approve any counsel used by Customer and that ShorterMe may participate in
									the defense, at Customer’s cost. All settlements of indemnification claims require the consent of ShorterMe.
								</p>
								<h4>TERM AND TERMINATION</h4>
								<h6>Agreement Term</h6>
								<p>
									This Agreement shall commence on the date the Customer accepts this Agreement by creating an account or purchasing
									a paid service tier (“Effective Date”) and remain in effect for the duration of the term selected by Customer,
									unless otherwise terminated as permitted herein (“Initial Term”). If your paid account is set to automatically
									renew, please see section 2(B) above for the auto-renewal terms.
								</p>
								<h6>Right to Terminate</h6>
								<p>
									ShorterMe may terminate this Agreement immediately in its discretion. Upon expiration or termination of this
									Agreement, all applicable rights and access granted to Customer shall automatically terminate and Customer and its
									Personnel shall cease any further use of the ShorterMe Services and return, or, if directed by ShorterMe, destroy,
									all Confidential Information of ShorterMe. Any Section of this Agreement which by its nature would survive such
									expiration or termination shall so survive.
								</p>
							</div>
						</PreviewCard>
					</Block>
				</div>
			</Content>
		</React.Fragment>
	);
};

export default Terms;
