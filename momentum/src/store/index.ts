import { createStore } from 'redux';
import reducer from '../state/ducks';

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
// TODO: can add middleware here if needed. see react-redux-todo-ts for details
const store = createStore(reducer);

export default store;
