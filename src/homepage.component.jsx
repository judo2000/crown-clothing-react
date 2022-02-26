import React from "react";

import "./homepage.style.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <div className="title">Hats</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">JACKETS</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">SNEAKERS</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">WOMEN</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">MEN</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
