import AddBooking from './components/AddBooking';
import './App.css';
import UpdateBooking from './components/UpdateBooking';
import ViewBooking from './components/ViewBooking';
import User from './components/User';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailViewBooking from './DetailViewBooking';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UserSignIn from './components/UserSignIn';
import UserLogin from './components/UserLogin';
import AddBus from './components/AddBus';
import Revenue from './components/Revenue';
import RouteRev from './components/RouteRev';
import DatedRouteRev from './components/DatedRouteRev';
import MonthlyRev from './components/MonthlyRev';


// const courses = [
//   {title: "React", summary:"library from facebook..."},
//   {title: "Angular", summary: "framework from google..."},
//   {title: "EmberJS", summary: "framework another open source..."}
// ]



function App() {
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      
        {/* <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active">View Booking</Link>
          </li>
          <li className="nav-item">
          <Link to="/add" className="nav-link">Add Booking</Link>
          </li>
        </ul>
        <hr /> */}
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route path="/usersignin">
            <UserSignIn></UserSignIn>
          </Route>
          <Route path="/userlogin">
            <UserLogin></UserLogin>
          </Route>
          <div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}>
                <Tab label="View Booking" to="/viewbooking" component={Link} />
                {/* <Tab label="Add Booking" to="/add" component={Link} /> */}
                <Tab label="Add Bus" to="/addbus" component={Link} />
                <Tab label="Revenue" to="/revenue" component={Link} />
              </Tabs>
            </Paper>
          </div>
          <Route path="/viewbooking">
            <ViewBooking />
          </Route>
          <Route path="/add">
            <AddBooking />
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
          <Route path="/update/:id" component={UpdateBooking} />
          <Route path="/detailview/:id" component={DetailViewBooking} />
          </div>
        </Switch>
        
    </Router>
    
  );
}

export default App;
