import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/root_reducer';
//import * as todoActions from './../actions/todo_actions';
import thunk from './../middleware/thunk'

function configureStore () {return createStore(rootReducer, {}, applyMiddleware(thunk));}



export default configureStore;