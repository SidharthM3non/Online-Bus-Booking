import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

const useStyles =((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
}));

class AddBooking extends Component {

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
        console.log('Booking ID', this.bookingId.current.value)
        console.log('Username', this.username.current.value)
        console.log('Bus Number', this.busNumber.current.value)
        console.log('Source', this.source.current.value)
        console.log('Destination', this.destination.current.value)
        console.log('Number of seats', this.numberOfSeats.current.value)
        console.log('Amount Paid', this.amountPaid.current.value)
        console.log('Date', this.date.current.value)
        console.log('Start time', this.journeyStartTime.current.value)
        console.log('End time', this.journeyEndTime.current.value)
        event.preventDefault();

        this.props.onAddBooking({id: 0, bookingId: this.bookingId.current.value, username: this.username.current.value, busNumber: this.busNumber.current.value,
        source: this.source.current.value, destination: this.destination.current.value, numberOfSeats: this.numberOfSeats.current.value,
    amountPaid: this.amountPaid.current.value, date: this.date.current.value, journeyStartTime: this.journeyStartTime.current.value,
journeyEndTime: this.journeyEndTime.current.value});

    //     const url = 'http://localhost:80/api/v1/bookings/';
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({bookingId: this.bookingId.current.value, username: this.username.current.value,
    //         busNumber: this.busNumber.current.value, source: this.source.current.value, destination: this.destination.current.value,
    //     numberOfSeats: this.numberOfSeats.current.value, amountPaid: this.amountPaid.current.value, date: this.date.current.value,
    // journeyStartTime: this.journeyStartTime.current.value, journeyEndTime: this.journeyEndTime.current.value})})
    //     .then(response => {
    //         console.log(response.status);
    //         if(response.status === 201){
    //             this.setState({message: 'Booking inserted sucessfully!'})
    //         }
    //     })
        
    }

    render() {

        const classes = useStyles;
        return (
            <div>
                {/* <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div> */}
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.bookingId} id="outlined-basic" label="Enter Booking ID" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.username} id="outlined-basic" label="Enter Username" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.busNumber} id="outlined-basic" label="Enter Bus Number" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.source} id="outlined-basic" label="Enter Source" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.destination} id="outlined-basic" label="Enter Destination" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.numberOfSeats} id="outlined-basic" label="Enter Number of Seats" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.amountPaid} id="outlined-basic" label="Enter Amount Paid" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.date} id="outlined-basic" label="Enter Date" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.journeyStartTime} id="outlined-basic" label="Enter Start Time" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.journeyEndTime} id="outlined-basic" label="Enter End Time" variant="outlined" />
                </form>
                </div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addBooking.bind(this)}>Add</Button>
                </div><br/>
                <div>
                    {this.state.message}
                </div>
            </div>
        )
    }
}

// export default AddBooking;

const mapStateToProps = (state) => {
    return {
        message: state.message,
        // bookings: state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddBooking: (payload) => dispatch(actions.addBooking(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddBooking);
