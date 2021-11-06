import React from "react";
import { connect } from "react-redux";
import './MemberContainer.css'
import MemberCard from "../MemberCard/MemberCard";


const MemberContainer = ({ hoveredStateName, members }) => {
   
  const memberCards = members.filter(m => m.state_name === hoveredStateName && m.in_office === "t") 
  
  return (
    <div>
      <div className="row">
        {memberCards.map(m =>
          <MemberCard member={m}></MemberCard>
        )}  
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      members: state.membersCard
    };
  };
  
  export default connect(mapStateToProps, null)(MemberContainer);