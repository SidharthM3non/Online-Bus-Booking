import React, { Component } from 'react'

export default class UpdateBooking extends Component {

    constructor(){
        super();
        this.bookingId = React.createRef();
        this.date = React.createRef();
        this.state = {message: ''};
    }

    updateBookingDate(event){
        console.log('method for updating Booking date', this.bookingId.current.value);
        console.log('method for updating Booking date', this.date.current.value);
        event.preventDefault();

        const url = 'http://localhost:80/api/v1/bookings/update/' + this.bookingId.current.value + '/' + this.date.current.value;
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({bookingId: this.bookingId.current.value, date: this.date.current.value})})
            .then(response =>{
                console.log(response.status);
                if(response.status === 200){
                    this.setState({date: this.date.current.value})
                    this.setState({message: 'Booking updated sucessfully!'})
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
                    <span className="input-group-text" id="basic-addon1">Date</span>
                </div>
                <input type="text" ref={this.date} className="form-control" placeholder="Enter new Date" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <button type="button" className="btn btn-primary" onClick={this.updateBookingDate.bind(this)}>Update Booking</button>
            </div>
        )
    }
}
