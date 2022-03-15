const btn = document.querySelector('.button-add');
const taskList = document.querySelector('.task-list');

const inputList = document.querySelector('.input-list');


let taskValue;


btn.addEventListener('click', (e) => {
  e.preventDefault();

  taskValue = inputList.value;

  if (taskValue !== "") {
    createItemList()
  } else {
    alert("adicione uma tarefa a lista  !!")
  }
});


const createItemList = () => {

  taskList.innerHTML += `<li class="item-list">${taskValue}<span class="close">\u00D7</span></li>`;
}


taskList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    console.log("item selecionado")
  }
})


taskList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName === 'SPAN') {
    console.log("clicou no span")

  }
})














