import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core Home/components

import Parallax from 'Home/components/Parallax/Parallax.js';

import { Link } from 'react-router-dom';

const Cards = (prop) => {
  const { name, imageUrl } = prop;
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: '10%',
      border: '2px solid #73AD21',
      borderRadius: '10 px',
      transition: 'transform .3s',
      '&:hover': {
        transform: 'scale(1.15)',
      },
    },
    media: {
      height: 200,
    },
    content: {
      background: '#111',
      color: '#fff',
      margin: 'auto',
      textAlign: 'center',
    },
  });
  const classes = useStyles();
  // return (
  //   <Link to={'/' + name}>
  //     <Typography variant="h3">View actions</Typography>
  //   </Link>
  // );
};

export default function UserBody() {
  return (
    <div>
      <Parallax image={require('assets/img/banner_banner-02.png')}>
        <Container>
          <Row style={{alignItems:'center', justifyContent:'center'}}>
              {Cards({
                name: 'useractions',
              })}
          </Row>
        </Container>
      </Parallax>
    </div>
  );
}
