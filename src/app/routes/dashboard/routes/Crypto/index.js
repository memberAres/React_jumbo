import React from "react";
import TextField from '@material-ui/core/TextField';


import {Area, AreaChart, Line, LineChart, ResponsiveContainer} from "recharts";

import ChartCard from "./ChartCard";
import Portfolio from "./Portfolio";
import BalanceHistory from "./BalanceHistory";
import SendMoney from "./SendMoney";
import RewardCard from "./RewardCard";
import CurrencyCalculator from "./CurrencyCalculator";
import CryptoNews from "./CryptoNews";
import DownloadMobileApps from "./DownloadMobileApps";
import OrderHistory from "./OrderHistory";
import {increamentData, lineData} from "../Listing/mdata";
import ContainerHeader from "components/ContainerHeader/index";
import ContactCard from 'components/Cards/Contact/index';
import Button from '@material-ui/core/Button';
import IntlMessages from "util/IntlMessages";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom'
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


const Crypto = ({match}) => {
  return (
    <div className="dashboard animated slideInUpTiny animation-duration-3">

      <ContainerHeader match={match} title={<IntlMessages id="sidebar.dashboard.crypto"/>}/>
        
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="jr-card">
                <div className="jr-card-header d-flex">
                  <div className="mr-auto">
                    <h1 className ="text-primary">Search all courses in Australia.</h1>
                  </div>
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
                  <div className="col-lg-6 col-sm-6 col-12">
                      <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white">
                        <i className="zmdi zmdi-search zmdi-hc-fw "/>
                        <span>Search</span>
                      </Button>
                  </div>
                  
                <div className="row">
                
                  {/* {products.map((product, index) => <PopularProduct key={index} product={product}/>)} */}
                </div>
                {/* <span className="jr-link card-link text-uppercase">all
                  products</span> */}
              </div>
            </div>

            <div className="col-lg-5 col-sm-6 col-12">
              {/* <ContactCard/> */}
              <div className="jr-card p-0">
      <div className="jr-card-header card-img-top mb-0 p-4 bg-grey lighten-4">
        <h1 className="text-primary">Login</h1>
      </div>

      <div className="card-body">
        <div className="col-md-12 col-12">
            <TextField
              label="Username"
              placeholder="Username"
              margin="normal"
              fullWidth
            />
          </div>
          <div className="col-md-12 col-12">
            <TextField
              id="password"
              label={<IntlMessages id="appModule.password"/>}
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
            />
          </div>
          <div className="col-md-12 col-12">
              <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white btn-block ">
                <Link to="./crm" className="text-white">
                   Login
                </Link>
              </Button>

            <Button variant="contained" className="jr-btn jr-btn-lg bg-red lighten-1 text-white btn-block jr-btn">
              <i className="zmdi zmdi-google zmdi-hc-fw "/>
              <span>Login With Google+</span>
            </Button>

            <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white btn-block jr-btn">
              <i className="zmdi zmdi-facebook zmdi-hc-fw"/>
              <span>Login with Facebook</span>
            </Button>
            
              <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white btn-block">
              <Link to="./register" className="text-white">
                Register
                </Link>
              </Button>
          </div>
      </div>
    </div>
            </div>
    </div>
    </div>
  );
};

export default Crypto;
