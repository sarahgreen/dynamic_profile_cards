$(document).ready(function() {
	var before = $('#before');
	var beforeBottom = $('#beforeBottom');
	var after = $('#after');
	var scroll = $('.scroll');

	var active = false;

	var pushUp = function() {
		beforeBottom.animate({ "top": "+=40px" }, 250 );
		scroll.animate({"top": "-=120px"}, 250 );
	}

	var pullClose = function() {
		beforeBottom.animate({ "top": "-=40px" }, 250 );
		scroll.animate({"top": "+=120px"}, 250 );
	}

	$('#background').bind('click', function(e) {
		x = e.pageX;
		y = e.pageY;

		if (((x >= 41 && x <= 118) && (y >= 467 && y <= 478)) && (active == false)) {
			pushUp();
			active = true;
		}
		else if (((x >= 269 && x <= 286) && (y >= 375 && y <= 389)) && (active == true)) {
			pullClose();
			active = false;
		}
	});

	$('#background').bind('mousemove', function(e) {
		x = e.pageX;
		y = e.pageY;

		if (((x >= 41 && x <= 118) && (y >= 467 && y <= 478)) && (active == false)){
			$('html,body').css('cursor','pointer');
		}
		else if (((x >= 269 && x <= 286) && (y >= 370 && y <= 384)) && (active == true)) {
			$('html,body').css('cursor','pointer');
		}
		else {
			$('html,body').css('cursor','default');
		}
	});

});
