import { combineReducers } from 'redux';
import todosReducer from './rootReducer';

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer