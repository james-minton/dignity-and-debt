(function($) {
    var jQuery = $.noConflict(true);
    var $ = jQuery;

    function checkScroll(y) {
      if (y <= 0) {
          $('body.home').addClass('scroll-top');
      } else {
          $('body.home').removeClass('scroll-top');
      }
    }
    $( document ).ready(function() {
        // console.log( "ready!" );
        // If on the home page, add scrollY tracking class to body tag.
        if ($('body.home').length >= 1) {
          // When the window is scrolled, check scroll position.
          $( window ).scroll(function() {
              var t = $(window).scrollTop();
              checkScroll(t);
          });
        }
        // Check on page load as well.
        var t = $(window).scrollTop();
        checkScroll(t);
    });
})(jQuery);
