jobsController = RouteController.extend({
	waitOn:function(){
		return [
			Meteor.subscribe('openings')
		]
	},
	data:function(){
		var count = Jobs.find().fetch();
		//console.log("count",count);
		return{
			jobs:Jobs.find()
		} 
	},
	action: function() {
        if (this.ready())
            this.render();
    }
})


Router.map(function(){
	this.route('',{
		path:'/',
		onBeforeAction: function() {
            this.redirect('/home');
        },
        fastRender: true
	});

	this.route('home',{
		path:'/home',
		layoutTemplate: 'layout',
		fastRender:true
	});

	this.route('who',{
		path:'/who',
		layoutTemplate:'layout',
		fastRender:true
	});
	this.route('what',{
		path:'/what',
		layoutTemplate:'layout',
		fastRender:true
	});

	this.route('why',{
		path:'/why',
		layoutTemplate:'layout',
		fastRender:true
	});
	this.route('work',{
		path:'/work',
		layoutTemplate:'layout',
		// waitOn:function(){
		// 	return [
		// 	Meteor.subscribe('openings')
		// ]
		// },
		// data:function(){
		// 	return {jobs :Jobs.find()}
		// },
		controller:jobsController,
		fastRender:true
	});


})