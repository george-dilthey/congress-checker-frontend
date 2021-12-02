import React, { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import { useParams } from "react-router";
import { getMember } from "../../redux/actionCreators";
import TwitterTimeline from "./TwitterTimeline";
import { Divider, Grid, Container, Avatar } from '@mui/material';
import Stat from "./Stat";
import Bills from "./Bills";
import AuthModal from "../Auth/AuthModal";


const MemberShow = ({ m, getMember, propMid }) => {
  
  const mid = useParams().mid || propMid
  const latestRole = m.roles[0]

  
  useEffect(() => {
    getMember(mid)
  }, [getMember, mid])
   
  return (
    <div>
      <div className="header"> 
      </div>
        <Avatar
          alt={`${m.firstName} ${m.lastName}`}
          src={m.image450x550}
          sx={{ width: 200, height: 200, margin: "auto", transform: "translate(0, -50%)", boxShadow: "0 5px 15px -8px black"}}
        />
      <div className="header-text">
          <h4 className="title">{latestRole.title}</h4>
          <h2 className="name">{m.firstName} {m.middleName} {m.lastName}</h2>
          <AuthModal member= {m} />
      </div>
      
      <Divider variant="middle" sx={{ mb: 5 }} />
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="space-evenly" alignItems="center">
          <Grid item xs={12} sm={6} md={3} >
            <Stat stat={latestRole.stateName} statText={'State'} bgcolor='#D0F2FF' />           
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Stat stat={latestRole.billsSponsored} statText={'Bills Sponsored'} bgcolor='#C8FACD'  />           
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Stat stat={latestRole.votesWithPartyPct + '%'} statText={'Votes With Party'} bgcolor='#FFF7CD'  />           
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Stat stat={latestRole.missedVotes} statText={'Missed Votes'} bgcolor='#FFE7D9' />           
          </Grid>

          <Grid item xs={12} md={6} lg={6} >
            <Bills bills={m.bills} bgcolor='#FFE7D9' />         
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TwitterTimeline handle={m.twitterAccount} />
          </Grid>
          
        </Grid>
      </Container>    

    </div>
  );
};

const mapStateToProps = state => {
  return {
    m: state.selectedMember
  };
};

export default connect(mapStateToProps, { getMember })(MemberShow);