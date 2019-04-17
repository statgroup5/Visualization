import React, { Component } from 'react';
import { Grid, Paper, Card, withStyles } from '@material-ui/core';
import { MemoryRouter, StaticRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import GChart from './components/GeoChart';
import GraphLayout from './components/GraphLayout';

import Switzerland from './graphs/Switzerland';
import Germany from './graphs/Germany';
import Luxembourg from './graphs/Luxembourg';
import Italy from './graphs/Italy';
import France from './graphs/France';

const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto auto'
  },
  geoRoot: {
    marginTop: "-10%"
  },
  gridRoot: {
    marginTop: 16
  }
});

class MainImpl extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.geoRoot}>
          <GChart {...this.props} />
        </div>
        <Grid className={classes.gridRoot} container spacing={8} direction="column" alignItems="center">
          <Grid item>

          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const Main = withStyles(styles)(MainImpl);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MemoryRouter basename="/">
          <Switch>
            <Route exact path="/" render={props => <Main {...props} />} />
            <Route exact path="/germany" render={props => <Germany {...props} /> } />
            <Route exact path="/france" render={props => <France {...props} /> } />
            <Route exact path="/switzerland" render={props => <Switzerland {...props} /> } />
            <Route exact path="/luxembourg" render={props => <Luxembourg {...props} /> } />
            <Route exact path="/italy" render={props => <Italy {...props} /> } />
          </Switch>
        </MemoryRouter>
      </React.Fragment>
    );
  }
}

export default App;