import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import logo from "../../assets/images/logo.jpg";
const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: "grid",
    flexDirection: "column",
    gridTemplateColumns: "0.5fr 1fr",
    gridGap: theme.spacing(2),
    width: "100%",
    margin: 30,
  },
  profileLeftContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: 30,
  },
  profileRightContainer: {
    width: "100%",
    height: "100%",
    minWidth: 1000,
    padding: 30,
    border: "1px solid black",
    borderRadius: 10,
    display: "flex",
  },
  profileImg: {
    border: "1px solid black",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 300,
    "& img": {
      width: 290,
      height: 290,
    },
  },
  ProfileTopDetails: {
    height: 80,
    width: "100%",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr 1fr",
  },
  userNameDetails: {
    width: "100%",
  },
  editProfileBtn: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
  },
  userName: {
    display: "block",
    overflow: "hidden",
    whiteSpace: "normal !important",
    textOverflow: "ellipsis",
    textAlign: "left",
    wordWrap: "break-word",
    "-webkit-line-clamp": "2 !important",
    "-webkit-box-orient": "vertical",
    maxWidth: "95%",
    fontSize: theme.spacing(3.5),
    fontWeight: "bold",
  },
  designation: {
    color: "#36a971",
    fontSize: theme.spacing(2),
    fontWeight: 600,
  },
  profileDetail: {
    width: "100%",
    padding: 10,
  },
  editBtn: {
    with: 100,
    height: 30,
    backgroundColor: "#03c003",
    color: "#fff",
    borderRadius: 30,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  about: {
    fontSize: theme.spacing(2),
    fontWeight: "bold",
    marginTop: theme.spacing(3),
  },
  aboutDetails: {
    width: "100%",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr 1fr",
  },
  userTag: {
    padding: theme.spacing(1),
  },
  colan: {
    fontWeight: "bold",
    marginRight: theme.spacing(1),
  },
}));

export const Profile = () => {
  const classes = useStyles();
  const tags =  ["User Id", "First Name", "Last Name", "Email", "Phone", "Age", "DOB", "Sex", "Address"]
  return (
    <Grid xs={12} className={classes.profileContainer}>
      <Grid xs={4} className={classes.profileLeftContainer}>
        <div className={classes.profileImg}>
          <img src={logo} alt="logo" />
        </div>
      </Grid>
      <Grid xs={8} className={classes.profileRightContainer}>
        <div className={classes.profileDetail}>
          <Box sx={{ flexGrow: 1 }} className={classes.ProfileTopDetails}>
            <Grid item xs={8} className={classes.userNameDetails}>
              <Typography className={classes.userName}>
                {"Ravichandran TK"}
              </Typography>
              <Typography className={classes.designation}>
                {"Senior Developer at IndiumSoft"}
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.editProfileBtn}>
              <Button
                className={classes.editBtn}
                disableRipple={true}
                variant="outlined"
              >
                Edit Profile
              </Button>
            </Grid>
          </Box>
          <Typography className={classes.about}>{"About:"}</Typography>
          <Box sx={{ flexGrow: 1 }} className={classes.aboutDetails}>
            <Grid item xs={6} className={classes.userTags}>
              {tags?.map((tag) => {
                return <Typography className={classes.userTag}>{tag}</Typography>
              })}
            </Grid>
            <Grid item xs={6} className={classes.userTagAnswers}>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>ravichandran-thiyagarajan</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>Ravichandran</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>Thiyagarajan</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>tkravuece1996@gmail.com</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>+91 8098470875</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>26</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>05/08/1996</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>Male</Typography>
              <Typography className={classes.userTag}><span className={classes.colan}>:</span>1/47, North Street, Elanthanguzhi, Alathur, Perambalur,621 708</Typography>
            </Grid>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
