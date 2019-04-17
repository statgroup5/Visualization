import React from 'react';
import { Grid, withStyles, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import ArrowBack from '@material-ui/icons/ArrowBack';

import Graph from './Graph';

const styles = theme => ({

});

class GraphLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid container direction="row">
                    <Grid item xs={4}>
                        <Button variant="fab" onClick={() => this.props.history.replace("/")}><ArrowBack /></Button>
                        <Typography variant="h1">{this.props.name}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction="column" spacing={8}>
                            {this.props.children}
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

GraphLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(GraphLayout);