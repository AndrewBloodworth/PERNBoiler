/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { StyledMain } from "./Main.styled";
import Routes from "../Routes/Routes";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Main = (props) => {
  return (
    <StyledMain>
      <main>
        <Nav />
        <Router>
          <div>
            <section>
              <Routes />
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
