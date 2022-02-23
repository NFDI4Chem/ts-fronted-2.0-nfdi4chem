import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

// import { pairwiseSimilarities } from '../client/pairwiseSimilarities'
import { PairwiseSimilarityBar } from '../chart/Chart'


const useStyles = (theme) => ({
  root: {
    height: 500,
    flexGrow: 1,
    maxWidth: 400,
    overflow: "auto"
  },
  label: {
    textAlign: "left"
  },
  labelList: {
    fontSize: "11px",
    textAlign: "left"
  },
  chart: {
    textAlign: "left",
    color: "blue",
  }
  });

  class TreeList extends Component {
    constructor(props) {
      super(props);
      this.state = ({
        pairwiseSimilarities: [],
        ids: this.props.list,
        error: null,
        isLoaded: false,
      });
      console.log("constructor, props.list: " + this.props.list)
      this.pairwiseSimilarityAjax(this.props.list);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.list !== this.props.list) {
        this.state = ({
          ids: this.props.list
        });
        this.pairwiseSimilarityAjax(this.props.list);
      }
    } 

    pairwiseSimilarityAjax(ids) {
      const idsString = ids.join();
  
      const baseurl = '/api2/api/ontology/similarity/pairwise/internal/list?ids=' + idsString + '&size=100000';
      console.log('url: ' + baseurl);  
      fetch(baseurl, {
          method: 'GET',                        
      })
        .then(res => res.json())   
        .then(
          (result) => {                               
            this.setState({
              isLoaded: true,
              pairwiseSimilarities: result['_embedded']['similarities'],           
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

    render() {
        const {pairwiseSimilarities} = this.state;            
        const { classes } = this.props;

        const renderCharacteristics = (j, name) => {
          let percentValue = pairwiseSimilarities[j]['characteristics'][name]['percent'];
        
          return (
          <TreeItem
            classes={{ label: classes.label }}
            nodeId={name + j} 
            label={name + ', ' + parseFloat(percentValue).toFixed(2) + "%"}>
              {pairwiseSimilarities[j]['characteristics'][name]['list']
              .map((item, index) => (
                <TreeItem
                  classes={{ label: classes.labelList }}
                  nodeId={pairwiseSimilarities[j]['characteristics'][name]['list'][index] + index}
                  label={pairwiseSimilarities[j]['characteristics'][name]['list'][index]} />
              ))}
          </TreeItem>
          );
        };

      const renderPair = j => (
        <TreeItem 
          classes={{ label: classes.label }}
          nodeId={j} 
          label={pairwiseSimilarities[j].pair.first + '-' + pairwiseSimilarities[j].pair.second + 
          ', ' + parseFloat(pairwiseSimilarities[j].percentage).toFixed(2) + "%"}>
          { renderCharacteristics(j, 'property') } 
          { renderCharacteristics(j, 'class') }
          { renderCharacteristics(j, 'import') }
          { renderCharacteristics(j, 'namespace') }
          { renderCharacteristics(j, 'individual') }
          <PairwiseSimilarityBar pairwiseSimilarity={pairwiseSimilarities[j]}/>
        </TreeItem>
      );

      const renderTree = () => {
        const { error, isLoaded, pairwiseSimilarities, ids} = this.state;

        if (error) {
          return <div>Error: {error.message}</div>
        } 
        else if (!isLoaded) {
          return <div>Loading...</div>
        } else {
      
        if (pairwiseSimilarities.size > 0) {
          return (
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
                {pairwiseSimilarities.map((item, index) => (
                  renderPair(index)
                ))}
            </TreeView>
          )
          } else {
            return <div>No similarities found</div>
          }
        }
      }

      {return renderTree()}
    }
  }
 
export default withStyles(useStyles)(TreeList)