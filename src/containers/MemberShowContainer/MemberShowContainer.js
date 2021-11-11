import React, { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShowContainer.css'
import { useParams } from "react-router";
import { getMember } from "../../redux/actionCreators";
import MemberShow from "../../components/MemberShow/MemberShow";

const MemberShowContainer = ({ getMember, member }) => {
  
  const congress = useParams().congress
  const memberId = useParams().memberId
  
  useEffect(() => {
    getMember(congress, memberId)
  }, [getMember, congress, memberId])
  
  return (
    <div>
      <MemberShow m = {member} />
    </div>  
  );
};

const mapStateToProps = state => {
  return {
    member: state.selectedMember
  };
};

export default connect(mapStateToProps, { getMember })(MemberShowContainer);