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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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
        this.state = {bookings: [], message: '', left: false, open: false}
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
              <React.Fragment>  
                <TableRow key={i}>
                    <TableCell component="th" scope="row" align="center">{booking.id}</TableCell>
                    {/* <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => this.setState({open: !this.state.open})}>
                            {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell> */}
                    <TableCell align="center"><Link to={"/detailview/" + booking.bookingId}>{booking.bookingId}</Link></TableCell>
                    <TableCell align="center"><Button variant="contained" color="secondary" className={classes.button}
                        startIcon={<DeleteIcon />} onClick={this.deleteBooking.bind(this, booking.bookingId)}>Delete</Button> &nbsp;
                        </TableCell>
                    {/* <Link to={"/update/" + booking.bookingId}><Button variant="contained" color="primary">
                            Update</Button></Link></TableCell> */}
                            {/* </TableCell> */}
                </TableRow>
                </React.Fragment>             
            )
        })
        return (
            <div>
            <TableContainer component={Paper} style={{alignItems:'center', justifyContent:'center', display:'flex'}}>
                <Table className={classes.table} aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">BookingID</TableCell>
                            {/* <TableCell align="center">Username</TableCell>
                            <TableCell align="center">BusNumber</TableCell>
                            <TableCell align="center">Source</TableCell>
                            <TableCell align="center">Destination</TableCell>
                            <TableCell align="center">Number of Seats</TableCell>
                            <TableCell align="center">Amount Paid</TableCell> */}
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
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