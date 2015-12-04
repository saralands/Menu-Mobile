$(document).on('ready', function(){
	//attach click event to .js-menu
	$('.js-menu').on('click', function(){
		$('.nav-main').slideToggle();
	});

	$(window).on('resize', function(){
		var w = $(window).width();

		if (w >= 420 && $('.nav-main').is(':hidden')){
			console.log('foo');
			$('.nav-main').removeAttr('style');
		}

	});
}); //Ends doc.ready