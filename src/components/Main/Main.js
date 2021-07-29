/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { StyledMain } from "./Main.styled";
import Routes from "../routes/Routes";
import Nav from "../interface/Nav/Nav";
import Burger from "../utils/Burger/Burger";
import Menu from "../views/Menu/Menu";
import Footer from "../interface/Footer/Footer";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledMain>
      <main>
        <Nav />
        <Burger open={open} setOpen={setOpen} />
        <Router>
          <div>
            <Menu open={open} />
            <section>
              <Routes open={open} />
            </section>
            <Footer />
          </div>
        </Router>
      </main>
    </StyledMain>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
