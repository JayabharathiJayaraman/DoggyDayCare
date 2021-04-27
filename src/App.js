import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Photos from './components/Photos';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
      <Footer></Footer>
      </Router>
   </>  
  );
}

export default App;
