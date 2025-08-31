
const body = document.querySelector('body');
const display = document.getElementById('disp_todo');
document.getElementById('add_todo').addEventListener('click', addTodo);


let torray = [];

rendertodoHTML();

function rendertodoHTML() {
  let todoHTML = "";

  torray.forEach((value, index) => {
    const todo = value;

    const html = `<div id="out_p">
    <span id="p_cont">${todo} </span>
    <button id="delet_todo" onclick="
        torray.splice(${index}, 1);
        rendertodoHTML();
      " class="js-delete-btn">Delete</button></div>`;

    todoHTML += html;
  });
  display.innerHTML = todoHTML;
}

function addTodo() {
  let inputElement = document.getElementById('input');

  let todoName = inputElement.value;

  torray.push(todoName);
  if (torray.length > 0) {
    display.style.display = 'block';
  }
  console.log(torray.length);
  inputElement.value = "";
  rendertodoHTML();
}

body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});