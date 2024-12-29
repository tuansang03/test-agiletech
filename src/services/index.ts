import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-test-web.agiletech.vn",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
