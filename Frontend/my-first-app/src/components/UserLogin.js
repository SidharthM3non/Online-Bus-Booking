import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import {
    Link
  } from "react-router-dom";

class UserLogin extends Component {

    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {message: ''}
    }

    checkUser(event) {
        console.log('username', this.username.current.value);
        console.log('password', this.password.current.value);
        event.preventDefault();

        this.props.onCheckUser({id: 0, username: this.username.current.value, password: this.password.current.value});
        if(this.props.onCheckUser({username: this.username.current.value, password: this.password.current.value})){
            <Link to={"/viewbooking"}></Link>
        }
    }

    render() {
        return (
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>
                <Grid item xs={3}>
                <Card style={{height: 500, width:500, display: 'flex', justifyContent:'center', alignItems:'center'}} variant="outlined">
                <CardContent> 
                    <Typography variant="h2" color="textSecondary" gutterBottom style={{display: "flex", justifyContent:'center', alignItems:'middle'}}>
                                LOGIN</Typography><br />
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
                    <form noValidate autoComplete="off">
                    <TextField inputRef={this.username} required id="standard-required" label="Required" defaultValue="Username" />
                    </form>
                    </div>
                    <br/><br/>
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
                    <form noValidate autoComplete="off">
                    <TextField inputRef={this.password} required id="standard-password-input" type="password" label="Password"/>
                    </form>
                    </div><br/><br/>
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
                    {/* <Button color="primary" onClick={this.checkUser.bind(this)}>Login</Button><br /><br/> */}
                    <Link to={"/comp"}><Button color="primary">Login</Button></Link><br /><br/>
                    </div>
                </CardContent>
                </Card>
                </Grid>      
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onCheckUser: (username, password) => dispatch(actions.checkUser(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(UserLogin);