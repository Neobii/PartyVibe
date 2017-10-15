Meteor.publish("partyActions",function() { 
  return AvatarActions.find({}, {sort: {actionDate: -1}, limit: 40});
});

Meteor.publish("goodCount",function() {
  Counts.publish(this, "good-count", AvatarActions.find({alignmentChange: {$gt: 0}}));
})

Meteor.publish("badCount",function() { 
  Counts.publish(this, "bad-count", AvatarActions.find({alignmentChange: {$lt: 0}}));

})