import React from 'react';
import { Grid, withStyles, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import ArrowBack from '@material-ui/icons/ArrowBack';

import Graph from './Graph';

const styles = theme => ({
    root: {
        padding: 8
    },
    rootLeft: {
        position: 'fixed'
    }
});

class GraphLayout extends React.Component {
    render() {
        const { classes } = this.props;
        const childrens = React.Children.toArray(this.props.children);
        return (
            <React.Fragment>
                <Grid className={classes.root} container direction="row">
                    <Grid item xs={4}>
                        <div className={classes.rootLeft}>
                            <Button variant="fab" onClick={() => this.props.history.replace("/")}><ArrowBack /></Button>
                            <Typography variant="h2">{this.props.name}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction="column" spacing={8}>
                            { 
                                childrens.map(ele => (
                                    <Grid item>
                                        {ele}
                                    </Grid>
                                ))
                            }
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