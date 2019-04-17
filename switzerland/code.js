google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    url = "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=CHE_GDP_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E,F,G");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPStackFactorsResponse);

    url = "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=CHE_REV_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E");
    var query = new google.visualization.Query(url + queryString);
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
            title: "year"
        }
    };

    var gdp_area = new google.visualization.AreaChart(
        document.getElementById("stack_CHE_GDP")
    );
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