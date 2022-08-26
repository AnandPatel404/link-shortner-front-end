import axios from "axios";
axios.defaults.crossDomain = true;
const instance = axios.create({
	baseURL: "http://localhost:8000/v1/",
	withCredentials: true,
});

export default instance;
