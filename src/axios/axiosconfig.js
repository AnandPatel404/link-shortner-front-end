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
		if (error.response.status === 401) {
			window.location = `${process.env.PUBLIC_URL}/auth-login`;
			return;
		}
		return Promise.reject(error);
	}
);

export default instance;
