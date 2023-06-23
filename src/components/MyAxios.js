import axios from "axios";

export const MyAxios = async (customConfig, successCallBack, errorCallback) => {
  const reqToken = localStorage.getItem("user_info");
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-app-auth": reqToken,
  };
  const initConfig = {
    method: "get",
    headers: headers,
  };
  const config = { ...initConfig, ...customConfig };
  headers = { ...headers, ...customConfig.headers };
  config.headers = headers;

  axios.interceptors.response.use(
    async (res) => {
      return Promise.resolve(res);
    },
    async (error) => {
      return Promise.reject(error);
    }
  );
  let response = null
  try {
    response = await axios(config)
      .then((res) => {
        return res
      })
      .catch((error) => {
        return error
      });
  } catch (error) {
    return error;
  }
  return response;
};
