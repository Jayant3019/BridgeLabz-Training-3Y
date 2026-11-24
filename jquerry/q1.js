$(function () {
  // Choose a greeting based on the visitor's local time.
  const hour = new Date().getHours();
  let greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  $("#greeting").text(greeting + "!");

  // Replace the greeting with a motivational message.
  $("#changeGreeting").on("click", function () {
    $("#greeting").text("Keep learning, keep growing, and make today count!");
  });

  // Toggle the welcome paragraph without removing it from the page.
  $("#toggleWelcome").on("click", function () { $("#welcome").toggle(); });

  // Show an alert when the greeting area is clicked.
  $("#greetingClick").on("click", function () { alert("Thanks for visiting!"); });
});
