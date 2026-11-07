import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

import headerLogo from "../assets/img/logo.svg";

const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    const toggle = document.querySelector(".side-menu__toggler");
    const menu = document.querySelector(".side-menu__block");
    const closers = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay",
    );
    const openMenu = (event) => {
      event.preventDefault();
      menu?.classList.toggle("active");
    };
    const closeMenu = (event) => {
      event.preventDefault();
      menu?.classList.remove("active");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    toggle?.addEventListener("click", openMenu);
    closers.forEach((closer) => closer.addEventListener("click", closeMenu));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      toggle?.removeEventListener("click", openMenu);
      closers.forEach((closer) =>
        closer.removeEventListener("click", closeMenu),
      );
    };
  }, []);

  return (
    <header className={`header ${props.extraClassName}`}>
      <div
        className={`main-header ${sticky === true ? "sticky fadeInDown" : " "}`}
      >
        <div className="main-menu-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-8 col-8">
                <div className="logo">
                  <Link href="/">
                    <img
                      src={headerLogo}
                      alt="newswap"
                      style={{
                        height: 50,
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-4 col-4">
                <div className="menu--inner-area clearfix">
                  <div className="menu-wraper">
                    <nav>
                      <div className="header-menu">
                        <div
                          id="menu-button"
                          className="menu-opened side-menu__toggler"
                        >
                          <i className="fa fa-bars"></i>
                        </div>
                        <NavLinks />
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
