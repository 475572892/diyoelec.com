$(window).load(function() {
  
  $('#full_feature').swipeslider({
    transitionDuration: 600,
    autoPlayTimeout: 10000,
    sliderHeight: '8.5rem',
    prevNextButtons: false
  })
  
  $("#search_fdj").click(function () {
     $("#logo").addClass("hide")
     $(this).addClass("hide")
     $(".search_input").removeClass("hide")
  })
  $("#search_btn").click (function () {
      $("#logo").removeClass("hide")
      $("#search_fdj").removeClass("hide")
      $(".search_input").addClass("hide")
  })
  
  
  $("#more_nav").click(function () {
    $("#slid_list").slideDown()
  })
  $("#close_slide").click(function () {
    $("#slid_list").slideUp()
  })
});