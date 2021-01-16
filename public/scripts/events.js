$(document).ready(function () {
   let header = document.getElementById('header-block');
   let headerHeight = header.offsetHeight;
   document.body.style.paddingTop = headerHeight+'px';

   // Создание слайдера (карусель) для баннера
   $('.slider').slick({
      dots: true,
      infinite: false,
      adaptiveHeight: false,
      centerMode: true,
      responsive: [
         {
            breakpoint: 780,
            settings:{
               centerMode: false,
               // adaptiveHeight: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               dots: false,
            }
         }
      ]
      // centerPadding: '60px',
   });

   // Создание слайдера (карусель) товаров для каждого раздела товара
   $('.row-slider').slick({
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 740,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });

   // Код для высоты каждого экрана минус navbar
   console.log(document.documentElement.offsetHeight);
   $(".section").css( "height", function() {return document.documentElement.offsetHeight - headerHeight;});
   $(window).resize(function(){
      $(".section").css( "height", function() {return document.documentElement.offsetHeight - headerHeight;});
   });


   // Код для плавного скролла до блока (экрана)
   $('a').on('click', function (event) {
      if ( !$(this).hasClass('nav-link') && !$(this).hasClass('logo') ) {return}

      var target = $(this.getAttribute('href'));
      if (target.length) {
         event.preventDefault();
         $('html, body').stop().animate({
            scrollTop: target.offset().top - headerHeight
         }, 1000);
      }
   });



   $(".nav-elem.credit").click(function (e) {
      $('#cartModal').css({'display':'block'});
      $("body").css('overflow', 'hidden');
      let toPadd = $('.cart-row-headers')[0].clientWidth - $('.cart-wrap-in')[0].clientWidth;
      $('.cart-row-headers').css({'padding-right':toPadd});
      e.preventDefault();
   });

   $(document).click(function (e) {
      if (e.target.tagName=='INPUT'){
         $('#search-res-wrap').css({'display': 'block'});
      } else if($('#search-res-wrap').css('display') == 'block'){
         $('#search-res-wrap').css({'display': 'none'});
      }
      if (e.target.id == "modalClose" || e.target.id == "cartModal") {
         $('#cartModal').css({'display': 'none'});
         $("body").css('overflow', '');
      }
   });

});