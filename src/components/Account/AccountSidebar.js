import React from "react";
import { connect } from "react-redux";
import MemberShow from "../MemberShow/MemberShow";
import './Account.css'
import { Drawer, Toolbar, Divider, List, ListItem, ListItemText } from "@mui/material";



const AccountSidebar = () => {
   
  
  return (
    <div>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            mt: '7vh',

          },
        }}
        variant="permanent"
        anchor="left"
      >
      <Divider />
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      <Divider />
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </Drawer>
    </div>
  );
};


  
export default connect(null, null)(AccountSidebar)














