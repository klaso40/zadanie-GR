import axios from "axios";

const ApiClient = axios.create({
  baseURL: ``,
  timeout: 10000,
});

export default ApiClient;
