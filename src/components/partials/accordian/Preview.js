import React, { useState } from "react";
import { Collapse } from "reactstrap";

const Accordion = ({ className, variation, ...props }) => {
	const [isOpen, setIsOpen] = useState("1");

	const toggleCollapse = (param) => {
		if (param === isOpen) {
			setIsOpen("0");
		} else {
			setIsOpen(param);
		}
	};

	return (
		<div className={[`accordion${variation ? " accordion-s" + variation : ""}${className ? " " + className : ""}`]}>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "1" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("1")}>
					<h6 className="title">Scope</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "1" ? true : false}>
					<div className="accordion-inner">
						<p>
							This Privacy Policy explains how ShorterMe treats the personal information it gathers when you use or access{" "}
							<a href="https://shorterme.in">shorterme.in</a>(the “Site”) or the services, features, content or applications offered by
							ShorterMe (collectively with the Site, the “Services”), or when you view or interact with a ShorterMe link (either our
							bit.ly links or one of our branded domains). This Privacy Policy also covers ShorterMe’s treatment of any information
							about you that ShorterMe’s customers share with ShorterMe.
						</p>
						<p>
							This Privacy Policy does not apply to the practices of other businesses that ShorterMe does not own or control, including
							other companies’ websites, services and applications (“Third Party Services”) that you can access through the Services or
							to individuals that ShorterMe does not manage or employ. We cannot take responsibility for the content or privacy policies
							of Third Party Services. We encourage you to review the privacy policies of any Third Party Services you access or use.
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "2" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("2")}>
					<h6 className="title">Information We Collect</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "2" ? true : false}>
					<div className="accordion-inner">
						<p>
							ShorterMe may collect personal information about you from the following sources, as described in this Privacy Policy, when
							you (i) register for the Site and the Services, through your user account with ShorterMe, including registering through a
							third-party social networking service (your “Account”); (ii) use the Services; or (iii) view or interact with a ShorterMe
							link (either our bit.ly links or one of our branded domains) on a third-party website. We collect the following types of
							information from you, some of which might be considered personal information under applicable law.
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "3" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("3")}>
					<h6 className="title">When You Register for a ShorterMe Account</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "3" ? true : false}>
					<div className="accordion-inner">
						<p>
							When you create an Account, we may collect personal information from you, such as your name, phone number, company name,
							industry, job title, company size, email address, and sign-in information. If you create an Account using your login
							information from a third-party account, such as Google, Facebook, Apple, or Twitter, we will access and collect the
							personal information about you that the third-party account provides (which is based on your privacy settings with the
							third-party account), so that you can log into your Account with us. We use your contact information to send you
							information about our Services and communicate with you about your Account, your activities on our Site and Services and
							policy changes. You may unsubscribe from receiving certain types of these messages through your Account settings, although
							ShorterMe reserves the right to contact you when we believe it is necessary, such as for administrative and account
							management purposes.
						</p>
						<p>
							Some features of the Services allow registered users to provide their own content to the Services, such as written
							descriptions of URLs, comments, images and video. Unless you request deletion of your personal information as described in
							this Privacy Policy, all content submitted by you to the Services may be retained by ShorterMe, even after you terminate
							your Account and may continue to be shared by third parties, as described in this Privacy Policy.
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "4" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("4")}>
					<h6 className="title">When You Create a ShorterMe Link</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "4" ? true : false}>
					<div className="accordion-inner">
						<p>
							One feature of the Services is the ability to create shortened uniform resource locators (URLs) of websites (“ShorterMe
							Links” or “Bitlinks”). Users can create ShorterMe Links without registering for an account. When you create a ShorterMe
							Link, ShorterMe collects and stores both the original URL and the shortened URL and, if you are logged in to your Account,
							we will associate that information with your Account. ShorterMe also collects and stores your IP address, your geolocation
							data (which we derive from your IP address), the time and date on which you shortened the original URL, and if you share a
							ShorterMe Link on a social networking platform, the name of the platform and your username on that platform.
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "5" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("5")}>
					<h6 className="title">When You Interact With a ShorterMe Link</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "5" ? true : false}>
					<div className="accordion-inner">
						<p>
							ShorterMe automatically collects personal information about the interaction (such as clicks or views) with every ShorterMe
							Link created through the Services (either our bit.ly links or one of our branded domains) on a third-party website. This
							information includes, but is not limited to: (i) the IP address and location derived from the IP address; (ii) internet or
							other electronic network activity information like the referring websites or services; (iii) the time and date of each
							access; (iv) device settings, such as browser type, operating system, and language; (v) cookies, as described below, and
							mobile advertising identiﬁers and (v) information about sharing of the ShorterMe Link on Third Party Services
							(collectively, “ShorterMe Link Metrics”). As described in this policy, we use ShorterMe Link Metrics to provide the
							Services, to understand and analyze how our Services are used and to identify trends, and to detect, deter and prevent
							malicious, fraudulent or unlawful activity. Please see the “Information We May Share” section of this Privacy Policy for a
							description of how we may share information we collect when you create, view or interact with ShorterMe Links.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "6" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("6")}>
					<h6 className="title">Other Information We Automatically Collect</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "6" ? true : false}>
					<div className="accordion-inner">
						<p>
							When you visit the Site, we automatically collect (i) your IP address and location derived from the IP address; (ii)
							internet or other electronic network activity information, like the referring websites or services; (iii) the time and
							date of each access; (iv) device settings, such as browser type, operating system, and language; and (v) cookie
							information. This type of data enables us and third parties authorized by us to ﬁgure out how often individuals use parts
							of the Site so that we can analyze and improve them.
						</p>
						<p>We may receive a conﬁrmation when you open an email from us. We use this conﬁrmation to improve our customer service.</p>
						<p>ShorterMe may use third-party APIs and software development kits (“SDKs”) to provide certain functions in our Services.</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "7" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("7")}>
					<h6 className="title">Third Party Services</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "7" ? true : false}>
					<div className="accordion-inner">
						<p>
							Some features of the Services allow you to share your content and ShorterMe Links through your accounts with Third Party
							Services such as Twitter. If you choose to connect ShorterMe to such Third Party Services, we may collect information
							related to your use of those Third Party Services, such as authentication tokens that allow us to connect to your Third
							Party Service accounts. We will ask you for permission before you authorize our collection of this information. We will
							only use that information for the speciﬁc reason for which it was provided to us. We may also collect information about
							how you are using the Services to interact with those connected Third Party Services. Note that Third Party Services may
							have the ability to restrict the information that is provided to us based on your privacy settings of that account.
						</p>
						<p>
							To enable us to infer the location from the IP addresses of computers or devices that visit our website or click, view or
							interact with ShorterMe links as described in this policy, we receive IP-derived location information from our third-party
							service provider. We also receive business contact information of our business customer contacts and prospects from our
							third party service provider.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "8" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("8")}>
					<h6 className="title">Cookies and Other Similar Technologies</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "8" ? true : false}>
					<div className="accordion-inner">
						<p>
							ShorterMe and its partners use cookies or similar technologies to analyze trends, administer the website, track users’
							movements around the website, and to gather demographic information about our user base as a whole.
						</p>
						<p>
							Cookies are pieces of text that may be provided to your computer through your web browser when you access a website. Your
							browser stores cookies in a manner associated with each website you visit. We use cookies to enable our servers to
							recognize your web browser and tell us how and when you visit our Site and use the Services through the web.
						</p>
						<p>
							ShorterMe cookies also allow ShorterMe to track when you have clicked on a ShorterMe Link. Each click of a ShorterMe Link
							is tracked using a unique identiﬁer assigned to you in one or more cookies stored by your web browser and associated with
							ShorterMe. We may associate the unique identiﬁer in our cookies with the other information we automatically collect when
							you use the Services, as described above, including your IP address, ShorterMe Links you click, ShorterMe Links you
							create, and information with your Account if you have one.
						</p>
						<p>
							Most browsers have an option for turning off the cookie feature, which will prevent your browser from accepting new
							cookies, as well as (depending on the sophistication of your browser software) allowing you to decide on acceptance of
							each new cookie in a variety of ways. If you disable cookies, you will not be able to use some features of the Services.
							We do not currently recognize do-not-track signals.
						</p>
						<p>
							We partner with third parties to track utilization and behavior on the Site, and to manage our advertising on other
							websites. Our third-party partners may use cookies, web beacons, pixel tags or similar technologies in order to provide
							you advertising based upon your browsing activities and interests. If you wish to opt out of interest-based advertising
							click here (https://preferences-mgr.trustarc.com/) or if located in the European Union click here
							(https://www.youronlinechoices.eu/).
						</p>
						<p>
							This Privacy Policy covers the use of cookies by ShorterMe only and does not cover the use of cookies by any Third Party
							Services. ShorterMe does not control when or how third parties place cookies on your computer, such as when you visit a
							website through a ShorterMe Link. You can manage other companies’ cookies used for online advertising by visiting the
							Digital Advertising Alliance’s Consumer Choice Page (http://www.aboutads.info/choices/).
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "9" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("9")}>
					<h6 className="title">Opt-Out Mechanisms</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "9" ? true : false}>
					<div className="accordion-inner">
						<p>
							You may ask ShorterMe not to associate your web browser or IP address with visits to the ShorterMe.com website or
							ShorterMe Links that you create or click by clicking on the appropriate links below. If you would like to opt-out of the
							ShorterMe Links, please click on the opt-out choice for ShorterMe Links below. This will install a cookie on your browser
							that instructs our servers not to associate your IP address and browser with ShorterMe Links you create, click, or view.
							If you clear your cookies in your browser, you will need to click on the opt- out choice again after each time you clear
							your cookies. To be clear, these cookie-based opt-outs must be performed on each device and browser that you wish to have
							opted-out. Cookie-based opt-outs are not effective on mobile applications. However, on many mobile devices, application
							users may limit tracking via their device settings. Please note that if you use these opt-out mechanisms, we will still
							automatically collect the IP addresses of computers or mobile devices that click on or create ShorterMe Links; we just
							won’t associate them with your browser or ShorterMe account.
						</p>
						<p>
							Cookies on ShorterMe Links: Click Here<a href="https://shorterme.in">(shorterme.in)</a>
						</p>
						<p>
							Cookies on ShorterMe.com: Click Here <a href="https://shorterme.in">(shorterme.in)</a>
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "10" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("10")}>
					<h6 className="title">Note Regarding Children</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "10" ? true : false}>
					<div className="accordion-inner">
						<p>
							We do not knowingly collect personal information from children. If we learn that we have collected personal information of
							a child under 13 (or older as required by applicable law), we will take steps to delete such information from our ﬁles as
							soon as possible.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "11" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("11")}>
					<h6 className="title">How We Use Information</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "11" ? true : false}>
					<div className="accordion-inner">
						<p>We use the personal information we collect for a variety of administrative and business purposes to:</p>
						<p>operate our Site and provide the Services, process and complete any transactions, verify individual identity,</p>
						<p>
							respond to inquiries, questions and comments and provide customer and technical support, provide access to certain
							functionalities of our Services,
						</p>
						<p>
							communicate with our current and prospective customers concerning our services, measure interest and engagement in our
							Site and Services,
						</p>
						<p>monitor and analyze usage and trends of the Site and Services,</p>
						<p>
							provide services to our customers to allow them to understand how you interact with our Services and to help detect, deter
							and prevent malicious, fraudulent or unlawful activity,
						</p>
						<p>comply with any legal obligations, and</p>
						<p>enforce our terms and as otherwise described in this Privacy Policy.</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "12" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("12")}>
					<h6 className="title">Information We Collect</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "12" ? true : false}>
					<div className="accordion-inner">
						<p>
							We may use the information we collect to make inferences that a unique individual has created or interacted with ShorterMe
							links on different devices so that we can detect, deter and prevent malicious, fraudulent or unlawful activity and analyze
							how users use our Services. For example, if you created a ShorterMe link on a computer connected to your residential WiFi
							network, and you soon thereafter clicked on a ShorterMe link on a mobile device connected to the same WiFi network, we may
							infer that a single individual created and clicked on the ShorterMe links because both events were associated with the
							same IP address in the same time period.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "13" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("13")}>
					<h6 className="title">Other Legitimate Interests</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "13" ? true : false}>
					<div className="accordion-inner">
						<p>
							We also may use personal information to pursue legitimate interests, such as direct marketing, research (including
							marketing research), network and information security, prevention of fraudulent, malicious and unlawful activities, or any
							other purpose disclosed to you at the time you provide personal information or allowed by law.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "14" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("14")}>
					<h6 className="title">Information We Share</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "14" ? true : false}>
					<div className="accordion-inner">
						<p>
							The Services are designed to help you share information with others. In addition, we provide Services to our Customers
							that use ShorterMe Link Metrics. As a result, the following categories of personal information generated through your use
							of the Services are shared publicly or with the following categories of third parties for the business purposes described
							below.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "15" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("15")}>
					<h6 className="title">ShorterMe Links You Create</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "15" ? true : false}>
					<div className="accordion-inner">
						<p>
							Much of your activity on and through the Services is public by default. For example, when you create a ShorterMe Link, the
							original URLs you have shortened and the corresponding ShorterMe Links are publicly available.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "16" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("16")}>
					<h6 className="title">Account Information</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "16" ? true : false}>
					<div className="accordion-inner">
						<p>
							Where permitted by law, if you register a ShorterMe Account with an email address on a domain owned by an organization,
							(for example, an employer or educational institution where you have an email account), we may share your email address and
							information about your Account, such as the number of links you have created, with that organization to explore the
							organization’s interest in creating or managing an enterprise account or for related purposes.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "17" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("17")}>
					<h6 className="title">Information We Share With Customers</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "17" ? true : false}>
					<div className="accordion-inner">
						<p>
							We may share the personal information we collect as described in this Privacy Policy with our customers. When you create a
							ShorterMe Link of one of our customer’s sites, the customer may be able to view the unshortened original URL, the date and
							time the ShorterMe Link was created, the location where it was created as derived from your IP address, and aggregated
							information about clicks and views of the ShorterMe Links, including the number of times the ShorterMe Link was shared,
							whether or not it was viewed, comparison of that ShorterMe Link’s performance to that of all ShorterMe Links pointing to
							the same content, whether others are sharing a ShorterMe Link to the same content, geographic regions where the content is
							being viewed, and identiﬁcation of social networks on which the ShorterMe Links appear. In addition, we may share
							ShorterMe Link Metrics with customers to help them detect, deter and prevent malicious, fraudulent or unlawful activity.
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "18" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("18")}>
					<h6 className="title">Information Shared with Service Providers</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "18" ? true : false}>
					<div className="accordion-inner">
						<p>
							We may employ and contract with third parties to perform certain tasks on our behalf and under our direction (our “Service
							Providers”). We may need to share information about you with our Service Providers in order to fulfill certain business
							purposes, like providing our product with research and analytics on user behavior and providing advertising products and
							services to users, processing payments, and providing email marketing and support services. Our agreements with these
							Service Providers authorize them to use your information only as necessary to provide services to us. Transfers to
							subsequent third parties are covered by our agreements with our service providers.
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "19" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("19")}>
					<h6 className="title">Information Disclosed Pursuant to Business Transfers</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "19" ? true : false}>
					<div className="accordion-inner">
						<p>
							We may transfer and/or provide information about our users in connection with an acquisition, sale of company assets, or
							other situation where user information would be transferred as one of our business assets. You will be notiﬁed via email
							and/or a prominent notice on our website.
							<p>
								In such a case, the acquirer of ShorterMe may continue to use your information as set forth in this policy or as
								otherwise allowed by law.
							</p>
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "20" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("20")}>
					<h6 className="title">Information Disclosed for the Protection of ShorterMe and Others</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "20" ? true : false}>
					<div className="accordion-inner">
						<p>
							ShorterMe may access, read, preserve, and disclose any information it collects when it has a good faith belief that doing
							so is reasonably necessary to (i) comply with a law, regulation, or compulsory legal request, including process from a
							governmental law enforcement or national security agency, (ii) enforce the Privacy Policy or Terms of Service, including
							investigation of potential violations hereof, (iii) detect, deter, prevent or otherwise address malicious, fraudulent or
							unlawful activity, (iv) respond to user support requests, or (v) protect the rights, property or safety of ShorterMe, its
							users and the public. This includes exchanging information with other companies and organizations for protection from
							malicious, fraudulent or unlawful activity.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "21" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("21")}>
					<h6 className="title">Information We Share With Your Consent</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "21" ? true : false}>
					<div className="accordion-inner">
						<p>
							We will share information about you when you direct or otherwise instruct us to do so, such as when you share ShorterMe
							Links or content with others through the Services, if you intentionally use or direct us or the Services to interact with
							third parties, or if we notify you that the information you provide will be shared in a particular manner and you provide
							such information (like sharing/posting it with a third-party Service).
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "22" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("22")}>
					<h6 className="title">INTERNATIONAL TRANSFERS</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "22" ? true : false}>
					<div className="accordion-inner">
						<p>
							Depending on your location, information about you may be transferred to the United States or other countries outside the
							EU or European Economic Area (EEA) or may be processed there. These data transfers are necessary to provide you with the
							services outlined in this policy.
						</p>
						<p>
							To protect your personal data, we rely on appropriate legal basis for each data transfer. In particular, we use
							contractual safeguards such as Standard Contractual Clauses approved by the European Commission. Where applicable, we base
							data transfers also on adequacy decisions issued by the European Commission.
						</p>
						<p>Please feel free to contact us for further information about international data transfers.</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "23" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("23")}>
					<h6 className="title">Retention</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "23" ? true : false}>
					<div className="accordion-inner">
						<p>
							We retain the personal information we receive as described in this Privacy Policy for as long as you use our Services or
							as necessary to fulﬁll the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal
							defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, and comply with applicable legal
							obligations.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "24" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("24")}>
					<h6 className="title">Information Security</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "24" ? true : false}>
					<div className="accordion-inner">
						<p>
							Your Account information is protected by a password for your privacy and security. You can help prevent unauthorized
							access to your Account by selecting and protecting your password appropriately, making use of two-factor authentication,
							and limiting access to your computer and browser by signing off after you have ﬁnished accessing your Account.
						</p>
						<p>
							ShorterMe endeavors to protect the information it collects about its users using reasonable security processes and
							controls, however, despite these efforts, no security measure is perfect or impenetrable and ShorterMe does not guarantee
							or warrant that such measures will prevent unauthorized access to the information about you that is stored by ShorterMe.
							In the event we experience a breach of security, we will promptly notify you if your personal information has been
							compromised, in accordance with applicable law. If you have any questions about the security of your personal information,
							you can contact us at
							<a href="https://shorterme.in" target="_blank" rel="noreferrer">
								(shorterme.in)
							</a>
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "25" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("25")}>
					<h6 className="title">Choice and Access</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "25" ? true : false}>
					<div className="accordion-inner">
						<p>
							You don’t need an Account to create ShorterMe Links, and you can use many of the features of the Services without
							registering, thereby limiting the type of information that is collected about you individually. If you have a ShorterMe
							Account, you may access, correct, or request deletion of your personal information by logging into your Account. Once
							logged in to your account, you will be able to view a history of the URLs you have shortened and the metrics pages for
							those URLs. You can request a complete copy of the personal information we store about your account by clicking the button
							to request a report in your Account Settings. For more information on how to request access to your information, please
							see our help article.
						</p>
						<p>
							You can delete your Account at any time through your Account settings page. If you delete your Account, you will no longer
							be able to access or use the Services. If you have an Account but are unable to access it, you can contact us at
							privacy@ShorterMe.com. We will respond to your request within a reasonable timeframe. If you are a resident of the EEA or
							Switzerland, you have the right to ask that your personal data be corrected, updated, or erased. Additionally, you may
							have the right to access your personal data and receive a copy of your personal data undergoing processing. You may also
							have the right to object to, or request that we restrict, certain processing.
						</p>
						<p>
							For all other requests to exercise any of your rights, you may contact us as indicated in the “Questions” section below.
							Once we receive your request, we will ask that you verify your identity such as by authenticating through your account. If
							you do not have a ShorterMe account, ShorterMe has no way of identifying you or verifying that you created or clicked on a
							ShorterMe link.
						</p>
						<p>
							You may be entitled, in accordance with applicable law, to submit a request through an authorized agent. To designate an
							authorized agent to exercise your rights and choices on your behalf, please provide a written attestation, declaration, or
							permission that has either been physically signed or provided electronically per applicable law. In certain circumstances,
							we may be required by law to retain your personal information.
						</p>
						<p>
							Please note that in the interest of ensuring that existing ShorterMe Links continue to function for all of our users, the
							ShorterMe Links that you have created and shared cannot be deleted or disabled (even if your Account is deleted), and any
							shortening and sharing activity that has already occurred on your Account also cannot be deleted. If you have concerns
							about any unauthorized use of your Account, you can delete your account within your Account settings.
						</p>
						<p>Please see the Cookies section above for additional choices you may have.</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "27" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("27")}>
					<h6 className="title">Supervisory Authority</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "27" ? true : false}>
					<div className="accordion-inner">
						<p>
							If you are located in the European Economic Area, you have the right to lodge a complaint with a supervisory authority if
							you believe our Processing of your Personal Information violates applicable law.
						</p>
					</div>
				</Collapse>
			</div>
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "28" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("28")}>
					<h6 className="title">Changes to This Privacy Policy</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "28" ? true : false}>
					<div className="accordion-inner">
						<p>
							ShorterMe may amend this Privacy Policy from time to time. If we make material changes in the way we collect or use
							information, we will notify you by posting an announcement on the Services or sending you an email, and we will indicate
							when those changes will become effective. You are agreeing to be bound by any changes to the Privacy Policy when you use
							the Services after those changes become effective.
						</p>
					</div>
				</Collapse>
			</div>{" "}
			<div className="accordion-item">
				<div className={[`accordion-head${isOpen !== "29" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("29")}>
					<h6 className="title">Questions?</h6>
					<span className="accordion-icon"></span>
				</div>
				<Collapse className="accordion-body" isOpen={isOpen === "29" ? true : false}>
					<div className="accordion-inner">
						<p>
							If you have any questions or concerns regarding privacy using the Services, please send us a detailed message to:
							privacy@ShorterMe.com. We will make every effort to resolve your concerns.
						</p>
						<p>You may also contact us at DPT 5006, 601 W. 26th St., 3rd Floor, Suite 357, New York, NY 10001-1101.</p>
					</div>
				</Collapse>
			</div>
		</div>
	);
};

export default Accordion;
