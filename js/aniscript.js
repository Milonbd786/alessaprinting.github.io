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

//--------------------  animation ----------------
(function(){
	
    function debounce(func, wait = 10, immediate = true){
        var timeout;
        return function(){
            var context = this, args = arguments;
            var later = function(){
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        }
    }

    const animate = document.querySelectorAll('.animate');

    function checkSlide(){
        animate.forEach(el => {
            const slideInAt = (window.scrollY + window.innerHeight) - el.clientHeight;
            const imageBottom = el.offsetTop + el.clientHeight;
            const isHalfShown = slideInAt > el.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;
            if (isHalfShown && isNotScrolledPast) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    checkSlide();
    window.addEventListener('scroll', checkSlide);

})();
