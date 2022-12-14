import create from "zustand";
import axios from "../../axios/axiosconfig";
import { toast } from "react-toastify";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const userFunctionalityLink = create((set, get) => ({
	SingleLink: {},
	checkForBrandedLink: "",

	findLinkWithBackLink: async (data, setLoadingTwo) => {
		await axios({
			method: "get",
			url: `short/find-link-with-back-link/${data.shortedLink}`,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoadingTwo(false);
					messageToast(res.data.message, res.data.status);
					set({ SingleLink: res.data.data });
				}
			})
			.catch((err) => {
				setLoadingTwo(false);
				errorToast(err.response.data.message, "Error");
			});
	},
	createLink: async (data, setLoading) => {
		await axios({
			method: "post",
			url: "short/link-with-full-functionality",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
					set({ SingleLink: res.data.data });
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},
	customDomain: async (data, setLoading) => {
		await axios({
			method: "post",
			url: "short/create-with-custom-domain",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
					set({ SingleLink: res.data.data });
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},
	createExpirationLink: async (data, setLoading) => {
		await axios({
			method: "post",
			url: "short/create-expiration-link",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},

	passwordProtectedLink: async (data, setLoading) => {
		await axios({
			method: "post",
			url: "short/password-protected-link",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},

	createQr: async (data, linkId, setLoading) => {
		const resolvePromise = new Promise((resolve) =>
			resolve(
				axios({
					url: `qr-link/${linkId}`,
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
				icon: "????",
			},
			success: {
				render({ data }) {
					setLoading(false);
					return `${data.data.message}`;
				},
				icon: "????",
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
					setLoading(false);
					return `${data.response.data.message}`;
				},
				icon: "???",
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

	createQrwithLogo: async (data, linkId, setLoading) => {
		const resolvePromise = new Promise((resolve) =>
			resolve(
				axios({
					url: `qr-link/qr-with-logo/${linkId}`,
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
				icon: "????",
			},
			success: {
				render({ data }) {
					setLoading(false);
					return `${data.data.message}`;
				},
				icon: "????",
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
					setLoading(false);
					return `${data.response.data.message}`;
				},
				icon: "???",
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

	checkBrandedLinkIsExist: async (data) => {
		await axios({
			url: "short/check-branded-link",
			method: "post",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					set({ checkForBrandedLink: res.data.data });
				}
			})
			.catch((err) => {
				errorToast(err.response.data.message, "Error");
			});
	},
	createBrandedLink: async (data, setLoading) => {
		await axios({
			url: "short/create-branded-link",
			method: "post",
			data,
		})
			.then((res) => {
				setLoading(false);
				if (res.data.status === "Success") {
					messageToast(res.data.message, res.data.status);
					set({ SingleLink: res.data.data });
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},
	createLimitedLink: async (data, setLoading) => {
		await axios({
			url: "short/limited-link",
			method: "patch",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},

	createDeviceTargetingLink: async (data, setLoading) => {
		await axios({
			url: "short/device-targeting-link",
			method: "post",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},

	createBrowserTargetingLink: async (data, setLoading) => {
		await axios({
			url: "short/browser-targeting-link",
			method: "post",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},

	createLinkReDirectionPage: async (data, setLoading) => {
		await axios({
			url: "short/create-redirection-link-with-page",
			method: "post",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},

	verifyLinkReDirectPage: async (d) => {
		const data = await axios({
			url: `short/verification-link/${d.id}/${d.orderId}`,
			method: "get",
		});
		return data.data;
	},

	create404Redirection: async (data, setLoading) => {
		await axios({
			url: "short/create-404-redirection",
			method: "post",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoading(false);
					messageToast(res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message, "Error");
			});
	},

	applyChanges: async () => {
		messageToast(`Changes are applied`, "Success");
		set({ SingleLink: {} });
	},
	immediatelyApplyChange: async () => {
		set({ SingleLink: {} });
	},
}));

export default userFunctionalityLink;
