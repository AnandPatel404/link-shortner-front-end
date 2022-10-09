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
		text: "All shorten links",
		link: "/all-shorten-links",
		icon: "link",
	},
	{
		icon: "view-col",
		text: "Pricing",
		link: "/pricing-table",
	},
	{
		icon: "sign-dollar",
		text: "Trans List",
		link: "/transaction-crypto",
	},
	{
		icon: "alert",
		text: "Error page",
		link: "/set-error-page",
	},

	// {
	// 	heading: "Api",
	// },
	// {
	// 	icon: "code",
	// 	text: "Api webhook",
	// 	active: false,
	// 	subMenu: [
	// 		{
	// 			text: "Project Cards",
	// 			link: "/project-card",
	// 		},
	// 		{
	// 			text: "Project List",
	// 			link: "/project-list",
	// 		},
	// 	],
	// },
	{
		heading: "Sort link pro",
	},
	{
		icon: "brick-fill",
		text: "Short with functionality",
		active: false,
		subMenu: [
			{
				icon: "puzzle-fill",
				text: "Create with custom domain",
				link: "/full-short",
			},
			// {
			// 	icon: "bulb-fill",
			// 	text: "Branded link",
			// 	link: "/full-short",
			// },
			// {
			// 	icon: "clock-fill",
			// 	text: "Schedule link",
			// 	link: "/full-short",
			// },
			// {
			// 	icon: "shuffle",
			// 	text: "link re-direction",
			// 	link: "/full-short",
			// },
		],
	},
	{
		heading: "QR-link",
	},
	{
		icon: "qr",
		text: "QR-link-generation",
		active: false,
		subMenu: [
			{
				icon: "scan",
				text: "Generate QR",
				link: "/project-card",
			},
			{
				icon: "notes-alt",
				text: "QR List",
				link: "/project-list",
			},
		],
	},
	{
		heading: "UP-DOWNS",
	},
	{
		icon: "bar-chart",
		text: "Link analysis",
		active: false,
		subMenu: [
			{
				icon: "scan",
				text: "Generate QR",
				link: "/project-card",
			},
			{
				icon: "notes-alt",
				text: "QR List",
				link: "/project-list",
			},
		],
	},
	{
		heading: "Pre-built Pages",
	},
	// {
	// 	icon: "tile-thumb",
	// 	text: "Projects",
	// 	active: false,
	// 	subMenu: [
	// 		{
	// 			text: "Project Cards",
	// 			link: "/project-card",
	// 		},
	// 		{
	// 			text: "Project List",
	// 			link: "/project-list",
	// 		},
	// 	],
	// },
	{
		icon: "tranx",
		text: "Transaction",
		active: false,
		subMenu: [
			{
				text: "Trans List - Basic",
				link: "/transaction-basic",
			},
		],
	},
	// {
	// 	icon: "grid-alt",
	// 	text: "Applications",
	// 	active: false,
	// 	subMenu: [
	// 		{
	// 			text: "Messages",
	// 			link: "/app-messages",
	// 		},
	// 		{
	// 			text: "Chats / Messenger",
	// 			link: "/app-chat",
	// 		},
	// 		{
	// 			text: "Inbox / Mail",
	// 			link: "/app-inbox",
	// 		},
	// 		{
	// 			text: "Calendar",
	// 			link: "/app-calender",
	// 		},
	// 		{
	// 			text: "File Manager",
	// 			link: "/app-file-manager",
	// 			badge: "new",
	// 		},
	// 		{
	// 			text: "Kanban Board",
	// 			link: "/app-kanban",
	// 		},
	// 	],
	// },
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

	// {
	// 	icon: "img",
	// 	text: "Image Gallery",
	// 	link: "/image-gallery",
	// },
	// {
	// 	icon: "files",
	// 	text: "Error Pages",
	// 	active: false,
	// 	subMenu: [
	// 		{
	// 			text: "404 Classic",
	// 			link: "/errors/404-classic",
	// 			newTab: true,
	// 		},
	// 		{
	// 			text: "504 Classic",
	// 			link: "/errors/504-classic",
	// 			newTab: true,
	// 		},
	// 		{
	// 			text: "404 Modern",
	// 			link: "/errors/404-modern",
	// 			newTab: true,
	// 		},
	// 		{
	// 			text: "504 Modern",
	// 			link: "/errors/504-modern",
	// 			newTab: true,
	// 		},
	// 	],
	// },
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
	{
		heading: "Components",
	},
	{
		icon: "layers",
		text: "Ui Elements",
		active: false,
		subMenu: [
			{
				text: "Alerts",
				link: "/components/alerts",
			},
			{
				text: "Accordions",
				link: "/components/accordions",
			},
			{
				text: "Avatar",
				link: "/components/avatar",
			},
			{
				text: "Badges",
				link: "/components/badges",
			},
			{
				text: "Buttons",
				link: "/components/buttons",
			},
			{
				text: "Button Group",
				link: "/components/button-group",
			},
			{
				text: "Breadcrumbs",
				link: "/components/breadcrumbs",
			},
			{
				text: "Cards",
				link: "/components/cards",
			},
			{
				text: "Carousel",
				link: "/components/carousel",
			},
			{
				text: "Dropdowns",
				link: "/components/dropdowns",
			},
			{
				text: "Modals",
				link: "/components/modals",
			},
			{
				text: "Pagination",
				link: "/components/pagination",
			},
			{
				text: "Popovers",
				link: "/components/popovers",
			},
			{
				text: "Progress",
				link: "/components/progress",
			},
			{
				text: "Spinner",
				link: "/components/spinner",
			},
			{
				text: "Tabs",
				link: "/components/tabs",
			},
			{
				text: "Toast",
				link: "/components/toast",
			},
			{
				text: "Typography",
				link: "/components/typography",
			},
			{
				text: "Tooltips",
				link: "/components/tooltips",
			},
			{
				text: "Utilities",
				active: false,
				subMenu: [
					{
						text: "Borders",
						link: "/components/util-border",
					},
					{
						text: "Colors",
						link: "/components/util-colors",
					},
					{
						text: "Display",
						link: "/components/util-display",
					},
					{
						text: "Embeded",
						link: "/components/util-embeded",
					},
					{
						text: "Flex",
						link: "/components/util-flex",
					},
					{
						text: "Text",
						link: "/components/util-text",
					},
					{
						text: "Sizing",
						link: "/components/util-sizing",
					},
					{
						text: "Spacing",
						link: "/components/util-spacing",
					},
					{
						text: "Others",
						link: "/components/util-others",
					},
				],
			},
		],
	},
	{
		icon: "dot-box",
		text: "Crafted Icons",
		active: false,
		subMenu: [
			{
				text: "SVG Icon-Exclusive",
				link: "/svg-icons",
			},
			{
				text: "Nioicon - HandCrafted",
				link: "/nioicon",
			},
		],
	},
	{
		icon: "table-view",
		text: "Tables",
		active: false,
		subMenu: [
			{
				text: "Basic Tables",
				link: "/table-basic",
			},
			{
				text: "Special Tables",
				link: "/table-special",
			},
			{
				text: "DataTables",
				link: "/table-datatable",
			},
		],
	},
	{
		icon: "card-view",
		text: "Forms",
		active: false,
		subMenu: [
			{
				text: "Form Elements",
				link: "/components/form-elements",
			},
			{
				text: "Checkbox Radio",
				link: "/components/checkbox-radio",
			},
			{
				text: "Advanced Controls",
				link: "/components/advanced-control",
			},
			{
				text: "Input Group",
				link: "/components/input-group",
			},
			{
				text: "Form Upload",
				link: "/components/form-upload",
			},
			{
				text: "Date Time Picker",
				link: "/components/datetime-picker",
			},
			{
				text: "Number Spinner",
				link: "/components/number-spinner",
			},
			{
				text: "noUiSlider",
				link: "/components/nouislider",
			},
			{
				text: "Form Layouts",
				link: "/components/form-layouts",
			},
			{
				text: "Form Validation",
				link: "/components/form-validation",
			},
			{
				text: "Wizard Basic",
				link: "/components/wizard-basic",
			},
			{
				text: "Rich Editor",
				active: false,
				subMenu: [
					{
						text: "Quill",
						link: "/components/quill",
					},
					{
						text: "Tinymce",
						link: "/components/tinymce",
					},
				],
			},
		],
	},
	{
		icon: "pie",
		text: "Charts",
		active: false,
		subMenu: [
			{
				text: "Chart Js",
				link: "/charts/chartjs",
			},
			{
				text: "Knobs",
				link: "/charts/knobs",
			},
		],
	},
	{
		icon: "puzzle",
		text: "Widgets",
		subMenu: [
			{
				text: "Card Widgets",
				link: "/components/widgets/cards",
			},
			{
				text: "Chart Widgets",
				link: "/components/widgets/charts",
			},
			{
				text: "Rating Widgets",
				link: "/components/widgets/rating",
			},
		],
	},
	{
		icon: "block-over",
		text: "Miscellaneous",
		subMenu: [
			{
				text: "Slick Sliders",
				link: "/components/misc/slick-slider",
			},
			{
				text: "JsTree",
				link: "/components/misc/jsTree",
			},
			{
				text: "React Toastify",
				link: "/components/misc/toastify",
			},
			{
				text: "Sweet Alert",
				link: "/components/misc/sweet-alert",
			},
			{
				text: "React DualListBox",
				link: "/components/misc/dual-list",
			},
			{
				text: "React Beautiful Dnd",
				link: "/components/misc/beautiful-dnd",
			},
			{
				text: "Google Map",
				link: "/components/misc/map",
			},
		],
	},
	{
		icon: "text-rich",
		text: "Email Template",
		link: "/email-template",
		active: "false",
	},
];
export default menu;
