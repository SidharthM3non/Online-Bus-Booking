import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


const useStyles = ((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
        margin: theme.spacing(1),
    },
  }));

class MonthlyRev extends Component {

    constructor(){
        super();
        this.routeName = React.createRef();
        this.month = React.createRef();
        this.year = React.createRef();
        this.state = {message: '', revenue: 0};
    }

    fetchRouteRevenue(event){
        console.log(this.routeName.current.value);
        console.log(this.month.current.value);
        console.log(this.year.current.value);
        event.preventDefault();
        this.props.onFetchMonthlyRouteRevnue(this.routeName.current.value, this.month.current.value, this.year.current.value)
        // this.state.revenue = this.props.onFetchRouteRevnue(this.routeName.current.value)
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
                    <TextField inputRef={this.routeName} id="outlined-basic" label="Enter Route Name" InputLabelProps={{shrink:true}} variant="outlined" /><br/><br/><br/>
                    <TextField inputRef={this.month} id="outlined-basic" label="Enter Month" InputLabelProps={{shrink:true}} variant="outlined" /><br/><br/><br/>
                    <TextField inputRef={this.year} id="outlined-basic" label="Enter Year" InputLabelProps={{shrink:true}} variant="outlined" />
                    {/* <Input type="text" ref={this.date} placeholder="Enter Date" aria-label="Username" aria-describedby="basic-addon1"/> */}
                    {/* <input type="text" ref={this.date} placeholder="Enter Date" aria-label="Username" aria-describedby="basic-addon1"/> */}
                </form>
                </div>
                <br/>
                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Button variant="contained" color="primary" size="small" className={classes.button}
                    onClick={this.fetchRouteRevenue.bind(this)}>Search</Button></div>
                {this.state.revenue}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        message: state.message,
        // bookings: state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchMonthlyRouteRevnue: (routeName, month, year) => dispatch(actions.fetchMonthlyRouteRev(routeName, month, year))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(MonthlyRev);
