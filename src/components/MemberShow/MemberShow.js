import React, { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'

const MemberShow = ({ member }) => {
  
  
  useEffect(() => {
  })
  
  return (
    <div>
      This is my show page for {member.firstName}.
    </div>  
  );
};

export default connect(null, null)(MemberShow);