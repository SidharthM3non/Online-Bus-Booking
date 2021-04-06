import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import * as actions from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const progress = useSelector(state=>state.progress);
  const login = useSelector(state=>state.login);
  const busOps = useSelector(state=>state.busOps);
  const username = useRef();
  const password = useRef();
  const errorMessage = useSelector(state=>state.errorMessage);
  const [error, setError] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch({type: "PROGRESS", payload: true})
      // dispatch({type: "LOGIN", payload: true})
      dispatch(actions.checkBusop(username.current.value));
      // history.push("/home");
    } catch (errorm){
      setError(errorm);
    }
  }
  console.log(progress);
  console.log(busOps);
  if(busOps != undefined){
    history.push("/home");
  }
  return (
    <div>
      <Card bg='white' text='dark'>
        <Card.Body>
          <h2 className='text-center mb-4'>Log In</h2>
          {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
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
            <Button className='w-100' type='submit'>
              Log In
            </Button>
          </Form>
          <div className='w-100 text-center mt-2'>
            New user? <Link to='/busopsignup'>Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}