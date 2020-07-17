import { createStore } from 'redux';

import rootReducer from './reducers/layout.reducers';

const store = createStore(rootReducer);

export default store;