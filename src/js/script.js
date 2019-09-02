// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		infinite: true,
// 		speed: 400,
// 		prevArrow:'<button type="button" class="slick-prev"><img src="icon/arrow.png"></button>',
// 		nextArrow:'<button type="button" class="slick-next"><img src="icon/arrow-right.png"></button>',
// 		centerMode: true,
// 		variableWidth: true,
// 		responsive:[
// 			{
// 			breakpoint: 1000,
// 			settings:{
// 				dots: true,
// 				arrows: false,
				
// 			}
// 			}

// 		]
		
		   
		
		
// 	   });
//   });
	
  // // centerMode: true,
		// autoplay: true,
		// autoplaySpeed: 1800 
		// fade: true,
		// cssEase: 'linear'
	// slidesToShow: 2,
		// slidesToScroll: 2
		// dots: true,
		// infinite: true,
		 //   setting-name: setting-value
		 // slidesToShow: 1,

const slider = tns({
container: '.carousel__inner',
items: 1,
slideBy: 'page',
autoplay: false,
controls: false,
nav: true,
navPosition: 'bottom',
autoplayHoverPause: true,
autoplayButtonOutput: false,
autoplayTimeout:'5000',


});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});