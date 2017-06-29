import deepFreeze from 'deep-freeze';

import todosReducer from '../../redux/reducers/todosReducer';
import { ADD_TODO_SUCCESS } from '../../redux/actions/types';
import * as todoStubs from '../../stubs/todos';

describe('todosReducer', () => {
    it('should add a new todo to the sorted todo list without mutations', () => {
        const todosBefore = {
            data: todoStubs.currentTodos,
            error: null
        };

        const action = {
            type: ADD_TODO_SUCCESS,
            todo: todoStubs.todoToInsert
        };

        const todosAfter = {
            data: [
                {
                    priority: 4,
                    name: 'eat something',
                    description: 'ASAP'
                },
                {
                    priority: 3,
                    name: 'get some sleep',
                    description: 'ASAP, too'
                },
                {
                    priority: 2,
                    name: 'do the dishes',
                    description: 'not so urgent'
                },
                {
                    priority: 1,
                    name: 'do some work',
                    description: 'meh'
                }
            ],
            error: null
        };

        expect(todosReducer(deepFreeze(todosBefore), deepFreeze(action))).toEqual(todosAfter);
    });
});