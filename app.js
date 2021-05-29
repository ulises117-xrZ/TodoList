//selectores
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//eventlistener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
//funcioenes

function addTodo(event){
    //prevent 
    event.preventDefault()
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const nedTodo = document.createElement('li')
    // nedTodo.innerHTML = 'hey';
    nedTodo.innerHTML = todoInput.value;
    nedTodo.classList.add('todo-item');
    todoDiv.appendChild(nedTodo);
    //button checked
    const completedBtn = document.createElement('button')
    completedBtn.innerHTML = '<li class = "fas fa-check"></li>';
    completedBtn.classList.add('complete-btn')
    todoDiv.appendChild(completedBtn);
    //button delete
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<li class = "fas fa-trash"></li>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear input
    todoInput.value = "";
    //crete the element and ataching the listener
}

function deleteCheck(e){
    const item = e.target;
    const todo = item.parentElement;
    if(item.classList[0] === 'trash-btn'){
        todo.remove();
        // alert('Tarea eliminada exitosamente')
    } else{
        todo.classList.add('tachar');
        alert('Tarea completada exitosamente')
    }
}

