import { toast } from 'react-toastify';

export const showToast = ({ text, type = "" }) => {
  return toast.success(text);
  // switch (type) {
  //   case "success":
  //     return toast.success(text);
  //   case "error":
  //     return toast.error(text);
  //   case "warning":
  //     return toast.warning(text);
  //   default:
  //     return toast.info(text);
  // }
};
