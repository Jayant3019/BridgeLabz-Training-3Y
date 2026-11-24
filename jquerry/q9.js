(function (v1, v2) {
  // v1 is the isolated jQuery 1.12.4 instance for carousel and active-widget behavior.
  v1(function () {
    var index = 0, $slides = v1(".slide");
    $slides.hide().eq(0).show();
    v1("#nextSlide").on("click", function () {
      $slides.eq(index).hide();
      index = (index + 1) % $slides.length;
      $slides.eq(index).show();
    });
    setInterval(function () {
      $slides.eq(index).fadeOut(250);
      index = (index + 1) % $slides.length;
      $slides.eq(index).fadeIn(250);
    }, 4000);
    v1("#activeWidget").on("click", function () {
      v1(".widget").removeClass("highlight");
      v1(this).addClass("highlight");
    });
  });

  // v2 is the isolated jQuery 3.7.1 instance for modal and tooltip behavior.
  v2(function () {
    v2("#notify").on("click", function () { v2("#modal").fadeIn(180); });
    v2("#closeModal").on("click", function () { v2("#modal").fadeOut(180); });
    v2("#activeWidget").on("mouseenter", function () {
      v2(this).attr("data-original-title", v2(this).attr("title")).attr("title", "Active dashboard widget");
    }).on("mouseleave", function () { v2(this).attr("title", "This widget is currently active"); });
  });
})(jq1, jq2);
