import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "40vh",
    boxShadow: "none",
   },
  details: {
    display: "flex",
    flexDirection: "column",
    // paddingLeft: 10
  },
  content: {
    // flex: "1 0 auto",
    margin: "auto",
    textAlign: "center",
    // paddingLeft: 10
  },
  cover: {
    width: "20vh",
    height: "30vh",
  },
 
 }));

export default function UserCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://images.freeimages.com/images/large-previews/5d2/silver-tabby-1-1409267.jpg"
        title="Cat John"
      />
      <div className={classes.details}>
        <CardContent className={classes.content} >
          <Typography component="h3" variant="h3">
            John
          </Typography>
          <Typography component="h4" variant="h4" color="textSecondary">
            500 pts
          </Typography>
        </CardContent>
        
      </div>
    </Card>
  );
}
