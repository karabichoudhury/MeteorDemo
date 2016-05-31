PlayerList = new Meteor.Collection('players');

if(Meteor.isServer){
	Meteor.methods({
		add:function(name){
			var currentUser = Meteor.userId();
			PlayerList.insert({name:name,score:0,createdBy:currentUser});
			
		},
		remove:function(id){
			PlayerList.remove({_id:id});
		},
		modify:function(id,score){
			PlayerList.update(
				{_id:id},
				{$inc:{score:score}}
			);
		}
	})
}