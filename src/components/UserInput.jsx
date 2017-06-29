import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions/todos';

let todoStub = {
    priority: 4,
    name: 'Покрасить забор',
    description: 'Покрасить забор вокруг дома розовым цветом до полуночи сегодня.'
};

export const UserInput = (props) => <button onClick={() => props.addTodo(todoStub)}>Simulate adding a todo</button>;

export default connect(
    null,
    { addTodo }
)(UserInput);