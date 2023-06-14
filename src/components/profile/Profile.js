import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/core";
import { BorderRight } from "@material-ui/icons";
import { Box, Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    border: "1px solid black",
    borderRadius: 10,
  },
}));

export const Profile = () => {
  const classes = useStyles();
  return (
    <Grid xs={12} className={classes.profileContainer}>
      Profile page
      <span> This me</span>
    </Grid>
  );
};
