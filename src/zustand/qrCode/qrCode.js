import create from "zustand";
import axios from "../../axios/axiosconfig";
import { toast } from "react-toastify";
// import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

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
	checkQrLink: async (data, setModal) => {
		const d = await axios({
			method: "post",
			url: "qr-link/check-link",
			data,
		});
		if (d.data.status === "Success") {
			setModal({ edit: false, color: true });
			return d.data;
		}
	},
	createQr: async (data, id, setModal) => {
		const resolvePromise = new Promise((resolve) =>
			resolve(
				axios({
					url: `qr-link/${id}`,
					headers: {
						"Content-Type": "multipart/form-data",
					},
					method: "post",
					data,
				})
			)
		);
		toast.promise(resolvePromise, {
			pending: {
				render() {
					return "Qr is in process";
				},
				icon: "🤖",
			},
			success: {
				render({ data }) {
					setModal({ edit: false, color: false });
					return `${data.data.message}`;
				},
				icon: "🟢",
			},
			error: {
				render({ data }) {
					console.log(data);
					return `${data.response.data.message}`;
				},
				icon: "❌",
			},
		});
	},
}));

export default useqrCode;
