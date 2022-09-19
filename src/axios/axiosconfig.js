import axios from "axios";
axios.defaults.crossDomain = true;
const instance = axios.create({
	baseURL: "http://localhost:8000/v1/",
	withCredentials: true,
});

/**
 * Catch the AunAuthorized Request
 */
instance.interceptors.response.use(
	(response) => response,
	(error) => {
		console.log();
		if (error.response.status === 401 && error.response.data.message === "Please authenticate") {
			window.location = `${process.env.PUBLIC_URL}/auth-login`;
			return;
		}
		return Promise.reject(error);
	}
);

export default instance;
