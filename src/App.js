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
import CarRental from './components/CarRental.js';
import ContactPage  from './components/Contact.js';
function App() {
  return (
     <Router>
        <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route path="/tourism">
          <Tourism/>
        </Route>  
        <Route path="/contactus">
          <ContactPage/>
        </Route>
        <Route path="/Car_Rental">
          <CarRental/>
        </Route>
     
        </Switch>
    </Router>
  );
}

export default App;
