import React from "react";
import Link from "next/link";
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
            <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL} >
              <a className="logo">
                <img src={headerLogo} alt="newswap" style={{
                  height: 60
                }}/>
              </a>
            </Link>
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
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL} >
              <a target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} >
              <a target="_blank">
              <i className="fa fa-github"></i>
              </a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL} >
              <a target="_blank">
              <i className="fa fa-telegram"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
