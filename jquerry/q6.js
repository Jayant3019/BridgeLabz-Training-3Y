$(function () {
  let subscribed = false;
  function message(text) { $("#messages").empty().append($("<p>").addClass("success").text(text)); }
  $("#subscribe").on("click", function () { subscribed = true; $("#status").text("Notifications are enabled."); message("Successfully subscribed!"); });
  $("#unsubscribe").on("click", function () { subscribed = false; $("#status").text("Notifications are disabled."); message("You have unsubscribed."); });

  // Delegated .on() also handles topic buttons added later.
  $("#topics").on("click", ".topicAction", function () {
    message((subscribed ? "Subscribed to: " : "Selected topic: ") + $(this).text());
  });
  $("#addTopic").on("click", function () {
    const name = $("#newTopic").val().trim();
    if (!name) return message("Please enter a topic name.");
    const $topic = $("<div>").addClass("topic")
      .append($("<button>").addClass("topicAction").text(name))
      .append($("<button>").addClass("remove").text("Remove"));
    $("#topics").append($topic);
    $("#newTopic").val("");
    message("Topic added: " + name);
  });
  // Remove a topic and detach its delegated action handler when no topic actions remain.
  $("#topics").on("click", ".remove", function () {
    $(this).closest(".topic").remove();
    if ($("#topics .topicAction").length === 0) $("#topics").off("click", ".topicAction");
    message("Topic removed.");
  });
});
