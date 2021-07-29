import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { StyledSignIn } from "./SignIn.styled";

export const SignIn = ({ signIn }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    signIn(credentials);
  };

  const { username, password } = credentials;
  return (
    <StyledSignIn>
      <h1>Welcome</h1>
      <form onSubmit={onSubmit}>
        <input value={username} onChange={onChange} name="username" />
        <input value={password} onChange={onChange} name="password" />
        <button>Sign In here</button>
      </form>
    </StyledSignIn>
  );
};

export default connect(null, null)(SignIn);
