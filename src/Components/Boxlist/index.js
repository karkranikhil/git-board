import React from "react";
import "./style.css";

function Boxlist(props) {
  const { boxData } = props;
  return (
    <div className="row">
      {boxData.map(item => (
        <div className="col-12 col-md-6 col-lg-3" key={item.name}>
          <div className="box">
            <div className="left-section">
              <div className={`${item.className} icon-box`}>
                <i className={`fa ${item.icon}`} aria-hidden="true"></i>
              </div>
            </div>
            <div className="right-section">
              <div className="heading">{item.name}</div>
              <div className="count">
                {item.count ? item.count.toLocaleString("US") : item.count}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Boxlist;
