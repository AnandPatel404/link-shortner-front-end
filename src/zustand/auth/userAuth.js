import create from "zustand";
import axios from "../../axios/axiosconfig";
import Swal from "sweetalert2";
const useUserAuth = create((set) => ({
	sendOtp: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/send-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					Swal.fire("Success", res.data.message, "success");
					history.push(`${process.env.PUBLIC_URL}/auth-verify-otp`);
					localStorage.setItem("number", data.number);
					localStorage.setItem("countryCode", data.countryCode);
				}
			})
			.catch((err) => {
				console.log(err.response.data.message);
				Swal.fire("error", err.response.data.message, "error");
			});
	},
	verifyOtp: async (data, history) => {
		await axios({
			method: "post",
			url: "auth/send-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					Swal.fire("Success", res.data.message, "success");
					history.push(`${process.env.PUBLIC_URL}/auth-register`);
				}
			})
			.catch((err) => {
				console.log(err.response.data.message);
				Swal.fire("error", err.response.data.message, "error");
			});
	},
}));

export default useUserAuth;
