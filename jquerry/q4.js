$(function () {
  const $banners = $(".banner");
  // Basic visibility controls for a specific banner or all banners.
  $("#hide").on("click", function () { $banners.first().hide(); });
  $("#show").on("click", function () { $banners.show(); });
  $("#up").on("click", function () { $banners.slideUp(); });
  $("#down").on("click", function () { $banners.slideDown(); });
  $("#fadeOut").on("click", function () { $banners.fadeOut(); });
  $("#fadeIn").on("click", function () { $banners.fadeIn(); });

  // Rotate one banner at a time using fadeOut/fadeIn every five seconds.
  let current = 0;
  $banners.hide().eq(0).show();
  setInterval(function () {
    $banners.eq(current).fadeOut(400);
    current = (current + 1) % $banners.length;
    $banners.eq(current).fadeIn(400);
  }, 5000);
});
