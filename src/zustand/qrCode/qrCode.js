import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const useqrCode = create((set) => ({
	allQr: [],
	getAllQr: async () => {
		await axios({
			method: "get",
			url: "qr-link/",
		}).then((res) => {
			set({ allQr: res.data.data });
		});
		// return data.data.data;
	},
}));

export default useqrCode;
