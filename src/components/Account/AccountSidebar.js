import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './Account.css'
import { Drawer, List, Divider, ListItemText } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import { hideLoader, showLoader } from "../../loader";

const AccountSidebar = ({setMemberShow, user}) => {

  const [members, setMembers] = useState(user.checklists[0].members)
  const [selectedMember, setSelectedMember] = useState("")

  useEffect(()=> {
    showLoader()


    setMembers(user.checklists && user.checklists.length > 0 ? user.checklists[0].members : [])
    setMemberShow(members[0] !== undefined ? members[0].mid : "")
    setSelectedMember(members[0] !== undefined ? members[0].mid : "");

    hideLoader()
  }, [user, members])

  const handleListItemClick = (member) => {
    setSelectedMember(member);
    setMemberShow(member)
  };

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
  
export default connect(mapStateToProps, null)(AccountSidebar)














