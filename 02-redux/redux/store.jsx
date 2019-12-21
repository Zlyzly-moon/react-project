import {createStore} from 'redux'
// 引入reducer
import reducer from './reducer'

// 暴露store
export default createStore(reducer)