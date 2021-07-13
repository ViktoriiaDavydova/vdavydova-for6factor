import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

/**
 * Component for displaying category list on the second page
 */

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "40vh",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    padding: 0,
  },
  divider: {
    margin: 5,
  },
}));

export default function CategoryList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h6"
        component="h1"
      >
        CATEGORY
      </Typography>
      <Typography variant="body2" component="span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. rcitation ullamco
      </Typography>
      <Divider className={classes.divider} />
      <List component="cat" aria-label="categories">
        <ListItem button>
          <ListItemText primary="1 Item" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="2 Item" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="3 Item" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="4 Item" />
        </ListItem>
      </List>
    </div>
  );
}
