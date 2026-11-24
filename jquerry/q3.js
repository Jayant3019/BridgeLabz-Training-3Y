$(function () {
  // Click a question to open or close only its answer.
  $(".question").on("click", function () { $(this).next(".answer").stop(true, true).slideToggle(); });
  // Hover changes the question's text color.
  $(".question").hover(function () { $(this).css("color", "#e07820"); },
                       function () { $(this).css("color", ""); });
  // Double-click any question to close every answer.
  $(".question").on("dblclick", function () { $(".answer").slideUp(); });
  // Focus/blur on an answer input highlights/resets its parent question.
  $(".answer input").on("focus", function () { $(this).closest(".faq-item").find(".question").css("background", "#e5f2ff"); });
  $(".answer input").on("blur", function () { $(this).closest(".faq-item").find(".question").css("background", ""); });
});
