import { combineReducers } from 'redux';

import rootReducer, { key as rootkey } from '../pages/rootReducer';
import homeReducer, { key as homeKey } from '../pages/Home/modules/home';

export default combineReducers({
  [rootkey]: rootReducer,
  [homeKey]: homeReducer
});
