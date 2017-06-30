import React from 'react';
import { connect } from 'react-redux';

export const TodoList = (props) => {
    return <table className="todos-container">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Priority</th>
        </tr>
        {
            props.todos.map((todo, idx) => <tr key={idx}>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
            </tr>)
        }
    </table>
};

export default connect(
    state => ({
        todos: state.todos.data
    })
)(TodoList);