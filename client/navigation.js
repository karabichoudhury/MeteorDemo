Template.navigation.rendered=function(){
	var url = Router.current().route.getName();
	console.log("url",url);
	if(url==='who'){
		$('#whoTab').addClass('activeLink');
		$('#whatTab').removeClass('activeLink');
		$('#whyTab').removeClass('activeLink');
		$('#workTab').removeClass('activeLink');
	}
	if(url==='what'){
		$('#whatTab').addClass('activeLink');
		$('#whoTab').removeClass('activeLink');
		$('#whyTab').removeClass('activeLink');
		$('#workTab').removeClass('activeLink');
	}
	if(url==='why'){
		$('#whyTab').addClass('activeLink');
		$('#whatTab').removeClass('activeLink');
		$('#whoTab').removeClass('activeLink');
		$('#workTab').removeClass('activeLink');
	}
	if(url==='work'){
		$('#workTab').addClass('activeLink');
		$('#whatTab').removeClass('activeLink');
		$('#whyTab').removeClass('activeLink');
		$('#whoTab').removeClass('activeLink');
	}
	if(url==='home'){
		$('#whyTab').removeClass('activeLink');
		$('#whatTab').removeClass('activeLink');
		$('#whyTab').removeClass('activeLink');
		$('#workTab').removeClass('activeLink');
	}
}