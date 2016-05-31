import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

Template.leaderboard.helpers({
	player:function(){
		var currentUser = Meteor.userId();
		Meteor.subscribe('thePlayers');
		return PlayerList.find({createdBy:currentUser},{sort:{score:-1,name:1}});
	},
	selectedClass:function(){
		if(this._id ===Session.get('selectedPlayer'))
			return 'selected';
	}
});

Template.addPlayer.helpers({
	currentUser:function(){
		if(Meteor.user())
			return true;
		else
			return false;
	}
})

Template.leaderboard.events({
	'click li.player':function (e) {
		var playerId = this._id;
		Session.set('selectedPlayer',playerId);
		var selectedPlayer = Session.get('selectedPlayer');
	},
	'click #increment':function(){
		var selectedPlayer = Session.get('selectedPlayer');
		Meteor.call('modify',selectedPlayer,5);
		

	},
	'click #decrement':function(){
		var selectedPlayer = Session.get('selectedPlayer');
		Meteor.call('modify',selectedPlayer,-5);
	},
	'click #remove':function(e){
		e.preventDefault();
		var selectedPlayer= Session.get('selectedPlayer');
		Meteor.call('remove',selectedPlayer);
	}
});

Template.addPlayer.events({
	'click #add':function(e){
		e.preventDefault();
		var name =$('#name').val();
		console.log($('#name').val());
		var currentUser = Meteor.userId();
		Meteor.call('add',name);
		
	}
})