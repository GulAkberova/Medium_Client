import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://medium-test.vercel.app/",
  withCredentials: false,
//   headers: {
//     'accept': 'application/json',
//     // 'content-type': 'multipart/form-data'
//  }
});
