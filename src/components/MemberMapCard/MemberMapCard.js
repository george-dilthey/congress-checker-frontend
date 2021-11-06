import React from "react";
import { connect } from "react-redux";
import './MemberMapCard.css'


const MemberMapCard = ({ hoveredStateName, members }) => {
   
  const member = members.filter(m => m.state_name === hoveredStateName) 
  
  return (
    <div>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={member[0].image_225x275}></img>
            <h4>{member[0].short_title} {member[0].first_name} {member[0].last_name} ({member[0].party})</h4>
            </div>
          </div>
        <div class="column">
          <div class="card">
            <img src={member[1].image_225x275}></img>
            <h4>{member[1].short_title} {member[1].first_name} {member[1].last_name} ({member[1].party})</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      members: state.membersCard
    };
  };
  
  export default connect(mapStateToProps, null)(MemberMapCard);