import { Box, makeStyles } from "@material-ui/core";
import bgImage from "../../assets/images/bgImage.jpg";
import { LoginForm } from "./LoginForm";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  splitScreen: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  rightDiv: {
    padding: theme.spacing(1),
    textAlign: "center",
    width: "50%",
  },
  leftDiv: {
    padding: theme.spacing(1),
    width: "50%",
    textAlign: "center",
    height: "95vh",
    "& img": {
      borderRadius: theme.spacing(1),
      width: "100%",
      height: "95vh",
    },
  },
  loginForm: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));

export const Login = () => {
  const classes = useStyles();
  useEffect(() => {
    if (window.location.href !== window.location.origin + "/login") {
      window.location.replace(window.location.origin + "/login");
    }
  }, []);

  return (
    <div className={classes.splitScreen}>
        <Helmet title="Login | RV-APP"/>
        <div className={classes.leftDiv}>
          <img src={bgImage} alt="bgImage" />
        </div>
        <div className={classes.rightDiv}>
          <Box className={classes.loginForm}>
            <LoginForm />
          </Box>
        </div>
      </div>
  );
};
