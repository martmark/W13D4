import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  updateTitle(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  createTodo(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    // debugger;
    this.props.createTodo({ todo }).then(
      () => this.setState({ title: '', body: '' })
    );
  }


  render() {
    return (
      <div>
        <form onSubmit={this.createTodo}>
          <label htmlFor="todoTitle">Title</label>
          <input type="text" id="todoTitle" value={this.state.title} onChange={this.updateTitle} />
          <label htmlFor="todoBody">Body</label>
          <input type="text" id="todoBody" value={this.state.body} onChange={this.updateBody} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default TodoForm;

