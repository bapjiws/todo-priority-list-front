import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions/todos';

let todoStub = {
    priority: 4,
    name: 'Покрасить забор',
    description: 'Покрасить забор вокруг дома розовым цветом до полуночи сегодня.'
};

export const UserInput = (props) => {
    return <form className="form-container">
    <span className="input-row">
        <span>Priority:</span>
        <select>
            {
                [1,2,3,4,5].map((priority, idx) => <option key={idx} value={priority}>{priority}</option>)
            }
        </select>
    </span>
        <span className="input-row">
        <span>Name:</span>
        <input type="text" />
    </span>
        <span className="input-row">
        <span>Description:</span>
        <input type="text" />
    </span>

        <button onClick={event => {event.preventDefault(); props.addTodo(todoStub)}}>Add</button>
    </form>
};

export default connect(
    null,
    { addTodo }
)(UserInput);