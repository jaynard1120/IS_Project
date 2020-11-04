


$('document').ready(function () {
    $.ajax('/getAllSales', {
        success: function (data, status, xhr) {
            let monthlySales = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0 }
            let monthlyData = []
            var dell = 0
            var asus = 0
            var lenovo = 0
            var hp = 0
            var acer = 0

            data.forEach(element => {

                var date = new Date(element.updatedAt)

                monthlySales[date.getMonth()] = monthlySales[date.getMonth()] ? monthlySales[date.getMonth()] + element.price*element.stock : monthlySales[date.getMonth()] + element.price*element.stock;

                if (element.brand == "Dell") {
                    dell += (element.stock * element.price)
                } else if (element.brand == "Asus") {
                    asus += (element.stock * element.price)
                } else if (element.brand == "Lenovo") {
                    lenovo += (element.stock * element.price)
                } else if (element.brand == "HP") {
                    hp += (element.stock * element.price)
                    // console.log(acer)
                } else {
                    acer += (element.stock * element.price)
                }
            });

            for(let key in monthlySales){
                monthlyData.push(monthlySales[key])
            }
            // console.log(monthlyData)

            console.log(monthlyData[9])
            const chartConfigs = {
                type: "doughnut3d",
                width: "700",
                height: "400",
                dataFormat: "json",
                dataSource: {
                    "chart": {
                        "caption": "Split of Revenue by Brand Categories",
                        "subCaption": "per Year",
                        "numberPrefix": "₱",
                        "theme": "fusion"
                    },
                    "data": [{
                        "label": "Dell",
                        "value": dell
                    }, {
                        "label": "Asus",
                        "value": asus
                    }, {
                        "label": "Lenovo",
                        "value": lenovo
                    }, {
                        "label": "HP",
                        "value": hp
                    }, {
                        "label": "Acer",
                        "value": acer
                    }]
                }
            }
            $('#totalsales').text('₱'+(dell+asus+lenovo+hp+acer)/1000000 +'M')
            $('#profit').text('₱'+((dell+asus+lenovo+hp+acer)-30000*14)/1000000 +'M')
            $('#revenue').text('₱'+(100000*14)/1000000 +'M')
            const chartConfig3 = {
                type: "line",
                width: "700",
                height: "400",
                dataFormat: "json",
                dataSource: {
                    "chart": {
                        "caption": "Total Sales of Laptop",
                        "subCaption": "Per month",
                        "xAxisName": "Month",
                        "yAxisName": "Item sold",
                        "xAxisLineThickness": "1",
                        "theme": "fusion"
                    },
                    "data": [{
                        "label": "January",
                        "value": monthlyData[0]
                    }, {
                        "label": "February",
                        "value": monthlyData[1]
                    }, {
                        "label": "March",
                        "value": monthlyData[2]
                    }, {
                        "label": "April",
                        "value": monthlyData[3]
                    }, {
                        "label": "May",
                        "value": monthlyData[4]
                    }, {
                        "label": "June",
                        "value": monthlyData[5]
                    }, {
                        "label": "July",
                        "value": monthlyData[6]
                    }
                    , {
                        "label": "August",
                        "value": monthlyData[7]
                    }, {
                        "label": "September",
                        "value": monthlyData[8]
                    }, {
                        "label": "October",
                        "value": monthlyData[9]
                    }, {
                        "label": "November",
                        "value": monthlyData[10]
                    }, {
                        "label": "December",
                        "value": monthlyData[11]
                    }]
                }
            }

            $("#chart-container").insertFusionCharts(chartConfigs);
            $("#chart-container2").insertFusionCharts(chartConfig3);
        }
    });


    const chartConfig2 = {
        type: "stackedcolumn3dlinedy",
        width: "700",
        height: "400",
        dataFormat: "json",
        dataSource: {
            "chart": {
                "caption": "Product-wise Quarterly Revenue vs. Profit %",
                "subCaption": "PCTech Express - Last Year (2019)",
                "xAxisname": "Quarter",
                "pYAxisName": "Sales",
                "sYAxisName": "Profit %",
                "numberPrefix": "₱",
                "sNumberSuffix": "%",
                "sYAxisMaxValue": "25",
                "theme": "fusion"
            },
            "categories": [{
                "category": [{
                    "label": "Jan."
                }, {
                    "label": "Feb."
                }, {
                    "label": "Mar."
                }, {
                    "label": "Apr."
                }, {
                    "label": "May"
                }, {
                    "label": "Jun."
                }, {
                    "label": "Jul."
                }, {
                    "label": "Aug."
                }, {
                    "label": "Sept."
                }, {
                    "label": "Oct."
                }, {
                    "label": "Nov."
                }, {
                    "label": "Dec."
                }]
            }],
            "dataset": [{
                "seriesname": "Product On Sales",
                "data": [{
                    "value": "11000"
                }, {
                    "value": "15000"
                }, {
                    "value": "13500"
                }, {
                    "value": "15000"
                }, {
                    "value": "15000"
                }, {
                    "value": "13500"
                }, {
                    "value": "15000"
                }, {
                    "value": "15000"
                }, {
                    "value": "15000"
                }, {
                    "value": "13500"
                }, {
                    "value": "15000"
                }, {
                    "value": "13500"
                }]
            }, {
                "seriesname": "Sold Products",
                "data": [{
                    "value": "11400"
                }, {
                    "value": "14800"
                }, {
                    "value": "8300"
                }, {
                    "value": "11800"
                }, {
                    "value": "14800"
                }, {
                    "value": "8300"
                }, {
                    "value": "11800"
                }, {
                    "value": "14800"
                }, {
                    "value": "8300"
                }, {
                    "value": "11800"
                }, {
                    "value": "14800"
                }, {
                    "value": "8300"
                }]


            }, {
                "seriesname": "Profit %",
                "renderAs": "line",
                "parentYAxis": "S",
                "showValues": "0",
                "data": [{
                    "value": "14"
                }, {
                    "value": "16"
                }, {
                    "value": "15"
                }, {
                    "value": "17"
                }, {
                    "value": "16"
                }, {
                    "value": "15"
                }, {
                    "value": "17"
                }, {
                    "value": "16"
                }, {
                    "value": "15"
                }, {
                    "value": "17"
                }, {
                    "value": "16"
                }, {
                    "value": "16"
                }]
            }]
        }
    } // Create a chart container
    

    $(".dropdown-content").hide();
    $("#admin").click(function () {
        $(".dropdown-content").toggle();
    })
    // Create a chart container
    $("#chart-container1").insertFusionCharts(chartConfig2);
    

});