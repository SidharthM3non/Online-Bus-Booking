import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/UserAction'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

class AddFeedback extends Component {

    constructor(){
        super();
        this.username = React.createRef();
        this.comment = React.createRef();
        this.rating = React.createRef();
        this.routeName = React.createRef();
        this.state = {message: '', open: false, value: 0}
    }

    addFeedback(event){
        console.log('username', this.props.match.params.username)
        console.log('comment', this.comment.current.value)
        console.log('rating', this.rating.current.value)
        console.log('route name', this.routeName.current.value)
        event.preventDefault();

        this.props.onAddFeedback({id: 0, username: this.props.match.params.username, comment: this.comment.current.value,
            rating: this.rating.current.value, routeName: this.routeName.current.value});
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

    setValue = (event) => {
        this.setState({value: event})
    }

    render() {

        const classes = useStyles;

        // const [source, setSource] = React.useState('');

        return (
            <div>
                <br/>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="filled-basic" value={this.props.match.params.username} style={{ margin: 8 }} label="Username" variant="outlined" disabled />
                </form><br/>
                </div><div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.comment} id="outlined-basic" style={{ margin: 8 }} label="Comment" variant="outlined" />
                </form><br/>
                </div>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rating</Typography>
                    <input name="rating" type="number" value={this.state.value} ref={this.rating} hidden readOnly/>
                   <Rating style={{color: "green"}} name="simple-controlled" value={this.state.value} size="large" onChange={(event, newValue) => {this.setValue(newValue);}}/>
                </Box>
                </form><br/></div>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.routeName} id="outlined-basic" label="Route Name" variant="outlined" 
                    style={{margin: 8}}/>
                </form>
                <br/>
                <br/>
                </div>      
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={this.addFeedback.bind(this)}>Submit Feedback</Button>
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
        onAddFeedback: (payload) => dispatch(actions.addFeedback(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddFeedback);
