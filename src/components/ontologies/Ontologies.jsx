import { Component } from "react";
import React from "react";
import OntologyList from "../library/ontologyList";

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