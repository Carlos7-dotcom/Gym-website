import React from 'react';
import styles from './styles/index.scss';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Prices from './components/Prices';
import Personal from './components/Personal';
//Router 
import {Switch, Route} from 'react-router-dom';
//animations 
import {motion} from 'framer-motion';
import {pageAnimation} from './components/animation';


function App() {
  return (
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact>
        <motion.div className="cta" variants={pageAnimation} initial="hidden" animate="show">
          <h1>Find your <span className="red">inner warrior</span></h1>
          <h2>Join now for a 1 month free trial!</h2>
          <p>Wake up with determination go to sleep satisfied</p>
        </motion.div>
        <About />
        </Route>
        <Route path="/prices">
        <Prices />
        </Route>
        <Route path="/personal">
        <Personal />
        </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
