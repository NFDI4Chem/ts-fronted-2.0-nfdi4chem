import { Component } from "react";
import React from "react";
import TabsComponent from './tabs/TabsComponent'

import { Container} from '@material-ui/core'


class Analytics extends Component{
    render(){
        return(
        <div id="page">
            <Container maxWidth="lg">
                <h4 style={{margin: 20}}>Ontologies Similarity</h4>
                <TabsComponent/>
            </Container>
        </div>    
        );
    }
}

export default Analytics;
