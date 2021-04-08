import Home from './Home/Home.js';
import UserHome from './Home/UserHome.js';
import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Link } from 'react-router-dom';
import Header from 'Home/components/Header/Header.js';
import HeaderLinks from 'Home/components/Header/HeaderLinks.js';
import ViewBooking from './Home/components/BusOperator/ViewBooking';
import Body from './Home/Body';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/components.js';
import classNames from 'classnames';
import DetailViewBooking from './Home/components/BusOperator/DetailViewBooking';
import AddBus from './Home/components/BusOperator/AddBus';
import DatedRouteRev from './Home/components/BusOperator/DatedRouteRev';
import Revenue from './Home/components/BusOperator/Revenue';
import MonthlyRev from './Home/components/BusOperator/MonthlyRev';
import RouteRev from './Home/components/BusOperator/RouteRev';
import YearlyRev from './Home/components/BusOperator/YearlyRev';
import BusOp from './Home/components/BusOperator/BusOp';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Footer from 'Home/components/Footer/Footer.js';
import BusOpSignIn from 'Home/components/BusOperator/BusOpSignIn.js';
import UserSignIn from 'Home/components/User/UserSignIn.js';
import UserLogin from 'Home/components/User/UserLogin.js';
import UserBody from 'Home/UserBody.js';
import ViewBookings from 'Home/components/User/ViewBookings.js';
import { useSelector } from 'react-redux';
import AddBooking from 'Home/components/User/AddBooking.js';
const useStyles = makeStyles(styles);

var hist = createBrowserHistory();

function App() {
  const classes = useStyles();

  const username = useSelector(state=>state.users);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const username = useSelector(state=>state.users);
  
  return (
    <Router history={hist}>
      <Header
        brand='Home'
        rightLinks={<HeaderLinks />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'white',
        }}
      />
      <Home />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Switch>
          <Route exact path="/" component={BusOp} />
          <Route exact path="/busopsignup" component={BusOpSignIn}/>
          <Route exact path="/home" component={Body} />
          <Route exact path="/userlogin" component={UserLogin} />    
          <Route exact path="/usersignup" component={UserSignIn}/>
          <Route exact path ={"/userhome/:username"} component={UserBody} />
          {/* Since this is a SPA and we have different Login pages leading to different views, must comment out the view not being used 
          during that particular demo      */}
          <div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>   
            <Paper square>
              <Tabs
                indicatorColor="primary"
                textColor="primary">
                <Tab label="View Booking" to="/viewbooking" component={Link} />
                <Tab label="Add Bus" to="/addbus" component={Link} />
                <Tab label="Revenue" to="/revenue" component={Link} />
              </Tabs>
            </Paper>
          </div>
          <Route path="/viewbooking">
            <ViewBooking />
          </Route>
          <Route path="/addbus">
            <AddBus />
          </Route>
          <Route path="/revenue">
            <Revenue />
          </Route>
          <Route path="/routerev">
            <RouteRev />
          </Route>
          <Route path="/datedrouterev">
            <DatedRouteRev />
          </Route>
          <Route path="/monthlyrouterev">
            <MonthlyRev />
          </Route>
          <Route path="/yearlyrevenue">
            <YearlyRev />
          </Route>
          <Route path="/detailview/:id" component={DetailViewBooking} />
          </div>
           {/* Since this is a SPA and we have different Login pages leading to different views, must comment out the view not being used 
          during that particular demo     */}
          {/* <div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>   
            <Paper square>
              <Tabs
                indicatorColor="primary"
                textColor="primary">
                <Tab label="View Bookings" to={"/viewbookings/"+username} component={Link} />
                <Tab label="Add Booking" to="/addbooking" component={Link} />
              </Tabs>
            </Paper>
          </div>
          <Route path={"/viewbookings/"+username}>
            <ViewBookings/>
          </Route>
          <Route path="/addbooking">
            <AddBooking />
          </Route>
          <Route path="/detailview/:id" component={DetailViewBooking} />    
          </div> */}
        </Switch>      
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
