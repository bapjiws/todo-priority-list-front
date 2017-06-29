import * as types from '../actions/types';

import * as utils from '../../utils/sortTodos';

const initialState = {
    data: [],
    error: null
};

const todosReducer = (todos = initialState, action) => {
    const { type, todo, error } = action;

    switch (type) {

        case types.ADD_TODO_SUCCESS:
            const insertionIdx = utils.findInsertionPoint(todos.data, todo, utils.todoComparator);
            todos.data.splice(insertionIdx, 0, todo);
            return {
                data: todos.data, // most likely will have to use slice to avoid mutation
                error: null
            };

        case types.ADD_TODO_FAILURE:
            // TODO: implement

        case types.LOAD_TODOS_SUCCESS:
            // TODO: implement

        case types.LOAD_TODOS_FAILURE:
            // TODO: implement

        default:
            return todos;
    }
};

export default todosReducer;