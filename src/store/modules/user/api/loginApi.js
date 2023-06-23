import { AppConsts } from "../../../../components/AppConsts";
import { MyAxios } from "../../../../components/MyAxios";
import { toast } from "react-toastify";

export const loginApi = async ({ email, password }) => {
  const config = {
    method: "post",
    url: `${AppConsts.LOGIN_API_URL}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      email: email,
      password: password,
    },
  };
  let res = { authenticated: false, userInfo: {} };

  const procedSuccessResponse = (resp) => {
    const userInfo = resp?.data ? JSON.stringify(resp?.data) : "";
    localStorage.setItem(AppConsts.USER_INFO, userInfo);
    toast.success("Loged in successfully");
    res = { authenticated: true, userInfo: resp?.data };
    return res;
  };

  const procedErrorResponse = (err) => {
    const errResponse = err?.response?.data?.error || err?.message;
    toast.error(errResponse);
    return err;
  };
  try {
    const response = await MyAxios(config);
    return procedSuccessResponse(response);
  } catch (error) {
    return procedErrorResponse(error);
  }
};
