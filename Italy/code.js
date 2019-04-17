google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=ITA_GDP_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPStackFactorsResponse);

    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=ITA_GDP_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);

    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=ITA_REV_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,B,C,D,E,F");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleRevStackFactorsResponse);

    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=ITA_REV_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,G");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleRevLineResponse);
}
var animate = "out"

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

    var gdp_area = new google.visualization.AreaChart(
        document.getElementById("stack_ITA_GDP"));
    gdp_area.draw(data, options_fullStacked);
}

function handleGDPLineResponse(response) {
    if (response.isError()) {
        errorAlert(response);
        return;
    }
    var data = response.getDataTable();
    var options = {
        title: "GDP (millions EURO)",
        curveType: 'function',
        legend: {
            position: 'bottom'
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

    var gdp_area = new google.visualization.LineChart(
        document.getElementById("line_ITA_GDP"));
    gdp_area.draw(data, options);
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

    var gdp_area = new google.visualization.AreaChart(
        document.getElementById("stack_ITA_REV"));
    gdp_area.draw(data, options_fullStacked);
}

function handleRevLineResponse(response) {
    if (response.isError()) {
        errorAlert(response);
        return;
    }
    var data = response.getDataTable();
    var options = {
        title: "Revenue (millions EURO)",
        curveType: 'function',
        legend: {
            position: 'bottom'
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

    var gdp_area = new google.visualization.LineChart(
        document.getElementById("line_ITA_REV"));
    gdp_area.draw(data, options);
}

function errorAlert(res) {
    alert("Error in query: " + res.getMessage() + " " +
        res.getDetailedMessage());
}