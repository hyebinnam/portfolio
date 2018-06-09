/* main typing effect */
document.addEventListener('DOMContentLoaded', function(){

   Typed.new("#typed", {
      stringsElement: document.getElementById('typed-strings'),
      typeSpeed: 30,
      backDelay: 500,
      loop: false, //반복
      contentType: 'html', // or text
      // defaults to null for infinite loop
      loopCount: null
   });

});

/*  */
$(document).ready(function() {
    var h = $(window).height();
    console.log(h)
    $('.home').css('height',h)
   
    $(window).resize(function(){
    var h = $(window).height();
    console.log(h)
    $('.home').css('height',h)
});
});