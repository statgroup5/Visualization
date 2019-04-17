import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Graph from '../components/Graph';
import GraphLayout from '../components/GraphLayout';

const styles = theme => ({
    card: {
      maxWidth: 960,
      minWidth: 320
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class France extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef1 = React.createRef();
        this.chartRef2 = React.createRef();
        this.chartRef3 = React.createRef();
        this.chartRef4 = React.createRef();
    }

    componentDidMount() {
        const { google } = window;
        const _this = this;
        
        function drawChart() {
            let url =
                "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=FRA_GDP_Factors&headers=1&tq=";
            let queryString = encodeURIComponent("select A,B,C,D,E");
            let query = new google.visualization.Query(url + queryString);
            query.send(handleGDPStackFactorsResponse);
        
            url =
                "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=FRA_REV_Factors&headers=1&tq=";
            queryString = encodeURIComponent("select A,B,C,D,E");
            query = new google.visualization.Query(url + queryString);
            query.send(handleRevStackFactorsResponse);
        
            url =
                "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=FRA_GDP_Factors&headers=1&tq=";
            queryString = encodeURIComponent("select A,F");
            query = new google.visualization.Query(url + queryString);
            query.send(handleGDPLineResponse);
        
            url =
                "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=FRA_REV_Factors&headers=1&tq=";
            queryString = encodeURIComponent("select A,F");
            query = new google.visualization.Query(url + queryString);
            query.send(handleRevLineResponse);
        }
        const animate = "out"
        
        function handleGDPStackFactorsResponse(response) {
            if (response.isError()) {
                errorAlert(response);
                return;
            }
            var data = response.getDataTable();
        
            var options_fullStacked = {
                title: "GDP Factors",
                isStacked: "relative",
                legend: {
                    position: "right",
                    maxLines: 3
                },
                vAxis: {
                    format: "#%",
                    minValue: 0,
                    ticks: [0, 0.2, 0.4, 0.6, 0.8, 1]
                },
                hAxis: {
                    format: '#',
                    title: "year"
                },
                animation: {
                    duration: 1000,
                    easing: animate,
                    startup: true,
                },
            };
        
            var gdp_area = new google.visualization.AreaChart(_this.chartRef1.current);
            gdp_area.draw(data, options_fullStacked);
        }
        
        function handleRevStackFactorsResponse(response) {
            if (response.isError()) {
                errorAlert(response);
                return;
            }
            var data = response.getDataTable();
        
            var options_fullStacked = {
                title: "Revenue Factors",
                isStacked: "relative",
                legend: {
                    position: "right",
                    maxLines: 3
                },
                vAxis: {
                    format: "#%",
                    minValue: 0,
                    ticks: [0, 0.2, 0.4, 0.6, 0.8, 1]
                },
                hAxis: {
                    format: '#',
                    title: "year"
                },
                animation: {
                    duration: 1000,
                    easing: animate,
                    startup: true,
                },
            };
        
            var gdp_area = new google.visualization.AreaChart(_this.chartRef2.current);
            gdp_area.draw(data, options_fullStacked);
        }
        
        function handleGDPLineResponse(response) {
            if (response.isError()) {
                errorAlert(response);
                return;
            }
            var data = response.getDataTable();
            var options = {
                title: "GDP",
                curveType: 'function',
                legend: {
                    position: 'bottom'
                },
                animation: {
                    duration: 1000,
                    easing: animate,
                    startup: true,
                },
            };
        
            var gdp_area = new google.visualization.LineChart(_this.chartRef3.current);
            gdp_area.draw(data, options);
        }
        
        function handleRevLineResponse(response) {
            if (response.isError()) {
                errorAlert(response);
                return;
            }
            var data = response.getDataTable();
            var options = {
                title: "Revenue",
                curveType: 'function',
                legend: {
                    position: 'bottom'
                },
                animation: {
                    duration: 1000,
                    easing: animate,
                    startup: true,
                },
            };
        
            var gdp_area = new google.visualization.LineChart(_this.chartRef4.current);
            gdp_area.draw(data, options);
        }
        
        function errorAlert(res) {
            alert("Error in query: " + res.getMessage() + " " +
                res.getDetailedMessage());
        }
     
        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(drawChart);
    }

    render() {
        const { classes } = this.props;

        return (
            <GraphLayout name="France" history={this.props.history}>
                <Graph title="">
                    <div ref={this.chartRef1} style={{ width: 900, height: 500 }}></div>
                </Graph>
                <Graph title="">
                    <div ref={this.chartRef2} style={{ width: 900, height: 500 }}></div>
                </Graph>
                <Graph title="">
                    <div ref={this.chartRef3} style={{ width: 900, height: 500 }}></div>
                </Graph>
                <Graph title="">
                    <div ref={this.chartRef4} style={{ width: 900, height: 500 }}></div>
                </Graph>
            </GraphLayout>
        );
    }
}

France.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(France);