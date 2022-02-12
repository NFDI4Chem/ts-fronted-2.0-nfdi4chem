import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Header, Footer, PageTitle } from "./components/common";
import About from "./components/about";
import Help from "./components/help";
import Documentation from "./components/documentation";
import Ontologies from "./components/ontologies";
import Home from "./components/home";
import OntologyPage from "./components/ontologies-features/ontologyDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/documentation" component={Documentation} />
        <Route exact path="/ontologies/:ontologyId" component={OntologyPage} />
        <Route exact path="/ontologies" component={Ontologies} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
