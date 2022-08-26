

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
	$("#videoFullWidth").prop('muted', true);
	
	$("#videoFullWidth").prop('autoplay', true);

	// video toggle muted/unmuted
	$("#videoFullWidth__volume").click(function () {
		if ($("#videoFullWidth").prop('muted')) {
			$("#videoFullWidth").prop('muted', false);
			$(this).removeClass('fa-volume-high');
			$(this).addClass('fa-volume-xmark'); // changing icon for button

		} else {
			$("#videoFullWidth").prop('muted', true);
			$(this).removeClass('fa-volume-xmark'); // changing icon for button
			$(this).addClass('fa-volume-high');
		}
	});


	
	// splide contructor and mount 
	new Splide('#image-carousel', {
		arrows: false,
		perPage: 3,     //on media > 640 shows all 3 slides, acting like 3 columns 
		pagination: false,
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

