$(function () {
  // Demo-only in-memory list to demonstrate email uniqueness in this browser session.
  const registeredEmails = ["demo@example.com"];
  $("#registration").on("submit", function (event) {
    event.preventDefault();
    const $name = $("#name"), $email = $("#email"), $password = $("#password");
    const name = $name.val().trim(), email = $email.val().trim().toLowerCase(), password = $password.val();
    let valid = true;
    // Clear previous validation styles before checking the current values.
    $("input").removeClass("invalid");
    $("#result").removeClass("success error").text("");
    function invalid($field, message) { $field.css("border", "2px solid red").addClass("invalid"); valid = false; if (!$("#result").text()) $("#result").text(message); }
    if (!name) invalid($name, "Name is required.");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) invalid($email, "Enter a valid email address.");
    else if (registeredEmails.includes(email)) invalid($email, "This email is already registered.");
    if (password.length < 8) invalid($password, "Password must contain at least 8 characters.");
    if (valid) {
      registeredEmails.push(email);
      $("#result").removeClass("error").addClass("success").text("Registration successful!");
      this.reset();
    } else $("#result").addClass("error");
  });
});
