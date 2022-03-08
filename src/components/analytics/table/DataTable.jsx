import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import {ontologies} from '../client/ontologies'
import { Grid, Button } from '@material-ui/core';

import TreeList from '../treeList/TreeList'


const columns = [
  // { field: 'id', headerName: 'ID', width: 150 },
  {
    field: "ontologyId",
    headerName: "Ontology ID",
    width: 160,
    // renderCell: (params) => 
      // (<a href={params.row.uri}>{params.row.ontologyId}</a>
    // ),
  }
];


class DataTable extends Component{
  constructor(props) {
    super(props);
    this.state = ({
      newSelectionModel: null,
      error: null,
      isLoaded: false,
      error2: null,
      isLoaded2: false,
      ontologies: [],
      ids: [],
      started: false,
      pairwiseSimilarities: []
    });
    this.ontologiesAjax();
  };

  handleChange = (newSelectionModel) => {     
    console.log(newSelectionModel);
    this.setState({
      newSelectionModel: newSelectionModel,
    });
  };

  handleButtonClick = () => {     
    this.setState({
      started: true,
      ids: ontologies
      .filter(ont => this.state.newSelectionModel.includes(ont.id))
      .map(ont => ont.ontologyId)
    });
    
    // this.setState({
    //   started: false,
    // });
  };

  ontologiesAjax() {
    const baseurl = "/api2/api/ontology/list?size=10000";
    fetch(baseurl, {
        method: 'GET',                        
    })
      .then(res => res.json())          
      .then(
        (result) => {                                  
          this.setState({
            isLoaded: true,
            ontologies: result,             
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

  getTree() {
    const { started, ids} = this.state; 

    if (started) {
      return <TreeList list={ids}/>
    } else {
      return <div>Not started</div>
    }
  }

    render(){
      const { error, isLoaded, ids} = this.state;        
      if (error) {
          return <div>Error: {error.message}</div>;
      } 
      else if (!isLoaded) {
          return <div>Loading...</div>;
      } 
      else {
        return(
          <Grid container spacing={0}>
            <Grid item xs = {6}>
              <div style={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={this.state.ontologies}
              columns={columns}
              pageSize={25}
              checkboxSelection
              disableSelectionOnClick
              onSelectionModelChange={this.handleChange}
            />  
            </div>         
            </Grid>
            <Grid item xs = {2}>
              <Button variant="contained" style={{margin: "10px"}} onClick={this.handleButtonClick}>
                EXECUTE
              </Button>
            </Grid>
            <Grid item xs = {4}>
              {this.getTree()}
            </Grid>
          </Grid>
        );
      }
    }
}



export default DataTable;