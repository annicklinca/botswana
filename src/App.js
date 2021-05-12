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
import Hotel from './components/Hotel.js';
import CarRental from './components/CarRental.js';
import Boat from './components/Boat.js';
import Mokoro from './components/Mokoro.js'

import ContactPage  from './components/Contact.js';
import Nightclub from './components/Nightclub.js';
import Restaurants from './components/Restaurants.js';
import TravelAgencies from './components/TravelAgencies';
import Homes from './components/home';
import Dashboard from './components/dashboard/Dashboard.js';
import Addhotel from './components/dashboard/Hotel.js';
import Addcarrental from './components/dashboard/CarRental.js';
import Addrestaurant from './components/dashboard/Restaurant';
import Addnightclub from './components/dashboard/Nightclub';
import Addtravelagencies from './components/dashboard/Travel Agencies';
import Addboat from './components/dashboard/Boat.js'
import Addmokoro from './components/dashboard/Mokoro.js'
function App() {
  return (
     <Router>
        <Switch>
        <Route exact path="/" component={Body}/>
        <Route  path="/signup" component={Signup}/>
        <Route  path="/signin" component={Signin}/>
        <Route  path="/Nightclub" component={Nightclub}/>
        <Route  path="/Restaurants" component={Restaurants}/>
        <Route  path="/hotel" component={Hotel}/>
        <Route   path="/contactus" component={ContactPage}/>
        <Route  path="/travel_agences" component={TravelAgencies}/>
        <Route  path="/Car_Rental" component={CarRental}/>
        <Route  path="/boat" component={Boat}/>
        <Route  path="/mokoro" component={Mokoro}/>
        <Route  path="/homes_welcome" component={Homes}/>
        <Route  path="/dashboard" component={Dashboard}/>
        <Route  path="/addhotel" component={Addhotel}/>
        <Route  path="/addcarrental" component={Addcarrental}/>
        <Route  path="/addrestaurant" component={Addrestaurant}/>
        <Route  path="/addnightclub" component={Addnightclub}/>
        <Route  path="/addtravelagencies" component={Addtravelagencies}/>
        <Route  path="/addboat" component={Addboat}/>
        <Route  path="/addmokoro" component={Addmokoro}/>
        



      

     
        </Switch>
    </Router>
  );
}

export default App;
