

// global vars
var $window;
var WH;
var WW;
var HH;

// ---

// the magic begins
$(document).ready(function () {

	// global vars
	$window = $(window);

	// ---

	// global resize
	globalResize();
	$window.resize(globalResize);

	// video autoplay
	$("#videoFullWidth").prop('muted', true); //needed for autoplay
	$("#videoFullWidth").prop('autoplay', true);

	// video toggle muted/unmuted
	$("#videoFullWidth__volume").click(function () {
		if ($("#videoFullWidth").prop('muted')) {
			$("#videoFullWidth").prop('muted', false);
			$(this).removeClass('fa-volume-high');//removing class icon 
			$(this).addClass('fa-volume-xmark'); // changing icon for button

		} else {
			$("#videoFullWidth").prop('muted', true);
			$(this).removeClass('fa-volume-xmark'); //removing class icon 
			$(this).addClass('fa-volume-high');// changing icon for button
		}
	});


	
	// splide contructor and mount 
	new Splide('#image-carousel', {
		arrows: false,  //no display of arrows 
		perPage: 3,     //on media > 640 shows all 3 slides, acting like 3 columns 
		pagination: false, //no diplay of dots
		mediaQuery: 'max',
		breakpoints: {
			640: {
				perPage: 1, //on media < 640 shows only 1 slide per page. 
			}
		}
	}).mount();

});

// ---

// global resize
function globalResize() {

	// set window size
	WH = $window.height();
	WW = $window.width();
	HH = 0;

}

