import React from 'react';
import Grid from '@material-ui/core/Grid';
import TreeView from '@material-ui/lab/TreeView';
import StyledTreeItem from './widgets/styledTreeItem';
import { MinusSquare } from './widgets/icons';
import { PlusSquare } from './widgets/icons';
import { CloseSquare } from './widgets/icons';
import PropertyPage from '../propertyPage/propertyPage';


class PropertyTree extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            rootPops: this.props.rootProps,
            expandedNodes: [],
            treeData: this.props.rootProps,
            visitedNodes: [],
            currentExpandedTerm: '',
            currentClickedTerm: '',
            selectedProperty: '',
            showPropertyDetailPage: false
        });
    }


    /**
     * Fetch call for getting childrens of a property
     * @param {*} link 
     * @returns 
     */
     getChildrenAjax(link){
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ childrenLink: link })
        };
       return fetch('/propertychildren', requestOptions);
            
    }

    /**
     * Construct the classes(terms) tree
     * @param {*} nodes 
     * @returns 
     */
     createTree = (nodes) => {
        return nodes.map((el) => {
            return (
              <StyledTreeItem key={el.id} nodeId={el.short_form} label={el.label} className="tree-element" 
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}>
                {Array.isArray(el.children) && el.children.length > 0
                  ? this.createTree(el.children) 
                  : el.has_children}
              </StyledTreeItem>
            );
          });
    };


    /** 
     * Expand a node on the tree
     * @param {*} node 
     * @param {*} shortForm 
     * @param {*} expanded 
     */
   updateNodeInTree(node, shortForm, expanded) {
        if (node.short_form === shortForm && node.has_children) {
            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ childrenLink: node.childrenLink })
            };
            fetch('/propertychildren', requestOptions)
            .then(response => response.json())
            .then((data) => {
                node.children = data;
                this.setState({
                    expandedNodes:expanded,
                    currentExpandedTerm:node,
                });
            });
            
            
        } else if (node.has_children) {
            for (let i = 0; i < node.children.length; i++) {
                this.updateNodeInTree(node.children[i], shortForm, expanded);
            }
        }
    }

    /**
     * handle toggle node on the tree. calls node expansion
     * @param {*} e 
     * @param {*} value 
     */
     handleChange = (e, value) => {
        let vNodes = this.state.visitedNodes;
        if (!vNodes.includes(value[0])){
            vNodes.push(value[0]);
            let tree = this.state.treeData;
            for(let i=0; i<tree.length; i++){
                this.updateNodeInTree(tree[i], value[0], value);
                this.setState({
                    treeData: tree,
                });
            }
        }
        this.setState({
            visitedNodes: vNodes,
        }); 
        
    }

    /**
     * find the selected node on the tree. Used in term detail component
     * @param {*} node 
     * @param {*} shortForm 
     */
     findSelectedProperty(node, shortForm){
        if (node.short_form === shortForm) {
            this.setState({
                selectedProperty: node,
                showPropertyDetailPage: true
            });
        } 
        else if (node.has_children) {
            for (let i = 0; i < node.children.length; i++) {
                this.findSelectedProperty(node.children[i], shortForm);
            }
        }
      }

      /**
     * Event handler for selecting a node in a tree
     * @param {*} e 
     * @param {*} value 
     */
    handleSelect = (e, value) => {
        let tree = this.state.treeData;
        for(let i=0; i<tree.length; i++){
            this.findSelectedProperty(tree[i], value);
        }
    }

    render(){
        return(
            <Grid container spacing={4} id="term-view-container">
                <Grid item xs={5} id="terms-tree-container">
                    <TreeView
                        defaultCollapseIcon={<MinusSquare />}
                        defaultExpandIcon={<PlusSquare />}
                        defaultEndIcon={<CloseSquare />}
                        expanded={this.state.expandedNodes}
                        onNodeToggle={this.handleChange}
                        onNodeSelect={this.handleSelect}

                    >
                        {this.createTree(this.state.treeData)}
                    </TreeView>
                </Grid>
                {this.state.showPropertyDetailPage && <Grid item xs={7}>
                    <PropertyPage
                        property={this.state.selectedProperty}
                     />
                </Grid>}
                
            </Grid>
        ); 
    }

}

export default PropertyTree;