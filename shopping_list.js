'use strict'
function enterItem(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let userShoppingItem = $('#shopping-list-entry').val();
        
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${userShoppingItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);


    });

}

function checkItems(){

}

function removerItems(){

}

$(enterItem);