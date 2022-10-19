import create from "zustand";
import axios from "../../axios/axiosconfig";
// import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const userLinkAnalysis = create((set, get) => ({
	linkAnalysis: async (id, setLoading) => {
		const data = await axios({
			method: "get",
			url: `link-analysis/${id}`,
		});
		setLoading(false);
		return data;
	},
}));

export default userLinkAnalysis;
