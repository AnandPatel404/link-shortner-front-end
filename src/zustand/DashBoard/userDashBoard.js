import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const userActivity = create((set, get) => ({
	userActivitys: [],
	linksLength: "",
	AllLinksLength: "",
	links: [],
	allLinks: [],
	subscription: {},
	plan: [],
	browser: [],
	getuserActivity: async () => {
		await axios({
			method: "get",
			url: "logged-user/activity",
		})
			.then((res) => {
				set({ userActivitys: res.data.data });
			})
			.catch((err) => {
				console.log(err);
			});
	},
	userDashBoard: async (setLoadingTwo) => {
		await axios({
			method: "get",
			url: "dashboard",
		})
			.then((res) => {
				set({ linksLength: res.data.data.links.length });
				set({ links: res.data.data.links });
				set({ subscription: res.data.data.subscriptions });
				setLoadingTwo(false);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	quickShort: async (data, setLoading) => {
		await axios({
			url: "short/quick-short-link",
			method: "post",
			data,
		})
			.then((res) => {
				messageToast(`${res.data.message}`, res.data.status);
				const reFetch = get().userDashBoard;
				setTimeout(() => {
					reFetch();
				}, 500);
				setLoading(false);
			})
			.catch((err) => {
				errorToast(err.response.data.message);
				console.log(err);
				setLoading(false);
			});
	},

	getUserAllShortenLink: async ({ currentPage }, setLoading) => {
		try {
			await axios({
				method: "get",
				url: `short/links?page=${currentPage}&limit=10`,
			}).then((res) => {
				setLoading(false);
				set({ allLinks: res.data.data.results });
				set({ AllLinksLength: res.data.data.totalResults });
			});
		} catch (err) {
			setLoading(false);
			errorToast(err.response.data.message);
		}
	},
	removeLink: async (linkId) => {
		await axios({
			method: "delete",
			url: `short/${linkId}`,
		})
			.then(async (res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					const allLink = get().allLinks;
					let newData = [];
					allLink.forEach((res) => {
						if (res.id !== linkId) {
							newData.push(res);
						}
					});
					set({ allLinks: newData });
				}
			})
			.catch((err) => {
				console.log(err);
				errorToast(err.response.data.message);
			});
	},
	updateLink: async (data, linkId, history) => {
		await axios({
			method: "patch",
			url: `short/${linkId}`,
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/all-shorten-links`);
				}
			})
			.catch((err) => {
				errorToast(err.response.data.message);
			});
	},

	getAllPlan: async () => {
		await axios({
			method: "get",
			url: `logged-user/plans`,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					set({ plan: res.data.data });
				}
			})
			.catch((err) => {
				errorToast(err.response.data.message);
			});
	},

	getLinkById: async (id, setLoading) => {
		const link = await axios({
			method: "get",
			url: `short/${id}`,
		});
		setLoading(false);
		return link;
	},
}));

export default userActivity;
