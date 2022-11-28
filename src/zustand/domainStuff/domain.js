import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";
import Swal from "sweetalert2";

const userDomain = create((set, get) => ({
	createDomains: async (data, setModal, getData) => {
		await axios({
			method: "post",
			url: `custom-domain/domain`,
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(res.data.message, res.data.status);
					setModal({ add: false });
					getData();
				}
			})
			.catch((err) => {
				errorToast(err.response.data.message, "Error");
			});
	},

	getAllDomain: async () => {
		const data = await axios({
			method: "get",
			url: `custom-domain/domain`,
		});
		return data;
	},
	deleteDomain: async (id, getData) => {
		await axios({
			method: "delete",
			url: `custom-domain/domain/${id}`,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					Swal.fire("Success", res.data.message, "success");
					getData();
				}
			})
			.catch((err) => {
				errorToast(err.response.data.message, "Error");
			});
	},
}));

export default userDomain;
