import React, {  } from "react";
import { connect } from "react-redux";
import './Account.css'
import { Button } from "@mui/material";
import { updateChecklist } from "../../redux/actionCreators";
import { useNavigate } from "react-router";
import CheckIcon from '@mui/icons-material/Check';


const FollowButton = ({handleOpen, user, updateChecklist, member}) => {

  const navigate = useNavigate()
  const handleFollow = () => {
    updateChecklist({mid: member.mid, removeMember: false}, user.checklists[0].id)
    //navigate('/account')
  }
   
  return (
    <div>
      {user.email ? 
        user.checklists[0].members.map((m) => m.mid).includes(member.mid) ?
          <Button startIcon={<CheckIcon />} variant="contained" size="small" sx={{ m: 1, width: 150 }}>Followed</Button> : 
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
  
export default connect(mapStateToProps, {updateChecklist})(FollowButton)














