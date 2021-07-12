import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "40vh",
    minHeight: 250,
    border: "none",
    boxShadow: "none",
  },

  button: {
    float: "right",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    padding: 0,
  },
  span: {
    textAlign: "justify",
    color: "black",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h6"
          component="h1"
        >
          ACCOUNT SUMMARY
        </Typography>
        <Typography variant="body2" component="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut dolore
          eu fugiat nulla minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut
        </Typography>
      </CardContent>
      <CardActions className={classes.button} disableSpacing>
        <Button size="large" style={{ fontWeight: "bold", color: "#0a84d1" }}>
          EDIT
        </Button>
      </CardActions>
    </Card>
  );
}
