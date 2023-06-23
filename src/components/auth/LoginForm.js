import {
  Box,
  Button,
  InputAdornment,
  Link,
  makeStyles,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import { ReactComponent as EyeOpen } from "../../assets/icons/openedEye.svg";
import { ReactComponent as EyeClose } from "../../assets/icons/closedEye.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { loginApi } from "../../store/modules/user";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  loginFormContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: theme.spacing(1),
    boxShadow: "10px 10px 10px 10px #d8cfcf",
    height: theme.spacing(75),
    width: theme.spacing(75),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
    },
  },
  loginBtn: {
    "&:hover": {
      backgroundColor: "blue",
      color: "#fff",
    },
  },
  otherLink: {
    display: "flex",
    padding: theme.spacing(1),
    marginTop: theme.spacing(1.5),
    columnGap: theme.spacing(5),
    width: "auto",
  },
  title: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(3),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  eyeIcon: {
    cursor: "pointer",
  },
  closeIcon: {
    cursor: "pointer",
  },
}));
export const LoginForm = () => {
  const classes = useStyles();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [isEyeopened, setIsEyeopened] = useState(false);
  const handleLogin = () => {
    if (email === "") {
      setIsEmailWrong(true);
      emailRef?.current?.focus();
    } else if (password === "") {
      setIsPasswordWrong(true);
      passwordRef?.current?.focus();
    } else if (!isValidEmail(email)) {
      setIsEmailWrong(true);
      emailRef?.current?.focus();
    }else{
      dispatch(loginApi({email, password}));
      window.location.assign("/");
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  return (
    <Box
      component="form"
      className={classes.loginFormContainer}
      noValidate
      autoComplete="off"
    >
      <div className={classes.title}>Login</div>
      <TextField
        error={isEmailWrong}
        id="outlined-basic"
        autoComplete="off"
        label="Email"
        variant="outlined"
        inputRef={emailRef}
        placeholder="Please enter the Email"
        required
        value={email}
        type="email"
        onChange={(e) => {
          setEmail(e.target?.value);
          setIsEmailWrong(false);
        }}
        helperText={isEmailWrong && "Incorrect Email."}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {email && (
                <Close
                  className={classes.closeIcon}
                  onClick={() => setEmail("")}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
      <TextField
        error={isPasswordWrong}
        id="outlined-basic"
        autoComplete="off"
        label="Password"
        variant="outlined"
        required
        inputRef={passwordRef}
        value={password}
        type={isEyeopened ? "text" : "password"}
        onChange={(e) => {
          setPassword(e.target?.value);
          setIsPasswordWrong(false);
        }}
        placeholder="Please enter the Password"
        helperText={isPasswordWrong && "Incorrect password entry."}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {password &&
                (!isEyeopened ? (
                  <EyeClose
                    className={classes.eyeIcon}
                    onClick={() => setIsEyeopened(true)}
                  />
                ) : (
                  <EyeOpen
                    className={classes.eyeIcon}
                    onClick={() => setIsEyeopened(false)}
                  />
                ))}
            </InputAdornment>
          ),
        }}
      />
      <Button
        className={classes.loginBtn}
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
      <div className={classes.otherLink}>
        <Link href="#" underline="hover">
          Forgot password?
        </Link>
        <Link href="#" underline="hover">
          Don't have an account? Sign Up
        </Link>
      </div>
    </Box>
  );
};
