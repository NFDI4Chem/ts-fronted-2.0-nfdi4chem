import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle } from './components/common'
import About from './components/about'
import Help from './components/help'
import Documentation from './components/documentation'
import Ontologies from './components/ontologies'
import Home from './components/home'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/help" component={Help}/>
            <Route path="/documentation" component={Documentation}/>
            <Route path="/ontologies" component={Ontologies}/>
            <Route path="/" component={Home}>
              
            </Route>
          </Switch>
      <Footer />
    </div>
  );
}

export default App;