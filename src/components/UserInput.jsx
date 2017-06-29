import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions/todos';

// let todoStub = {
//     priority: 4,
//     name: 'Покрасить забор',
//     description: 'Покрасить забор вокруг дома розовым цветом до полуночи сегодня.'
// };

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: 0,
            name: '',
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleClick(event) {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            priority: 0,
            name: '',
            description: ''
        });
    }

    render() {
        return <form className="form-container">
            <span className="input-row">
                <span>Priority:</span>
                <input
                    type="number"
                    name="priority"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                />
            </span>
            <span className="input-row">
                <span>Name:</span>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
            </span>
            <span className="input-row">
                <span>Description:</span>
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                />
            </span>
            <button onClick={this.handleClick}>Add</button>
        </form>
    }
};

export default connect(
    null,
    { addTodo }
)(UserInput);