import { Component } from "react";
import React from "react";
import OntologyList from "../ontologies-features/ontologyList";

class Ontologies extends Component{
    render(){
        return(
        <div>
           <OntologyList target = "chemistry" />
        </div>
        );
    }
}
export default Ontologies;