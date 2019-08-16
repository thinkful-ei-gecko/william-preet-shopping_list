'use strict'
function enterItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let userShoppingItem = $('#shopping-list-entry').val();
        
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${userShoppingItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );  
  });
}

/*The function below WORKS, in the sense that it checks off the EXISTING items on the page. However, for newly created items,
they will not be initially bound so event listening will not apply. That is why we must create the event listening on the PARENT
('ul')*/

// function checkItems() {
//   $('li').on('click', function() {
//     $(this).toggleClass('shopping-item__checked');
//   });
// }

//This is the correct function using event delegation:
function checkItems() {
  $('ul').on('click', '.shopping-item-toggle', function () {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  });
}



function removeItems() {
  $('ul').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
}

$(enterItem);
$(checkItems);
$(removeItems);
