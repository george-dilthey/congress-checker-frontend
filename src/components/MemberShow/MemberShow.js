import React, { useEffect } from "react";
import { connect } from "react-redux";
import './MemberShow.css'
import { useParams } from "react-router";
import { getMember } from "../../redux/actionCreators";
import TwitterTimeline from "./TwitterTimeline";
import { Divider, Grid, Container, Avatar, Paper } from '@mui/material';


const MemberShow = ({ m, getMember }) => {
  
  const mid = useParams().mid
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
          <h1 className="name">{m.firstName} {m.middleName} {m.lastName}</h1>
      </div>
      <Divider variant="middle" sx={{ mb: 5 }} />


      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="space-evenly" alignItems="center">
          <Grid item xs={12} sm={6} md={3} >
            <Paper elevation={3} sx={{
                  p: 2,
                  bgcolor: '#D0F2FF',
                  textAlign: 'center'
                }}>
              <h1>{latestRole.stateName}</h1>
            </Paper>            
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Paper elevation={3} sx={{
                  p: 2,
                  bgcolor: '#D0F2FF',
                  textAlign: 'center'
                }}>
              <h1>{latestRole.stateName}</h1>
            </Paper>          
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Paper elevation={3} sx={{
                  p: 2,
                  bgcolor: '#D0F2FF',
                  textAlign: 'center'
                }}>
              <h1>{latestRole.stateName}</h1>
            </Paper>          
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Paper elevation={3} sx={{
                  p: 2,
                  bgcolor: '#D0F2FF',
                  textAlign: 'center'
                }}>
              <h1>{latestRole.stateName}</h1>
            </Paper>          
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