import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/UserAction';
import { Form, Button, Card } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import {
    Link
  } from "react-router-dom";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class UserSignIn extends Component {

    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {message: '', open: false}
    }

    addUser(event) {
        console.log('Method to add user; username', this.username.current.value);
        console.log('Method to add user; password', this.password.current.value);
        event.preventDefault();

        this.props.onAddUser({id:0, username: this.username.current.value, password: this.password.current.value});
        this.handleClick();
    }

    handleClick = () => {
        this.setState({open: true})
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({open:false});
      };

    render() {
        return (
            // <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>
            //     <Grid item xs={3}>
            //     <Card style={{height: 500, width:500, display: 'flex', justifyContent:'center', alignItems:'center'}} variant="outlined">
            //     <CardContent> 
            //         <Typography variant="h2" color="textSecondary" gutterBottom style={{display: "flex", justifyContent:'center', alignItems:'middle'}}>
            //                     Enter Details</Typography><br />
            //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
            //         <form noValidate autoComplete="off">
            //         <TextField inputRef={this.username} required id="standard-required" label="Required" defaultValue="Username" />
            //         </form>
            //         </div>
            //         <br/><br/>
            //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
            //         <form noValidate autoComplete="off">
            //         <TextField inputRef={this.password} required id="standard-password-input" type="password" label="Password"/>
            //         </form>
            //         </div><br/><br/>
            //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
            //         <Button color="primary" onClick={this.addBusop.bind(this)}>Save User</Button><br /><br/></div>
            //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
            //         <Alert severity="success">{this.props.message}</Alert>
            //         </div>
            //         <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
            //         <Link to="/"><Button color="primary">Back to Login</Button></Link><br /><br/>
            //         </div>
            //     </CardContent>
            //     </Card>
            //     </Grid>      
            // </Grid>
            <Card bg='white' text='dark'>
                <Card.Body>
                    <h2 className='text-center mb-4'>User Sign Up</h2>
                    <Form>
                        <Form.Group id='username'>
                            <Form.Label>
                                <h5>Username</h5>
                            </Form.Label>
                            <Form.Control type='text' ref={this.username} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>
                                <h5>Password</h5>
                            </Form.Label>
                            <Form.Control type='password' ref={this.password} required />
                        </Form.Group>
                        <Button className='w-100' type='submit' onClick={this.addUser.bind(this)}>
                            Sign Up
            </Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        <Link to="/userlogin">Back to Login </Link>
                    </div>
                    {this.props.message && 
                        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity="success">{this.props.message}</Alert>
                        </Snackbar>}
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(UserSignIn);