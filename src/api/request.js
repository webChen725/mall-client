import axios from "axios";
export const http = axios.create({
  baseURL: "http://localhost:3000"
});
http.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response.data;
    }
  },
  err => {
    return Promise.reject(err);
  }
);

export default function getInstanceWithToken() {
  let token = localStorage.getItem("token");
  token !== "" &&
    (http.defaults.headers.common["Authorization"] = "Bearer " + token);
  return http;
}
