import create from "zustand";
import axios from "../../axios/axiosconfig";
import { toast } from "react-toastify";
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

	createQr: async (data, linkId) => {
		const resolvePromise = new Promise((resolve) =>
			resolve(
				axios({
					url: `qr-link/${linkId}`,
					headers: {
						"Content-Type": "multipart/form-data",
					},
					method: "post",
					data,
				})
			)
		);
		toast.promise(resolvePromise, {
			pending: {
				render() {
					return "Qr is in process";
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
					console.log(data);
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
	applyChanges: async () => {
		messageToast(`Changes are applied ✅✅`, "Success");
		set({ SingleLink: {} });
	},
}));

export default userFunctionalityLink;
