const btn = document.getElementById('btn');
const input = document.getElementById('input');
const dateField = document.getElementById('date-field');
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.slice(1).forEach(todo => {
    add(todo);
  })
};

btn.addEventListener('click', function() {
  if (!input.value) {
    return
  }
  add();
  saveData();

});

function add(todo) {
  let text = input.value;
  let dateText = dateField.value;

  if (todo) {
    text = todo.split("\t")[0];
    dateText = todo.split("\t")[1];
  }
  let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  let content = document.createElement('td');
  let date = document.createElement('td');

  content.innerText = text;
  date.innerText = dateText;
  content.classList.add('content');
  tr.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    tr.remove();
    localStorage.removeItem('todos', tr)
  })
  tr.appendChild(content);
  tr.appendChild(date);
  tbody.appendChild(tr);
  input.value = "";
};

function saveData() {
  let lists = document.querySelectorAll('tr')
  let todos = []

  lists.forEach(list => {
    todos.push(list.innerText);
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}
