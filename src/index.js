import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import OntologyPage from 'tib-ts-library/dist/ontologyDetail';

const basename = process.env.REACT_APP_BASENAME || null;

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basename} >
      <Route exact path="/ontologies/:ontologyId" component={OntologyPage} />
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

