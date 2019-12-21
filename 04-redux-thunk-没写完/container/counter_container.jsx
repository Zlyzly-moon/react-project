import counter from '../components/counter'
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} from '../redux/action_creators'
// const mapStateToProps = state=>({count:state}) 

// const mapReduxMethodToProps = dispatch=>({
//     increment:value=> dispatch(increment(value)),
//     decrement:value=> dispatch(decrement(value))
// })


export default connect(
    state=>({count:state}) ,
    {increment,decrement,incrementAsync}
    // dispatch=>({
    //     increment:value=> dispatch(increment(value)),
    //     decrement:value=> dispatch(decrement(value))
    // })
)(counter)