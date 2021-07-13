import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../images/logo.png";
import MainPage from "../pages/MainPage";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";

/**
 * Component for displaying header and tab bar
 */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    flexGrow: 1,
    backgroundColor: "#46aae6",
    height: "7rem",
  },
  logo: {
    maxHeight: 70,
    margin: "2.5rem 0.5rem 0.5rem 30vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tabPanel: {
    backgroundColor: theme.palette.background.paper,
    width: "100vh",
    marginLeft: "auto",
    marginRight: "30vh",
  },
  title: {
    flexGrow: 1,
    marginTop: "2.5rem",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tabPanel}

        >
          <Tab label="Page One" {...a11yProps(0)} />
          <Tab label="Page Two" {...a11yProps(1)} />
          <Tab label="Page Three" {...a11yProps(2)} />
          <Tab label="Page Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <MainPage />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Page2 />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Page3 />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Page4 />
      </TabPanel>
    </div>
  );
}
