/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAuth, fetchToken } from "../../redux/auth";
import SignIn from "../SignIn/SignIn";
import { StyledPortal } from "./Portal.styled";

export const Portal = ({
  Component,
  props,
  auth,
  loggedIn,
  getAuth,
  getToken,
  preCheck,
}) => {
  useEffect(() => {
    getAuth();
  }, [loggedIn]);

  const signIn = async (credentials) => {
    getToken(credentials);
  };

  return (
    <StyledPortal>
      <main id="main-portal">
        {!preCheck ? (
          <h1>Loading...</h1>
        ) : !auth.id ? (
          <SignIn signIn={signIn} />
        ) : (
          <Component auth={auth} {...props} />
        )}
      </main>
    </StyledPortal>
  );
};

const mapStateToProps = (state) => {
  const { auth, loggedIn, preCheck } = state.auth;
  return {
    auth,
    loggedIn,
    preCheck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getToken: (credentials) => {
      return dispatch(fetchToken(credentials));
    },
    getAuth: () => {
      return dispatch(fetchAuth());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
