import * as types from '../actions/types';

export const addTodoSuccess = todo => ({type: types.ADD_TODO_SUCCESS, todo});
export const addTodoFailure = error => ({type: types.ADD_TODO_FAILURE, error});

export const addTodo = todo => {
    return (dispatch, getState, { axiosInstance }) => {
        return axiosInstance({
            method: 'post',
            url: '/addTodo',
            data: { todo }
        })
            .then(response => {
                dispatch(addTodoSuccess(response.data));
                return Promise.resolve();
            })
            .catch(error => {
                dispatch(addTodoFailure(error));
                return Promise.reject();
            });
    }
};

export const mockAddTodo = todo => {
    return (dispatch, getState, { axiosInstance }) => {
        dispatch(addTodoSuccess(todo));
    }
};