import React from 'react';
import './ontologyDetail.css';
import OntologyInfoBox from './widgets/infoBox';
import OntologyStatsBox from './widgets/stats';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ClassTree from '../classTree/classTree';



class OntologyPage extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            ontologyId: props.match.params.ontologyId,
            ontology: null,
            error: null,
            isLoaded: false,
            isRootTermsLoaded: false,
            errorRootTerms: null,
            overViewTab: true,
            termsTab: false,
            activeTab: 0,
            rootTerms: [],
        });
        this.tabChange = this.tabChange.bind(this);
    }

    /**
     * Get the ontology detail from the backend
     */
    getOntology() {
        let url = '/ontologies/' + this.state.ontologyId;
        fetch(url, {
            method: 'GET',                        
        })
          .then(res => res.json())          
          .then(
            (result) => {               
              this.setState({
                isLoaded: true,
                ontology: result,
              });
            },            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });              
            }
          )
      }
    

    /**
     * Get the ontology root classes from the backend
     */
    getRootTerms() {
    let url = '/rootterms/' + this.state.ontologyId;
    fetch(url, {
        method: 'GET',                        
    })
        .then(res => res.json())          
        .then(
        (result) => {               
            this.setState({
            isRootTermsLoaded: true,
            rootTerms: result,
            });
        },            
        (error) => {
            this.setState({
            isRootTermsLoaded: true,
            errorRootTerms: error,
            });              
        }
        )
    }

    /**
     * Handle the tab change in the ontology detail Top menu
     * 
     * @param {*} e 
     * @param {*} value 
     */
    tabChange = (e, value) =>{
        if(value === 0){
            this.setState({
                overViewTab: true,
                termsTab: false,
                activeTab: 0,
            });
        }
        else{
            this.setState({
                overViewTab: false,
                termsTab: true,
                activeTab: 1,
            });
        }
    }
    
    componentDidMount(){
        this.getOntology();
        this.getRootTerms();
    }


    render(){
        
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } 
        else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } 
        else {
            return (
                <div>
                     <Paper square>
                        <Tabs
                            value={this.state.activeTab}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.tabChange}
                            aria-label="disabled tabs example"
                        >
                            <Tab label="Overview" />
                            <Tab label="Classes" />
                            <Tab label="Mappings"/>
                            <Tab label="Properties"/>
                        </Tabs>
                    </Paper>
                    {this.state.overViewTab &&
                        <Grid container>
                            <Grid item xs={8}>
                                <OntologyInfoBox ontology={this.state.ontology} />
                            </Grid>
                            <Grid item xs={4}>
                                <OntologyStatsBox ontology={this.state.ontology} />
                            </Grid>
                        </Grid>
                    }
                    {this.state.termsTab && 
                        <ClassTree 
                            rootTerms={this.state.rootTerms}
                        />
                    }
                </div>
                
            );
        }
    }

}


export default OntologyPage;