import { Component } from "react";
import React from "react";
// import OntologyList from 'tib-ts-library/dist/ontologyList';
import OntologyList from './OntologyList';

const url = process.env.BACKEND_URL

class Ontologies extends Component{
    render(){
        return(
        <div>
           <OntologyList target = "chemistry" url = {url} />
        </div>
        );
    }
}
export default Ontologies;