import {createStore,applyMiddleware} from 'redux'

import reducer from './reducers'

import thunk from 'redux-thunk'
//引入redux-devtools-extension，用于支持redux的开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'

//暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))