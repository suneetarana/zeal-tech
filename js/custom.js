// scroll down anchor on top
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});


  // testimonials 
  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#student-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay:true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });


  // Tabs
  $(document).ready(function() {
  
    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > .tab-show'),
        $tabMenu = $wrapper.find('.tab-menu li'),
        $line = $('<div class="line"></div>').appendTo($tabMenu);
    
    $allTabs.not(':first-of-type').hide();  
    $tabMenu.filter(':first-of-type').find(':first').width('100%')
    
    $tabMenu.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });
    
    $allTabs.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });
    
    $tabMenu.on('click', function() {
      
      var dataTab = $(this).data('tab'),
          $getWrapper = $(this).closest($wrapper);
      
      $getWrapper.find($tabMenu).removeClass('active');
      $(this).addClass('active');
      
      $getWrapper.find('.line').width(0);
      $(this).find($line).animate({'width':'100%'}, 'fast');
      $getWrapper.find($allTabs).hide();
      $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
    });
      
  });//end ready


  // About Carousel
  $('.photos .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplaySpeed:4000,
    autoplayTimeout:4000,
    navSpeed:4000,
    smartSpeed:4000,
    autoplayHoverPause:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// EVENTS

// $('#events .owl-carousel').owlCarousel({
//   rtl:true,
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:2
//       },
//       1000:{
//           items:2
//       }
//   }
// })

$(document).ready(function() {
  $('#events .owl-carousel').owlCarousel({
      items: 3,  
      loop: true,
      nav: true,
      dots:false,
      dotsEach: true,
      lazyLoad: false,
      autoplay:true,
      autoplaySpeed:4000,
      navSpeed:4000,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 1,
          },
          750: {
              items: 2,
          },
          1000: {
              items: 3,
          }
      }
  });

});

$(document).ready(function() {
  $('.course-list .owl-carousel').owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      dots:false,
      dotsEach: true,
      lazyLoad: false,
      autoplay:false,
      autoplaySpeed:4000,
      navSpeed:4000,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 1,
          },
          750: {
              items: 3,
          },
          1000: {
              items: 4,
          }
      }
  });

});

$(".open").click( function () {
  var container = $(this).parents(".topic");
  var answer = container.find(".topic-details");
  var trigger = container.find(".faq-t");
  
  answer.slideToggle(200);
  
  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
  
  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  }
  else {
    container.addClass("expanded");
  }
});

// Dropdown Menu Fade    
jQuery(document).ready(function(){

  $('.megamenu-li').hover(function() {
      $(this).find('.megamenu').stop(true, true).delay(50).slideDown();
    }, function() {
      $(this).find('.megamenu').stop(true, true).delay(50).slideUp();
    })});

    
  
    