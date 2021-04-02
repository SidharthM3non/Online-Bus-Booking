import React, { Component } from 'react'
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
  });

export default class DetailViewBooking extends Component {

    constructor(){
        super();
        this.state = {bookings: [], username: {}, busNumber: {}, source: {}, destination: {}, numberOfSeats: {}, 
        amountPaid: {}, date: {}, journeyStartTime:{}, journeyEndTime:{}}
    }

    componentDidMount() {
        console.log('Initialization...')
        console.log('id', this.props.match.params.id);
        fetch('http://localhost:80/api/v1/bookings/' + this.props.match.params.id)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.setState({bookings:data, username:data, busNumber:data, source:data, destination:data, numberOfSeats:data,
                        amountPaid:data, date:data, journeyStartTime:data, journeyEndTime:data});
                }
            );
    }

    render() {

        return (
            <div>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <h2>Detail View Of Booking</h2></div>
                <h4>BookingID: {this.state.bookings.bookingId}</h4>
                <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">BusNumber</TableCell>
                            <TableCell align="center">Source</TableCell>
                            <TableCell align="center">Destination</TableCell>
                            <TableCell align="center">Number of Seats</TableCell>
                            <TableCell align="center">Amount Paid</TableCell>
                            <TableCell align="center">Date of Booking</TableCell>
                            <TableCell align="center">Journey Start Time</TableCell>
                            <TableCell align="center">Journey End Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{this.state.bookings.username}</TableCell>
                            <TableCell align="center">{this.state.bookings.busNumber}</TableCell>
                            <TableCell align="center">{this.state.bookings.source}</TableCell>
                            <TableCell align="center">{this.state.bookings.destination}</TableCell>
                            <TableCell align="center">{this.state.bookings.numberOfSeats}</TableCell>
                            <TableCell align="center">{this.state.bookings.amountPaid}</TableCell>
                            <TableCell align="center">{this.state.bookings.date}</TableCell>
                            <TableCell align="center">{this.state.bookings.journeyStartTime}</TableCell>
                            <TableCell align="center">{this.state.bookings.journeyEndTime}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        )
    }
}