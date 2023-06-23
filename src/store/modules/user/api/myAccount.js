import { AppConsts } from "../../../../components/AppConsts";
import { MyAxios } from "../../../../components/MyAxios";
import { toast } from "react-toastify";

export const myAccount = async ({ email, password }) => {
  const config = {
    method: "get",
    url: `${AppConsts.USER_DETAIL_INFO}/${useId}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const procedErrorResponse = (err) => {
    const errResponse = err?.response?.data?.error || err?.message;
    toast.error(errResponse);
    return err;
  };
  try {
    const response = await MyAxios(config);
    return response?.data ?? {}
  } catch (error) {
    return procedErrorResponse(error);
  }
};
