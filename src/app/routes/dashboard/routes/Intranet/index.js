import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import MonthlyRevenue from 'components/dashboard/Intranet/MonthlyRevenue';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer} from 'recharts';
import {connections, expanseData1} from '../data';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import UserProfileCard from 'components/dashboard/Common/userProfileCard/UserProfileCard';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import PhotoCollage from 'components/dashboard/Common/PhotoCollage/index';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import RecentActivities from 'components/dashboard/Common/RecentActivities/index';
import {
  announcementsNotification,
  appNotification,
  chartData,
  dailyFeedData,
  marketingData,
  products,
  projects,
  recentList,
  todoData,
  weeklyData
} from './data';

import ProjectsList from 'components/dashboard/Intranet/ProjectsList';
import YourDailyFeed from 'components/dashboard/Common/DailyFeed/index';
import TimerView from 'components/dashboard/Common/TimerView/index';
import ContactCard from 'components/Cards/Contact/index';
import PopularProduct from 'components/dashboard/Common/PopularProduct';
import ContainerHeader from 'components/ContainerHeader/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import CardMenu from 'components/dashboard/Common/CardMenu';
import IntlMessages from 'util/IntlMessages';
import WeeklyList from "components/dashboard/Intranet/WeeklyList";
import Statistics from "components/dashboard/default/Statistics";
import CardBox from "components/CardBox/index";
import SiteVisitor from "components/dashboard/Common/SiteVisitor";
import MapWithASearchBox from "../../../map/routes/MapWithSearchBox/Components/MapWithASearchBox";
import SimpleToDo from 'components/ToDoCard/index';


class Intranet extends React.Component {

  onOptionMenuSelect = event => {
    this.setState({menuState: true, anchorEl: event.currentTarget});
  };
  handleRequestClose = () => {
    this.setState({menuState: false});
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
    }
  }

  render() {
    const {anchorEl, menuState} = this.state;
    return (
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard.intranet"/>}/>
        <div className="jr-card p-0 col-md-12">
        <div className="card-body text-primary">
          <div className=" col-md-12 col-12">  
              <div className="row">
                <p className="col-md-1"></p>
                <p className="col-md-10">
                  Australian Courses is an organization establited to facilites the progress of applying for education  in Australia for international students.
                  We help students find,plan and apply for the best education option in Australia.Students can Search the Australian Course website accross all Australian
                  courses by type,field,provider,duration,cost and/or location.
                </p>
              </div>
              <div className="row">
                <p className="col-md-1"></p>
                <p className="col-md-10">
                  The online application is designed to simplify the application process by allowing Students to apply for up to 5 courses (in order to preference) with a single application.
                  In enables to students to manage their supporting documents and monitor all courses they applied for in one place.
                </p>
              </div>
          </div>
           <div className="row col-md-12 col-12">
             <div className="col-md-1">
                {/* sdfsdfdsfds */}
             </div>
             <div className='col-md-4'>
               <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white btn-block ">
                  <Link to="/app/dashboard/terms_conditions" className="text-white">Terms and Conditions</Link>
                </Button>
                <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white btn-block jr-btn">
                  {/* <span>Privacy Policy</span> */}
                  <Link to="/app/dashboard/privacy" className="text-white">Privacy Policy</Link>
                </Button>
                
              </div>
          </div>
      </div>
        </div>

      </div>
    );
  }
}

export default Intranet;