import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

/**
 * Component for displaying "image gallery" on the second page
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    width: "100vh",
    height: "100%",
    border: "none",
    boxShadow: "none",
  },
  img: {
    width: "15vh",
    height: "15vh",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {[0, 1, 2, 3].map((i) => (
          <Grid item xs={2}>
            <img
              className={classes.img}
              src="https://www.pngkey.com/png/detail/70-703356_cross-sign-comments-thin-x-sign-png.png"
              alt="X sign"
            />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={12}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormRow />
          </Grid>
          <Grid
            container
            item
            xs={12}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormRow />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
