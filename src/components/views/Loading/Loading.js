/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { StyledLoading } from "./Loading.styled";

export const Loading = () => {
  return <StyledLoading>Loading...</StyledLoading>;
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
