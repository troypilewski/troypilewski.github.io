(function ($) {
  $(document).ready(function(){

	// hide .navbar first
	$(".navbar").hide();

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 25) {
        // alert($(document).scrollTop());
				$('.navbar').show();
			} else {
				$(".navbar").hide();
			}
		});


	});

});
  }(jQuery));
