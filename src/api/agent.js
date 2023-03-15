import axios from "axios";
import { authSlice } from '../slice';
export const axiosInstance = axios.create({
  baseURL: "https://medium-test.vercel.app/",
  withCredentials: false,
//   headers: {
//     'accept': 'application/json',
//     // 'content-type': 'multipart/form-data'
//  }
});
// axiosInstance.interceptors.request.use(
//   config => {
//     const { token } = authSlice.getState().auth.token;
//     if (token) {
//       config.headers.Authorization = "Bearer " + token;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

