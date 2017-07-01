import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions/todos';

export class UserInput extends Component {
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
            {
                Object.keys(this.state).map((key, idx) =>
                    <span className="input-row" key={idx}>
                        <span>{key.charAt(0).toUpperCase() + key.slice(1) + ':'}</span>
                        <input
                            type={key === 'priority' ? 'number' : 'text'}
                            name={key}
                            value={this.state[key]}
                            onChange={this.handleInputChange}
                        />
                    </span>
                )
            }
            <button onClick={this.handleClick}>Add</button>
        </form>
    }
}

export default connect(
    null,
    { addTodo }
)(UserInput);