import {ADDPERSON} from '..//action_types'
let initSate = [{name:'kobe',age:18},{name:'wade',age:19}]
export default function (preState=initSate,action){
	const {type,data} = action
	let newState
	switch (type) {
		case ADDPERSON:
			newState = [...preState,data]
			return newState
		default:
			return preState
	}
} 