const BannerThreeData = [
	{
		text: "Landing",
		to: "landing",
		subMenu: [
			{
				text: "Landing Page- v1",
				to: "/",
			},
			{
				text: "Landing Page- v2",
				to: "/indextwo",
			},
			{
				text: "Landing Page- v3",
				to: "/indexthree",
			},
			{
				text: "Landing Page- v4",
				to: "/indexfour",
			},
			{
				text: "Landing Page- v5",
				to: "/indexfive",
			},
			{
				text: "Landing Page- v6",
				to: "/indexsix",
			},
		],
	},
	{
		text: "Pages",
		to: "landing",
		subMenu: [
			{
				text: "Auth Pages",
				to: "auth",
				subMenu: [
					{
						text: "Login / Signin",
						to: "/pages/auths/auth-login",
					},
					{
						text: "Register / Signup",
						to: "/pages/auths/auth-register",
					},
					{
						text: "Forgot Password",
						to: "/pages/auths/auth-forgotpassword",
					},
				],
			},
			{
				text: "Error Pages",
				to: "error",
				subMenu: [
					{
						text: "404 Classic",
						to: "/pages/error/404-classic",
					},
					{
						text: "404 Modern",
						to: "/pages/error/404-modern",
					},
					{
						text: "504 Classic",
						to: "/pages/error/504-classic",
					},
					{
						text: "504 Modern",
						to: "/pages/error/504-modern",
					},
				],
			},
		],
	},
	{
		text: "Home",
		to: "#home",
	},
	{
		text: "Products",
		to: "#product",
	},
	{
		text: "Plugins",
		to: "#plugin",
	},
	{
		text: "Pricing",
		to: "#pricing",
	},
	{
		text: "Reviews",
		to: "#reviews",
	},
];
export default BannerThreeData;
