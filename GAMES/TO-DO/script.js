// //DOM elements

var todoList = [];
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected");
var all =document.getElementById("all")

//5
function updateList() {
    comdoList = todoList.filter((data) => {
        if (data.complete == true) {
            return data;
        }
    });

    remList = todoList.filter((data) => {
        if (data.complete == false) {
            return data;
        }
    });

    document.querySelector('#c-count').textContent = comdoList.length;
    document.querySelector('#r-count').textContent = todoList.length;
}
// //event listners for add and delete

//6
function appendTask(todoList) {
    allTodos.innerHTML = "";//empty .... -> task

    todoList.forEach((element) => {
        var x = `<li id=${element.id} class="todo-item">
            <p id="task"> ${element.complete ? `<strike>${element.content}</strike>` : element.content} </p>
            <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class=" ci bx bx-check bx-sm"></i>
                    </button>

                <button class="delete btn btn-error" >
                    <i class="di bx bx-trash bx-sm"></i>
                </button>
            </div>
        </li> `
        allTodos.innerHTML += x;

    })
}


//2
function addTask() {
    var task = todoInput.value;

    if (task == " ") {
        alert('Content is compulsary and no empty content is allowed');
        return;
    }

    //each task--trace
    todoList.push({
        content: task,
        id: Date.now().toString(),
        complete: false
    });

    todoList.forEach((data) => {
        console.log(data);
    });
    //3
    document.querySelector('#r-count').textContent = todoList.length;
    todoInput.value = "";
    //5
    updateList();
    appendTask(todoList);
}

//1
addButton.addEventListener('click', addTask);

//4
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})

function deleteTask(event){
    console.log(event.target.parentElement);

    console.log(event.target.parentElement.parentElement);

    console.log(event.target.parentElement.parentElement.getAttribute('id'));

    var id = event.target.parentElement.parentElement.getAttribute('id');

    todoList = todoList.filter((data)=>{
        return data.id != id;
    });
    updateList();
    appendTask(todoList);
}

function completeTask(event){
     var id = event.target.parentElement.parentElement.getAttribute('id');
      todoList.forEach((data)=>{
        if(data.id == id){
            if(data.complete == false){
                data.complete = true;
                event.target.parentElement.parentElement.querySelector('#task').classList.add('line');
            }
            else{
                if(data.complete == true){
                    data.complete = false;
                    event.target.parentElement.parentElement.querySelector('#task').classList.remove('line');
                }
            }
        }
      })

      updateList();
      appendTask(todoList);
}

document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete')){
        console.log(event.target);
        deleteTask(event);
    }
    if(event.target.classList.contains('complete')){
        console.log(event.target);
        completeTask(event);
    }
})

function deleteAll(){
    todoList = [];
    updateList();
    appendTask(todoList);
}
deleteAllButton.addEventListener('click',deleteAll);

function deleteS(){
    todoList = todoList.filter((data)=>{
        return !data.complete;
    });
    updateList();
    appendTask(todoList);
}
deleteSButton.addEventListener('click', deleteS);



