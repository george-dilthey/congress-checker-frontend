import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './Account.css'
import { Drawer, List, Divider, ListItemText, IconButton } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateChecklist } from "../../redux/actionCreators";



const AccountSidebar = ({setMemberShow, user, updateChecklist}) => {

  const [members, setMembers] = useState(user.checklists[0].members)
  const [selectedMember, setSelectedMember] = useState(members[0] !== undefined ? members[0].mid : "")

  useEffect(()=> {
    setMembers(user.checklists && user.checklists.length > 0 ? user.checklists[0].members : [])
    setMemberShow(members[0] !== undefined ? members[0].mid : "")
  }, [user, members])

  const handleListItemClick = (member) => {
    setSelectedMember(member);
    setMemberShow(member)
  };

  const handleRemove = (member) => {
    updateChecklist({mid: member.mid, removeMember: true}, user.checklists[0].id)
    setSelectedMember(members[0] !== undefined ? members[0].mid : "")
  }

  return (
    <div>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            mt: '52px',

          },
        }}
        variant="permanent"
        anchor="left"
      >
      <Divider />
      <List sx={{background: "white"}}>
        {members.map((m) => (
          <ListItemButton key={m.mid} onClick={(event) => handleListItemClick(m.mid)} selected={m.mid === selectedMember} >
            <ListItemText primary={`${m.firstName} ${m.lastName}`} /> 
            <IconButton aria-label="delete" onClick={(event) => handleRemove(m)}>
              <DeleteIcon />
            </IconButton>
          </ListItemButton>
        ))}
      </List>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
  
export default connect(mapStateToProps, {updateChecklist})(AccountSidebar)














