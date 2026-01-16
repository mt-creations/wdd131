

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value.trim() === '') {
        input.focus();
        return
    }
    const li = document.createElement('li');
    li.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
    
    });

    input.value = '';
    input.focus();

});


