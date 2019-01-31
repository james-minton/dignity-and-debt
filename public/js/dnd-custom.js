(function($) {
    var jQuery = $.noConflict(true);
    // From there on, window.jQuery and window.$ are undefined.
    var $ = jQuery;
    // Do something with the local jQuery and $...
    $( document ).ready(function() {
        // console.log( "ready!" );
        // If on the home page, add scrollY tracking class to body tag.
        if ($('body.home').length >= 1) {
          // console.log('On home page.');

          // $('body.home').addClass('scroll-top');
          // When the window is scrolled, check scroll position.
          $( window ).scroll(function() {
              var t = $(window).scrollTop();
              // console.log(t);
              if (t <= 0) {
                  $('body.home').addClass('scroll-top');
              } else {
                  $('body.home').removeClass('scroll-top');
              }
          });
console.log('blah 1');
          // Check on page load as well.
          var t = $(window).scrollTop();
          console.log(t);
          if (t <= 0) {
            console.log('blah blah');
              $('body.home').addClass('scroll-top');
          } else {
            console.log('blah');
              $('body.home').removeClass('scroll-top');
          }
        }
        console.log('blah 4');
    });
})(jQuery);
