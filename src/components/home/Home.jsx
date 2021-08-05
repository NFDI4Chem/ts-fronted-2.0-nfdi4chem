import { Component } from "react";
import React from "react";
import './Home.css'
import SearchBar from './search/SearchBar';

class Home extends Component{
    render(){
        return(
        <div id="mainpageSearchBox">
           <h4>Welcome to NFDI4Chem Terminology Service</h4>
           <SearchBar />
        </div>
        );
    }
}
export default Home;