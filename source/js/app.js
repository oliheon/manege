
// JavaScript
window.sr = ScrollReveal();

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });

// Javascript for header/nav section

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

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 400;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })
});

$(function() {

var $body = $(document);
$body.bind('scroll', function() {
  
// "Disable" the horizontal scroll.
if ($body.scrollLeft() !== 0) {
$body.scrollLeft(0);
}
});

});
