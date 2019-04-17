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

class SupakornGraphs extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        const { google } = window;
        const _this = this;

        function drawChart() {
            let url = "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=CHE_GDP_Factors&headers=1&tq=";
            let queryString = encodeURIComponent("select A,B,C,D,E,F,G");
            let query = new google.visualization.Query(url + queryString);
            query.send(handleGDPStackFactorsResponse);
        
            url = "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=CHE_REV_Factors&headers=1&tq=";
            queryString = encodeURIComponent("select A,B,C,D,E");
            query = new google.visualization.Query(url + queryString);
            query.send(handleRevStackFactorsResponse);
        }

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
                    title: "Year"
                }
            };
        
            var gdp_area = new google.visualization.AreaChart(_this.chartRef.current);
            gdp_area.draw(data, options_fullStacked);
        }
        
        function handleRevStackFactorsResponse(response) {
            if (response.isError()) {
                errorAlert(response);
                return;
            }
            var data = response.getDataTable();
        
            var options_fullStacked = {
                title: "Rev Factors",
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
                }
            };
        
            var gdp_area = new google.visualization.AreaChart(
                document.getElementById("stack_CHE_Rev")
            );
            gdp_area.draw(data, options_fullStacked);
        }
        
        function errorAlert(res) {
            alert(
                "Error in query: " +
                res.getMessage() +
                " " +
                res.getDetailedMessage()
            );
        }

        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(drawChart);
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title="กราฟแสดง GDP ในแต่ละประเทศ"
                    subheader="ทดสอบ"
                />
                <div ref={this.chartRef} style={{ width: 900, height: 500 }}></div>
                <CardContent>
                <Typography component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                </CardContent>
            </Card>
        );
    }
}

SupakornGraphs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SupakornGraphs);