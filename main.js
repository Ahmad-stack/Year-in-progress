// Toggle on dark
function mybt() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var x = document.getElementById("myDark");
    if (x.innerHTML === "DARK") {
        x.innerHTML = "LIGHT";
    } else {
        x.innerHTML = "DARK";
    }
}

// Step 1: find days in year
var days_in_year = new Date().getFullYear() % 4 == 0 ? 366 : 365;
// Step 2: find current day number (e.g. feb 5 -> 36)
function find_day_number() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}
// Step 3: Put values in the function bellow
var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = Math.floor(find_day_number() * 100 / days_in_year);
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";

    }
}

// Load google charts
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var time_spent =
        Math.floor(find_day_number() * 100 / days_in_year);
    // Draw the chart and set the chart values
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Has passed of the year', time_spent],
        ['Rest of the year', 100 - time_spent],

    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

$(document).ready(function() {
    $("button").click(function() {
        $("a").toggle();
    });
});

function prgs() {
    var x = document.getElementById("myProgress");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myPie() {
    var x = document.getElementById("piechart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}