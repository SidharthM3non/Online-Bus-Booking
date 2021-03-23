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
        this.state = {bookings: [], date: {}, journeyStartTime:{}, journeyEndTime:{}}
    }

    componentDidMount() {
        console.log('Initialization...')
        console.log('id', this.props.match.params.id);
        fetch('http://localhost:80/api/v1/bookings/' + this.props.match.params.id)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.setState({bookings:data, date:data, journeyStartTime:data, journeyEndTime:data});
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
                            <TableCell align="center">Date of Booking</TableCell>
                            <TableCell align="center">Journey Start Time</TableCell>
                            <TableCell align="center">Journey End Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
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