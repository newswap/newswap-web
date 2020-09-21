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
          <a>Exchange</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Farm</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>Tokens</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="#">
              <a>NUSD: NewUSD</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>NST: NewSwap Token</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>NSP: NewSwap Power</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="#">
          <a>Governance</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Analytics</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>More</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>Downloads</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>Apply Listing</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>Github</a>
            </Link>
          </li>
        </ul>
      </li>
      <li></li>

    </ul>
  );
};

export default NavLinks;
