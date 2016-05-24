$(document).ready(function(){
  $("#demo01").animatedModal();
  $w = $(window)
  $w.on('resize',res);
  res();

  $("#class-submit").on('click',function(){
    console.log($("form").serialize());
  });

  // HELPER FUNCTIONS
  function res() {
    console.log("window height: "+$w.outerHeight());
    var a = $('.hero');
    var b = $('header');
    console.log("header height: "+b.outerHeight());
    a.css('height',($w.outerHeight()-b.outerHeight())+"px");
    console.log("hero height: "+a.outerHeight());
  }
  $('#menu-select').change(function(){
    console.log(this.value);
    if (this.value == 'drink') {
      var item = '#' + this.value;
      $(item).show();
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'lunch') {
      var item = '#' + this.value;
      $(item).show();
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'dinner') {
      var item = '#' + this.value;
      $(item).show();
      $('.content .section').not($(item)).hide();
    }
  });
});
