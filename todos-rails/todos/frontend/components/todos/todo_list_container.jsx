import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from './../../reducers/selectors';
import { receiveTodo, receiveTodos, fetchTodos, createTodo, removeTodo } from './../../actions/todo_actions';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  receiveTodos: todos => dispatch(receiveTodos(todos)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);