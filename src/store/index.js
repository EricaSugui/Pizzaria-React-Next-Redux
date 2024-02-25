import { legacy_createStore as createStore } from 'redux';

import reducers, {initialState} from './reducer'

export default createStore(reducers, initialState)

