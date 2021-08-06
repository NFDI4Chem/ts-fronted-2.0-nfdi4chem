import { Component } from "react";
import React from "react";
import './Home.css'
import SearchBar from './search/SearchBar';
import { Grid } from '@material-ui/core'

class Home extends Component{
    render(){
        return(
        <div id="mainpageSearchBox">
           <h4>Welcome to NFDI4Chem Terminology Service</h4>
           <Grid item xs = {12} sm={6}>
             <SearchBar />
           </Grid>
           <Grid item xs = {12} sm={6}>
           <h4>About NFDI4Chem TS</h4>
           <p class="about">The NFDI4Chem Terminology Service is a repository for chemistry and related ontologies providing a single point of access to the latest ontology versions. 
              You can browse or search the ontologies and look into their terms and relations. The Terminology Service can be used either by humans throught the website or by machines via the TS API.
              The NFDI4Chem Terminology Service is developed and maintained by TIB - Leibniz Information Centre for Science and Technology. 
              It is part of the service portfolio of the NFDI4Chem consortium within the National Research Data Infrastructure.</p>
           </Grid>
        </div>
        );
    }
}
export default Home;