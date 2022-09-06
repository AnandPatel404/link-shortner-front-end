import create from "zustand";
import axios from "../../axios/axiosconfig";
import { persist } from "zustand/middleware";
import Swal from "sweetalert2";
const useUserStore = create(
	persist(
		(set) => ({
			user: {},
			loginUser: async (data) => {
				await axios({
					method: "post",
					url: "auth/login",
					data,
				})
					.then((res) => {
						if (res.data.status === "Success") {
							Swal.fire("Success", res.data.message, "success");
							set({ user: res.data.data });
							setTimeout(() => {
								window.history.pushState(
									`${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
									"auth-login",
									`${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
								);
								window.location.reload();
							}, 1000);
						}
					})
					.catch((err) => {
						console.log(err.response.data.message);
						Swal.fire("error", err.response.data.message, "error");
					});
			},
		}),
		{
			name: "user",
		}
	)
);

export default useUserStore;
