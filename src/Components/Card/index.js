import React from "react";
import Cardlist from "../Cardlist/index";
import "./style.css";

function Card(props) {
  console.log(props.match);
  const { reposList } = props;
  return (
    <div className="row">
      {reposList.map((item, index) => (
        <Cardlist repo={item} index={index} key={item.id} />
      ))}
    </div>
  );
}

export default Card;
