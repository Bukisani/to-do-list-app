function newItem() {
  //1. Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //2.function that crosses out  an item out:
  function crossOut() {
    li.toggleClass('strike');
  }
  //2ii  crossing out an item after double clicking
  li.on('dblclick', crossOut);

  //3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append('X');
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css
  function deleteListItem() {
    $(this).closest('li').remove();
  }

  // 4. Reordering the items:
  $('#list').sortable();
}
// avoiding the flickering after clicking the button
$('#button').on('click', function (event) {
  event.preventDefault();
});
