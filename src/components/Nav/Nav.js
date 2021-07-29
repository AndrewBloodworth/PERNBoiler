/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { StyledNav } from "./Nav.styled";

const Nav = () => {
  return <StyledNav></StyledNav>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
