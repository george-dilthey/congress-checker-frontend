import React from "react";
import { connect } from "react-redux";
import MemberShow from "../MemberShow/MemberShow";
import './Account.css'



const AccountContainer = () => {
   
  
  return (
    <div>
      <MemberShow propMid="B001267" />
    </div>
  );
};


  
export default connect(null, null)(AccountContainer)














