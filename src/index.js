import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About =() => {
  return (
    <div>
      <h1>This is about my component!</h1>
    </div>
  )
}

const Login = () => {
  return(
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"/>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"/>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar/><br/>
      <Route exact path="/about" render={About}/>
      <Route exact path="/login" render={Login}/>
      <Route exact path="/" render={Home} />
    </React.Fragment>
  </Router>
  ,
  document.getElementById('root')
);
