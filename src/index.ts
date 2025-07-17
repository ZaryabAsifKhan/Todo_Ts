let getUl = document.getElementById("ul") as HTMLUListElement

function addTodo(clickOn:"add"){
let getInp = document.getElementById("inp") as HTMLInputElement
getUl.innerHTML += `<li class="text-todo text-light">${getInp.value} <div class="btn-group"><button class="btn btn-dark " onclick='editTodo(this)'>Edit</button><button class="btn btn-info" onclick='deleteTodo(this)'>Delete</button></div></li></br>`
getInp.value = ""
}

function deleteAll(clickOn:"delete"){
    getUl.innerHTML = ""
}

getUl.addEventListener("click", () => { addTodo("add"); });
getUl.addEventListener("click", () => { deleteAll("delete"); });