$(document).ready(function() {
  console.log("hello beast!");
  var itemList = [];
  function loadSavedItems () {
    localforage.getItem('benapp').then(function(benappValue) {
      if (typeof benappValue !== 'undefined' && benappValue !== null) {
        itemList = benappValue;
        _.each(benappValue, function (bav) {
          $("#itemList").append("<li class='list-group-item listItem'><span class='listText'>"+bav+"</span> <button type='button' class='btn btn-danger deleteButton'>X</button></li><br>");
        });
      }
    }).catch(function(err) {
        console.log(err);
    });
  }
  loadSavedItems();

  $("#addItemButton").click(function() {
    var itemInputValue = $("#itemName").val();
    $("#itemList").append("<li class='list-group-item listItem'><span class='listText'>"+itemInputValue+"</span> <button type='button' class='btn btn-danger deleteButton'>X</button></li><br>");
    itemList.push(itemInputValue);
    localforage.setItem('benapp', itemList).then(function (value) {

    }).catch(function(err) {
        console.log(err);
    });
    $("#itemName").val("");
  });
  $('body').on('click', '.listItem', function() {
    $(this).css("background-color", "#666666");
    $(this).insertAfter($('#itemList').children().last());
  });
  $('body').on('click', '.deleteButton', function() {
    $(this).parent().remove();
    var listTextValue = $(this).parent().children('.listText').text();
    var listItemIndex = itemList.indexOf(listTextValue);
    console.log(listItemIndex);
    itemList.splice(listItemIndex, 1);
    localforage.setItem('benapp', itemList).then(function (value) {

    }).catch(function(err) {
        console.log(err);
    });
    e.stopPropagation();
  });
});
