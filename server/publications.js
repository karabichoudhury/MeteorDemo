Meteor.publish('thePlayers',function(){
	return PlayerList.find({createdBy:this.userId});
});

Meteor.publish('openings',function(){
	//console.log("job openings",Jobs.find().fetch());
	return Jobs.find();
});