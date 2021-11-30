import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MemberShow from "../MemberShow/MemberShow";
import './Account.css'
import { Drawer, Toolbar, Divider, List, ListItem, ListItemText } from "@mui/material";



const AccountSidebar = ({user}) => {

  const [members, setMembers] = useState([])

  useEffect(()=> {
    setMembers(user.checklists[0].members)
  }, [user])

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
        {members.map((m, index) => (
          <ListItem button key={m.mid}>
            <ListItemText primary={`${m.firstName} ${m.lastName}`} />
          </ListItem>
        ))}
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














