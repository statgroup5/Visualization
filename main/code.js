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

  url =
    "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=GrowthRate&headers=1&tq=";
  queryString = encodeURIComponent("select A,B,C,D,E,F");
  var query = new google.visualization.Query(url + queryString);
  query.send(handleTaxGrowthRateLineResponse);
}
var animate = "out"

function handleGDPLineResponse(response) {
  if (response.isError()) {
    errorAlert(response);
    return;
  }
  var data = response.getDataTable();
  var options = {
    title: 'Gross Domestic Product 1995-1017 (GDP)',
    titleTextStyle: {
      fontSize: 18,
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
    document.getElementById("GDP_5Country"));
  chart.draw(data, options);
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

  var gdp_area = new google.visualization.LineChart(
      document.getElementById("Tax_Growth_Rate"));
  gdp_area.draw(data, options);
}


var addButton = document.getElementById('b1');
var removeButton = document.getElementById('b2');