////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  {
    class MorphingBG {
      constructor(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.paths = Array.from(this.DOM.el.querySelectorAll('path'));
        this.animate();
      }
      animate() {
        this.DOM.paths.forEach((path) => {
          setTimeout(() => {
            anime({
              targets: path,
              duration: anime.random(2200, 4300),
              easing: [0.6, 0, 0.6, 1],
              d: path.getAttribute('pathdata:id'),
              loop: true,
              direction: 'alternate'
            });
          }, anime.random(0, 900));
        });
      }
    };

    new MorphingBG(document.querySelector('svg.scene'));
  };



  $(window).scroll(function(){
    var light_pos = $('.lightSection').offset().top;
    var light_height = $('.lightSection').height();
    var menu_pos = $('.info').offset().top;


    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
    $('.nav-link').css('color', '#37404d');
    }
    else {
    $('.nav-link').css('color', 'white');
    }

  });


  $("#poping").Morphext({
    animation: "fadeIn",
    separator: ",",
    speed: 5000,
    complete: function() {}
  });


  Pace.on("done", function() {
  setTimeout(function() {

    $(".loading-screen").fadeOut("slow");
  }, 500);

});


  // change square Color

  timer = setInterval( function() {

    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    $('#square').css('backgroundColor', randomColor);

}, 3000);


});





var resizeId;

$(document).ready(function($) {
  "use strict";

  $('.navbar-nav .nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  //  "img" into "background-image" transfer

  $("[data-background-image]").each(function() {
    $(this).css("background-image", "url(" + $(this).attr("data-background-image") + ")");
  });

  $(".background--image, .img-into-bg").each(function() {
    $(this).css("background-image", "url(" + $(this).find("img").attr("src") + ")");
  });

  //  Custom background color

  $("[data-background-color]").each(function() {
    $(this).css("background-color", $(this).attr("data-background-color"));
  });

  //  Parallax Background Image

  $("[data-parallax='scroll']").each(function() {
    var speed = $(this).attr("data-parallax-speed");
    var $this = $(this);
    var isVisible;
    var backgroundPosition;

    $this.isInViewport(function(status) {
      if (status === "entered") {
        isVisible = 1;
        var position;

        $(window).scroll(function() {
          if (isVisible === 1) {
            position = $(window).scrollTop() - $this.offset().top;
            backgroundPosition = (100 - (Math.abs((-$(window).height()) - position) / ($(window).height() + $this.height())) * 100);
            if ($this.find(".parallax-element").hasClass("background--image")) {
              $this.find(".background--image.parallax-element").css("background-position-y", (position / speed) + "px");
            } else {
              $this.find(".parallax-element").css("transform", "translateY(" + (position / speed) + "px)");
            }
          }
        });
      }
      if (status === "leaved") {
        isVisible = 0;
      }
    });
  });



  // Owl Carousel

  var $owlCarousel = $(".owl-carousel");

  if ($owlCarousel.length) {
    $owlCarousel.each(function() {

      var items = parseInt($(this).attr("data-owl-items"), 10);
      if (!items) items = 1;

      var nav = parseInt($(this).attr("data-owl-nav"), 2);
      if (!nav) nav = 0;

      var dots = parseInt($(this).attr("data-owl-dots"), 2);
      if (!dots) dots = 0;

      var center = parseInt($(this).attr("data-owl-center"), 2);
      if (!center) center = 0;

      var loop = parseInt($(this).attr("data-owl-loop"), 2);
      if (!loop) loop = 0;

      var margin = parseInt($(this).attr("data-owl-margin"), 2);
      if (!margin) margin = 0;

      var autoWidth = parseInt($(this).attr("data-owl-auto-width"), 2);
      if (!autoWidth) autoWidth = 0;

      var navContainer = $(this).attr("data-owl-nav-container");
      if (!navContainer) navContainer = 0;

      var autoplay = $(this).attr("data-owl-autoplay");
      if (!autoplay) autoplay = 0;

      var fadeOut = $(this).attr("data-owl-fadeout");
      if (!fadeOut) fadeOut = 0;
      else fadeOut = "fadeOut";

      if ($("body").hasClass("rtl")) var rtl = true;
      else rtl = false;

      if (items === 1) {
        $(this).owlCarousel({
          navContainer: navContainer,
          animateOut: fadeOut,
          autoplaySpeed: 2000,
          autoplay: autoplay,
          autoheight: 1,
          center: center,
          loop: loop,
          margin: margin,
          autoWidth: autoWidth,
          items: 1,
          nav: nav,
          dots: dots,
          autoHeight: true,
          rtl: rtl,
          navText: []
        });
      } else {
        $(this).owlCarousel({
          navContainer: navContainer,
          animateOut: fadeOut,
          autoplaySpeed: 2000,
          autoplay: autoplay,
          autoheight: items,
          center: center,
          loop: loop,
          margin: margin,
          autoWidth: autoWidth,
          items: 1,
          nav: nav,
          dots: dots,
          autoHeight: true,
          rtl: rtl,
          navText: [],
          responsive: {
            1199: {
              items: items
            },
            992: {
              items: 3
            },
            768: {
              items: 2
            },
            0: {
              items: 1
            }
          }
        });
      }

      if ($(this).find(".owl-item").length === 1) {
        $(this).find(".owl-nav").css({
          "opacity": 0,
          "pointer-events": "none"
        });
      }

    });
  }

  // Loading effect


  // Text carousel of H1 heading in hero section

  $(".text-carousel").Morphext({
    animation: "fadeIn",
    separator: ",",
    speed: 3000
  });

  // Reveal text effect after is in viewport

  $(".reveal:not(.in)").each(function(i) {
    var $this = $(this);
    $this.isInViewport(function(status) {
      if (status === "entered") {
        setTimeout(function() {
          $this.addClass("in");
        }, i * 50);
      }
    });
  });


  // Magnific Video Popup

  if ($(".video-popup").length > 0) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
      overflowY: "hidden",
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?autoplay=1'
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          },
          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
          }
        },
        srcAction: 'iframe_src'
      }
    });
  }

  // amimation




  //  Form Validation

  $(".form .btn[type='submit']").on("click", function(e) {
    var button = $(this);
    var form = $(this).closest("form");
    button.prepend("<div class='status'></div>");
    form.validate({
      submitHandler: function() {
        $.post("assets/php/email.php", form.serialize(), function(response) {
          console.log(response);
          button.find(".status").append(response);
          form.addClass("submitted");
        });
        return false;
      }
    });
  });

  heroHeight();

});

// On RESIZE actions

$(window).on("resize", function() {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 250);
});

// On RESIZE actions

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 0) {
    $(".navbar").addClass("bg-black")
  } else {
    $(".navbar").removeClass("bg-black")
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Do after resize

function doneResizing() {
  heroHeight();
}

// Set Hero height

function heroHeight() {
  $("#hero").height($(window).height());
}






// Smooth Scroll



// Return scrollbar width

function getScrollBarWidth() {
  var $outer = $('<div>').css({
      visibility: 'hidden',
      width: 100,
      overflow: 'scroll'
    }).appendTo('body'),
    widthWithScroll = $('<div>').css({
      width: '100%'
    }).appendTo($outer).outerWidth();
  $outer.remove();
  return 100 - widthWithScroll;
}
