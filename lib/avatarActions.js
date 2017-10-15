AvatarActions = new Mongo.Collection("avatarActions");

AvatarActions.attachSchema({
  actionName: {
    type: String
  },
  actionDate: {
    type: Date,
    autoValue() {
      return new Date();
    }
  },
  alignmentChange: {
    type: Number
  },
  avatarId: {
    type: String,
    optional: true
  },
  avatarName: {
    type: String,
    optional: true
  },
  alignmentAtInsert: {
    type: Number
  }
})