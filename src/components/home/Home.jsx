import { Component, useState } from "react";
import React from "react";
import './Home.css'
// import SearchBar from './search/SearchBar';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
// Bootstrap replaces material UI
// import { Grid} from '@material-ui/core'

class Home extends Component{
    render(){
        return(
          <Container fluid>
          
           <h1 className="header">Welcome to NFDI4Chem Terminology Service Branch</h1>
            <div>
            The NFDI4Chem Terminology Service is a repository for chemistry and related ontologies providing a single point of access to the latest ontology versions. 
              You can browse or search the ontologies and look into their terms and relations. The Terminology Service can be used either by humans throught the website or by machines via the TS API.
              The NFDI4Chem Terminology Service is developed and maintained by TIB - Leibniz Information Centre for Science and Technology. 
              It is part of the service portfolio of the NFDI4Chem consortium within the National Research Data Infrastructure.
            </div>
          </Container>
      

        );
    }
}
export default Home;