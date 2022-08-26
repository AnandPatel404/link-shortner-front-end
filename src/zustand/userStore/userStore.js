import create from "zustand";
import axios from "../../axios/axiosconfig";

const useUserStore = create((set) => ({
	user: {},
	loginUser: async () => {
		await axios
			.post("users/login")
			.then((data) => {
				if (data) {
					console.log(data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	},
}));

export default useUserStore;
