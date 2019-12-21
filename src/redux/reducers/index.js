import CounterReducer from './counter_reducer'
import PersonReducer from './person_reducer'
import {combineReducers} from 'redux'

export default combineReducers({
	count:CounterReducer,
	persons:PersonReducer
})