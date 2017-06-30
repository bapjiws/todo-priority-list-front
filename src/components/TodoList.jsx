import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadTodos } from '../../redux/actions/todos';

export class TodoList extends Component {
    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        return <table className="todos-container">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Priority</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.todos.map((todo, idx) => <tr key={idx}>
                        <td>{todo.name}</td>
                        <td>{todo.description}</td>
                        <td>{todo.priority}</td>
                    </tr>)
                }
            </tbody>
        </table>
    }
}

export default connect(
    state => ({
        todos: state.todos.data
    }),
    { loadTodos }
)(TodoList);