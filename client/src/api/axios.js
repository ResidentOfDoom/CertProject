import axios from "axios";
const Cookies = require("js-cookie");

// now we only have to add the url parts that come after '.../api/'
export const instance = axios.create({
  baseURL: "http://localhost:5021/api/",
});

// on every request add the token to the header
instance.interceptors.request.use(
  function (config) {
    const cookie = Cookies.get("currentUser");
    const parsedCookie = cookie ? JSON.parse(cookie) : "";
    const token = parsedCookie?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
