import React from "react";
import UserInfo from "../UserInfo";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import UserAccount from "../UserAccount";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // box: {
  //   height: "100%",
  //   width: "100%",
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: "1rem",
    height: 200,
    boxShadow: "none",
  },
}));

export default function MainPage() {
  const classes = useStyles();
  return (
    <div className="tabcontent">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Grid item xs={12}>
              <UserInfo />
            </Grid>
            <Grid item xs={12}>
              <UserAccount />
            </Grid>
          </Grid>
          <Grid item xs={8} container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=4</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=5</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
