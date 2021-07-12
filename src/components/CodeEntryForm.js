import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40vh",
    backgroundColor: "#FFFFFF",
    padding: 5
  },
  input: {
    flex: 1,
    width: "32vh",
  },
  iconButton: {
    padding: 10,
    color: "#0a84d1",
  },
  inputLabel: {
    color: "black",
    fontWeight: "bold"
  },
  divider: {
    height: 2,
    width: "32vh",
  },
}));

export default function ComposedTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <InputLabel htmlFor="input-base" className={classes.inputLabel}>
        CODE ENTRY
      </InputLabel>
      <InputBase
        className={classes.input}
        placeholder="Enter Your Code Here"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="playCircleOutlineIcon"
      >
        <PlayCircleOutlineIcon />
      </IconButton>
      <Divider className={classes.divider} />
    </form>
  );
}
