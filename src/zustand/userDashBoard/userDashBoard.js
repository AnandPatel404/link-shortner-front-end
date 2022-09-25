import create from "zustand";
import axios from "../../axios/axiosconfig";
import { toast } from "react-toastify";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const userActivity = create((set, get) => ({
	userActivitys: [],
	links: [],
	allLinks: [],
	subscription: {},
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
				set({ links: res.data.data.recentShortedLink });
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
			},
			success: {
				render({ data }) {
					const reFetch = get().userDashBoard;
					// set((state) => ({
					// 	links: [...state.links, data.data.data],
					// }));
					reFetch();
					return `${data.data.message}`;
				},
				icon: "🟢",
			},
			error: {
				render({ data }) {
					return `${data.response.data.message}`;
				},
				icon: "❌",
			},
		});
	},
	getUserAllShortenLink: async () => {
		await axios({
			method: "get",
			url: "logged-user/get-all-links",
		})
			.then((res) => {
				set({ allLinks: res.data.data });
			})
			.catch((err) => {
				console.log(err);
			});
	},
	removeLink: async (linkId) => {
		await axios({
			method: "delete",
			url: `short/${linkId}`,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
				}
			})
			.catch((err) => {
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
					const getUserAllShortenLink = get().getUserAllShortenLink;
					getUserAllShortenLink();
					return `${data.data.message}`;
				},
				icon: "🟢",
			},
			error: {
				render({ data }) {
					return `${data.response.data.message}`;
				},
				icon: "❌",
			},
		});
	},
	updateLink: async (data, linkId) => {
		await axios({
			method: "patch",
			url: `short/${linkId}`,
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					const reFetch = get().getUserAllShortenLink;
					reFetch();
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
}));

export default userActivity;
