import create from "zustand";
import axios from "../../axios/axiosconfig";
import { errorToast } from "../../pages/components/misc/ReactToastify";
import { toast } from "react-toastify";

const useQuickShortinglink = create((set) => ({
	links: [],
	quickShort: async (data) => {
		const resolvePromis = new Promise((resolve) =>
			resolve(
				axios({
					url: "short/quick-short-link",
					method: "post",
					data,
				})
			)
		);
		toast.promise(resolvePromis, {
			pending: {
				render() {
					return "Link is shorting";
				},
				icon: "🤖",
			},
			success: {
				render({ data }) {
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
	getshortenLinks: async () => {
		await axios({
			url: "logged-user/user-shorten-link",
			method: "get",
		})
			.then((res) => {
				if (res.data.status === "Success") {
					set({ links: res.data.data });
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
}));

export default useQuickShortinglink;
