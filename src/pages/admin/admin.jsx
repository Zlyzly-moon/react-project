import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {deleteUserInfo} from '../../redux/actions/login_action' 

 class Admin extends Component {
     logout = ()=>{
       this.props.deleteUserInfo()
     }
    render() {
        if(!this.props.userInfo.isLogin){
            return <Redirect to="/login"/>
          }
        return (
            <div>
                hello,{this.props.userInfo.user.username}
                <button onClick={this.logout}>退出登录</button>
            </div>
        )
    }
}

export default connect(
    state => ({userInfo:state.userinfo}),
    {deleteUserInfo}
)(Admin)
