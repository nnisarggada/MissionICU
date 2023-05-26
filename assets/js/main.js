/* ==============
 ========= js documentation ==========================

 * theme name: Evlio
 * version: 1.0
 * description: Business Conference Html5 Template
 * author: uiaxis
 * author url: https://themeforest.net/user/uiaxis

    ==================================================

     01. preloader
     -------------------------------------------------
     02. data background
     -------------------------------------------------
     03. navbar
     -------------------------------------------------
     04. social
     -------------------------------------------------
     05. event tab
     -------------------------------------------------
     06. ticket tab
     -------------------------------------------------
     07. pricing modal
     -------------------------------------------------
     08. conference details modal
     -------------------------------------------------
     09. scroll bottom to top

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // preloader
    setTimeout(function () {
      $("#ctn-preloader").addClass("loaded");
      if ($("#ctn-preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(1000)
          .queue(function () {
            $(this).remove();
          });
      }
    }, 2000);

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // navbar
    $(".nav__bar").on("click", function () {
      $(this).toggleClass("nav__bar-toggle");
      $(".nav__menu").toggleClass("nav__menu-active");
      $(".backdrop").toggleClass("backdrop-active");
      $("body").toggleClass("body-active");
    });

    $(".backdrop, .nav__menu-close, .hide-nav").on("click", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").next(".nav__dropdown").slideUp(500);
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
    });

    $(window).on("resize", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
      $(".ticket-modal").slideUp();
      $(".conference-modal").slideUp();
    });

    $(".nav__menu-link--dropdown").on("click", function () {
      $(this).next(".nav__dropdown").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    // on window scroll
    $(window).on("scroll", function () {
      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("header-active");
      } else {
        $(".header").addClass("header-active");
      }
    });

    // social
    $(".plus-ic").on("click", function () {
      $(this).next(".social--alt").slideToggle();
    });

    // event tab
    $(".event__tab-content").hide();
    $(".event__tab-content:first").show();
    $(".event__tab-btn").on("click", function () {
      $(".event__tab-btn").removeClass("event__tab-btn--active");
      $(this).addClass("event__tab-btn--active");
      $(".event__tab-content").hide();
      var activeEvent = $(this).attr("href");
      $(activeEvent).fadeIn(500);
      return false;
    });

    // ticket tab
    $(".ticket__tab-content").hide();
    $(".ticket__tab-content:first").show();
    $(".ticket__btn").on("click", function () {
      $(".ticket__btn").removeClass("ticket__btn--active");
      $(this).addClass("ticket__btn--active");
      $(".ticket__tab-content").hide();
      var activeTicket = $(this).attr("href");
      $(activeTicket).fadeIn(500);
      return false;
    });

    // pricing modal
    $(".open-ticket").on("click", function () {
      $(".ticket-modal").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-ticket").on("click", function () {
      $(".ticket-modal").slideUp();
      $("body").removeClass("body-active");
    });

    // conference details modal
    $(".open-conference").on("click", function () {
      $(".conference-modal").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference").on("click", function () {
      $(".conference-modal").slideUp();
      $("body").removeClass("body-active");
    });

    // scroll to top with progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });
    $(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });


    // theme switcher

    var checkBox = document.getElementById("chk");

    var theme = window.localStorage.getItem("data-theme");
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    checkBox.checked = theme == "light" ? true : false;

    checkBox.addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("data-theme", "light");
        $('link[href="assets/css/main.css"]').attr("href", "assets/css/light.css");
        $('#lightLogo').attr("src", "assets/images/logo-dark.png");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("data-theme", "dark");
        $('link[href="assets/css/light.css"]').attr("href", "assets/css/main.css");
        $('#lightLogo').attr("src", "assets/images/logo-light.png");
      }
    });

    if (localStorage.getItem("data-theme") == "light") {
      $('link[href="assets/css/main.css"]').attr("href", "assets/css/light.css");
      $('#lightLogo').attr("src", "assets/images/logo-dark.png");
    }

    if (localStorage.getItem("data-theme") == "dark") {
      $('link[href="assets/css/light.css"]').attr("href", "assets/css/main.css");
      $('#lightLogo').attr("src", "assets/images/logo-light.png");
    }

  });
})(jQuery);



