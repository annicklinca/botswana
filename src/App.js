import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
import Body from './components/body';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import Tourism from './components/Tourism.js';
import ContactPage  from './components/Contact.js';
import Nightclub from './components/Nightclub.js';
import Restaurants from './components/Restaurants.js';
function App() {
  return (
     <Router>
        <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/Nightclub" component={Nightclub}/>
        <Route exact path="/Restaurants" component={Restaurants}/>
        <Route path="/tourism">
          <Tourism/>
        </Route>  
        <Route path="/contactus">
          <ContactPage/>
        </Route>
     
        </Switch>
    </Router>
  );
}

export default App;
