/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyledPixelize } from "./Pixelize.styled";
import particleAlphabet from "./particleAlphabet";

const Image = ({ url, size, logo }) => {
  useEffect(() => {
    particleAlphabet.init();
  }, []);
  return (
    <StyledPixelize url={url} size={size} logo={logo}>
      <canvas></canvas>
    </StyledPixelize>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
