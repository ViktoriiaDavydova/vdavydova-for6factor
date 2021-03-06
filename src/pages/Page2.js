import React from "react";
import UserInfo from "../user/UserInfo";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FeatureCard from "../components/FeatureCard";
import featureList from "../components/featureList";
import CategoryList from "../components/CategoryList";
import ImageGallery from "../components/ImageGallery";

/**
 * Component for Page 2
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    padding: "1rem",
    height: "15vh",
    boxShadow: "none",
  },
  title: {
    fontWeight: "bold",
    padding: 0,
  },
}));

export default function Page2() {
  const classes = useStyles();
  return (
    <div className="tabcontent">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4} container spacing={1}>
            <Grid item xs={12} container spacing={1}>
              <UserInfo />
            </Grid>
          </Grid>
          <Grid item xs={8} container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h1"
                >
                  REDEEM POINTS
                </Typography>
                <Typography variant="body2" component="span">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  rcitation ullamco
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} container spacing={1}>
              {featureList.map((featureItem) => (
                <FeatureCard
                  key={featureItem.id}
                  name={featureItem.name}
                  img={featureItem.img}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={1}>
            <CategoryList />
            <ImageGallery />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
