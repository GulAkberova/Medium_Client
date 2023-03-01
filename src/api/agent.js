import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
//   headers: {
//     'accept': 'application/json',
//     'content-type': 'multipart/form-data'
//  }
});
