/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StyledPixelize } from "./Pixelize.styled";
import particleAlphabet from "./particleAlphabet";

const Pixelize = () => {
  const [keyword, setKeyword] = useState(() => {});
  const [size, setSize] = useState({ width: 100, height: 100 });
  useEffect(() => {
    const { width, height } = size;
    setKeyword(particleAlphabet.init(width, height, 1, 0.1));
  }, []);
  return (
    <StyledPixelize size={size}>
      <input type="text" onChange={({ target }) => keyword(target.value)} />
      <canvas></canvas>
    </StyledPixelize>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pixelize);
