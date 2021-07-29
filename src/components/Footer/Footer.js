import React, { useState } from "react";
import { connect } from "react-redux";
import { StyledFooter } from "./Footer.styled";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div>© 2021 Andrew Bloodworth BoilerPlate.</div>
    </StyledFooter>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
