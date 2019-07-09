import React from "react";
import {Area, AreaChart, ResponsiveContainer} from "recharts";
import ChartCard from "./ChartCard";
import UserImages from "./UserImages";
import RecentActivity from "../CRM/RecentActivity";
import CurrentPlan from "./CurrentPlan";
import DealsClosedCard from "./DealsClosedCard";
import PropertiesCard from "./PropertiesCard";
import Widget from "components/Widget/index";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";

import {increamentData} from "./mdata";
import {recentActivity} from "../CRM/data";


const Listing = ({match}) => {
  return (

    <div className="dashboard animated slideInUpTiny animation-duration-3">

      <ContainerHeader match={match} title={<IntlMessages id="sidebar.dashboard.listing"/>}/>
      sdfsdfdsf
    </div>
  );
};

export default Listing;
