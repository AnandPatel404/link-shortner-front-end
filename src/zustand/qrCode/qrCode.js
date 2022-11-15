import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const useqrCode = create((set) => ({
	getAllQr: async () => {
		const data = await axios({
			method: "get",
			url: "qr-link/all-qr",
		});
		return data;
	},
	deleteQr: async (id) => {
		await axios({
			method: "delete",
			url: `qr-link/${id}`,
		})
			.then((res) => {
				messageToast(res.data.message, res.data.status);
			})
			.catch((err) => {
				errorToast(err.response.data.message, "Error");
			});
	},
}));

export default useqrCode;
