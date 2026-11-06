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
          <Link href="/">
            <img
              src={headerLogo}
              alt="newswap"
              style={{
                height: 60,
              }}
            />
          </Link>
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <i
              className="fa fa-window-close"
              style={{
                fontSize: 32,
              }}
            ></i>
          </a>
        </div>
        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <div className="side-menu__social">
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
              <i className="fa fa-github"></i>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target="_blank">
              <i className="fa fa-telegram"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
