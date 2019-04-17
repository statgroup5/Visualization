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
      width: 1000,
      height: 500,
      title: 'Gross Domestic Product 1995-1017 (GDP)',
      titleTextStyle: {
        fontSize: 18, // 12, 18 whatever you want (don't specify px)
        // bold: true,
      },
      hAxis: {
        title: "Year",
        format: "",
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
      document.getElementById("linechart_material"));
    chart.draw(data, options);
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
};