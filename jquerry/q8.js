$(function () {
  let postNumber = 6;
  // .append() adds a new post at the end of the list.
  $("#add").on("click", function () {
    $("#posts").append($("<article>").addClass("post").append($("<h3>").text("New Blog Post " + postNumber++), $("<p>").text("This post was added dynamically.")));
  });
  // .prepend() places the featured post before all existing posts.
  $("#featured").on("click", function () {
    $("#posts").prepend($("<article>").addClass("post highlight").append($("<h3>").text("Featured: Editor's Choice"), $("<p>").text("This is the featured post.")));
  });
  // Remove the last article only when one exists.
  $("#remove").on("click", function () { $("#posts .post").last().remove(); });
  // .before() and .after() insert tag labels around each post.
  $("#tags").on("click", function () {
    $("#posts .post").each(function (index) {
      if (!$(this).prev().hasClass("tag")) $(this).before($("<span>").addClass("tag muted").text("Blog Tag • "));
      if (!$(this).next().hasClass("tag")) $(this).after($("<span>").addClass("tag muted").text(" • Article " + (index + 1)));
    });
  });
  // Find posts whose text contains JavaScript and highlight them.
  $("#keywords").on("click", function () {
    $("#posts .post").each(function () {
      $(this).toggleClass("highlight", $(this).text().toLowerCase().includes("javascript"));
    });
  });
});
