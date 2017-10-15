Template.pieChart.helpers({
  avatarPieChart() {
    var plotAvatar = [["Thumbs Up", Counts.get('good-count')], ["Thumbs Down", Counts.get('bad-count')]];
    return {
        chart: {
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
            plotBorderWidth: null,
            plotShadow: false,
            //marginTop: "20px"
        },
        colors: ["#F98AE4", "#7AFCF8"],
        title: {
            text: ""
        },
        labels: {
          style: {
            "color": "#A56928"
          }
        },// bad, //# good
        xAxis: {
            title: {
                text: 'Time'
            },
            labels: {
              formatter: function () {
                return moment(new Date(this.value)).format("hh:mm");
              }
            }
        },
        yAxis: {
            title: {
                text: 'Party Vibe'
            },
        },
        series: [{
            type: 'pie',
            name: 'Party Vibe',
            data: plotAvatar
            
        }]
    }
  }
})