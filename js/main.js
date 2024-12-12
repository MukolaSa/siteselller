// AOS.init({
//     acnhorPlacement: 'top-bottom',
//     once: true,
//     duration: 700
// });

$(document).ready(() => {

    const deadline = new Date(new Date().getFullYear(), new Date().getMonth(), '28');
    let timerId = null;
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      days = days < 10 ? '0' + days : days;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
    
      $('.day .value').html(days)
      $('.hours .value').html(hours)
      $('.minutes .value').html(minutes)
      $('.seconds .value').html(seconds)
    }
    
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);



    // function fixHeader() {
    //     var winTop = $(window).scrollTop();
    //     if(winTop >= 1){
    //         $('#header').addClass('fixed');
    //     } else {
    //         $('#header').removeClass('fixed');
    //     }
    // }
    // fixHeader();
    // $(window).scroll(function(){
    //     fixHeader();
    // });




    // if ($(window).width() > 991) {
    // }



    // $('input[type="tel"]').mask('+7 (999) 999-99-99');



    // // Модальные окна
    // var overlay = $(".overlay"),
    //     modal = $(".modal"),
    //     modalClose = $(".modal__close"),
    //     modalOpen = $(".modal__open[data-modal]");

    // overlay.click(function (e) {
    //     if ($(e.target).closest(".modal").length == 0) {
    //         $("body, html").removeClass("my-body-noscroll-class");
    //         $(this).fadeOut();
    //         modal.fadeOut();
    //         $(".video-content iframe").remove();
    //     }
    // });

    // modalClose.click(function () {
    //     $("body, html").removeClass("my-body-noscroll-class");
    //     overlay.fadeOut();
    //     modal.fadeOut();
    //     $(".video-content iframe").remove();
    // });

    // modalOpen.each(function () {
    //     $(this).on("click", function (e) {
    //         var modalId = $(this).attr("data-modal"),
    //             EachModal = $('.modal[data-modal="' + modalId + '"]');
    //         $("body, html").addClass("my-body-noscroll-class");

    //         if (this.getAttribute("data-src")) {
    //             var modalVideo = this.getAttribute("data-src");
    //             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
    //             $(modalElem)
    //                 .find(".video-content")
    //                 .html('<iframe src="https://www.youtube.com/embed/' + modalVideo + '?frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    //         }

    //         $("#mobile__menu").removeClass("active");
    //         modal.fadeOut();

    //         overlay.fadeIn();
    //         EachModal.fadeIn();
    //     });
    // });



    /** * Replace all SVG images with inline SVG */
    $("img.img-svg").each(function () {
        var $img = $(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");
        $.get(
            imgURL,
            function (data) {
                var $svg = $(data).find("svg");
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass + " replaced-svg");
                }
                $svg = $svg.removeAttr("xmlns:a");
                $img.replaceWith($svg);
            },
            "xml"
        );
    });



    // Мобильное меню
    $(".header__menu-open").on("click", function (e) {
        $(".mobile__menu").toggleClass("active");
        $("body, html").addClass("my-body-noscroll-class");
    });
    $(".mobile__menu-close").on("click", function (e) {
        $(".mobile__menu").toggleClass("active");
        $("body, html").removeClass("my-body-noscroll-class");
    });



    $('a[href^="#"]').click(function () {
        $(".mobile__menu").removeClass("active");
        $("body, html").removeClass("my-body-noscroll-class");
        let target = $(this).attr("href");
        let targetPosition = $(target).offset().top - 30;
        $("html, body").animate({ scrollTop: targetPosition }, 500);
        return false;
    });



    // Табы - вкладки
    // $(".repairs__button").on("click", function () {
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $(".repairs__tab").removeClass("active").eq($(this).index()).addClass("active");
    // });



    // E-mail Ajax Send
    // $("form").submit(function (event) {
    //     var th = $(this);
    //     $.ajax({
    //         type: "POST",
    //         url: "/mail.php",
    //         data: th.serialize(),
    //     }).done(function () {});

    //     var url = "/thanks.html";
    //     $(location).attr("href", url);

    //     // $('.overlay').fadeIn();
    //     // $('.modal').fadeOut();
    //     // $('.modal.thanks').fadeIn();
    //     return false;
    // });



    // $(".report__slider").slick({
    //     infinite: true,
    //     slidesToShow: 2,
    //     arrows: true,
    //     prevArrow: ".report__arrow.left",
    //     nextArrow: ".report__arrow.right",
    //     dots: false,
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 575,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // });



    if ($(window).width() > 575) {
        $(".item__header").on("click", function () {
            $(this).parent().toggleClass("active");
            $(this).parent().find(".item__content").slideToggle();
        });
    } else {
        $(".program__item").on("click", function () {
            $(this).toggleClass("active");
            $(this).find(".item__content").slideToggle();
        });
    }

    $(".program__more-btn").on("click", function () {
        $('.program__item.hidden').fadeIn()
        $(this).hide()
    });


    // document.querySelectorAll("[data-relative-input]").forEach((el) => {
    //     new Parallax(el, {
    //         clipRelativeInput: true,
    //     });
    // });



    // $('.portfolio-slider').lightGallery({
    //     thumbnail:false,
    //     download: false,
    //     selector: 'a',
    //     mode: 'lg-fade'
    // });
});
