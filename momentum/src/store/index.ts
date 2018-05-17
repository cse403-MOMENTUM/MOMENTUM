import { combineForms } from 'react-redux-form';
import { createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as reducers from '../state/ducks';

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
// TODO: can add middleware here if needed. see react-redux-todo-ts for details
const initialTask = {name : ''};

const store = createStore(combineForms({
  form: formReducer,
  reds: reducers,
  task: initialTask
}));

export default store;
