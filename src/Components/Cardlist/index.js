import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

function Cardlist(props) {
  const { repo, match, history } = props;
  const { owner, name, description, full_name } = repo;
  return (
    <div
      className="col-12 col-md-6 col-lg-3 margin-bottom-2rem"
      onClick={() => history.push(`${match.url}dashboard/${full_name}`)}
    >
      <div className="card">
        <img src={owner.avatar_url} alt="hey" className="thumb" />
        <article>
          <h1>{name}</h1>
          <span>{description}</span>
        </article>
      </div>
    </div>
  );
}

export default withRouter(Cardlist);
