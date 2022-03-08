import React, { Component } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import DataTable from '../table/DataTable'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.dark,
  },
});


class TabsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 0
        };
      };


    handleChange = (event, newValue) => {     
        console.log(newValue);
        this.setState({
          value: newValue
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                <Tab label="Pairwise Similarity" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={this.state.value} index={0}>
              <DataTable/>
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={this.state.value} index={2}>
              Item Three
            </TabPanel>
          </div>
          );
    }
}


export default withStyles(useStyles)(TabsComponent)