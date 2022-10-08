import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const userDomain = create((set, get) => ({
	domains: [],
	createDomains: async (data) => {
		await axios({
			method: "post",
			url: `custom-domain/domain`,
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					set((state) => ({ domains: [...state.domains, res.data.data] }));
					messageToast(`${res.data.message} ✅✅`, res.data.status);
				}
			})
			.catch((err) => {
				console.log(err);
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},

	getAllDomain: async () => {
		await axios({
			method: "get",
			url: `custom-domain/domain`,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					console.log(res);
					set({ domains: res.data.data });
				}
			})
			.catch((err) => {
				console.log(err);
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
}));

export default userDomain;
