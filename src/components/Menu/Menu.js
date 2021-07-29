/* eslint-disable no-unused-vars */
// Menu.js
import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div>
        <header>
          <h2>Dummy</h2>
        </header>
      </div>
      <div>
        <header>
          <h2>Dummy</h2>
        </header>
      </div>
      <div>
        <header>
          <h2>Dummy</h2>
        </header>
      </div>
    </StyledMenu>
  );
};
export default Menu;
