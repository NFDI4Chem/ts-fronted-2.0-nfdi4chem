import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import OntologyPage from './components/ontologies/OntologyDetail'

const basename = process.env.BASENAME ;

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basename}>
       <Route exact path="/ontologies/:ontologyId" component={OntologyPage} />
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

