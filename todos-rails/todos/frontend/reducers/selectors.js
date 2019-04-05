

export default function allTodos(state) {
  const todos = Object.keys(state.todos).map(el => state.todos[el]);
  return todos;
}

