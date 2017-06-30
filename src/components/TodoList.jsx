import React from 'react';
import { connect } from 'react-redux';

export const TodoLIst = (props) => {
    return <ul className="list-container">
        { props.todos.map((todo, idx) => <li key={idx}>{ `${todo.name} | ${todo.description} | ${todo.priority}` }</li> ) }
    </ul>
};

export default connect(
    state => ({
        todos: state.todos.data
    })
)(TodoLIst);