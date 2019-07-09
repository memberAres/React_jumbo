import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ProfileCard from 'components/ProfileCard';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

class Terms_conditions extends React.Component {
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
        <h1 className="text-primary">Terms and conditions</h1>
        <div className="row">
          <div className="col-md-8 col-sm-7 col-12">
                <p>This is for Terms and conditions</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Terms_conditions;

