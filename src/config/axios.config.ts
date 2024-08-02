import axios from "axios";

function initAxios() {
  axios.defaults.baseURL = import.meta.env.VITE_AXIOS_PREFIX as string;
}

export default initAxios;
