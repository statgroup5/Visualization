import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Grid, withStyles, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = theme => ({
    root: {
        padding: 8,
    },
    rootLeft: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column'
    },
    active: {
        fontWeight: 'bold',
        color: 'black'
    },
    inactive: {
        fontWeight: 'normal',
        color: '#BFBFBF'
    }
});

class GraphLayout extends React.Component {
    render() {
        const { classes, name } = this.props;
        const childrens = React.Children.toArray(this.props.children);

        return (
            <React.Fragment>
                <Grid className={classes.root} container direction="row">
                    <Grid item xs={3}>
                        <div className={classes.rootLeft}>
                            <div>
                                <Button variant="fab" color="primary" onClick={() => this.props.history.push("/")}>
                                    <ArrowBack />
                                </Button>
                            </div>
                            <div style={{ marginTop: 100 }}>
                                {/* <Typography variant="h2">{this.props.name}</Typography> */}
                                <Link to="/france"><Typography className={classnames({ [classes.active]: name === 'France', [classes.inactive]: name !== 'France' })} variant="h2">France</Typography></Link>
                                <Link to="/germany"><Typography className={classnames({ [classes.active]: name === 'Germany', [classes.inactive]: name !== 'Germany' })} variant="h2">Germany</Typography></Link>
                                <Link to="/italy"><Typography className={classnames({ [classes.active]: name === 'Italy', [classes.inactive]: name !== 'Italy' })} variant="h2">Italy</Typography></Link>
                                <Link to="/luxembourg"><Typography className={classnames({ [classes.active]: name === 'Luxembourg', [classes.inactive]: name !== 'Luxembourg' })} variant="h2">Luxembourg</Typography></Link>
                                <Link to="/switzerland"><Typography className={classnames({ [classes.active]: name === 'Switzerland', [classes.inactive]: name !== 'Switzerland' })} variant="h2">Switzerland</Typography></Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container direction="column" spacing={16} alignItems="center">
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