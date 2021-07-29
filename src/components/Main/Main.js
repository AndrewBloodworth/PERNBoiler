/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { StyledMain } from "./Main.styled";
import Routes from "../Routes/Routes";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Main = (props) => {
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
