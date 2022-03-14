const btn = document.querySelector('.button-add');
const taskList = document.querySelector('.task-list');

const inputList = document.querySelector('.input-list');





btn.addEventListener('click', (e) => {
  e.preventDefault();

  const taskValue = inputList.value;

  if (taskValue !== "") {
    taskList.innerHTML += `<li>${taskValue}</li>`;
  } else {
    alert("adicione uma tarefa a lista  !!")
  }
});
