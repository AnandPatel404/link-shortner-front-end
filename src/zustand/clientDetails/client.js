import create from "zustand";
import axios from "../../axios/axiosconfig";

const useLinkClient = create(() => ({
	getLinkClient: async (id, itemPerPage, currentPage, setLoading) => {
		try {
			const data = await axios({
				method: "get",
				url: `link-client/${id}?limit=${itemPerPage}&page=${currentPage}`,
			});
			setLoading(false);
			return data.data.data;
		} catch (err) {
			console.log(err);
		}
	},
}));

export default useLinkClient;
