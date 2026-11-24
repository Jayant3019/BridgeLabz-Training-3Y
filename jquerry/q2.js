$(function () {
  // Clicking a product highlights it; unavailable items show an alert.
  $(".product").on("click", function () {
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
    if ($(this).attr("data-stock") === "no") alert("Sorry, this product is out of stock.");
  });
  // Reveal extra information while the pointer is over a product.
  $(".product").hover(function () { $(this).find(".details").stop(true, true).slideDown(150); },
                      function () { $(this).find(".details").stop(true, true).slideUp(150); });
  // Favorite control toggles its selected state without triggering product click.
  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected").text($(this).hasClass("selected") ? "♥ Favorited" : "♡ Favorite");
  });
});
