import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 150,
    width: 250,
    border: "none",
    boxShadow: "none",
    margin: 5
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    width: 150,
    textAlign: "justify",
  },
  cover: {
    width: 50,
    // margin: 10,
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
      <CardMedia
        className={classes.cover}
        image={props.img}

      />
    </Card>
  );
}
