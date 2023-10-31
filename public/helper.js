$(document).ready(function () {
  $(".list-group").on("change", ".form-check-input", function () {
    if ($(this).is(":checkbox")) {
      const index = $(".form-check-input").index(this);
      const textSpan = $(".to-do-item")[index];

      if ($(this).prop("checked")) {
        $(textSpan).css("text-decoration", "line-through");
      } else {
        $(textSpan).css("text-decoration", "none");
      }
    }
  });

  $(".remove-button").on("click", function () {
    const indexToRemove = $(this).data("index");
    var button = $(this);

    // send an AJAX request to the server to remove the item
    $.ajax({
      url: "/remove",
      method: "POST",
      data: { index: indexToRemove },
      success: function () {
        // assuming the server succeessfully removed the item, remove it from the DOM
        button.closest(".list-group-item").remove();
        console.log(indexToRemove);
      },
      error: function () {
        console.error("Failed to remove the item");
      },
    });
  });
});
