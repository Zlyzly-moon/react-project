import counter from '../components/counter'
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} from '../redux/actions/counter_action'
// const mapStateToProps = state=>({count:state}) 

// const mapReduxMethodToProps = dispatch=>({
//     increment:value=> dispatch(increment(value)),
//     decrement:value=> dispatch(decrement(value))
// })


export default connect(
    state=>({count:state.count,persons:state.persons}) ,
    {increment,decrement,incrementAsync}
    // dispatch=>({
    //     increment:value=> dispatch(increment(value)),
    //     decrement:value=> dispatch(decrement(value))
    // })
)(counter)