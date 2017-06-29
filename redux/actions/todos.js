import * as types from '../actions/types';

export const addTodoSuccess = todo => ({type: types.ADD_TODO_SUCCESS, todo});

export const addTodo = todo => {
    return (dispatch, getState) => {
        dispatch(addTodoSuccess(todo))
    }
};