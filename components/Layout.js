import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Layout = (props) => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  var pageDescription =
    "NewSwap is a Decentralized Exchange Protocol on NewChain. EVERYONE IS ABLE TO ISSUE AND TRADE DIGITAL ASSETS. NewSwap 是牛顿公链上的去中心化交换协议，人人都可以发行、交易数字资产。";

  if (props.pageDescription == "" || props.pageDescription == null) {
    // use default
  } else {
    pageDescription = props.pageDescription;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.pageTitle}</title>
        <meta name="description" content={pageDescription}></meta>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://newswap.org/favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          margin: 0,
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <img src="/thumbnail.jpg" />
      </div>
      <div className="page-wrapper" id="wrapper">
        {props.children}
      </div>
      {scrollTop === true ? (
        <div className="back-to-top show" style={{ cursor: "pointer" }}>
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="fa fa-chevron-up"></i>
          </ScrollLink>
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
