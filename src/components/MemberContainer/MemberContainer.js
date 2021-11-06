import React from "react";
import { connect } from "react-redux";
import './MemberContainer.css'
import MemberCard from "../MemberCard/MemberCard";


const MemberContainer = ({ hoveredStateName, members }) => {
   
  const memberCards = members.filter(m => m.stateName === hoveredStateName && m.inOffice === "t") 
  
  return (
    <div>
      <div className="row">
        {memberCards.map(m =>
          <MemberCard member={m} key={m.memberId}></MemberCard>
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