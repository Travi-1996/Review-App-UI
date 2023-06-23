import {makeStyles, createStyles} from "@material-ui/core/styles";
import {ToastContainer, Slide, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "auto",
      minWidth: theme.spacing(33.25),
      padding: 0,
      marginBottom: 0,
      backgroundColor: "transparent",
      [theme.breakpoints.down("xs")]: {
        width: `calc(100% - 40px)`,
        maxWidth: theme.spacing(45),
      },
      "&.Toastify__toast-container--top-right": {
        top: theme.spacing(5),
      },
    },
  }),
);

export function RVToastContainer() {
  const classes = useStyles();
  return (
    <ToastContainer
      position={toast.POSITION.TOP_RIGHT}
      transition={Slide}
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      closeButton
      limit={1}
      className={classes.root}
    />
  );
}
