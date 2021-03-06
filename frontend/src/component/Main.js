import React from 'react';
import {Switch , Route, Redirect , withRouter} from 'react-router-dom';
import './style.css';
import Login from './Login';
import LoggedIn from './LoggedIn';
function Main(props){
  return(
    <Switch location={props.location}>
      <Route path='/loginpage' component={Login} />
      <Route path='/loggedin' component={LoggedIn}/>
      <Redirect to="/loginpage" />
    </Switch>
  )
}
export default withRouter((Main));;