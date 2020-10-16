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
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      mobileMenu();
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".side-menu__toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector(".side-menu__block")
          .classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay",
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".side-menu__block")
          .classList.remove("active");
        e.preventDefault();
      });
    });
  };

  return (
    <header className={`header ${props.extraClassName}`}>
      <div
        className={`main-header ${
          sticky === true ? "sticky fadeInDown" : " "
        }`}
      >
        <div className="main-menu-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-8 col-8">
                <div className="logo">
                  <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL}>
                    <a>
                      <img
                        src={headerLogo}
                        alt="newswap"
                        style={{
                          height: 50,
                        }}
                      />
                    </a>
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
