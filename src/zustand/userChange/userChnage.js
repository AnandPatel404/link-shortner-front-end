import create from "zustand";
import axios from "../../axios/axiosconfig";

const useUserChange = create((set) => ({
	onNotification: async () => {
		await axios({
			method: "patch",
			url: "logged-user/notification-on",
		});
	},
}));

export default useUserChange;
