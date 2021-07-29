import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNav } from "./Nav.styled";

const Nav = ({ toLoad, setToLoad }) => {
  return <StyledNav></StyledNav>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
