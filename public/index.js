"use strict";
let getUl = document.getElementById("ul");
function addTodo(clickOn) {
    let getInp = document.getElementById("inp");
    getUl.innerHTML += `<li class="text-todo text-light">${getInp.value} <div class="btn-group"><button class="btn btn-dark " onclick='editTodo(this)'>Edit</button><button class="btn btn-info" onclick='deleteTodo(this)'>Delete</button></div></li></br>`;
    getInp.value = "";
}
function deleteAll(clickOn) {
    getUl.innerHTML = "";
}
getUl.addEventListener("click", () => { addTodo("add"); });
getUl.addEventListener("click", () => { deleteAll("delete"); });
