import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ProfileCard from 'components/ProfileCard/index';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

class FAQ extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const {expanded} = this.state;
    return (
      <div className=" animated slideInUpTiny animation-duration-3">
        <ContainerHeader title={<IntlMessages id="sidebar.extraPages.faq"/>} match={this.props.match}/>
        <h1 className="text-primary">Freuently Asked Questions</h1>
        <div className="row">
          <div className="col-md-8 col-sm-7 col-12">

            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
               Q1.How is my application assessed?
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>Using WP Age Gate Pro is pretty straight forward. There is an easy to use
                  interface given under settings to apply all the settings and integrate it with
                  WooCommerce products &amp; categories easily You can find a quick How to video
                  about this here which explains all the setings.</p>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                Q2.How long will it take to process my application?
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                  you probably haven't heard of them accusamus labore sustainable VHS.</p>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
               Q3.How much does it cost to apply?
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.</p>
              </ExpansionPanelDetails>

            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                Q4.What if i need help?
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                  you probably haven't heard of them accusamus labore sustainable VHS.</p>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                Q5.Do i need a Visa to apply?
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.</p>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                Q6.What is it like to study in Australia?
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.</p>
              </ExpansionPanelDetails>
            </ExpansionPanel>

          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;

