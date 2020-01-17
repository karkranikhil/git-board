import React from "react";
import Boxlist from "../Boxlist/index";
import "./style.css";

function Box(props) {
  const {
    stargazers_count,
    watchers_count,
    forks_count,
    open_issues_count
  } = props.project;
  let boxData = [
    {
      name: "TOTAL STARS",
      className: "star",
      icon: "fa-star",
      count: stargazers_count
    },
    {
      name: "TOTAL FORKS",
      className: "fork",
      icon: "fa-code-fork",
      count: forks_count
    },
    {
      name: "TOTAL WATCHERS",
      className: "watch",
      icon: "fa-eye",
      count: watchers_count
    },
    {
      name: "TOTAL OPEN ISSUES",
      className: "issues",
      icon: "fa-exclamation-triangle",
      count: open_issues_count
    }
  ];
  return (
    <div>
      <Boxlist boxData={boxData} />
    </div>
  );
}

export default Box;
