import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    //this.props = props;
    this.removeTodo = this.removeTodo.bind(this);
  }
  
  removeTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (<li key={this.props.idx}>{this.props.todo.title}
      <br />
      <input type="submit" value="Delete" onClick={this.removeTodo}/>  
    </li>)
  }
}

export default TodoListItem;