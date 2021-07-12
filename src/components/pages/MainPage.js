import React from "react";
import UserInfo from "../UserInfo";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import UserAccount from "../UserAccount";
import Grid from "@material-ui/core/Grid";
import RedeemItem from "../RedeemItem";
import redeemItemList from "../redeemItemList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: "1rem",
    // height: 200,
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
            <Grid item xs={12} container spacing={1}>
              {redeemItemList.map((redeemItem) => (
                <RedeemItem
                  key={redeemItem.id}
                  id={redeemItem.id}
                  name={redeemItem.name}
                  img={redeemItem.img}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
