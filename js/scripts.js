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
    li.addClass('delete');
  }

  // 4. Reordering the items:
  $('#list').sortable();
}

let addItem = $('.addList');
addItem.on('click', newItem);

//1. pressing enter key first trial
//using the enter key to input
/*$('#input').keypress(function (event) {
  let keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == '13') {
    newItem()
  }
});


//2. pressing enter key second trial
$('#input').keypress(function (event) {
  let keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == '13') {
    $('.addList').click();
  }
});


*/
