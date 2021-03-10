import { combineReducers } from 'redux';

import chartItemsReducer from './chart/reducers';

const rootReducer = combineReducers({
  chart: chartItemsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
