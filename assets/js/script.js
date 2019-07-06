$(".txtb").on("keyup", function (e) {
  // declare components / elements
  const task = $("<div class='task'></div>");
  const del = $("<i class='fa fa-trash' aria-hidden='true'></i>").click(function () {
    let parent = $(this).parent();
    parent.fadeOut(function () {
      parent.remove();
    });
  });
  const check = $("<i class='fa fa-check' aria-hidden='true'></i>").click(function () {
    let parent = $(this).parent();
    parent.fadeOut(function () {
      $(".comp").append(parent);
      parent.fadeIn();
    });
    $(this).remove();
  });


  // 13 means enter button btw
  if (e.keyCode == 13 && $(".txtb").val() != "") {
    // append task element with input text value as text
    $(".notcomp").append(task.text($(".txtb").val()));

    // append del and check component
    task.append(del, check);

    // to clear the input task
    $(".txtb").val("");
  }
});