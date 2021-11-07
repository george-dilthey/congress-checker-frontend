import React, { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import { useParams } from "react-router";
import { getMember } from "../../redux/actionCreators";

const MemberShow = ({ getMember }) => {
  
  const congress = useParams().congress
  const memberId = useParams().memberId
  
  useEffect(() => {
    getMember(congress, memberId)
  })
  
  return (
    <div>
      This is my show page
    </div>  
  );
};

export default connect(null, { getMember })(MemberShow);