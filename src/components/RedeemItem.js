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
    height: "20vh",
    width: "100vh",
    border: "none",
    boxShadow: "none",

  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    width: "70vh",
    textAlign: "justify"
  },
  cover: {
    width: "17vh",
    margin: 10
  },
  avatar: {
    backgroundColor: "#0a84d1",
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  iconButton: {
    padding: 10,
    color: "#0a84d1",
    float: "right"
  }
}));

export default function RedeemItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.id}
            </Avatar>
          }
          titleTypographyProps={{ variant: "h6" }}
          title={props.name}
        />
        <CardContent className={classes.content}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            faucibus turpis. Turpis egestas sed tempus erat imperdiet sed

          </Typography>
          <IconButton
            className={classes.iconButton}
            aria-label="playCircleOutlineIcon"
          >
            <PlayCircleOutlineIcon />
          </IconButton>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.img}
        // title={props.name}
      />
    </Card>
  );
}
