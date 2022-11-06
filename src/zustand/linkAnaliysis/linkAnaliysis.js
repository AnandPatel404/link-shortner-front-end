import create from "zustand";
import axios from "../../axios/axiosconfig";

const userLinkAnalysis = create((set, get) => ({
	linkAnalysis: async (id, setLoading) => {
		const data = await axios({
			method: "get",
			url: `link-analysis/${id}`,
		});
		setLoading(false);
		return data;
	},
	linkBrowserAnalysis: async (id, setLoading) => {
		const data = await axios({
			method: "get",
			url: `link-analysis/browser/${id}`,
		});
		setLoading(false);
		return data.data;
	},
	linkTrafficAnalysis: async (id, setLoading) => {
		const data = await axios({
			method: "get",
			url: `link-analysis/traffic/${id}`,
		});
		setLoading(false);
		return data.data;
	},
}));

export default userLinkAnalysis;
