$(document).ready(function(){
	
	function addCircles(){
		$('.20per .spinner').css('animation', 'rota20 2s linear forwards');
		$('.20per .filler').css('animation', 'fill20 2s steps(1, end) forwards');
		$('.20per .mask').css('animation', 'mask20 2s steps(1, end) forwards');
		$('.40per .spinner').css('animation', 'rota40 2s linear forwards');
		$('.40per .filler').css('animation', 'fill40 2s steps(1, end) forwards');
		$('.40per .mask').css('animation', 'mask40 2s steps(1, end) forwards');
		$('.60per .spinner').css('animation', 'rota60 2s linear forwards');
		$('.60per .filler').css('animation', 'fill60 2s steps(1, end) forwards');
		$('.60per .mask').css('animation', 'mask60 2s steps(1, end) forwards');
		$('.80per .spinner').css('animation', 'rota80 2s linear forwards');
		$('.80per .filler').css('animation', 'fill80 2s steps(1, end) forwards');
		$('.80per .mask').css('animation', 'mask80 2s steps(1, end) forwards');
		$('.100per .spinner').css('animation', 'rota100 2s linear forwards');
		$('.100per .filler').css('animation', 'fill100 2s steps(1, end) forwards');
		$('.100per .mask').css('animation', 'mask100 2s steps(1, end) forwards');
	};

	function removeCircles(){
		$('.20per .spinner').css('animation', '');
		$('.20per .filler').css('animation', '');
		$('.20per .mask').css('animation', '');
		$('.40per .spinner').css('animation', '');
		$('.40per .filler').css('animation', '');
		$('.40per .mask').css('animation', '');
		$('.60per .spinner').css('animation', '');
		$('.60per .filler').css('animation', '');
		$('.60per .mask').css('animation', '');
		$('.80per .spinner').css('animation', '');
		$('.80per .filler').css('animation', '');
		$('.80per .mask').css('animation', '');
		$('.100per .spinner').css('animation', '');
		$('.100per .filler').css('animation', '');
		$('.100per .mask').css('animation', '');
	};
	
	function setTimeline(){
		//document.getElementById('timeline-original').disabled  = true;
		//document.getElementById('timeline-modified').disabled = false;
		$('#timeline-airbus').addClass('timeline-inverted');
		$('#timeline-astrium').addClass('timeline-inverted');
		$('#timeline-exchange').addClass('timeline-inverted');
			
		var windowWidth = $('.timeline').width();
		
		if (windowWidth > 1400){
			$('.timeline-panel').css('width', 94+"%");
		} else if (windowWidth > 1000) {
			$('.timeline-panel').css('width', 92+"%");
		} else if (windowWidth > 800) {
			$('.timeline-panel').css('width', 92+"%");	
		} else if (windowWidth > 600) {
			$('.timeline-panel').css('width', 88+"%");
		} else if (windowWidth > 400) {
			$('.timeline-panel').css('width', 84+"%");
		} else if (windowWidth > 350) {
			$('.timeline-panel').css('width', 80+"%");
		} else if (windowWidth > 300){
			$('.timeline-panel').css('width', 76+"%");
		} else {
			$('.timeline-panel').css('width', 74+"%");
		}
	};
});
