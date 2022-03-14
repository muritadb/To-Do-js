const btn = document.querySelector('.button-add');
const taskList = document.querySelector('.task-list');
const inputList = document.querySelector('.input-list').value;





inputList.addEventListener('input', () => {

})


btn.addEventListener('click', (e) => {
  e.preventDefault();
  //console.log('input:', getTextInput);
  taskList.innerHTML += `<li>${inputList}</li>`;

});
