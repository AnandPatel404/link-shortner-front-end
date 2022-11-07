import create from "zustand";
import axios from "../../axios/axiosconfig";

const userPayment = create((set) => ({
	createOrderOfRazorPay: async (id) => {
		const data = await axios({
			method: "post",
			url: `payment/RazorPay/${id}`,
		});
		return data.data.data;
	},
}));

export default userPayment;
