import {ADDPERSON} from '../action_types'
let initState = [{name:'kebo',age:18},{name:'wede',age:10}]
export default function (preState=initState,action){
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