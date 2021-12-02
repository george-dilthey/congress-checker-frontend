import React, { useState } from "react";
import { connect } from "react-redux";
import './Account.css'
import { Button } from "@mui/material";
import { addMemberToChecklist } from "../../redux/actionCreators";



const FollowButton = ({handleOpen, user, addMemberToChecklist, member}) => {

  const handleFollow = () => {
    addMemberToChecklist({mid: member.mid}, user.checklists[0].id)
  }
   
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
  
export default connect(mapStateToProps, {addMemberToChecklist})(FollowButton)














