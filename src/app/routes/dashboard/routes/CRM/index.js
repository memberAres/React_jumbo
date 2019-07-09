import React from "react";
import TaskList from "./TaskList";
import SiteVisit from "./SiteVisit";
import RecentActivity from "./RecentActivity";
import TicketList from "./TicketList";
import TaskByStatus from "./TaskByStatus";
import WelComeCard from "./WelComeCard";
import Overview from "./Overview";
import SiteAudience from "./SiteAudience";
import TotalRevenueCard from "./TotalRevenueCard";
import NewCustomers from "./NewCustomers";
import GrowthCard from "./GrowthCard";
import IconWithTextCard from "./IconWithTextCard";
import Widget from "components/Widget/index";
import {detailCards, recentActivity} from "./data";
import CurrencyCalculator from "../Crypto/CurrencyCalculator";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import productData from "app/routes/eCommerce/routes/productData";
import CourseList from "./CourseList";

const CRM = ({match}) => {
  return (

    <div className="dashboard animated slideInUpTiny animation-duration-3">

      <ContainerHeader match={match} title={<IntlMessages id="SEARCH"/>}/>
      <div>
      <div className="mr-auto">
                    <h1 className ="text-primary">Search Filters</h1>
                  </div>
              <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Course level</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Location state</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Location Cities/Suburbs</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Location</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Duel qualification</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Broad education field</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Narrow education field</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Detail education field</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Duration</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Estimated Tuition fee</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Institution</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Institution size</InputLabel>
                      <Select>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
              </div>
              <div>
                  <div className="mr-auto">
                    <h1 className ="text-primary">Search Results</h1>
                  </div>
                  <div className="animated slideInUpTiny animation-duration-3">
                    <List>
                      {productData.map((product, index) => (
                        <CourseList key={index} product={product}/>
                      ))}
                    </List>
                  </div>
              </div>
    </div>
  );
};

export default CRM;
