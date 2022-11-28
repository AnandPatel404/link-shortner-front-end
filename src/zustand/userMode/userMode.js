import create from "zustand";
import { errorToast } from "../../pages/components/misc/ReactToastify";
import axios from "../../axios/axiosconfig";
import Swal from "sweetalert2";
const useUserMode = create((set) => ({
	mode: {
		main: "default",
		sidebar: "white",
		header: "white",
		skin: "light",
	},
	darkMode: () => set((state) => ({ mode: { main: "default", sidebar: "dark", header: "dark", skin: "dark" } })),
	lightMode: () => set((state) => ({ mode: { main: "default", sidebar: "white", header: "white", skin: "light" } })),
	createFeedBack: async (data) => {
		await axios({
			method: "patch",
			url: "feedback/",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					Swal.fire(res.data.status, res.data.message, res.data.status);
				}
			})
			.catch((err) => {
				errorToast(err.response.data.message, "Error");
			});
	},
}));

export default useUserMode;
