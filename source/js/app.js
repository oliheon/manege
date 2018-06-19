
// JavaScript
window.sr = ScrollReveal();

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $(".nav-home").css("background" , "rgba(250,250,250,0.8)").css("height", "50px");
	  }

	  else{
		  $(".nav-home").css("background" , "none").css("height", "100px");
	  }
  })
})
