google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=LUX_GDP_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,D,E,F,G,H,L");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPStackFactorsResponse);

    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=LUX_REV_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,F,J,L");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleRevStackFactorsResponse);

    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=LUX_GDP_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,B");
    var query = new google.visualization.Query(url + queryString);
    query.send(handleGDPLineResponse);

    url =
        "https://docs.google.com/spreadsheets/d/1hWZtGisBtY-n5xhDcCVu-8BTN3KJjwMM0eKi2oTsdcw/gviz/tq?sheet=LUX_REV_Factors&headers=1&tq=";
    queryString = encodeURIComponent("select A,B");
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
        document.getElementById("stack_LUX_GDP"));
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

    var gdp_area = new google.visualization.AreaChart(
        document.getElementById("stack_LUX_REV"));
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

    var gdp_area = new google.visualization.LineChart(
        document.getElementById("line_LUX_GDP"));
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

    var gdp_area = new google.visualization.LineChart(
        document.getElementById("line_LUX_REV"));
    gdp_area.draw(data, options);
}

function errorAlert(res) {
    alert("Error in query: " + res.getMessage() + " " +
        res.getDetailedMessage());
}