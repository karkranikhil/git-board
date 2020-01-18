import React from "react";
import "./style.css";

function ContactChip(props) {
  const { img_url, url, name } = props.data;
  return (
    <a className="chip" href={url} targe="_blank">
      <img src={img_url} alt="Person" width="96" height="96" /> {name}
    </a>
  );
}

export default ContactChip;
