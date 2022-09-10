import create from "zustand";
import axios from "../../axios/axiosconfig";
import Swal from "sweetalert2";
const useUserAuth = create((set) => ({
	sendOtp: async (data) => {
		await axios({
			method: "post",
			url: "auth/send-otp",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					Swal.fire("Success", res.data.message, "success");
				}
			})
			.catch((err) => {
				console.log(err.response.data.message);
				Swal.fire("error", err.response.data.message, "error");
			});
	},
}));

export default useUserAuth;
