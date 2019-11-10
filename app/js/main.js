$(function() {

// For video banner (muted)
  vid = document.getElementById("video-banner");
  function bg_video_mutedOn(){
    vid.muted = true;  
    $('#mutedVideo').addClass('mutedOn');
  };
  function bg_video_mutedOff(){
    vid.muted = false;
    $('#mutedVideo').removeClass('mutedOn');
  };
  $('#mutedVideo').click(function(){  
    var parent = $(this);
    if (!parent.hasClass('mutedOn')) {
       bg_video_mutedOn();
    }else{
      bg_video_mutedOff();
    }
  });

// For "scrollTop"
$(window).scroll(function() {
  if ($(this).scrollTop() > $('.banner').height()) {
    //$('#video-banner').get(0).pause();
    bg_video_mutedOn(); 
  } else {  
    //$('#video-banner').get(0).play(); 
  }; 
}); 

// Animations on scroll
  var $animation_elements = $('.animation-element');
  var $window = $(window);
  var check_if_in_view = function() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position - 100 <= window_bottom_position)) {
            $element.addClass('in-view');
      } else {
        // $element.removeClass('in-view');
      }
    });
  } 
  check_if_in_view();
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll'); 


// For smooth scrolling to anchors
$('a[href*="#"]')  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if ( 
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + 20
        }, 700, function() {
          var $target = $(target); 
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
          };
        });
      }
    }
}); 

// For video-cards
$('.video-gallery .about-hotel__wrapp__gallery__item').click(function(){
  $('.videoAbout iframe').attr('src', $(this).attr('video-link')); 
});
$(document).on('closing', '.videoAbout', function (e) {
  $('.videoAbout iframe').each(function(index) {                
  $(this).attr('src', $(this).attr('src'));       
  return false; 
  });    
});


// For rooms-slider
var sliders = [];
$('#about-hotel .h-sl').each(function(index, element){  
    $(this).addClass('s'+index);
    $(this).parent().parent().find('.slider-nav-prev').addClass('h'+index);
    $(this).parent().parent().find('.slider-nav-next').addClass('h'+index);   
    $(this).parent().parent().find('.slider-nav-progress').addClass('h'+index);   
    var slider = new Swiper('.s'+index, {
  slidesPerView: 'auto',
  freeMode: false,   
  loop: true,  
  speed: 300,
  pagination: { 
    el: '.slider-nav-progress.h'+index+'',  
    clickable: true, 
    type: 'progressbar',
  },
  navigation: {
    prevEl: '.slider-nav-prev.h'+index+'', 
    nextEl: '.slider-nav-next.h'+index+'', 
  },
    });
    sliders.push(slider);
});  

const breakpoint = window.matchMedia( '(max-width:767px)' );
var mySwiper;
const breakpointChecker = function() {  
   if ( breakpoint.matches === true ) {
      $('.about-rooms__case__gallery').removeClass('swiper-container');
      $('#about-rooms .swiper-wrapper').removeClass('swiper-wrapper');  
      $('.about-rooms__case__gallery__item').removeClass('swiper-slide'); 
   return;
     } else if ( breakpoint.matches === false ) {
       return enableSwiper();
     }
};
const enableSwiper = function() {
var slidersR = [];
$('#about-rooms .r-sl').each(function(index, element){  
    $(this).addClass('z'+index);
    $(this).parent().parent().find('.slider-nav-prev').addClass('r'+index);
    $(this).parent().parent().find('.slider-nav-next').addClass('r'+index);   
    $(this).parent().parent().find('.slider-nav-progress').addClass('r'+index);   
    var sliderR = new Swiper('.z'+index, {      
  slidesPerView: 'auto',   
  freeMode: false,   
  loop: true,  
  speed: 300,
  pagination: {  
    el: '.slider-nav-progress.r'+index+'',  
    clickable: true, 
    type: 'progressbar',
  },
  navigation: {
    prevEl: '.slider-nav-prev.r'+index+'', 
    nextEl: '.slider-nav-next.r'+index+'', 
  },
    });
    slidersR.push(sliderR);
});
};
breakpoint.addListener(breakpointChecker);
breakpointChecker(); 

 

// For reviews-slider
var swiper = new Swiper('.reviews__list', {
  slidesPerView: 'auto', 
  loop: true,
  pagination: {
    el: '.reviews-nav-progress',
    clickable: true, 
    type: 'progressbar',
  },  
  navigation: {
    prevEl: '.rev-sl-pr', 
    nextEl: '.rev-sl-nxt',   
  },
}); 

$('.reviews__item').click(function(){
  $('.reviewModal__info__name').text($(this).find('.reviews__item__name').text()); 
  $('.reviewModal__info__date').text($(this).find('.reviews__item__date').text()); 
  $('.reviewModal__text').html($(this).find('.reviews__item__text').html()); 
  $('.reviewModal__info__photo').attr('style', $(this).find('.reviews__item__img').attr('style'));   
});
 


// For gallery rooms
var gitem1 = [
  {"src": 'img/rooms/Standart/DELUXE_ROOM/1.jpg','thumb': 'img/rooms/Standart/DELUXE_ROOM/mini/1.jpg'},
  {"src": 'img/rooms/Standart/DELUXE_ROOM/2.jpg','thumb': 'img/rooms/Standart/DELUXE_ROOM/mini/2.jpg'},
  {"src": 'img/rooms/Standart/DELUXE_ROOM/3.jpg','thumb': 'img/rooms/Standart/DELUXE_ROOM/mini/3.jpg'},
  {"src": 'img/rooms/Standart/DELUXE_ROOM/4.jpg','thumb': 'img/rooms/Standart/DELUXE_ROOM/mini/4.jpg'},
  {"src": 'img/rooms/Standart/DELUXE_ROOM/5.jpg','thumb': 'img/rooms/Standart/DELUXE_ROOM/mini/5.jpg'},
];
var gitem2 = [
  {"src": 'img/rooms/Standart/FOREST_ROOM/1.jpg','thumb': 'img/rooms/Standart/FOREST_ROOM/mini/1.jpg'}, 
  {"src": 'img/rooms/Standart/FOREST_ROOM/2.jpg','thumb': 'img/rooms/Standart/FOREST_ROOM/mini/2.jpg'},
  {"src": 'img/rooms/Standart/FOREST_ROOM/3.jpg','thumb': 'img/rooms/Standart/FOREST_ROOM/mini/3.jpg'},
  {"src": 'img/rooms/Standart/FOREST_ROOM/4.jpg','thumb': 'img/rooms/Standart/FOREST_ROOM/mini/4.jpg'},
  {"src": 'img/rooms/Standart/FOREST_ROOM/5.jpg','thumb': 'img/rooms/Standart/FOREST_ROOM/mini/5.jpg'},
  {"src": 'img/rooms/Standart/FOREST_ROOM/6.jpg','thumb': 'img/rooms/Standart/FOREST_ROOM/mini/6.jpg'}, 
];
var gitem3 = [
  {"src": 'img/rooms/Standart/FAMILY_ROOM/1.jpg','thumb': 'img/rooms/Standart/FAMILY_ROOM/mini/1.jpg'},
  {"src": 'img/rooms/Standart/FAMILY_ROOM/2.jpg','thumb': 'img/rooms/Standart/FAMILY_ROOM/mini/2.jpg'},
  {"src": 'img/rooms/Standart/FAMILY_ROOM/3.jpg','thumb': 'img/rooms/Standart/FAMILY_ROOM/mini/3.jpg'},
  {"src": 'img/rooms/Standart/FAMILY_ROOM/4.jpg','thumb': 'img/rooms/Standart/FAMILY_ROOM/mini/4.jpg'},
]; 
var gitem4 = [
  {"src": 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/1.jpg','thumb': 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/mini/1.jpg'},
  {"src": 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/2.jpg','thumb': 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/mini/2.jpg'},
  {"src": 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/3.jpg','thumb': 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/mini/3.jpg'},
  {"src": 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/4.jpg','thumb': 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/mini/4.jpg'},  
  {"src": 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/5.jpg','thumb': 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/mini/5.jpg'},
  {"src": 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/6.jpg','thumb': 'img/rooms/Standart/INDIGO_CLUBBER_TERRACE_ROOM/mini/6.jpg'},
];   
var gitem5 = [
  {"src": 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/1.jpg','thumb': 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/mini/1.jpg'},
  {"src": 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/2.jpg','thumb': 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/mini/2.jpg'},
  {"src": 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/3.jpg','thumb': 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/mini/3.jpg'},
  {"src": 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/4.jpg','thumb': 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/mini/4.jpg'},
  {"src": 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/5.jpg','thumb': 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/mini/5.jpg'},
  {"src": 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/6.jpg','thumb': 'img/rooms/Standart/LAGUNA_SUPERIOR_ROOM/mini/6.jpg'}, 
];
var gitem6 = [  
  {"src": 'img/rooms/Standart/SUPERIOR_ROOM/1.jpg','thumb': 'img/rooms/Standart/SUPERIOR_ROOM/mini/1.jpg'},
  {"src": 'img/rooms/Standart/SUPERIOR_ROOM/2.jpg','thumb': 'img/rooms/Standart/SUPERIOR_ROOM/mini/2.jpg'},
  {"src": 'img/rooms/Standart/SUPERIOR_ROOM/3.jpg','thumb': 'img/rooms/Standart/SUPERIOR_ROOM/mini/3.jpg'},
  {"src": 'img/rooms/Standart/SUPERIOR_ROOM/4.jpg','thumb': 'img/rooms/Standart/SUPERIOR_ROOM/mini/4.jpg'},
  {"src": 'img/rooms/Standart/SUPERIOR_ROOM/5.jpg','thumb': 'img/rooms/Standart/SUPERIOR_ROOM/mini/5.jpg'},
  {"src": 'img/rooms/Standart/SUPERIOR_ROOM/6.jpg','thumb': 'img/rooms/Standart/SUPERIOR_ROOM/mini/6.jpg'},
  {"src": 'img/rooms/Standart/SUPERIOR_ROOM/7.jpg','thumb': 'img/rooms/Standart/SUPERIOR_ROOM/mini/7.jpg'},
];
var gitem7 = [
  {"src": 'img/rooms/Standart/TERRACE_GARDEN_ROOM/1.jpg','thumb': 'img/rooms/Standart/TERRACE_GARDEN_ROOM/mini/1.jpg'},  
  {"src": 'img/rooms/Standart/TERRACE_GARDEN_ROOM/2.jpg','thumb': 'img/rooms/Standart/TERRACE_GARDEN_ROOM/mini/2.jpg'},
  {"src": 'img/rooms/Standart/TERRACE_GARDEN_ROOM/3.jpg','thumb': 'img/rooms/Standart/TERRACE_GARDEN_ROOM/mini/3.jpg'}, 
  {"src": 'img/rooms/Standart/TERRACE_GARDEN_ROOM/4.jpg','thumb': 'img/rooms/Standart/TERRACE_GARDEN_ROOM/mini/4.jpg'},
  {"src": 'img/rooms/Standart/TERRACE_GARDEN_ROOM/5.jpg','thumb': 'img/rooms/Standart/TERRACE_GARDEN_ROOM/mini/5.jpg'},
];
var gitem8 = [ 
  {"src": 'img/rooms/Luxe/FOREST_SUITE/1.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/1.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/2.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/2.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/3.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/3.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/4.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/4.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/5.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/5.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/6.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/6.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/7.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/7.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/8.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/8.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/9.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/9.jpg'},
  {"src": 'img/rooms/Luxe/FOREST_SUITE/10.jpg','thumb': 'img/rooms/Luxe/FOREST_SUITE/mini/10.jpg'},
];
var gitem9 = [ 
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/1.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/1.jpg'},
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/2.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/2.jpg'},
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/3.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/3.jpg'},
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/4.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/4.jpg'},
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/5.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/5.jpg'},  
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/6.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/6.jpg'},
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/7.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/7.jpg'},
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/8.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/8.jpg'},
  {"src": 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/9.jpg','thumb': 'img/rooms/Luxe/LAGUNA_DUPLEX_FAMILY_SUITE/mini/9.jpg'},
];
var gitem10 = [   
  {"src": 'img/rooms/Luxe/Family_Corner_Suite/1.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Suite/mini/1.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Suite/2.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Suite/mini/2.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Suite/3.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Suite/mini/3.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Suite/4.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Suite/mini/4.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Suite/5.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Suite/mini/5.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Suite/6.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Suite/mini/6.jpg'},
];
var gitem11 = [   
  {"src": 'img/rooms/Luxe/Family_Corner_Terrace_Suite/4.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Terrace_Suite/mini/4.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Terrace_Suite/2.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Terrace_Suite/mini/2.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Terrace_Suite/3.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Terrace_Suite/mini/3.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Terrace_Suite/1.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Terrace_Suite/mini/1.jpg'},
  {"src": 'img/rooms/Luxe/Family_Corner_Terrace_Suite/5.jpg','thumb': 'img/rooms/Luxe/Family_Corner_Terrace_Suite/mini/5.jpg'},
];
var gitem12 = [   
  {"src": 'img/rooms/Villas/Citrus_Villa/1.jpg','thumb': 'img/rooms/Villas/Citrus_Villa/mini/1.jpg'},
  {"src": 'img/rooms/Villas/Citrus_Villa/2.jpg','thumb': 'img/rooms/Villas/Citrus_Villa/mini/2.jpg'},
  {"src": 'img/rooms/Villas/Citrus_Villa/3.jpg','thumb': 'img/rooms/Villas/Citrus_Villa/mini/3.jpg'},
  {"src": 'img/rooms/Villas/Citrus_Villa/4.jpg','thumb': 'img/rooms/Villas/Citrus_Villa/mini/4.jpg'},
];
var gitem13 = [   
  {"src": 'img/rooms/Villas/JR_CITRUS_VILLA/1.jpg','thumb': 'img/rooms/Villas/JR_CITRUS_VILLA/mini/1.jpg'},
  {"src": 'img/rooms/Villas/JR_CITRUS_VILLA/2.jpg','thumb': 'img/rooms/Villas/JR_CITRUS_VILLA/mini/2.jpg'},
  {"src": 'img/rooms/Villas/JR_CITRUS_VILLA/3.jpg','thumb': 'img/rooms/Villas/JR_CITRUS_VILLA/mini/3.jpg'},
];
var gitem14 = [   
  {"src": 'img/rooms/Villas/Presidential_Villa/1.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/1.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/2.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/2.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/3.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/3.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/4.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/4.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/5.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/5.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/6.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/6.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/7.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/7.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/8.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/8.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/9.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/9.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/10.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/10.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/11.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/11.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/12.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/12.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/13.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/13.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/14.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/14.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/15.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/15.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/16.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/16.jpg'},
  {"src": 'img/rooms/Villas/Presidential_Villa/17.jpg','thumb': 'img/rooms/Villas/Presidential_Villa/mini/17.jpg'},
];
var gitem15 = [   
  {"src": 'img/rooms/Villas/Pina_Villa/1.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/1.jpg'},
  {"src": 'img/rooms/Villas/Pina_Villa/2.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/2.jpg'},
  {"src": 'img/rooms/Villas/Pina_Villa/3.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/3.jpg'},
  {"src": 'img/rooms/Villas/Pina_Villa/4.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/4.jpg'},
  {"src": 'img/rooms/Villas/Pina_Villa/5.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/5.jpg'},
  {"src": 'img/rooms/Villas/Pina_Villa/6.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/6.jpg'},
  {"src": 'img/rooms/Villas/Pina_Villa/7.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/7.jpg'},
  {"src": 'img/rooms/Villas/Pina_Villa/8.jpg','thumb': 'img/rooms/Villas/Pina_Villa/mini/8.jpg'},
];

$('.about-rooms__case__gallery__item__media').on('click', function() {
    let gall_ind = String($(this).attr('gallery-index'));  
    $(this).lightGallery({
        mode: 'lg-fade',
        speed: 100,
        pager: false,
        share: false, 
        download: false,
        thumbMargin: 10,
        thumbWidth: 130,  
        thumbHeight: '80px',
        dynamic: true,
        dynamicEl: eval(gall_ind)
    })
});


// For forms
$(".header__contact__buy").click(function(){
  $('.mainModal__heading span').text('');
});
$('.about-hotel__wrapp__btn').click(function(){
  $('.mainModal__heading span').text('');
});
$(".about-rooms__case__gallery__item__btn").click(function(){
  $('.mainModal__heading span').text($(this).parent().find('.about-rooms__case__gallery__item__heading').text());
});


// For mobile nav   
function WindowResizeAddClass(parentelement, classelement){ 
$(window).resize(function() {   
  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
  if (windowWidth > 1024) {
    $(parentelement).removeClass(classelement);
  }else{
    $(parentelement).addClass(classelement);      
  }
});
$(document).ready(function(){
  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
  if (windowWidth > 1024) {
    $(parentelement).removeClass(classelement);
  }else{
    $(parentelement).addClass(classelement); 
  }
});
}

$(document).ready(function() {
  WindowResizeAddClass('header', 'headerMobMain');
}); 

$('.header-mob__burger').click(function(){
  $('header').show();
});
$('.header-out-btn').click(function(){
  $('header').hide();
});
$('.header__nav li').click(function(){
  $('.headerMobMain').hide();        
});   

// Disable sound after closing modal 
$(document).on('closing', '.videoModal', function (e) {
  $('.videoModal iframe').each(function(index) {                
  $(this).attr('src', $(this).attr('src'));       
  return false;
  });    
}); 


// For forms
$('.header__contact__buy').click(function(){
  var formValS = $(this).val();
  gevent('button_pressed', 'Кнопка с хедера', formValS); 
  $('textarea[name=comment]').html('Кнопка с хедера - Забронировать');   
});
$('.banner__content__btn-buy').click(function(){
  var formValS = $(this).val(); 
  gevent('button_pressed', 'Кнопка с баннера', formValS); 
  $('textarea[name=comment]').html('Кнопка с баннера - Забронировать');   
});
$('.about-hotel__wrapp__btn').click(function(){
  var formValS = $(this).val(); 
  gevent('button_pressed', 'Кнопка с описания отеля', formValS); 
  $('textarea[name=comment]').html('Кнопка с описания отеля - Забронировать');   
});
$('.about-rooms__case__gallery__item__btn').click(function(){
  var formValS = $(this).val(); 
  gevent('button_pressed', 'Кнопка с карточки номера', formValS); 
  var parent = $(this).parent();
  var text = "";
  text += parent.children('.about-rooms__case__gallery__item__heading').text()+"\r\n"; 
  text += parent.find('.about-rooms__case__gallery__item__price').text()+"\r\n"; 
  $('textarea[name=comment]').html(text); 
}); 
$('#footer-form button').click(function(){  
  $('textarea[name=comment]').html('Кнопка с футера - Забронировать');
}); 

$("#mainForm").validate({ 
    rules: {
    'sender_phone': {               
        minlength: 4 
    }   
    }  
});
$("#footer-form").validate({ 
    rules: {  
    'sender_phone': {               
        minlength: 4 
    }
    }  
});

$("#mainForm button").bind('click', function () {   
  if ($("#mainForm").valid()) { 
    gevent('request', 'Основная форма','none'); //отправка формы   
    sended($(this).attr('formid'));
    $('.mainModal__slTy').slideDown();         
    $('.mainModal__slOne').slideUp();      
    }else{
       $("#mainForm input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#mainForm input[name=sender_phone]").focus();   
    }   
});

$("#footer-form button").bind('click', function () {  
  if ($("#footer-form").valid()) {  
    gevent('request', 'Форма в футере','none'); //отправка формы    
    sended($(this).attr('formid'));
    $('.footer-form__slideTy').slideDown();         
    $('.footer-form__slOne').slideUp(); 
    }else{
       $("#footer-form input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#footer-form input[name=sender_phone]").focus();     
    }        
});

function sended(idform) {
      AjaxFormRequest(/*'messegeResult',*/ idform, 'sendmessage.php'); 
  }
    function AjaxFormRequest(/*result_id,*/idform, url) {
       jQuery.ajax({
          url:     url,
          type:     "POST",
          dataType: "html",
          data: jQuery("#"+idform).serialize(),
          success: function(response) {
        //document.getElementById('envelope').style.display='block';
        //document.getElementById('fade').style.display='block'
            //document.getElementById(result_id).innerHTML = response;
        //envelope_h1_change('Спасибо за обращение');
        //document.getElementById('env_form').style.backgroundColor='rgba(40,32,16,0.8)';
        //window.location.href = "/thanks";
          }/*,
          error: function(response) { 
            document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
        document.getElementById('envelope').style.display='block';
        document.getElementById('fade').style.display='block'
          }*/
       });} 
    function gevent(action, category='', label='', value=''){
        var params = {};
        if (category !=='') { params.event_category = category; }
        if (label !=='') { params.event_label = label; }
        if (value !=='') { params.value = value; }
        gtag('event', action, params);
    }  


}); 