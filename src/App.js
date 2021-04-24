import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Photos from './components/Photos';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
          </Route>
          <Route  path = '/aboutus'>
          <AboutUs/>
          </Route>
          <Route  path = '/photos'>
          <Photos/>
          </Route>
          <Route  path = '/contact'>
          <Contact/>
          </Route>
      </Switch>
      </Router>
   </>  
  );
}

export default App;
