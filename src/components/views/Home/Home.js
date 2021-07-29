/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { resetToken } from "../../../redux/auth";
import { StyledHome } from "./Home.styled";

export const Home = ({ auth, logout, open }) => {
  return (
    <StyledHome open={open}>
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
