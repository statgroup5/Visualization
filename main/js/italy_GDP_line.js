google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    $.get("/data/GDP_5country.csv", function(csvString) {
        // transform the CSV string into a 2-dimensional array
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
  
        // this new DataTable object holds all the data
        var data = google.visualization.arrayToDataTable(arrayData);
        // CAPACITY - En-route ATFM delay - YY - CHART
        console.log(data);
        var view = new google.visualization.DataView(data)
        var options = {
              width: 1000, height: 500,
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
              }
            //   title: 'EU-wide en-route ATFM delays (year to date)',
            //   titleTextStyle : {color: 'grey', fontSize: 11},
           }
        var chart = new google.charts.Line(document.getElementById('linechart_material'));
        // chart.draw(view, options);
        chart.draw(view, google.charts.Line.convertOptions(options));
    });
        
}

    