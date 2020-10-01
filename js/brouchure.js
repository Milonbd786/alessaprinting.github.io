//*------------------------------loader-------------------

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

//*------------------------------Menu-------------------

$(".menu-btn").click(function(){
  $(".Xnavbar").slideToggle(300, function(){
    $(this).toggleClass("show").css('display', '')
  });
});

//*------------------------------Fixed-------------------
$(window).scroll(function () {
    if ($(window).scrollTop() > -10) {
        $('#desktop-menu').css('top', $(window).scrollTop());
    }
}
);

//--------------------  Slider----------------

$(function() {
  var inWrap = $('.inner-wrapper'),
  $slide = $('.slide');
  function slideNext() {
    inWrap.animate({left: '-200%'}, 200, function() {
      inWrap.css('left', '-100%');
      $('.slide').last().after($('.slide').first());
    });
  }
   //Enabling auto scroll
   sliderInterval = setInterval(slideNext, 2000);
  $('.prev').on('click', function() {
    inWrap.animate({left: '0%'}, 200, function() {
      inWrap.css('left', '-100%');
      $('.slide').first().before($('.slide').last());
    });
  });
  $('.next').on('click', function() {
    clearInterval(sliderInterval);
    slideNext();
  });
});

