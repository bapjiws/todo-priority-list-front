import * as types from '../actions/types';

const initialState = {
    data: [],
    error: null
};

const todosReducer = (todos = initialState, action) => {
    const { type, data, error } = action;

    switch (type) {

        case types.ADD_TODO_SUCCESS:
            return {
                data: [ ...todos.data, data ],
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