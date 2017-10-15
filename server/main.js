import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  addAlignmentChange(avatarName, actionName, alignmentChange){
    //Avatars.update({avatarName:})

    //
    var aa = AvatarActions.findOne({}, {sort: {actionDate: -1}}); // get most recent avatar action
    var alignment = 0;
    if(aa) {
      alignment = aa.alignmentAtInsert + aa.alignmentChange;
    }
    AvatarActions.insert({avatarName: avatarName, actionName: actionName, alignmentChange: Number(alignmentChange), alignmentAtInsert: alignment});
  },
  removeAllActions(){
    AvatarActions.remove({})
  }
});

WebApp.rawConnectHandlers.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});