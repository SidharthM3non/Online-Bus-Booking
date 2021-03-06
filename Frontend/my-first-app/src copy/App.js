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
import DetailViewBooking from './DetailViewBooking';

// const courses = [
//   {title: "React", summary:"library from facebook..."},
//   {title: "Angular", summary: "framework from google..."},
//   {title: "EmberJS", summary: "framework another open source..."}
// ]

function App() {

  return (
    <Router>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active">View Booking</Link>
          </li>
          <li className="nav-item">
          <Link to="/add" className="nav-link">Add Booking</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <ViewBooking />
          </Route>
          <Route path="/add">
            <AddBooking />
          </Route>
          <Route path="/update/:id" component={UpdateBooking} />
          <Route path="/detailview/:id" component={DetailViewBooking} />
        </Switch>
    </Router>
  );
}

export default App;
