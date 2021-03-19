import React, { Component } from 'react'

export default class AddBooking extends Component {

    constructor(){
        super();
        this.bookingId = React.createRef();
        this.username = React.createRef();
        this.busNumber = React.createRef();
        this.source = React.createRef();
        this.destination = React.createRef();
        this.numberOfSeats = React.createRef();
        this.amountPaid = React.createRef();
        this.date = React.createRef();
        this.journeyStartTime = React.createRef();
        this.journeyEndTime = React.createRef();
        this.state = {message: ''}
    }

    addBooking(event){
        console.log('method for adding Booking', this.bookingId.current.value)
        console.log('method for adding Booking', this.username.current.value)
        console.log('method for adding Booking', this.busNumber.current.value)
        console.log('method for adding Booking', this.source.current.value)
        console.log('method for adding Booking', this.destination.current.value)
        console.log('method for adding Booking', this.numberOfSeats.current.value)
        console.log('method for adding Booking', this.amountPaid.current.value)
        console.log('method for adding Booking', this.date.current.value)
        console.log('method for adding Booking', this.journeyStartTime.current.value)
        console.log('method for adding Booking', this.journeyEndTime.current.value)
        event.preventDefault();

        const url = 'http://localhost:80/api/v1/bookings/';
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({bookingId: this.bookingId.current.value, username: this.username.current.value,
            busNumber: this.busNumber.current.value, source: this.source.current.value, destination: this.destination.current.value,
        numberOfSeats: this.numberOfSeats.current.value, amountPaid: this.amountPaid.current.value, date: this.date.current.value,
    journeyStartTime: this.journeyStartTime.current.value, journeyEndTime: this.journeyEndTime.current.value})})
        .then(response => {
            console.log(response.status);
            if(response.status === 201){
                this.setState({message: 'Booking inserted sucessfully!'})
            }
        })
        
    }

    render() {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Booking ID</span>
                </div>
                <input type="text" ref={this.bookingId} className="form-control" placeholder="Enter BookingID" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Username</span>
                </div>
                <input type="text" ref={this.username} className="form-control" placeholder="Enter Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">BusNumber</span>
                </div>
                <input type="text" ref={this.busNumber} className="form-control" placeholder="Enter Bus Number" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Source</span>
                </div>
                <input type="text" ref={this.source} className="form-control" placeholder="Enter Source" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Destination</span>
                </div>
                <input type="text" ref={this.destination} className="form-control" placeholder="Enter Destination" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Number of Seats</span>
                </div>
                <input type="text" ref={this.numberOfSeats} className="form-control" placeholder="Enter number of seats" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Amount Paid</span>
                </div>
                <input type="text" ref={this.amountPaid} className="form-control" placeholder="Enter amount paid" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Date</span>
                </div>
                <input type="text" ref={this.date} className="form-control" placeholder="Enter Date" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Journey Start Time</span>
                </div>
                <input type="text" ref={this.journeyStartTime} className="form-control" placeholder="Enter start time" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Jounrey End Time</span>
                </div>
                <input type="text" ref={this.journeyEndTime} className="form-control" placeholder="Enter end time" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>


                <button type="button" className="btn btn-primary" onClick={this.addBooking.bind(this)}>Add Booking</button>
            </div>
        )
    }
}
