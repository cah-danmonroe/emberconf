$(document).ready(function() {
  window.location.hash && ($(location.hash).parent(".switchable").addClass("open"), $("html,body").animate({
    scrollTop: $(location.hash).offset().top - 150
  }, 300)), $(".menu-trigger").click(function() {
    $("nav.navigation > ul").toggleClass("mobile-menu"), $(".navigation").toggleClass("menu-open"), $(".drawer").hasClass("open") ? $(".drawer").toggleClass("open") : $(".mobile-menu .drawer-opener").unbind("click").click(function(a) {
      a.preventDefault(), a.stopPropagation(), $(this).parent(".drawer").toggleClass("open")
    })
  }), $(window).resize(function() {
    if ($(window).width() > 672) {
      $("nav.navigation > ul").removeClass("mobile-menu"), $(".navigation").removeClass("menu-open"), $(".drawer").removeClass("open");
      var a = $("button.menu-trigger");
      a.text(a.data("text-original"))
    }
  }), $("button.menu-trigger").on("click", function() {
    var a = $(this);
    a.text() == a.data("text-swap") ? a.text(a.data("text-original")) : (a.data("text-original", a.text()), a.text(a.data("text-swap")))
  });
  var a = window.location.pathname.split("/").pop();
  "" == a && (a = "index.html"), $('nav a[href="' + a + '"]').addClass("active"), $(window).scroll(function() {
    var a = $(window).scrollTop();
    $(window).width() < 512 && a > 10 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 512 && $(window).width() < 736 && a > 15 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 736 && $(window).width() < 992 && a > 95 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 992 && a > 20 ? $("nav.navigation").addClass("fixed-header") : $("nav.navigation").removeClass("fixed-header")
  }), $(document).on("click", ".toggle-link", function(a) {
    a.preventDefault();
    var t = this.id;
    setTimeout(function() {
      window.location.hash = t
    }, 300), $(this).parent(".switchable").toggleClass("open"), $("html, body").animate({
      scrollTop: $(this).offset().top - 150
    }, 500)
  }), $(document).on("click", ".radio-toggle-link", function() {
    $(this).parent(".radio-switchable").siblings().removeClass("open"), $("html, body").animate({
      scrollTop: $(this).offset().top - 150
    }, 300), $(this).parent(".radio-switchable").toggleClass("open")
  })
});
