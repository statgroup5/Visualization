import React, { Component } from 'react';
import { Grid, Paper, Card, withStyles, Button } from '@material-ui/core';
import { MemoryRouter, BrowserRouter, StaticRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import GeoChart from './components/GeoChart';
import GraphLayout from './components/GraphLayout';

import Switzerland from './graphs/Switzerland';
import Germany from './graphs/Germany';
import Luxembourg from './graphs/Luxembourg';
import Italy from './graphs/Italy';
import France from './graphs/France';
import Graph from './components/Graph';

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

  constructor(props) {
    super(props);

    this.refAllGdp = React.createRef();
    this.refAllRev = React.createRef();

    this.refGdpDistributive = React.createRef();
    this.refGdpFinancial = React.createRef();
    this.refGdpIndustry = React.createRef();
    this.refRevGood = React.createRef();
    this.refTaxGrowthRate = React.createRef();

    this.chart = {};
  }

  componentDidMount() {
    const { google } = window;
    const _this = this;

    const animate = "out";
    this.chart.drawChart = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
      var queryString = encodeURIComponent("select A,B,C,D,E,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPLineResponse);
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GrowthRate&headers=1&tq=";
      queryString = encodeURIComponent("select A,B,C,D,E,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleTaxGrowthRateLineResponse);
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GDP_DIS&headers=1&tq=";
      queryString = encodeURIComponent("select A,B,C,D,E");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPDISLineResponse);
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GDP_FI&headers=1&tq=";
      queryString = encodeURIComponent("select A,B,C,D,E");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPFILineResponse);
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GDP_IN&headers=1&tq=";
      queryString = encodeURIComponent("select A,B,C,D,E");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPINLineResponse);
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=REV_GOOD&headers=1&tq=";
      queryString = encodeURIComponent("select A,B,C,D,E,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVGOODLineResponse);
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
      var queryString = encodeURIComponent("select A,B,C,D,E,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVLineResponse);
    };

    this.chart.drawChartALL = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
      var queryString = encodeURIComponent("select A,B,C,D,E,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPLineResponse);
    };
    
    this.chart.drawChartITA = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
      var queryString = encodeURIComponent("select A,B");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPLineResponse);
    };
  
    this.chart.drawChartGER = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
      var queryString = encodeURIComponent("select A,E");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPLineResponse);
    };
  
    this.chart.drawChartLUX = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
      var queryString = encodeURIComponent("select A,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPLineResponse);
    };
  
    this.chart.drawChartCHE = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
      var queryString = encodeURIComponent("select A,C");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPLineResponse);
    };
  
    this.chart.drawChartFRA = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
      var queryString = encodeURIComponent("select A,D");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleGDPLineResponse);
    };

    this.chart.handleGDPLineResponse = function(response) {
      if (response.isError()) {
        errorAlert(response);
        return;
      }
      var data = response.getDataTable();
      var options = {
        title: 'Gross Domestic Product 1995-2017 (GDP)',
        hAxis: {
          title: "Year",
          format: '#',
          viewWindow: {
            max: 2017
          }
        },
        vAxis: {
          title: "Euro, Millions",
        },
        animation: {
          duration: 1000,
          easing: animate,
          startup: true,
        },
      }
      var chart = new google.visualization.LineChart(_this.refAllGdp.current);
      chart.draw(data, options);
    };
  
    this.chart.handleGDPDISLineResponse = function(response) {
  
      if (response.isError()) {
        errorAlert(response);
        return;
      }
      var data = response.getDataTable();
  
      var options = {
        title: 'GDP Distributive',
        vAxis: {
          title: 'Euro, Millions'
        },
        hAxis: {
          title: 'Year',
          format: '#'
        },
        seriesType: 'bars',
        series: {
          5: {
            type: 'line'
          }
        }
      };
  
      var gdpdis = new google.visualization.ComboChart(_this.refGdpDistributive.current);
      gdpdis.draw(data, options);
    };
  
    this.chart.handleGDPFILineResponse = function(response) {
  
      if (response.isError()) {
        errorAlert(response);
        return;
      }
      var data = response.getDataTable();
  
      var options = {
        title: 'GDP Financial and insurance activities',
        vAxis: {
          title: 'Euro, Millions'
        },
        hAxis: {
          title: 'Year',
          format: '#'
        },
        seriesType: 'bars',
        series: {
          5: {
            type: 'line'
          }
        }
      };
  
      var gdpfi = new google.visualization.ComboChart(_this.refGdpFinancial.current);
      gdpfi.draw(data, options);
    };
  
    this.chart.handleGDPINLineResponse = function(response) {
  
      if (response.isError()) {
        errorAlert(response);
        return;
      }
      var data = response.getDataTable();
  
      var options = {
        title: 'GDP Industry Energy',
        vAxis: {
          title: 'Euro, Millions'
        },
        hAxis: {
          title: 'Year',
          format: '#'
        },
        seriesType: 'bars',
        series: {
          5: {
            type: 'line'
          }
        }
      };
  
      var gdpin = new google.visualization.ComboChart(_this.refGdpIndustry.current);
      gdpin.draw(data, options);
    };
  
    this.chart.handleREVGOODLineResponse = function(response) {
  
      if (response.isError()) {
        errorAlert(response);
        return;
      }
      var data = response.getDataTable();
  
      var options = {
        title: 'Revenue Good and Service',
        vAxis: {
          title: 'Euro, Millions'
        },
        hAxis: {
          title: 'Year',
          format: '#'
        },
        seriesType: 'bars',
        series: {
          5: {
            type: 'line'
          }
        }
      };
  
      var revgood = new google.visualization.ComboChart(_this.refRevGood.current);
      revgood.draw(data, options);
    };
  
    this.chart.handleTaxGrowthRateLineResponse = function(response) {
      if (response.isError()) {
        errorAlert(response);
        return;
      }
      var data = response.getDataTable();
      var options = {
        title: "Tax on Income And Profits of Individuals Growth Rate",
        curveType: 'function',
        hAxis: {
          format: '#',
          title: "Year"
        },
        vAxis: {
          title: "Growth Rate",
        },
        animation: {
          duration: 1000,
          easing: animate,
          startup: true,
        },
      };
  
      var tax_grw = new google.visualization.LineChart(_this.refTaxGrowthRate.current);
      tax_grw.draw(data, options);
    };
  
    this.chart.handleREVLineResponse = function(response) {
      if (response.isError()) {
        errorAlert(response);
        return;
      }
      var data = response.getDataTable();
      var options = {
        title: 'Revenue 1995-2017',
        hAxis: {
          title: "Year",
          format: '#',
          viewWindow: {
            max: 2017
          }
        },
        vAxis: {
          title: "Euro, Millions",
        },
        animation: {
          duration: 1000,
          easing: animate,
          startup: true,
        },
      }
      var chart = new google.visualization.LineChart(_this.refAllRev.current);
      chart.draw(data, options);
    };
  
    this.chart.RdrawChartALL = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
      var queryString = encodeURIComponent("select A,B,C,D,E,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVLineResponse);
    };
  
    this.chart.RdrawChartITA = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
      var queryString = encodeURIComponent("select A,B");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVLineResponse);
    };
  
    this.chart.RdrawChartGER = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
      var queryString = encodeURIComponent("select A,E");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVLineResponse);
    };
  
    this.chart.RdrawChartLUX = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
      var queryString = encodeURIComponent("select A,F");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVLineResponse);
    };
  
    this.chart.RdrawChartCHE = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
      var queryString = encodeURIComponent("select A,C");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVLineResponse);
    };
  
    this.chart.RdrawChartFRA = function() {
      var url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
      var queryString = encodeURIComponent("select A,D");
      var query = new google.visualization.Query(url + queryString);
      query.send(_this.chart.handleREVLineResponse);
    };

    function errorAlert(res) {
      alert("Error in query: " + res.getMessage() + " " +
          res.getDetailedMessage());
    }

    google.charts.load("current", {
      packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(this.chart.drawChart);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.geoRoot}>
          <GeoChart {...this.props} />
        </div>
        <Grid className={classes.gridRoot} container spacing={8} direction="column" alignItems="center">
          <Grid item>
            <Graph title="กราฟแสดงแนวโน้มการเติบโตของ GDP ในแต่ละประเทศ ตั้งแต่ปี 1995 - 2017">
              <div ref={this.refAllGdp} style={{ width: 900, height: 500 }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="raised" color="primary" onClick={() => this.chart.drawChartALL()}>All</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.drawChartFRA()}>France</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.drawChartGER()}>Germany</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.drawChartITA()}>Italy</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.drawChartLUX()}>Luxembourg</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.drawChartCHE()}>Switzerland</Button>
              </div>
            </Graph>
          </Grid>
          <Grid item>
            <Graph title="กราฟแสดงแนวโน้มการเติบโตของรายได้ของรัฐในแต่ละประเทศ ตั้งแต่ปี 1995 - 2017">
              <div ref={this.refAllRev} style={{ width: 900, height: 500 }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="raised" color="primary" onClick={() => this.chart.RdrawChartALL()}>All</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.RdrawChartFRA()}>France</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.RdrawChartGER()}>Germany</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.RdrawChartITA()}>Italy</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.RdrawChartLUX()}>Luxembourg</Button>
                <Button variant="raised" color="primary" onClick={() => this.chart.RdrawChartCHE()}>Switzerland</Button>
              </div>
            </Graph>
          </Grid>
          <Grid item>
            <Graph 
              title="กราฟแสดงแนวโน้วภาษีรายได้บุคคลธรรมดาของแต่ละประเทศ ตั้งแต่ปี 1996 - 2017" 
              subheader="จากการทดสอบด้วย Anova One-Factor เพื่อหาความสัมพันธ์ของอัตราการเติบโตของภาษีของแต่ละประเทศ พบว่าแต่ละประเทศมีแนวโน้มการเติบโตในลักษณะเดียวกัน จากกราฟจะเห็นได้ว่า เส้นแนวโน้มของแต่ละประเทศมีความคล้ายคลึงกัน">
              <div ref={this.refTaxGrowthRate} style={{ width: 900, height: 500 }}></div>
            </Graph>
          </Grid>
          <Grid item>
            <Graph title="กราฟเปรียบเทียบค่า GDP ของการจำหน่ายสินค้าในแต่ละประเทศ ตั้งแต่ปี 2015 - 2017">
              <div ref={this.refGdpDistributive} style={{ width: 900, height: 500 }}></div>
            </Graph>
          </Grid>
          <Grid item>
            <Graph title="กราฟเปรียบเทียบค่า GDP ของกิจกรรทางการเงินในแต่ละประเทศ ตั้งแต่ปี 2015 - 2017">
              <div ref={this.refGdpFinancial} style={{ width: 900, height: 500 }}></div>
            </Graph>
          </Grid>
          <Grid item>
            <Graph title="กราฟเปรียบเทียบค่า GDP ทางด้านอุตสาหกรรมในแต่ละประเทศ ตั้งแต่ปี 2015 - 2017">
              <div ref={this.refGdpIndustry} style={{ width: 900, height: 500 }}></div>
            </Graph>
          </Grid>
          <Grid item>
            <Graph title="กราฟเปรียบเทียบรายได้ของรัฐบาลจากสินค้าและบริการของแต่ละประเทศ ตั้งแต่ปี 2016 - 2018">
              <div ref={this.refRevGood} style={{ width: 900, height: 500 }}></div>
            </Graph>
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
        <BrowserRouter basename="/">
          <Switch>
            <Route exact path="/" render={props => <Main {...props} />} />
            <Route exact path="/germany" render={props => <Germany {...props} /> } />
            <Route exact path="/france" render={props => <France {...props} /> } />
            <Route exact path="/switzerland" render={props => <Switzerland {...props} /> } />
            <Route exact path="/luxembourg" render={props => <Luxembourg {...props} /> } />
            <Route exact path="/italy" render={props => <Italy {...props} /> } />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;