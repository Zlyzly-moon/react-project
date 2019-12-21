import {createStore,applyMiddleware} from 'redux'
// 引入reducer
import reducer from './reducer'
import thunk from 'redux-thunk'
// 暴露store
export default createStore(reducer,applyMiddleware(thunk))