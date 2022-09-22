import create from "zustand";
import axios from "../../axios/axiosconfig";
import { successToast, errorToast } from "../../pages/components/misc/ReactToastify";

const useQuickShortinglink = create((set) => ({
	links: [],
	quickShort: async (data) => {
		await axios({
			url: "short/quick-short-link",
			method: "post",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					successToast(res.data.message);
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
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
