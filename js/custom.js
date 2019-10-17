    //--------  Dropdown on hover Js --------

$(document).ready(function() {
  $(".dropdown").hover(
    function() {
      $(this).find('.menu_dpdn, .smenu_dpdn').stop(true, false, true).slideDown();
    },
    function() {
      $(this).find('.menu_dpdn, .smenu_dpdn').stop(true, false, true).slideUp(100);
    });
  $('.menu ul li a ').click(function(){
    $('.menu ul li a ').removeClass("active");
    $(this).addClass("active");
});
    
      $('.menu_dpdn li a').click(function(){
        $('.menu_dpdn li a').removeClass("active");
        $('.about').addClass("active");
    });
    
      $('.menu_dpdn li a').click(function(){
        $('.about').removeClass("active");
          $('.about').addClass("active");
    });
    
      $('.smenu_dpdn li a').click(function(){
        $('.smenu_dpdn li a').removeClass("active");
          $('.services').addClass("active");
    }); 

});
    $('.about , .services').click(function() {
  $('.about , .services').off( "click", flash )
});
