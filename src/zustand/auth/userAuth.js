import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";
const useUserAuth = create((set) => ({
	sendOtp: async (data, history, setLoading) => {
		await axios({
			method: "post",
			url: "auth/send-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-verify-otp`);
					localStorage.setItem("email", data.email);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message);
			});
	},
	verifyOtp: async (data, history, setLoading) => {
		await axios({
			method: "post",
			url: "auth/verify-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-register`);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message);
			});
	},
	ReSendOtp: async (data, setLoadingTwo) => {
		await axios({
			method: "post",
			url: "auth/resend-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setLoadingTwo(false);
					messageToast(`${res.data.message}`, res.data.status);
				}
			})
			.catch((err) => {
				setLoadingTwo(false);
				errorToast(err.response.data.message);
			});
	},
	Register: async (data, history, setLoading) => {
		await axios({
			method: "post",
			url: "auth/register",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-success`);
					localStorage.removeItem("number");
					localStorage.removeItem("countryCode");
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message);
			});
	},
	LogOut: async () => {
		await axios({
			method: "post",
			url: "auth/logout",
		})
			.then((res) => {
				if (res.data.status === "Success") {
					localStorage.clear();
				}
			})
			.catch((err) => {
				errorToast(err.response.data.message);
			});
	},
	changePassword: async (data, setLoading) => {
		await axios({
			method: "patch",
			url: "auth/change-password",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message);
			});
	},

	forgotPassword: async (data, history, setLoading) => {
		await axios({
			method: "post",
			url: "auth/forgot-password",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-verify-otp-for-reset-password`);
					localStorage.setItem("number", data.number);
					localStorage.setItem("countryCode", data.countryCode);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message);
			});
	},

	verifyOtpForResetPassword: async (data, history, setLoading) => {
		await axios({
			method: "post",
			url: "auth/verify-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-reset-password`);
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message);
			});
	},

	setNewPassword: async (data, history, setLoading) => {
		await axios({
			method: "post",
			url: "auth/reset-password",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message}`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-login`);
					localStorage.removeItem("number");
					localStorage.removeItem("countryCode");
				}
			})
			.catch((err) => {
				setLoading(false);
				errorToast(err.response.data.message);
			});
	},
}));

export default useUserAuth;
