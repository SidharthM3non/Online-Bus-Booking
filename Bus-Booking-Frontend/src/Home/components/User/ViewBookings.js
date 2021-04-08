import React, { useEffect  } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/UserAction';
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
import { withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

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

function ViewBooking(){

    // constructor(props){
    //     super(props);
    //     // this.username = React.createRef();
    //     this.state = {userBookings: [], message: '', left: false, open: false}
    // }

    // componentDidMount() {
    //     console.log('Initialization...')
    //     // console.log(this.props.match.params.username)
    //     console.log(this.state.username);
    //     // this.props.onFetchBookings(this.props.match.params.id)
    // }
    const userBookings = useSelector(state=>state.userBookings);
    const username = useSelector(state=>state.users);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("I have been mounted")
        console.log(username);
        dispatch(actions.fetchBookings(username))
      }, [])


        const classes = useStyles;

        // const [state, setState] = React.useState({
        //     top: false,
        //     left: false,
        //     bottom: false,
        //     right: false,
        //   });

        var bookingList = userBookings.map((booking, i)=>{
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
                    {/* <TableCell align="center"><Button variant="contained" color="secondary" className={classes.button}
                        startIcon={<DeleteIcon />} onClick={this.deleteBooking.bind(this, booking.bookingId)}>Delete</Button> &nbsp; */}
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


const mapStateToProps = (state) => {

    return {
        username: state.users,
        userBookings: state.userBookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchBookings: (username) => dispatch(actions.fetchBookings(username))
    }
}

// export default ViewBooking;
export default withRouter(connect(mapStateToProps, mapDispatchToState)(ViewBooking));