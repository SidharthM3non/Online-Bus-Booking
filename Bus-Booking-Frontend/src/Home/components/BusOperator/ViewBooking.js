import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = ({
    table: {
      minWidth: 650,
    },
  },
  (theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
  }));

 

class ViewBooking extends Component {

    constructor(){
        super();
        this.state = {bookings: [], message: '', left: false}
    }

    componentDidMount() {
        console.log('Initialization...')
        this.props.onFetchBookings()
    }
    deleteBooking(bookingId) {
        return this.props.onDeleteBooking(bookingId)
    }
    

    render() {

        const classes = useStyles;

        // const [state, setState] = React.useState({
        //     top: false,
        //     left: false,
        //     bottom: false,
        //     right: false,
        //   });

        var bookingList = this.props.bookings.map((booking, i)=>{
            return (        
                <TableRow key={i}>
                    <TableCell align="center">{booking.id}</TableCell>
                    <TableCell align="center"><Link to={"/detailview/" + booking.bookingId}>{booking.bookingId}</Link></TableCell>
                    <TableCell align="center">{booking.username}</TableCell>
                    <TableCell align="center">{booking.busNumber}</TableCell>
                    <TableCell align="center">{booking.source}</TableCell>
                    <TableCell align="center">{booking.destination}</TableCell>
                    <TableCell align="center">{booking.numberOfSeats}</TableCell>
                    <TableCell align="center">{booking.amountPaid}</TableCell>
                    <TableCell align="center"><Button variant="contained" color="secondary" className={classes.button}
                        startIcon={<DeleteIcon />} onClick={this.deleteBooking.bind(this, booking.bookingId)}>Delete</Button> &nbsp;
                    {/* <Link to={"/update/" + booking.bookingId}><Button variant="contained" color="primary">
                            Update</Button></Link></TableCell> */}
                            </TableCell>
                </TableRow>
            )
        })
        return (
            // <div className="row">
            //     <div className="alert alert-success" role="alert">
            //         {this.state.message}
            //     </div>
            //     <table className="table">
            //         <thead>
            //             <tr>
            //                 <th scope="col">id</th>
            //                 <th scope="col">BookingID</th>
            //                 <th scope="col">Username</th>
            //                 <th scope="col">BusNumber</th>
            //                 <th scope="col">Source</th>
            //                 <th scope="col">Destination</th>
            //                 <th scope="col">Number of Seats</th>
            //                 <th scope="col">Amount Paid</th>
            //                 {/* <th scope="col">Date</th>
            //                 <th scope="col">Start Time</th>
            //                 <th scope="col">End Time</th> */}
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {bookingList}
            //         </tbody>
            //     </table>
            // </div>
            <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">BookingID</TableCell>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">BusNumber</TableCell>
                            <TableCell align="center">Source</TableCell>
                            <TableCell align="center">Destination</TableCell>
                            <TableCell align="center">Number of Seats</TableCell>
                            <TableCell align="center">Amount Paid</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))} */}
                        {bookingList}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        bookings: state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchBookings: () => dispatch(actions.fetchBookings()), 
        onDeleteBooking: (bookingId) => dispatch(actions.deleteBooking(bookingId)) 
    }
}

// export default ViewBooking;
export default connect(mapStateToProps, mapDispatchToState)(ViewBooking);