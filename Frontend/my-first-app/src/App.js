import AddBooking from './AddBooking';
import './App.css';
import UpdateBooking from './UpdateBooking';
import ViewBooking from './ViewBooking';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const courses = [
//   {title: "React", summary:"library from facebook..."},
//   {title: "Angular", summary: "framework from google..."},
//   {title: "EmberJS", summary: "framework another open source..."}
// ]

function App() {

  return (
    <Router>
    <div>
        <ul>
          <li>
            <Link to="/">View Booking</Link>
          </li>
          <li>
            <Link to="/add">Add Booking</Link>
          </li>
          <li>
            <Link to="/update">Update Booking</Link>
          </li>
        </ul>
        <hr/>
      <Switch>
          <Route exact path="/">
            <ViewBooking />
          </Route>
          <Route path="/add">
            <AddBooking />
          </Route>
          <Route path="/update">
            <UpdateBooking />
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
