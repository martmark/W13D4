import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});
    case RECEIVE_TODOS:
      let newTodos = {};
      action.todos.forEach(todo => newTodos[todo.id] = todo);
      return newTodos;
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== action.data);
    default:
      return state;
  }
};

export default todosReducer;