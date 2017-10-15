Avatars = new Mongo.Collection("avatars");

Avatars.attachSchema({
  partyName: {
    type: String
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  average: {
    type: Number
  }
})