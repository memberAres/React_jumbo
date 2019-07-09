import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ProfileCard from 'components/ProfileCard/index';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

class Privacy extends React.Component {
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
        <h1 className="text-primary">Privacy</h1>
        <div className="row">
          <div className="col-md-8 col-sm-7 col-12">
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                  you probably haven't heard of them accusamus labore sustainable VHS.</p>

          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;

