/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { StyledNav } from "./Nav.styled";
import Image from "../ImageComponent";

const Nav = () => {
  return (
    <StyledNav>
      <Image
        url={"/dummy_logo.png"}
        size={{ height: "80px", width: "120px" }}
        logo={true}
      />
    </StyledNav>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
