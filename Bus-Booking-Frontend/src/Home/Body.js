import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function Body() {
  return (
    <div>
      <div style={{display: "flex", alignItems:'center', justifyContent:'center'}}>
        <h2 >What would you like to do today?</h2>
      </div>
      <div style={{display: "flex", alignItems:'center', justifyContent:'center'}}>
        <Link to={'/actions'}>
          <Typography variant="h6">View Bus Operator actions</Typography>
        </Link>
      </div>
    </div>
  );
}

export default Body;
