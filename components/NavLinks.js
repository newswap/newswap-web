import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  // const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = (e) => {
    // setDropdownStatus(!dropdownStatus);
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="#">
          <a href="#">Exchange</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a href="#">Farm</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a href="#">Tokens</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="#">
              <a href="#">NUSD: NewUSD</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a href="#">NST: NewSwap Token</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a href="#">NSP: NewSwap Power</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="#">
          <a href="#">Governance</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a href="#">Analytics</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a href="#">More</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="#">
              <a href="#">About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a href="#">FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a href="#">Downloads</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a href="#">Apply Listing</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a href="#">Github</a>
            </Link>
          </li>
        </ul>
      </li>
      <li></li>

    </ul>
  );
};

export default NavLinks;
