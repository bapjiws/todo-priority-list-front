import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';

import { addTodo } from '../../redux/actions/todos';

const priorityScale = [1,2,3,4,5,6,7,8,9,10];

export class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: 0,
            name: '',
            description: ''
        };

        // this.priorities = priorityScale.reduce((acc, curr) => {
        //     acc[curr] = null;
        //     return acc;
        // }, {});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCLick = this.handleCLick.bind(this);
    }

    handleChange(event) {
        // console.log('event:', event.target.id, event.target.value);

        const { id, value } = event.target;
        this.setState({
            [id]: id === 'priority' ? +value : value // this.state.priority is now handled by this.handleCLick
        });
    }

    handleSubmit(event) {
        // console.log('this.getNameValidationState():', this.getNameValidationState());

        if (this.getNameValidationState() === 'error' || this.getDescriptionValidationState() === 'error') {
            console.log('INPUT ERROR');
            event.preventDefault();
            return;
        }

        console.log('BUTTON');

        event.preventDefault();

        this.props.addTodo(this.state);
        document.querySelectorAll('input[type="radio"]')[this.state.priority-1].checked = false;
        this.setState({
            priority: 0,
            name: '',
            description: ''
        });
    }

    handleCLick(event) {
        // console.log('event:', event.target);
        console.log('CLICK:', +event.target.value);
        this.setState({
           priority: +event.target.value
        });
    }

    getNameValidationState() {
        const length = this.state.name.length;
        return length === 0 ? 'error' : 'success';
    }

    getDescriptionValidationState() {
        const length = this.state.description.length;
        return length === 0 ? 'error' : 'success';
    }

    render() {
        return <form className="form-container">
            <FormGroup
                className="form-space-between"
                controlId="priority"
            >
                <ControlLabel>Priority</ControlLabel>
                {' '}
                <span>
                    {
                        priorityScale.map((priority, idx) =>
                            <Radio
                                inline key={idx}
                                name="radioGroup"
                                value={priority}
                                // inputRef={ref => { this.priorities[priority] = ref; }}
                                onClick={this.handleCLick}
                            >
                                {priority}
                            </Radio>)
                    }
                </span>
            </FormGroup>

            <FormGroup
                controlId="name"
                validationState={this.getNameValidationState()}
            >
                <ControlLabel>Name</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Name your todo"
                    onChange={this.handleChange}
                />
                <FormControl.Feedback />
            </FormGroup>

            <FormGroup
                controlId="description"
                validationState={this.getDescriptionValidationState()}
            >
                <ControlLabel>Description</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.description}
                    placeholder="Describe your todo"
                    onChange={this.handleChange}
                />
                <FormControl.Feedback />
            </FormGroup>

            <Button type="submit" onClick={this.handleSubmit}>
                Submit
            </Button>
        </form>
    }
}

export default connect(
    null,
    { addTodo }
)(UserInput);