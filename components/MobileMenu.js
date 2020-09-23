import React from "react";
import NavLinks from "./NavLinks";
import headerLogo from "../assets/img/logo.svg";

const MobileMenu = () => {
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        
        <div className="side-menu__top">
            <a href="/">
                    <img src={headerLogo} alt="newswap" style={{
                      height: 60
                    }}/>
                  </a>
            <a href="#" className="side-menu__toggler side-menu__close-btn">
            <i className="fa fa-window-close" style={{
              fontSize: 32,
            }}></i>
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <div className="side-menu__social">
            <a href="https://twitter.com/NewSwapOfficial">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://github.com/newswap">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
