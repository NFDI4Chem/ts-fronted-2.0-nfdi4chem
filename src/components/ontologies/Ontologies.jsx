import { Component } from "react";
import React from "react";
import OntologyList from 'tib-ts-library/dist/ontologyList';

class Ontologies extends Component{
    render(){
        return(
        <div>
           <OntologyList target = "general" />
        </div>
        );
    }
}
export default Ontologies;