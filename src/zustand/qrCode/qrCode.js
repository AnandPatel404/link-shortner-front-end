import create from "zustand";
import axios from "../../axios/axiosconfig";

const useqrCode = create((set) => ({
	allQr: [],

	getAllQr: async () => {
		await axios({
			method: "get",
			url: "qr-link/all-qr",
		}).then((res) => {
			set({ allQr: res.data.data });
		});
	},
}));

export default useqrCode;
