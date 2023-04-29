/* 

import './css/Viajes.css';









(function(window, document, $, undefined) {
	var $slides, $btnArr;

	function onClick(e) {
		var $target = $(e.target);
		if ($target.hasClass('slide') && !$target.hasClass('active') && !$target.siblings().hasClass('active')) {
			$target.removeClass('anim-in last-viewed').addClass('active')
			$target.siblings().removeClass('anim-in last-viewed').addClass('anim-out');
		}
	}

	function closeSlide(e) {
		var $slide = $(e.target).parent();
		$slide.removeClass('active anim-in').addClass('last-viewed');
		$slide.siblings().removeClass('anim-out').addClass('anim-in');
	}

	$(function() {
		$slides = $('.slide');
		$btnArr = $slides.find('.btn-close');
		$slides.on('click', onClick);
		$btnArr.on('click', closeSlide);
	});
})(this, document, jQuery);








var baseURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/'

var info = [{ 
    city: 'Venice',
   country: 'Italy',
   population: '260,060',
     founded: '697',
     image: baseURL + 'venice.jpg',
     emblem: baseURL + 'italian emblem.svg'
   }, {
     city: 'Paris',
     country: 'France',
     population: '2.2 Million',
     founded: '~250BC',
     image: baseURL + 'paris.jpg',
     emblem: baseURL + 'french emblem.svg'
   }, {
     city: 'Salzburg',
     country: 'Austria',
     population: '145,871',
     founded: '1622',
     image: baseURL + 'salzburg.jpg',
     emblem: baseURL + 'austrian emblem.svg'
   }, {
     city: 'Prague',
     country: 'Czech Republic',
     population: '1.2 Million',
     founded: '870',
     image: baseURL + 'prague.jpg',
     emblem: baseURL + 'czech emblem.svg' 
 }]

#container
	each item in info
		.slide.anim-in
			.image(style='background-image: url(' + item.image + ');')
			.overlay
			.content
				h1.title(data-title = item.city)= item.city
				.emblem(style='background-image: url(' + item.emblem + ');')
				ul.city-info
					li.country= 'Country: ' + item.country
					li.founded= 'Founded: ' + item.founded
					li.population= 'Population: ' + item.population
			.btn-close
a#codepen-link(href='https://www.codepen.io/seanfree' target='_blank') */