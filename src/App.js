import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Navbar from './components/navbar';
import Body from './components/body';

function App() {
  return (
     <Router>
       <switch>
       <Route path="/Navbar">
          <Navbar/>
        </Route>
        <Route path="/">
          <Body/>
        </Route>
       </switch>
     </Router>
  );
}

export default App;
