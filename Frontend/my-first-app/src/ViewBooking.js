import React, { Component } from 'react'

const booking = [];

export default class ViewEmployee extends Component {

    constructor(){
        super();
        this.state = {bookings: [], message: ''}
    }

    componentDidMount() {
        console.log('Initialization...')
        fetch('http://localhost:80/api/v1/bookings/')
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.setState({bookings:data})
                }
            );
    }
    
    deleteBooking(bookingId){
        console.log('Deleting booking ...' , bookingId)
        const url = 'http://localhost:80/api/v1/bookings/' + bookingId
        fetch(url, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(
            data => {
                console.log(data)
                this.setState({bookings:data.bookings, message:data.text})
            }
        );
    }

    render() {

        var bookingList = this.state.bookings.map((booking, i)=>{
            return (
                <tr key={i}>
                    <td>{booking.id}</td>
                    <td>{booking.bookingId}</td>
                    <td>{booking.username}</td>
                    <td>{booking.busNumber}</td>
                    <td>{booking.source}</td>
                    <td>{booking.destination}</td>
                    <td>{booking.numberOfSeats}</td>
                    <td>{booking.amountPaid}</td>
                    <td>{booking.date}</td>
                    <td>{booking.journeyStartTime}</td>
                    <td>{booking.journeyEndTime}</td>
                    <td><button type="button" className="btn btn-danger" onClick={this.deleteBooking.bind(this, booking.bookingId)}> X </button></td>
                </tr>
            )
        })
        return (
            <div className="row">
                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">BookingID</th>
                            <th scope="col">Username</th>
                            <th scope="col">BusNumber</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Number of Seats</th>
                            <th scope="col">Amount Paid</th>
                            <th scope="col">Date</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingList}
                    </tbody>
                </table>
            </div>
        )
    }
}