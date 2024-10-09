
const button = document.querySelector("button");
const action = () => alert("Hello!");
const toggle = () => button.classList.toggle("red");

button.addEventListener("click", action); /* Efectua la acción designada en const */
button.addEventListener("click", toggle); /* Agega la clase designada en const */



/*
const button = document.querySelector("button");
function action() {
    alert ("Hello a Todos!");
}
*/


/*
function doTask() {
    alert("Hello!");
}
*/