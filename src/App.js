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
import Nightclub from './components/Nightclub.js';
import Restaurants from './components/Restaurants.js';
import TravelAgencies from './components/TravelAgencies';
import Homes from './components/home';
function App() {
  return (
     <Router>
        <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/Nightclub" component={Nightclub}/>
        <Route exact path="/Restaurants" component={Restaurants}/>
        <Route exact path="/tourism" component={Tourism}/>
        <Route exact path="/contactus" component={ContactPage}/>
        <Route exact path="/travel_agences" component={TravelAgencies}/>
        <Route exact path="/Car_Rental" component={CarRental}/>
        <Route exact path="/homes_welcome" component={Homes}/>
     
        </Switch>
    </Router>
  );
}

export default App;
