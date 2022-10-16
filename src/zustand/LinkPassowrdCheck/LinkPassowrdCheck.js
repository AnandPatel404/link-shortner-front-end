import create from "zustand";
import axios from "axios";
import Swal from "sweetalert2";
// TODO : this is change in production i mean localhost:8000
const useCheckThePassword = create((set) => ({
	checkThePassword: async (data, id) => {
		axios({
			method: "post",
			url: `http://localhost:8000/password-check/${id}`,
			withCredentials: true,
			data,
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
				Swal.fire("Error", err.response.data.message, "Error");
			});
	},
}));

export default useCheckThePassword;
