import create from "zustand";
import axios from "../../axios/axiosconfig";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

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
			setLoading(false);
			console.log(err);
		}
	},
	generateApiCred: async (setLoadingTwo) => {
		try {
			const data = await axios({
				method: "post",
				url: "apiCred/api-cred",
			});
			setLoadingTwo(false);
			return data.data.data;
		} catch (err) {
			setLoadingTwo(false);
			console.log(err);
		}
	},
	updateApiCred: async (data, setModelData) => {
		await axios({
			method: "patch",
			url: "apiCred/api-cred",
			data,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					setModelData({
						id: "",
						keyId: "",
						secret: "",
						ip: "",
					});
				}
			})
			.catch((err) => {
				console.log(err);
				setModelData({
					id: "",
					keyId: "",
					secret: "",
					ip: "",
				});
			});
	},

	deleteApiCreds: async (id) => {
		await axios({
			method: "delete",
			url: `apiCred/api-cred/${id}`,
		})
			.then((res) => {
				if (res.data.status === "Success") {
					messageToast(`${res.data.message} ✅✅`, res.data.status);
				}
			})
			.catch((err) => {
				console.log(err);
				errorToast(`${err.response.data.message} ❌❌`, "Error");
			});
	},
}));

export default userApiCred;
