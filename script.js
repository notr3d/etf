$(document).ready(function() {
    $('#fullpage').fullpage({
      scrollBar:true,
      verticalCentered:false
    });
    $('.slider').slick({
      autoplay:true,
      autoplaySpeed:1000,
      arrows:false,
      draggable:false,
      fade:true
    });
});