import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
        this.state = {message: '', source: '', open: false}
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
        this.handleClick();

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

    handleClick = () => {
      this.setState({open: true})
    };

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }

      this.setState({open: false})
    };

    render() {

        const classes = useStyles;

        const handleSourceChange = (event) => {
            this.setState({source: event.target.value})
        };
        const handleDestinationChange = (event) => {
            this.setState({destination: event.target.value})
        };

        // const [source, setSource] = React.useState('');

        return (
            <div>
                <br/>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.bookingId} id="standard-full-width" style={{ margin: 8 }} label="Booking ID"
                    fullWidth margin="normal" variant="outlined" />
                </form><br/>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.username} id="standard-full-width" style={{ margin: 8 }} label="Username"
                    fullWidth margin="normal" variant="outlined" />
                </form><br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.busNumber} id="margin-normal" className={classes.textField} label="Bus Number"
                    margin="normal" variant="outlined" style={{margin:8}}/>
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.numberOfSeats} id="outlined-basic" label="Number of Seats" variant="outlined" 
                    style={{margin: 8}}/>
                </form>
                <br/>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.amountPaid} InputProps={{startAdornment: (<InputAdornment position="start">₹</InputAdornment>)}}
                     id="outlined-basic" label="Amount Paid" variant="outlined" style={{margin: 8}}/>
                </form>
                <br/>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField type="date" inputRef={this.date} id="outlined-basic" label="Date" InputLabelProps={{shrink:true}} variant="outlined" style={{margin:8}}/>
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField type="time" inputRef={this.journeyStartTime} id="outlined-basic" label="Start Time" InputLabelProps={{shrink:true}} variant="outlined" style={{margin:8}} />
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField type="time" inputRef={this.journeyEndTime} id="outlined-basic" label="End Time" InputLabelProps={{shrink:true}} variant="outlined" style={{margin:8}}/>
                </form>
                </div><br/>
                <div style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                margin: 8
              }}>
                <FormControl fullWidth variant="outlined" id="margin-normal" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Source</InputLabel>
                  <Select inputRef = {this.source} labelId="emo-simple-select-outlined-label" value={this.state.source} label="Source" id="demo-simple-select-outlined" 
                    onChange={handleSourceChange} style={{minWidth: 120, marginRight:8, marginLeft:8}}>
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'C'}>C</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Destination</InputLabel>
                  <Select inputRef = {this.destination} labelId="emo-simple-select-outlined-label" value={this.state.destination} label="Destination" id="demo-simple-select-outlined" 
                    onChange={handleDestinationChange} style={{minWidth: 120, marginRight:8, marginLeft:8}}>
                    <MenuItem value={'B'}>B</MenuItem>
                    <MenuItem value={'D'}>D</MenuItem>
                  </Select>
                </FormControl>
                </div>
                <br/>
                <br/>      
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addBooking.bind(this)}>Add</Button>
                </div><br/><br/>
                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                    {this.props.message}
                </Alert>
                </Snackbar>
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
