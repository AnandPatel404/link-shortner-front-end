import create from "zustand";
import axios from "../../axios/axiosconfig";
import { persist } from "zustand/middleware";
import { messageToast, errorToast } from "../../pages/components/misc/ReactToastify";

const useUserStore = create(
	persist(
		(set) => ({
			user: {},
			loginUser: async (data, setLoading) => {
				await axios({
					method: "post",
					url: "auth/login",
					data,
				})
					.then((res) => {
						if (res.data.status === "Success") {
							localStorage.setItem("id", res.data.data.id);
							messageToast(`${res.data.message}`, res.data.status);
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
						setLoading(false);
						errorToast(`${err.response.data.message}`, "Error");
					});
			},
		}),
		{
			name: "user",
		}
	)
);
export default useUserStore;
