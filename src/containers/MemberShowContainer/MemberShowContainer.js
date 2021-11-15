import React, { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShowContainer.css'
import { useParams } from "react-router";
import { getMember } from "../../redux/actionCreators";
import MemberShow from "../../components/MemberShow/MemberShow";

const MemberShowContainer = ({ getMember, member }) => {
  

  const mid = useParams().mid
  
  useEffect(() => {
    getMember(mid)
  }, [getMember, mid])
  
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