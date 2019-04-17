import React, { Component } from 'react';
import { Grid, Paper, Card, withStyles } from '@material-ui/core';

import Graph from './components/Graph';

import './App.css';
import GChart from './components/GChart';

const styles = theme => ({
  root: {
    width: '90%',
    margin: 'auto auto'
  },
  geoRoot: {
    marginTop: "-10%"
  },
  gridRoot: {
    marginTop: 16
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.geoRoot}>
          <GChart />
        </div>
        <Grid className={classes.gridRoot} container spacing={8} direction="column" alignItems="center">
          <Grid item>
            <Graph title="กราฟแสดง GDP ของแต่ละประเทศใน Westurn Europe" />
          </Grid>
          <Grid item>
            <Graph title="กราฟแสดง GDP ของแต่ละประเทศใน Westurn Europe" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);