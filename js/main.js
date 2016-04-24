$(document).ready(function(){
  $w = $(window)
  $w.on('resize',res);
  res();



  // HELPER FUNCTIONS
  function res() {
    console.log("window height: "+$w.outerHeight());
    var a = $('.hero');
    var b = $('header');
    console.log("header height: "+b.outerHeight());
    a.css('height',($w.outerHeight()-b.outerHeight())+"px");
    console.log("hero height: "+a.outerHeight());
  }

});
