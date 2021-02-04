jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES

var counterSign = 1;

//////////////////////////////////////////////////
// EXECUTION CODE

hideClientLogos();
revealClientLogos();
hideAllCTAs();
// hoverRevealClientLogo();
// testieSpaceHalf();
removeLogoRacks();

//////////////////////////////////////////////////
// FUNCTIONS

function hideClientLogos () {
	for (var i = 1; i < 20; i++) {
		var internalCount = i+1;
		var target = "div.rack"+internalCount;
		$(target).hide();
	}
}

function revealClientLogos () {
	// $(".showMoreClientsClick").click(function() {
	// 	counterSign++;
	// 	$("."+"rack"+counterSign).show();
	// });

	if (counterSign >= 7) {
		return;
	} else {
		$(".showMoreClientsClick").click(function() {
			counterSign++;
			$("."+"rack"+counterSign).show();
		});
	}
}

function hideEveryOtherCTA () {
	for (var i = 1; i < 20; i++) {
		var everyOther = i+1;
		$(".testimonialSpace").children().eq(everyOther).filter(".callNowAction").hide();

	}
}

function hideAllCTAs () {
	$(".callNowAction").hide();
}

function hoverRevealClientLogo () {
	$(".clientLogoStack img").hover(function() {
		/* Stuff to do when the mouse enters the element */
		// $(".callNowAction").show();
		var parentNode = $(this).parent().filter(".callNowAction");
		$(parentNode).show();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		// $(".callNowAction").hide();
		$(parentNode).hide();
	});
}

// Change the testimonial space to half width if there's only two testimonials
function testieSpaceHalf (argument) {
	$(".testimonialSpace div").css('width', '50%');
}

// Remove client logos in .rack9 and .rack10
function removeLogoRacks () {
	$('.rack9,.rack10').remove();
}

//////////////////////////////////////////////////

});  //end doc.onready function
