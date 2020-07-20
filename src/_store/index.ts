import { combineReducers, createStore } from 'redux';

import { layoutReducer } from './reducers/layout.reducer';

const rootReducer = combineReducers({
    layouts: layoutReducer
})

const store = createStore(rootReducer);

export default store;