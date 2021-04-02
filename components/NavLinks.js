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
          <a>{t("global.exchange")}</a>
        </Link>
      </li>

      <li className="dropdown">
        <Link href="#">
          <>
            <a href="#" onClick={handleDropdownStatus}>
              {t("global.mining")}
            </a>
            <i className="fa fa-angle-down"></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href={process.env.NEXT_PUBLIC_NEWSWAP_MINING_URL}>
              <a>{t("mining.nusdt mining")}</a>
            </Link>
          </li>
          <li>
            <Link
              href={
                process.env.NEXT_PUBLIC_NEWSWAP_MINING_URL + "/communityMining"
              }
            >
              <a>{t("mining.community mining")}</a>
            </Link>
          </li>
        </ul>
      </li>

      <li href="#" className="dropdown">
        <Link href="#">
          <>
            <a href="#" onClick={handleDropdownStatus}>
              {t("global.tokens")}
            </a>
            <i className="fa fa-angle-down"></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/tokens/cross-chain-assets">
              <a>{t("menu.cross-chain-assets")}</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="#">
          <a>{t("global.governance")}</a>
        </Link>
      </li>
      <li>
        <Link href={process.env.NEXT_PUBLIC_NEWSWAP_INFO_URL}>
          <a>{t("global.analytics")}</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a href="#" onClick={handleDropdownStatus}>
              {t("global.more")}
            </a>
            <i className="fa fa-angle-down"></i>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/updates">
              <a>{t("pages.updates")}</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>{t("global.faq")}</a>
            </Link>
          </li>
          <li>
            <Link href="/tools">
              <a>{t("global.tools")}</a>
            </Link>
          </li>
          <li>
            <Link href="/apply-listing">
              <a>{t("global.apply listing")}</a>
            </Link>
          </li>
          <li>
            <Link href="/apply-community-mining">
              <a>{t("global.apply community mining")}</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL}>
              <a target="_blank">Twitter</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_TELEGRAM_URL}>
              <a target="_blank">Telegram</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL}>
              <a target="_blank">{t("global.github")}</a>
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
