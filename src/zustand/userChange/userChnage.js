import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";
import useUserStore from "../userStore/userStore";

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
}));

export default useUserChange;
