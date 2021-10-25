import axios from "axios";

const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

export default axios.create(axiosConfig);
