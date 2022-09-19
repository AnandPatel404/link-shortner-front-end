import create from "zustand";
import axios from "../../axios/axiosconfig";

const userActivity = create((set) => ({
	userActivitys: [],
	getuserActivity: async () => {
		await axios({
			method: "get",
			url: "logged-user/activity",
		})
			.then((res) => {
				set({ userActivitys: res.data.data });
			})
			.catch((err) => {
				console.log(err);
			});
	},
}));

export default userActivity;
