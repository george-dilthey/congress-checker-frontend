import React, { useState } from "react";
import { connect } from "react-redux";
import './Account.css'
import { Button } from "@mui/material";



const FollowButton = ({handleOpen, user}) => {

  const handleFollow = () => console.log('hi')
   
  return (
    <div>
      {user.email ? 
        <Button onClick={handleFollow} variant="outlined" size="small" sx={{ m: 1, width: 150 }}>Follow</Button> : 
        <Button onClick={handleOpen} variant="outlined" size="small" sx={{ m: 1, width: 150 }}>Follow</Button>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
  
export default connect(mapStateToProps, null)(FollowButton)














