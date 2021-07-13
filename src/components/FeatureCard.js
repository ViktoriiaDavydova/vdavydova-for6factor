import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

/**
 * Component for displaying feature cards on the second page
 */

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "20vh",
    width: "28vh",
    border: "none",
    boxShadow: "none",
    margin: 5,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    width: "15vh",
    textAlign: "justify",
  },
  cover: {
    width: "10vh",
  },
  title: {
    fontWeight: "bold",
  },
}));

export default function FeatureCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="subtitle1"
          component="h1"
        >
          {props.name}
        </Typography>
        <CardContent className={classes.content}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={props.img} />
    </Card>
  );
}
