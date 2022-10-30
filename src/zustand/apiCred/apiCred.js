import create from "zustand";
import axios from "../../axios/axiosconfig";

const userApiCred = create(() => ({
	getApiCred: async (setLoading) => {
		try {
			const data = await axios({
				method: "get",
				url: "apiCred/api-cred",
			});
			setLoading(false);
			return data.data.data;
		} catch (err) {
			console.log(err);
		}
	},
}));

export default userApiCred;
