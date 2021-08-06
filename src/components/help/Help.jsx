import { Component } from "react";
import React from "react";
import './Help.css'

class Help extends Component{
    render(){
        return(
            <div id="content">
            <h4>Help</h4>
            <div class="paragraph">
              <p>For feedback, enquiries or suggestion about NFDI4Chem Terminology Service or to request a new ontology please contact our NFDI4Chem helpdesk.</p>
            </div>
            <div class="paragraph">
              <p>For announcements relating to our NFDI4Chem project such as new services or events, please sign up to our <a href="https://lists.nfdi.de/postorius/lists/nfdi4chem-announce.lists.nfdi.de/">NFDI4Chem newsletter</a></p>
            </div>
            <div class="paragraph">
              <p>Looking for additional information or help on research data management, data repositories or electronic lab notebooks (ELN) for chemistry? Visit our <a href="https://nfdi4chem.de/">NFDI4Chem Website</a></p>
            </div>
            <h4 id="How-to-get-in-touch">NFDI4Chem Helpdesk</h4>
            <div class="paragraph">
              <p>Either send an email to <a href="mailto:helpdesk@nfdi4chem.de">helpdesk@nfdi4chem.de</a> or use the Helpdesk <a href="https://nfdi4chem.de/index.php/helpdesk/">contact form</a></p>
            </div>
          </div>
        );
    }
}
export default Help;