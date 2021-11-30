import React, { useState } from "react";
import { connect } from "react-redux";
import MemberShow from "../MemberShow/MemberShow";
import './Account.css'
import AccountSidebar from "./AccountSidebar";
import { Box, CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";



const AccountContainer = () => {

  const [member, setMember] = useState("")
  
  const setMemberShow = (mid) => {
    setMember(mid)
  }
   
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AccountSidebar setMemberShow={setMemberShow} />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          {member != "" ? <MemberShow propMid={member} /> : null}
        </Box>
      </Box>
    </div>
  );
};


  
export default connect(null, null)(AccountContainer)














