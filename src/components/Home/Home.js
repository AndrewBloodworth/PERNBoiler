import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { resetToken } from "../../redux/auth";
import { StyledHome } from "./Home.styled";
import axios from "axios";
import SignIn from "../SignIn/SignIn";

export const Home = ({ auth, logout }) => {
  return (
    <StyledHome>
      Welcome {auth.username}
      <button onClick={() => logout()}>Logout</button>
    </StyledHome>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state.auth;
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      return dispatch(resetToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
