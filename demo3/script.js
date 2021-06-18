$(window).scroll(function(e){
  if($(window).scrollTop() > 50){
    $(".navbar").removeClass("navbar-top");
  }
  else{
    $(".navbar").addClass("navbar-top");
  }
});

var s = skrollr.init();