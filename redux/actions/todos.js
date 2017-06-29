import * as types from '../actions/types';

export const addTodoSuccess = data => ({type: types.ADD_TODO_SUCCESS, data});

export const addTodo = todo => {
    return (dispatch, getState) => {
        dispatch(addTodoSuccess(data))
    }
};