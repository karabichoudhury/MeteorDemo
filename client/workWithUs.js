Template.work.helpers({
	// jobs:function(){
	// 	return Jobs.find();
	// }
	namegot:function(){
		console.log(this.name);
		return this.name;

	}
})

Template.work.rendered=function(){
	//console.log("this in rendered",this.jobs);
}

Template.work.events({
	'click #save':function(e){
		e.preventDefault();
		var name = $('#candidateName').val();
		var email = $('#candidateEmail').val();
		var info = $('#candidateExpertise').val();

		Meteor.call('addCandidate',name,email,info,function(error,candidateId){
			if(error)
			{
				alert('Data was not saved.Please try later');
			}
			else{
				alert('Data saved');
				$('#candidateForm')[0].reset();
			}
		});
	}
})