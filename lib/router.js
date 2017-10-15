/*Picker.route("/addAction/:avatarName/:avatarAction/:alignmentChange", function(params, req, res, next) {
  Meteor.call('addAlignmentChange', "PeculiarCafe", params.avatarAction, params.alignmentChange);
  res.end("success");
});*/

FlowRouter.route("/", {
  name: "home",
  action() {
    BlazeLayout.render('layout', { main: "partyChart" });
  }
})

FlowRouter.route("/statement", {
  name: "statement",
  action() {
    BlazeLayout.render('layout', {main: 'statement'})
  }
})

Router.configure({
 noRoutesTemplate: 'noRoutesTemplate',
 notFoundTemplate: 'noRoutesTemplate'
});

Router.route("/addAction/:avatarName/:avatarAction/:alignmentChange", function () {
  Meteor.call('addAlignmentChange', "PeculiarCafe", this.params.avatarAction, this.params.alignmentChange);
  this.response.end('success');
}, {where: 'server'});