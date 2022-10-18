import create from "zustand";
import axios from "../../axios/axiosconfig";

const useLinkClient = create(() => ({
	getLinkClient: async (id, itemPerPage, currentPage) => {
		try {
			const data = await axios({
				method: "get",
				url: `link-client/${id}?limit=${itemPerPage}&page=${currentPage}`,
			});
			return data.data.data;
		} catch (err) {
			console.log(err);
		}
	},
}));

export default useLinkClient;
