import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/vendor/modal-video.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/vendor/swiper-bundle.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/custom.css";
import { restoreBrowserLanguage } from "../components/i18n.js";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(restoreBrowserLanguage, []);
  return <Component {...pageProps} />;
}
