import * as types from '../actions/types';
import * as todoStubs from '../../stubs/todos';

export const addTodoSuccess = payload => ({type: types.ADD_TODO_SUCCESS, payload});
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

export const loadTodosSuccess = payload => ({type: types.LOAD_TODOS_SUCCESS, payload});
export const loadTodosFailure = error => ({type: types.LOAD_TODOS_FAILURE, error});

export const loadTodos = () => {
    return (dispatch, getState, { axiosInstance }) => {
        return axiosInstance({
            method: 'get',
            url: '/loadTodos'
        })
            .then(response => {
                dispatch(loadTodosSuccess(response.data));
                return Promise.resolve();
            })
            .catch(error => {
                dispatch(loadTodosFailure(error));
                return Promise.reject();
            });
    }
};

export const mockloadTodos = () => {
    return (dispatch, getState, { axiosInstance }) => {
        dispatch(loadTodosSuccess(todoStubs.sortedTodos));
    }
};