import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }


  //console.log(this.props);
  render() {
    const removeTodo = this.props.removeTodo;
    const createTodo = this.props.createTodo;
    const todos = this.props.todos;
    
    return (
      <div>
        <ul>
          {todos.map((todo, idx) => <TodoListItem removeTodo={removeTodo} key={idx} todo={todo}/>)}
        </ul>
        <TodoForm createTodo={createTodo} />
      </div>
    )
  }
}

export default TodoList;