import create from "zustand";
import axios from "../../axios/axiosconfig";
import { toast } from "react-toastify";
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
	createQr: async (data) => {
		const resolvePromise = new Promise((resolve) =>
			resolve(
				axios({
					url: "qr-link/",
					method: "post",
					data,
				})
			)
		);
		toast.promise(resolvePromise, {
			pending: {
				render() {
					return "Link is shorting";
				},
				icon: "🤖",
			},
			success: {
				render({ data }) {
					return `${data.data.message}`;
				},
				icon: "🟢",
			},
			error: {
				render({ data }) {
					return `${data.response.data.message}`;
				},
				icon: "❌",
			},
		});
	},
}));

export default useqrCode;
