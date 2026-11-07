import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation, Trans, Translation } from "react-i18next";

const NavLinks = () => {
  // const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = (e) => {
    // setDropdownStatus(!dropdownStatus);
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  let { t, i18n } = useTranslation();
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href={process.env.NEXT_PUBLIC_NEWSWAP_APP_URL}>
          {t("global.exchange")}
        </Link>
      </li>

      <li href="#" className="dropdown">
        <>
          <a href="#" onClick={handleDropdownStatus}>
            {t("global.tokens")}
          </a>
          <i className="fa fa-angle-down"></i>
        </>
        <ul className="dropdown-list">
          <li>
            <Link href="/tokens/cross-chain-assets">
              {t("menu.cross-chain-assets")}
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={process.env.NEXT_PUBLIC_NEWSWAP_INFO_URL}>
          {t("global.analytics")}
        </Link>
      </li>
      <li className="dropdown">
        <>
          <a href="#" onClick={handleDropdownStatus}>
            {t("global.more")}
          </a>
          <i className="fa fa-angle-down"></i>
        </>
        <ul className="dropdown-list">
          <li>
            <Link href="/faq">{t("global.faq")}</Link>
          </li>
          <li>
            <Link href="/tools">{t("global.tools")}</Link>
          </li>
          <li>
            <Link href="/apply-listing">{t("global.apply listing")}</Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank">
              Twitter
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target="_blank">
              Telegram
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
              {t("global.github")}
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <a href="#" onClick={handleDropdownStatus}>
          🌐
        </a>
        <i className="fa fa-angle-down"></i>
        <ul className="dropdown-list langMenu">
          <li>
            <a href="#" onClick={() => i18n.changeLanguage("en")}>
              English
            </a>
          </li>
          <li>
            <a href="#" onClick={() => i18n.changeLanguage("zh")}>
              简体中文
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              href="#"
              onClick={() =>
                i18n.changeLanguage(i18n.language == "en" ? "zh" : "en")
              }
            >
              <span style={{ fontSize: 13, fontWeight: 400 }}>
                {i18n.language == "en" ? "🌐中文" : "🌐English"}
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
