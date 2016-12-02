$(document).ready(function(){
  a = location.href;
  console.log(a);
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

    var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    switch(true){
      case (hour < 11):
        $("#menu-select").val("breakfast").change();
        break;
      case (hour < 20 && hour > 11):
        $("#menu-select").val("dinner").change();
        break;
      case (hour > 20):

        $("#menu-select").val("drinks").change();
        break;
    }
  $('#menu-select').change(function(){
    console.log(this.value);
    if (this.value == 'breakfast') {
      var item = '#' + this.value;
      $(item).show();
      $("#menu-download").attr('href','./img/menu/breakfast.pdf');
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'dinner') {
      var item = '#' + this.value;
      $(item).show();
      $("#menu-download").attr('href','./img/menu/dinner.pdf');
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'drinks') {
      var item = '#' + this.value;
      $(item).show();
      $("#menu-download").attr('href','./img/menu/drinks.pdf');
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'dessert') {
      var item = '#' + this.value;
      $(item).show();
      $("#menu-download").attr('href','./img/menu/dessert.pdf');
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'hh') {
      var item = '#' + this.value;
      $(item).show();
      $("#menu-download").attr('href','./img/menu/hh.pdf');
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'kids') {
      var item = '#' + this.value;
      $(item).show();
      $("#menu-download").attr('href','./img/menu/kids.jpg');
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'togo') {
      var item = '#' + this.value;
      $(item).show();
      $("#menu-download").attr('href','./img/menu/togo.pdf');
      $('.content .section').not($(item)).hide();
    }
  });


});
