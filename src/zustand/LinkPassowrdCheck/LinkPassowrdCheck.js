import create from "zustand";
import axios from "../../axios/axiosconfig";
import Swal from "sweetalert2";
const useCheckThePassword = create((set) => ({
	checkThePassword: async (data, id) => {
		await axios({
			method: "post",
			url: `short/password-check/${id}`,
			data,
		})
			.then((res) => {
				window.location.href = res.data.data;
			})
			.catch((err) => {
				Swal.fire("Error", err.response.data.message, "Error");
			});
	},
}));

export default useCheckThePassword;
