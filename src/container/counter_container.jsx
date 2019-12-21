import counter from '../components/counter'

import {increment,decrement,incrementAsync} from '../redux/actions/counter_action'


import {connect} from 'react-redux'

export default connect(
    state => ({count:state.count,persons:state.persons}),
    {increment,decrement,incrementAsync}
)(counter)