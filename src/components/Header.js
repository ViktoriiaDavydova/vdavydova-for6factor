import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";
import Tabs from "./Tabs";

/**
 * Component for displaying header
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0a84d1",
  },
  header: {
    backgroundColor: "#0a84d1",
    height: "7rem",
  },
  logo: {
    maxHeight: 70,
    margin: "2.5rem 0.5rem 0.5rem 5%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: "2.5rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Redeem for
            <br />
            your dream
          </Typography>
        </Toolbar>
        <Tabs />
      </AppBar>
    </div>
  );
}
