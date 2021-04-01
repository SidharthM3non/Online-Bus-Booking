import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

const useStyles =((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

class AddBus extends Component {

    constructor(){
        super();
        this.busNumber = React.createRef();
        this.totalSeats = React.createRef();
        this.fare = React.createRef();
        this.state = {message: '', source: ''}
    }

    addBus(event){
        console.log('Booking ID', this.busNumber.current.value)
        console.log('Username', this.totalSeats.current.value)
        console.log('Bus Number', this.fare.current.value)
        event.preventDefault();

        this.props.onAddBus({id: 0, busNumber: this.busNumber.current.value, totalSeats: this.totalSeats.current.value, 
            fare: this.fare.current.value});

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

        // const [source, setSource] = React.useState('');

        return (
            <div>
                <br/>
                <form className={classes.root} noValidate autoComplete="off" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                    <TextField inputRef={this.busNumber} id="outlined-basic" style={{ margin: 8 }} label="Bus Number"
                     margin="normal" variant="outlined" />
                </form><br/>
                <form className={classes.root} noValidate autoComplete="off" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                    <TextField inputRef={this.totalSeats} id="outlined-basic" style={{ margin: 8 }} label="Total Seats"
                     margin="normal" variant="outlined" />
                </form><br/>
                <form className={classes.root} noValidate autoComplete="off" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                    <TextField inputRef={this.fare} id="outlined-basic" style={{ margin: 8 }} label="Bus Fare"
                     margin="normal" variant="outlined" />
                </form>
                <br/>        
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addBus.bind(this)}>Add Bus</Button>
                </div><br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Alert severity="success">{this.props.message}</Alert>
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
        onAddBus: (payload) => dispatch(actions.addBus(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddBus);
