/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { StyledImage } from "./Image.styled";

const Image = ({ url, size, logo }) => {
  return (
    <StyledImage url={url} size={size} logo={logo}>
      <figure></figure>
    </StyledImage>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
