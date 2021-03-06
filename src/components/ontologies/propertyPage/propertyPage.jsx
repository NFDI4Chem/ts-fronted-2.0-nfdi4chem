import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import './propertyPage.css';


class PropertyPage extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            label_xs: 2,
            value_xs: 10,
        });
       
    }

    formatText(text, isLink=false){
        if (text == null || text == ''){
            return "null";
        }
        else if (isLink){
            return(<a href={text} target='_blank'>{text}</a>);
        }
        return text;
    }

    render(){
        return(
            <Grid container spacing={2}>
                <Grid item xs={12} spacing={4} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Label</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.label)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Short Form</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.short_form)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Description</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.description)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Definition</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.definition)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">IRI</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.iri, true)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Ontology</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.ontologyId)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Curation Status</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.curation_status)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Editor</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.editor)}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="property-page-row">
                    <Grid container>
                        <Grid item xs={this.state.label_xs}>
                            <Typography className="property-detail-label">Is Defined By</Typography>
                        </Grid>
                        <Grid item xs={this.state.value_xs} className="property-detail-value">
                            {this.formatText(this.props.property.isDefinedBy)}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }


}

export default PropertyPage;