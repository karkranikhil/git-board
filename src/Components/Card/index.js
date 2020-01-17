import React from "react";
import { withRouter } from "react-router-dom";
import Cardlist from "../Cardlist/index";
import "./style.css";

function Card(props) {
  console.log(props.match);
  const { reposList, history, match } = props;
  return (
    <div className="row">
      {reposList.map((item, index) => (
        <Cardlist repo={item} index={index} key={item.id} />
      ))}
    </div>
  );
}

export default withRouter(Card);
