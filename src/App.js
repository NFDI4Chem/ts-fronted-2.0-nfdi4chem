import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle } from './components/common'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  
          <Switch>
            <Route path="/about">
              <PageTitle title="About"/>
            </Route>
            <Route path="/help">
              <PageTitle title="Help"/>
            </Route>
            <Route path="/documentation">
              <PageTitle title="Documentation"/>
            </Route>
            <Route path="/ontologies">
              <PageTitle title="Ontologies"/>
            </Route>
            <Route path="/">
              <PageTitle title="home"/>
            </Route>
          </Switch>
      <Footer />
    </div>
  );
}

export default App;