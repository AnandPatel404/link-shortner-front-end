import create from "zustand";
import axios from "../../axios/axiosconfig";
// import { toast } from "react-toastify";

const useLinkClient = create(() => ({
	getLinkClient: async (id) => {
		try {
			const data = await axios({
				method: "get",
				url: `link-client/${id}`,
			});
			return data;
		} catch (err) {
			console.log(err);
		}
	},
}));

export default useLinkClient;
