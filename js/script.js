$(function () {
  // about counter up start
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // about counter up end

  // -------------type js start---------------
  $(".typed").typed({
    strings: ["MOST POPULAR GAMING PLATFORM."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1000,
    // backspacing speed
    backSpeed: 1,
    // time before backspacing
    backDelay: 50,
    // loop
    loop: true,
    // false = infinite
    loopCount: 1000,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {}
  });
  // type js end

  // games slider start

  $('.game_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    nextArrow: '.next-arrow',
    prevArrow: '.prev-arrow',
  });
  // games slider end
  // video slider start

  $('.video_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  });
  // video slider end
  // Top_game_slider slider start

  $('.top_game_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  });
  // Top_game_slider slider end
  // catalog slider start

  var rev = $('.catalog_slider');
  rev.on('init', function (event, slick, currentSlide) {
    var
      cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      next2 = cur.next().next(),
      prev = cur.prev(),
      prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
      cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    next = cur.next(),
      prev = cur.prev();
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev.prev().addClass('slick-sprev2');
    next.next().addClass('slick-snext2');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
  });

  rev.slick({
    speed: 2000,
    arrows: false,
    dots: false,
    autoplay: true,
    focusOnSelect: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
  });
  // catalog slider end
  // accesorise_slider start

  $('.accesorise_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: true,
    nextArrow: '.Anext-arrow',
    prevArrow: '.Aprev-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });
  // accesorise_slider end

  // menu fix area start
  var navoff = $('.navbar').offset().top;

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $('.navbar').addClass('menu_fix');
    } else {
      $('.navbar').removeClass('menu_fix');
    }

  });
  // menu fix  area end

  // back to top area start
  $('.bttb').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 500);
  });

  $(window).scroll(function () {
    var ccc = $(this).scrollTop();

    if (ccc > 200) {
      $('.bttb').fadeIn();
    } else {
      $('.bttb').fadeOut();

    }
  });

  // back to top area end

  // wow js start

  new WOW().init();

  // wow js start

  //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 500);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  // searchbar button

  $('.show_icon').on('click', function () {
    $('.search_bar').css('top', '0')
  });

  $('.cross').on('click', function () {
    $('.search_bar').css('top', '-100%')
  });

  // searchbar button

  // loginbar area start
  $('.login_show').on('click', function () {
    $('.login').css('top', '0')
  });

  $('.log_close').on('click', function () {
    $('.login').css('top', '-100%')
  });
  // loginbar area end

  // sidebar area start
  $('.sidebar_show').on('click', function () {
    $('.sidebar').css('right', '0')
  });

  $('.sidebar_hide').on('click', function () {
    $('.sidebar').css('right', '-100%')
  });
  // sidebar area end
  // res language area start
  $('.Rlang_show').on('click', function () {
    $('.rase_lag').css('left', '0')
  });

  $('.Rlang_hide').on('click', function () {
    $('.rase_lag').css('left', '-100%')
  });
  // res language area end
})