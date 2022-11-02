import create from "zustand";
import axios from "../../axios/axiosconfig";

const userPlan = create((set, get) => ({
	plan: async (setLoading) => {
		const data = await axios({
			method: "get",
			url: "plan",
		});
		setLoading(false);
		return data.data.data;
	},
}));

export default userPlan;
