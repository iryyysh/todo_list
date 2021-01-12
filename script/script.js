let formFind = document.querySelector('.todo-list__create-new-task');
let ulFind = document.querySelector('.new-task');
let indexForId = 0;

formFind.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(formFind);  
    let toDoName = formData.get('toDo');

    if (!toDoName) {
        return;
    }

    let elToDo = document.createElement('li');
    elToDo.classList.add('new-task__item', 'item');

    let btnDone = document.createElement('input');
    btnDone.setAttribute('type', 'checkbox');
    btnDone.classList.add('item__checkbox');
    btnDone.setAttribute('id', 'check'+indexForId);

    let toDoText = document.createElement('label');
    toDoText.classList.add('item__checkbox-label');
    toDoText.setAttribute('for', 'check'+indexForId);
    indexForId++;

    let btnContainer = document.createElement('div');
    btnContainer.classList.add('item__buttons-container');

    let checkboxAndTextContainer = document.createElement('div');
    checkboxAndTextContainer.classList.add('item__checkbox-container');

    let btnDelete = document.createElement('button');
    //let btnImportant = document.createElement('button');

    btnDelete.classList.add("item__button-delete");
   // btnImportant.classList.add("item__button-important");

    btnDelete.addEventListener('click', function(event) {
       event.target.parentNode.parentNode.remove();
    })

    btnDone.addEventListener('click', function(event) {
        toDoText.classList.toggle('crossed');
     })

    /*btnImportant.addEventListener('click', function(event) {
        elToDo.style.color = 'yellow';
     })*/
    toDoText.innerText = toDoName;

    checkboxAndTextContainer.appendChild(btnDone);
    checkboxAndTextContainer.appendChild(toDoText);

    elToDo.appendChild(checkboxAndTextContainer);
    elToDo.appendChild(btnContainer);
    
    //btnContainer.appendChild(btnImportant);
    btnContainer.appendChild(btnDelete);

    
    ulFind.appendChild(elToDo);

    formFind.querySelector('.new-task__input').value = '';

    



});

























/*let formFind = document.querySelector('.create_new_todo');
let ulFind = document.querySelector('.todo');

formFind.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(formFind);  
    let toDoName = formData.get('toDo');

    if (!toDoName) {
        return;
    }

    let elToDo = document.createElement('li');

    let btnDone = document.createElement('button');
    let btnImportant = document.createElement('button');

    btnDone.addEventListener('click', function(event) {
       event.target.parentNode.remove();
    })

    btnImportant.addEventListener('click', function(event) {
        elToDo.style.color = 'yellow';
     })

    elToDo.innerText = toDoName;
    btnDone.innerText= 'Удалить';
    btnImportant.innerHTML = 'Важное';

    elToDo.appendChild(btnDone);
    elToDo.appendChild(btnImportant);

    ulFind.appendChild(elToDo);

    formFind.querySelector('.message').value = '';
});
*/