Template.lineChart.helpers({
    avatarLineChart() {
    var avatarArray = AvatarActions.find({}, {sort: {"actionDate": 1}}).fetch();//only look for last 8 hours
    var plotAvatar = [];
    var alignment = 0;
    avatarArray.forEach(function(aa){
      plotAvatar.push([new Date(aa.actionDate).getTime(), aa.alignmentAtInsert || 0])
    })
    return {
        chart: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            plotBorderWidth: null,
            plotShadow: false,
            plotBackgroundColor: 'rgba(255, 255, 255, 0.0)',
            //marginTop: "20px"
        },
        events: {
          load: function(){
            console.log("wowoowws")
    
          }
        },
        colors: ["#F15822"],
        title: {
            text: ""
        },
        labels: {
          style: {
            "color": "#F15822"
          }
        },
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
            type: 'line',
            name: 'Party Vibe',
            data: plotAvatar
            
        }]
    };
  }
});   
