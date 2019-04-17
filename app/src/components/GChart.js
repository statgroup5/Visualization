import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Graph from './Graph';

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
    }
});

class GChart extends React.Component {
    
    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }
    
    componentDidMount() {
        const { google } = window;

        google.charts.load('current', {
            'packages': ['geochart'],
            'mapsApiKey': 'AIzaSyBAcjCPZn38wQyohwRtTVDYB6g64EU91AQ'
        });
        google.charts.setOnLoadCallback(drawMarkersMap);
        
        const _this = this;
        function drawMarkersMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country',   'Population', 'Area Percentage'],
                ['France',  1, 6],
                ['Germany', 2, 7],
                ['Switzerland', 3, 8],
                ['Luxembourg', 4, 9],
                ['Italy', 5, 10],
            ]);
            
            var options = {
                region: '150', // Western Europe
                displayMode: 'region',
                keepAspectRatio: true,
                height: window.innerHeight,
                width: window.innerWidth,
            };
            
            var chart = new google.visualization.GeoChart(_this.chartRef.current);
            chart.draw(data, options);

            google.visualization.events.addListener(chart, 'ready', function() {
                const svg = _this.chartRef.current.getElementsByTagName('svg')[0];
                svg.style = "transform: scale(1.25) translate3d(5%, -10%, 0);";
            });

            google.visualization.events.addListener(chart, 'regionClick', function(e) {
                console.log(e);
            });
        }
    }
    
    render() {
        const { classes } = this.props;
        
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <div ref={this.chartRef} className={classes.chart}></div>
                </div>
            </React.Fragment>
        );
    }
}
    
GChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GChart);