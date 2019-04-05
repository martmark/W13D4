import * as APIUtil from './../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function receiveTodo (todo) {
  return {
    type: RECEIVE_TODO,
    todo
  };
}

export function receiveTodos (todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function removeTodo (todo) {
  return {
    type: REMOVE_TODO,
    todo
  }
}

export function fetchTodos () {
  return (dispatch) => (
  APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
  )
}

export function createTodo (todo) {
  return (dispatch) => (
  APIUtil.createTodo(todo).then(todo => dispatch(receiveTodo(todo)))
  )
}

window.fetchTodos = fetchTodos;