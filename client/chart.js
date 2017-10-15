Template.partyChart.onRendered(function(){
  $(".owl-carousel").owlCarousel({autoplay: true, items: 1, loop: false, center: true, rewind: true, autoplayTimeout: 7000});
})

Template.partyChart.onCreated(function() {
  var instance = this;
  this.autorun(()=>{
    instance.subscribe("partyActions");
    instance.subscribe("goodCount");
    instance.subscribe("badCount");
  })
})


Template.partyChart.helpers({
  currentPartyVibe(){
    var lastAA = AvatarActions.findOne({}, {sort: {actionDate: -1}});
    if(!lastAA) {
      return false;
    }
    if(lastAA.alignmentAtInsert > 100){//great
      return {text: "The party vibe is splendid!", fontColor: "#FFF", bgColor: "#007193", type: "arial"};
    }
    if(lastAA.alignmentAtInsert > 50 && lastAA.alignmentAtInsert <= 100) {//good
      return {text: "The party vibe looks like it's heating up!", fontColor: "#FFF", bgColor: "#007193", type: "arial"};
    }
    if(lastAA.alignmentAtInsert > 0 && lastAA.alignmentAtInsert <= 50) {//okay
      return {text: "The party vibe is not bad.", fontColor: "#FFF", bgColor: "#007193", type: "arial"};
    }
    if(lastAA.alignmentAtInsert > -50 && lastAA.alignmentAtInsert <= 0) {//poor
      return {text: "The party vibe looks like it needs your help!", fontColor: "#FFF", bgColor: "#007193", type: "arial"};
    }
    if(lastAA.alignmentAtInsert > -100 && lastAA.alignmentAtInsert <= -50) {//terrible
      return {text: "The party vibe looks like someone's ex showed up.", fontColor: "#FFF", bgColor: "#007193", type: "arial"};
    }
    if(lastAA.alignmentAtInsert < -100) {//death!!!!
      return {text: "The party vibe... well... let's just hope everyone is getting along.", fontColor: "#FFF", bgColor: "#007193", type: "arial"};
    }
  }
})