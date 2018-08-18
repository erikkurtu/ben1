$(document).ready(function() {
  console.log("hello beast!");
  $("#addItemButton").click(function() {
    var itemInputValue = $("#itemName").val();
    $("#itemList").append("<li class='list-group-item listItem'>"+itemInputValue+" <button type='button' class='btn btn-danger deleteButton'>X</button>"+" <button type='button' class='btn btn-secondary doneButton'>done</button></li><br>");
    $("#itemName").val("");
  });
  $('body').on('click', '.doneButton', function() {
    $(this).parent().css("background-color", "#666666");
    $(this).parent().insertAfter($('#itemList').children().last());
  });
  $('body').on('click', '.deleteButton', function() {
    $(this).parent().remove();
  });
});
