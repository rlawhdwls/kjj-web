const Todo = document.querySelector('.js-todo');
const todo_text = document.querySelector('.todo-text');
const todo_box = document.querySelector('.js-todo-box');
const todo_ul = document.querySelector('.js-todoul')

const Btn2 = document.createElement('button');
const Delbtn2 = document.createElement('button');
const todo_list = document.createElement('li');

const show = 'showing';

function todosubmit(){
    const todoval = todo_text.value;
    Todo.classList.remove(show);
    Todo.classList.add(Showing);


    todoprint(todoval);
}
function todoprint(val){
    todo_box.classList.add(show);
    todo_ul.appendChild(todo_list);
    todo_list.textContent = val;
}

function todoload(){
    
    Todo.classList.add(show);
    todosubmit();
}






function init(){
    todoload();
}
init();