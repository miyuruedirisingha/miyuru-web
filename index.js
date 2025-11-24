// Simple Todo app: add, toggle, delete, persist to localStorage
(function () {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const count = document.getElementById('todo-count');
  const clearBtn = document.getElementById('clear-btn');

  let todos = [];

  function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function load() {
    try {
      const raw = localStorage.getItem('todos');
      todos = raw ? JSON.parse(raw) : [];
    } catch (e) {
      todos = [];
    }
  }

  function render() {
    list.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (todo.done ? ' completed' : '');
      li.dataset.id = todo.id;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!todo.done;
      checkbox.setAttribute('aria-label', 'Mark task done');

      checkbox.addEventListener('change', () => {
        todo.done = checkbox.checked;
        save();
        render();
      });

      const span = document.createElement('span');
      span.textContent = todo.text;
      span.style.flex = '1 1 auto';

      const del = document.createElement('button');
      del.innerHTML = 'Delete';
      del.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== todo.id);
        save();
        render();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(del);
      list.appendChild(li);
    });

    count.textContent = `${todos.length} item${todos.length === 1 ? '' : 's'}`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const todo = { id: Date.now().toString(), text, done: false };
    todos.unshift(todo);
    input.value = '';
    save();
    render();
    input.focus();
  });

  clearBtn.addEventListener('click', () => {
    todos = todos.filter(t => !t.done);
    save();
    render();
  });

  // init
  load();
  render();
})();
