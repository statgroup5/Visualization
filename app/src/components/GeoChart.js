import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
    }
});

class GeoChart extends React.Component {
    
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.rootRef = React.createRef();
        this.titleRef = React.createRef();
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
                ['Country',   'Recent GDP'],
                ['France',  2291697],
                ['Germany', 3277340],
                ['Switzerland', 586148],
                ['Luxembourg', 55299],
                ['Italy', 1724205],
            ]);
            
            var options = {
                sizeAxis: { minValue: 55299.37, maxValue: 3277340 },
                colorAxis: {
                    colors: ['lightpink', 'pink', 'tomato', 'crimson' ],
                    value: [ 55299, 586148, 1724205, 2291697, 3277340]
                },
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
                svg.style = "transform: scale(1.25) translate3d(5%, -5%, 0);";

                const divRootStyles = window.getComputedStyle(_this.rootRef.current);
                const divTitleStyles = window.getComputedStyle(_this.titleRef.current);
                const top = divRootStyles.height.replace("px", "") / 2 - divTitleStyles.height.replace("px", "");
                _this.titleRef.current.style.top = `${top}px`;
            });

            google.visualization.events.addListener(chart, 'regionClick', function(e) {
                switch (e.region) {
                    case "IT":
                        _this.props.history.push("/italy");
                        break;
                    case "FR":
                        _this.props.history.push("/france");
                        break;
                    case "CH":
                        _this.props.history.push("/switzerland");
                        break;
                    case "DE":
                        _this.props.history.push("/germany");
                        break;
                    case "LU":
                        _this.props.history.push("/luxembourg");
                        break;
                }
            });
        }
    }
    
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.root} ref={this.rootRef}>
                    <div ref={this.chartRef} className={classes.chart}></div>
                </div>
                <div ref={this.titleRef} style={{ position: 'absolute', zIndex: 10000, fontWeight: 'bold', left: 80, fontSize: 80 }}>
                        <div>Western</div>
                        <div>Europe</div>
                </div>
            </React.Fragment>
        );
    }
}
    
GeoChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeoChart);