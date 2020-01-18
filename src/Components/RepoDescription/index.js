import React from "react";
import "./style.css";

function RepoDescription(props) {
  console.log(props.result)
  const {
    name,
    owner: { login, avatar_url },
    description,
    url,
    updated_at,
    license
  } = props.result;
  return (
    <div className="row">
      <div className="col-12">
        <div className="section section-blue-bgcolor">
          <div className="d-flex padding-1rem">
            <div className="col-12 col-md-3">
              <img src={avatar_url} alt={login} className="avatar" />
            </div>
            <div className="col-12 col-md-9">
              <div className="d-flex details">
                <div className="col-12 repo-name-heading">{name}</div>
                <div className="col-12">
                  <strong>Owner: </strong>
                  {login}
                </div>
                <div className="col-12">
                  <strong>Description: </strong>
                  {description}
                </div>
                <div className="col-12">
                  <strong>Last updated: </strong>
                  {updated_at
                    .substr(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
                </div>
                <div className="col-12">
                  <strong>license: </strong>
                  {license.name}
                </div>
                <div className="col-12">
                  <strong>URL: </strong>
                  <a href={url} target="_blank">
                    {url}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoDescription;
