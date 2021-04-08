import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import Typography from '@material-ui/core/Typography';

function UserBody() {
  let { username } = useParams();
  return (
    <div>
      <div style={{display: "flex", alignItems:'center', justifyContent:'center'}}>
        <h2 >What would you like to do today?</h2>
      </div>
      <div style={{display: "flex", alignItems:'center', justifyContent:'center'}}>
        <Link to={'/useractions/'+username}>
          <Typography variant="h6">View User actions</Typography>
        </Link>
      </div>
    </div>
  );
}

export default UserBody;
