import React from "react";
import { connect } from "react-redux";
import MemberShow from "../MemberShow/MemberShow";
import './Account.css'
import AccountSidebar from "./AccountSidebar";
import { Box, CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";



const AccountContainer = () => {
   
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AccountSidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <MemberShow propMid="B001267" />
        </Box>
      </Box>
    </div>
  );
};


  
export default connect(null, null)(AccountContainer)














