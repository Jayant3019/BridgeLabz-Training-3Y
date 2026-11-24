$(function () {
  const $courses = $(".course");
  function filterCourses() {
    const term = $("#search").val().trim().toLowerCase();
    let count = 0;
    $courses.each(function () {
      const original = $(this).text();
      const match = original.toLowerCase().includes(term);
      // Show only matching courses and reset old highlighting before applying new markup.
      $(this).toggle(match);
      if (match) {
        count++;
        if (term) {
          const index = original.toLowerCase().indexOf(term);
          const before = $("<span>").text(original.slice(0, index));
          const mark = $("<strong>").css("background", "#ffef9c").text(original.slice(index, index + term.length));
          const after = $("<span>").text(original.slice(index + term.length));
          $(this).empty().append(before, mark, after);
        } else $(this).text(original);
      } else $(this).text(original);
    });
    $("#count").text("Matched courses: " + count);
  }
  // keyup filters the list immediately as the user types.
  $("#search").on("keyup", filterCourses);
  $("#clear").on("click", function () { $("#search").val(""); filterCourses(); });
});
