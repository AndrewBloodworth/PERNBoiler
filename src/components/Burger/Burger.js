import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <StyledBurger open={open} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
