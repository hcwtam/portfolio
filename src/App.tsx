import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Reactgram from './components/Reactgram/Reactgram';
import Fruity from './components/Fruity/Fruity';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Landing />
          <About />
          <Projects />
          <Contact />
        </Route>
        <Route exact path="/reactgram" component={Reactgram} />
        <Route exact path="/fruity" component={Fruity} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
