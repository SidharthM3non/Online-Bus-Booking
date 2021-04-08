import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import * as actions from '../actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ViewBookings from './ViewBookings';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login() {
  const dispatch = useDispatch();
  const progress = useSelector(state=>state.progress);
  const users = useSelector(state=>state.users);
  const username = useRef();
  const password = useRef();
  const errorMessage = useSelector(state=>state.errorMessage);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    try {
    //   dispatch({type: "PROGRESS", payload: true})
      // dispatch({type: "LOGIN", payload: true})
      dispatch(actions.checkUser(username.current.value));
      // history.push("/home");
    } catch (errorm){
    }
  }
  console.log(users);
  if(users != undefined){
    history.push("/userhome/"+users);
  }
  return (
    <div>
      <Card bg='white' text='dark'>
        <Card.Body>
          <h2 className='text-center mb-4'>Log In</h2>
          {errorMessage && 
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
             <Alert severity="error">{errorMessage}</Alert>
            </Snackbar>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='username'>
              <Form.Label>
                <h5>Username</h5>
              </Form.Label>
              <Form.Control type='text' ref={username} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>
                <h5>Password</h5>
              </Form.Label>
              <Form.Control type='password' ref={password} required />
            </Form.Group>
            <Button className='w-100' type='submit' onClick={handleClick}>
              Log In
            </Button>
            
          </Form>
          <div className='w-100 text-center mt-2'>
            New user? <Link to='/usersignup'>Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}