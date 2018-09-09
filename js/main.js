$(document).ready(function(){
  $('.loggedUser').click(function(){
    $('.loggedUserMenu').stop().slideToggle('300');
    $(this).toggleClass('loggedUser-clicked');
  });

  var deadline='2018-09-30 00:00:00';
  $('.timerText').downCount({
  	date: deadline,
  },
  function(){
     /* действие после завершения таймера */
     alert("Время истекло!");
  });

  $('.taskMenu li').click(function(){
    var blockClass = $(this).attr('data-task');
    if($(this).prev().hasClass('succeedTask') || $(this).is(':first-child')){
      $('.taskBlock-active').fadeOut('', function(){
        $(this).removeClass('taskBlock-active');
        $('.taskBlock' + blockClass).fadeIn('');
        $('.taskBlock' + blockClass).addClass('taskBlock-active');
      });
    }
  });

  var mainPrizeSwiper = new Swiper('.mainPrize-swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mainPageSwiper = new Swiper('.mainPage-swiper-container', {
    pagination: {
      el: '.mainPage-swiper-pagination',
      clickable: true,
    },
  });

  var gooseSwiper = new Swiper('.goose-swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $.scrollify({
    section : "section",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".scroll-pagination .active").removeClass("active");

      $(".scroll-pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

      if(!$('.scroll-pagination li a[href="#01"]').hasClass('active')){
        $('.scroll-pagination').addClass('darken');
      }
      else{
        $('.scroll-pagination').removeClass('darken');
      }
    },
    afterRender:function() {
      var pagination = "<ul class=\"scroll-pagination\">";
      var activeClass = "";
      $("section").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".mainPage").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".scroll-pagination a").on("click",$.scrollify.move);
    },
    after: function(){
      if($('.scroll-pagination li a[href="#02"]').hasClass('active')){
        $('.mainSection').addClass('animatedSection');
      }
    },
  });
});
