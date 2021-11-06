import React from "react";
import { connect } from "react-redux";


const MemberMapCard = ({ hoveredStateName, members }) => {
   
  const member = members.filter(m => m.state_name === hoveredStateName) 

  return (
    <div>
      <h1>{member[0].first_name} {member[0].last_name}</h1>
      <h1>{member[1].first_name} {member[1].last_name}</h1>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      members: state.membersCard
    };
  };
  
  export default connect(mapStateToProps, null)(MemberMapCard);