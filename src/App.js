import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Header, Footer} from './components/common'
import About from './components/about'
import Help from './components/help'
import Documentation from './components/documentation'
import Ontologies from './components/ontologies'
import Home from './components/home'
import './App.css';
import OntologyPage from './components/library/ontologyDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />  
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/help" component={Help}/>
            <Route path="/documentation" component={Documentation}/>
            <Route path="/ontologies" component={Ontologies}/> 
            <Route exact path="/" component={Home}/>
            <Route path="/ontologies:ontologyId" component={OntologyPage}/>
          </Switch> 
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;