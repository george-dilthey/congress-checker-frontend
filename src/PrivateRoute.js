import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children, user }) => {
  const auth = user.email
  return auth ? children : <Navigate to="/signin" />;
}

const mapStateToProps = (state) => ({user: state.user})


export default connect(mapStateToProps, null)(PrivateRoute);