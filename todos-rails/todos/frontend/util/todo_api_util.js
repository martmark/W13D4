const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
}

const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
   
  });
}

window.fetchTodos = fetchTodos;
export {fetchTodos, createTodo};