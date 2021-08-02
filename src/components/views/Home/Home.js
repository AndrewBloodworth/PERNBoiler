/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { resetToken } from "../../../redux/auth";
import Pixelize from "../../utils/Pixelize/Pixelize";
import { StyledHome } from "./Home.styled";

export const Home = ({ auth, logout, open }) => {
  return (
    <StyledHome open={open}>
      <header>
        <h1>{auth.username}</h1>
        <button onClick={() => logout()}>Logout</button>
      </header>
      <Pixelize
        {...{
          username: `${auth.username}`,
          width: 1150,
          height: 400,
          radius: 3,
          speed: 0.01,
        }}
      />
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
