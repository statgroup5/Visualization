google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  url =
    "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=5Country_GDP&headers=1&tq=";
  queryString = encodeURIComponent("select A,B,C,D,E,F");
  var query = new google.visualization.Query(url + queryString);
  query.send(handleGDPLineResponse);
}
var animate = "out"

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


var addButton = document.getElementById('b1');
var removeButton = document.getElementById('b2');