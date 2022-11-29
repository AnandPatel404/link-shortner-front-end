const menu = [
	{
		heading: "Dashboard",
	},
	{
		icon: "home-alt",
		text: "Home",
		link: "/",
	},
	{
		icon: "tranx",
		text: "Transaction",
		link: "/transaction-list",
	},

	{
		heading: "Link Work",
	},
	{
		text: "All links",
		link: "/all-links",
		icon: "link",
	},
	{
		icon: "qr",
		text: "QR list",
		link: "/qr-list",
	},
	{
		icon: "puzzle",
		text: "Create link",
		link: "/create-full-link",
	},

	{
		heading: "Api & Plan",
	},

	{
		icon: "sign-mxn",
		text: "Pricing",
		link: "/pricing-table",
	},
	{
		icon: "link-group",
		text: "Api credentials",
		link: "/api-credentials",
	},
	{
		icon: "book",
		text: "Api docs",
		link: "/api-credentials",
	},

	{
		heading: "Pre-built Pages",
	},
	{
		icon: "file-docs",
		text: "Invoice",
		active: false,
		subMenu: [
			{
				text: "Invoice List",
				link: "/invoice-list",
			},
			{
				text: "Invoice Details",
				link: "/invoice-details/1",
			},
		],
	},

	{
		icon: "files",
		text: "Other Pages",
		active: false,
		subMenu: [
			{
				text: "Blank / Startup",
				link: "/_blank",
			},
			{
				text: "Faqs / Help",
				link: "/pages/faq",
			},
			{
				text: "Terms / Policy",
				link: "/pages/terms-policy",
			},
			{
				text: "Regular Page - v1",
				link: "/pages/regular-v1",
			},
			{
				text: "Regular Page - v2",
				link: "/pages/regular-v2",
			},
		],
	},
];
export default menu;
