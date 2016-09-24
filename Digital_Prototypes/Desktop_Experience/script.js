$(document).ready(function() {
	bgd = $('#background');
	hovercards = $('.hovercard');

	bgd.bind('mousemove', function(e) {
		var clickX = e.pageX;
		var clickY = e.pageY;

		//ruwim
		if ((clickX >= 386 && clickX <= 518) && (clickY >= 308 && clickY <= 335)) {
			hovercards.hide();
			$('#ruwim').show();
		}
		else {
			$('#ruwim').hide();
		}

		//techfreak
		if ((clickX >= 386 && clickX <= 538) && (clickY >= 352 && clickY <= 379)) {
			hovercards.hide();
			$('#techfreak').show();
		}
		else {
			$('#techfreak').hide();
		}

		//puppy
		if ((clickX >= 386 && clickX <= 496) && (clickY >= 394 && clickY <= 424)) {
			hovercards.hide();
			$('#puppy').show();
		}
		else {
			$('#puppy').hide();
		}

		//slow
		if ((clickX >= 386 && clickX <= 527) && (clickY >= 436 && clickY <= 465)) {
			hovercards.hide();
			$('#slow').show();
		}
		else {
			$('#slow').hide();
		}

		//slawootsky
		if ((clickX >= 386 && clickX <= 530) && (clickY >= 482 && clickY <= 505)) {
			hovercards.hide();
			$('#slawootsky').show();
		}
		else {
			$('#slawootsky').hide();
		}

		//elaine
		if ((clickX >= 688 && clickX <= 719) && (clickY >= 715 && clickY <= 728)) {
			hovercards.hide();
			$('#elaine').show();
		}
		else {
			$('#elaine').hide();
		}

		//elaine2
		if ((clickX >= 688 && clickX <= 719) && (clickY >= 827 && clickY <= 838)) {
			hovercards.hide();
			$('#elaine2').show();
		}
		else {
			$('#elaine2').hide();
		}

		//walnut
		if ((clickX >= 68 && clickX <= 177) && (clickY >= 1040 && clickY <= 1065)) {
			hovercards.hide();
			$('#walnut').show();
		}
		else {
			$('#walnut').hide();
		}

		//pawel
		if ((clickX >= 179 && clickX <= 286) && (clickY >= 1040 && clickY <= 1065)) {
			hovercards.hide();
			$('#pawel').show();
		}
		else {
			$('#pawel').hide();
		}

		//blue
		if ((clickX >= 288 && clickX <= 388) && (clickY >= 1040 && clickY <= 1065)) {
			hovercards.hide();
			$('#blue').show();
		}
		else {
			$('#blue').hide();
		}

		//chantal
		if ((clickX >= 393 && clickX <= 465) && (clickY >= 1040 && clickY <= 1065)) {
			hovercards.hide();
			$('#chantal').show();
		}
		else {
			$('#chantal').hide();
		}

		//devin
		if ((clickX >= 468 && clickX <= 552) && (clickY >= 1040 && clickY <= 1065)) {
			hovercards.hide();
			$('#devin').show();
		}
		else {
			$('#devin').hide();
		}
		
	});

});
