candidate = new Meteor.Collection('candidate');

if(Meteor.isServer){
	Meteor.methods({
		addCandidate:function(name,email,info){
			candidate.insert({name:name,email:email,info:info});
			
		}
	})
}