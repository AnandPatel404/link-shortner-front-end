import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";
import useUserStore from "../userStore/userStore";
import Swal from "sweetalert2";

const useUserChange = create((set) => ({
	changeProfile: async (data) => {
		await axios({
			method: "patch",
			url: "logged-user/update-me",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
					const user = useUserStore((state) => state.user);
					// Object.assign(user, res.data.data);
					user.setState(res.data.data);
				}
			})
			.catch((err) => {
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
	deleteAccount: async (data, history) => {
		await axios({
			method: "delete",
			url: "auth/delete-account",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					Swal.fire({
						icon: res.data.status,
						title: "Done",
						text: `${res.data.message} ✅✅`,
						focusConfirm: false,
					});
					localStorage.clear();
					window.location.reload();
				}
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: `${err.response.data.message} ❌❌`,
					focusConfirm: false,
				});
			});
	},
}));

export default useUserChange;
