/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StyledPixelize } from "./Pixelize.styled";
import particleAlphabet from "./particleAlphabet";

const Pixelize = ({ username, width, height, radius, speed }) => {
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    if (!keyword) {
      const keyword = particleAlphabet.init(width, height, radius, speed);
      setKeyword(keyword);
    } else {
      keyword(username);
    }
  }, [keyword]);
  return (
    <StyledPixelize size={{ width, height }}>
      <canvas></canvas>
    </StyledPixelize>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pixelize);
