$(function () {
  // A manager highlights the direct reports in the same department.
  $(".manager").on("click", function () {
    $(this).siblings(".report").addClass("highlight");
  });
  // .next() accesses the contact-information element following the employee name.
  $(".employee").hover(function () { $(this).find(".contact").stop(true, true).slideDown(120); },
                       function () { $(this).find(".contact").stop(true, true).slideUp(120); });
  // .children() selects only direct employee children in the chosen department.
  $(".dept").on("click", function () {
    $(this).parent().children(".employee").toggleClass("highlight");
  });
  // Pick a random employee and highlight that employee's siblings.
  $("#random").on("click", function () {
    const $employees = $(".employee");
    $employees.removeClass("selected");
    const index = Math.floor(Math.random() * $employees.length);
    $employees.eq(index).addClass("selected").siblings(".employee").addClass("highlight");
  });
  // .parent() finds the team wrapper and .find() targets all team members.
  $("#collapse").on("click", function () {
    const $team = $("#team");
    if ($team.is(":visible")) $team.parent().find(".department").slideUp();
    else $team.find(".department").slideDown();
  });
});
