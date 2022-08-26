import axios from "axios";
axios.defaults.crossDomain = true;
const instance = axios.create({
	baseURL: "http://localhost:3000/",
	timeout: 10000,
	withCredentials: true,
});

export default instance;
