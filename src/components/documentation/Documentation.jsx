import { Component } from "react";
import React from "react";

class Documentation extends Component{
    render(){
        return(
            <div id="content">
              <div class="sect1">
              <h3 id="_about_the_terminology_service">How to use the NFDI4Chem Terminology website</h3>
                <div class="sectionbody">
                  <div class="paragraph">
                     <p>There are two main ways of browsing the Terminology Service. You can either browse the ontology list available via the ontology menu. You enter the ontology on top level and browse through the tree view to lower levels or you search by a specific term. For this you can use the search box to enter the term that you are looking for. The provided results show all ontologies where the term was found. By using the advanced search, you can further restrict the results to one or multiple ontologies or to a specific 'type'. These types can be class, property or individual. Futhermore, you can restrict searches to one or more ontology. No matter what way of browsing an ontology you choose, your search leads you to the view of a term.</p>
                  </div>
              <h3>How to use the NFDI4Chem Terminology Service's API</h3>
                <div class="paragraph">
                   <p><strong><a href="../docs/api">API documentation</a>:</strong><br/>
                     Documentation on how to use the Terminology Service&#8217;s REST API</p>
                   <p>Publicly available API commands can also be analyzed and executed from the <strong><a href="http://service.tib.eu/ts4tib/swagger-ui.html">Swagger Documentation</a></strong>. The underlying models can further be viewed through this documentation for a deeper understanding of the API commands.</p>
                </div>
                </div>
              </div>
            </div>
        );
    }
}
export default Documentation;