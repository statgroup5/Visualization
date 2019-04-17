window.onload = function () {
  google.charts.load("current", {
    packages: ["corechart"]
  });
  google.charts.setOnLoadCallback(drawChart);

  var animate = "out"

  function drawChart() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
    var queryString = encodeURIComponent("select A,B,C,D,E,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GrowthRate&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleTaxGrowthRateLineResponse);
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GDP_DIS&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPDISLineResponse);
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GDP_FI&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPFILineResponse);
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GDP_IN&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPINLineResponse);
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=REV_GOOD&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVGOODLineResponse);
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
    var queryString = encodeURIComponent("select A,B,C,D,E,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVLineResponse);
  }

  function drawChartITA() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
    var queryString = encodeURIComponent("select A,B");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);
  }

  function drawChartGER() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
    var queryString = encodeURIComponent("select A,E");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);
  }

  function drawChartLUX() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
    var queryString = encodeURIComponent("select A,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);
  }

  function drawChartCHE() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
    var queryString = encodeURIComponent("select A,C");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);
  }

  function drawChartFRA() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
    var queryString = encodeURIComponent("select A,D");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);
  }

  function handleGDPLineResponse(response) {
    if (response.isError()) {
      errorAlert(response);
      return;
    }
    var data = response.getDataTable();
    var options = {
      title: 'Gross Domestic Product 1995-1017 (GDP)',
      hAxis: {
        title: "Year",
        format: '#',
        viewWindow: {
          max: 2017
        }
      },
      vAxis: {
        title: "GDP",
      },
      animation: {
        duration: 1000,
        easing: animate,
        startup: true,
      },
    }
    var chart = new google.visualization.LineChart(
      document.getElementById("GDP_5Country"));
    chart.draw(data, options);
  }

  function handleGDPDISLineResponse(response) {

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

    var gdpdis = new google.visualization.ComboChart(
      document.getElementById("GDP_Distributive"));
    gdpdis.draw(data, options);
  }

  function handleGDPFILineResponse(response) {

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

    var gdpfi = new google.visualization.ComboChart(
      document.getElementById("GDP_Financial"));
    gdpfi.draw(data, options);
  }

  function handleGDPINLineResponse(response) {

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

    var gdpin = new google.visualization.ComboChart(
      document.getElementById("GDP_Industry"));
    gdpin.draw(data, options);
  }

  function handleREVGOODLineResponse(response) {

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

    var revgood = new google.visualization.ComboChart(
      document.getElementById("REV_Good"));
    revgood.draw(data, options);
  }

  function handleTaxGrowthRateLineResponse(response) {
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

    var tax_grw = new google.visualization.LineChart(
      document.getElementById("Tax_Growth_Rate"));
    tax_grw.draw(data, options);
  }

  var allButton = document.getElementById('All');
  allButton.onclick = function () {
    drawChart()
  }

  var itaButton = document.getElementById('ITA');
  itaButton.onclick = function () {
    drawChartITA()
  }
  var gerButton = document.getElementById('GER');
  gerButton.onclick = function () {
    drawChartGER()
  }
  var cheButton = document.getElementById('CHE');
  cheButton.onclick = function () {
    drawChartCHE()
  }
  var fraButton = document.getElementById('FRA');
  fraButton.onclick = function () {
    drawChartFRA()
  }
  var luxButton = document.getElementById('LUX');
  luxButton.onclick = function () {
    drawChartLUX()
  }



  function handleREVLineResponse(response) {
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
        title: "GDP",
      },
      animation: {
        duration: 1000,
        easing: animate,
        startup: true,
      },
    }
    var chart = new google.visualization.LineChart(
      document.getElementById("REV_5Country"));
    chart.draw(data, options);
  }

  function RdrawChart() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
    var queryString = encodeURIComponent("select A,B,C,D,E,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVLineResponse);
  }

  function RdrawChartITA() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
    var queryString = encodeURIComponent("select A,B");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVLineResponse);
  }

  function RdrawChartGER() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
    var queryString = encodeURIComponent("select A,E");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVLineResponse);
  }

  function RdrawChartLUX() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
    var queryString = encodeURIComponent("select A,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVLineResponse);
  }

  function RdrawChartCHE() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
    var queryString = encodeURIComponent("select A,C");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVLineResponse);
  }

  function RdrawChartFRA() {
    var url =
      "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_REV&headers=1&tq=";
    var queryString = encodeURIComponent("select A,D");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleREVLineResponse);
  }

  var rallButton = document.getElementById('RAll');
  rallButton.onclick = function () {
    RdrawChart()
  }
  var ritaButton = document.getElementById('RITA');
  ritaButton.onclick = function () {
    RdrawChartITA()
  }
  var rgerButton = document.getElementById('RGER');
  rgerButton.onclick = function () {
    RdrawChartGER()
  }
  var rcheButton = document.getElementById('RCHE');
  rcheButton.onclick = function () {
    RdrawChartCHE()
  }
  var rfraButton = document.getElementById('RFRA');
  rfraButton.onclick = function () {
    RdrawChartFRA()
  }
  var rluxButton = document.getElementById('RLUX');
  rluxButton.onclick = function () {
    RdrawChartLUX()
  }

};