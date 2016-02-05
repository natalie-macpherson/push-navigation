// Needs latest version of jQuery to run

$(function(){
	//Shows buttons when JS runs
	$('body') .removeClass('noscript');
	//Sets button to toggle data-state
	$('.toggle-btn, .close-btn').click(function(){
		toggleNav();
	});
});

function toggleNav(){
	if ($('.site-wrapper').attr('data-state') == 'slide-closed'){
		//display nav when close
		$('.site-wrapper').attr('data-state', 'slide-open');

	} else {
		//hide nav when open
		$('.site-wrapper').attr('data-state', 'slide-closed');
	}
}
