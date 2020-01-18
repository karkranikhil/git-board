import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

function Header() {
  let isHomePage = window.location.pathname === "/" ? true : false;
  return (
    <>
      {isHomePage ? (
        <div className="jumbotron">
          <div className="heading">git board</div>
          <div className="subHeading">
            A dashboard for top 100 repositories based on Github Stars
          </div>
        </div>
      ) : (
        <header>
          <Link to="/">git board</Link>
        </header>
      )}
    </>
  );
}

export default withRouter(Header);
