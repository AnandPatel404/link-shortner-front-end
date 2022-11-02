import create from "zustand";
import axios from "../../axios/axiosconfig";

const userPlan = create((set, get) => ({
	linkAnalysis: async (id, setLoading) => {
		const data = await axios({
			method: "get",
			url: `link-analysis/${id}`,
		});
		setLoading(false);
		return data;
	},
}));

export default userPlan;
