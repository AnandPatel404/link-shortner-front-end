import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";
const useUserAuth = create((set) => ({
	sendOtp: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/send-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-verify-otp`);
					localStorage.setItem("number", data.number);
					localStorage.setItem("countryCode", data.countryCode);
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
	verifyOtp: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/verify-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-register`);
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
	ReSendOtp: async (data) => {
		await axios({
			method: "post",
			url: "auth/resend-otp",
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
	Register: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/register",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-success`);
					localStorage.removeItem("number");
					localStorage.removeItem("countryCode");
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
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
					window.location.reload();
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
	changePassword: async (data) => {
		await axios({
			method: "patch",
			url: "auth/change-password",
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

	forgotPassword: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/forgot-password",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-verify-otp-for-reset-password`);
					localStorage.setItem("number", data.number);
					localStorage.setItem("countryCode", data.countryCode);
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},

	verifyOtpForResetPassword: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/verify-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-reset-password`);
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},

	setNewPassword: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/reset-password",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					history.push(`${process.env.PUBLIC_URL}/auth-login`);
					localStorage.removeItem("number");
					localStorage.removeItem("countryCode");
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
}));

export default useUserAuth;
