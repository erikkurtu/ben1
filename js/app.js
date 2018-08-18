$(document).ready(function() {
  console.log("hello beast!");
  $("#addItemButton").click(function() {
    var itemInputValue = $("#itemName").val();
    $("#itemList").append("<li class='list-group-item listItem'>"+itemInputValue+" <button type='button' class='btn btn-danger deleteButton'>X</button></li><br>");
    $("#itemName").val("");
  });
  $('body').on('dblclick', '.listItem', function() {
    $(this).css("background-color", "#666666");
    $(this).insertAfter($('#itemList').children().last());
  });
  $('body').on('click', '.deleteButton', function() {
    $(this).parent().remove();
  });
});
