import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
    Link
  } from "react-router-dom";

const useStyles = ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class User extends Component {

    constructor() {
        super();
    }

    render() {

        const classes = useStyles;

        return(
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>
                <Grid item xs={3}>
                <Card style={{height: 500, width:500, display: 'flex', justifyContent:'center', alignItems:'center'}} variant="outlined">
                <CardContent> 
                    <Typography variant="h2" color="textSecondary" gutterBottom style={{display: "flex", justifyContent:'center', alignItems:'middle'}}>
                                Hello User</Typography><br />
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
                    <Link to={"/usersignin"}><Button variant="outlined" color="primary">
                                    Sign In</Button></Link></div><br/><br/>
                    <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
                    <Link to={"/userlogin"}><Button variant="contained" color="primary" style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
                                    Log In</Button></Link></div><br/>
                </CardContent>
                </Card>
                </Grid>      
            </Grid>
        )
    }
}
export default User;