$(document).ready(function() {
	var screen1 = $('#background');
	var screen2 = $('#background2');
	var s2 = $('.s2');

	var c1 = $('#check1');
	var c2 = $('#check2');
	var c3 = $('#check3');
	var c4 = $('#check4');
	var c5 = $('#check5');
	var c6 = $('#check6');
	var c7 = $('#check7');
	var c8 = $('#check8');

	var checks = $('.check');

	screen1.bind('click', function(e) {
		clickX = e.pageX;
		clickY = e.pageY;
		if ((clickX >= 652 && clickX <= 719) && (clickY >=405 && clickY <= 427)) {
			screen1.hide();
			screen2.show();
		}
	});

	screen1.bind('mousemove', function(e) {
		var clickX = e.pageX;
		var clickY = e.pageY;
		if ((clickX >= 652 && clickX <= 719) && (clickY >=405 && clickY <= 427)){
			$('html,body').css('cursor','pointer');
		}
		else {
			$('html,body').css('cursor','default');
		}
	});

	s2.bind('click', function(e) {
		var clickX = e.pageX;
		var clickY = e.pageY;
		if ((clickX >= 349 && clickX <= 361) && (clickY >= 701 && clickY <= 713)) {
			c1.toggle();
		}
		else if ((clickX >= 349 && clickX <= 361) && (clickY >= 729 && clickY <= 741)) {
			c2.toggle();
		}
		else if ((clickX >= 349 && clickX <= 361) && (clickY >= 758 && clickY <= 770)) {
			c3.toggle();
		}
		else if ((clickX >= 349 && clickX <= 361) && (clickY >= 785 && clickY <= 797)) {
			c4.toggle();
		}
		else if ((clickX >= 349 && clickX <= 361) && (clickY >= 811 && clickY <= 823)) {
			c5.toggle();
		}
		else if ((clickX >= 349 && clickX <= 361) && (clickY >= 840 && clickY <= 852)) {
			c6.toggle();
		}
		else if ((clickX >= 349 && clickX <= 361) && (clickY >= 867 && clickY <= 879)) {
			c7.toggle();
		}
		else if ((clickX >= 349 && clickX <= 361) && (clickY >= 895 && clickY <= 907)) {
			c8.toggle();
		}
		else if ((clickX >= 34 && clickX <= 96) && (clickY >=405 && clickY <= 427)) {
			s2.hide();
			screen1.show();
		}
	});

	s2.bind('mousemove', function(e) {
		var clickX = e.pageX;
		var clickY = e.pageY;
		if (((clickX >= 349 && clickX <= 361) && (clickY >= 701 && clickY <= 713)) || ((clickX >= 349 && clickX <= 361) && (clickY >= 729 && clickY <= 741)) || ((clickX >= 349 && clickX <= 361) && (clickY >= 758 && clickY <= 770)) || ((clickX >= 349 && clickX <= 361) && (clickY >= 785 && clickY <= 797)) || ((clickX >= 349 && clickX <= 361) && (clickY >= 811 && clickY <= 823)) || ((clickX >= 349 && clickX <= 361) && (clickY >= 840 && clickY <= 852)) || ((clickX >= 349 && clickX <= 361) && (clickY >= 867 && clickY <= 879)) || ((clickX >= 349 && clickX <= 361) && (clickY >= 895 && clickY <= 907)) || ((clickX >= 34 && clickX <= 96) && (clickY >=405 && clickY <= 427))) {
			$('html,body').css('cursor','pointer');
		}
		else {
			$('html,body').css('cursor','default');
		}
	});

});
