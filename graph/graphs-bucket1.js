var data = {
    labels: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800],
    datasets : [
        {
            fillColor: "rgba(19,7,217, 0.2)",
            strokeColor: "rgba(19,7,217, 1)",
            data: [36.43106834866693, 60.35297699937901, 71.40910626580579, 77.66990118201548, 81.71890062947263, 84.50964010799561, 86.5496834415517, 88.13172504241516, 89.38889569108873, 90.39652089330124, 91.23342386310912, 91.9213038601034, 92.52105190626887, 93.03889099116697, 93.48142437615915, 93.88474619293463, 94.23315042391789, 94.54912460045219, 94.81422157906994, 95.07783708213329, 95.29231037736787, 95.51789870042508, 95.69706613572274, 95.87234370739891, 96.04930873518786, 96.19026677690852, 96.32890753734755, 96.45585493993468, 96.56931061594881]
        },
    ]
}

var ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx).Line(data,{bezierCurve : false});
