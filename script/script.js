let formElement = document.querySelector('.todo-list__create-new-task');
let ulElement = document.querySelector('.new-task');
let checkboxCounter = 0;

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(formElement);  
    let toDoName = formData.get('toDo');

    if (!toDoName) {
        return;
    }

    let elToDo = document.createElement('li');
    elToDo.classList.add('new-task__item', 'item');

    //checkbox:
    let btnDone = document.createElement('input');
    btnDone.setAttribute('type', 'checkbox');
    btnDone.setAttribute('id', 'check' + checkboxCounter); 
    btnDone.classList.add('item__checkbox');

    btnDone.addEventListener('click', function(event) {
        toDoText.classList.toggle('crossed');
     })

    
    //label:
    let toDoText = document.createElement('label');
    toDoText.classList.add('item__checkbox-label');
    toDoText.setAttribute('for', 'check' + checkboxCounter); 
    toDoText.innerText = toDoName;

    //counter
    checkboxCounter++;


    //containers
    let btnContainer = document.createElement('div');
    btnContainer.classList.add('item__buttons-container');

    let checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('item__checkbox-container');

    //button delete element
    let btnDelete = document.createElement('button');
    btnDelete.classList.add("item__button-delete");

    btnDelete.addEventListener('click', function(event) {
       event.target.parentNode.parentNode.remove();
    })

    checkboxContainer.appendChild(btnDone);
    checkboxContainer.appendChild(toDoText);

    elToDo.appendChild(checkboxContainer);
    elToDo.appendChild(btnContainer);
    
    btnContainer.appendChild(btnDelete);
    
    ulElement.appendChild(elToDo);

    formElement.querySelector('.new-task__input').value = '';
});










