import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const userFunctionalityLink = create((set, get) => ({
	SingleLink: {},
	createLink: async (data) => {
		await axios({
			method: "post",
			url: "short/link-with-full-functionality",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					console.log(res.data.data);
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					set({ SingleLink: res.data.data });
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
	customDomain: async (data) => {
		await axios({
			method: "post",
			url: "short/create-with-custom-domain",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					set({ SingleLink: res.data.data });
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
	createExpirationLink: async (data) => {
		await axios({
			method: "post",
			url: "short/create-expiration-link",
			data,
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

	passwordProtectedLink: async (data) => {
		await axios({
			method: "post",
			url: "short/password-protected-link",
			data,
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

	applyChanges: async () => {
		messageToast(`Changes are applied ✅✅`, "Success");
		set({ SingleLink: {} });
	},
}));

export default userFunctionalityLink;
