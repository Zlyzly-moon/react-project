import React from 'react';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import {Route,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/admin" component={Admin}/>
      <Route path="/login" component={Login}/>
      <Redirect to="login"/>
    </Switch>
      

    
  );
}

export default App;
