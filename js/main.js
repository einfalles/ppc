$(document).ready(function(){
  $w = $(window)
  $w.on('resize',res);
  res();
});

// HELPER FUNCTIONS
function res() {
  console.log($w.outerHeight());
  var a = $('.hero');
  var b = $('header');
  a.css('height',($w.outerHeight()-b.outerHeight())+"px");
}
