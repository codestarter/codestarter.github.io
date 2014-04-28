// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
 
(function($){

  // function to check window size
  function checkWindowSize() {
    var width = $(window).width(),
    new_class = width > 767 ? 'gDesktop' :
      width > 479 ? 'gTablet' :
      width < 480 ? 'gMobile' : '';

    $(document.body).removeClass('gMobile gTablet gDesktop').addClass(new_class);
  }

  $(document).ready(function(){

    // call checkWindowSize function
    checkWindowSize();

  });//close document ready

})(jQuery)