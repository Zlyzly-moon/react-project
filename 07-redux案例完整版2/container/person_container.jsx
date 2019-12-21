import Person from '../components/person'
import {connect} from 'react-redux'
import {addPerson} from '../redux/actions/person_action'


export default connect(
    state=>({persons:state.persons}) ,
    {addPerson}
)(Person)