import create from "zustand";
import axios from "../../axios/axiosconfig";
import { toast } from "react-toastify";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const userActivity = create((set, get) => ({
	userActivitys: [],
	linksLength: "",
	AllLinksLength: "",
	links: [],
	allLinks: [],
	subscription: {},
	plan: [],
	chart: {},
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
	userDashBoard: async () => {
		await axios({
			method: "get",
			url: "dashboard",
		})
			.then((res) => {
				set({ linksLength: res.data.data.links.length });
				set({ links: res.data.data.links.slice(0, 5) });
				set({ subscription: res.data.data.Subscriptions });
			})
			.catch((err) => {
				console.log(err);
			});
	},
	quickShort: async (data) => {
		const resolvePromise = new Promise((resolve) =>
			resolve(
				axios({
					url: "short/quick-short-link",
					method: "post",
					data,
				})
			)
		);
		toast.promise(resolvePromise, {
			pending: {
				render() {
					return "Link is shorting";
				},
				icon: "🤖",
				position: "top-center",
				autoClose: true,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: false,
			},
			success: {
				render({ data }) {
					const reFetch = get().userDashBoard;
					setTimeout(() => {
						reFetch();
					}, 1000);
					return `${data.data.message}`;
				},
				icon: "🟢",
				position: "top-center",
				autoClose: true,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: false,
			},
			error: {
				render({ data }) {
					return `${data.response.data.message}`;
				},
				icon: "❌",
				position: "top-center",
				autoClose: true,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: false,
			},
		});
	},

	getUserAllShortenLink: async ({ currentPage, ...rest }) => {
		try {
			await axios({
				method: "get",
				url: `logged-user/get-all-links?page=${currentPage}&${Object.keys(rest)
					.map((key) => `${key}=${rest[key]}`)
					.join("&")}`,
			}).then((res) => {
				set({ allLinks: res.data.data.results });
				set({ AllLinksLength: res.data.data.totalResults });
			});
		} catch (err) {
			errorToast(`${err.response.data.message} ❌❌`, "Error");
		}
	},
	removeLink: async (linkId) => {
		await axios({
			method: "delete",
			url: `short/${linkId}`,
		})
			.then(async (res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
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
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},

	deleteMany: async (data) => {
		const resolvePromise = new Promise((resolve) =>
			resolve(
				axios({
					method: "delete",
					url: `short/delete-many`,
					data: {
						linkId: data,
					},
				})
			)
		);
		toast.promise(resolvePromise, {
			pending: {
				render() {
					return "Links is deleting";
				},
				icon: "🤖",
			},
			success: {
				render({ data }) {
					return `${data.data.message}`;
				},
				icon: "🟢",
				position: "top-center",
				autoClose: true,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: false,
			},
			error: {
				render({ data }) {
					return `${data.response.data.message}`;
				},
				icon: "❌",
				position: "top-center",
				autoClose: true,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: false,
			},
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
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/all-shorten-links`);
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
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
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},

	getLinkById: async (id) => {
		const link = await axios({
			method: "get",
			url: `short/${id}`,
		});
		return link;
	},
}));

export default userActivity;
